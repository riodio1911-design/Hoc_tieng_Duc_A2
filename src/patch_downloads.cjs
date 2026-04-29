const fs=require('fs');
const c=process.cwd();
const p=require('path');
for(let i=1;i<=15;i++){
  let f=p.join(c,'src/components/Lektion'+i+'Slides.tsx');
  if(fs.existsSync(f)){
    let t=fs.readFileSync(f,'utf8');
    t = t.replace(
      /<button disabled className=\{`px-6 py-2 rounded-xl font-bold transition-all text-sm \$\{activeSlideTab === 'downloads' \? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark\/40 hover:text-theme-dark\/80'\}`\}>Tải các bài giảng<\/button>/g,
      '<button disabled className=\"px-6 py-2 rounded-xl font-bold text-sm text-theme-dark/30 cursor-not-allowed\" title=\"Tính năng này đang được cập nhật\">Tải các bài giảng</button>'
    );
    fs.writeFileSync(f,t);
    console.log('patched', i);
  }
}
