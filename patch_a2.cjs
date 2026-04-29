const fs = require("fs");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("No API key found!");
  process.exit(1);
}
const ai = new GoogleGenAI({ apiKey: API_KEY });

async function refactorLektion(content, lektionId) {
  const prompt = `You are an expert German teacher. 
Below is a TypeScript block defining the 'items' array for a specific 'Lektion' in a vocabulary app.
Your task is to REFACTOR this 'items' array to strictly follow the format of 'Lektion 21' without dropping any data (keep exampleTranslation!).

Formatting Rules for 'Lektion 21' format:
1. ADD an 'ipa' field with the correct IPA pronunciation for every word (e.g. \`ipa: "/ˈaɪ̯nˌbʁʊχ/"\`).
2. For NOUNS that had plural forms like "die Aufgabe, -n", SPLIT it into TWO separate objects:
   - Object 1: Singular. \`word: "die Aufgabe (số ít)"\`.
   - Object 2: Plural. \`word: "die Aufgaben (số nhiều)"\`.
3. For VERBS, keep one object but add "(nguyên thể)" to the word string if it's the base form (e.g. \`word: "anschauen (nguyên thể)"\`).
4. Update the 'id' to append '_s' and '_p' for split nouns to avoid duplication.
5. KEEP the 'meaning', 'example', 'exampleTranslation', 'category' intact! If splitting a noun, reuse the example where appropriate or tweak it to make sense for singular/plural.
6. The output must be valid TypeScript for the \`items\` array ONLY (starting with '[' and ending with ']'). Do not add any markdown formatting, just raw text.

Here is the current items array for ${lektionId}:
${content}
`;
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text.replace(/```typescript/g, "").replace(/```/g, "").trim();
}

async function main() {
  const filePath = path.join(__dirname, "src/constants.ts");
  let fileContent = fs.readFileSync(filePath, "utf-8");

  const lektionenToRefactor = ["l13", "l14", "l15", "l16", "l17", "l18", "l19", "l20"];

  for (const lektionId of lektionenToRefactor) {
    console.log("Refactoring " + lektionId + "...");
    const regex = new RegExp(`(id:\\s*"${lektionId}",\\s*title:[^\\n]+\\s*subtitle:[^\\n]+\\s*items:\\s*\\[)(.*?)(\\],\\s*grammar:)`, "s");
    
    const match = fileContent.match(regex);
    if (match) {
      const itemsContent = "[" + match[2] + "]";
      try {
        let newItemsString = await refactorLektion(itemsContent, lektionId);
        if (newItemsString.startsWith("[")) newItemsString = newItemsString.substring(1);
        if (newItemsString.endsWith("]")) newItemsString = newItemsString.substring(0, newItemsString.length - 1);
        
        fileContent = fileContent.replace(regex, `$1\n${newItemsString}\n$3`);
        fs.writeFileSync(filePath, fileContent, "utf-8");
        console.log("Success for: " + lektionId);
      } catch (e) {
        console.error("Failed on " + lektionId, e);
      }
    } else {
      console.log("Could not find block for " + lektionId);
    }
  }
}

main();
