import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.startsWith('Lektion') && f.endsWith('.tsx'));

const constantsContent = fs.readFileSync(path.join(process.cwd(), 'src/constants.ts'), 'utf-8');
const constants: Record<string, string> = {};

// Extract export const VARNAME = `...` or "..." or '...'
const varRegex = /export\s+const\s+([A-Z0-9_]+)\s*=\s*(["'`])([\s\S]*?)\2/g;
let cMatch;
while ((cMatch = varRegex.exec(constantsContent)) !== null) {
  constants[cMatch[1]] = cMatch[3];
}

let lessonAudioMap: { [key: string]: Array<{text: string, lang: string, voice?: string}> } = {};

const dedup = new Set<string>();
const addAudio = (lessonId: string, text: string, lang: string, voice?: string) => {
  if (!text || text.trim() === '') return;
  const key = `${lessonId}-${lang}-${text}-${voice||''}`;
  if (!dedup.has(key)) {
    dedup.add(key);
    if (!lessonAudioMap[lessonId]) lessonAudioMap[lessonId] = [];
    lessonAudioMap[lessonId].push({ text, lang, voice });
  }
};

files.forEach(file => {
  const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
  
  const match = file.match(/^Lektion(\d+)/);
  if (!match) return;
  const lessonId = 'l' + match[1];

  // Extract direct literal playAudio('foo') or ("bar")
  // playAudio(text, id, lang, voice)
  const regex = /playAudio\s*\(\s*(['"])(.*?)\1(?:,\s*(?:['"].*?['"]|[^,)]+))?(?:,\s*(['"])(.*?)\3)?(?:,\s*(['"])(.*?)\5)?/g;
  let pMatch;
  while ((pMatch = regex.exec(content)) !== null) {
     const text = pMatch[2];
     const lang = pMatch[4] || 'de-DE';
     const voice = pMatch[6] || undefined;
     addAudio(lessonId, text, lang, voice);
  }

  // Extract variables playAudio(SOME_VARIABLE, ...)
  const varCallRegex = /playAudio\s*\(\s*([A-Z0-9_]+)\s*,(?:\s*['"].*?['"]\s*,?)?(?:\s*(['"])(.*?)\2(?:,\s*(['"])(.*?)\4)?)?/g;
  let vMatch;
  while ((vMatch = varCallRegex.exec(content)) !== null) {
     const varName = vMatch[1];
     if (constants[varName]) {
       const lang = vMatch[3] || 'vi-VN';
       const voice = vMatch[5] || undefined;
       addAudio(lessonId, constants[varName], lang, voice);
     }
  }

  // Extract from typical object structures like { word: "...", example: "..." }
  const objRegex = /(?:word|example|de|text|answer|q|prompt|hint)\s*:\s*(['"])(.*?)\1/g;
  let oMatch;
  while ((oMatch = objRegex.exec(content)) !== null) {
     const text = oMatch[2];
     addAudio(lessonId, text, 'de-DE');
  }
});

const outFile = path.join(process.cwd(), 'src/generatedAudioManifest.ts');
const outContent = `export const AUDIO_MANIFEST: Record<string, Array<{text: string, lang: 'de-DE'|'vi-VN', voice?: string}>> = ${JSON.stringify(lessonAudioMap, null, 2)};`;

fs.writeFileSync(outFile, outContent);
console.log("Manifest created successfully.");
