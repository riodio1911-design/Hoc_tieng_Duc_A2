const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const regex = /if \(audioContext\) \{[\s\S]*?const audioBuffer = audioContext\.createBuffer\([\s\S]*?source\.start\(0\);\s*\} else \{/m;

const replacement = `if (audioContext) {
            // Check if we already have an HTMLAudioElement for this key
            // Actually, let's just create a WAV Blob and play it using HTML5 Audio to bypass iOS silent switch!
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
            
            // write PCM data
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
            
          } else {`;
          
code = code.replace(regex, replacement);
fs.writeFileSync('src/App.tsx', code);
console.log('App.tsx audio playback patched');
