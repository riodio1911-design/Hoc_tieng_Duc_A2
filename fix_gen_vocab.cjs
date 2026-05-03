const fs = require('fs');
let code = fs.readFileSync('gen_vocab.cjs', 'utf-8');
code = code.replace(/\\`/g, '`');
code = code.replace(/\\\${/g, '${');
fs.writeFileSync('gen_vocab.cjs', code);
console.log('Fixed syntax in gen_vocab.cjs');
