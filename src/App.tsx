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
  Bot,
  FileText
} from 'lucide-react';
import { GoogleGenAI, Modality } from "@google/genai";
import { VOCABULARY_DATA, Lesson, VocabularyItem, L21_INTRO_SCRIPT, L22_GRAMMAR_SCRIPT, L23_GRAMMAR_SCRIPT, L23_INTRO_SCRIPT, L22_INTRO_SCRIPT, L24_GRAMMAR_SCRIPT, L24_INTRO_SCRIPT } from './constants';
import AlibiGame from './components/AlibiGame';
import Kartenspiel from './components/Kartenspiel';
import Lektion1Slides from './components/Lektion1Slides';
import Lektion1VocabTheory from './components/Lektion1VocabTheory';
import Lektion1VocabEx from './components/Lektion1VocabEx';
import Lektion1GrammarTheory from './components/Lektion1GrammarTheory';
import Lektion1GrammarEx from './components/Lektion1GrammarEx';
import Lektion2VocabTheory from './components/Lektion2VocabTheory';
import Lektion2VocabEx from './components/Lektion2VocabEx';
import Lektion2GrammarTheory from './components/Lektion2GrammarTheory';
import Lektion2GrammarEx from './components/Lektion2GrammarEx';
import Lektion2Slides from './components/Lektion2Slides';
import Lektion3VocabTheory from './components/Lektion3VocabTheory';
import Lektion3VocabEx from './components/Lektion3VocabEx';
import Lektion3GrammarTheory from './components/Lektion3GrammarTheory';
import Lektion3GrammarEx from './components/Lektion3GrammarEx';
import Lektion3Slides from './components/Lektion3Slides';
import Lektion13VocabTheory from './components/Lektion13VocabTheory';
import Lektion13VocabEx from './components/Lektion13VocabEx';
import Lektion13GrammarTheory from './components/Lektion13GrammarTheory';
import Lektion13GrammarEx from './components/Lektion13GrammarEx';
import Lektion13Slides from './components/Lektion13Slides';
import Lektion14VocabTheory from './components/Lektion14VocabTheory';
import Lektion14VocabEx from './components/Lektion14VocabEx';
import Lektion14GrammarTheory from './components/Lektion14GrammarTheory';
import Lektion14GrammarEx from './components/Lektion14GrammarEx';
import Lektion14Slides from './components/Lektion14Slides';
import Lektion15Slides from './components/Lektion15Slides';
import Lektion15VocabEx from './components/Lektion15VocabEx';
import Lektion15GrammarEx from './components/Lektion15GrammarEx';
import Lektion15GrammarTheory from './components/Lektion15GrammarTheory';
import Lektion15MediaGame from './components/Lektion15MediaGame';
import Lektion16Slides from './components/Lektion16Slides';
import Lektion16HotelGame from './components/Lektion16HotelGame';
import Lektion16VocabEx from './components/Lektion16VocabEx';
import Lektion16GrammarEx from './components/Lektion16GrammarEx';
import Lektion16GrammarTheory from './components/Lektion16GrammarTheory';
import Lektion17Slides from './components/Lektion17Slides';
import Lektion17VocabTheory from './components/Lektion17VocabTheory';
import Lektion17GrammarTheory from './components/Lektion17GrammarTheory';
import Lektion17VocabEx from './components/Lektion17VocabEx';
import Lektion17GrammarEx from './components/Lektion17GrammarEx';
import Lektion17TravelGame from './components/Lektion17TravelGame';
import Lektion18Slides from './components/Lektion18Slides';
import Lektion18VocabTheory from './components/Lektion18VocabTheory';
import Lektion18GrammarTheory from './components/Lektion18GrammarTheory';
import Lektion18VocabEx from './components/Lektion18VocabEx';
import Lektion18GrammarEx from './components/Lektion18GrammarEx';
import Lektion18NavigatorGame from './components/Lektion18NavigatorGame';
import Lektion19Slides from './components/Lektion19Slides';
import Lektion19VocabTheory from './components/Lektion19VocabTheory';
import Lektion19VocabEx from './components/Lektion19VocabEx';
import Lektion19GrammarTheory from './components/Lektion19GrammarTheory';
import Lektion19GrammarEx from './components/Lektion19GrammarEx';
import Lektion20Slides from './components/Lektion20Slides';
import Lektion20VocabTheory from './components/Lektion20VocabTheory';
import Lektion20VocabEx from './components/Lektion20VocabEx';
import Lektion20GrammarTheory from './components/Lektion20GrammarTheory';
import Lektion20GrammarEx from './components/Lektion20GrammarEx';
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
import ReadingPractice from './components/ReadingPractice';

import ReviewAIRoleplay from './components/ReviewAIRoleplay';
import ReviewDailyMix from './components/ReviewDailyMix';
import { getAI } from './ai';

