const fs = require('fs');

let totalW = 0;
let totalWord = 0;
let fileStats = {};

function grep(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = dir + '/' + f;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      grep(fullPath);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const count1 = (content.match(/w:/g) || []).length;
      const count2 = (content.match(/word:/g) || []).length;
      if (count1 || count2) {
        fileStats[fullPath] = { w: count1, word: count2 };
      }
      totalW += count1;
      totalWord += count2;
    }
  }
}
grep('src');
console.log('total w:', totalW);
console.log('total word:', totalWord);
console.log(JSON.stringify(fileStats, null, 2));
