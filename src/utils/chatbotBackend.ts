
import { GoogleGenAI } from "@google/genai";

// DO NOT use this API key in production! This is just for demonstration
// In a real app, this should be stored securely on the server side using environment variables
const GEMINI_API_KEY = "AIzaSyCtKx8tYToUejkLQvm_QS-UseS86C5NN0I";

// In a real app, this would be a server-side function, not client-side!
// This is for demonstration purposes only
export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    // Correctly initialize with an object containing apiKey
    const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    // Use the correct model access method
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const result = await model.generateContent(
      `You are a helpful health and wellness assistant that provides evidence-based health advice.
      Please respond concisely with 2-3 sentences maximum.
      
      The user asks: ${prompt}`
    );
    
    return result.response.text();
    
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting to the health database right now. Please try again in a few moments.";
  }
};
