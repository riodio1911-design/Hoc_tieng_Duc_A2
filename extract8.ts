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
      if (v.example) markdown += " \n";
      else markdown += "\n";
    }
    markdown += "\n";
  }
}

fs.writeFileSync('./Danh_Sach_Tu_Vung_Ngu_Phap.md', markdown, 'utf8');

// DOCX generation
const docxScript = \`
import fs from 'fs';
import docx from 'docx';
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = docx;

const doc = new Document({
  sections: [{
    children: [
      new Paragraph({ text: "Tổng hợp Từ Vựng Tiếng Đức B1", heading: HeadingLevel.TITLE }),
      \${sortedLektions.map(l => {
          if (l.grammar.length === 0 && l.items.length === 0) return '';
          let childs = [];
          childs.push(\\\`new Paragraph({ text: "\${l.title}", heading: HeadingLevel.HEADING_1 })\\\`);
          
          if (l.grammar.length > 0) {
            childs.push(\\\`new Paragraph({ text: "Ngữ Pháp (Grammatik)", heading: HeadingLevel.HEADING_2 })\\\`);
            for (const g of l.grammar) {
              childs.push(\\\`new Paragraph("- \${g.word}: \${g.meaning}")\\\`);
            }
          }
          
          if (l.items.length > 0) {
            childs.push(\\\`new Paragraph({ text: "Từ Vựng (Wortschatz)", heading: HeadingLevel.HEADING_2 })\\\`);
            for (const i of l.items) {
              childs.push(\\\`new Paragraph("- \${i.word}: \${i.meaning}")\\\`);
            }
          }
          return childs.join(',');
      }).filter(x => x).join(',')}
    ]
  }]
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('./public/Tu_Vung_Tieng_Duc_Tong_Hop.docx', buffer);
  console.log("Done generating DOCX.");
});
\`;

fs.writeFileSync('./gen_docx_final.ts', docxScript, 'utf8');
console.log("Done Markdown and prepared DOCX script. Total vocab + grammar items grouped.");
