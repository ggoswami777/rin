import { ReviewInput, ReviewResult } from '../types'
import { buildReviewPrompt } from '../prompt'

export async function reviewWithOllama(
  input: ReviewInput
): Promise<ReviewResult> {
  const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434'
  
  const response = await fetch(`${ollamaUrl}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'codellama',
      prompt: buildReviewPrompt(input),
      stream: false,
      format: 'json',
    }),
  })

  const data = await response.json()
  return JSON.parse(data.response) as ReviewResult
}