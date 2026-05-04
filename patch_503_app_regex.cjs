const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(/includes\("429"\) \|\|\s+errorString\.includes\("RESOURCE_EXHAUSTED"\)/g, 'includes("429") || errorString.includes("RESOURCE_EXHAUSTED") || errorString.includes("503") || errorString.includes("UNAVAILABLE") || errorString.includes("high demand")');

code = code.replace(/includes\("429"\) \|\|\s+error\.message\?\.includes\("RESOURCE_EXHAUSTED"\)/g, 'includes("429") || error.message?.includes("RESOURCE_EXHAUSTED") || error.message?.includes("503") || error.message?.includes("UNAVAILABLE") || error.message?.includes("high demand")');

fs.writeFileSync('src/App.tsx', code);
