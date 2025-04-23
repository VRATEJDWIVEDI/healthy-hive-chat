
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = "AIzaSyCtKx8tYToUejkLQvm_QS-UseS86C5NN0I";

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(
      `You are a helpful health and wellness assistant that provides evidence-based health advice.
      Please respond concisely with 2-3 sentences maximum.
      
      The user asks: ${prompt}`
    );
    
    return result.text();
    
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting to the health database right now. Please try again in a few moments.";
  }
};
