const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const imports = `
const Lektion21VocabTheory = lazy(() => import('./components/Lektion21VocabTheory'));
const Lektion21VocabEx = lazy(() => import('./components/Lektion21VocabEx'));
const Lektion22VocabTheory = lazy(() => import('./components/Lektion22VocabTheory'));
const Lektion22VocabEx = lazy(() => import('./components/Lektion22VocabEx'));
const Lektion23VocabTheory = lazy(() => import('./components/Lektion23VocabTheory'));
const Lektion23VocabEx = lazy(() => import('./components/Lektion23VocabEx'));
const Lektion24VocabTheory = lazy(() => import('./components/Lektion24VocabTheory'));
const Lektion24VocabEx = lazy(() => import('./components/Lektion24VocabEx'));
`;

code = code.replace("const Lektion21Slides = lazy", imports.trim() + "\nconst Lektion21Slides = lazy");

const exL20T = /\) : selectedLesson\.id === "l20" &&\s*activeSubTab === "theory" \? \(\s*<Lektion20VocabTheory\s*playAudio=\{playAudio\}\s*playingId=\{playingId\}\s*\/>/g;

code = code.replace(exL20T, 
  `) : selectedLesson.id === "l20" && activeSubTab === "theory" ? (<Lektion20VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l21" && activeSubTab === "theory" ? (<Lektion21VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l22" && activeSubTab === "theory" ? (<Lektion22VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l23" && activeSubTab === "theory" ? (<Lektion23VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l24" && activeSubTab === "theory" ? (<Lektion24VocabTheory playAudio={playAudio} playingId={playingId} />`
);

const exL20E = /\) : selectedLesson\.id === "l20" &&\s*activeSubTab === "exercises" \? \(\s*<Lektion20VocabEx\s*playAudio=\{playAudio\}\s*playingId=\{playingId\}\s*\/>/g;

code = code.replace(exL20E, 
  `) : selectedLesson.id === "l20" && activeSubTab === "exercises" ? (<Lektion20VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l21" && activeSubTab === "exercises" ? (<Lektion21VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l22" && activeSubTab === "exercises" ? (<Lektion22VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l23" && activeSubTab === "exercises" ? (<Lektion23VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l24" && activeSubTab === "exercises" ? (<Lektion24VocabEx playAudio={playAudio} playingId={playingId} />`
);

fs.writeFileSync('src/App.tsx', code);
console.log('App.tsx linked');
