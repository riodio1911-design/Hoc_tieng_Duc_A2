const fs = require('fs');
const path = require('path');

const srcDir = path.join('./src/components');

const l1_to_l12_speaking = `
  "l1": {
    "words": [
      { "id": "w1", "de": "Bäcker", "vi": "Thợ làm bánh", "ipa": "/ˈbɛkɐ/", "syllables": ["Bä", "cker"], "notation": [80, 40] },
      { "id": "w2", "de": "Beruf", "vi": "Nghề nghiệp", "ipa": "/bəˈʁuːf/", "syllables": ["Be", "ruf"], "notation": [40, 80] },
      { "id": "w3", "de": "Arbeit", "vi": "Công việc", "ipa": "/ˈaʁbaɪ̯t/", "syllables": ["Ar", "beit"], "notation": [80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Mein Opa war auch schon Bäcker.", "vi": "Ông nội tôi cũng là thợ làm bánh.", "ipa": "/maɪ̯n ˈoːpa vaːɐ̯ aʊ̯x ʃoːn ˈbɛkɐ/", "syllables": ["Mein", "O", "pa", "war", "auch", "schon", "Bä", "cker."], "notation": [40, 80, 40, 40, 40, 40, 80, 40] }
    ]
  },
  "l2": {
    "words": [
      { "id": "w1", "de": "Kommode", "vi": "Tủ có ngăn kéo", "ipa": "/kɔˈmoːdə/", "syllables": ["Kom", "mo", "de"], "notation": [40, 80, 40] },
      { "id": "w2", "de": "Stuhl", "vi": "Cái ghế", "ipa": "/ʃtuːl/", "syllables": ["Stuhl"], "notation": [80] },
      { "id": "w3", "de": "stellen", "vi": "Đặt (đứng)", "ipa": "/ˈʃtɛlən/", "syllables": ["stel", "len"], "notation": [80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Wohin mit der Kommode?", "vi": "Cái tủ nên để đâu?", "ipa": "/voˈhɪn mɪt deːɐ̯ kɔˈmoːdə/", "syllables": ["Wo", "hin", "mit", "der", "Kom", "mo", "de?"], "notation": [40, 80, 40, 40, 40, 80, 40] }
    ]
  },
  "l3": {
    "words": [
      { "id": "w1", "de": "Erholung", "vi": "Sự nghỉ ngơi", "ipa": "/ɛɐ̯ˈhoːlʊŋ/", "syllables": ["Er", "ho", "lung"], "notation": [40, 80, 40] },
      { "id": "w2", "de": "Ruhe", "vi": "Sự yên tĩnh", "ipa": "/ˈʁuːə/", "syllables": ["Ru", "he"], "notation": [80, 40] },
      { "id": "w3", "de": "Strand", "vi": "Bãi biển", "ipa": "/ʃtʁant/", "syllables": ["Strand"], "notation": [80] }
    ],
    "sentences": [
      { "id": "s1", "de": "Hier finden Sie Ruhe und Erholung.", "vi": "Tại đây bạn sẽ tìm thấy sự tĩnh lặng và nghỉ ngơi.", "ipa": "/hiːɐ̯ ˈfɪndən ziː ˈʁuːə ʊnt ɛɐ̯ˈhoːlʊŋ/", "syllables": ["Hier", "fin", "den", "Sie", "Ru", "he", "und", "Er", "ho", "lung."], "notation": [40, 80, 40, 40, 80, 40, 40, 40, 80, 40] }
    ]
  },
  "l4": {
    "words": [
      { "id": "w1", "de": "Apfel", "vi": "Quả táo", "ipa": "/ˈapfl̩/", "syllables": ["Ap", "fel"], "notation": [80, 40] },
      { "id": "w2", "de": "kaufen", "vi": "Mua", "ipa": "/ˈkaʊ̯fn̩/", "syllables": ["kau", "fen"], "notation": [80, 40] },
      { "id": "w3", "de": "Brot", "vi": "Bánh mì", "ipa": "/bʁoːt/", "syllables": ["Brot"], "notation": [80] }
    ],
    "sentences": [
      { "id": "s1", "de": "Was darf es sein?", "vi": "Quý khách muốn mua gì ạ?", "ipa": "/vas daʁf ɛs zaɪ̯n/", "syllables": ["Was", "darf", "es", "sein?"], "notation": [40, 80, 40, 40] }
    ]
  },
  "l5": {
    "words": [
      { "id": "w1", "de": "Dom", "vi": "Nhà thờ lớn", "ipa": "/doːm/", "syllables": ["Dom"], "notation": [80] },
      { "id": "w2", "de": "schön", "vi": "Đẹp", "ipa": "/ʃøːn/", "syllables": ["schön"], "notation": [80] },
      { "id": "w3", "de": "schauen", "vi": "Nhìn, xem", "ipa": "/ˈʃaʊ̯ən/", "syllables": ["schau", "en"], "notation": [80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Schaut mal, der schöne Dom!", "vi": "Nhìn kìa, ngôi nhà thờ đẹp quá!", "ipa": "/ʃaʊ̯t maːl, deːɐ̯ ˈʃøːnə doːm/", "syllables": ["Schaut", "mal,", "der", "schö", "ne", "Dom!"], "notation": [80, 40, 40, 80, 40, 80] }
    ]
  },
  "l6": {
    "words": [
      { "id": "w1", "de": "Veranstaltung", "vi": "Sự kiện", "ipa": "/fɛɐ̯ˈʔanʃtaltʊŋ/", "syllables": ["Ver", "an", "stal", "tung"], "notation": [40, 80, 40, 40] },
      { "id": "w2", "de": "Konzert", "vi": "Buổi hòa nhạc", "ipa": "/kɔnˈt͡sɛʁt/", "syllables": ["Kon", "zert"], "notation": [40, 80] },
      { "id": "w3", "de": "Theater", "vi": "Nhà hát", "ipa": "/teˈaːtɐ/", "syllables": ["The", "a", "ter"], "notation": [40, 80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Das ist meine Lieblingsveranstaltung.", "vi": "Đó là sự kiện yêu thích của tôi.", "ipa": "/das ɪst ˈmaɪ̯nə ˈliːplɪŋsfɛɐ̯ˌʔanʃtaltʊŋ/", "syllables": ["Das", "ist", "mei", "ne", "Lieb", "lings", "ver", "an", "stal", "tung."], "notation": [40, 40, 80, 40, 80, 40, 40, 80, 40, 40] }
    ]
  },
  "l7": {
    "words": [
      { "id": "w1", "de": "joggen", "vi": "Chạy bộ", "ipa": "/ˈd͡ʒɔɡn̩/", "syllables": ["jog", "gen"], "notation": [80, 40] },
      { "id": "w2", "de": "montags", "vi": "Vào các ngày thứ hai", "ipa": "/ˈmoːntaːks/", "syllables": ["mon", "tags"], "notation": [80, 40] },
      { "id": "w3", "de": "Tennis", "vi": "Quần vợt", "ipa": "/ˈtɛnɪs/", "syllables": ["Ten", "nis"], "notation": [80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Wir könnten montags joggen gehen.", "vi": "Chúng ta có thể đi chạy bộ vào các ngày thứ hai.", "ipa": "/viːɐ̯ ˈkœntən ˈmoːntaːks ˈd͡ʒɔɡn̩ ˈɡeːən/", "syllables": ["Wir", "könn", "ten", "mon", "tags", "jog", "gen", "ge", "hen."], "notation": [40, 80, 40, 80, 40, 80, 40, 80, 40] }
    ]
  },
  "l8": {
    "words": [
      { "id": "w1", "de": "Herz", "vi": "Trái tim", "ipa": "/hɛʁt͡s/", "syllables": ["Herz"], "notation": [80] },
      { "id": "w2", "de": "hoffentlich", "vi": "Hy vọng là", "ipa": "/ˈhɔfn̩tlɪç/", "syllables": ["hof", "fent", "lich"], "notation": [80, 40, 40] },
      { "id": "w3", "de": "Schmerzen", "vi": "Cơn đau", "ipa": "/ˈʃmɛʁt͡sn̩/", "syllables": ["Schmer", "zen"], "notation": [80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Hoffentlich ist es nicht das Herz!", "vi": "Hi vọng là không phải do tim!", "ipa": "/ˈhɔfn̩tlɪç ɪst ɛs nɪçt das hɛʁt͡s/", "syllables": ["Hof", "fent", "lich", "ist", "es", "nicht", "das", "Herz!"], "notation": [80, 40, 40, 40, 40, 60, 40, 80] }
    ]
  },
  "l9": {
    "words": [
      { "id": "w1", "de": "Auto", "vi": "Ô tô", "ipa": "/ˈaʊ̯to/", "syllables": ["Au", "to"], "notation": [80, 40] },
      { "id": "w2", "de": "Firma", "vi": "Công ty", "ipa": "/ˈfɪʁma/", "syllables": ["Fir", "ma"], "notation": [80, 40] },
      { "id": "w3", "de": "Kollegen", "vi": "Đồng nghiệp", "ipa": "/kɔˈleːɡn̩/", "syllables": ["Kol", "le", "gen"], "notation": [40, 80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Bei guten Autos sind wir ganz vorn.", "vi": "Trong lĩnh vực xe hơi tốt, chúng tôi đứng hàng đầu.", "ipa": "/baɪ̯ ˈɡuːtən ˈaʊ̯toːs zɪnt viːɐ̯ ɡant͡s fɔʁn/", "syllables": ["Bei", "gu", "ten", "Au", "tos", "sind", "wir", "ganz", "vorn."], "notation": [40, 80, 40, 80, 40, 40, 40, 60, 80] }
    ]
  },
  "l10": {
    "words": [
      { "id": "w1", "de": "reservieren", "vi": "Đặt trước", "ipa": "/ʁezɛʁˈviːʁən/", "syllables": ["re", "ser", "vie", "ren"], "notation": [40, 40, 80, 40] },
      { "id": "w2", "de": "Tisch", "vi": "Cái bàn", "ipa": "/tɪʃ/", "syllables": ["Tisch"], "notation": [80] },
      { "id": "w3", "de": "Menü", "vi": "Thực đơn", "ipa": "/meˈnyː/", "syllables": ["Me", "nü"], "notation": [40, 80] }
    ],
    "sentences": [
      { "id": "s1", "de": "Gut, dass du reserviert hast.", "vi": "Tốt quá, thật may vì bạn đã đặt chỗ trước.", "ipa": "/ɡuːt, das du ʁezɛʁˈviːɐ̯t hast/", "syllables": ["Gut,", "dass", "du", "re", "ser", "viert", "hast."], "notation": [80, 40, 40, 40, 40, 80, 40] }
    ]
  },
  "l11": {
    "words": [
      { "id": "w1", "de": "freuen", "vi": "Vui vẻ", "ipa": "/ˈfʁɔʏ̯ən/", "syllables": ["freu", "en"], "notation": [80, 40] },
      { "id": "w2", "de": "lachen", "vi": "Cười", "ipa": "/ˈlaxn̩/", "syllables": ["la", "chen"], "notation": [80, 40] },
      { "id": "w3", "de": "glücklich", "vi": "Hạnh phúc", "ipa": "/ˈɡlʏklɪç/", "syllables": ["glück", "lich"], "notation": [80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Ich freue mich so.", "vi": "Tôi vui quá.", "ipa": "/ɪç ˈfʁɔʏ̯ə mɪç zoː/", "syllables": ["Ich", "freu", "e", "mich", "so."], "notation": [40, 80, 40, 40, 80] }
    ]
  },
  "l12": {
    "words": [
      { "id": "w1", "de": "Liebe", "vi": "Tình yêu", "ipa": "/ˈliːbə/", "syllables": ["Lie", "be"], "notation": [80, 40] },
      { "id": "w2", "de": "Magen", "vi": "Dạ dày", "ipa": "/ˈmaːɡn̩/", "syllables": ["Ma", "gen"], "notation": [80, 40] },
      { "id": "w3", "de": "Rezept", "vi": "Công thức nấu ăn", "ipa": "/ʁeˈt͡sɛpt/", "syllables": ["Re", "zept"], "notation": [40, 80] }
    ],
    "sentences": [
      { "id": "s1", "de": "Liebe geht durch den Magen.", "vi": "Tình yêu đi qua dạ dày.", "ipa": "/ˈliːbə ɡeːt dʊʁç deːn ˈmaːɡn̩/", "syllables": ["Lie", "be", "geht", "durch", "den", "Ma", "gen."], "notation": [80, 40, 40, 40, 40, 80, 40] }
    ]
  },
`;

