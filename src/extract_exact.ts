import fs from 'fs';
import { VOCABULARY_DATA } from './constants';

let count = 0;
let markdown = "# Tổng Hợp Từ Vựng & Ngữ Pháp Toàn Hệ Thống\n\n";
markdown += "Dưới đây là danh sách chi tiết các từ vựng (bao gồm giống, số nhiều đối với danh từ) và các chủ điểm ngữ pháp được tổng hợp theo từng bài học (Lektion) trong ứng dụng:\n\n";

for (const lesson of VOCABULARY_DATA) {
  markdown += "## " + lesson.title + "\n\n";
  
  if (lesson.grammar && lesson.grammar.length > 0) {
    markdown += "### Ngữ Pháp (Grammatik)\n\n";
    for (const g of lesson.grammar) {
      markdown += "- **" + g.word + "**: " + g.meaning + "\n";
      if (g.rule) markdown += "  - *Quy tắc:* " + g.rule + "\n";
      if (g.example) markdown += "  - *Ví dụ:* " + g.example + " (" + g.exampleTranslation + ")\n";
    }
    markdown += "\n";
  }

  if (lesson.items && lesson.items.length > 0) {
    markdown += "### Từ Vựng (Wortschatz)\n\n";
    for (const v of lesson.items) {
      markdown += "- **" + v.word + "**";
      if (v.ipa) markdown += " (" + v.ipa + ")";
      markdown += ": " + v.meaning;
      if (v.example) markdown += " -> *VD:* " + v.example;
      markdown += "\n";
      count++;
    }
    markdown += "\n";
  }
}

fs.writeFileSync('./Danh_Sach_Tu_Vung_Ngu_Phap.md', markdown, 'utf8');
console.log("Words written: " + count);
