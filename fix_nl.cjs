const fs = require('fs');
['src/components/SpeakingPractice.tsx', 'src/components/ReadingPractice.tsx', 'src/components/WritingPractice.tsx'].forEach(p => { 
  let c = fs.readFileSync(p, 'utf8'); 
  c = c.replace(/\\n/g, '\n'); 
  fs.writeFileSync(p, c); 
});
console.log('Fixed');
