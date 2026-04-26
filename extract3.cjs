const fs = require('fs');

let md = "# Tổng Hợp Từ Vựng & Ngữ Pháp Toàn Hệ Thống\n\n";
let allVocabCount = 0;

function parseWords(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const words = [];
  
  // Look for { word: "...", meaning: "..." }
  const regex1 = /(?:word|w):\s*['"]([^'"]+)['"],\s*(?:meaning|translation|t):\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex1.exec(content)) !== null) {
    words.push({ de: match[1], vi: match[2] });
  }
  return words;
}

try {
  const files = fs.readdirSync('src/components').filter(f => f.startsWith('Lektion') && f.endsWith('.tsx'));
  files.forEach(f => {
    const words = parseWords('src/components/' + f);
    if (words.length > 0) {
      const lektionMatch = f.match(/Lektion(\d+)/);
      const lekName = lektionMatch ? `Lektion ${lektionMatch[1]}` : f;
      md += `### ${lekName}\n\n`;
      words.forEach(w => {
        md += `- **${w.de}**: ${w.vi}\n`;
        allVocabCount++;
      });
      md += '\n';
    }
  });

  console.log("Found " + allVocabCount + " words in total.");
  fs.writeFileSync('Danh_Sach_Tu_Vung_Ngu_Phap.md', md, 'utf8');
  console.log("Created MD file");
} catch (e) {
  console.error(e);
}
