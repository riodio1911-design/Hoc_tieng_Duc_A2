import { GoogleGenAI, Type } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    instruction: { type: Type.STRING },
    text: { type: Type.ARRAY, items: { type: Type.STRING } },
    questions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          question: { type: Type.STRING },
          options: { type: Type.ARRAY, items: { type: Type.STRING } },
          correctAnswer: { type: Type.INTEGER },
          explanation: { type: Type.STRING }
        },
        required: ["id", "question", "options", "correctAnswer", "explanation"]
      }
    }
  },
  required: ["title", "instruction", "text", "questions"]
};

async function augmentSingle(lektionId) {
  const prompt = "You are an expert German language test creator (Goethe-Zertifikat / TELC). Create a READING COMPREHENSION exercise for Lektion " + lektionId + " of the Menschen A2 syllabus.\n" +
  "Requirements:\n" +
  "1. The reading text should be much longer (about 120-180 words), structured into 2-4 paragraphs.\n" +
  "2. The topics MUST perfectly match the usual A2 topics of Lektion " + lektionId + " (look it up or generate a relevant topic).\n" +
  "3. Include at least 4 multiple-choice questions (options 0, 1, 2).\n" +
  "4. Use everyday life contexts (emails, blog posts, letters, articles, etc.).\n" +
  "5. Provide explanations in German for the correct answers.";

  try {
    const res = await ai.models.generateContent({
      model: "gemini-2.5-pro", 
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema
      }
    });

    const parsed = JSON.parse(res.text);
    return parsed;
  } catch (e) {
    console.error("Failed", e);
    return null;
  }
}

async function augment() {
  let rpContent = fs.readFileSync(path.resolve('src/data/readingData.ts'), 'utf8');
  let start = rpContent.indexOf('{');
  let end = rpContent.lastIndexOf('}');
  const dataStr = rpContent.substring(start, end + 1);
  const augmentedData = JSON.parse(dataStr);
  
  const toGenerate = ['l17'];

  for (const lektionId of toGenerate) {
    if (augmentedData[lektionId]) continue; // skip if somehow exists
    console.log("Starting: " + lektionId);
      
    let attempts = 0;
    let result = null;
    while (attempts < 3 && !result) {
      result = await augmentSingle(lektionId);
      attempts++;
    }
      
    if (result) {
      augmentedData[lektionId] = result;
      console.log("Successfully augmented " + lektionId);
    } else {
      console.log("Failed completely for " + lektionId);
    }
  }

  const exportStr = JSON.stringify(augmentedData, null, 2);
  const fileContent = "export const READING_DATA: Record<string, any> = " + exportStr + ";\n";

  fs.writeFileSync(path.resolve('src/data/readingData.ts'), fileContent);
  console.log('Finished writing readingData.ts');
}

augment();
