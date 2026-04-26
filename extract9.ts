import fs from 'fs';
import path from 'path';
import { VOCABULARY_DATA } from './src/constants.ts';

let combinedLessons = {};

// init with constants
for (const l of VOCABULARY_DATA) {
  combinedLessons[l.title] = {
    title: l.title,
    grammar: l.grammar ? [...l.grammar] : [],
    items: l.items ? [...l.items] : []
  };
}

const compDir = './src/components';
const files = fs.readdirSync(compDir);

for (const file of files) {
  if (file.startsWith('Lektion') && file.endsWith('.tsx')) {
    const lektionMatch = file.match(/Lektion(\d+)/);
    if (!lektionMatch) continue;
    const lekName = "Lektion " + lektionMatch[1];
    
    if (!combinedLessons[lekName]) {
      combinedLessons[lekName] = { title: lekName, grammar: [], items: [] };
    }
    
    // Parse the file and look for { word: "...", meaning: "..." }
    const content = fs.readFileSync(path.join(compDir, file), 'utf8');
    const wordRegex = /word:\s*["']([^"']+)["'],\s*(?:ipa:\s*["']([^"']+)["'],\s*)?meaning:\s*["']([^"']+)["']/g;
    
    let wMatch;
    while ((wMatch = wordRegex.exec(content)) !== null) {
      const w = wMatch[1];
      const m = wMatch[3];
      // deduplicate
      if (!combinedLessons[lekName].items.some(x => x.word === w)) {
        combinedLessons[lekName].items.push({ word: w, meaning: m });
      }
    }
  }
}

// Convert to sorted array
const sortedLektions = Object.values(combinedLessons).sort((a, b) => {
  const an = parseInt(a.title.replace('Lektion', '').trim());
  const bn = parseInt(b.title.replace('Lektion', '').trim());
  return an - bn;
});

// Markdown generation
let markdown = "# Tổng Hợp Từ Vựng & Ngữ Pháp Toàn Hệ Thống\n\n";
markdown += "Dưới đây là danh sách chi tiết các từ vựng (bao gồm giống, số nhiều đối với danh từ) và các chủ điểm ngữ pháp được tổng hợp theo từng bài học (Lektion) trong ứng dụng:\n\n";

for (const lesson of sortedLektions) {
  if (lesson.grammar.length === 0 && lesson.items.length === 0) continue;
  
  markdown += "## " + lesson.title + "\n\n";
  
  if (lesson.grammar && lesson.grammar.length > 0) {
    markdown += "### Ngữ Pháp (Grammatik)\n\n";
    for (const g of lesson.grammar) {
      markdown += "- **" + g.word + "**: " + g.meaning + "\n";
      if (g.rule) markdown += "  - *Quy tắc:* " + g.rule + "\n";
      if (g.example) markdown += "  - *Ví dụ:* " + g.example + " \n";
    }
    markdown += "\n";
  }

  if (lesson.items && lesson.items.length > 0) {
    markdown += "### Từ Vựng (Wortschatz)\n\n";
    for (const v of lesson.items) {
      markdown += "- **" + v.word + "**";
      if (v.ipa) markdown += " (" + v.ipa + ")";
      markdown += ": " + v.meaning;
      if (v.example) markdown += "\n";
      else markdown += "\n";
    }
    markdown += "\n";
  }
}

fs.writeFileSync('./Danh_Sach_Tu_Vung_Ngu_Phap.md', markdown, 'utf8');

// Dump the array to a JSON file so another script can read it easily without tsx compiling
fs.writeFileSync('./sorted.json', JSON.stringify(sortedLektions, null, 2));

console.log("Done Markdown and dumped JSON.");
