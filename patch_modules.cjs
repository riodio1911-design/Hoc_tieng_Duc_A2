const fs = require('fs');
const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

const modulesDataString = `const MODULE_DATA = [
  { id: 1, title: 'Modul 1', label: 'Berufe, Familie, Wohnen, Tourismus', bg: 'bg-emerald-500', color: 'text-emerald-600', border: 'border-emerald-500/20', hover: 'hover:border-emerald-500' },
  { id: 2, title: 'Modul 2', label: 'Einkaufen, Stadt, Kultur', bg: 'bg-teal-500', color: 'text-teal-600', border: 'border-teal-500/20', hover: 'hover:border-teal-500' },
  { id: 3, title: 'Modul 3', label: 'Sport, Gesundheit, Arbeitsleben', bg: 'bg-cyan-600', color: 'text-cyan-700', border: 'border-cyan-600/20', hover: 'hover:border-cyan-600' },
  { id: 4, title: 'Modul 4', label: 'Restaurant, Firmenporträt, Ernährung', bg: 'bg-blue-500', color: 'text-blue-600', border: 'border-blue-500/20', hover: 'hover:border-blue-500' },
  { id: 5, title: 'Modul 5', label: 'Sprachen, Post, Reisen', bg: 'bg-indigo-500', color: 'text-indigo-600', border: 'border-indigo-500/20', hover: 'hover:border-indigo-500' },
  { id: 6, title: 'Modul 6', label: 'Informationen, Klima, Wetter', bg: 'bg-violet-500', color: 'text-violet-600', border: 'border-violet-500/20', hover: 'hover:border-violet-500' },
  { id: 7, title: 'Modul 7', label: 'Medien, Musik, Bücher', bg: 'bg-amber-600', color: 'text-amber-700', border: 'border-amber-600/20', hover: 'hover:border-amber-600' },
  { id: 8, title: 'Modul 8', label: 'Auto, Berufe, Alltag', bg: 'bg-rose-500', color: 'text-rose-600', border: 'border-rose-500/20', hover: 'hover:border-rose-500' },
];`;

content = content.replace("const VOICES = [", `${modulesDataString}\n\nconst VOICES = [`);

const oldModulesBlock = `<div className="space-y-8">
                {[
                  { id: 1, title: 'Modul 1', label: 'Berufe, Familie, Wohnen, Tourismus', bg: 'bg-emerald-500', color: 'text-emerald-600', border: 'border-emerald-500/20', hover: 'hover:border-emerald-500' },
                  { id: 2, title: 'Modul 2', label: 'Einkaufen, Stadt, Kultur', bg: 'bg-teal-500', color: 'text-teal-600', border: 'border-teal-500/20', hover: 'hover:border-teal-500' },
                  { id: 3, title: 'Modul 3', label: 'Sport, Gesundheit, Arbeitsleben', bg: 'bg-cyan-600', color: 'text-cyan-700', border: 'border-cyan-600/20', hover: 'hover:border-cyan-600' },
                  { id: 4, title: 'Modul 4', label: 'Restaurant, Firmenporträt, Ernährung', bg: 'bg-blue-500', color: 'text-blue-600', border: 'border-blue-500/20', hover: 'hover:border-blue-500' },
                  { id: 5, title: 'Modul 5', label: 'Sprachen, Post, Reisen', bg: 'bg-indigo-500', color: 'text-indigo-600', border: 'border-indigo-500/20', hover: 'hover:border-indigo-500' },
                  { id: 6, title: 'Modul 6', label: 'Informationen, Klima, Wetter', bg: 'bg-violet-500', color: 'text-violet-600', border: 'border-violet-500/20', hover: 'hover:border-violet-500' },
                  { id: 7, title: 'Modul 7', label: 'Medien, Musik, Bücher', bg: 'bg-amber-600', color: 'text-amber-700', border: 'border-amber-600/20', hover: 'hover:border-amber-600' },
                  { id: 8, title: 'Modul 8', label: 'Auto, Berufe, Alltag', bg: 'bg-rose-500', color: 'text-rose-600', border: 'border-rose-500/20', hover: 'hover:border-rose-500' },
                ].map(modul => {`;

const newModulesBlock = `<div className="space-y-8">
                {selectedModuleId === null ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
                    {MODULE_DATA.map(modul => (
                      <button
                        key={modul.id}
                        onClick={() => setSelectedModuleId(modul.id)}
                        className={\`bg-white rounded-[2rem] p-6 shadow-sm border-2 \${modul.border} text-left transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-\${modul.color.replace('text-', '')}/10 \${modul.hover} cursor-pointer group flex flex-col items-start\`}
                      >
                         <div className={\`w-12 h-12 rounded-2xl \${modul.bg} flex items-center justify-center text-white text-xl font-black shadow-sm mb-5 group-hover:scale-110 transition-transform\`}>{modul.id}</div>
                         <h3 className={\`text-2xl font-black \${modul.color} font-display mb-2\`}>{modul.title}</h3>
                         <p className="text-xs text-theme-dark/60 font-bold leading-relaxed">{modul.label}</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="animate-in slide-in-from-right-4 fade-in duration-300">
                    <button 
                      onClick={() => setSelectedModuleId(null)} 
                      className="mb-8 flex items-center gap-2 text-theme-dark/60 hover:text-theme-dark font-black tracking-wide text-sm transition-colors py-2 px-4 rounded-full bg-black/5 hover:bg-black/10 w-fit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                      QUAY LẠI
                    </button>
                    {MODULE_DATA.filter(m => m.id === selectedModuleId).map(modul => {`;

content = content.replace(oldModulesBlock, newModulesBlock);

const endMapOld = `                })}

                {/* Review Module Button */}`;

const endMapNew = `                })}
                  </div>
                )}

                {/* Review Module Button */}`;

content = content.replace(endMapOld, endMapNew);

fs.writeFileSync(path, content);
console.log('Done!');
