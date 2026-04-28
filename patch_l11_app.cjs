const fs = require('fs');
const path = './src/App.tsx';

let data = fs.readFileSync(path, 'utf8');

const imports = `import Lektion11VocabTheory from './components/Lektion11VocabTheory';
import Lektion11VocabEx from './components/Lektion11VocabEx';
import Lektion11GrammarTheory from './components/Lektion11GrammarTheory';
import Lektion11GrammarEx from './components/Lektion11GrammarEx';
import Lektion11Slides from './components/Lektion11Slides';
`;

// Inject imports
data = data.replace(
  "import Lektion13VocabTheory from './components/Lektion13VocabTheory';",
  imports + "import Lektion13VocabTheory from './components/Lektion13VocabTheory';"
);

// Add to lecture tab include logic
data = data.replace(
  "(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l13'",
  "(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11', 'l13'"
);

// Add to lecture switch
data = data.replace(
  ") : activeTab === 'lecture' && selectedLesson.id === 'l13' ? (",
  ") : activeTab === 'lecture' && selectedLesson.id === 'l11' ? (\n                  <Lektion11Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />\n                ) : activeTab === 'lecture' && selectedLesson.id === 'l13' ? ("
);

// Add to vocab include logic
data = data.replace(
  "(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l13'",
  "(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11', 'l13'"
);

data = data.replace(
  "(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l4' || selectedLesson.id === 'l5' || selectedLesson.id === 'l6' || selectedLesson.id === 'l7' || selectedLesson.id === 'l8' || selectedLesson.id === 'l9' || selectedLesson.id === 'l10' || selectedLesson.id === 'l13'",
  "(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l4' || selectedLesson.id === 'l5' || selectedLesson.id === 'l6' || selectedLesson.id === 'l7' || selectedLesson.id === 'l8' || selectedLesson.id === 'l9' || selectedLesson.id === 'l10' || selectedLesson.id === 'l11' || selectedLesson.id === 'l13'"
);

// Add vocab theory switch
data = data.replace(
  "selectedLesson.id === 'l10' ? <Lektion10VocabTheory lessonItems={selectedLesson.items} playAudio={playAudio} /> :",
  "selectedLesson.id === 'l10' ? <Lektion10VocabTheory lessonItems={selectedLesson.items} playAudio={playAudio} /> : selectedLesson.id === 'l11' ? <Lektion11VocabTheory lessonItems={selectedLesson.items} playAudio={playAudio} /> :"
);

// Add vocab ex switch
data = data.replace(
  "selectedLesson.id === 'l10' ? <Lektion10VocabEx playAudio={playAudio} /> :",
  "selectedLesson.id === 'l10' ? <Lektion10VocabEx playAudio={playAudio} /> : selectedLesson.id === 'l11' ? <Lektion11VocabEx playAudio={playAudio} /> :"
);

// Add grammar include logic
data = data.replace(
  "(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l4' || selectedLesson.id === 'l5' || selectedLesson.id === 'l6' || selectedLesson.id === 'l7' || selectedLesson.id === 'l8' || selectedLesson.id === 'l9' || selectedLesson.id === 'l10' || selectedLesson.id === 'l13'",
  "(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l4' || selectedLesson.id === 'l5' || selectedLesson.id === 'l6' || selectedLesson.id === 'l7' || selectedLesson.id === 'l8' || selectedLesson.id === 'l9' || selectedLesson.id === 'l10' || selectedLesson.id === 'l11' || selectedLesson.id === 'l13'"
);

// Add grammar theory switch
data = data.replace(
  "selectedLesson.id === 'l10' ? <Lektion10GrammarTheory playAudio={playAudio} /> :",
  "selectedLesson.id === 'l10' ? <Lektion10GrammarTheory playAudio={playAudio} /> : selectedLesson.id === 'l11' ? <Lektion11GrammarTheory playAudio={playAudio} /> :"
);

// Add grammar ex switch
data = data.replace(
  "selectedLesson.id === 'l10' ? <Lektion10GrammarEx playAudio={playAudio} /> :",
  "selectedLesson.id === 'l10' ? <Lektion10GrammarEx playAudio={playAudio} /> : selectedLesson.id === 'l11' ? <Lektion11GrammarEx playAudio={playAudio} /> :"
);

fs.writeFileSync(path, data);
console.log('App.tsx updated successfully with Lektion 11');
