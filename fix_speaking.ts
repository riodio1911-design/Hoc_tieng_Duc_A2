import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateSingle(i: number, objName: string) {
  const book = i <= 12 ? 'Menschen A2.1' : 'Menschen A2.2';
  
  console.log(`Generating for l${i} (${book})...`);

  const prompt = `You are an expert German teacher. Produce a JSON object with exactly 15 words and exactly 15 sentences for Lektion ${i} of the German learning textbook "${book}".
- The vocabulary must relate directly to the topics and words explicitly covered in Lektion ${i} of ${book}.
- The JSON format MUST be exactly:
{
  "words": [ { "id": "wX", "de": "German word", "vi": "Vietnamese meaning" } ],
  "sentences": [ { "id": "sX", "de": "German sentence", "vi": "Vietnamese translation" } ]
}
- Replace X with numbers starting from 1.
- ONLY output valid JSON without any markdown code block formatting (NO \`\`\`json).`;

  try {
    const res = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });
    
    let text = res.text || "";
    text = text.replace(/```json/gi, "").replace(/```/g, "").trim();
    const parsed = JSON.parse(text);
    return parsed;
  } catch (e) {
    console.error(`Failed l${i}`, e);
    return null;
  }
}

async function fix() {
  const content = fs.readFileSync('./src/data/speakingData.ts', 'utf8');
  let dataStr = content.substring(content.indexOf('{\n  "l1":'));
  dataStr = dataStr.substring(0, dataStr.lastIndexOf('}') + 1);
  const SPEAKING_DATA = JSON.parse(dataStr);
  
  const l17 = await generateSingle(17, 'l17');
  if (l17) SPEAKING_DATA['l17'] = l17;

  const l19 = await generateSingle(19, 'l19');
  if (l19) SPEAKING_DATA['l19'] = l19;

  const fileContent = `export interface PracticeItem {
  id: string;
  de: string;
  vi: string;
  ipa?: string;
  syllables?: string[];
  notation?: number[];
  speaker?: string;
  context?: string;
}

export const SPEAKING_DATA: Record<string, { words: PracticeItem[], sentences: PracticeItem[], conversations?: PracticeItem[] }> = ${JSON.stringify(SPEAKING_DATA, null, 2)};
`;

  fs.writeFileSync('./src/data/speakingData.ts', fileContent);
  console.log('Fixed speakingData.ts');
}

fix();
