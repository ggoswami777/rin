import { ReviewInput, ReviewResult } from './types'
import { reviewWithClaude } from './providers/claude'
import { reviewWithGemini } from './providers/gemini'
import { reviewWithOpenAI } from './providers/openai'
import { reviewWithOllama } from './providers/ollama'

export async function generateReview(
  input: ReviewInput
): Promise<ReviewResult> {
  switch (input.provider) {
    case 'CLAUDE':
      return reviewWithClaude(input)
    case 'GEMINI':
      return reviewWithGemini(input)
    case 'OPENAI':
      return reviewWithOpenAI(input)
    case 'OLLAMA':
      return reviewWithOllama(input)
    default:
      throw new Error(`Unknown provider: ${input.provider}`)
  }
}

export * from './types'