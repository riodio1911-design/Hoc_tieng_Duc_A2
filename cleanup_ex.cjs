const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const targetStr = \`                    ) : selectedLesson.id === "l20" && activeSubTab === "exercises" ? (<Lektion20VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l21" && activeSubTab === "exercises" ? (<Lektion21VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l22" && activeSubTab === "exercises" ? (<Lektion22VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l23" && activeSubTab === "exercises" ? (<Lektion23VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l24" && activeSubTab === "exercises" ? (<Lektion24VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l21" && activeSubTab === "exercises" ? (<Lektion21VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l22" && activeSubTab === "exercises" ? (<Lektion22VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l23" && activeSubTab === "exercises" ? (<Lektion23VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l24" && activeSubTab === "exercises" ? (<Lektion24VocabEx playAudio={playAudio} playingId={playingId} />\`;

const replacedStr = \`                    ) : selectedLesson.id === "l20" && activeSubTab === "exercises" ? (<Lektion20VocabEx playAudio={playAudio} playingId={playingId} />) : selectedLesson.id === "l21" && activeSubTab === "exercises" ? (<Lektion21VocabEx playAudio={playAudio} playingId={playingId} />)\`;

code = code.replace(targetStr, replacedStr);

fs.writeFileSync('src/App.tsx', code);
console.log('Cleaned Lektion21-24 VocabEx redundancies since they use custom exercises or fallback.');