const l1_to_l12_writing = `
  'l1': {
    topicTitle: 'Dein Traumjob',
    topicDesc: 'Viết một đoạn văn ngắn về nghề nghiệp mơ ước của bạn. Bạn muốn làm gì? Tại sao? Công việc đó như thế nào?',
    placeholder: 'Ich möchte gerne als ... arbeiten, weil...',
    aiPrompt: 'The writing prompt asks for their dream job and their reasons. Evaluate their vocabulary related to professions and reasons.',
    redemittel: [
      { de: 'Ich möchte ... werden.', vi: 'Tôi muốn trở thành...' },
      { de: 'Mein Traumjob ist...', vi: 'Công việc mơ ước của tôi là...' },
      { de: 'Ich finde diesen Beruf interessant, weil...', vi: 'Tôi thấy công việc này thú vị vì...' }
    ]
  },
  'l2': {
    topicTitle: 'Meine neue Wohnung',
    topicDesc: 'Mô tả căn hộ hoặc phòng mới của bạn. Có những đồ nội thất nào và bạn đặt chúng ở đâu?',
    placeholder: 'In meinem neuen Zimmer gibt es...',
    aiPrompt: 'Evaluate their use of furniture vocabulary and two-way prepositions (Wechselpräpositionen) with dative/accusative.',
    redemittel: [
      { de: 'Das Bett steht an der Wand.', vi: 'Cái giường nằm sát tường.' },
      { de: 'Ich stelle den Schreibtisch vor das Fenster.', vi: 'Tôi đặt bàn học trước cửa sổ.' }
    ]
  },
  'l3': {
    topicTitle: 'Reisebericht',
    topicDesc: 'Kể về kỳ nghỉ gần nhất của bạn. Bạn đã đi đâu, kỳ nghỉ thế nào, bạn đã làm gì?',
    placeholder: 'Letzten Sommer bin ich nach ... gefahren.',
    aiPrompt: 'Evaluate their ability to recount a trip in the past tense (Perfekt) and use vacation vocabulary.',
    redemittel: [
      { de: 'Wir sind nach ... gefahren.', vi: 'Chúng tôi đã đi...' },
      { de: 'Das Wetter war wunderbar.', vi: 'Thời tiết thật tuyệt vời.' },
      { de: 'Ich habe mich gut erholt.', vi: 'Tôi đã nghỉ ngơi thư giãn tốt.' }
    ]
  },
  'l4': {
    topicTitle: 'Einkaufszettel und Partyplanung',
    topicDesc: 'Bạn chuẩn bị tổ chức tiệc. Viết những thứ bạn cần mua và tại sao.',
    placeholder: 'Für die Party am Samstag brauche ich...',
    aiPrompt: 'Evaluate vocabulary related to food and shopping, and expressing quantities.',
    redemittel: [
      { de: 'Ich brauche drei Flaschen Saft.', vi: 'Tôi cần 3 chai nước trái cây.' },
      { de: 'Wir müssen noch Fleisch kaufen.', vi: 'Chúng ta còn phải mua thịt.' }
    ]
  },
  'l5': {
    topicTitle: 'Tipps für Touristen',
    topicDesc: 'Đưa ra lời khuyên cho một người bạn đến thăm thành phố của bạn. Họ nên làm gì và xem gì?',
    placeholder: 'Wenn du in meiner Stadt bist, musst du...',
    aiPrompt: 'Evaluate the use of imperative and modal verbs to give recommendations about sightseeing.',
    redemittel: [
      { de: 'Besuchen Sie den Dom!', vi: 'Hãy thăm nhà thờ lớn!' },
      { de: 'Du solltest unbedingt in den Park gehen.', vi: 'Bạn nhất định nên đi đến công viên.' }
    ]
  },
  'l6': {
    topicTitle: 'Einladung zu einer Veranstaltung',
    topicDesc: 'Viết email mời bạn bè tham gia một sự kiện (hòa nhạc, kịch...)',
    placeholder: 'Hallo ..., am Freitag gibt es ein Konzert von...',
    aiPrompt: 'Evaluate the ability to invite someone to an event, including time and place.',
    redemittel: [
      { de: 'Hast du Lust, mit mir ins Konzert zu gehen?', vi: 'Bạn có hứng đi xem hòa nhạc với tôi không?' },
      { de: 'Wir treffen uns um 18 Uhr.', vi: 'Chúng ta gặp lúc 18h.' }
    ]
  },
  'l7': {
    topicTitle: 'Meine Hobbys',
    topicDesc: 'Viết về sở thích và các môn thể thao bạn chơi. Bạn chơi bao lâu một lần?',
    placeholder: 'In meiner Freizeit spiele ich...',
    aiPrompt: 'Evaluate vocabulary regarding sports, hobbies, and adverbs of frequency.',
    redemittel: [
      { de: 'Zweimal pro Woche spiele ich Tennis.', vi: 'Tôi chơi quần vợt 2 lần 1 tuần.' },
      { de: 'Das macht mir viel Spaß.', vi: 'Nó mang lại cho tôi nhiều niềm vui.' }
    ]
  },
  'l8': {
    topicTitle: 'Krankmeldung / Beim Arzt',
    topicDesc: 'Viết email thông báo bạn bị ốm không thể đi làm/đi học, và bạn cảm thấy thế nào.',
    placeholder: 'Sehr geehrte(r)..., ich bin leider krank...',
    aiPrompt: 'Evaluate ability to write a sick leave email and describe health problems.',
    redemittel: [
      { de: 'Ich bin leider krank und kann heute nicht kommen.', vi: 'Tôi rất tiếc bị ốm nên không đến được.' },
      { de: 'Ich habe Kopfschmerzen und Fieber.', vi: 'Tôi bị đau đầu và sốt.' }
    ]
  },
  'l9': {
    topicTitle: 'Mein Arbeitsalltag',
    topicDesc: 'Công việc hàng ngày của bạn như thế nào? Kể về những nhiệm vụ bạn phải làm.',
    placeholder: 'Ich arbeite als ..., jeden Tag muss ich...',
    aiPrompt: 'Evaluate ability to describe daily routines and work tasks.',
    redemittel: [
      { de: 'Ich fange um 8 Uhr an.', vi: 'Tôi bắt đầu lúc 8h.' },
      { de: 'Meine Aufgabe ist es, E-Mails zu beantworten.', vi: 'Nhiệm vụ của tôi là trả lời email.' }
    ]
  },
  'l10': {
    topicTitle: 'Ein Restaurant bewerten',
    topicDesc: 'Viết một bài đánh giá (Review) cho một nhà hàng bạn mới ăn gần đây.',
    placeholder: 'Letzte Woche war ich im Restaurant...',
    aiPrompt: 'Evaluate evaluation vocabulary: describing food quality, service, and atmosphere.',
    redemittel: [
      { de: 'Das Essen war sehr lecker.', vi: 'Thức ăn rất ngon.' },
      { de: 'Der Kellner war freundlich.', vi: 'Người bồi bàn rất thân thiện.' }
    ]
  },
  'l11': {
    topicTitle: 'Ein freudiges Ereignis',
    topicDesc: 'Kể về một sự kiện gần đây khiến bạn rất vui.',
    placeholder: 'Letztes Wochenende habe ich mich sehr gefreut, weil...',
    aiPrompt: 'Evaluate expressions of emotion and telling a past event clearly.',
    redemittel: [
      { de: 'Ich habe mich so gefreut.', vi: 'Tôi đã rất vui.' },
      { de: 'Es war ein tolles Erlebnis.', vi: 'Thật là một trải nghiệm tuyệt vời.' }
    ]
  },
  'l12': {
    topicTitle: 'Mein Lieblingsrezept',
    topicDesc: 'Viết công thức cho món ăn yêu thích của bạn.',
    placeholder: 'Für mein Lieblingsgericht braucht man...',
    aiPrompt: 'Evaluate the use of food ingredients, measurements, and cooking instructions.',
    redemittel: [
      { de: 'Zuerst muss man die Zwiebeln schneiden.', vi: 'Đầu tiên phải thái hành.' },
      { de: 'Danach brät man das Fleisch an.', vi: 'Sau đó rang/chiên thịt.' }
    ]
  },
`;

