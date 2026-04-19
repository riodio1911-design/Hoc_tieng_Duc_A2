import * as fs from 'fs';

const data = [
  // HỘI THOẠI 1 – Einbruch
  { c: "Hội thoại 1: Einbruch", s: "A", de: "Hast du gehört, dass es einen Einbruch gab?", vi: "Bạn có nghe rằng có vụ trộm không?" },
  { c: "Hội thoại 1: Einbruch", s: "B", de: "Ja, ein Täter hat Bargeld und eine EC-Karte gestohlen.", vi: "Có, một thủ phạm đã lấy tiền mặt và thẻ." },
  { c: "Hội thoại 1: Einbruch", s: "A", de: "Hat ein Zeuge etwas gesehen?", vi: "Có nhân chứng không?" },
  { c: "Hội thoại 1: Einbruch", s: "B", de: "Ja, aber er konnte nicht alles erkennen.", vi: "Có, nhưng anh ấy không nhìn rõ hết." },

  // HỘI THOẠI 2 – Polizei & Bericht
  { c: "Hội thoại 2: Polizei & Bericht", s: "A", de: "Hast du mit dem Polizisten gesprochen?", vi: "Bạn đã nói chuyện với cảnh sát chưa?" },
  { c: "Hội thoại 2: Polizei & Bericht", s: "B", de: "Ja, der Polizist und eine Polizistin haben mir Fragen gestellt.", vi: "Có, một cảnh sát nam và nữ đã hỏi tôi." },
  { c: "Hội thoại 2: Polizei & Bericht", s: "A", de: "Was wollten sie wissen?", vi: "Họ muốn biết gì?" },
  { c: "Hội thoại 2: Polizei & Bericht", s: "B", de: "Sie wollten wissen, was ich gesehen habe und wann ich nach Hause gekommen bin.", vi: "Họ muốn biết tôi đã thấy gì và khi nào tôi về nhà." },

  // HỘI THOẠI 3 – Versicherung
  { c: "Hội thoại 3: Versicherung", s: "A", de: "Hast du deine Versicherung angerufen?", vi: "Bạn đã gọi bảo hiểm chưa?" },
  { c: "Hội thoại 3: Versicherung", s: "B", de: "Ja, nachdem ich den Einbruch gesehen habe, habe ich sofort angerufen.", vi: "Có, sau khi thấy vụ trộm tôi gọi ngay." },
  { c: "Hội thoại 3: Versicherung", s: "A", de: "Was haben sie gesagt?", vi: "Họ nói gì?" },
  { c: "Hội thoại 3: Versicherung", s: "B", de: "Sie haben gesagt, dass sie den Schaden bezahlen werden.", vi: "Họ nói sẽ trả thiệt hại." },

  // HỘI THOẠI 4 – Tür & Schloss
  { c: "Hội thoại 4: Tür & Schloss", s: "A", de: "Warum konntest du nicht ins Haus gehen?", vi: "Tại sao bạn không vào nhà được?" },
  { c: "Hội thoại 4: Tür & Schloss", s: "B", de: "Weil das Schloss kaputt war.", vi: "Vì ổ khóa bị hỏng." },
  { c: "Hội thoại 4: Tür & Schloss", s: "A", de: "Was hast du gemacht?", vi: "Bạn đã làm gì?" },
  { c: "Hội thoại 4: Tür & Schloss", s: "B", de: "Ich habe einen Hammer benutzt, um die Tür zu öffnen.", vi: "Tôi dùng búa để mở cửa." },

  // HỘI THOẠI 5 – Strom & Glühbirne
  { c: "Hội thoại 5: Strom & Glühbirne", s: "A", de: "Warum war es so dunkel?", vi: "Sao tối vậy?" },
  { c: "Hội thoại 5: Strom & Glühbirne", s: "B", de: "Weil der Strom weg war.", vi: "Vì mất điện." },
  { c: "Hội thoại 5: Strom & Glühbirne", s: "A", de: "Und die Glühbirne?", vi: "Còn bóng đèn?" },
  { c: "Hội thoại 5: Strom & Glühbirne", s: "B", de: "Die war auch kaputt.", vi: "Nó cũng hỏng." },

  // HỘI THOẠI 6 – Unfall
  { c: "Hội thoại 6: Unfall", s: "A", de: "Was ist passiert?", vi: "Chuyện gì xảy ra?" },
  { c: "Hội thoại 6: Unfall", s: "B", de: "Ich hatte einen Unfall, als ich zur Arbeit gefahren bin.", vi: "Tôi bị tai nạn khi đi làm." },
  { c: "Hội thoại 6: Unfall", s: "A", de: "Ist jemand verletzt?", vi: "Có ai bị thương không?" },
  { c: "Hội thoại 6: Unfall", s: "B", de: "Nein, aber das Auto ist kaputt.", vi: "Không, nhưng xe hỏng." },

  // HỘI THOẠI 7 – Liste & Plan
  { c: "Hội thoại 7: Liste & Plan", s: "A", de: "Warum hast du eine Liste gemacht?", vi: "Tại sao bạn lập danh sách?" },
  { c: "Hội thoại 7: Liste & Plan", s: "B", de: "Damit ich nichts vergesse.", vi: "Để không quên gì." },

  // HỘI THOẠI 8 – Reinigung
  { c: "Hội thoại 8: Reinigung", s: "A", de: "Hast du das Zimmer gereinigt?", vi: "Bạn đã dọn phòng chưa?" },
  { c: "Hội thoại 8: Reinigung", s: "B", de: "Ja, bevor die Gäste gekommen sind.", vi: "Rồi, trước khi khách đến." },

  // HỘI THOẠI 9 – Kleidung & nähen
  { c: "Hội thoại 9: Kleidung & nähen", s: "A", de: "Woher hast du deine Jacke?", vi: "Bạn lấy áo khoác ở đâu?" },
  { c: "Hội thoại 9: Kleidung & nähen", s: "B", de: "Meine Mutter hat sie genäht.", vi: "Mẹ tôi may." },

  // HỘI THOẠI 10 – Eigene Erfahrung
  { c: "Hội thoại 10: Eigene Erfahrung", s: "A", de: "Ist dir schon einmal so etwas passiert?", vi: "Bạn đã từng gặp chuyện như vậy chưa?" },
  { c: "Hội thoại 10: Eigene Erfahrung", s: "B", de: "Ja, jemand hat mein Fahrrad gestohlen, als ich im Supermarkt war.", vi: "Có, ai đó đã lấy xe tôi khi tôi đi siêu thị." },
  { c: "Hội thoại 10: Eigene Erfahrung", s: "A", de: "Was hast du gemacht?", vi: "Bạn đã làm gì?" },
  { c: "Hội thoại 10: Eigene Erfahrung", s: "B", de: "Ich habe die Polizei angerufen und alles erklärt.", vi: "Tôi gọi cảnh sát và giải thích." }
];

const conversationsStr = data.map((d, i) => `      {
        "id": "c${i+1}",
        "context": "${d.c}",
        "speaker": "${d.s}",
        "de": "${d.de.replace(/"/g, '\\"')}",
        "vi": "${d.vi.replace(/"/g, '\\"')}"
      }`).join(',\n');


const targetPath = '/src/components/SpeakingPractice.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

const sentencesEndRegex = /"ns37"[^]*?\}\s*\]\s*(?=\},\s*"l22":)/;

const match = content.match(sentencesEndRegex);
if(match) {
  const newText = match[0] + ',\n    "conversations": [\n' + conversationsStr + '\n    ]';
  content = content.replace(sentencesEndRegex, newText);
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log('Inserted conversations successfully.');
} else {
  console.log('Regex match failed.');
}
