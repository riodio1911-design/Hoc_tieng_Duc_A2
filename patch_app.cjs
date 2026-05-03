const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf-8');

// Insert lazy imports around line 150 (after Lektion24VocabEx)
const importsToInsert = `
const Lektion15VocabTheory = lazy(() => import('./components/Lektion15VocabTheory'));
const Lektion16VocabTheory = lazy(() => import('./components/Lektion16VocabTheory'));
const Lektion22GrammarTheory = lazy(() => import('./components/Lektion22GrammarTheory'));
const Lektion23GrammarTheory = lazy(() => import('./components/Lektion23GrammarTheory'));
const Lektion24GrammarTheory = lazy(() => import('./components/Lektion24GrammarTheory'));
`;

appContent = appContent.replace(
  "const Lektion24VocabEx = lazy(() => import('./components/Lektion24VocabEx'));",
  "const Lektion24VocabEx = lazy(() => import('./components/Lektion24VocabEx'));" + importsToInsert
);

// Insert rendering logic.
// Find:
// `) : selectedLesson.id === "l20" && activeSubTab === "theory" ? (<Lektion20VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l21" && activeSubTab === "theory" ? (<Lektion21VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l22" && activeSubTab === "theory" ? (<Lektion22VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l23" && activeSubTab === "theory" ? (<Lektion23VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l24" && activeSubTab === "theory" ? (<Lektion24VocabTheory playAudio={playAudio} playingId={playingId} />`
// Note: line 2342 already has l20-l24!
// So we just need to add l15 and l16 to that line or near it.
// Let's replace the line starting with `) : selectedLesson.id === "l20"`
const vocabReplaceTarget = `) : selectedLesson.id === "l20" && activeSubTab === "theory" ? (<Lektion20VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l21" && activeSubTab === "theory" ? (<Lektion21VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l22" && activeSubTab === "theory" ? (<Lektion22VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l23" && activeSubTab === "theory" ? (<Lektion23VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l24" && activeSubTab === "theory" ? (<Lektion24VocabTheory playAudio={playAudio} playingId={playingId} />`;
const vocabReplacement = `) : selectedLesson.id === "l15" && activeSubTab === "theory" ? (<Lektion15VocabTheory playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l16" && activeSubTab === "theory" ? (<Lektion16VocabTheory playAudio={playAudio} playingId={playingId} />` + vocabReplaceTarget;

appContent = appContent.replace(vocabReplaceTarget, vocabReplacement);

// For Grammar theory, near Lektion21GrammarTheory
// Find:
// `                    ) : selectedLesson.id === "l21" &&
//                       grammarSubTab === "theory" ? (
//                       <Lektion21GrammarTheory
//                         playAudio={playAudio}
//                         playingId={playingId}
//                       />`
// And we add l22, l23, l24
const grammarTarget = `                    ) : selectedLesson.id === "l21" &&
                      grammarSubTab === "theory" ? (
                      <Lektion21GrammarTheory
                        playAudio={playAudio}
                        playingId={playingId}
                      />`;

const grammarReplacement = grammarTarget + `
                    ) : selectedLesson.id === "l22" &&
                      grammarSubTab === "theory" ? (
                      <Lektion22GrammarTheory
                        playAudio={playAudio}
                        playingId={playingId}
                      />
                    ) : selectedLesson.id === "l23" &&
                      grammarSubTab === "theory" ? (
                      <Lektion23GrammarTheory
                        playAudio={playAudio}
                        playingId={playingId}
                      />
                    ) : selectedLesson.id === "l24" &&
                      grammarSubTab === "theory" ? (
                      <Lektion24GrammarTheory
                        playAudio={playAudio}
                        playingId={playingId}
                      />`;

appContent = appContent.replace(grammarTarget, grammarReplacement);

fs.writeFileSync('src/App.tsx', appContent);
console.log('App.tsx patched successfully');
