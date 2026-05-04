const fs = require('fs');

const code = fs.readFileSync('src/App.tsx', 'utf-8');

// The new correct playAudio implementation
const newPlayAudio = `  const playAudio = useCallback(
    async (
      text: string,
      id: string,
      lang: "de-DE" | "vi-VN" = "de-DE",
      overrideVoiceName?: string,
    ) => {
      const cleanText = lang === "de-DE" ? text.split("(")[0].trim() : text;

      if (playingId === id || isFetchingAudio.current) return;

      // --> SYNCHRONOUS UNLOCK FOR MOBILE SAFARI/EDGE/BRAVE <--
      // Mobile browsers require AudioContext & SpeechSynthesis to be unlocked synchronously inside a user gesture event handler
      if (!audioContextRef.current) {
        try {
          audioContextRef.current = new (
            window.AudioContext || (window as any).webkitAudioContext
          )({ sampleRate: 24000 });
        } catch (e) {
          console.error("AudioContext creation failed", e);
        }
      }
      const audioContext = audioContextRef.current;
      if (audioContext && audioContext.state === "suspended") {
        audioContext.resume().catch(() => {});
      }
      // Play a silent buffer to guarantee AudioContext is active
      try {
        if (audioContext) {
          const silentBuffer = audioContext.createBuffer(1, 1, 24000);
          const silentSource = audioContext.createBufferSource();
          silentSource.buffer = silentBuffer;
          silentSource.connect(audioContext.destination);
          silentSource.start(0);
        }
      } catch (e) {}

      // SYNCHRONOUS UNLOCK FOR SPEECH SYNTHESIS ON MOBILE SAFARI
      try {
        if ("speechSynthesis" in window) {
          const silentUtterance = new SpeechSynthesisUtterance("");
          silentUtterance.volume = 0;
          silentUtterance.rate = 2; // finish fast
          window.speechSynthesis.speak(silentUtterance);
        }
      } catch (e) {}

      // Unlock SpeechSynthesis synchronously
      try {
        if (window.speechSynthesis && window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (e) {}

      const currentVoiceName = overrideVoiceName || voiceName;
      const cacheKey = \`global-\${voiceEffect}-\${cleanText}-\${lang}-v5\`;

      const useSystemTTS = () => {
        try {
          const utterance = new SpeechSynthesisUtterance(cleanText);
          utterance.lang = lang;

          const voices = window.speechSynthesis.getVoices();
          const targetVoice =
            voices.find((v) => v.lang.startsWith(lang.split("-")[0])) ||
            voices[0];
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
          console.error("System TTS failed:", fallbackError);
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
            const cache = await caches.open("german-tts-cache-v1");
            const offlineKey = \`/tts/\${currentVoiceName}/\${encodeURIComponent(cacheKey)}\`;
            const cachedResponse = await cache.match(offlineKey);
            if (cachedResponse) {
              const buffer = await cachedResponse.arrayBuffer();
              pcmData = new Int16Array(buffer);
              audioCache.current[currentVoiceName][cacheKey] = pcmData; // put back in RAM
            }
          } catch (e) {
            console.log("Cache read error or not supported", e);
          }
        }

        // If not offline and network is totally disconnected, immediately fallback
        if (!pcmData && !navigator.onLine) {
          setQuotaWarning(
            "Mất kết nối mạng. Đang dùng giọng đọc máy dự phòng...",
          );
          setTimeout(() => setQuotaWarning(null), 4000);
          useSystemTTS();
          return;
        }

        if (!pcmData && !isQuotaLimited) {
          isFetchingAudio.current = true;

          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

            const res = await fetch("/api/tts", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                text: cleanText,
                lang,
                voiceName: currentVoiceName,
                voiceEffect,
              }),
              signal: controller.signal,
            });
            clearTimeout(timeoutId);

            if (!res.ok) {
              let errMsg =
                "Failed to fetch audio from server (" + res.status + ")";
              try {
                const errData = await res.json();
                if (errData.error) errMsg += " - " + errData.error;
              } catch (e) {}
              throw new Error(errMsg);
            }

            const data = await res.json();
            if (data.fileUrl && !data.pcmBase64) {
              // Fetch the cached PCM file directly (from static or CDN)
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
            if (
              errorString.includes("429") ||
              errorString.includes("RESOURCE_EXHAUSTED") ||
              errorString.includes("400") ||
              errorString.includes("API key not valid") ||
              errorString.includes("API_KEY_INVALID") ||
              errorString.includes("Unexpected token")
            ) {
              throw e; // pass to outer catch for quota or key handling
            }
            // For aborts or fetch failures, warn the user we're falling back
            setQuotaWarning(
              "AI đang quá tải hoặc phản hồi chậm. Tạm thời dùng giọng đọc máy dự phòng (chất lượng sẽ kém tự nhiên hơn)...",
            );
            setTimeout(() => setQuotaWarning(null), 7000);
          }

          if (pcmData) {
            audioCache.current[currentVoiceName][cacheKey] = pcmData;

            // Store to Cache API for Offline use
            try {
              const cache = await caches.open("german-tts-cache-v1");
              const offlineKey = \`/tts/\${currentVoiceName}/\${encodeURIComponent(cacheKey)}\`;
              await cache.put(
                offlineKey,
                new Response(pcmData.buffer, {
                  headers: { "Content-Type": "audio/pcm" },
                }),
              );
            } catch (e) {
              console.log("Failed to save audio to cache", e);
            }
          }
          isFetchingAudio.current = false;
        } else if (!pcmData && isQuotaLimited) {
          setQuotaWarning(
            "AI đã hết hạn mức. Đang phát bằng giọng đọc máy dự phòng (sẽ kém tự nhiên hơn)...",
          );
          useSystemTTS();
          return;
        }

        if (pcmData) {
          const numChannels = 1;
          const sampleRate = 24000;
          const bitsPerSample = 16;
          const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
          const blockAlign = numChannels * (bitsPerSample / 8);
          const dataSize = pcmData.length * 2;
          
          const buffer = new ArrayBuffer(44 + dataSize);
          const view = new DataView(buffer);
          
          const writeString = (v, offset, string) => {
            for (let i = 0; i < string.length; i++) {
              v.setUint8(offset + i, string.charCodeAt(i));
            }
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
          
          const dataView = new Int16Array(buffer, 44);
          dataView.set(pcmData);
          
          const blob = new Blob([buffer], { type: 'audio/wav' });
          const url = URL.createObjectURL(blob);
          
          const audioElem = new Audio(url);
          audioElem.onended = () => {
             setPlayingId(null);
             URL.revokeObjectURL(url);
          };
          audioElem.onerror = () => {
             setPlayingId(null);
             URL.revokeObjectURL(url);
             useSystemTTS();
          };
          audioElem.play().catch((e) => {
             console.warn("Audio tag play failed, trying system TTS", e);
             useSystemTTS();
          });
        } else {
          useSystemTTS();
        }
      } catch (err: any) {
        isFetchingAudio.current = false;
        const errorString = typeof err === "string" ? err : JSON.stringify(err);

        if (
          errorString.includes("429") ||
          errorString.includes("RESOURCE_EXHAUSTED")
        ) {
          console.warn(
            "Gemini TTS quota exhausted, falling back to System TTS",
          );
          const resetTime = Date.now() + 60000; // Wait 1 minute
          setIsQuotaLimited(true);
          setQuotaResetTime(resetTime);
          setQuotaWarning(
            "Hệ thống AI đang tạm nghỉ (hết hạn mức). Đang dùng giọng đọc máy thay thế...",
          );
          useSystemTTS();
        } else if (
          errorString.includes("400") ||
          errorString.includes("API_KEY_INVALID") ||
          errorString.includes("API key not valid") ||
          errorString.includes("Unexpected token")
        ) {
          console.error("API Key error or Server issue");
          setQuotaWarning(
            "Lỗi kết nối máy chủ hoặc API Key không hợp lệ. Đang dùng giọng máy.",
          );
          useSystemTTS();
        } else {
          console.error("PlayAudio Error:", err);
          setQuotaWarning("Có lỗi xảy ra khi phát âm thanh. Đang dùng giọng máy.");
          useSystemTTS();
        }
      }
    },
    [voiceName, isQuotaLimited, playingId, voiceEffect],
  );
`;

const lines = code.split('\\n');
// find the index of "const playAudio = useCallback("
const startIdx = lines.findIndex(l => l.includes('const playAudio = useCallback('));
const endIdx = lines.findIndex(l => l.includes('const [micState, setMicState]'));

if (startIdx !== -1 && endIdx !== -1) {
    const newLines = [
        ...lines.slice(0, startIdx),
        newPlayAudio,
        ...lines.slice(endIdx)
    ];
    fs.writeFileSync('src/App.tsx', newLines.join('\\n'));
    console.log('Successfully replaced playAudio');
} else {
    console.log('Could not find bounds', startIdx, endIdx);
}
