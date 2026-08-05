import Anthropic from '@anthropic-ai/sdk'
import { ReviewInput, ReviewResult } from '../types'
import { buildReviewPrompt } from '../prompt'

export async function reviewWithClaude(
  input: ReviewInput
): Promise<ReviewResult> {
  const client = new Anthropic({
    apiKey: input.apiKey || process.env.ANTHROPIC_API_KEY!,
  })

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 4096,
    messages: [
      {
        role: 'user',
        content: buildReviewPrompt(input),
      },
    ],
  })

  const text = response.content[0].type === 'text' 
    ? response.content[0].text 
    : ''
    
  return JSON.parse(text) as ReviewResult
}