
import { GoogleGenAI } from "@google/genai";

// This service handles API calls to Gemini
// In a real application, this API key should be stored securely on the server-side
// For demo purposes, we're showing how it would be used with an environment variable

export class GeminiService {
  private ai: GoogleGenAI;
  private model: string = "gemini-2.0-flash";
  
  constructor(apiKey?: string) {
    // In production, this would use process.env.GEMINI_API_KEY from the server
    this.ai = new GoogleGenAI({ 
      apiKey: apiKey || "GEMINI_API_KEY" 
    });
  }
  
  async generateResponse(prompt: string): Promise<string> {
    try {
      const model = this.ai.models.generateContent({
        model: this.model,
        contents: [{
          role: "user",
          parts: [{
            text: `You are a professional health and wellness assistant with expertise in diet, nutrition, and fitness.

Answer the user's query with practical, concise, and evidence-based advice. Avoid vague or generic statements. Be clear, kind, and helpful.

Use bullet points or line breaks if needed. Never hallucinate or make unsupported health claims.

User's question: ${prompt}

Respond clearly in under 3 sentences.`
          }]
        }]
      });
      
      // In a real implementation, we'd parse model.text() here
      // This is a placeholder for the actual implementation
      return "This is a placeholder for the Gemini API response. In production, this would return real responses from the Gemini model.";
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw new Error("Failed to generate response");
    }
  }
}

// Create a singleton instance
const geminiService = new GeminiService();
export default geminiService;
