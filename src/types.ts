export interface Question {
  id: number;
  text: string;
  options: string[];
}

export interface Answer {
  questionId: number;
  answer: string;
}

export interface LiveAnalysis {
  voice_patterns: string;
  expression_analysis: string;
  text_sentiment: string;
}

export interface Report {
  personalityType: string;
  strengths: string[];
  areas_for_growth: string[];
  recommendations: string[];
  emotional_state: string;
  live_analysis: LiveAnalysis;
}