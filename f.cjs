const fs = require('fs');
const glob = fs.readdirSync('src/components').filter(f => f.startsWith('Lektion') && f.endsWith('Slides.tsx'));
for (const f of glob) {
  let c = fs.readFileSync('src/components/' + f, 'utf8');
  c = c.replace(/<button disabled.*?Tải các bài giảng<\/button>/g, '<button onClick={() => setActiveSlideTab(\'download\')} className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === \'download\' ? \'bg-white shadow-sm text-theme-primary\' : \'text-theme-dark/40 hover:text-theme-dark/80\'}`}>Tải các bài giảng</button>');
  fs.writeFileSync('src/components/' + f, c);
}
