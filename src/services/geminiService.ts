
import { GoogleGenerativeAI } from "@google/generative-ai";

export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: string = "gemini-pro";
  
  constructor(apiKey?: string) {
    this.genAI = new GoogleGenerativeAI(apiKey || "AIzaSyCtKx8tYToUejkLQvm_QS-UseS86C5NN0I");
  }
  
  async generateResponse(prompt: string): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({ model: this.model });
      
      const result = await model.generateContent(
        `You are a helpful health and wellness assistant who gives concise, evidence-based advice.
        
        The user asks: ${prompt}
        
        Respond with helpful, accurate health information. Keep your response under 3 sentences.`
      );
      
      return result.text();
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw new Error("Failed to generate response");
    }
  }
}

const geminiService = new GeminiService();
export default geminiService;
