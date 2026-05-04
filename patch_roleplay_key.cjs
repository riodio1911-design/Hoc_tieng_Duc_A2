const fs = require('fs');
let code = fs.readFileSync('src/components/ReviewAIRoleplay.tsx', 'utf-8');

code = code.replace(
  /if \(errMsg\.includes\('429'\) || errMsg\.includes\('RESOURCE_EXHAUSTED'\)\) \{/g,
  `if (errMsg.includes('400') || errMsg.includes('API_KEY_INVALID') || errMsg.includes('API key not valid')) {
         setMessages([{ id: Date.now().toString(), role: 'bot', text: 'API Key không hợp lệ. Vui lòng vào Cài đặt để thiết lập API Key hợp lệ.' }]);
      } else if (errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED')) {`
);

fs.writeFileSync('src/components/ReviewAIRoleplay.tsx', code);
