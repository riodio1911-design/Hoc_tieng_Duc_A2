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
    const { text, lang, voiceName, voiceEffect } = req.body;
    
    // Call API (first time)
    const ai = getAI();
    let promptText = "";
    if (lang === 'vi-VN') {
      promptText = `Please read the following text naturally. The main language is Vietnamese, but make sure to pronounce any German words correctly in German: ${text}`;
    } else {
      promptText = `Read clearly in German: ${text}`;
    }
      
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: promptText }] }],
      config: {
        responseModalities: ["AUDIO"] as any,
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voiceName },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      // Vercel serverless functions shouldn't write to disk. 
      // Serve base64 directly and let the client cache it using CacheStorage API.
      return res.status(200).json({ cached: false, pcmBase64: base64Audio });
    } else {
      res.status(500).json({ error: "No audio generated from AI" });
    }
  } catch (error) {
    console.error("TTS API Error:", error);
    res.status(500).json({ error: error.message });
  }
}
