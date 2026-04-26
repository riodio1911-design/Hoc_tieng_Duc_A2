const fs = require('fs');

const content = fs.readFileSync('src/constants.ts', 'utf8');

let words = [];

// use regex to match { id: "...", word: "...", meaning: "..." }
const regex = /word:\s*["']([^"']+)["'],\s*ipa:.*?\s*meaning:\s*["']([^"']+)["']/g;
let match;
while ((match = regex.exec(content)) !== null) {
  words.push({ w: match[1], t: match[2] });
}

// Write to a temporary check file
fs.writeFileSync('/tmp/check_words.json', JSON.stringify(words, null, 2));
console.log("Found " + words.length + " words in constants.ts");
