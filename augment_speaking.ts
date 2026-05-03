import { GoogleGenAI, Type } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const dataPath = path.resolve('src/data/speakingData.ts');

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    words: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          de: { type: Type.STRING },
          vi: { type: Type.STRING },
          ipa: { type: Type.STRING },
          syllables: { type: Type.ARRAY, items: { type: Type.STRING } },
          notation: { type: Type.ARRAY, items: { type: Type.INTEGER } }
        },
        required: ["id", "de", "vi", "ipa", "syllables", "notation"]
      }
    },
    sentences: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          de: { type: Type.STRING },
          vi: { type: Type.STRING },
          ipa: { type: Type.STRING },
          syllables: { type: Type.ARRAY, items: { type: Type.STRING } },
          notation: { type: Type.ARRAY, items: { type: Type.INTEGER } }
        },
        required: ["id", "de", "vi", "ipa", "syllables", "notation"]
      }
    }
  },
  required: ["words", "sentences"]
};

async function augmentSingle(lektionId, currentData) {
  const prompt = "You are a German phonetic expert. Your task is to add IPA transcriptions, syllables, and intonation stress charts ('notation') to the following German vocabulary and sentences.\n" +
  "\n" +
  "The input is for " + lektionId + ".\n" +
  "\n" +
  "Rules:\n" +
  "1. 'ipa' should be the standard German IPA transcription, enclosed in slashes, e.g., /bɛkɐ/.\n" +
  "2. 'syllables' should be an array of strings breaking down the German text.\n" +
  "   - For words, break the word into syllables (e.g., 'Bäcker' -> ['Bä', 'cker']).\n" +
  "   - For sentences, break the sentence into words and key syllables so it matches the notation stress. Punctuation should be attached to the preceding word or be its own zero-stress item if extremely convenient, but usually attach it.\n" +
  "3. 'notation' is an array of integers representing the stress/pitch height of each syllable.\n" +
  "   - It MUST have the EXACT SAME length as the 'syllables' array.\n" +
  "   - Use percentages: 80 for primary stress, 60 for secondary stress, 40 for unstressed, 0 for pauses/punctuation.\n" +
  "\n" +
  "Here is the input data:\n" +
  JSON.stringify(currentData) + "\n" +
  "\n" +
  "Please provide the output matching the requested JSON schema. KEEP EXACTLY the same ids, de, and vi fields. Just add ipa, syllables, and notation to every item. Ensure every array length matches exactly!";

  try {
    const res = await ai.models.generateContent({
      model: "gemini-2.5-flash", 
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema
      }
    });

    const parsed = JSON.parse(res.text);
    for (const type of ['words', 'sentences']) {
      for (const item of parsed[type]) {
        if (item.syllables.length !== item.notation.length) {
          console.error("Mismatch in length for " + item.id + ": " + item.syllables.length + " vs " + item.notation.length);
        }
      }
    }
    return parsed;
  } catch (e) {
    console.error("Failed", e);
    return null;
  }
}

async function augment() {
  const content = fs.readFileSync(dataPath, 'utf8');
  let dataStr = content.substring(content.indexOf('{\n  "l1":'));
  dataStr = dataStr.substring(0, dataStr.lastIndexOf('}') + 1);
  const SPEAKING_DATA = JSON.parse(dataStr);
  
  const augmentedData = {};

  const chunks = [];
  for (let i = 1; i <= 24; i += 6) {
    const chunk = [];
    for (let j = 0; j < 6 && i + j <= 24; j++) {
      chunk.push(i + j);
    }
    chunks.push(chunk);
  }

  for (const chunk of chunks) {
    console.log("Starting chunk: " + chunk.join(', '));
    await Promise.all(chunk.map(async (i) => {
      const lektionId = "l" + i;
      const current = SPEAKING_DATA[lektionId];
      if (!current) return;
      
      let attempts = 0;
      let result = null;
      while (attempts < 3 && !result) {
        result = await augmentSingle(lektionId, current);
        attempts++;
      }
      
      if (result) {
        augmentedData[lektionId] = result;
        console.log("Successfully augmented " + lektionId);
      } else {
        console.log("Fallback to unaugmented for " + lektionId);
        augmentedData[lektionId] = current;
      }
    }));
  }

  const exportStr = JSON.stringify(augmentedData, null, 2);
  const fileContent = "export interface PracticeItem {\n" +
  "  id: string;\n" +
  "  de: string;\n" +
  "  vi: string;\n" +
  "  ipa?: string;\n" +
  "  syllables?: string[];\n" +
  "  notation?: number[];\n" +
  "  speaker?: string;\n" +
  "  context?: string;\n" +
  "}\n\n" +
  "export const SPEAKING_DATA: Record<string, { words: PracticeItem[], sentences: PracticeItem[], conversations?: PracticeItem[] }> = " + exportStr + ";\n";

  fs.writeFileSync(dataPath, fileContent);
  console.log('Finished writing fully augmented speakingData.ts');
}

augment();
