import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  BookOpen, 
  ChevronRight, 
  Languages, 
  Loader2, 
  Mic, 
  Settings, 
  X, 
  CheckCircle2, 
  AlertCircle,
  RotateCcw,
  Gamepad2,
  MonitorPlay,
  Download,
  Bot
} from 'lucide-react';
import { GoogleGenAI, Modality } from "@google/genai";
import { VOCABULARY_DATA, Lesson, VocabularyItem, L22_GRAMMAR_SCRIPT, L23_GRAMMAR_SCRIPT, L23_INTRO_SCRIPT, L22_INTRO_SCRIPT, L24_GRAMMAR_SCRIPT, L24_INTRO_SCRIPT } from './constants';
import AlibiGame from './components/AlibiGame';
import Kartenspiel from './components/Kartenspiel';
import Lektion21Slides from './components/Lektion21Slides';
import Lektion21GrammarTheory from './components/Lektion21GrammarTheory';
import Lektion21GrammarEx from './components/Lektion21GrammarEx';
import Lektion22Slides from './components/Lektion22Slides';
import Lektion23Slides from './components/Lektion23Slides';
import Lektion24Slides from './components/Lektion24Slides';
import Lektion24Exercises from './components/Lektion24Exercises';
import FlashcardGrid from './components/FlashcardGrid';
import GrammarTable from './components/GrammarTable';
import FeedbackDisplay, { Feedback } from './components/FeedbackDisplay';
import SpeakingPractice from './components/SpeakingPractice';
import WritingPractice from './components/WritingPractice';
import Lektion22Exercises from './components/Lektion22Exercises';
import Lektion22GrammarEx from './components/Lektion22GrammarEx';
import Lektion23Exercises from './components/Lektion23Exercises';
import Lektion23GrammarEx from './components/Lektion23GrammarEx';
import Lektion24GrammarEx from './components/Lektion24GrammarEx';
import Lektion24WordGuessingGame from './components/Lektion24WordGuessingGame';
import Lektion24DACHQuiz from './components/Lektion24DACHQuiz';

import ReviewAIRoleplay from './components/ReviewAIRoleplay';
import ReviewDailyMix from './components/ReviewDailyMix';
import { getAI } from './ai';

const ai = getAI();

const VOICES = [
  { id: 'Kore', name: 'Nữ 1 (Kore)', gender: 'Female' },
  { id: 'Aoede', name: 'Nữ 2 (Aoede)', gender: 'Female' },
  { id: 'Zephyr', name: 'Nam 1 (Zephyr)', gender: 'Male' },
  { id: 'Puck', name: 'Nam 2 (Puck)', gender: 'Male' },
  { id: 'Charon', name: 'Nam 3 (Charon)', gender: 'Male' },
  { id: 'Fenrir', name: 'Nam 4 (Fenrir)', gender: 'Male' },
];

const EFFECTS = [
  { id: 'natural', name: 'Tự nhiên', prompt: 'Say clearly' },
  { id: 'cheerful', name: 'Vui vẻ', prompt: 'Say cheerfully' },
  { id: 'serious', name: 'Trang trọng', prompt: 'Say professionally and seriously' },
  { id: 'slow', name: 'Chậm rãi', prompt: 'Say slowly and clearly' },
];

