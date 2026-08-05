import { GoogleGenerativeAI } from '@google/generative-ai'
import { ReviewInput, ReviewResult } from '../types'
import { buildReviewPrompt } from '../prompt'

export async function reviewWithGemini(
  input: ReviewInput
): Promise<ReviewResult> {
  const genAI = new GoogleGenerativeAI(
    input.apiKey || process.env.GEMINI_API_KEY!
  )
  
  const model = genAI.getGenerativeModel({ 
    model: 'gemini-1.5-flash' 
  })

  const result = await model.generateContent(buildReviewPrompt(input))
  const text = result.response.text()
  
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('Invalid Gemini response')
  
  return JSON.parse(jsonMatch[0]) as ReviewResult
}