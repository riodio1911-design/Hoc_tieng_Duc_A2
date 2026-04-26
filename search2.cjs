const fs = require('fs');

let md = "# Tổng Hợp Từ Vựng & Ngữ Pháp Toàn Hệ Thống\n\n";
md += "Dưới đây là danh sách chi tiết các từ vựng (bao gồm số ít, số nhiều nếu có) và chủ điểm ngữ pháp được sử dụng trong các bài học:\n\n";

// First, parse src/constants.ts for VOCABULARY_DATA
const constantsContent = fs.readFileSync('src/constants.ts', 'utf8');

const doc = {};

let currentLesson = "";
const lessonRegex = /id:\s*["'](l\d+)["'],\s*title:\s*["']([^"']+)["']/g;
let lMatch;
let lastIdx = 0;
while ((lMatch = lessonRegex.exec(constantsContent)) !== null) {
  const lekId = lMatch[1];
  const lekTitle = lMatch[2];
  doc[lekTitle] = { words: [], grammar: [] };
  
  // Find items array
  const itemsIdx = constantsContent.indexOf('items:', lMatch.index);
  const grammarIdx = constantsContent.indexOf('grammar:', lMatch.index);
  // naive parsing
}

// Better strategy: we can just find all `{ word: ..., meaning: ... }` grouped by Lektion!
// Wait, typescript AST parsing is hard via regex.
// Let's just create a quick ts file in src/ and run it with `npx tsx`

const tsScript = \`
import fs from 'fs';
import { VOCABULARY_DATA } from './constants.js';

let count = 0;
let markdown = "# Tổng Hợp Từ Vựng & Ngữ Pháp Toàn Hệ Thống\\n\\n";
markdown += "Dưới đây là danh sách chi tiết các từ vựng (bao gồm giống, số nhiều đối với danh từ) và các chủ điểm ngữ pháp trong ứng dụng:\\n\\n";

for (const lesson of VOCABULARY_DATA) {
  markdown += "## " + lesson.title + "\\n\\n";
  
  if (lesson.grammar && lesson.grammar.length > 0) {
    markdown += "### Ngữ Pháp (Grammatik)\\n";
    for (const g of lesson.grammar) {
      markdown += "- **" + g.word + "**: " + g.meaning + "\\n";
      if (g.rule) markdown += "  - *Quy tắc:* " + g.rule + "\\n";
      if (g.example) markdown += "  - *Ví dụ:* " + g.example + " (" + g.exampleTranslation + ")\\n";
    }
    markdown += "\\n";
  }

  if (lesson.items && lesson.items.length > 0) {
    markdown += "### Từ Vựng (Wortschatz)\\n";
    for (const v of lesson.items) {
      markdown += "- **" + v.word + "** (" + v.ipa + "): " + v.meaning + "\\n";
      count++;
    }
    markdown += "\\n";
  }
}

fs.writeFileSync('../Danh_Sach_Tu_Vung_Ngu_Phap.md', markdown, 'utf8');
console.log("Words written: " + count);
\`
fs.writeFileSync('src/extract_exact.ts', tsScript, 'utf8');

