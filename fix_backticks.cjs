const fs = require('fs');
const files = [
  './src/components/Lektion11VocabTheory.tsx',
  './src/components/Lektion11VocabEx.tsx',
  './src/components/Lektion11GrammarTheory.tsx',
  './src/components/Lektion11GrammarEx.tsx',
  './src/components/Lektion11Slides.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\\\`/g, '`');
    content = content.replace(/\\\$/g, '$');
    fs.writeFileSync(file, content);
  }
});
console.log('Fixed backticks in all files.');
