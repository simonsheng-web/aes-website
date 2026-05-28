import { GoogleGenAI } from "@google/genai";

// Ensure API Key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateSolution = async (problem: string): Promise<string> => {
  try {
    if (!apiKey) {
      return "Error: API Key is missing. Please configure the environment.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert Agile Solutions Architect. A user has a software engineering problem. 
      Provide a concise, high-level technical solution strategy (max 3 bullet points) and a short encouraging summary.
      
      Problem: ${problem}`,
      config: {
        systemInstruction: "Be professional, technical, yet accessible. Focus on agile and scalable architecture.",
        temperature: 0.7,
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an issue analyzing your request. Please try again later.";
  }
};