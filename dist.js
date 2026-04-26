const fs = require("fs");
const files = fs.readdirSync("src/components").filter((f) => f.startsWith("Lektion") && f.endsWith(".tsx"));
let vocabList = [];
files.forEach((f) => {
  const content = fs.readFileSync("src/components/" + f, "utf8");
  let match;
  const regex1 = /word:\s*['"]([^'"]+)['"],\s*meaning:\s*['"]([^'"]+)['"]/g;
  while ((match = regex1.exec(content)) !== null) {
    vocabList.push({ Lektion: f.split(/[A-Z]/)[1], de: match[1], vi: match[2] });
  }
  const regex2 = /w:\s*['"]([^'"]+)['"],\s*t:\s*['"]([^'"]+)['"]/g;
  while ((match = regex2.exec(content)) !== null) {
    vocabList.push({ Lektion: f.split(/[A-Z]/)[1], de: match[1], vi: match[2] });
  }
  const regex3 = /term:\s*['"]([^'"]+)['"]\s*\}?/g;
  while ((match = regex3.exec(content)) !== null) {
    vocabList.push({ Lektion: f.split(/[A-Z]/)[1], de: match[1], vi: "" });
  }
});
fs.writeFileSync("all_vocabs.json", JSON.stringify(vocabList, null, 2));
console.log("Words extracted: " + vocabList.length);
