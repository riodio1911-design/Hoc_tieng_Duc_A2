import fs from 'fs';
import * as docx from 'docx';
const { Document, Packer, Paragraph, HeadingLevel, TextRun } = docx;

const sortedLektions = JSON.parse(fs.readFileSync('./sorted.json', 'utf8'));

// 1. Vocabulary Doc
let vocabSections = [];
vocabSections.push(new Paragraph({ text: "Tổng hợp Từ Vựng (Số ít & Số nhiều)", heading: HeadingLevel.TITLE }));

sortedLektions.forEach(l => {
  if (l.items.length === 0) return;
  
  vocabSections.push(new Paragraph({ text: l.title, heading: HeadingLevel.HEADING_1 }));
  
  for (const item of l.items) {
    let grammarInfo = item.grammar ? ` (${item.grammar})` : '';
    let categoryInfo = item.category ? ` [${item.category}]` : '';
    let exampleInfo = item.example ? `\n   VD: ${item.example}` : '';
    
    vocabSections.push(new Paragraph({
      children: [
        new TextRun({ text: "• ", bold: true }),
        new TextRun({ text: item.word, bold: true, color: "0000FF" }),
        new TextRun({ text: grammarInfo, italics: true }),
        new TextRun({ text: ` : ${item.meaning}` }),
        new TextRun({ text: categoryInfo, color: "888888" })
      ]
    }));
    
    if (item.example) {
      vocabSections.push(new Paragraph({
        children: [
          new TextRun({ text: `    Ví dụ: ${item.example}`, italics: true, color: "555555" })
        ]
      }));
    }
  }
  vocabSections.push(new Paragraph("")); // empty line
});

const vocabDoc = new Document({
  sections: [{ children: vocabSections }]
});

Packer.toBuffer(vocabDoc).then((buffer) => {
  fs.writeFileSync('./public/Danh_Sach_Tu_Vung.docx', buffer);
  console.log("Done generating Danh_Sach_Tu_Vung.docx");
});

// 2. Grammar Doc
let grammarSections = [];
grammarSections.push(new Paragraph({ text: "Tổng hợp Ngữ Pháp & Cấu Trúc", heading: HeadingLevel.TITLE }));

sortedLektions.forEach(l => {
  if (l.grammar.length === 0) return;
  
  grammarSections.push(new Paragraph({ text: l.title, heading: HeadingLevel.HEADING_1 }));
  
  for (const item of l.grammar) {
    grammarSections.push(new Paragraph({
      children: [
        new TextRun({ text: "• ", bold: true }),
        new TextRun({ text: item.word, bold: true, color: "FF0000" }),
        new TextRun({ text: ` : ${item.meaning}` })
      ]
    }));
    
    if (item.rule) {
      grammarSections.push(new Paragraph({
        children: [
          new TextRun({ text: `    Quy tắc: `, bold: true, color: "555555" }),
          new TextRun({ text: item.rule, color: "555555" })
        ]
      }));
    }
    
    if (item.example) {
      let trans = item.exampleTranslation ? ` (${item.exampleTranslation})` : '';
      grammarSections.push(new Paragraph({
        children: [
          new TextRun({ text: `    Ví dụ: `, bold: true, color: "555555" }),
          new TextRun({ text: item.example + trans, italics: true, color: "555555" })
        ]
      }));
    }
  }
  grammarSections.push(new Paragraph("")); // empty line
});

const grammarDoc = new Document({
  sections: [{ children: grammarSections }]
});

Packer.toBuffer(grammarDoc).then((buffer) => {
  fs.writeFileSync('./public/Danh_Sach_Ngu_Phap.docx', buffer);
  console.log("Done generating Danh_Sach_Ngu_Phap.docx");
});
