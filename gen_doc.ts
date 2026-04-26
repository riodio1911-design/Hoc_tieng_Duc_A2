import fs from 'fs';
import * as docx from 'docx';
const { Document, Packer, Paragraph, HeadingLevel } = docx;

const sortedLektions = JSON.parse(fs.readFileSync('./sorted.json', 'utf8'));

let docSections = [];

docSections.push(new Paragraph({ text: "Tổng hợp Từ Vựng và Ngữ Pháp Tiếng Đức B1", heading: HeadingLevel.TITLE }));

sortedLektions.forEach(l => {
  if (l.grammar.length === 0 && l.items.length === 0) return;
  
  docSections.push(new Paragraph({ text: l.title, heading: HeadingLevel.HEADING_1 }));
  
  if (l.grammar.length > 0) {
    docSections.push(new Paragraph({ text: "Ngữ Pháp (Grammatik)", heading: HeadingLevel.HEADING_2 }));
    for (const g of l.grammar) {
      docSections.push(new Paragraph("- " + g.word + ": " + g.meaning));
    }
  }
  
  if (l.items.length > 0) {
    docSections.push(new Paragraph({ text: "Từ Vựng (Wortschatz)", heading: HeadingLevel.HEADING_2 }));
    for (const i of l.items) {
      docSections.push(new Paragraph("- " + i.word + ": " + i.meaning));
    }
  }
});

const doc = new Document({
  sections: [{
    children: docSections
  }]
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('./public/Tu_Vung_Tieng_Duc_Tong_Hop.docx', buffer);
  console.log("Done generating DOCX.");
});
