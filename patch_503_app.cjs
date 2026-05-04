const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replaceAll('errorString.includes("429") ||\\n              errorString.includes("RESOURCE_EXHAUSTED")',
'errorString.includes("429") ||\\n              errorString.includes("RESOURCE_EXHAUSTED") ||\\n              errorString.includes("503") ||\\n              errorString.includes("UNAVAILABLE") ||\\n              errorString.includes("high demand")');

code = code.replaceAll('errorString.includes("429") ||\\n          errorString.includes("RESOURCE_EXHAUSTED")',
'errorString.includes("429") ||\\n          errorString.includes("RESOURCE_EXHAUSTED") ||\\n          errorString.includes("503") ||\\n          errorString.includes("UNAVAILABLE") ||\\n          errorString.includes("high demand")');

code = code.replaceAll('error.message?.includes("429") ||\\n            error.message?.includes("RESOURCE_EXHAUSTED")',
'error.message?.includes("429") ||\\n            error.message?.includes("RESOURCE_EXHAUSTED") ||\\n            error.message?.includes("503") ||\\n            error.message?.includes("UNAVAILABLE") ||\\n            error.message?.includes("high demand")');

fs.writeFileSync('src/App.tsx', code);
