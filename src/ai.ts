import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

export function getAI(): GoogleGenAI {
  if (!aiClient) {
    const key = import.meta.env.VITE_GEMINI_API_KEY;
    if (!key) {
      console.warn("Khởi tạo AI thất bại: Không tìm thấy VITE_GEMINI_API_KEY. Các chức năng có AI sẽ không hoạt động.");
      aiClient = new GoogleGenAI({ apiKey: "dummy_key_to_prevent_startup_crash" });
    } else {
      aiClient = new GoogleGenAI({ apiKey: key });
    }
  }
  return aiClient;
}
