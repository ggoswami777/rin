import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { githubApp } from './lib/octokit'
import { registerPRWebhook } from './webhooks/pullRequests'
import { registerInstallationWebhook } from './webhooks/installation'
import { startReviewWorker } from './workers/reviewWorker'

const app = new Hono()

// Register webhooks
registerPRWebhook()
registerInstallationWebhook()

// Start BullMQ worker
startReviewWorker()

// Health check
app.get('/health', (c) => c.json({ status: 'ok' }))

// GitHub webhook endpoint
app.post('/webhooks/github', async (c) => {
  const payload = await c.req.text()
  const signature = c.req.header('x-hub-signature-256') || ''
  const event = c.req.header('x-github-event') || ''
  const id = c.req.header('x-github-delivery') || ''

  try {
    await githubApp.webhooks.receive({
      id,
      name: event as any,
      payload: JSON.parse(payload),
    })
    return c.json({ ok: true })
  } catch (err) {
    console.error('Webhook error:', err)
    return c.json({ error: 'Invalid webhook' }, 400)
  }
})

// Apply Fix endpoint
app.post('/apply-fix', async (c) => {
  const { 
    repoName, 
    prNumber, 
    filePath, 
    fix, 
    installationId 
  } = await c.req.json()

  const installation = await import('@rin/database').then(
    m => m.prisma.installation.findUnique({
      where: { id: installationId }
    })
  )
  
  if (!installation) {
    return c.json({ error: 'Installation not found' }, 404)
  }

  const octokit = await githubApp.getInstallationOctokit(
    Number(installation.githubInstallationId)
  )

  const [owner, repo] = repoName.split('/')

  // Get current file content
  const { data: fileData } = await octokit.rest.repos.getContent({
    owner, repo, path: filePath
  })

  if (!('content' in fileData)) {
    return c.json({ error: 'File not found' }, 404)
  }

  // Create a new branch
  const branchName = `rin/fix-${Date.now()}`
  
  const { data: refData } = await octokit.rest.git.getRef({
    owner, repo, ref: 'heads/main'
  })

  await octokit.rest.git.createRef({
    owner, repo,
    ref: `refs/heads/${branchName}`,
    sha: refData.object.sha
  })

  // Update file with fix
  await octokit.rest.repos.createOrUpdateFileContents({
    owner, repo,
    path: filePath,
    message: `fix: apply Rin suggestion for PR #${prNumber}`,
    content: Buffer.from(fix).toString('base64'),
    sha: fileData.sha,
    branch: branchName,
  })

  // Create PR
  const { data: pr } = await octokit.rest.pulls.create({
    owner, repo,
    title: `[Rin] Fix for PR #${prNumber}`,
    head: branchName,
    base: 'main',
    body: `Automated fix applied by Rin AI Code Reviewer.`,
  })

  return c.json({ prUrl: pr.html_url })
})

const PORT = Number(process.env.PORT) || 3001

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`Rin GitHub App running on port ${PORT}`)
})