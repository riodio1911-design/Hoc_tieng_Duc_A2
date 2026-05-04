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
let currentKey: string | null = null;
function getAI() {
  const rawKey = process.env.API_KEY || process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  const key = rawKey?.trim();
  console.log("Using API key starting with: ", key?.substring(0, 4));
  if (!key || key === "MY_GEMINI_API_KEY") throw new Error("API_KEY_INVALID: Missing or placeholder GEMINI_API_KEY environment variable. Please make sure to enter a valid VITE_GEMINI_API_KEY in the AI Studio config / Secrets.");
  if (!aiClient || currentKey !== key) {
    aiClient = new GoogleGenAI({ apiKey: key });
    currentKey = key;
  }
  return aiClient;
}

app.get("/api/test-key", (req, res) => {
  const debugEnv = {};
  for (const k in process.env) {
    if (k.includes("GEMINI")) debugEnv[k] = process.env[k];
  }
  res.json({ 
    gemini: process.env.GEMINI_API_KEY?.substring(0, 4), 
    vite: process.env.VITE_GEMINI_API_KEY?.substring(0, 4),
    full: debugEnv
  });
});

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
    let errorDetails = "";
    if (error instanceof Error) {
      errorDetails = error.message;
    } else {
      errorDetails = typeof error === 'object' ? JSON.stringify(error) : String(error);
    }
    let status = 500;
    const msg = errorDetails;
    if (error.status) status = error.status;
    else if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED')) status = 429;
    else if (msg.includes('503') || msg.includes('UNAVAILABLE') || msg.includes('high demand')) status = 503;
    else if (msg.includes('400') || msg.includes('API_KEY_INVALID') || msg.includes('API key not valid')) status = 400;

    if (status >= 500 && status !== 503) {
      console.error("TTS API Error:", errorDetails);
    } else {
      console.warn(`TTS API Warning (${status}):`, errorDetails.substring(0, 200) + "...");
    }
    
    res.status(status).json({ error: msg });
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
    let errorDetails = "";
    if (error instanceof Error) {
      errorDetails = error.message;
    } else {
      errorDetails = typeof error === 'object' ? JSON.stringify(error) : String(error);
    }
    let status = 500;
    const msg = errorDetails;
    if (error.status) status = error.status;
    else if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED')) status = 429;
    else if (msg.includes('503') || msg.includes('UNAVAILABLE') || msg.includes('high demand')) status = 503;
    else if (msg.includes('400') || msg.includes('API_KEY_INVALID') || msg.includes('API key not valid')) status = 400;

    if (status >= 500 && status !== 503) {
      console.error("Evaluate API Error:", errorDetails);
    } else {
      console.warn(`Evaluate API Warning (${status}):`, errorDetails.substring(0, 200) + "...");
    }
    
    res.status(status).json({ error: msg });
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
