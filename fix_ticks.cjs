const fs = require('fs');
let code = fs.readFileSync('src/components/ReviewAIRoleplay.tsx', 'utf-8');
code = code.replace(/\\`/g, '`');
fs.writeFileSync('src/components/ReviewAIRoleplay.tsx', code);
