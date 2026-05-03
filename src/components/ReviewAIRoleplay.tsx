import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, PlayCircle, RefreshCw, Mic } from 'lucide-react';
import { getAI } from '../ai';

const ai = getAI();

type Message = {
  id: string;
  role: 'bot' | 'user';
  text: string;
  feedback?: string;
};

const SCENARIOS = [
  {
    id: 's1',
    title: 'Giao tiếp cơ bản & Gia đình (Lektion 1-3)',
    description: 'Bạn gặp một người bạn mới (AI) tại lớp học tiếng Đức. Hai người chào hỏi và trò chuyện về bản thân, gia đình và nghề nghiệp.',
    prompt: `Bạn là một học viên tiếng Đức thân thiện đến từ Đức. Bạn đang đóng vai trò (roleplay) với một người bạn mới trình độ A2.
Nhiệm vụ của bạn:
1. Bắt đầu bằng việc chào hỏi, giới thiệu tên và hỏi tên người kia.
2. Đợi user trả lời. Khi user trả lời, kiểm tra lỗi ngữ pháp tiếng Đức trong câu trả lời.
3. Liên tục duy trì đoạn hội thoại về các chủ đề: nghề nghiệp (Beruf), gia đình (Familie), nơi ở (Wohnort).
4. Bạn sẽ trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về lỗi sai (nếu có) và khen ngợi nếu người học làm tốt.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON, không có Markdown formatting block.`
  },
  {
    id: 's2',
    title: 'Mua thực phẩm tại siêu thị (Lektion 4)',
    description: 'Bạn vào một siêu thị để mua đồ. Người bán hàng (AI) sẽ hỏi bạn muốn mua gì.',
    prompt: `Bạn là giám sát/bán hàng (Verkäufer/in) tại một siêu thị. Bạn đóng vai với người học tiếng Đức A2.
Nhiệm vụ của bạn:
1. Bắt đầu bằng: "Guten Tag, was darf es sein?"
2. Nhận yêu cầu mua đồ của user. Hỏi xem họ cần thêm gì, số lượng, v.v..
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về ngữ pháp/từ vựng của người học.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON, không bọc trong Markdown.`
  },
  {
    id: 's3',
    title: 'Tại bệnh viện/Bác sĩ (Lektion 8)',
    description: 'Bạn bị ốm/tai nạn và đến gặp bác sĩ. Bác sĩ (AI) hỏi thăm bạn.',
    prompt: `Bạn là bác sĩ (Arzt/Ärztin). User đến khám bệnh.
Nhiệm vụ:
1. Bắt đầu: "Guten Tag. Was fehlt Ihnen denn?"
2. Nghe triệu chứng của user. Đưa ra lời khuyên.
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về ngữ pháp/từ vựng.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.`
  },
  {
    id: 's4',
    title: 'Tại nhà hàng (Lektion 10)',
    description: 'Bạn vào một nhà hàng gọi món. Phục vụ (AI) sẽ nhận gọi món và giải quyết phàn nàn của bạn.',
    prompt: `Bạn là người bồi bàn (Kellner/in). User là thực khách.
Nhiệm vụ:
1. Đưa menu và hỏi muốn uống gì trước: "Guten Abend. Hier ist die Speisekarte. Möchten Sie schon etwas trinken?"
2. Nhận món, có lúc bạn vô tình mang đồ ăn nguội/sai để khách phàn nàn và bạn phải xin lỗi.
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về ngữ pháp/từ vựng.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.`
  },
  {
    id: 's5',
    title: 'Bưu cục và Gửi đồ (Lektion 14)',
    description: 'Bạn muốn gửi một bưu kiện. Nhân viên bưu điện (AI) sẽ hỗ trợ bạn.',
    prompt: `Bạn là nhân viên bưu điện (Postbeamter). User muốn làm thủ tục gửi đồ.
Nhiệm vụ:
1. Chào hỏi: "Guten Tag, wie kann ich Ihnen helfen?"
2. Cung cấp thông tin giá cả, cách điền form (Formular ausfüllen).
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về ngữ pháp/từ vựng.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.`
  },
  {
    id: 's6',
    title: 'Sự cố phòng Khách sạn (Lektion 16)',
    description: 'Bạn ở khách sạn, nhưng phòng có vấn đề (Wifi hỏng/máy lạnh không chạy...). Hãy gọi phản ánh.',
    prompt: `Bạn là lễ tân khách sạn (Rezeptionist/in). User là khách, gọi điện phản ánh phòng.
Nhiệm vụ:
1. Bắt điện thoại: "Rezeption, guten Tag. Was gibt's?"
2. Nhận phàn nàn và xin lỗi, đưa ra cách khắc phục (cử người lên sửa/đổi phòng).
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về ngữ pháp/từ vựng.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.`
  },
  {
    id: 's7',
    title: 'Hỏi và chỉ đường (Lektion 18)',
    description: 'Bạn bị lạc ở Đức. Hỏi đường một người địa phương (AI).',
    prompt: `Bạn là người địa phương ở Berlin. Trông thấy user có vẻ đang tìm đường.
Nhiệm vụ:
1. Bắt chuyện trước: "Entschuldigung, suchen Sie etwas? Kann ich Ihnen helfen?"
2. Giúp chỉ đường (bằng từ geradeaus, an der Ampel rechts, v.v...).
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về ngữ pháp/từ vựng.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.`
  },
  {
    id: 's8',
    title: 'Đặt lịch và Dời lịch hẹn (Lektion 21-22)',
    description: 'Bạn gọi điện để đặt một lịch hẹn chuyên viên ngân hàng và sau đó đổi lịch.',
    prompt: `Bạn là lễ tân/chuyên viên tư vấn. User A2 gọi điện đặt lịch hẹn.
Trình độ: A2.
1. Bắt đầu bằng việc nhấc máy: "Bank, guten Tag. Was kann ich für Sie tun?"
2. Đợi user trả lời. Khi user trả lời, kiểm tra ngữ pháp tiếng Đức. Sau đó tạo tình huống user phải dời lịch hẹn đã đặt.
3. Luôn trả lời dạng JSON:
{
  "feedback": "Nhận xét tiếng Việt về câu tiếng Đức của user.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC để tiếp tục tình huống."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.`
  },
  {
    id: 's9',
    title: 'Phỏng vấn xin việc (Lektion 23)',
    description: 'Bạn tham gia phỏng vấn xin việc. Trả lời các câu hỏi về kinh nghiệm và bản thân.',
    prompt: `Bạn là người phỏng vấn xin việc (Personalchef). User đến phỏng vấn.
Nhiệm vụ:
1. Chào hỏi, mời ngồi: "Guten Tag, nehmen Sie bitte Platz. Erzählen Sie uns bitte ein bisschen von sich."
2. Đặt câu hỏi về lý do ứng tuyển, kinh nghiệm việc làm (Berufserfahrung).
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về ngữ pháp/từ vựng.",
  "reply": "Câu hỏi/đáp tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.`
  },
  {
    id: 's10',
    title: 'Cửa hải quan sân bay (Zoll) (Lektion 24)',
    description: 'Bạn vừa đáp máy bay xuống Đức. Nhân viên hải quan (AI) sẽ kiểm tra hộ chiếu và yêu cầu mở hành lý.',
    prompt: `Bạn là một nhân viên hải quan người Đức (Zöllner) tại sân bay Frankfurt. Bạn đang đóng vai trò với học viên A2.
Nhiệm vụ của bạn:
1. Bắt đầu bằng việc chào hỏi và yêu cầu xem hộ chiếu.
2. Đợi user trả lời. Hỏi về mục đích nhập cảnh, người thân ở Đức, thời gian lưu trú.
3. Bạn sẽ trả lời bằng JSON:
{
  "feedback": "Nhận xét ngắn gọn bằng TIẾNG VIỆT về lỗi sai (nếu có).",
  "reply": "Câu tiếp theo của bạn (nhân viên hải quan) bằng TIẾNG ĐỨC."
}
LUÔN LUÔN trả về CHỈ JSON này, không có Markdown formatting block.`
  }
];

