import { GoogleGenAI, } from "@google/genai";

const ai = new GoogleGenAI({apiKey:import.meta.env.GEMINI_API_KEY});

export const generateAicontent=async(prompt)=> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:prompt,                   
    config: {
      responseMimeType: "application/json",
    },

  });

  return response
}

