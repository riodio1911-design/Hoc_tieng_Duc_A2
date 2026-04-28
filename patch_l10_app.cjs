const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf8');

let newContent = content.replace(
  /\(selectedLesson.id === 'l1' \|\| selectedLesson.id === 'l2' \|\| selectedLesson.id === 'l3' \|\| selectedLesson.id === 'l4' \|\| selectedLesson.id === 'l5' \|\| selectedLesson.id === 'l6' \|\| selectedLesson.id === 'l7' \|\| selectedLesson.id === 'l8' \|\| selectedLesson.id === 'l9' \|\| selectedLesson.id === 'l13'/g,
  "(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l4' || selectedLesson.id === 'l5' || selectedLesson.id === 'l6' || selectedLesson.id === 'l7' || selectedLesson.id === 'l8' || selectedLesson.id === 'l9' || selectedLesson.id === 'l10' || selectedLesson.id === 'l13'"
)

newContent = newContent.replace(
  /\{\(\['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l13'/g,
  "{(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l13'"
);

// Grammar subtitle text
newContent = newContent.replace(
  "selectedLesson.id === 'l9' ? 'Bài tập Ngữ pháp (So sánh)' : selectedLesson.id === 'l8'",
  "selectedLesson.id === 'l10' ? 'Bài tập Ngữ pháp (dass)' : selectedLesson.id === 'l9' ? 'Bài tập Ngữ pháp (So sánh)' : selectedLesson.id === 'l8'"
);

// Add imports for Lektion 10 components
const imports = `import Lektion9VocabTheory from './components/Lektion9VocabTheory';
import Lektion9VocabEx from './components/Lektion9VocabEx';
import Lektion9GrammarTheory from './components/Lektion9GrammarTheory';
import Lektion9GrammarEx from './components/Lektion9GrammarEx';
import Lektion9Slides from './components/Lektion9Slides';
import Lektion10VocabTheory from './components/Lektion10VocabTheory';
import Lektion10VocabEx from './components/Lektion10VocabEx';
import Lektion10GrammarTheory from './components/Lektion10GrammarTheory';
import Lektion10GrammarEx from './components/Lektion10GrammarEx';
import Lektion10Slides from './components/Lektion10Slides';`;

newContent = newContent.replace(
  /import Lektion9VocabTheory from '\.\/components\/Lektion9VocabTheory';\nimport Lektion9VocabEx from '\.\/components\/Lektion9VocabEx';\nimport Lektion9GrammarTheory from '\.\/components\/Lektion9GrammarTheory';\nimport Lektion9GrammarEx from '\.\/components\/Lektion9GrammarEx';\nimport Lektion9Slides from '\.\/components\/Lektion9Slides';/,
  imports
);

// Vocab Theory
const vocabTheory = `selectedLesson.id === 'l9' ? (
                            <Lektion9VocabTheory lessonItems={selectedLesson.items} playAudio={playAudio} />
                          ) : selectedLesson.id === 'l10' ? (
                            <Lektion10VocabTheory lessonItems={selectedLesson.items} playAudio={playAudio} />
                          ) : selectedLesson.id === 'l13'`;
newContent = newContent.replace(
  /selectedLesson\.id === 'l9' \? \(\n\s*<Lektion9VocabTheory lessonItems=\{selectedLesson\.items\} playAudio=\{playAudio\} \/>\n\s*\) : selectedLesson\.id === 'l13'/g,
  vocabTheory
);

// Vocab Ex
const vocabEx = `selectedLesson.id === 'l9' ? (
                            <Lektion9VocabEx lessonItems={selectedLesson.items} playAudio={playAudio} />
                          ) : selectedLesson.id === 'l10' ? (
                            <Lektion10VocabEx lessonItems={selectedLesson.items} playAudio={playAudio} />
                          ) : selectedLesson.id === 'l13'`;

newContent = newContent.replace(
  /selectedLesson\.id === 'l9' \? \(\n\s*<Lektion9VocabEx lessonItems=\{selectedLesson\.items\} playAudio=\{playAudio\} \/>\n\s*\) : selectedLesson\.id === 'l13'/g,
  vocabEx
);

// Grammar Theory
const grammarTheory = `selectedLesson.id === 'l9' ? (
                            <Lektion9GrammarTheory playAudio={playAudio} />
                          ) : selectedLesson.id === 'l10' ? (
                            <Lektion10GrammarTheory playAudio={playAudio} />
                          ) : selectedLesson.id === 'l13'`;

newContent = newContent.replace(
  /selectedLesson\.id === 'l9' \? \(\n\s*<Lektion9GrammarTheory playAudio=\{playAudio\} \/>\n\s*\) : selectedLesson\.id === 'l13'/g,
  grammarTheory
);

// Grammar Ex
const grammarEx = `selectedLesson.id === 'l9' ? (
                            <Lektion9GrammarEx />
                          ) : selectedLesson.id === 'l10' ? (
                            <Lektion10GrammarEx />
                          ) : selectedLesson.id === 'l13'`;

newContent = newContent.replace(
  /selectedLesson\.id === 'l9' \? \(\n\s*<Lektion9GrammarEx \/>\n\s*\) : selectedLesson\.id === 'l13'/g,
  grammarEx
);

// Slides
const slides = `selectedLesson.id === 'l9' ? (
                  <Lektion9Slides playAudio={playAudio} playingId={playingAudioId} />
                ) : selectedLesson.id === 'l10' ? (
                  <Lektion10Slides playAudio={playAudio} playingId={playingAudioId} />
                ) : selectedLesson.id === 'l13'`;

newContent = newContent.replace(
  /selectedLesson\.id === 'l9' \? \(\n\s*<Lektion9Slides playAudio=\{playAudio\} playingId=\{playingAudioId\} \/>\n\s*\) : selectedLesson\.id === 'l13'/g,
  slides
);

fs.writeFileSync('src/App.tsx', newContent);
