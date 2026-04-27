import { GoogleGenAI } from "@google/genai";

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
  } catch (error) {
    console.error("Evaluate API Error:", error);
    res.status(500).json({ error: error.message });
  }
}
