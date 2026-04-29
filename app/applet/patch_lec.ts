import fs from 'fs';
import path from 'path';

const cwd = process.cwd();

for (let i = 1; i <= 15; i++) {
  const file = path.join(cwd, `src/components/Lektion${i}Slides.tsx`);
  if (!fs.existsSync(file)) {
    console.log(`Lektion${i}Slides.tsx not found`);
    continue;
  }

  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Add import if missing FileText
  if (!content.includes('FileText')) {
    content = content.replace(/import \{([^}]+)\} from 'lucide-react';/, (match, p1) => {
      const parts = p1.split(',').map(s => s.trim());
      if (!parts.includes('FileText')) parts.push('FileText');
      if (!parts.includes('Eye')) parts.push('Eye');
      if (!parts.includes('BookOpen')) parts.push('BookOpen');
      return `import { ${Array.from(new Set(parts)).join(', ')} } from 'lucide-react';`;
    });
  }

  // 1. Add state activeSlideTab
  if (!content.includes("const [activeSlideTab, setActiveSlideTab] = useState")) {
    content = content.replace(
      /const \[currentSlide, setCurrentSlide\] = useState\(-1\);/,
      `const [currentSlide, setCurrentSlide] = useState(-1);\n  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap' | 'downloads'>('roadmap');`
    );
  }

  // 2. Modify "Bản Đồ Lộ Trình Lektion X" -> "Bản Đồ Lộ Trình / Tải Xuống"
  content = content.replace(
    /Bản Đồ Lộ Trình Lektion \d+/g,
    `Bản Đồ Lộ Trình / Tải Xuống`
  );

  // 3. Inject the tabs buttons if not added yet
  if (!content.includes("setActiveSlideTab('roadmap')")) {
    
    // Replace the part right after `</div>` of the text-center
    content = content.replace(
      /<div className="grid md:grid-cols-2/g,
      `<div className="flex justify-center mb-4">
              <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
                <button
                  onClick={() => setActiveSlideTab('roadmap')}
                  className={\`px-6 py-2 rounded-xl font-bold transition-all text-sm \${activeSlideTab === 'roadmap' || !activeSlideTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}\`}
                >
                  Bản đồ lộ trình
                </button>
                <button
                  onClick={() => setActiveSlideTab('downloads')}
                  className={\`px-6 py-2 rounded-xl font-bold transition-all text-sm \${activeSlideTab === 'downloads' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}\`}
                >
                  Tải các bài giảng
                </button>
              </div>
            </div>

            {activeSlideTab === 'roadmap' ? (
            <div className="grid md:grid-cols-2`
    );
            
    // Now replace the end of it
    // Using Regex to find case 0 and replacing preceding tags.
    // In Lektion1Slides wait, some end differently:
    //             </div>
    //           </div>
    //         );
    //       case 0:
    content = content.replace(
      /(\s*<\/div>\n\s*<\/div>\n\s*\);\n\s*case 0:)/g,
      `
            </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-6 flex-1 bg-white p-10 rounded-[32px] border border-theme-primary/10 shadow-xl shadow-theme-dark/5">
                <div className="w-20 h-20 bg-theme-primary/10 text-theme-primary rounded-full flex items-center justify-center">
                  <BookOpen size={40} />
                </div>
                <h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng ${i}</h3>
                <p className="text-theme-dark/70 font-medium text-center max-w-md">
                  Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion ${i} dưới đây:
                </p>
                <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
                  <a href="/Leitfaden-L${i}-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                      <FileText className="text-theme-primary w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <span className="font-black text-theme-dark block text-lg">Bài Giảng L${i}</span>
                      <span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 bg-theme-primary/10 text-theme-primary px-4 py-2 rounded-full font-bold text-sm">
                      <Eye size={16} /> Xem PDF
                    </div>
                  </a>
                  
                  <a href="/Leitfaden-L${i}-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                      <FileText className="text-emerald-500 w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <span className="font-black text-theme-dark block text-lg">Bài Giảng L${i}</span>
                      <span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm">
                      <Eye size={16} /> Xem PDF
                    </div>
                  </a>
                </div>
              </div>
            )}$1`
    );
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Patched Lektion ' + i);
  } else {
    console.log('No changes needed for Lektion ' + i);
  }
}
