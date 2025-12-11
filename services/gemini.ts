import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: In a real production app, ensure process.env.API_KEY is defined.
// For this demo, we assume the environment is set up correctly.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generatePokerResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, but I haven't been configured with an API key yet. Please add your Gemini API key to the environment variables.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are a professional poker expert and assistant for 'PokerWired Redux'. 
    You help users with:
    1. Poker rules and strategy (Hold'em, Omaha, etc.).
    2. Explaining bonus terms (wagering requirements, rakeback).
    3. Suggesting poker sites based on user preferences (use the following context: GGPoker is good for tournaments, PokerStars for software, 888poker for beginners, WPT Global for bonuses).
    
    Keep answers concise, professional, and friendly. Do not hallucinate promotions that don't exist.`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the poker strategy database right now. Please try again later.";
  }
};