const l1_to_l12_reading = `
  'l1': {
     title: 'Die Bäckerei von Opa',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Mein Opa heißt Hans. Er war 40 Jahre lang Bäcker in München. Er ist jeden Tag um 3 Uhr morgens aufgestanden, um frisches Brot und Brötchen zu backen.",
       "Heute ist Opa 70 Jahre alt und arbeitet nicht mehr. Aber er backt sonntags immer noch gerne Kuchen für die ganze Familie."
     ],
     questions: [
       { id: 1, question: "Was war der Beruf von Opa Hans?", options: ["Lehrer", "Bäcker", "Mechaniker", "Arzt"], correct: 1, explanation: "Im Text steht, dass er Bäcker war." },
       { id: 2, question: "Wann ist er jeden Tag aufgestanden?", options: ["Um 5 Uhr", "Um 7 Uhr", "Um 3 Uhr", "Um 4 Uhr"], correct: 2, explanation: "Im Text steht: Er ist jeden Tag um 3 Uhr morgens aufgestanden." }
     ]
  },
  'l2': {
     title: 'Die neue Wohnung',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Wir sind gestern in unsere neue Wohnung gezogen. Im Wohnzimmer steht jetzt ein großes graues Sofa und ein Fernseher.",
       "Aber wir wissen noch nicht: Wohin mit der Kommode? Sie ist sehr groß. Vielleicht stellen wir sie ins Schlafzimmer neben das Bett?"
     ],
     questions: [
       { id: 1, question: "Wo steht das Sofa?", options: ["Im Schlafzimmer", "In der Küche", "Im Wohnzimmer", "Im Flur"], correct: 2, explanation: "Im Wohnzimmer steht jetzt ein großes graues Sofa." },
       { id: 2, question: "Wo soll die Kommode vielleicht stehen?", options: ["Vor dem Fenster", "Neben dem Bett", "Auf dem Balkon", "Im Bad"], correct: 1, explanation: "Vielleicht stellen wir sie ins Schlafzimmer neben das Bett." }
     ]
  },
  'l3': {
     title: 'Urlaub an der Ostsee',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Unsere Familie macht dieses Jahr Urlaub an der Ostsee. Wir haben ein kleines Ferienhaus gemietet.",
       "Der Ort ist sehr ruhig. Hier finden wir viel Ruhe und Erholung. Jeden Tag gehen wir am Strand spazieren."
     ],
     questions: [
       { id: 1, question: "Wo macht die Familie Urlaub?", options: ["In den Bergen", "In der Stadt", "An der Ostsee", "Am See"], correct: 2, explanation: "Urlaub an der Ostsee." },
       { id: 2, question: "Was machen sie jeden Tag?", options: ["Sie gehen schwimmen", "Sie gehen spazieren", "Sie schlafen lange", "Sie lesen"], correct: 1, explanation: "Jeden Tag gehen wir am Strand spazieren." }
     ]
  },
  'l4': {
     title: 'Auf dem Markt',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Jeden Samstag gehe ich auf den Markt. Ich mag frische Lebensmittel. 'Was darf es sein?', fragt die Verkäuferin.",
       "Ich kaufe zwei Kilo Äpfel, frisches Gemüse und ein halbes Kilo Käse."
     ],
     questions: [
       { id: 1, question: "Wann geht die Person auf den Markt?", options: ["Am Montag", "Am Freitag", "Am Wochenende (Samstag)", "Jeden Tag"], correct: 2, explanation: "Jeden Samstag gehe ich auf den Markt." },
       { id: 2, question: "Was fragt die Verkäuferin?", options: ["Was kostet das?", "Was darf es sein?", "Wie geht es Ihnen?", "Wo ist das Geld?"], correct: 1, explanation: "Was darf es sein?, fragt die Verkäuferin." }
     ]
  },
  'l5': {
     title: 'Tour durch Köln',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Wir machen heute eine Stadttour in Köln. Unser Reiseführer sagt: 'Schaut mal, der schöne Dom!'",
       "Der Kölner Dom ist wirklich sehr hoch und sieht beeindruckend aus. Danach gehen wir ins Museum."
     ],
     questions: [
       { id: 1, question: "Welche Stadt besuchen sie?", options: ["Berlin", "Hamburg", "Köln", "München"], correct: 2, explanation: "Wir machen heute eine Stadttour in Köln." },
       { id: 2, question: "Was machen sie nach dem Besuch des Doms?", options: ["Sie gehen ins Kino", "Sie gehen essen", "Sie gehen ins Museum", "Sie gehen nach Hause"], correct: 2, explanation: "Danach gehen wir ins Museum." }
     ]
  },
  'l6': {
     title: 'Musikfestival im Sommer',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Das Sommerfestival ist meine Lieblingsveranstaltung. Es findet jedes Jahr im Juli statt.",
       "Es gibt viele Bands, gutes Essen und eine tolle Atmosphäre. Ich gehe immer mit meinen Freunden dorthin."
     ],
     questions: [
       { id: 1, question: "In welchem Monat findet das Festival statt?", options: ["Im Juni", "Im Juli", "Im August", "Im Mai"], correct: 1, explanation: "Es findet jedes Jahr im Juli statt." },
       { id: 2, question: "Mit wem geht die Person zum Festival?", options: ["Mit der Familie", "Alleine", "Mit Freunden", "Mit dem Hund"], correct: 2, explanation: "Ich gehe immer mit meinen Freunden dorthin." }
     ]
  },
  'l7': {
     title: 'Fitness am Abend',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Thomas arbeitet viel am Computer. Er braucht Bewegung. Sein Kollege sagt: 'Wir könnten montags joggen gehen.'",
       "Thomas findet die Idee gut. Sie wollen nächste Woche am Montag im Park starten."
     ],
     questions: [
       { id: 1, question: "Warum braucht Thomas Bewegung?", options: ["Er isst zu viel", "Er schläft schlecht", "Er arbeitet viel am Computer", "Er ist krank"], correct: 2, explanation: "Thomas arbeitet viel am Computer. Er braucht Bewegung." },
       { id: 2, question: "An welchem Tag wollen sie joggen gehen?", options: ["Am Sonntag", "Am Dienstag", "Am Montag", "Am Freitag"], correct: 2, explanation: "Wir könnten montags joggen gehen." }
     ]
  },
  'l8': {
     title: 'Beim Arzt',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Herr Müller hat starke Schmerzen in der Brust. Er ist beim Arzt und macht sich Sorgen.",
       "'Hoffentlich ist es nicht das Herz!', denkt er. Der Arzt untersucht ihn und sagt: 'Es ist nur eine Erkältung.'"
     ],
     questions: [
       { id: 1, question: "Wo hat Herr Müller Schmerzen?", options: ["Im Bauch", "Im Kopf", "In der Brust", "Im Bein"], correct: 2, explanation: "Herr Müller hat starke Schmerzen in der Brust." },
       { id: 2, question: "Was sagt der Arzt?", options: ["Er muss ins Krankenhaus", "Es ist das Herz", "Es ist nur eine Erkältung", "Er braucht Operation"], correct: 2, explanation: "Der Arzt sagt: 'Es ist nur eine Erkältung.'" }
     ]
  },
  'l9': {
     title: 'Die deutsche Automobilindustrie',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Deutschland ist weltweit für seine Autos bekannt. Firmen wie VW, BMW und Mercedes beschäftigen tausende Menschen.",
       "'Bei guten Autos sind wir ganz vorn', sagt ein Ingenieur, der seit 20 Jahren in der Industrie arbeitet."
     ],
     questions: [
       { id: 1, question: "Wofür ist Deutschland weltweit bekannt?", options: ["Für Bier", "Für Autos", "Für Mode", "Für Schokolade"], correct: 1, explanation: "Deutschland ist weltweit für seine Autos bekannt." },
       { id: 2, question: "Wie lange arbeitet der Ingenieur in der Industrie?", options: ["10 Jahre", "5 Jahre", "20 Jahre", "30 Jahre"], correct: 2, explanation: "Ein Ingenieur, der seit 20 Jahren in der Industrie arbeitet." }
     ]
  },
  'l10': {
     title: 'Abendessen zu zweit',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Das Restaurant ist heute sehr voll. Fast alle Tische sind besetzt.",
       "Lisa sagt zu Markus: 'Gut, dass du reserviert hast!' Sie bestellen beide ein Steak und ein Glas Wein."
     ],
     questions: [
       { id: 1, question: "Warum war es gut, dass Markus reserviert hat?", options: ["Weil das Essen teuer ist", "Weil das Restaurant sehr voll ist", "Weil sie Hunger haben", "Weil Lisa spät kam"], correct: 1, explanation: "Das Restaurant ist heute sehr voll. Fast alle Tische sind besetzt." },
       { id: 2, question: "Was trinken Lisa und Markus?", options: ["Bier", "Wasser", "Wein", "Cola"], correct: 2, explanation: "Sie bestellen beide ein Steak und ein Glas Wein." }
     ]
  },
  'l11': {
     title: 'Eine gute Nachricht',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Sarah hat heute einen Brief bekommen. Sie hat ihre Deutschprüfung bestanden!",
       "Sie ruft sofort ihre Mutter an und sagt: 'Ich freue mich so! Endlich habe ich das Zertifikat B1.'"
     ],
     questions: [
       { id: 1, question: "Welche Prüfung hat Sarah bestanden?", options: ["Die Führerscheinprüfung", "Die Matheprüfung", "Die Deutschprüfung", "Die Englischprüfung"], correct: 2, explanation: "Sie hat ihre Deutschprüfung bestanden." },
       { id: 2, question: "Welches Zertifikat bekommt sie?", options: ["A1", "A2", "B1", "B2"], correct: 2, explanation: "Endlich habe ich das Zertifikat B1." }
     ]
  },
  'l12': {
     title: 'Gemeinsam kochen',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Felix und Anna kochen heute Abend zusammen. Sie machen Spaghetti Bolognese.",
       "Felix findet Kochen sehr romantisch und sagt: 'Liebe geht durch den Magen!'"
     ],
     questions: [
       { id: 1, question: "Was kochen Felix und Anna?", options: ["Pizza", "Salat", "Spaghetti Bolognese", "Suppe"], correct: 2, explanation: "Sie machen Spaghetti Bolognese." },
       { id: 2, question: "Was findet Felix romantisch?", options: ["Musik", "Tanzen", "Kochen", "Essen gehen"], correct: 2, explanation: "Felix findet Kochen sehr romantisch." }
     ]
  },
`;

