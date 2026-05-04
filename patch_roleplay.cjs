const fs = require('fs');

let file = fs.readFileSync('src/components/ReviewAIRoleplay.tsx', 'utf-8');

file = file.replace(
  /} catch \(error\) \{\s*console\.error\(error\);\s*setMessages\(\[\{ id: Date\.now\(\)\.toString\(\), role: 'bot', text: 'Xin lỗi, có lỗi xảy ra khi kết nối với AI\.' \}\]\);\s*\}/,
  `} catch (error: any) {
      console.error(error);
      const errMsg = error.message || '';
      if (errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED')) {
         setMessages([{ id: Date.now().toString(), role: 'bot', text: 'Hệ thống AI đã hết lượt xử lý miễn phí. Vui lòng thiết lập API Key hoặc thử lại sau.' }]);
      } else if (errMsg.includes('503') || errMsg.includes('UNAVAILABLE') || errMsg.includes('high demand')) {
         setMessages([{ id: Date.now().toString(), role: 'bot', text: 'Máy chủ AI đang quá tải (503). Vui lòng đợi trong giây lát và thử lại.' }]);
      } else {
         setMessages([{ id: Date.now().toString(), role: 'bot', text: 'Xin lỗi, có lỗi xảy ra khi kết nối với AI.' }]);
      }
    }`
);

file = file.replace(
  /} catch \(error\) \{\s*console\.error\(error\);\s*setMessages\(prev => \[\.\.\.prev, \{ id: Date\.now\(\)\.toString\(\), role: 'bot', text: 'Xin lỗi, có lỗi kết nối\.' \}\]\);\s*\}/,
  `} catch (error: any) {
       console.error(error);
       const errMsg = error.message || '';
       if (errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED')) {
           setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text: 'Hệ thống AI đã hết lượt xử lý. Vui lòng thiết lập API Key hoặc thử lại sau.' }]);
       } else if (errMsg.includes('503') || errMsg.includes('UNAVAILABLE') || errMsg.includes('high demand')) {
           setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text: 'Máy chủ AI đang quá tải (503). Vui lòng đợi trong giây lát và thử lại.' }]);
       } else {
           setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text: 'Xin lỗi, có lỗi kết nối.' }]);
       }
    }`
);

fs.writeFileSync('src/components/ReviewAIRoleplay.tsx', file);
