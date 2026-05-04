const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
  'if (JSON.stringify(e).includes("429")) {',
  'if (JSON.stringify(e).includes("429") || JSON.stringify(e).includes("503") || JSON.stringify(e).includes("UNAVAILABLE") || JSON.stringify(e).includes("RESOURCE_EXHAUSTED") || JSON.stringify(e).includes("high demand")) {'
);

fs.writeFileSync('src/App.tsx', code);
