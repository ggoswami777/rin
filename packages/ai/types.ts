export type AIProvider= 'CLAUDE' | 'OPENAI' | 'GEMINI' | 'OLLAMA'

export interface ReviewIssue{
    severity: 'critical' | 'high' | 'medium' | 'low'
    line: number
    file: string
    description: string
    suggestedFix: string
    category: 'security' | 'performance' | 'bug' | 'style'
}

export interface ReviewResult{
    issues:ReviewIssue[]
    summary:string
    score:number
}

export interface ReviewInput{
    diff:string
    prTitle:string
    prDescription:string
    repoName:string
    provider:AIProvider
    apiKey?:string
}