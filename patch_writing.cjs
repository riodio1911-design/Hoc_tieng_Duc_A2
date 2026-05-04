const fs = require('fs');

let file = fs.readFileSync('src/components/WritingPractice.tsx', 'utf-8');
file = file.replace(
  "setError('Có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.');",
  "if (err?.message?.includes('503') || err?.message?.includes('UNAVAILABLE')) { setError('Máy chủ AI đang quá tải (503). Vui lòng thử lại sau.'); } else if (err?.message?.includes('429') || err?.message?.includes('RESOURCE_EXHAUSTED')) { setError('Hệ thống AI đã hết lượt xử lý miễn phí. Vui lòng thử lại sau hoặc nhập API Key.'); } else { setError('Có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.'); }"
);
fs.writeFileSync('src/components/WritingPractice.tsx', file);
