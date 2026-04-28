import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config({ override: true });

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));

// Caching directory
const TTS_CACHE_DIR = path.join(process.cwd(), process.env.NODE_ENV === "production" ? "dist/tts" : "public/tts");
if (!fs.existsSync(TTS_CACHE_DIR)) {
  fs.mkdirSync(TTS_CACHE_DIR, { recursive: true });
}

let aiClient: GoogleGenAI | null = null;
function getAI() {
  const rawKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  const key = rawKey?.trim();
  if (!key) throw new Error("Missing GEMINI_API_KEY environment variable. Please make sure VITE_GEMINI_API_KEY is defined in AI Studio config or .env");
  if (!aiClient || aiClient.apiKey !== key) {
    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}

app.post("/api/tts", async (req, res) => {
  try {
    const { text, lang, voiceName, voiceEffect } = req.body;
    
    // Create a safe identifier containing text hash, lang, etc.
    const textBase64 = Buffer.from(text).toString("base64");
    // shorten a bit to avoid filename length limits
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = Math.imul(31, hash) + text.charCodeAt(i) | 0;
    }
    
    const fileName = `tts_${hash}_${lang}_${voiceName}_${voiceEffect}.pcm`;
    const filePath = path.join(TTS_CACHE_DIR, fileName);

    // If cached, return audio URL so client can fetch it
    if (fs.existsSync(filePath)) {
      return res.json({ cached: true, fileUrl: `/tts/${fileName}` });
    }

    // Call API (first time)
    const ai = getAI();
    console.log("TTS Using Key:", ai.apiKey?.substring(0, 5) + "..." + ai.apiKey?.substring(ai.apiKey.length - 4));
    let promptText = "";
    if (lang === 'vi-VN') {
      promptText = `Please read the following text naturally. The main language is Vietnamese, but make sure to pronounce any German words correctly in German: ${text}`;
    } else {
      promptText = `Read clearly in German: ${text}`;
    }
      
    // As any cast is used for Modality and other enums from @google/genai as it's evolving
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
      const buffer = Buffer.from(base64Audio, "base64");
      fs.writeFileSync(filePath, buffer);
      return res.json({ cached: false, fileUrl: `/tts/${fileName}`, pcmBase64: base64Audio });
    } else {
      res.status(500).json({ error: "No audio generated from AI" });
    }
  } catch (error: any) {
    console.error("TTS API Error:", error);
    const status = error.status || (error.message?.includes('429') || error.message?.includes('RESOURCE_EXHAUSTED') ? 429 : 500);
    res.status(status).json({ error: error.message });
  }
});

// Evaluation MUST hit the API directly as requested
app.post("/api/evaluate", async (req, res) => {
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
    return res.json({ result: response.text });
  } catch (error: any) {
    console.error("Evaluate API Error:", error);
    const status = error.status || (error.message?.includes('429') || error.message?.includes('RESOURCE_EXHAUSTED') ? 429 : 500);
    res.status(status).json({ error: error.message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
