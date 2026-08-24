import { Worker } from 'bullmq'
import { connection } from '../lib/redis'
import { githubApp } from '../lib/octokit'
import { generateReview } from '@rin/ai'
import { decryptApiKey } from '../lib/crypto'
import { prisma } from '@rin/database'

export function startReviewWorker() {
  const worker = new Worker(
    'pr-reviews',
    async (job) => {
      const {
        installationId,
        githubInstallationId,
        prNumber,
        repoName,
        prTitle,
        prDescription,
        provider,
        encryptedApiKey,
      } = job.data

      console.log(`Processing review for PR #${prNumber} in ${repoName}`)

      // Get installation octokit (authenticated as GitHub App)
      const octokit = await githubApp.getInstallationOctokit(
        Number(githubInstallationId)
      )

      // Fetch PR diff
      const { data: diff } = await octokit.request(
        'GET /repos/{owner}/{repo}/pulls/{pull_number}',
        {
          owner: repoName.split('/')[0],
          repo: repoName.split('/')[1],
          pull_number: prNumber,
          mediaType: { format: 'diff' },
        }
      )

      // Generate AI review
      const apiKey = encryptedApiKey 
        ? decryptApiKey(encryptedApiKey) 
        : undefined

      const review = await generateReview({
        diff: diff as unknown as string,
        prTitle,
        prDescription,
        repoName,
        provider,
        apiKey,
      })

      // Post comment to GitHub PR
      const commentBody = buildReviewComment(review)
      
      await octokit.request(
        'POST /repos/{owner}/{repo}/issues/{issue_number}/comments',
        {
          owner: repoName.split('/')[0],
          repo: repoName.split('/')[1],
          issue_number: prNumber,
          body: commentBody,
        }
      )

      // Save review to DB
      await prisma.review.create({
        data: {
          installationId,
          prNumber,
          repoName,
          issues: review.issues as any,
          summary: review.summary,
          score: review.score,
        }
      })

      console.log(`Review posted for PR #${prNumber}`)
    },
    { connection }
  )

  worker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} failed:`, err)
  })

  return worker
}

function buildReviewComment(review: any): string {
  const scoreEmoji = review.score >= 8 ? '🟢' : 
                     review.score >= 5 ? '🟡' : '🔴'
  
  let comment = `## Rin Code Review ${scoreEmoji}\n\n`
  comment += `**Score:** ${review.score}/10\n\n`
  comment += `**Summary:** ${review.summary}\n\n`

  if (review.issues.length === 0) {
    comment += `✅ No issues found. Great work!\n`
    return comment
  }

  comment += `### Issues Found (${review.issues.length})\n\n`

  for (const issue of review.issues) {
    const severityEmojis: Record<string, string> = {
      critical: '🔴',
      high: '🟠',
      medium: '🟡',
      low: '🔵',
    }
    const severityEmoji = severityEmojis[issue.severity] || '⚪'

    comment += `#### ${severityEmoji} ${issue.severity.toUpperCase()} — ${issue.file}:${issue.line}\n\n`
    comment += `${issue.description}\n\n`
    comment += `**Suggested Fix:**\n\`\`\`\n${issue.suggestedFix}\n\`\`\`\n\n`
  }

  comment += `---\n*Powered by [Rin](https://rin.yourdomain.com)*`
  
  return comment
}