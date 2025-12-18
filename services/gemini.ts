import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePokerResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are a professional poker expert for 'PokerWired'. 
        You help users with:
        1. Poker rules and advanced strategies (GTO, exploit, ICM).
        2. Explaining site bonuses and rakeback terms.
        3. Recommending poker rooms: GGPoker (Tournaments), PokerStars (Software), 888poker (Beginners), WPT Global (Bonuses).
        
        Keep answers high-impact, professional, and concise. Render output in clean Markdown.`,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the poker brain right now. Please try again later.";
  }
};