try {
  let speakingPath = path.join(srcDir, 'SpeakingPractice.tsx');
  let speakingFile = fs.readFileSync(speakingPath, 'utf8');
  speakingFile = speakingFile.replace('export const SPEAKING_DATA: Record<string, { words: PracticeItem[], sentences: PracticeItem[], conversations?: PracticeItem[] }> = {', 'export const SPEAKING_DATA: Record<string, { words: PracticeItem[], sentences: PracticeItem[], conversations?: PracticeItem[] }> = {\\n' + l1_to_l12_speaking);
  fs.writeFileSync(speakingPath, speakingFile);
  console.log('Patched SpeakingPractice');

  let writingPath = path.join(srcDir, 'WritingPractice.tsx');
  let writingFile = fs.readFileSync(writingPath, 'utf8');
  writingFile = writingFile.replace('const LESSON_CONTENT: Record<string, {', 'const LESSON_CONTENT: Record<string, {');
  writingFile = writingFile.replace("  'l15': {", l1_to_l12_writing + "\\n  'l15': {");
  fs.writeFileSync(writingPath, writingFile);
  console.log('Patched WritingPractice');

  let readingPath = path.join(srcDir, 'ReadingPractice.tsx');
  let readingFile = fs.readFileSync(readingPath, 'utf8');
  readingFile = readingFile.replace("const LESSON_CONTENT: Record<string, any> = {", "const LESSON_CONTENT: Record<string, any> = {\\n" + l1_to_l12_reading);
  fs.writeFileSync(readingPath, readingFile);
  console.log('Patched ReadingPractice');

} catch(e) {
  console.error(e);
}
