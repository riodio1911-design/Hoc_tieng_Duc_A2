const fs = require('fs');
let lines = fs.readFileSync('src/App.tsx', 'utf-8').split('\n');

// Find all duplicates of those constants
const uniqueLines = [];
const seenConstants = new Set();
for (const line of lines) {
  if (line.trim().startsWith('const Lektion')) {
    const constMatch = line.match(/(const Lektion\d+[^ ]+)/);
    if (constMatch) {
      if (seenConstants.has(constMatch[1])) {
        // skip duplicate
        continue;
      }
      seenConstants.add(constMatch[1]);
    }
  }
  uniqueLines.push(line);
}

fs.writeFileSync('src/App.tsx', uniqueLines.join('\n'));
console.log('Fixed duplications.');
