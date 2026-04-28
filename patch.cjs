const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add Lektion 8 Imports
const l7ImportRegex = /import Lektion7Slides from '\.\/components\/Lektion7Slides';/;
const l8Imports = `import Lektion8VocabTheory from './components/Lektion8VocabTheory';
import Lektion8VocabEx from './components/Lektion8VocabEx';
import Lektion8GrammarTheory from './components/Lektion8GrammarTheory';
import Lektion8GrammarEx from './components/Lektion8GrammarEx';
import Lektion8Slides from './components/Lektion8Slides';
`;
code = code.replace(l7ImportRegex, `import Lektion7Slides from './components/Lektion7Slides';\n${l8Imports}`);

// 2. Add 'l8' to lecture button logic
code = code.replace(/\['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l13', 'l14', 'l15'/g, "['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l13', 'l14', 'l15'");

// 3. Add to lecture switch
const l7SlideRoute = /(\) : activeTab === 'lecture' && selectedLesson\.id === 'l7' \? \(\s*<Lektion7Slides playAudio=\{playAudio\} playingId=\{playingId\} onBack=\{.*\} \/>)/;
code = code.replace(l7SlideRoute, "$1\n                ) : activeTab === 'lecture' && selectedLesson.id === 'l8' ? (\n                  <Lektion8Slides onBack={() => setSelectedLesson(null)} />");

// 4. Update the OR condition on line 1536
code = code.replace(
  /\{\(selectedLesson\.id === 'l1' \|\| selectedLesson\.id === 'l2' \|\| selectedLesson\.id === 'l3' \|\| selectedLesson\.id === 'l13'/g, 
  "{(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l4' || selectedLesson.id === 'l5' || selectedLesson.id === 'l6' || selectedLesson.id === 'l7' || selectedLesson.id === 'l8' || selectedLesson.id === 'l13'"
);

// 5. Update array on line 1539
code = code.replace(
  /\(\['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l13', 'l14', 'l17'/g,
  "(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l13', 'l14', 'l17'"
);

// 6. Update array on line 1555
code = code.replace(
  /\['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l13', 'l14', 'l19'/g,
  "['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l13', 'l14', 'l19'"
);

// 7. Add Lektion8VocabTheory and Lektion8VocabEx
const l7VocabTheoryRoute = /(\) : selectedLesson\.id === 'l7' && activeSubTab === 'theory' \? \(\s*<Lektion7VocabTheory \/>)/;
code = code.replace(l7VocabTheoryRoute, "$1\n                      ) : selectedLesson.id === 'l8' && activeSubTab === 'theory' ? (\n                        <Lektion8VocabTheory />");

const l7VocabExRoute = /(\) : selectedLesson\.id === 'l7' && activeSubTab === 'exercises' \? \(\s*<Lektion7VocabEx \/>)/;
code = code.replace(l7VocabExRoute, "$1\n                      ) : selectedLesson.id === 'l8' && activeSubTab === 'exercises' ? (\n                        <Lektion8VocabEx />");

// 8. Add l7 and l8 to grammar
code = code.replace(
  /\(\['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l13', 'l14', 'l15'/g,
  "(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l13', 'l14', 'l15'"
);

// 9. Grammar Ex titles
const l7GrammarTitle = /selectedLesson\.id === 'l6' \? 'Bài tập Ngữ pháp \(Giới từ t\/g\)' : selectedLesson\.id === 'l5'/;
code = code.replace(
  l7GrammarTitle,
  "selectedLesson.id === 'l8' ? 'Bài tập Ngữ pháp (weil, deshalb)' : selectedLesson.id === 'l7' ? 'Bài tập Ngữ pháp (Câu mệnh lệnh)' : selectedLesson.id === 'l6' ? 'Bài tập Ngữ pháp (Giới từ t/g)' : selectedLesson.id === 'l5'"
);

// 10. Grammar theory and Ex routing
const l7GrammarTheoryRoute = /(\) : selectedLesson\.id === 'l7' && grammarSubTab === 'theory' \? \(\s*<Lektion7GrammarTheory \/>)/;
code = code.replace(l7GrammarTheoryRoute, "$1\n                      ) : selectedLesson.id === 'l8' && grammarSubTab === 'exercises' ? (\n                        <Lektion8GrammarEx />\n                      ) : selectedLesson.id === 'l8' && grammarSubTab === 'theory' ? (\n                        <Lektion8GrammarTheory />");

fs.writeFileSync('src/App.tsx', code);
