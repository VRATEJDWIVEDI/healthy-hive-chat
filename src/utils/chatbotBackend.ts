
import { GoogleGenAI } from "@google/genai";

// DO NOT use this API key in production! This is just for demonstration
// In a real app, this should be stored securely on the server side using environment variables
const GEMINI_API_KEY = "GEMINI_API_KEY";

// In a real app, this would be a server-side function, not client-side!
// This is for demonstration purposes only
export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ 
      apiKey: GEMINI_API_KEY 
    });
    
    const model = ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{
        role: "user",
        parts: [{
          text: `You are a helpful health and wellness assistant that provides evidence-based health advice.
          Please respond concisely with 2-3 sentences maximum.
          
          The user asks: ${prompt}`
        }]
      }]
    });
    
    // In a real implementation, we would parse the model's response
    return "This is a placeholder for the Gemini API response. In production, this would return real responses from the Gemini model.";
    
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting to the health database right now. Please try again in a few moments.";
  }
};
