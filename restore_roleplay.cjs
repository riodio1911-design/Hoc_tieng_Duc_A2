const fs = require('fs');

let file = `import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, PlayCircle, RefreshCw, Mic, Volume2, Square } from 'lucide-react';
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
    prompt: \\\`Bạn là một học viên tiếng Đức thân thiện đến từ Đức. Bạn đang đóng vai trò (roleplay) với một người bạn mới trình độ A2.
Nhiệm vụ của bạn:
1. Bắt đầu bằng việc chào hỏi, giới thiệu tên và hỏi tên người kia.
2. Đợi user trả lời. Khi user trả lời, kiểm tra lỗi ngữ pháp tiếng Đức trong câu trả lời.
3. Liên tục duy trì đoạn hội thoại (khoảng 5-6 lượt) về các chủ đề: nghề nghiệp (Beruf), gia đình (Familie), nơi ở (Wohnort). Hãy luôn kết thúc bằng một câu hỏi để người học trả lời. 
4. Bạn sẽ trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về lỗi sai (nếu có) và khen ngợi nếu người học làm tốt.",
  "reply": "Câu tiếp theo của bạn (1-2 câu tiếng Đức)."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON, không có Markdown formatting block.\\\`
  },
  {
    id: 's2',
    title: 'Mua thực phẩm tại siêu thị (Lektion 4)',
    description: 'Bạn vào một siêu thị để mua đồ. Người bán hàng (AI) sẽ hỏi bạn muốn mua gì.',
    prompt: \\\`Bạn là giám sát/bán hàng (Verkäufer/in) tại một siêu thị. Bạn đóng vai với người học tiếng Đức A2.
Nhiệm vụ của bạn:
1. Bắt đầu bằng: "Guten Tag, was darf es sein?"
2. Nhận yêu cầu mua đồ của user. Hỏi xem họ cần thêm gì, số lượng, v.v.. Hội thoại diễn ra khoảng 5 lượt.
3. Luôn kết thúc bằng câu hỏi để user phải trả lời.
4. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về ngữ pháp/từ vựng (số đếm, đại từ, lượng từ) của người học.",
  "reply": "Câu tiếp theo của bạn (1-2 câu tiếng Đức)."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.\\\`
  },
  {
    id: 's3',
    title: 'Tại bệnh viện/Bác sĩ (Lektion 8)',
    description: 'Bạn bị ốm/tai nạn và đến gặp bác sĩ. Bác sĩ (AI) hỏi thăm bạn.',
    prompt: \\\`Bạn là bác sĩ (Arzt/Ärztin). User đến khám bệnh. Hội thoại diễn ra khoảng 5-6 lượt.
Nhiệm vụ:
1. Bắt đầu: "Guten Tag. Was fehlt Ihnen denn?"
2. Nghe triệu chứng của user. Đặt các câu hỏi chi tiết về tình trạng bệnh (đau ở đâu, từ bao giờ) và đưa ra lời khuyên dùng động từ khuyết thiếu (sollen/müssen).
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về cách dùng từ vựng sức khỏe và ngữ pháp.",
  "reply": "Câu tiếp theo của bác sĩ bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.\\\`
  },
  {
    id: 's4',
    title: 'Tại nhà hàng (Lektion 10)',
    description: 'Bạn vào một nhà hàng gọi món. Phục vụ (AI) sẽ nhận gọi món và giải quyết phàn nàn của bạn.',
    prompt: \\\`Bạn là người bồi bàn (Kellner/in). User là thực khách. Hội thoại kéo dài khoảng 5 lượt.
Nhiệm vụ:
1. Đưa menu và hỏi muốn uống/ăn gì: "Guten Abend. Hier ist die Speisekarte. Möchten Sie schon etwas trinken?"
2. Nhận món, có lúc bạn vô tình mang đồ ăn nguội/sai để khách phàn nàn và bạn phải xin lỗi hoặc đổi món.
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về cách gọi món / phàn nàn của người học.",
  "reply": "Câu tiếp theo của phục vụ bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.\\\`
  },
  {
    id: 's5',
    title: 'Bưu cục và Gửi đồ (Lektion 14)',
    description: 'Bạn muốn gửi một bưu kiện. Nhân viên bưu điện (AI) sẽ hỗ trợ bạn.',
    prompt: \\\`Bạn là nhân viên bưu điện (Postbeamter). User muốn làm thủ tục gửi đồ. Cuộc gọi kéo dài khoảng 5 lượt.
Nhiệm vụ:
1. Chào hỏi: "Guten Tag, wie kann ich Ihnen helfen?"
2. Cung cấp thông tin giá cả, cách điền form (Formular ausfüllen). Yêu cầu họ cung cấp địa chỉ (Adresse).
3. Nhớ dùng câu bị động (Passiv) nếu có thể để người học làm quen.
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về cấu trúc câu của học viên.",
  "reply": "Câu tiếp theo của nhân viên bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.\\\`
  },
  {
    id: 's6',
    title: 'Sự cố phòng Khách sạn (Lektion 16)',
    description: 'Bạn ở khách sạn, nhưng phòng có vấn đề (Wifi hỏng/máy lạnh...). Hãy gọi phản ánh.',
    prompt: \\\`Bạn là lễ tân khách sạn (Rezeptionist/in). User là khách, gọi điện phản ánh phòng. Kéo dài khoảng 5 lượt.
Nhiệm vụ:
1. Bắt điện thoại: "Rezeption, guten Tag. Was kann ich für Sie tun?"
2. Nhận phàn nàn và xin lỗi, đưa ra cách khắc phục (cử người lên sửa/đổi phòng). Hỏi thêm chi tiết.
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về ngữ pháp (nhất là câu hỏi gián tiếp nếu có).",
  "reply": "Câu tiếp theo của lễ tân bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.\\\`
  },
  {
    id: 's7',
    title: 'Hỏi và chỉ đường (Lektion 18)',
    description: 'Bạn bị lạc ở Đức. Hỏi đường một người địa phương (AI) tới nhà ga.',
    prompt: \\\`Bạn là người địa phương ở Berlin. Trông thấy user có vẻ đang tìm đường. Kéo dài khoảng 5 lượt.
Nhiệm vụ:
1. Bắt chuyện trước: "Entschuldigung, suchen Sie etwas? Kann ich Ihnen helfen?"
2. Giúp chỉ đường (bằng từ geradeaus, an der Ampel rechts...). Hỏi xem user đi bằng phương tiện gì.
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét tiếng Việt về cách hỏi đường, dùng giới từ (Dativ/Akkusativ).",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về dữ liệu chuẩn JSON.\\\`
  },
  {
    id: 's8',
    title: 'Đặt lịch và Dời lịch hẹn (Lektion 21-22)',
    description: 'Bạn gọi điện để đặt một lịch hẹn chuyên viên và sau đó dời lịch.',
    prompt: \\\`Bạn là lễ tân/chuyên viên y tế hoặc ngân hàng. User A2 gọi điện đặt lịch hẹn. Kéo dài khoảng 5 lượt.
1. Bắt đầu bằng việc nhấc máy: "Praxis/Bank, guten Tag. Was kann ich für Sie tun?"
2. Đợi user trả lời. Khi user trả lời, kiểm tra ngữ pháp tiếng Đức. Sau đó tạo tình huống user phải dời lịch hẹn đã đặt (hỏi ngày giờ, sau đó báo kẹt và đề xuất giờ khác).
3. Luôn trả lời dạng JSON:
{
  "feedback": "Nhận xét tiếng Việt về câu tiếng Đức của user.",
  "reply": "Câu tiếp theo của bạn bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về chuẩn JSON.\\\`
  },
  {
    id: 's9',
    title: 'Phỏng vấn xin việc (Lektion 23)',
    description: 'Bạn tham gia phỏng vấn xin việc. Trả lời các câu hỏi về kinh nghiệm và bản thân.',
    prompt: \\\`Bạn là người phỏng vấn xin việc (Personalchef). User đến phỏng vấn. Hội thoại khoảng 5-6 câu.
Nhiệm vụ:
1. Chào hỏi, mời ngồi: "Guten Tag, nehmen Sie bitte Platz. Erzählen Sie uns bitte ein bisschen von sich."
2. Đặt câu hỏi về lý do ứng tuyển, kinh nghiệm việc làm (Berufserfahrung) và điểm mạnh điểm yếu.
3. Trả lời bằng JSON:
{
  "feedback": "Nhận xét ngắn gọn tiếng Việt (chú ý mệnh đề quan hệ Relativsatz nếu có).",
  "reply": "Câu hỏi/đáp tiếp theo của nhà tuyển dụng bằng TIẾNG ĐỨC."
}
Tuyệt đối chỉ trả về chuẩn JSON.\\\`
  },
  {
    id: 's10',
    title: 'Cửa hải quan sân bay (Lektion 24)',
    description: 'Bạn xuống sân bay Đức. Nhân viên hải quan kiểm tra hộ chiếu và yêu cầu mở hành lý.',
    prompt: \\\`Bạn là một nhân viên hải quan người Đức (Zöllner) tại sân bay Frankfurt. Kéo dài khoảng 5 lượt.
Nhiệm vụ của bạn:
1. Bắt đầu: "Guten Tag. Ihren Pass bitte. Woher kommen Sie?"
2. Hỏi về mục đích nhập cảnh, có mang theo hàng hóa cần khai báo (đồ ăn, rượu thuốc lá) không.
3. Bạn sẽ trả lời bằng JSON:
{
  "feedback": "Nhận xét ngắn gọn bằng TIẾNG VIỆT.",
  "reply": "Câu tiếp theo của nhân viên hải quan bằng TIẾNG ĐỨC."
}
LUÔN LUÔN trả về CHỈ JSON này, không có Markdown formatting block.\\\`
  }
];

interface ReviewAIRoleplayProps {
  playAudio: (text: string, id: string, lang?: "de-DE" | "vi-VN", overrideVoiceName?: string) => Promise<void>;
}

export default function ReviewAIRoleplay({ playAudio }: ReviewAIRoleplayProps) {
  const [selectedScenario, setSelectedScenario] = useState<typeof SCENARIOS[0] | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDictating, setIsDictating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Setup Speech Recognition
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'de-DE';

        recognition.onresult = (event: any) => {
          let transcript = '';
          for (let i = 0; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
          }
          setInput(transcript);
        };

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          setIsDictating(false);
        };

        recognition.onend = () => {
          setIsDictating(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const toggleDictation = () => {
    if (isDictating) {
      recognitionRef.current?.stop();
      setIsDictating(false);
    } else {
      if (recognitionRef.current) {
        try {
          setInput(''); // Clear input before starting
          recognitionRef.current.start();
          setIsDictating(true);
        } catch (e) {
          console.error('Recognition start error', e);
        }
      } else {
        alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói (Khuyên dùng Chrome/Edge).");
      }
    }
  };

  const startScenario = async (scenario: typeof SCENARIOS[0]) => {
    setSelectedScenario(scenario);
    setMessages([]);
    setIsLoading(true);

    try {
      const chatContents = [{ role: 'user', parts: [{ text: "Bắt đầu cuộc hội thoại." }] }];
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: chatContents as any,
        config: {
            systemInstruction: scenario.prompt
        }
      });
      const text = response.text || "";
      
      try {
        const parsed = JSON.parse(text);
        setMessages([{ id: Date.now().toString(), role: 'bot', text: parsed.reply }]);
        playAudio(parsed.reply, 'roleplay_bot_' + Date.now().toString(), "de-DE");
      } catch (e) {
         const cleaned = text.replace(/\\\`\\\`\\\`json/g, '').replace(/\\\`\\\`\\\`/g, '').trim();
         try {
             const parsed2 = JSON.parse(cleaned);
             setMessages([{ id: Date.now().toString(), role: 'bot', text: parsed2.reply }]);
             playAudio(parsed2.reply, 'roleplay_bot_' + Date.now().toString(), "de-DE");
         } catch {
             setMessages([{ id: Date.now().toString(), role: 'bot', text }]);
             playAudio(text, 'roleplay_bot_' + Date.now().toString(), "de-DE");
         }
      }
    } catch (error: any) {
      console.error(error);
      const errMsg = error.message || '';
      if (errMsg.includes('400') || errMsg.includes('API_KEY_INVALID') || errMsg.includes('API key not valid')) {
         setMessages([{ id: Date.now().toString(), role: 'bot', text: 'API Key không hợp lệ. Vui lòng kiểm tra lại API Key.' }]);
      } else if (errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED')) {
         setMessages([{ id: Date.now().toString(), role: 'bot', text: 'Hệ thống AI đã hết lượt xử lý miễn phí. Vui lòng thiết lập API Key hoặc thử lại sau.' }]);
      } else if (errMsg.includes('503') || errMsg.includes('UNAVAILABLE') || errMsg.includes('high demand')) {
         setMessages([{ id: Date.now().toString(), role: 'bot', text: 'Máy chủ AI đang quá tải (503). Vui lòng đợi trong giây lát và thử lại.' }]);
      } else {
         setMessages([{ id: Date.now().toString(), role: 'bot', text: 'Xin lỗi, có lỗi xảy ra khi kết nối với AI.' }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    if (isDictating) {
       recognitionRef.current?.stop();
       setIsDictating(false);
    }

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const recentMessages = messages.slice(-6); // Keep last 3 turns
      const contents = recentMessages.map(m => ({
          role: m.role === 'bot' ? 'model' : 'user',
          parts: [{ text: m.text }]
      }));
      contents.push({ role: 'user', parts: [{ text: userMessage.text }] });

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents as any,
        config: {
          systemInstruction: selectedScenario!.prompt
        }
      });
      const text = response.text || "";
      
      const processBotReply = (replyText: string, feedbackText?: string) => {
          const generatedId = Date.now().toString();
          setMessages(prev => [...prev, {
              id: generatedId,
              role: 'bot',
              text: replyText,
              feedback: feedbackText
          }]);
          playAudio(replyText, 'roleplay_bot_' + generatedId, "de-DE");
      };

      try {
        const parsed = JSON.parse(text);
        processBotReply(parsed.reply, parsed.feedback);
      } catch (e) {
         const cleaned = text.replace(/\\\`\\\`\\\`json/g, '').replace(/\\\`\\\`\\\`/g, '').trim();
         try {
             const parsed2 = JSON.parse(cleaned);
             processBotReply(parsed2.reply, parsed2.feedback);
         } catch {
             processBotReply(text);
         }
      }
    } catch (error: any) {
       console.error(error);
       const errMsg = error.message || '';
       if (errMsg.includes('400') || errMsg.includes('API_KEY_INVALID') || errMsg.includes('API key not valid')) {
           setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text: 'API Key không hợp lệ. Vui lòng kiểm tra lại API Key.' }]);
       } else if (errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED')) {
           setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text: 'Hệ thống AI đã hết lượt xử lý. Vui lòng thiết lập API Key hoặc thử lại sau.' }]);
       } else if (errMsg.includes('503') || errMsg.includes('UNAVAILABLE') || errMsg.includes('high demand')) {
           setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text: 'Máy chủ AI đang quá tải (503). Vui lòng đợi trong giây lát và thử lại.' }]);
       } else {
           setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text: 'Xin lỗi, có lỗi kết nối.' }]);
       }
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
           <p className="text-theme-dark/80 font-medium">Chọn một tình huống để đóng vai (Roleplay). Mỗi tình huống sẽ kéo dài khoảng 5-6 lượt. Bạn có thể sử dụng Micro để luyện nói. AI sẽ phản hồi, phân tích và sửa lỗi ngữ pháp của bạn, đồng thời phát âm thanh câu trả lời.</p>
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
             <div key={msg.id} className={\\\`flex flex-col \\\${msg.role === 'user' ? 'items-end' : 'items-start'}\\\`}>
                <div className={\\\`max-w-[80%] rounded-2xl p-4 \\\${
                   msg.role === 'user' 
                     ? 'bg-theme-primary text-white rounded-tr-sm' 
                     : 'bg-white border-2 border-emerald-100 text-theme-dark rounded-tl-sm shadow-sm'
                }\\\`}>
                   
                   <p className={\\\`font-medium \\\${msg.role === 'bot' ? 'text-lg' : ''}\\\`}>{msg.text}</p>
                   {msg.role === 'bot' && (
                       <button onClick={() => playAudio(msg.text, 'roleplay_man_' + msg.id, "de-DE")} className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-sm font-bold transition-colors">
                           <Volume2 size={14} /> Nghe
                       </button>
                   )}
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
             <button
                 onClick={toggleDictation}
                 className={\\\`\\\${isDictating ? 'bg-rose-500 hover:bg-rose-600 animate-pulse' : 'bg-slate-200 hover:bg-slate-300 text-slate-600'} text-white rounded-2xl px-5 flex items-center justify-center transition-colors\\\`}
                 title="Nhập bằng giọng nói (Tiếng Đức)"
             >
                 {isDictating ? <Square size={18} fill="currentColor" /> : <Mic size={20} />}
             </button>
             <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder={isDictating ? "Đang nghe tiếng Đức..." : "Nhập câu trả lời bằng tiếng Đức..."}
                className="flex-1 bg-slate-100 border-2 border-transparent focus:border-emerald-500 rounded-2xl px-5 py-3.5 font-medium outline-none transition-all placeholder:text-slate-400"
             />
             <button
                onClick={sendMessage}
                disabled={isLoading || (!input.trim() && !isDictating)}
                className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white rounded-2xl px-6 flex items-center justify-center transition-colors"
                title="Gửi tin nhắn"
             >
                <Send className="w-5 h-5" />
             </button>
          </div>
       </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/ReviewAIRoleplay.tsx', file);
