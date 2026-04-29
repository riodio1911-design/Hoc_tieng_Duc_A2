import { GoogleGenAI } from "@google/genai";

async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  try {
    const res = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: "Hello" }] }],
      config: {
        responseModalities: ["AUDIO"] as any,
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Puck" },
          },
        },
      },
    });
    const inlineData = res.candidates?.[0]?.content?.parts?.[0]?.inlineData;
    if (inlineData) {
      const base64Audio = inlineData.data;
      const buffer = Buffer.from(base64Audio, "base64");
      
      let leDiff = 0;
      let beDiff = 0;
      for (let i = 0; i < buffer.length - 2; i += 2) {
         const le1 = buffer.readInt16LE(i);
         const le2 = buffer.readInt16LE(i + 2);
         leDiff += Math.abs(le1 - le2);

         const be1 = buffer.readInt16BE(i);
         const be2 = buffer.readInt16BE(i + 2);
         beDiff += Math.abs(be1 - be2);
      }
      console.log("LE diff:", leDiff);
      console.log("BE diff:", beDiff);
    }
  } catch(e) {
    console.error(e);
  }
}
test();
