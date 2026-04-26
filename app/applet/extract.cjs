const fs = require('fs');
const files = fs.readdirSync('src/components').filter(f => f.startsWith('Lektion') && f.endsWith('.tsx'));

let vocabList = [];

files.forEach(f => {
  const lektionMatch = f.match(/Lektion(\d+)/);
  const lek = lektionMatch ? lektionMatch[1] : '?';
  const content = fs.readFileSync('src/components/' + f, 'utf8');
  let match;
  
  // matcher for { word: '...', meaning: '...' }
  const regex1 = /word:\s*['"]([^'"]+)['"],\s*(meaning|translation):\s*['"]([^'"]+)['"]/g;
  while ((match = regex1.exec(content)) !== null) {
    vocabList.push({ Lektion: lek, de: match[1], vi: match[3] });
  }

  // matcher for { w: '...', t: '...' }
  const regex2 = /w:\s*['"]([^'"]+)['"],\s*t:\s*['"]([^'"]+)['"]/g;
  while ((match = regex2.exec(content)) !== null) {
    vocabList.push({ Lektion: lek, de: match[1], vi: match[2] });
  }
});

let md = "# Tổng Hợp Từ Vựng & Ngữ Pháp Toàn Hệ Thống\n\n";
md += "Dưới đây là danh sách đầy đủ toàn bộ từ vựng và chủ điểm ngữ pháp trong hệ thống ứng dụng:\n\n";

// I'll just append grammatik info manually later.
fs.writeFileSync('all_vocabs.json', JSON.stringify(vocabList, null, 2));
console.log('Words extracted: ' + vocabList.length);
