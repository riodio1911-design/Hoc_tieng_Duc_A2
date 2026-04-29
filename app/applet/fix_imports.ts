import fs from 'fs';
import path from 'path';

const c = process.cwd();

for (let i = 1; i <= 15; i++) {
  let f = path.join(c, 'src/components/Lektion' + i + 'Slides.tsx');
  if (!fs.existsSync(f)) continue;

  let t = fs.readFileSync(f, 'utf8');
  let m = t.match(/import \{([^}]+)\} from 'lucide-react';/);
  
  if (m) {
    let parts = m[1].split(',').map(s => s.trim());
    ['FileText', 'Eye', 'BookOpen'].forEach(x => {
      if (!parts.includes(x)) parts.push(x);
    });
    
    t = t.replace(m[0], 'import { ' + parts.join(', ') + " } from 'lucide-react';");
    fs.writeFileSync(f, t);
    console.log('imports fixed', i);
  }
}
