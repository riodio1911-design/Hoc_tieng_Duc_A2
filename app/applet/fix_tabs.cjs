const fs = require('fs');
const glob = fs.readdirSync('src/components').filter(f => f.startsWith('Lektion') && f.endsWith('Slides.tsx'));
for (const f of glob) {
  let content = fs.readFileSync('src/components/' + f, 'utf8');
  content = content.replace(
    /<button disabled className="px-6 py-2 rounded-xl font-bold text-sm text-theme-dark\/30 cursor-not-allowed" title=".*?">Tải các bài giảng<\/button>/g,
    '<button onClick={() => setActiveSlideTab(\'download\')} className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === \'download\' ? \'bg-white shadow-sm text-theme-primary\' : \'text-theme-dark/40 hover:text-theme-dark/80\'}`}>Tải các bài giảng</button>'
  );
  fs.writeFileSync('src/components/' + f, content);
}
console.log('Fixed tabs');
