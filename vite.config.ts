import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // Ánh xạ GEMINI_API_KEY thành VITE_GEMINI_API_KEY để tương thích tự động
  // giữa AI Studio và deployment (Vercel, Github)
  if (env.GEMINI_API_KEY && !process.env.VITE_GEMINI_API_KEY) {
    process.env.VITE_GEMINI_API_KEY = env.GEMINI_API_KEY;
  }

  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Học tiếng Đức (PWA)',
          short_name: 'Tiếng Đức App',
          description: 'Học tiếng Đức với AI',
          theme_color: '#4f46e5',
          background_color: '#f4f4f5',
          display: 'standalone',
          icons: [
            {
              src: 'https://cdn-icons-png.flaticon.com/512/197/197571.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1500 // Tăng giới hạn cảnh báo chunkSize
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
