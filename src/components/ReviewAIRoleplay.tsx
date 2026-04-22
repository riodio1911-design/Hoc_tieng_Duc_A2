import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, PlayCircle, RefreshCw, Mic } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  id: string;
  role: 'bot' | 'user';
  text: string;
  feedback?: string;
};

const SCENARIOS = [
  {
    id: 's1',
    title: 'Cửa hải quan sân bay (Zoll)',
    description: 'Bạn vừa đáp máy bay xuống Đức. Nhân viên hải quan (AI) sẽ kiểm tra hộ chiếu và hỏi bạn một vài câu về chuyến đi. Lektion 24.',
    prompt: `Bạn là một nhân viên hải quan người Đức (Zöllner) tại sân bay Frankfurt. Bạn đang đóng vai trò (roleplay) với một học viên tiếng Đức trình độ A2.
Nhiệm vụ của bạn:
1. Bắt đầu bằng việc chào hỏi và yêu cầu xem hộ chiếu.
2. Đợi user trả lời. Khi user trả lời, bạn hãy KIỂM TRA lỗi ngữ pháp/từ vựng tiếng Đức trong câu trả lời của user.
3. Bạn sẽ trả lời bằng một JSON có cấu trúc như sau:
{
  "feedback": "Nhận xét ngắn gọn bằng TIẾNG VIỆT về lỗi sai (nếu có, ví dụ: 'động từ haben phải chia là hast') và khen ngợi nếu user làm tốt. Nếu hoàn hảo, nói 'Tốt lắm!'",
  "reply": "Câu tiếp theo của bạn (nhân viên hải quan) bằng TIẾNG ĐỨC."
}
LUÔN LUÔN trả về CHỈ JSON này, không có Markdown formatting block.
Hãy bắt đầu đoạn chat ngay bằng câu đầu tiên theo định dạng JSON trên (bỏ qua feedback cho câu đầu tiên).`
  },
  {
    id: 's2',
    title: 'Xin lịch hẹn bác sĩ (Arzttermin)',
    description: 'Bạn cần gọi điện cho phòng khám để đặt lịch hẹn khám bệnh. Lektion 21-22.',
    prompt: `Bạn là lễ tân phòng khám bác sĩ (Arzthelfer/in). Bạn đang đóng vai trò (roleplay) với một học viên tiếng Đức trình độ A2 đang gọi điện đặt lịch hẹn.
Trình độ: A2.
1. Bắt đầu bằng việc nhấc máy: "Praxis Dr. Müller, guten Tag. Was kann ich für Sie tun?"
2. Đợi user trả lời. Khi user trả lời, kiểm tra ngữ pháp tiếng Đức.
3. Luôn trả lời dạng JSON:
{
  "feedback": "Nhận xét tiếng Việt về câu tiếng Đức của user.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC để tiếp tục tình huống."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON, không bọc trong \`\`\`json.
Bắt đầu câu đầu tiên ngay để user đọc.`
  }
];

export default function ReviewAIRoleplay() {
  const [selectedScenario, setSelectedScenario] = useState<typeof SCENARIOS[0] | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startScenario = async (scenario: typeof SCENARIOS[0]) => {
    setSelectedScenario(scenario);
    setMessages([]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
            systemInstruction: scenario.prompt
        }
      });
      chatRef.current = chat;

      const response = await chat.sendMessage({ message: "Bắt đầu cuộc hội thoại." });
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
    if (!input.trim() || !chatRef.current || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage.text });
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
