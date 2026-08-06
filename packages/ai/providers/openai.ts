import OpenAI from 'openai'
import { ReviewInput, ReviewResult } from '../types'
import { buildReviewPrompt } from '../prompt'

export async function reviewWithOpenAI(
  input: ReviewInput
): Promise<ReviewResult> {
  const client = new OpenAI({
    apiKey: input.apiKey!,
  })

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { 
        role: 'user', 
        content: buildReviewPrompt(input) 
      }
    ],
    response_format: { type: 'json_object' },
  })

  const text = response.choices[0].message.content || '{}'
  return JSON.parse(text) as ReviewResult
}