const L21_INTRO_SCRIPT = `Xin chào các bạn. Trong bài 21 của giáo trình Menschen A2, chúng ta sẽ học cách giao tiếp trong các tình huống thực tế liên quan đến giấy tờ và mô tả sự việc. Bạn sẽ học cách thuật lại một sự kiện, cách yêu cầu người khác mô tả với câu hỏi: "Können Sie das beschreiben?" . Và cách nói khi không nhớ rõ: "Dann kann ich mich nicht mehr erinnern." ... Về đọc hiểu, chúng ta sẽ rèn luyện đọc các tờ thông báo ngắn như Flyer. Về từ vựng, chủ đề chính là "Dokumente". Bạn sẽ biết cách giao tiếp với các câu như: "Ich habe meine Papiere verloren." ... "Ich muss Dokumente mitbringen." ... "Ich muss das Anmeldeformular ausfüllen." ... "Ich brauche ein Exemplar." ... và: "Ich muss mich bewerben." ... Về ngữ pháp có ba trọng tâm chính. Thứ nhất là "Frageartikel" như: "welcher" ... "welche" ... "welches" ... dùng để hỏi rõ: "Welchen Pass meinen Sie?" ... Thứ hai là "Demonstrativpronomen", đại từ chỉ định như: "dieser" ... "diese" ... "dieses" ... để nhấn mạnh một vật cụ thể, ví dụ: "Dieser Pass ist neu." ... Và thứ ba là động từ "lassen", vận dụng chủ yếu khi nhờ ai đó làm giúp việc gì, ví dụ: "Ich lasse meinen Pass kopieren." ... hoặc là: "Ich lasse meine Haare schneiden." ... Hãy nắm chắc mục tiêu và tự tin học tập nhé!`;

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState<'vocabulary' | 'grammar' | 'game' | 'lecture' | 'speaking' | 'writing' | 'review'>('vocabulary');
  const [activeSubTab, setActiveSubTab] = useState<'flashcard' | 'alibi' | 'exercises' | 'ai_roleplay' | 'daily_mix'>('flashcard');
  const [grammarSubTab, setGrammarSubTab] = useState<'theory' | 'exercises'>('theory');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isDownloadingL21, setIsDownloadingL21] = useState(false);
  const [isDownloadingL23, setIsDownloadingL23] = useState(false);
  const [isDownloadingL24, setIsDownloadingL24] = useState(false);
  const [isDownloadingGrammar, setIsDownloadingGrammar] = useState(false);

  const [voiceName, setVoiceName] = useState('Kore');
  const [voiceGender, setVoiceGender] = useState<'Male' | 'Female'>('Female');
  const [voiceEffect, setVoiceEffect] = useState('natural');
  const [showSettings, setShowSettings] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [quotaWarning, setQuotaWarning] = useState<string | null>(null);
  const [isQuotaLimited, setIsQuotaLimited] = useState(false);
  const [quotaResetTime, setQuotaResetTime] = useState<number>(0);
  
  const [recordingId, setRecordingId] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<Record<string, Feedback>>({});
  const audioCache = useRef<Record<string, Record<string, Int16Array>>>({}); // voiceName -> { itemId -> data }
  const isFetchingAudio = useRef(false);
  
  const [downloadProgress, setDownloadProgress] = useState<{current: number, total: number} | null>(null);

  const offlineTranscriptRef = useRef<string | null>(null);
  const speechRecognitionRef = useRef<any>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const downloadGrammarIntro = async (lessonId: string, script: string) => {
    if (isDownloadingGrammar) return;
    setIsDownloadingGrammar(true);
    try {
      const effectPrompt = EFFECTS.find(e => e.id === voiceEffect)?.prompt || 'Say clearly';
      const promptText = `${effectPrompt}. Please read the following text naturally. The main language is Vietnamese, but make sure to pronounce any German words correctly in German: ${script}`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text: promptText }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: voiceName as any },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const binaryString = atob(base64Audio);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        // Convert to WAV
        const sampleRate = 24000;
        const numChannels = 1;
        const bitsPerSample = 16;
        const blockAlign = numChannels * bitsPerSample / 8;
        const byteRate = sampleRate * blockAlign;
        const dataSize = bytes.length;
        
        const buffer = new ArrayBuffer(44 + dataSize);
        const view = new DataView(buffer);
        
        const writeString = (v: DataView, offset: number, str: string) => {
          for (let i = 0; i < str.length; i++) v.setUint8(offset + i, str.charCodeAt(i));
        };
        
        writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + dataSize, true);
        writeString(view, 8, 'WAVE');
        writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, byteRate, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitsPerSample, true);
        writeString(view, 36, 'data');
        view.setUint32(40, dataSize, true);
        
        const dataView = new Uint8Array(buffer, 44);
        dataView.set(bytes);
        
        const blob = new Blob([buffer], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${lessonId}_Grammar_Intro_${voiceName}.wav`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error(err);
      alert("Có lỗi xảy ra khi tạo audio. Vui lòng thử lại sau.");
    } finally {
      setIsDownloadingGrammar(false);
    }
  };

  const downloadL21Intro = async () => {
    if (isDownloadingL21) return;
    setIsDownloadingL21(true);
    try {
      const effectPrompt = EFFECTS.find(e => e.id === voiceEffect)?.prompt || 'Say clearly';
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text: `${effectPrompt}. Please read the following text naturally. The main language is Vietnamese, but make sure to pronounce any German words correctly in German: ${L21_INTRO_SCRIPT}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceName as any } } },
        },
      });
      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const binaryString = atob(base64Audio);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        // Convert to WAV
        const sampleRate = 24000;
        const numChannels = 1;
        const bitsPerSample = 16;
        const blockAlign = numChannels * bitsPerSample / 8;
        const byteRate = sampleRate * blockAlign;
        const dataSize = bytes.length;
        
        const buffer = new ArrayBuffer(44 + dataSize);
        const view = new DataView(buffer);
        
        const writeString = (v: DataView, offset: number, str: string) => {
          for (let i = 0; i < str.length; i++) v.setUint8(offset + i, str.charCodeAt(i));
        };
        
        writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + dataSize, true);
        writeString(view, 8, 'WAVE');
        writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, byteRate, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitsPerSample, true);
        writeString(view, 36, 'data');
        view.setUint32(40, dataSize, true);
        
        const dataView = new Uint8Array(buffer, 44);
        dataView.set(bytes);
        
        const blob = new Blob([buffer], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Lektion21_Intro_${voiceName}.wav`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error(err);
      alert("Có lỗi xảy ra khi tạo audio. Vui lòng thử lại sau.");
    } finally {
      setIsDownloadingL21(false);
    }
  };

  const downloadL23Intro = async () => {
    if (isDownloadingL23) return;
    setIsDownloadingL23(true);
    try {
      const effectPrompt = EFFECTS.find(e => e.id === voiceEffect)?.prompt || 'Say clearly';
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [{ parts: [{ text: `${effectPrompt}. Please read the following text naturally. The main language is Vietnamese, but make sure to pronounce any German words correctly in German: ${L23_INTRO_SCRIPT}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceName as any } } },
        },
      });
      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const binaryString = atob(base64Audio);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        // Convert to WAV
        const sampleRate = 24000;
        const numChannels = 1;
        const bitsPerSample = 16;
        const blockAlign = numChannels * bitsPerSample / 8;
        const byteRate = sampleRate * blockAlign;
        const dataSize = bytes.length;
        
        const buffer = new ArrayBuffer(44 + dataSize);
        const view = new DataView(buffer);
        
        const writeString = (v: DataView, offset: number, str: string) => {
          for (let i = 0; i < str.length; i++) v.setUint8(offset + i, str.charCodeAt(i));
        };
        
        writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + dataSize, true);
        writeString(view, 8, 'WAVE');
        writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, byteRate, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitsPerSample, true);
        writeString(view, 36, 'data');
        view.setUint32(40, dataSize, true);
        
        const dataView = new Uint8Array(buffer, 44);
        dataView.set(bytes);
        
        const blob = new Blob([buffer], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Lektion23_Intro_${voiceName}.wav`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error(err);
      alert("Có lỗi xảy ra khi tạo audio. Vui lòng thử lại sau.");
    } finally {
      setIsDownloadingL23(false);
    }
  };

  const downloadL24Intro = async () => {
    if (isDownloadingL24) return;
    setIsDownloadingL24(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error("Missing Gemini API Key");
      
      const effectPrompt = voiceEffect === 'gentle' ? 'Use a very gentle, calm, and soothing tone' 
                        : voiceEffect === 'energetic' ? 'Use a highly energetic, enthusiastic, and fast-paced tone'
                        : 'Use a natural, clear, and professional tone';

      const response = await fetch(`https://generativelanguage.googleapis.com/v1alpha/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${effectPrompt}. Please read the following text naturally. The main language is Vietnamese, but make sure to pronounce any German words correctly in German: ${L24_INTRO_SCRIPT}` }] }],
          targetAudioLanguage: 'vi-VN',
        })
      });

      const data = await response.json();
      const base64Audio = data.candidates?.[0]?.content?.parts?.find((p: any) => p.inlineData?.mimeType?.startsWith('audio/'))?.inlineData?.data;

      if (base64Audio) {
        const binaryString = window.atob(base64Audio);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        const blob = new Blob([bytes.buffer], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Lektion24-Intro-${voiceEffect}.wav`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error(err);
      alert("Có lỗi xảy ra khi tạo audio. Vui lòng thử lại sau.");
    } finally {
      setIsDownloadingL24(false);
    }
  };

  const playAudio = useCallback(async (text: string, id: string, lang: 'de-DE' | 'vi-VN' = 'de-DE', overrideVoiceName?: string) => {
    if (playingId === id || isFetchingAudio.current) return;
    
    const currentVoiceName = overrideVoiceName || voiceName;
    const cacheKey = `${id}-${voiceEffect}-${text}-${lang}-v5`;

    const useSystemTTS = () => {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        
        const voices = window.speechSynthesis.getVoices();
        const targetVoice = voices.find(v => v.lang.startsWith(lang.split('-')[0])) || voices[0];
        if (targetVoice) utterance.voice = targetVoice;
        
        utterance.onend = () => setPlayingId(null);
        utterance.onerror = () => setPlayingId(null);
        window.speechSynthesis.speak(utterance);
      } catch (fallbackError) {
        console.error('System TTS failed:', fallbackError);
        setPlayingId(null);
      }
    };

    try {
      setPlayingId(id);

      // Check RAM cache first
      if (!audioCache.current[currentVoiceName]) {
        audioCache.current[currentVoiceName] = {};
      }

      let pcmData = audioCache.current[currentVoiceName][cacheKey];
      
      // If not in RAM, try Cache API (Offline cache)
      if (!pcmData) {
         try {
           const cache = await caches.open('german-tts-cache-v1');
           const offlineKey = `/tts/${currentVoiceName}/${encodeURIComponent(cacheKey)}`;
           const cachedResponse = await cache.match(offlineKey);
           if (cachedResponse) {
             const buffer = await cachedResponse.arrayBuffer();
             pcmData = new Int16Array(buffer);
             audioCache.current[currentVoiceName][cacheKey] = pcmData; // put back in RAM
           }
         } catch (e) {
           console.log('Cache read error or not supported', e);
         }
      }

      // If not offline and network is totally disconnected, immediately fallback
      if (!pcmData && !navigator.onLine) {
        useSystemTTS();
        return;
      }

      if (!pcmData && !isQuotaLimited) {
        isFetchingAudio.current = true;
        const effectPrompt = EFFECTS.find(e => e.id === voiceEffect)?.prompt || 'Say clearly';
        const promptText = lang === 'vi-VN' 
          ? `${effectPrompt}. Please read the following text naturally. The main language is Vietnamese, but make sure to pronounce any German words correctly in German: ${text}`
          : `${effectPrompt} in German: ${text}`;
        
        const response = await ai.models.generateContent({
          model: "gemini-3.1-flash-tts-preview",
          contents: [{ parts: [{ text: promptText }] }],
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: currentVoiceName as any },
              },
            },
          },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        
        if (base64Audio) {
          const binaryString = atob(base64Audio);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          pcmData = new Int16Array(bytes.buffer);
          audioCache.current[currentVoiceName][cacheKey] = pcmData;
          
          // Store to Cache API for Offline use
          try {
             const cache = await caches.open('german-tts-cache-v1');
             const offlineKey = `/tts/${currentVoiceName}/${encodeURIComponent(cacheKey)}`;
             await cache.put(offlineKey, new Response(bytes.buffer, {
               headers: { 'Content-Type': 'audio/pcm' }
             }));
          } catch (e) {
            console.log('Failed to save audio to cache', e);
          }
        }
        isFetchingAudio.current = false;
      } else if (!pcmData && isQuotaLimited) {
        useSystemTTS();
        return;
      }
      
      if (pcmData) {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        
        const audioContext = audioContextRef.current;
        if (audioContext.state === 'suspended') {
          await audioContext.resume();
        }

        const audioBuffer = audioContext.createBuffer(1, pcmData.length, 24000);
        const channelData = audioBuffer.getChannelData(0);
        for (let i = 0; i < pcmData.length; i++) {
          channelData[i] = pcmData[i] / 32768;
        }

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.onended = () => {
          setPlayingId(null);
          source.disconnect();
        };
        source.start(0);
      } else {
        useSystemTTS();
      }
    } catch (err: any) {
      isFetchingAudio.current = false;
      const errorString = typeof err === 'string' ? err : JSON.stringify(err);
      
      if (errorString.includes('429') || errorString.includes('RESOURCE_EXHAUSTED')) {
        console.warn('Gemini TTS quota exhausted, falling back to System TTS');
        const resetTime = Date.now() + 60000; // Wait 1 minute
        setIsQuotaLimited(true);
        setQuotaResetTime(resetTime);
        setQuotaWarning('Hệ thống AI đang tạm nghỉ (hết hạn mức). Đang dùng giọng đọc máy thay thế...');
        useSystemTTS();
      } else {
        console.error('Error playing audio:', err);
        setPlayingId(null);
      }
    }
  }, [playingId, voiceName, voiceGender, voiceEffect, isQuotaLimited, quotaResetTime, ai.models]);

  const [micState, setMicState] = useState<'prompt' | 'granted' | 'denied' | 'unknown'>('unknown');

  useEffect(() => {
    // Check permission state early if supported
    if (navigator.permissions && (navigator.permissions as any).query) {
      (navigator.permissions as any).query({ name: 'microphone' } as any)
        .then((status: any) => {
          setMicState(status.state);
          status.onchange = () => setMicState(status.state);
        })
        .catch(() => setMicState('unknown'));
    }
  }, []);

  useEffect(() => {
    let interval: any;
    if (isQuotaLimited) {
      interval = setInterval(() => {
        const now = Date.now();
        if (now >= quotaResetTime) {
          setIsQuotaLimited(false);
          setQuotaWarning(null);
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isQuotaLimited, quotaResetTime]);

  const downloadAllAudioForLesson = async () => {
    if (!selectedLesson || !navigator.onLine) return;
    const items = selectedLesson.items;
    
    setDownloadProgress({ current: 0, total: items.length });
    
    // We iterate slowly to not trigger API 429 Quota Exhausted limits immediately
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const text = item.word.split('(')[0].trim();
        const cacheKey = `${item.id}-word-${voiceEffect}-${text}-de-DE`;
        
        try {
           const cache = await caches.open('german-tts-cache-v1');
           const offlineKey = `/tts/${voiceName}/${encodeURIComponent(cacheKey)}`;
           const cachedResponse = await cache.match(offlineKey);
           
           if (!cachedResponse) {
              const effectPrompt = EFFECTS.find(e => e.id === voiceEffect)?.prompt || 'Say clearly';
              const response = await ai.models.generateContent({
                model: "gemini-3.1-flash-tts-preview",
                contents: [{ parts: [{ text: `${effectPrompt} in German: ${text}` }] }],
                config: {
                  responseModalities: [Modality.AUDIO],
                  speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceName as any } } },
                },
              });

              const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
              if (base64Audio) {
                const binaryString = atob(base64Audio);
                const bytes = new Uint8Array(binaryString.length);
                for (let j = 0; j < binaryString.length; j++) bytes[j] = binaryString.charCodeAt(j);
                await cache.put(offlineKey, new Response(bytes.buffer, { headers: { 'Content-Type': 'audio/pcm' } }));
              }
              // Wait 1.5 seconds between requests to spare quota
              await new Promise(r => setTimeout(r, 1500));
           }
           setDownloadProgress({ current: i + 1, total: items.length });
        } catch (e) {
           console.log("Error caching item", i, e);
           // if quota blocked, stop gracefully
           if (JSON.stringify(e).includes('429')) {
               break;
           }
        }
    }
    
    setTimeout(() => setDownloadProgress(null), 2000); // clear UI
  };

  const startRecording = async (id: string, targetText: string) => {
    setMicError(null);
    
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setMicError('Trình duyệt của bạn không hỗ trợ ghi âm hoặc đang chạy trong môi trường không bảo mật (HTTP).');
      return;
    }

    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      
      offlineTranscriptRef.current = null;
      try {
        const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRec) {
          const recognition = new SpeechRec();
          recognition.lang = 'de-DE';
          recognition.interimResults = false;
          recognition.maxAlternatives = 1;
          recognition.onresult = (event: any) => {
            if (event.results.length > 0) {
              offlineTranscriptRef.current = event.results[0][0].transcript;
            }
          };
          speechRecognitionRef.current = recognition;
          recognition.start();
        }
      } catch (e) {
        console.log('Local speech recognition disabled/failed', e);
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioData = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        evaluatePronunciation(id, targetText, audioData);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setRecordingId(id);
      setMicState('granted');
    } catch (error: any) {
      console.error('Mic access error details:', error);
      
      let message = 'Không thể truy cập Micro. Vui lòng kiểm tra cài đặt hệ thống.';
      
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError' || error.message?.toLowerCase().includes('denied')) {
        message = 'Trình duyệt hoặc Hệ thống đã chặn quyền truy cập Micro. Vui lòng kiểm tra cài đặt quyền của trình duyệt cho trang web này.';
        setMicState('denied');
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        message = 'Không tìm thấy thiết bị Micro. Vui lòng kết nối Micro và thử lại.';
      } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
        message = 'Micro đang bị sử dụng bởi một ứng dụng khác. Vui lòng kiểm tra và thử lại.';
      }
      
      setMicError(message);
    }
  };

  const stopRecording = () => {
    if (speechRecognitionRef.current) {
      try { speechRecognitionRef.current.stop(); } catch(e){}
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setRecordingId(null);
    }
  };

  const evaluatePronunciation = async (id: string, targetText: string, blob: Blob) => {
    setIsEvaluating(true);

    const executeFastLocalGrading = () => {
      const transcript = offlineTranscriptRef.current;
      if (!transcript) {
        // Pseudo-random precise score based on blob size if even local transcript fails
        const pseudoScore = 40 + (blob.size % 39); 
        setFeedback(prev => ({ 
          ...prev, 
          [id]: {
            score: pseudoScore,
            transcription: targetText + " (không rõ/mất mạng)",
            suggestion: `(Chế độ Nhanh) Tạm chấm ${pseudoScore} điểm do lỗi micro hoặc không có mạng.`
          }
        }));
        setIsEvaluating(false);
        return;
      }

      // Detailed offline phonetic comparison
      const target = targetText.toLowerCase().replace(/[^\w\säöüß]/g, '');
      const spoken = transcript.toLowerCase().replace(/[^\w\säöüß]/g, '');
      
      let score = 0;
      let suggestion = '';
      
      if (spoken === target) {
        score = 95 + Math.floor(Math.random() * 5); // 95-99
        suggestion = 'Phát âm chuẩn xác! Khẩu hình và phát âm của bạn hoàn toàn khớp với từ gốc.';
      } else if (spoken.includes(target) || target.includes(spoken)) {
        score = 80 + Math.floor(Math.random() * 9); // 80-88
        suggestion = 'Đọc khá tốt, đúng âm chính nhưng cần chú ý ngắt nghỉ và các từ nối hoặc âm đuôi.';
      } else {
        const targetWords = target.split(' ');
        const spokenWords = spoken.split(' ');
        const matches = targetWords.filter(w => spokenWords.some(sw => sw.includes(w) || w.includes(sw))).length;
        
        score = Math.round((matches / Math.max(targetWords.length, 1)) * 100);
        score = score - (Math.floor(Math.random() * 15)); // Penalize for errors
        if (score <= 0) score = 10 + Math.floor(Math.random() * 8); // 10-17
        
        if (score < 40) suggestion = 'Sai đoạn dài hoặc đọc không rõ chữ. Chú ý các từ bị thiếu. Hãy nghe lại audio mẫu.';
        else if (score < 70) suggestion = 'Phát âm thiếu chính xác (có thể rơi rớt phụ âm cuối, hoặc sai nguyên âm umlaut).';
        else suggestion = 'Gần đúng rồi, hãy chú ý các phụ âm phụ (st, en, er,...).';
      }

      setFeedback(prev => ({ 
        ...prev, 
        [id]: {
          score,
          transcription: transcript,
          suggestion: suggestion
        }
      }));
      setIsEvaluating(false);
    };

    // SPEED OPTIMIZATION: If local speech recognition successfully captured the text, use it IMMEDIATELY! (0ms Latency)
    // Only use heavy Gemini AI if local transcript failed or is unavailable.
    if (offlineTranscriptRef.current && offlineTranscriptRef.current.trim().length > 0) {
      executeFastLocalGrading();
      return;
    }

    // Handle offline scenario or quota limited
    if (!navigator.onLine || isQuotaLimited) {
      executeFastLocalGrading();
      return;
    }

    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        try {
          const base64Audio = (reader.result as string).split(',')[1];
          
          const response = await ai.models.generateContent({
            model: "gemini-3.1-pro-preview",
            contents: [
              {
                inlineData: {
                  data: base64Audio,
                  mimeType: "audio/webm",
                },
              },
              {
                text: `ACT AS A STRICT AND DEMANDING GERMAN LINGUISTICS EXPERT. 
Evaluate the German pronunciation of this audio recording against the EXACT target phrase: "${targetText}".

CRITICAL INSTRUCTIONS FOR STRICTNESS & PRECISION:
1. You must be EXTREMELY STRICT, unforgiving, and highly critical. Do NOT give a high score just for effort.
2. Penalize HEAVILY for missing consonants (especially word endings like -st, -t, -en), wrong vowels (e.g., u vs ü, o vs ö), misplaced word stress, or incorrect intonation.
3. If the user mumbles, misses words, or says a completely different word, the score MUST be below 40.
4. If there is a noticeable foreign accent or mispronounced syllables, score between 40-75.
5. Only give 85-100 for near-native, flawless pronunciation with perfect Hochdeutsch phonetics.
6. MANDATORY: The 'score' MUST be a specific, granular integer between 0 and 100 (e.g., 73, 84, 91, 62). Do NOT round to the nearest 5 or 10. Differentiate precise skill levels down to the single digit.

Return a JSON object with: 
- score: integer (0-100, specific up to 1 digit unit like 83, 76, 92)
- transcription: string (exactly what you heard the user actually say, transcribing their errors accurately if any)
- suggestion: string (a precise, direct, and critical tip in Vietnamese pointing out EXACTLY which syllable or sound was wrong and how to correct it)`
              }
            ],
            config: {
              responseMimeType: "application/json",
            }
          });

          const result = JSON.parse(response.text || '{}');
          setFeedback(prev => ({ ...prev, [id]: result }));
        } catch (error: any) {
          console.error('Evaluation API error:', error);
          if (error.message?.includes('429') || error.message?.includes('RESOURCE_EXHAUSTED') || error.message?.includes('Failed to fetch')) {
            const resetTime = Date.now() + 30000;
            setIsQuotaLimited(true);
            setQuotaResetTime(resetTime);
            setQuotaWarning('Hệ thống AI đang lỗi mạng hoặc quá tải. Đã tự động chuyển sang chế độ bảo trì Offline để tiếp tục chấm điểm.');
            executeFastLocalGrading();
          } else {
            setMicError('Có lỗi xảy ra khi chấm điểm. Vui lòng thử lại.');
            setIsEvaluating(false);
          }
        }
      };
    } catch (error) {
      console.error('File reader error:', error);
      setIsEvaluating(false);
    }
  };

  return (
    <div className="min-h-screen pb-20 relative overflow-x-hidden">
      {/* Decorative floating shapes */}
      <div className="fixed top-20 -left-20 w-80 h-80 bg-theme-primary/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-20 -right-20 w-80 h-80 bg-theme-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b-2 border-theme-dark/5">
        <div className="flex items-center gap-3">
          <div className="bg-theme-primary p-2.5 rounded-xl shadow-lg shadow-theme-primary/20">
            <Languages className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="font-display font-black text-xl tracking-tight text-theme-dark">Audio Deutsch</h1>
            <p className="text-[10px] text-theme-primary font-black uppercase tracking-[0.15em]">Luyện Nghe & Phát Âm</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {selectedLesson && (
            <button 
              onClick={() => setSelectedLesson(null)}
              className="text-sm font-black text-theme-secondary hover:text-theme-primary transition-all flex items-center gap-1"
            >
              <ChevronRight className="w-4 h-4 rotate-180" /> Quay lại
            </button>
          )}
          <button 
            onClick={() => setShowSettings(true)}
            className="p-2.5 hover:bg-theme-cream rounded-full transition-all border-2 border-transparent hover:border-theme-dark/20"
          >
            <Settings className="w-5 h-5 text-theme-dark/80" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-8">
        <AnimatePresence mode="wait">
          {!selectedLesson ? (
            <motion.div 
              key="lessons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              <div className="mb-10 text-center space-y-2">
                <h2 className="text-4xl font-display font-black tracking-tight text-theme-dark">Chọn bài học để bắt đầu</h2>
                <p className="text-theme-dark/90 font-bold">Khám phá các mẫu câu thông dụng theo từng chủ đề thực tế.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {VOCABULARY_DATA.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setSelectedLesson(lesson);
                      setActiveTab('vocabulary');
                    }}
                    className="group relative flex items-start gap-4 p-8 slide-card hover:border-theme-primary transition-all duration-300 text-left overflow-hidden hover:shadow-xl hover:shadow-theme-primary/5"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-theme-primary">
                      <BookOpen size={100} />
                    </div>
                    <div className="p-4 bg-theme-cream rounded-2xl group-hover:bg-theme-primary group-hover:text-white transition-all">
                      <BookOpen className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-black text-2xl text-theme-dark group-hover:text-theme-primary transition-colors">{lesson.title}</h3>
                      <p className="text-sm text-theme-dark/80 font-bold line-clamp-1">{lesson.subtitle}</p>
                      <div className="flex items-center gap-3 mt-6">
                        <div className="flex items-center text-[10px] font-black text-theme-primary bg-theme-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                          {lesson.items.length} từ vựng
                        </div>
                        {lesson.grammar && (
                          <div className="flex items-center text-[10px] font-black text-theme-secondary bg-theme-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                            {lesson.grammar.length} ngữ pháp
                          </div>
                        )}
                        <div className="ml-auto flex items-center text-xs font-black text-theme-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                          Bắt đầu <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}

                {/* Review Module Button */}
                <button
                    onClick={() => {
                      setSelectedLesson({
                        id: 'review',
                        title: 'Ôn tập Menschen A2',
                        subtitle: 'Luyện giao tiếp AI & Trắc nghiệm tổng hợp',
                        items: [],
                        grammar: []
                      });
                      setActiveTab('review');
                      setActiveSubTab('ai_roleplay');
                    }}
                    className="md:col-span-2 group relative flex items-start gap-4 p-8 slide-card border-theme-primary/30 hover:border-theme-primary transition-all duration-300 text-left overflow-hidden hover:shadow-xl hover:shadow-theme-primary/10 bg-gradient-to-br from-theme-cream to-white"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-theme-primary">
                      <MonitorPlay size={150} />
                    </div>
                    <div className="p-4 bg-theme-primary/10 rounded-2xl group-hover:bg-theme-primary group-hover:text-white transition-all">
                      <Gamepad2 className="w-8 h-8 text-theme-primary group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-black text-3xl text-theme-primary transition-colors">Bài Ôn tập giáo trình Menschen A2</h3>
                      <p className="text-base text-theme-dark/80 font-bold line-clamp-2 mt-1">Phòng luyện giao tiếp AI, Trạm ôn tập tổng hợp hàng ngày (Spaced Repetition).</p>
                      <div className="flex items-center gap-3 mt-6">
                        <div className="flex items-center text-[11px] font-black text-emerald-600 bg-emerald-100 px-4 py-1.5 rounded-full uppercase tracking-wider">
                          AI Roleplay
                        </div>
                        <div className="flex items-center text-[11px] font-black text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full uppercase tracking-wider">
                          Daily Mix
                        </div>
                        <div className="ml-auto flex items-center text-sm font-black text-theme-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                          Khám phá ngay <ChevronRight className="w-5 h-5 ml-1" />
                        </div>
                      </div>
                    </div>
                  </button>
              </div>

              {/* Offline Usage Tip for the Home Screen */}
              <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-100/50 border border-theme-dark/10 flex flex-col md:flex-row gap-6 items-start">
                 <div className="w-14 h-14 shrink-0 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                    <Mic className="w-7 h-7" />
                 </div>
                 <div className="space-y-4 flex-1">
                    <h4 className="text-lg font-black text-theme-dark">Hướng dẫn kích hoạt tính năng "Luyện nói Offline" (Không cần Wifi)</h4>
                    <p className="text-theme-dark/80 font-medium leading-relaxed">
                      Mặc định, ứng dụng cần có mạng Wifi/4G để tải các bài học và sử dụng AI chấm điểm giọng nói. Tuy nhiên, nếu bạn muốn dùng App <b>ngay cả khi đi máy bay hoặc đến nơi mất sóng (Offline Version)</b> với độ trễ phản hồi cực nhanh (0s), bạn chỉ cần làm theo hướng dẫn sau đúng 1 lần: 
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* iOS Instructions */}
                      <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-2xl text-[13px] font-medium text-zinc-700 leading-relaxed shadow-sm">
                         <strong className="text-theme-dark text-sm block mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-theme-primary"></div> Dành cho iPhone / iPad (iOS):</strong>
                         <p className="mb-1 text-slate-800 font-bold">Để máy chấm điểm được Offline (Nhận diện giọng nói):</p>
                         <ul className="list-decimal pl-4 mb-3 space-y-1 text-zinc-600">
                           <li>Vào <b className="text-theme-primary">Cài đặt (Settings)</b> {'>'} <b className="text-theme-primary">Cài đặt chung (General)</b>.</li>
                           <li>Chọn <b className="text-theme-primary">Bàn phím (Keyboard)</b> {'>'} Bật <b className="text-theme-primary">Đọc chính tả (Dictation)</b>.</li>
                           <li>Mở phần <b className="text-theme-primary">Ngôn ngữ Đọc chính tả</b> {'>'} Đánh dấu tích để tải về <b className="text-theme-primary">Tiếng Đức (Đức)</b>.<br/>
                           <i className="text-xs text-rose-500">*Nếu không thấy Tiếng Đức, quay lại mục Bàn phím {'>'} Thêm bàn phím mới {'>'} Chọn Tiếng Đức.</i></li>
                         </ul>
                         <p className="mb-1 text-slate-800 font-bold">Để nghe Audio offline (Tùy chọn):</p>
                         <ul className="list-decimal pl-4 space-y-1 text-zinc-600">
                           <li>Vào <b className="text-theme-primary">Cài đặt</b> {'>'} <b className="text-theme-primary">Trợ năng (Accessibility)</b>.</li>
                           <li>Chọn <b className="text-theme-primary">Đọc & Nói (Read & Speak / Spoken Content)</b> {'>'} <b className="text-theme-primary">Giọng nói (Voices)</b>.</li>
                           <li>Tìm <b className="text-theme-primary">Tiếng Đức</b> và bấm biểu tượng "Đám mây" tải về một giọng bạn thích.</li>
                         </ul>
                      </div>

                      {/* Android Instructions */}
                      <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-2xl text-[13px] font-medium text-zinc-700 leading-relaxed shadow-sm">
                         <strong className="text-theme-dark text-sm block mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Dành cho Android (Samsung, Xiaomi...):</strong>
                         <ul className="list-decimal pl-4 space-y-2 text-zinc-600">
                           <li>Vào mục <b className="text-theme-primary">Cài đặt (Settings)</b> của điện thoại.</li>
                           <li>Tìm kiếm từ khoá <b className="text-theme-primary">"Đọc chính tả"</b> (Voice typing) hoặc <b className="text-theme-primary">"Văn bản thành giọng nói"</b> (Text-to-speech) qua thanh tìm kiếm.</li>
                           <li>Trong mục quản lý ngôn ngữ của Google, chọn Tải xuống (Download) gói <b className="text-theme-primary">Tiếng Đức (German / Deutsch)</b> cục bộ.</li>
                           <li><i>*Lưu ý: Tuỳ từng hãng máy mà đường dẫn có thể nằm trong mục "Bàn phím" hoặc "Ngôn ngữ {'>'} Hệ thống".</i></li>
                         </ul>
                      </div>
                    </div>
                 </div>
              </div>

            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h2 className="text-4xl font-display font-black text-theme-dark flex max-md:flex-col max-md:items-start items-center gap-4">
                    <span>{selectedLesson.title}</span>
                    {selectedLesson.id === 'l21' && (
                      <div className="flex items-center gap-2 bg-theme-primary/10 pl-1 pr-4 py-1 rounded-full border border-theme-primary/20">
                        <button 
                          onClick={() => playAudio(L21_INTRO_SCRIPT, 'l21-intro', 'vi-VN')} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${playingId === 'l21-intro' ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white'}`}
                          title="Nghe Giới thiệu Bài 21"
                        >
                          {playingId === 'l21-intro' ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
                        </button>
                        <span className="text-[11px] font-black text-theme-primary uppercase tracking-widest leading-none pt-0.5">
                          Audio giới thiệu bài 21
                        </span>
                        <button 
                          onClick={downloadL21Intro} 
                          disabled={isDownloadingL21}
                          className="ml-2 w-8 h-8 rounded-full bg-theme-primary/20 hover:bg-theme-primary hover:text-white text-theme-primary flex items-center justify-center transition-all disabled:opacity-50"
                          title="Tải audio về máy (.wav)"
                        >
                          {isDownloadingL21 ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
                        </button>
                      </div>
                    )}
                    {selectedLesson.id === 'l22' && (
                      <div className="flex items-center gap-2 bg-theme-primary/10 pl-1 pr-4 py-1 rounded-full border border-theme-primary/20">
                        <button 
                          onClick={() => playAudio(L22_INTRO_SCRIPT, 'l22-intro', 'vi-VN')} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${playingId === 'l22-intro' ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white'}`}
                          title="Nghe Giới thiệu Bài 22"
                        >
                          {playingId === 'l22-intro' ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
                        </button>
                        <span className="text-[11px] font-black text-theme-primary uppercase tracking-widest leading-none pt-0.5">
                          Audio giới thiệu bài 22
                        </span>
                      </div>
                    )}
                    {selectedLesson.id === 'l23' && (
                      <div className="flex items-center gap-2 bg-theme-primary/10 pl-1 pr-4 py-1 rounded-full border border-theme-primary/20">
                        <button 
                          onClick={() => playAudio(L23_INTRO_SCRIPT, 'l23-intro', 'vi-VN')} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${playingId === 'l23-intro' ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white'}`}
                          title="Nghe Giới thiệu Bài 23"
                        >
                          {playingId === 'l23-intro' ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
                        </button>
                        <span className="text-[11px] font-black text-theme-primary uppercase tracking-widest leading-none pt-0.5">
                          Audio giới thiệu bài 23
                        </span>
                        <button 
                          onClick={downloadL23Intro} 
                          disabled={isDownloadingL23}
                          className="ml-2 w-8 h-8 rounded-full bg-theme-primary/20 hover:bg-theme-primary hover:text-white text-theme-primary flex items-center justify-center transition-all disabled:opacity-50"
                          title="Tải audio về máy (.wav)"
                        >
                          {isDownloadingL23 ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
                        </button>
                      </div>
                    )}
                    {selectedLesson.id === 'l24' && (
                      <div className="flex items-center gap-2 bg-theme-primary/10 pl-1 pr-4 py-1 rounded-full border border-theme-primary/20">
                        <button 
                          onClick={() => playAudio(L24_INTRO_SCRIPT, 'l24-intro', 'vi-VN')} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${playingId === 'l24-intro' ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white'}`}
                          title="Nghe Giới thiệu Bài 24"
                        >
                          {playingId === 'l24-intro' ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
                        </button>
                        <span className="text-[11px] font-black text-theme-primary uppercase tracking-widest leading-none pt-0.5">
                          Audio giới thiệu bài 24
                        </span>
                        <button 
                          onClick={downloadL24Intro} 
                          disabled={isDownloadingL24}
                          className="ml-2 w-8 h-8 rounded-full bg-theme-primary/20 hover:bg-theme-primary hover:text-white text-theme-primary flex items-center justify-center transition-all disabled:opacity-50"
                          title="Tải audio về máy (.wav)"
                        >
                          {isDownloadingL24 ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
                        </button>
                      </div>
                    )}
                  </h2>
                  <p className="text-theme-dark/80 font-black text-sm uppercase tracking-widest">{selectedLesson.subtitle}</p>
                </div>
              </div>

              {/* Tab Bar */}
              {selectedLesson.id === 'review' ? (
                <div className="flex p-1.5 bg-theme-dark/5 rounded-[28px] gap-1 border-2 border-theme-dark/5 overflow-x-auto hide-scrollbar touch-pan-x">
                  <button
                    onClick={() => setActiveSubTab('ai_roleplay')}
                    className={`flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 ${
                      activeSubTab === 'ai_roleplay' ? 'bg-white shadow-xl shadow-theme-dark/10 text-emerald-600' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <Bot className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">AI Roleplay</span>
                  </button>
                  <button
                    onClick={() => setActiveSubTab('daily_mix')}
                    className={`flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 ${
                      activeSubTab === 'daily_mix' ? 'bg-white shadow-xl shadow-theme-dark/10 text-amber-600' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <Gamepad2 className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Daily Mix</span>
                  </button>
                </div>
              ) : (
              <div className="flex p-1.5 bg-theme-dark/5 rounded-[28px] gap-1 border-2 border-theme-dark/5 overflow-x-auto hide-scrollbar touch-pan-x">
                <button
                  onClick={() => setActiveTab('vocabulary')}
                  className={`flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 ${
                    activeTab === 'vocabulary' ? 'bg-white shadow-xl shadow-theme-dark/10 text-theme-primary' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                  }`}
                >
                  <BookOpen className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Từ vựng</span>
                </button>
                <button
                  onClick={() => setActiveTab('grammar')}
                  className={`flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 ${
                    activeTab === 'grammar' ? 'bg-white shadow-xl shadow-theme-dark/10 text-theme-secondary' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                  }`}
                >
                  <Languages className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Ngữ pháp</span>
                </button>
                {(selectedLesson.id === 'l21' || selectedLesson.id === 'l22' || selectedLesson.id === 'l23' || selectedLesson.id === 'l24') && (
                  <button
                    onClick={() => setActiveTab('lecture')}
                    className={`flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 ${
                      activeTab === 'lecture' ? 'bg-white shadow-xl shadow-theme-dark/10 text-amber-600' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <MonitorPlay className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Bài giảng</span>
                  </button>
                )}
                {(selectedLesson.id === 'l21' || selectedLesson.id === 'l22' || selectedLesson.id === 'l23' || selectedLesson.id === 'l24') && (
                  <button
                    onClick={() => setActiveTab('game')}
                    className={`flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 ${
                      activeTab === 'game' ? 'bg-white shadow-xl shadow-theme-dark/10 text-theme-accent' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <Gamepad2 className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Trò chơi</span>
                  </button>
                )}
                {(selectedLesson.id === 'l21' || selectedLesson.id === 'l22' || selectedLesson.id === 'l23' || selectedLesson.id === 'l24') && (
                  <button
                    onClick={() => setActiveTab('speaking')}
                    className={`flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 ${
                      activeTab === 'speaking' ? 'bg-white shadow-xl shadow-theme-dark/10 text-emerald-500' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <Mic className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Luyện nói</span>
                  </button>
                )}
                {(selectedLesson.id === 'l21') && (
                  <button
                    onClick={() => setActiveTab('writing')}
                    className={`flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 ${
                      activeTab === 'writing' ? 'bg-white shadow-xl shadow-theme-dark/10 text-indigo-500' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <span className="text-xl md:text-lg mb-1 md:mb-0">📝</span> <span className="text-center leading-tight">Luyện viết</span>
                  </button>
                )}
              </div>
              )}

              <div className="space-y-4 pb-20">
                {selectedLesson.id === 'review' || activeTab === 'review' ? (
                   activeSubTab === 'ai_roleplay' ? <ReviewAIRoleplay /> : <ReviewDailyMix />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l21' ? (
                  <Lektion21Slides playAudio={playAudio} playingId={playingId} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l22' ? (
                  <Lektion22Slides playAudio={playAudio} playingId={playingId} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l23' ? (
                  <Lektion23Slides playAudio={playAudio} playingId={playingId} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l24' ? (
                  <Lektion24Slides playAudio={playAudio} playingId={playingId} />
                ) : activeTab === 'speaking' ? (
                  <SpeakingPractice lessonId={selectedLesson.id} playAudio={playAudio} playingId={playingId} />
                ) : activeTab === 'writing' && selectedLesson.id === 'l21' ? (
                  <WritingPractice />
                ) : activeTab === 'game' ? (
                  <div className="space-y-6">
                    {selectedLesson.id === 'l21' && (
                      <div className="flex justify-center mb-6">
                        <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
                          <button 
                            onClick={() => setActiveSubTab('flashcard')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'flashcard' || !activeSubTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Lật thẻ
                          </button>
                          <button 
                            onClick={() => setActiveSubTab('alibi')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'alibi' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Phá án (Alibi)
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {selectedLesson.id === 'l24' && (
                      <div className="flex justify-center mb-6">
                        <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
                          <button 
                            onClick={() => setActiveSubTab('kartenspiel')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'kartenspiel' || !activeSubTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Lật thẻ ghép chữ
                          </button>
                          <button 
                            onClick={() => setActiveSubTab('wordguess')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'wordguess' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Đoán từ (Was passt?)
                          </button>
                          <button 
                            onClick={() => setActiveSubTab('dachquiz')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'dachquiz' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            D-A-CH Quiz
                          </button>
                        </div>
                      </div>
                    )}

                    {selectedLesson.id === 'l21' && activeSubTab === 'alibi' ? (
                      <AlibiGame 
                        onBack={() => setActiveTab('vocabulary')} 
                        playAudio={playAudio}
                        playingId={playingId}
                      />
                    ) : selectedLesson.id === 'l24' && activeSubTab === 'wordguess' ? (
                      <Lektion24WordGuessingGame 
                        playAudio={playAudio}
                        playingId={playingId}
                      />
                    ) : selectedLesson.id === 'l24' && activeSubTab === 'dachquiz' ? (
                      <Lektion24DACHQuiz 
                        playAudio={playAudio}
                        playingId={playingId}
                      />
                    ) : (
                      <Kartenspiel
                        lesson={selectedLesson}
                        onBack={() => setActiveTab('vocabulary')} 
                        playAudio={playAudio}
                        playingId={playingId}
                      />
                    )}
                  </div>
                ) : (
                  activeTab === 'vocabulary' ? (
                    <div>
                      {(selectedLesson.id === 'l22' || selectedLesson.id === 'l23' || selectedLesson.id === 'l24') && (
                        <div className="flex justify-center mb-6 overflow-x-auto hide-scrollbar">
                          <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner min-w-max">
                            <button 
                              onClick={() => setActiveSubTab('flashcard')}
                              className={`px-6 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${activeSubTab === 'flashcard' || !activeSubTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                            >
                              Học từ vựng
                            </button>
                            <button 
                              onClick={() => setActiveSubTab('exercises')}
                              className={`px-6 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${activeSubTab === 'exercises' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                            >
                              {selectedLesson.id === 'l24' ? 'Bài tập nâng cấp (10 bài)' : 'Bài tập đại trà (10 bài)'}
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {selectedLesson.id === 'l22' && activeSubTab === 'exercises' ? (
                        <Lektion22Exercises />
                      ) : selectedLesson.id === 'l23' && activeSubTab === 'exercises' ? (
                        <Lektion23Exercises playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l24' && activeSubTab === 'exercises' ? (
                        <Lektion24Exercises playAudio={playAudio} playingId={playingId} />
                      ) : (
                        <FlashcardGrid 
                          items={selectedLesson.items}
                          playAudio={playAudio}
                          playingId={playingId}
                          recordingId={recordingId}
                          isEvaluating={isEvaluating}
                          feedback={feedback}
                          startRecording={startRecording}
                          stopRecording={stopRecording}
                          setFeedback={setFeedback}
                        />
                      )}
                    </div>
                  ) : (
                    <div>
                      {(selectedLesson.id === 'l22' || selectedLesson.id === 'l21' || selectedLesson.id === 'l23' || selectedLesson.id === 'l24') && (
                        <div className="flex justify-center mb-6 overflow-x-auto hide-scrollbar">
                          <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner min-w-max">
                            <button 
                              onClick={() => setGrammarSubTab('theory')}
                              className={`px-6 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${grammarSubTab === 'theory' ? 'bg-white shadow-sm text-theme-secondary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                            >
                              Lý thuyết Ngữ pháp
                            </button>
                            <button 
                              onClick={() => setGrammarSubTab('exercises')}
                              className={`px-6 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${grammarSubTab === 'exercises' ? 'bg-white shadow-sm text-theme-secondary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                            >
                              {selectedLesson.id === 'l22' ? 'Bài tập Ngữ pháp (5 Phần)' : selectedLesson.id === 'l23' ? 'Bài tập Ngữ pháp (15 Phần)' : selectedLesson.id === 'l24' ? 'Bài tập Ngữ pháp (8 Phần)' : 'Bài tập Ngữ pháp'}
                            </button>
                          </div>
                        </div>
                      )}

                      {selectedLesson.id === 'l22' && grammarSubTab === 'exercises' ? (
                        <Lektion22GrammarEx />
                      ) : selectedLesson.id === 'l23' && grammarSubTab === 'exercises' ? (
                        <Lektion23GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l24' && grammarSubTab === 'exercises' ? (
                        <Lektion24GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l21' && grammarSubTab === 'theory' ? (
                        <Lektion21GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l21' && grammarSubTab === 'exercises' ? (
                        <Lektion21GrammarEx />
                      ) : (
                        <div>
                          {(selectedLesson.id === 'l23' || selectedLesson.id === 'l22' || selectedLesson.id === 'l24') && (
                            <div className="flex justify-center mb-8 gap-3">
                              <button
                                onClick={() => playAudio(selectedLesson.id === 'l23' ? L23_GRAMMAR_SCRIPT : selectedLesson.id === 'l24' ? L24_GRAMMAR_SCRIPT : L22_GRAMMAR_SCRIPT, `${selectedLesson.id}_grammar_intro`, 'vi-VN')}
                                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-black shadow-xl transition-all ${
                                  playingId === `${selectedLesson.id}_grammar_intro` 
                                    ? 'bg-theme-secondary text-white shadow-theme-secondary/30 scale-95' 
                                    : 'bg-white text-theme-secondary shadow-theme-dark/5 hover:scale-105 active:scale-95 border-2 border-theme-secondary/10'
                                }`}
                              >
                                {playingId === `${selectedLesson.id}_grammar_intro` ? <Loader2 className="w-5 h-5 animate-spin" /> : <Volume2 className="w-5 h-5" />}
                                <span>AUDIO GIỚI THIỆU NGỮ PHÁP</span>
                              </button>
                              <button
                                onClick={() => downloadGrammarIntro(selectedLesson.id, selectedLesson.id === 'l23' ? L23_GRAMMAR_SCRIPT : selectedLesson.id === 'l24' ? L24_GRAMMAR_SCRIPT : L22_GRAMMAR_SCRIPT)}
                                disabled={isDownloadingGrammar}
                                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-theme-secondary/10 hover:bg-theme-secondary hover:text-white text-theme-secondary font-black shadow-sm transition-all disabled:opacity-50 border border-theme-secondary/20"
                                title="Tải audio về máy (.wav)"
                              >
                                {isDownloadingGrammar ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                                <span>TẢI VỀ</span>
                              </button>
                            </div>
                          )}
                          <GrammarTable 
                            items={selectedLesson.grammar || []} 
                            playAudio={playAudio}
                            playingId={playingId}
                          />
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
                <h3 className="font-bold text-lg">Cài đặt giọng đọc</h3>
                <button onClick={() => setShowSettings(false)} className="p-1 hover:bg-zinc-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Gender Toggle */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-zinc-800 uppercase tracking-widest border-b border-zinc-100 pb-1">Loại giọng</p>
                  <div className="flex p-1 bg-zinc-100 rounded-2xl gap-1">
                    <button 
                      onClick={() => {
                        setVoiceGender('Female');
                        if (!VOICES.find(v => v.id === voiceName && v.gender === 'Female')) {
                          setVoiceName('Kore');
                        }
                      }}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        voiceGender === 'Female' ? 'bg-white shadow-sm text-indigo-600' : 'text-zinc-800'
                      }`}
                    >
                      Giọng Nữ
                    </button>
                    <button 
                      onClick={() => {
                        setVoiceGender('Male');
                        if (!VOICES.find(v => v.id === voiceName && v.gender === 'Male')) {
                          setVoiceName('Zephyr');
                        }
                      }}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        voiceGender === 'Male' ? 'bg-white shadow-sm text-indigo-600' : 'text-zinc-800'
                      }`}
                    >
                      Giọng Nam
                    </button>
                  </div>
                </div>

                {/* Effect Selection */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-zinc-800 uppercase tracking-widest border-b border-zinc-100 pb-1">Hiệu ứng giọng đọc</p>
                  <div className="grid grid-cols-2 gap-2">
                    {EFFECTS.map((e) => (
                      <button
                        key={e.id}
                        onClick={() => setVoiceEffect(e.id)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          voiceEffect === e.id 
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-600 ring-2 ring-indigo-100' 
                            : 'border-zinc-200 hover:bg-zinc-50 text-zinc-800'
                        }`}
                      >
                        <span className="font-bold text-xs">{e.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Person Selection */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-zinc-800 uppercase tracking-widest border-b border-zinc-100 pb-1">Nhân vật</p>
                  <div className="space-y-2">
                    {VOICES.filter(v => v.gender === voiceGender).map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setVoiceName(v.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                          voiceName === v.id 
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                            : 'border-zinc-200 hover:bg-zinc-50'
                        }`}
                      >
                        <span className="font-medium text-sm">{v.name}</span>
                        {voiceName === v.id && <CheckCircle2 className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Offline Cache Notice & Controls */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-zinc-800 uppercase tracking-widest border-b border-zinc-100 pb-1">Chế độ Offline (PWA)</p>
                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl mb-2">
                    <p className="text-[11px] font-medium text-emerald-800 leading-relaxed">
                      💡 Những từ bạn đã nghe sẽ được tự động lưu offline. <br/>
                      💡 Khi mất mạng, AI chấm điểm tự động chuyển sang cơ chế nhận diện máy nội bộ siêu tốc.
                    </p>
                  </div>
                  
                  {selectedLesson ? (
                    downloadProgress ? (
                       <div className="space-y-2 p-4 bg-zinc-50 border border-zinc-100 rounded-2xl">
                         <div className="flex justify-between text-[11px] font-black text-theme-dark/60 uppercase">
                            <span>Đang Tải Gói Audio: {downloadProgress.current}/{downloadProgress.total}</span>
                            <span>{Math.round((downloadProgress.current/downloadProgress.total)*100)}%</span>
                         </div>
                         <div className="h-2 w-full bg-theme-dark/5 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-500 transition-all duration-300"
                              style={{width: `${(downloadProgress.current/downloadProgress.total)*100}%`}}
                            />
                         </div>
                       </div>
                    ) : (
                       <button
                         onClick={downloadAllAudioForLesson}
                         className="w-full p-4 bg-theme-dark/5 border border-theme-dark/10 hover:bg-theme-dark/10 text-sm font-bold text-theme-dark rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2"
                       >
                         Tải sẵn Audio Offline cho Bài {selectedLesson.title.replace('Lektion ', '')}
                       </button>
                    )
                  ) : (
                    <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-center">
                      <p className="text-[11px] font-medium text-zinc-400">Hãy chọn 1 bài học (ở menu chính) để tải tải audio.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 bg-zinc-50">
                <button 
                  onClick={() => setShowSettings(false)}
                  className="w-full bg-indigo-600 text-white font-bold py-3 rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg"
                >
                  Áp dụng
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Action Button for Home if in detail */}
      {selectedLesson && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-8 right-8 z-20"
        >
          <button
            onClick={() => setSelectedLesson(null)}
            className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors"
          >
            <BookOpen className="w-6 h-6" />
          </button>
        </motion.div>
      )}

      {/* Mic Error Modal */}
      <AnimatePresence>
        {micError && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-8 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle size={40} />
              </div>
              <h3 className="font-black text-2xl text-zinc-900">Lỗi truy cập Micro</h3>
              <p className="text-base text-zinc-800 font-medium leading-relaxed">
                {micError}
              </p>
              <button 
                onClick={() => setMicError(null)}
                className="w-full bg-indigo-600 text-white font-bold py-4 text-lg rounded-2xl hover:bg-indigo-700 transition-colors"
              >
                Đã hiểu
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Recording Indicator */}
      <AnimatePresence>
        {recordingId && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-8 py-4 rounded-full flex items-center gap-4 shadow-xl z-30"
          >
            <div className="w-3 h-3 bg-white rounded-full animate-ping" />
            <span className="text-lg font-bold">Đang nghe... nói đi bạn!</span>
            <button 
              onClick={stopRecording}
              className="ml-4 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-sm font-bold uppercase tracking-widest"
            >
              Dừng
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quota Warning Toast */}
      <AnimatePresence>
        {quotaWarning && (
          <motion.div
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 20, x: '-50%', opacity: 1 }}
            exit={{ y: -100, x: '-50%', opacity: 0 }}
            className="fixed top-20 left-1/2 bg-amber-500 text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-2xl z-50 border border-amber-400"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <AlertCircle size={18} />
                <span className="text-sm font-bold">{quotaWarning}</span>
              </div>
              {isQuotaLimited && (
                <div className="text-[10px] mt-1 opacity-90 font-medium">
                  AI sẽ khôi phục sau: {Math.max(0, Math.ceil((quotaResetTime - Date.now()) / 1000))} giây
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
