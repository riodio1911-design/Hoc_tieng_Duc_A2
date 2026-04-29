import fetch from "node-fetch";

async function test() {
  try {
    const res = await fetch("http://localhost:3000/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({text: "hello", lang: "en-US", voiceName: "Puck", voiceEffect: "none"})
    });
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Data:", text);
  } catch(e) {
    console.error(e);
  }
}
test();
