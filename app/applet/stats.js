const fs = require('fs');

const lektions = ['15', '16', '17', '18', '21', '22', '23', '24'];
const report = [];

lektions.forEach(lek => {
  const data = { lektion: lek, vocabCount: 0, grammarCount: 0, vocabEx: 0, grammarEx: 0, games: 0, reading: 0 };
  
  const files = fs.readdirSync('src/components').filter(f => f.startsWith(`Lektion${lek}`));
  files.forEach(file => {
    const content = fs.readFileSync(`src/components/${file}`, 'utf-8');
    if (file.includes('VocabTheory') || file.includes('Slides')) {
      // count words roughly by finding id: 'v...' or word: '...' arrays
      const wordMatches = content.match(/word:\s*['"`]/g) || [];
      const termMatches = content.match(/term:\s*['"`]/g) || [];
      const idMatches = content.match(/id:\s*['"`]v\d+/g) || [];
      const totalWords = wordMatches.length + termMatches.length + idMatches.length;
      if (totalWords > 0) data.vocabCount += totalWords;
    }
    if (file.includes('GrammarTheory') || file.includes('Slides')) {
      const gMatch = content.match(/title:\s*['"`](.*?)[`"']/g) || [];
      if (gMatch.length > 0 && file.includes('Grammar')) data.grammarCount += gMatch.length;
    }
    if (file.includes('VocabEx') || file.includes('Exercises')) {
      // count questions
      const q = content.match(/question:\s*/g) || content.match(/word:\s*/g) || [];
      if (q.length > 0) data.vocabEx += q.length;
    }
    if (file.includes('GrammarEx') || file.includes('Exercises')) {
      // count questions
      const q = content.match(/question:\s*/g) || content.match(/sentence:\s*/g) || [];
      if (q.length > 0) data.grammarEx += q.length;
    }
    if (file.includes('Game') || file.includes('Quiz')) {
      data.games++;
    }
  });
  
  // reading check
  try {
     const read = fs.readFileSync('src/components/ReadingPractice.tsx', 'utf-8');
     if (read.includes(`lessonId === 'l${lek}'`)) data.reading++;
  } catch(e){}

  report.push(data);
});

console.log(JSON.stringify(report, null, 2));