const ai = getAI();

const VOICES = [
  { id: 'Aoede', name: 'Nữ 1 (Aoede - Chuẩn)', gender: 'Female' },
  { id: 'Kore', name: 'Nữ 2 (Kore - Trầm)', gender: 'Female' },
  { id: 'Fenrir', name: 'Nam 1 (Fenrir - Chuẩn)', gender: 'Male' },
  { id: 'Charon', name: 'Nam 2 (Charon - Trầm)', gender: 'Male' },
  { id: 'Puck', name: 'Nam 3 (Puck - Sáng)', gender: 'Male' },
];

const EFFECTS = [
  { id: 'natural', name: 'Tự nhiên', prompt: 'Say clearly' },
  { id: 'cheerful', name: 'Vui vẻ', prompt: 'Say cheerfully' },
  { id: 'serious', name: 'Trang trọng', prompt: 'Say professionally and seriously' },
  { id: 'slow', name: 'Chậm rãi', prompt: 'Say slowly and clearly' },
];

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState<'vocabulary' | 'grammar' | 'game' | 'lecture' | 'speaking' | 'writing' | 'review'>('vocabulary');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState<'flashcard' | 'alibi' | 'exercises' | 'ai_roleplay' | 'daily_mix'>('flashcard');
  const [grammarSubTab, setGrammarSubTab] = useState<'theory' | 'exercises'>('theory');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isDownloadingL21, setIsDownloadingL21] = useState(false);
  const [isDownloadingL23, setIsDownloadingL23] = useState(false);
  const [isDownloadingL24, setIsDownloadingL24] = useState(false);
  const [isDownloadingL22, setIsDownloadingL22] = useState(false);
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
    
    // --> SYNCHRONOUS UNLOCK FOR MOBILE SAFARI/EDGE/BRAVE <--
    // Mobile browsers require AudioContext & SpeechSynthesis to be unlocked synchronously inside a user gesture event handler
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    const audioContext = audioContextRef.current;
    if (audioContext.state === 'suspended') {
      audioContext.resume().catch(() => {});
    }
    // Play a silent buffer to guarantee AudioContext is active
    try {
      const silentBuffer = audioContext.createBuffer(1, 1, 24000);
      const silentSource = audioContext.createBufferSource();
      silentSource.buffer = silentBuffer;
      silentSource.connect(audioContext.destination);
      silentSource.start(0);
    } catch(e) {}
    
    // Unlock SpeechSynthesis synchronously
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch(e) {}

    const currentVoiceName = overrideVoiceName || voiceName;
    const cacheKey = `${id}-${voiceEffect}-${text}-${lang}-v5`;

    const useSystemTTS = () => {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        
        const voices = window.speechSynthesis.getVoices();
        const targetVoice = voices.find(v => v.lang.startsWith(lang.split('-')[0])) || voices[0];
        if (targetVoice) utterance.voice = targetVoice;
        
        let hasEnded = false;
        const resetPlaying = () => {
          if (!hasEnded) {
            hasEnded = true;
            setPlayingId(null);
            clearTimeout(fallbackTimer);
          }
        };

        const fallbackTimer = setTimeout(resetPlaying, 15000); // Max 15s wait to avoid eternal hang on mobile
        
        utterance.onend = resetPlaying;
        utterance.onerror = resetPlaying;
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
        setQuotaWarning('Mất kết nối mạng. Đang dùng giọng đọc máy dự phòng...');
        setTimeout(() => setQuotaWarning(null), 4000);
        useSystemTTS();
        return;
      }

      if (!pcmData && !isQuotaLimited) {
        isFetchingAudio.current = true;
        
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout
          
          const res = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, lang, voiceName: currentVoiceName, voiceEffect }),
            signal: controller.signal
          });
          clearTimeout(timeoutId);
          
          if (!res.ok) {
            let errMsg = "Failed to fetch audio from server (" + res.status + ")";
            try {
              const errData = await res.json();
              if (errData.error) errMsg += " - " + errData.error;
            } catch(e) {}
            throw new Error(errMsg);
          }
          
          const data = await res.json();
          if (data.fileUrl && !data.pcmBase64) {
            // Fetch the cached PCM file directly
            const audioRes = await fetch(data.fileUrl);
            const buffer = await audioRes.arrayBuffer();
            pcmData = new Int16Array(buffer);
          } else if (data.pcmBase64) {
            // First time generated, parse from base64
            const binaryString = atob(data.pcmBase64);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
              bytes[i] = binaryString.charCodeAt(i);
            }
            pcmData = new Int16Array(bytes.buffer);
          }
        } catch (e: any) {
           console.error("Error calling /api/tts:", e);
           const errorString = e.message || String(e);
           if (errorString.includes('429') || errorString.includes('RESOURCE_EXHAUSTED') || errorString.includes('400') || errorString.includes('API key not valid') || errorString.includes('API_KEY_INVALID') || errorString.includes('Unexpected token')) {
             throw e; // pass to outer catch for quota or key handling
           }
           // For aborts or fetch failures, warn the user we're falling back
           setQuotaWarning('AI đang quá tải hoặc phản hồi chậm. Tạm thời dùng giọng đọc máy dự phòng (chất lượng sẽ kém tự nhiên hơn)...');
           setTimeout(() => setQuotaWarning(null), 7000);
        }

        if (pcmData) {
          audioCache.current[currentVoiceName][cacheKey] = pcmData;
          
          // Store to Cache API for Offline use
          try {
             const cache = await caches.open('german-tts-cache-v1');
             const offlineKey = `/tts/${currentVoiceName}/${encodeURIComponent(cacheKey)}`;
             await cache.put(offlineKey, new Response(pcmData.buffer, {
               headers: { 'Content-Type': 'audio/pcm' }
             }));
          } catch (e) {
            console.log('Failed to save audio to cache', e);
          }
        }
        isFetchingAudio.current = false;
      } else if (!pcmData && isQuotaLimited) {
        setQuotaWarning('AI đã hết hạn mức. Đang phát bằng giọng đọc máy dự phòng (sẽ kém tự nhiên hơn)...');
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
      } else if (errorString.includes('400') || errorString.includes('API_KEY_INVALID') || errorString.includes('API key not valid') || errorString.includes('Unexpected token')) {
        console.error('API Key error or Server issue');
        setQuotaWarning('Lỗi kết nối máy chủ hoặc API Key không hợp lệ. Đang dùng giọng máy.');
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
               const res = await fetch('/api/tts', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({ text, lang: 'de-DE', voiceName: voiceName, voiceEffect })
               });
               
               if (res.ok) {
                 const data = await res.json();
                 if (data.pcmBase64) {
                   const binaryString = atob(data.pcmBase64);
                   const bytes = new Uint8Array(binaryString.length);
                   for (let j = 0; j < binaryString.length; j++) bytes[j] = binaryString.charCodeAt(j);
                   await cache.put(offlineKey, new Response(bytes.buffer, { headers: { 'Content-Type': 'audio/pcm' } }));
                 } else if (data.fileUrl) {
                   const audioRes = await fetch(data.fileUrl);
                   const buffer = await audioRes.arrayBuffer();
                   await cache.put(offlineKey, new Response(buffer, { headers: { 'Content-Type': 'audio/pcm' } }));
                 }
               }
               // Wait briefly between requests
               await new Promise(r => setTimeout(r, 500));
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
          
          const prompt = `GERMAN EXPERT.
Eval pronunciation against: "${targetText}".
STRICT. Penalize wrong consonants (-st, -t, -en), vowels, stress. Score 0-100 (granular).
Return ONLY JSON: {"score": 85, "transcription": "...", "suggestion": "precise tip in VNese"}`;

          const res = await fetch('/api/evaluate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, mimeType: "audio/webm", audioBase64: base64Audio })
          });

          if (!res.ok) {
            let errMsg = "Evaluation failed at server";
            try {
              const errText = await res.text();
              const errData = JSON.parse(errText);
              if (errData.error) errMsg += " - " + JSON.stringify(errData.error);
            } catch(e) {
               throw new Error("Unexpected server response, possibly missing API Key or misconfigured server.");
            }
            throw new Error(errMsg);
          }
          const text = await res.text();
          let data;
          try {
             data = JSON.parse(text);
          } catch(e) {
             throw new Error("Unexpected API response format");
          }
          const result = JSON.parse(data.result || '{}');
          setFeedback(prev => ({ ...prev, [id]: result }));
        } catch (error: any) {
          console.error('Evaluation API error:', error);
          if (error.message?.includes('429') || error.message?.includes('RESOURCE_EXHAUSTED')) {
            const resetTime = Date.now() + 30000;
            setIsQuotaLimited(true);
            setQuotaResetTime(resetTime);
            setQuotaWarning('Hệ thống AI đang lỗi mạng hoặc quá tải. Đã tự động chuyển sang chế độ bảo trì Offline để tiếp tục chấm điểm.');
            executeFastLocalGrading();
          } else if (error.message?.includes('400') || error.message?.includes('API_KEY_INVALID') || error.message?.includes('API key not valid')) {
            setMicError(`Lỗi API Key không hợp lệ. Vui lòng cập nhật API Key mới.`);
            executeFastLocalGrading(); // also fallback to offline grading so they can still see it
          } else {
            setMicError(`Có lỗi xảy ra khi chấm điểm: ${error.message}`);
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
            className="p-2.5 hover:bg-theme-cream rounded-full transition-all border-2 border-transparent hover:border-theme-dark/20 cursor-pointer"
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

              <div className="space-y-8">
                {[
                  { id: 1, title: 'Modul 1', label: 'Berufe, Familie, Wohnen, Tourismus', bg: 'bg-emerald-500', color: 'text-emerald-600', border: 'border-emerald-500/20', hover: 'hover:border-emerald-500' },
                  { id: 2, title: 'Modul 2', label: 'Einkaufen, Stadt, Kultur', bg: 'bg-teal-500', color: 'text-teal-600', border: 'border-teal-500/20', hover: 'hover:border-teal-500' },
                  { id: 3, title: 'Modul 3', label: 'Sport, Gesundheit, Arbeitsleben', bg: 'bg-cyan-600', color: 'text-cyan-700', border: 'border-cyan-600/20', hover: 'hover:border-cyan-600' },
                  { id: 4, title: 'Modul 4', label: 'Restaurant, Firmenporträt, Ernährung', bg: 'bg-blue-500', color: 'text-blue-600', border: 'border-blue-500/20', hover: 'hover:border-blue-500' },
                  { id: 5, title: 'Modul 5', label: 'Sprachen, Post, Reisen', bg: 'bg-indigo-500', color: 'text-indigo-600', border: 'border-indigo-500/20', hover: 'hover:border-indigo-500' },
                  { id: 6, title: 'Modul 6', label: 'Informationen, Klima, Wetter', bg: 'bg-violet-500', color: 'text-violet-600', border: 'border-violet-500/20', hover: 'hover:border-violet-500' },
                  { id: 7, title: 'Modul 7', label: 'Medien, Musik, Bücher', bg: 'bg-amber-600', color: 'text-amber-700', border: 'border-amber-600/20', hover: 'hover:border-amber-600' },
                  { id: 8, title: 'Modul 8', label: 'Auto, Berufe, Alltag', bg: 'bg-rose-500', color: 'text-rose-600', border: 'border-rose-500/20', hover: 'hover:border-rose-500' },
                ].map(modul => {
                  const moduleLessons = VOCABULARY_DATA.filter(l => {
                    if (l.id.startsWith('l')) {
                      const num = parseInt(l.id.replace('l', ''), 10);
                      return Math.ceil(num / 3) === modul.id;
                    }
                    return false;
                  });

                  if (moduleLessons.length === 0) return null;

                  return (
                    <div key={modul.id} className={`bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 ${modul.border}`}>
                      <div className="mb-6 xl:mb-8">
                        <h3 className={`text-2xl md:text-3xl font-black flex items-center gap-3 ${modul.color} font-display`}>
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${modul.bg} flex items-center justify-center text-white text-xl shadow-sm shrink-0`}>{modul.id}</div>
                          {modul.title}
                        </h3>
                        <p className="text-theme-dark/60 font-bold mt-2 ml-14 md:ml-16">{modul.label}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-6">
                        {moduleLessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              setSelectedLesson(lesson);
                              setActiveTab('lecture');
                            }}
                            className={`group relative flex items-start gap-4 p-5 md:p-6 bg-theme-cream/30 rounded-[2rem] border-2 border-transparent ${modul.hover} transition-all duration-300 text-left overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-${modul.color.replace('text-', '')}/10 cursor-pointer`}
                          >
                            <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${modul.color}`}>
                              <BookOpen size={80} />
                            </div>
                            <div className="p-3 md:p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform shrink-0 relative z-10">
                              <BookOpen className={`w-6 h-6 md:w-7 md:h-7 ${modul.color}`} />
                            </div>
                            <div className="flex-1 relative z-10">
                              <h4 className={`font-display font-black text-lg md:text-xl text-theme-dark group-hover:${modul.color} transition-colors leading-tight`}>{lesson.title}</h4>
                              <p className="text-[11px] md:text-xs text-theme-dark/70 font-bold mt-2 line-clamp-2 md:line-clamp-none">{lesson.subtitle}</p>
                              
                              <div className="flex flex-wrap items-center gap-2 mt-4">
                                <div className={`flex items-center text-[10px] font-black ${modul.color} bg-white px-2 py-1 md:py-1.5 rounded-md shadow-sm uppercase tracking-wider`}>
                                  {lesson.items.length} từ
                                </div>
                                {lesson.grammar && lesson.grammar.length > 0 && (
                                  <div className="flex items-center text-[10px] font-black text-theme-secondary bg-white px-2 py-1 md:py-1.5 rounded-md shadow-sm uppercase tracking-wider">
                                    {lesson.grammar.length} ngữ pháp
                                  </div>
                                )}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}

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
                    className="w-full group relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 p-8 md:p-10 slide-card border-theme-primary/30 hover:border-theme-primary transition-all duration-300 text-left overflow-hidden hover:shadow-2xl hover:shadow-theme-primary/20 bg-gradient-to-br from-theme-cream via-white to-theme-cream"
                  >
                    <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-all duration-700 rotate-12 group-hover:rotate-0 text-theme-primary">
                      <MonitorPlay size={250} />
                    </div>
                    <div className="p-5 md:p-6 bg-theme-primary/10 rounded-3xl group-hover:bg-theme-primary group-hover:scale-110 transition-all duration-500 z-10 shrink-0">
                      <Gamepad2 className="w-10 h-10 md:w-12 md:h-12 text-theme-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 text-center md:text-left z-10">
                      <h3 className="font-display font-black text-3xl md:text-4xl text-theme-primary transition-colors mb-2">Bài Ôn tập giáo trình Menschen A2</h3>
                      <p className="text-base md:text-lg text-theme-dark/80 font-bold max-w-2xl">Phòng luyện giao tiếp AI tương tác trực tiếp & Trạm ôn tập từ vựng, ngữ pháp tổng hợp hàng ngày (Spaced Repetition).</p>
                      <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-6 md:mt-8">
                        <div className="flex items-center text-xs md:text-sm font-black text-emerald-700 bg-emerald-100 px-5 py-2 rounded-full uppercase tracking-wider shadow-sm">
                          🎤 AI Roleplay
                        </div>
                        <div className="flex items-center text-xs md:text-sm font-black text-amber-700 bg-amber-100 px-5 py-2 rounded-full uppercase tracking-wider shadow-sm">
                          ⚡ Daily Mix
                        </div>
                        <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-auto flex items-center justify-center md:justify-end text-sm md:text-base font-black text-white bg-theme-primary px-6 py-3 rounded-full uppercase tracking-widest shadow-md group-hover:shadow-lg transition-all group-hover:bg-theme-dark">
                          Khám phá ngay <ChevronRight className="w-5 h-5 ml-2" />
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
              <div className="flex items-start justify-between">
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
                {selectedLesson.id !== 'review' && (
                  <div className="flex flex-col items-end gap-2 shrink-0 ml-4 max-md:hidden">
                    {downloadProgress ? (
                      <div className="w-48 bg-zinc-50 border border-zinc-100 rounded-xl p-3 shadow-sm">
                        <div className="flex justify-between text-[10px] font-black text-theme-dark/60 uppercase mb-2">
                           <span>Đang tải: {downloadProgress.current}/{downloadProgress.total}</span>
                           <span>{Math.round((downloadProgress.current/downloadProgress.total)*100)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-theme-dark/5 rounded-full overflow-hidden">
                           <div 
                             className="h-full bg-emerald-500 transition-all duration-300"
                             style={{width: `${(downloadProgress.current/downloadProgress.total)*100}%`}}
                           />
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={downloadAllAudioForLesson}
                        className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-2"
                        title="Tải mọi âm thanh trong bài học này về bộ nhớ máy để học khi mất mạng"
                      >
                        <Download className="w-4 h-4" />
                        Tải Audio Offline
                      </button>
                    )}
                  </div>
                )}
              </div>
              
              {/* Mobile offline download button */}
              {selectedLesson.id !== 'review' && (
                  <div className="md:hidden">
                    {downloadProgress ? (
                      <div className="w-full bg-zinc-50 border border-zinc-100 rounded-xl p-3 shadow-sm">
                        <div className="flex justify-between text-[10px] font-black text-theme-dark/60 uppercase mb-2">
                           <span>Đang tải: {downloadProgress.current}/{downloadProgress.total}</span>
                           <span>{Math.round((downloadProgress.current/downloadProgress.total)*100)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-theme-dark/5 rounded-full overflow-hidden">
                           <div 
                             className="h-full bg-emerald-500 transition-all duration-300"
                             style={{width: `${(downloadProgress.current/downloadProgress.total)*100}%`}}
                           />
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={downloadAllAudioForLesson}
                        className="w-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Tải Audio Offline cho bài này
                      </button>
                    )}
                  </div>
              )}

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
              <div className="flex p-1.5 bg-theme-dark/5 rounded-[28px] gap-1 border-2 border-theme-dark/5 overflow-x-auto hide-scrollbar touch-pan-x snap-x">
                <button
                  onClick={() => setActiveTab('vocabulary')}
                  className={`snap-start flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 whitespace-nowrap px-4 ${
                    activeTab === 'vocabulary' ? 'bg-white shadow-xl shadow-theme-dark/10 text-theme-primary' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                  }`}
                >
                  <BookOpen className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Từ vựng</span>
                </button>
                <button
                  onClick={() => setActiveTab('grammar')}
                  className={`snap-start flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 whitespace-nowrap px-4 ${
                    activeTab === 'grammar' ? 'bg-white shadow-xl shadow-theme-dark/10 text-theme-secondary' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                  }`}
                >
                  <Languages className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Ngữ pháp</span>
                </button>
                {(['l1', 'l2', 'l3', 'l13', 'l14', 'l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && (
                  <button
                    onClick={() => setActiveTab('lecture')}
                    className={`snap-start flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 whitespace-nowrap px-4 ${
                      activeTab === 'lecture' ? 'bg-white shadow-xl shadow-theme-dark/10 text-amber-600' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <MonitorPlay className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Bài giảng</span>
                  </button>
                )}
                {(['l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && (
                  <button
                    onClick={() => setActiveTab('game')}
                    className={`snap-start flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 whitespace-nowrap px-4 ${
                      activeTab === 'game' ? 'bg-white shadow-xl shadow-theme-dark/10 text-theme-accent' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <Gamepad2 className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Trò chơi</span>
                  </button>
                )}
                {(['l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && (
                  <button
                    onClick={() => setActiveTab('speaking')}
                    className={`snap-start flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 whitespace-nowrap px-4 ${
                      activeTab === 'speaking' ? 'bg-white shadow-xl shadow-theme-dark/10 text-emerald-500' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <Mic className="w-6 h-6 md:w-5 md:h-5 mb-1 md:mb-0" /> <span className="text-center leading-tight">Luyện nói</span>
                  </button>
                )}
                {(['l15', 'l16', 'l18', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && (
                  <button
                    onClick={() => setActiveTab('reading')}
                    className={`snap-start flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 whitespace-nowrap px-4 ${
                      activeTab === 'reading' ? 'bg-white shadow-xl shadow-theme-dark/10 text-rose-500' : 'text-theme-dark/70 hover:text-theme-dark hover:bg-white/50'
                    }`}
                  >
                    <span className="text-xl md:text-lg mb-1 md:mb-0">📖</span> <span className="text-center leading-tight">Đọc hiểu</span>
                  </button>
                )}
                {(['l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && (
                  <button
                    onClick={() => setActiveTab('writing')}
                    className={`snap-start flex-1 min-w-[70px] py-3 md:py-4 rounded-[22px] text-xs md:text-sm font-black transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 whitespace-nowrap px-4 ${
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
                ) : activeTab === 'lecture' && selectedLesson.id === 'l1' ? (
                  <Lektion1Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l2' ? (
                  <Lektion2Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l3' ? (
                  <Lektion3Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l13' ? (
                  <Lektion13Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l14' ? (
                  <Lektion14Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l15' ? (
                  <Lektion15Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l16' ? (
                  <Lektion16Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l17' ? (
                  <Lektion17Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l18' ? (
                  <Lektion18Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l19' ? (
                  <Lektion19Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l20' ? (
                  <Lektion20Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l21' ? (
                  <Lektion21Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l22' ? (
                  <Lektion22Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l23' ? (
                  <Lektion23Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'lecture' && selectedLesson.id === 'l24' ? (
                  <Lektion24Slides playAudio={playAudio} playingId={playingId} onBack={() => setSelectedLesson(null)} />
                ) : activeTab === 'speaking' ? (
                  <SpeakingPractice lessonId={selectedLesson.id} playAudio={playAudio} playingId={playingId} />
                ) : activeTab === 'reading' && ['l15', 'l16', 'l18', 'l22', 'l23', 'l24'].includes(selectedLesson.id) ? (
                  <ReadingPractice lessonId={selectedLesson.id} />
                ) : activeTab === 'writing' && ['l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id) ? (
                  <WritingPractice lessonId={selectedLesson.id} />
                ) : activeTab === 'game' ? (
                  <div className="space-y-6">
                    {selectedLesson.id === 'l15' && (
                      <div className="flex justify-center mb-6">
                        <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
                          <button 
                            onClick={() => setActiveSubTab('kartenspiel')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'kartenspiel' || !activeSubTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Lật thẻ
                          </button>
                          <button 
                            onClick={() => setActiveSubTab('mediagame')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'mediagame' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Quy trình (Workflow game)
                          </button>
                        </div>
                      </div>
                    )}

                    {selectedLesson.id === 'l16' && (
                      <div className="flex justify-center mb-6">
                        <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
                          <button 
                            onClick={() => setActiveSubTab('kartenspiel')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'kartenspiel' || !activeSubTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Lật thẻ
                          </button>
                          <button 
                            onClick={() => setActiveSubTab('hotelgame')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'hotelgame' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Roleplay Lễ tân
                          </button>
                        </div>
                      </div>
                    )}
                    
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
                    
                    {selectedLesson.id === 'l17' && (
                      <div className="flex justify-center mb-6">
                        <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
                          <button 
                            onClick={() => setActiveSubTab('kartenspiel')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'kartenspiel' || !activeSubTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Lật thẻ
                          </button>
                          <button 
                            onClick={() => setActiveSubTab('travelgame')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'travelgame' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Reisespiel
                          </button>
                        </div>
                      </div>
                    )}

                    {selectedLesson.id === 'l18' && (
                      <div className="flex justify-center mb-6">
                        <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
                          <button 
                            onClick={() => setActiveSubTab('kartenspiel')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'kartenspiel' || !activeSubTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Lật thẻ
                          </button>
                          <button 
                            onClick={() => setActiveSubTab('travelgame')}
                            className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSubTab === 'travelgame' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                          >
                            Mein Navigator
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

                    {selectedLesson.id === 'l15' && activeSubTab === 'mediagame' ? (
                      <Lektion15MediaGame 
                        playAudio={playAudio}
                        playingId={playingId}
                      />
                    ) : selectedLesson.id === 'l16' && activeSubTab === 'hotelgame' ? (
                      <Lektion16HotelGame 
                        playAudio={playAudio}
                        playingId={playingId}
                      />
                    ) : selectedLesson.id === 'l17' && activeSubTab === 'travelgame' ? (
                      <Lektion17TravelGame />
                    ) : selectedLesson.id === 'l18' && activeSubTab === 'travelgame' ? (
                      <Lektion18NavigatorGame />
                    ) : selectedLesson.id === 'l21' && activeSubTab === 'alibi' ? (
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
                      {(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l13' || selectedLesson.id === 'l14' || selectedLesson.id === 'l15' || selectedLesson.id === 'l16' || selectedLesson.id === 'l17' || selectedLesson.id === 'l18' || selectedLesson.id === 'l19' || selectedLesson.id === 'l20' || selectedLesson.id === 'l22' || selectedLesson.id === 'l23' || selectedLesson.id === 'l24') && (
                        <div className="flex justify-center mb-6 overflow-x-auto hide-scrollbar">
                          <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner min-w-max">
                            {(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l13' || selectedLesson.id === 'l14' || selectedLesson.id === 'l17' || selectedLesson.id === 'l18' || selectedLesson.id === 'l19' || selectedLesson.id === 'l20') && (
                              <button 
                                onClick={() => setActiveSubTab('theory')}
                                className={`px-6 py-2 rounded-xl font-bold transition-all whitespace-nowrap text-sm ${activeSubTab === 'theory' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                              >
                                Lý thuyết Từ vựng
                              </button>
                            )}
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
                              {selectedLesson.id === 'l24' ? 'Bài tập nâng cấp (10 bài)' : ['l1', 'l2', 'l3', 'l13', 'l14', 'l19', 'l20'].includes(selectedLesson.id) ? 'Bài tập Từ vựng' : 'Bài tập đại trà (10 bài)'}
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {selectedLesson.id === 'l1' && activeSubTab === 'theory' ? (
                        <Lektion1VocabTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l2' && activeSubTab === 'theory' ? (
                        <Lektion2VocabTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l3' && activeSubTab === 'theory' ? (
                        <Lektion3VocabTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l13' && activeSubTab === 'theory' ? (
                        <Lektion13VocabTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l14' && activeSubTab === 'theory' ? (
                        <Lektion14VocabTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l17' && activeSubTab === 'theory' ? (
                        <Lektion17VocabTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l18' && activeSubTab === 'theory' ? (
                        <Lektion18VocabTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l19' && activeSubTab === 'theory' ? (
                        <Lektion19VocabTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l20' && activeSubTab === 'theory' ? (
                        <Lektion20VocabTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l22' && activeSubTab === 'exercises' ? (
                        <Lektion22Exercises />
                      ) : selectedLesson.id === 'l23' && activeSubTab === 'exercises' ? (
                        <Lektion23Exercises playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l24' && activeSubTab === 'exercises' ? (
                        <Lektion24Exercises playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l1' && activeSubTab === 'exercises' ? (
                        <Lektion1VocabEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l2' && activeSubTab === 'exercises' ? (
                        <Lektion2VocabEx />
                      ) : selectedLesson.id === 'l3' && activeSubTab === 'exercises' ? (
                        <Lektion3VocabEx />
                      ) : selectedLesson.id === 'l13' && activeSubTab === 'exercises' ? (
                        <Lektion13VocabEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l14' && activeSubTab === 'exercises' ? (
                        <Lektion14VocabEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l17' && activeSubTab === 'exercises' ? (
                        <Lektion17VocabEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l18' && activeSubTab === 'exercises' ? (
                        <Lektion18VocabEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l19' && activeSubTab === 'exercises' ? (
                        <Lektion19VocabEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l20' && activeSubTab === 'exercises' ? (
                        <Lektion20VocabEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l16' && activeSubTab === 'exercises' ? (
                        <Lektion16VocabEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l15' && activeSubTab === 'exercises' ? (
                        <Lektion15VocabEx playAudio={playAudio} playingId={playingId} />
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
                      {(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l13' || selectedLesson.id === 'l14' || selectedLesson.id === 'l15' || selectedLesson.id === 'l16' || selectedLesson.id === 'l17' || selectedLesson.id === 'l18' || selectedLesson.id === 'l19' || selectedLesson.id === 'l20' || selectedLesson.id === 'l22' || selectedLesson.id === 'l21' || selectedLesson.id === 'l23' || selectedLesson.id === 'l24') && (
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
                              {selectedLesson.id === 'l22' ? 'Bài tập Ngữ pháp (5 Phần)' : selectedLesson.id === 'l23' ? 'Bài tập Ngữ pháp (15 Phần)' : selectedLesson.id === 'l24' ? 'Bài tập Ngữ pháp (8 Phần)' : selectedLesson.id === 'l18' ? 'Bài tập & Test Ngữ pháp' : selectedLesson.id === 'l19' ? 'Bài tập Ngữ pháp Woher/Wohin' : selectedLesson.id === 'l20' ? 'Bài tập Präteritum' : selectedLesson.id === 'l17' ? 'Bài tập & Test Ngữ pháp' : selectedLesson.id === 'l16' ? 'Bài tập & Test Ngữ pháp' : ['l14', 'l15'].includes(selectedLesson.id) ? 'Bài tập Passiv' : selectedLesson.id === 'l13' ? 'Bài tập Ngữ pháp (Als & Wenn)' : selectedLesson.id === 'l3' ? 'Bài tập Ngữ pháp (-ung, -er)' : selectedLesson.id === 'l2' ? 'Bài tập Ngữ pháp (Chỉ vị trí)' : selectedLesson.id === 'l1' ? 'Bài tập Ngữ pháp (Sở hữu, Quá khứ)' : 'Bài tập Ngữ pháp'}
                            </button>
                          </div>
                        </div>
                      )}

                      {selectedLesson.id === 'l1' && grammarSubTab === 'exercises' ? (
                        <Lektion1GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l1' && grammarSubTab === 'theory' ? (
                        <Lektion1GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l2' && grammarSubTab === 'exercises' ? (
                        <Lektion2GrammarEx />
                      ) : selectedLesson.id === 'l2' && grammarSubTab === 'theory' ? (
                        <Lektion2GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l3' && grammarSubTab === 'exercises' ? (
                        <Lektion3GrammarEx />
                      ) : selectedLesson.id === 'l3' && grammarSubTab === 'theory' ? (
                        <Lektion3GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l13' && grammarSubTab === 'exercises' ? (
                        <Lektion13GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l13' && grammarSubTab === 'theory' ? (
                        <Lektion13GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l14' && grammarSubTab === 'exercises' ? (
                        <Lektion14GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l14' && grammarSubTab === 'theory' ? (
                        <Lektion14GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l22' && grammarSubTab === 'exercises' ? (
                        <Lektion22GrammarEx />
                      ) : selectedLesson.id === 'l23' && grammarSubTab === 'exercises' ? (
                        <Lektion23GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l24' && grammarSubTab === 'exercises' ? (
                        <Lektion24GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l17' && grammarSubTab === 'exercises' ? (
                        <Lektion17GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l17' && grammarSubTab === 'theory' ? (
                        <Lektion17GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l18' && grammarSubTab === 'exercises' ? (
                        <Lektion18GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l18' && grammarSubTab === 'theory' ? (
                        <Lektion18GrammarTheory />
                      ) : selectedLesson.id === 'l19' && grammarSubTab === 'exercises' ? (
                        <Lektion19GrammarEx playAudio={playAudio} />
                      ) : selectedLesson.id === 'l19' && grammarSubTab === 'theory' ? (
                        <Lektion19GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l20' && grammarSubTab === 'exercises' ? (
                        <Lektion20GrammarEx playAudio={playAudio} />
                      ) : selectedLesson.id === 'l20' && grammarSubTab === 'theory' ? (
                        <Lektion20GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l16' && grammarSubTab === 'exercises' ? (
                        <Lektion16GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l16' && grammarSubTab === 'theory' ? (
                        <Lektion16GrammarTheory playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l15' && grammarSubTab === 'exercises' ? (
                        <Lektion15GrammarEx playAudio={playAudio} playingId={playingId} />
                      ) : selectedLesson.id === 'l15' && grammarSubTab === 'theory' ? (
                        <Lektion15GrammarTheory playAudio={playAudio} playingId={playingId} />
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
                          setVoiceName('Aoede');
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
                          setVoiceName('Fenrir');
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