export default function ReviewAIRoleplay() {
  const [selectedScenario, setSelectedScenario] = useState<typeof SCENARIOS[0] | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startScenario = async (scenario: typeof SCENARIOS[0]) => {
    setSelectedScenario(scenario);
    setMessages([]);
    setIsLoading(true);

    try {
      const chatContents = [{ role: 'user', parts: [{ text: "Bắt đầu cuộc hội thoại." }] }];
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: chatContents as any,
        config: {
            systemInstruction: scenario.prompt
        }
      });
      const text = response.text || "";
      
      try {
        const parsed = JSON.parse(text);
        setMessages([{ id: Date.now().toString(), role: 'bot', text: parsed.reply }]);
      } catch (e) {
         // Fallback if not pure JSON
         const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
         try {
             const parsed2 = JSON.parse(cleaned);
             setMessages([{ id: Date.now().toString(), role: 'bot', text: parsed2.reply }]);
         } catch {
             setMessages([{ id: Date.now().toString(), role: 'bot', text }]);
         }
      }
    } catch (error) {
      console.error(error);
      setMessages([{ id: Date.now().toString(), role: 'bot', text: 'Xin lỗi, có lỗi xảy ra khi kết nối với AI.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const recentMessages = messages.slice(-4);
      const contents = recentMessages.map(m => ({
          role: m.role === 'bot' ? 'model' : 'user',
          parts: [{ text: m.text }]
      }));
      contents.push({ role: 'user', parts: [{ text: userMessage.text }] });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contents as any,
        config: {
          systemInstruction: selectedScenario!.prompt
        }
      });
      const text = response.text || "";
      
      try {
        const parsed = JSON.parse(text);
        setMessages(prev => [...prev, {
            id: Date.now().toString(),
            role: 'bot',
            text: parsed.reply,
            feedback: parsed.feedback
        }]);
      } catch (e) {
         const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
         try {
             const parsed2 = JSON.parse(cleaned);
             setMessages(prev => [...prev, {
                id: Date.now().toString(),
                role: 'bot',
                text: parsed2.reply,
                feedback: parsed2.feedback
             }]);
         } catch {
             setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text }]);
         }
      }
    } catch (error) {
       console.error(error);
       setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text: 'Xin lỗi, có lỗi kết nối.' }]);
    } finally {
       setIsLoading(false);
    }
  };

  if (!selectedScenario) {
    return (
      <div className="space-y-6">
        <div className="bg-emerald-50 border-2 border-emerald-200 p-6 rounded-2xl">
           <h2 className="text-2xl font-black text-emerald-700 flex items-center gap-2 mb-2">
              <Bot className="w-8 h-8" /> Luyện Giao Tiếp AI
           </h2>
           <p className="text-theme-dark/80 font-medium">Chọn một tình huống để đóng vai (Roleplay). AI sẽ phân tích và sửa lỗi ngữ pháp của bạn trong quá trình trò chuyện.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {SCENARIOS.map(scenario => (
             <button
                key={scenario.id}
                onClick={() => startScenario(scenario)}
                className="bg-white p-6 rounded-2xl border-2 border-theme-dark/10 hover:border-emerald-500 hover:shadow-lg transition-all text-left flex flex-col items-start gap-4"
             >
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                   <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-black text-theme-dark text-xl">{scenario.title}</h3>
                   <p className="text-theme-dark/70 font-medium mt-1 leading-relaxed text-sm">{scenario.description}</p>
                </div>
                <div className="mt-auto pt-4 flex items-center text-emerald-600 font-bold text-sm uppercase tracking-widest gap-2">
                    Bắt đầu <Bot size={16} />
                </div>
             </button>
           ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[32px] border-4 border-theme-dark/5 overflow-hidden flex flex-col h-[600px] shadow-xl">
       {/* Header */}
       <div className="bg-emerald-500 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="bg-white/20 p-2 rounded-lg">
                <Bot className="w-6 h-6" />
             </div>
             <div>
                <h3 className="font-black leading-tight">{selectedScenario.title}</h3>
                <p className="text-xs font-bold opacity-80 uppercase tracking-wider">AI Roleplay</p>
             </div>
          </div>
          <button 
             onClick={() => setSelectedScenario(null)}
             className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl font-bold transition-colors text-sm flex items-center gap-2"
          >
             <RefreshCw size={14} /> Tình huống khác
          </button>
       </div>

       {/* Chat Area */}
       <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50">
          <div className="text-center">
             <span className="bg-black/5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-black/40">Cuộc hội thoại bắt đầu</span>
          </div>
          {messages.map((msg, i) => (
             <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 ${
                   msg.role === 'user' 
                     ? 'bg-theme-primary text-white rounded-tr-sm' 
                     : 'bg-white border-2 border-emerald-100 text-theme-dark rounded-tl-sm shadow-sm'
                }`}>
                   <p className={`font-medium ${msg.role === 'bot' ? 'text-lg' : ''}`}>{msg.text}</p>
                </div>
                
                {msg.feedback && (
                    <div className="max-w-[80%] mt-2 bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-xl text-sm font-medium flex items-start gap-2 shadow-sm animate-fade-in">
                       <Bot className="w-4 h-4 shrink-0 mt-0.5" />
                       <p>{msg.feedback}</p>
                    </div>
                )}
             </div>
          ))}
          {isLoading && (
             <div className="flex items-start">
                <div className="bg-white border-2 border-emerald-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                   <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                   <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
       </div>

       {/* Input Area */}
       <div className="p-4 bg-white border-t-2 border-emerald-50">
          <div className="flex gap-2 relative">
             <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Nhập câu trả lời bằng tiếng Đức..."
                className="flex-1 bg-slate-100 border-2 border-transparent focus:border-emerald-500 rounded-2xl px-5 py-3.5 font-medium outline-none transition-all placeholder:text-slate-400"
             />
             <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white rounded-2xl px-6 flex items-center justify-center transition-colors"
             >
                <Send className="w-5 h-5" />
             </button>
          </div>
       </div>
    </div>
  );
}
