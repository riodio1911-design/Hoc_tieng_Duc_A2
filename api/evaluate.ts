import { GoogleGenAI } from "@google/genai";

export const maxDuration = 60; // Allow longer execution on Vercel

let aiClient = null;
function getAI() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    if (!key) throw new Error("Missing GEMINI_API_KEY environment variable.");
    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { prompt, mimeType, audioBase64 } = req.body;
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { parts: [{ inlineData: { mimeType, data: audioBase64 } }] },
        { parts: [{ text: prompt }] }
      ],
      config: {
        responseMimeType: "application/json"
      }
    });
    return res.status(200).json({ result: response.text });
  } catch (error: any) {
    console.error("Evaluate API Error:", error);
    const status = error.status || (error.message?.includes('429') || error.message?.includes('RESOURCE_EXHAUSTED') ? 429 : 500);
    res.status(status).json({ error: error.message });
  }
}
