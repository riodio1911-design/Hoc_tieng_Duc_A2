import { GoogleGenAI } from '@google/genai'; 
const ai = new GoogleGenAI(); 
ai.models.generateContent({ 
  model: 'gemini-3.1-flash-tts-preview', 
  contents: 'Hallo Welt',
  config: { responseModalities: ['AUDIO'] as any }
}).then(res => {
  const part = res.candidates?.[0]?.content?.parts?.[0];
  console.log("Keys in part:", Object.keys(part || {}));
  console.log("InlineData keys:", Object.keys(part?.inlineData || {}));
}).catch(console.error);
