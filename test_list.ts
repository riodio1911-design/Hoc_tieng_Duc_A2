import { GoogleGenAI } from "@google/genai";

async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  try {
    const res = await ai.models.list();
    for await (const m of res) {
      if (m.name.includes("speech") || m.name.includes("tts") || m.name.includes("audio") || m.name.includes("gemini-2.0-flash")) {
        console.log(m.name);
      }
    }
  } catch(e) {
    console.error(e);
  }
}
test();
