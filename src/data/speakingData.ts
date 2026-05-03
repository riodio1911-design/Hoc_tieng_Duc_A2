export interface PracticeItem {
  id: string;
  de: string;
  vi: string;
  ipa?: string;
  syllables?: string[];
  notation?: number[];
  speaker?: string;
  context?: string;
}

export const SPEAKING_DATA: Record<string, { words: PracticeItem[], sentences: PracticeItem[], conversations?: PracticeItem[] }> = {
  "l2": {
    "words": [
      {
        "id": "w1",
        "de": "die Freizeit",
        "vi": "thời gian rảnh",
        "ipa": "/diː ˈfraɪtsaɪt/",
        "syllables": [
          "die",
          "Frei",
          "zeit"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "das Hobby",
        "vi": "sở thích",
        "ipa": "/das ˈhɔbi/",
        "syllables": [
          "das",
          "Ho",
          "bby"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "schwimmen",
        "vi": "bơi lội",
        "ipa": "/ˈʃvɪmən/",
        "syllables": [
          "schwim",
          "men"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "lesen",
        "vi": "đọc",
        "ipa": "/ˈleːzn̩/",
        "syllables": [
          "le",
          "sen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "kochen",
        "vi": "nấu ăn",
        "ipa": "/ˈkɔxn̩/",
        "syllables": [
          "ko",
          "chen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "der Sport",
        "vi": "thể thao",
        "ipa": "/deːɐ̯ ˈʃpɔʁt/",
        "syllables": [
          "der",
          "Sport"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w7",
        "de": "spielen",
        "vi": "chơi",
        "ipa": "/ˈʃpiːlən/",
        "syllables": [
          "spie",
          "len"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "treffen",
        "vi": "gặp gỡ",
        "ipa": "/ˈtʁɛfn̩/",
        "syllables": [
          "tref",
          "fen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "der Termin",
        "vi": "cuộc hẹn",
        "ipa": "/deːɐ̯ tɛʁˈmiːn/",
        "syllables": [
          "der",
          "Ter",
          "min"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w10",
        "de": "das Wochenende",
        "vi": "cuối tuần",
        "ipa": "/das ˈvɔxn̩ˌʔɛndə/",
        "syllables": [
          "das",
          "Wo",
          "chen",
          "en",
          "de"
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "w11",
        "de": "am Samstag",
        "vi": "vào thứ Bảy",
        "ipa": "/am ˈzamstaːk/",
        "syllables": [
          "am",
          "Sams",
          "tag"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "abends",
        "vi": "vào buổi tối",
        "ipa": "/ˈaːbn̩ts/",
        "syllables": [
          "a",
          "bends"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "gern",
        "vi": "thích, sẵn lòng",
        "ipa": "/ɡɛʁn/",
        "syllables": [
          "gern"
        ],
        "notation": [
          80
        ]
      },
      {
        "id": "w14",
        "de": "lieber",
        "vi": "thích hơn",
        "ipa": "/ˈliːbɐ/",
        "syllables": [
          "lie",
          "ber"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "das Kino",
        "vi": "rạp chiếu phim",
        "ipa": "/das ˈkiːno/",
        "syllables": [
          "das",
          "Ki",
          "no"
        ],
        "notation": [
          40,
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Was machst du in deiner Freizeit?",
        "vi": "Bạn làm gì vào thời gian rảnh?",
        "ipa": "/vas maxst duː ɪn ˈdaɪnɐ ˈfraɪtsaɪt/",
        "syllables": [
          "Was",
          "machst",
          "du",
          "in",
          "dei",
          "ner",
          "Frei",
          "zeit",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Ich schwimme gern am Wochenende.",
        "vi": "Tôi thích bơi vào cuối tuần.",
        "ipa": "/ɪç ˈʃvɪmə ɡɛʁn am ˈvɔxn̩ˌʔɛndə/",
        "syllables": [
          "Ich",
          "schwi",
          "mme",
          "gern",
          "am",
          "Wo",
          "chen",
          "en",
          "de",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Hast du ein Hobby?",
        "vi": "Bạn có sở thích nào không?",
        "ipa": "/hast duː aɪn ˈhɔbi/",
        "syllables": [
          "Hast",
          "du",
          "ein",
          "Ho",
          "bby",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Ich lese am liebsten Krimis.",
        "vi": "Tôi thích đọc truyện trinh thám nhất.",
        "ipa": "/ɪç ˈleːzə am ˈliːpstən ˈkʁiːmɪs/",
        "syllables": [
          "Ich",
          "le",
          "se",
          "am",
          "lieb",
          "sten",
          "Kri",
          "mis",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Wir treffen uns am Sonntag im Café.",
        "vi": "Chúng ta gặp nhau vào Chủ Nhật tại quán cà phê.",
        "ipa": "/viːɐ̯ ˈtʁɛfn̩ ʊns am ˈzɔntaːk ɪm kaˈfeː/",
        "syllables": [
          "Wir",
          "tref",
          "fen",
          "uns",
          "am",
          "Sonn",
          "tag",
          "im",
          "Ca",
          "fé",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Hast du am Abend Zeit?",
        "vi": "Bạn có thời gian vào buổi tối không?",
        "ipa": "/hast duː am ˈaːbn̩t tsaɪt/",
        "syllables": [
          "Hast",
          "du",
          "am",
          "A",
          "bend",
          "Zeit",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          80,
          40,
          60,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Ich koche gern italienisches Essen.",
        "vi": "Tôi thích nấu món ăn Ý.",
        "ipa": "/ɪç ˈkɔxə ɡɛʁn ˌɪtaliˈeːnɪʃəs ˈɛsn̩/",
        "syllables": [
          "Ich",
          "ko",
          "che",
          "gern",
          "i",
          "ta",
          "lie",
          "ni",
          "sches",
          "Es",
          "sen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          60,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Spielen wir heute Abend Tennis?",
        "vi": "Tối nay chúng ta chơi quần vợt nhé?",
        "ipa": "/ˈʃpiːlən viːɐ̯ ˈhɔɪtə ˈaːbn̩t ˈtɛnɪs/",
        "syllables": [
          "Spie",
          "len",
          "wir",
          "heu",
          "te",
          "A",
          "bend",
          "Ten",
          "nis",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          60,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Ich gehe lieber ins Kino als ins Theater.",
        "vi": "Tôi thích đi xem phim hơn là đi xem kịch.",
        "ipa": "/ɪç ˈɡeːə ˈliːbɐ ɪns ˈkiːno als ɪns teˈaːtɐ/",
        "syllables": [
          "Ich",
          "ge",
          "he",
          "lie",
          "ber",
          "ins",
          "Ki",
          "no",
          "als",
          "ins",
          "Thea",
          "ter",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Meine Hobbys sind Sport und Musik hören.",
        "vi": "Sở thích của tôi là thể thao và nghe nhạc.",
        "ipa": "/ˈmaɪnə ˈhɔbis zɪnt ʃpɔʁt ʊnt muˈziːk ˈhøːʁən/",
        "syllables": [
          "Mei",
          "ne",
          "Ho",
          "bbys",
          "sind",
          "Sport",
          "und",
          "Mu",
          "sik",
          "hö",
          "ren",
          "."
        ],
        "notation": [
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          60,
          80,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Wir können uns um 18 Uhr treffen.",
        "vi": "Chúng ta có thể gặp nhau lúc 6 giờ tối.",
        "ipa": "/viːɐ̯ ˈkœnən ʊns ʊm ˈʔaxtseːn uːɐ̯ ˈtʁɛfn̩/",
        "syllables": [
          "Wir",
          "kön",
          "nen",
          "uns",
          "um",
          "acht",
          "zehn",
          "Uhr",
          "tref",
          "fen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Ich habe leider keine Zeit, weil ich einen Termin habe.",
        "vi": "Rất tiếc tôi không có thời gian vì tôi có một cuộc hẹn.",
        "ipa": "/ɪç ˈhaːbə ˈlaɪdɐ ˈkaɪnə tsaɪt, vaɪl ɪç ˈaɪnən tɛʁˈmiːn ˈhaːbə/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "lei",
          "der",
          "kei",
          "ne",
          "Zeit",
          ",",
          "weil",
          "ich",
          "ei",
          "nen",
          "Ter",
          "min",
          "ha",
          "be",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          40,
          60,
          40,
          80,
          0,
          40,
          40,
          40,
          40,
          40,
          80,
          60,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Was magst du am liebsten machen?",
        "vi": "Bạn thích làm gì nhất?",
        "ipa": "/vas maːkst duː am ˈliːpstən ˈmaxn̩/",
        "syllables": [
          "Was",
          "magst",
          "du",
          "am",
          "lieb",
          "sten",
          "ma",
          "chen",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Er spielt jeden Tag Fußball.",
        "vi": "Anh ấy chơi bóng đá mỗi ngày.",
        "ipa": "/eːɐ̯ ʃpiːlt ˈjeːdn̩ taːk ˈfuːsbal/",
        "syllables": [
          "Er",
          "spielt",
          "je",
          "den",
          "Tag",
          "Fuß",
          "ball",
          "."
        ],
        "notation": [
          40,
          60,
          80,
          40,
          60,
          80,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Von wann bis wann hast du Zeit?",
        "vi": "Bạn có thời gian từ mấy giờ đến mấy giờ?",
        "ipa": "/fɔn van bɪs van hast duː tsaɪt/",
        "syllables": [
          "Von",
          "wann",
          "bis",
          "wann",
          "hast",
          "du",
          "Zeit",
          "?"
        ],
        "notation": [
          40,
          60,
          40,
          60,
          40,
          40,
          80,
          0
        ]
      }
    ]
  },
  "l5": {
    "words": [
      {
        "id": "w1",
        "de": "das Obst",
        "vi": "trái cây",
        "ipa": "/das oːpst/",
        "syllables": [
          "das",
          "Obst"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w2",
        "de": "das Gemüse",
        "vi": "rau củ",
        "ipa": "/das ɡəˈmyːzə/",
        "syllables": [
          "das",
          "Ge",
          "mü",
          "se"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "der Saft",
        "vi": "nước ép",
        "ipa": "/deːɐ̯ zaft/",
        "syllables": [
          "der",
          "Saft"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w4",
        "de": "die Milch",
        "vi": "sữa",
        "ipa": "/diː mɪlç/",
        "syllables": [
          "die",
          "Milch"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w5",
        "de": "das Brot",
        "vi": "bánh mì",
        "ipa": "/das broːt/",
        "syllables": [
          "das",
          "Brot"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w6",
        "de": "der Käse",
        "vi": "phô mai",
        "ipa": "/deːɐ̯ ˈkɛːzə/",
        "syllables": [
          "der",
          "Kä",
          "se"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "der Fisch",
        "vi": "cá",
        "ipa": "/deːɐ̯ fɪʃ/",
        "syllables": [
          "der",
          "Fisch"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w8",
        "de": "das Fleisch",
        "vi": "thịt",
        "ipa": "/das flaɪ̯ʃ/",
        "syllables": [
          "das",
          "Fleisch"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w9",
        "de": "einkaufen",
        "vi": "mua sắm",
        "ipa": "/ˈaɪ̯nˌkaʊ̯fn̩/",
        "syllables": [
          "ein",
          "kau",
          "fen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w10",
        "de": "kosten",
        "vi": "có giá, tốn tiền",
        "ipa": "/ˈkɔstn̩/",
        "syllables": [
          "kos",
          "ten"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "das Kilogramm",
        "vi": "kilogram",
        "ipa": "/das ˈkiːloˌɡram/",
        "syllables": [
          "das",
          "Ki",
          "lo",
          "gramm"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w12",
        "de": "die Flasche",
        "vi": "chai",
        "ipa": "/diː ˈflaʃə/",
        "syllables": [
          "die",
          "Fla",
          "sche"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "die Dose",
        "vi": "lon",
        "ipa": "/diː ˈdoːzə/",
        "syllables": [
          "die",
          "Do",
          "se"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "brauchen",
        "vi": "cần",
        "ipa": "/ˈbraʊ̯xn̩/",
        "syllables": [
          "brau",
          "chen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "der Supermarkt",
        "vi": "siêu thị",
        "ipa": "/deːɐ̯ ˈzuːpɐmaʁkt/",
        "syllables": [
          "der",
          "Su",
          "per",
          "markt"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Was möchten Sie heute einkaufen?",
        "vi": "Hôm nay bạn muốn mua gì?",
        "ipa": "/vas ˈmœçtn̩ ziː ˈhɔɪ̯tə ˈaɪ̯nˌkaʊ̯fn̩/",
        "syllables": [
          "Was",
          "möch",
          "ten",
          "Sie",
          "heu",
          "te",
          "ein",
          "kau",
          "fen",
          "?"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Ich brauche ein Kilo Äpfel und etwas Gemüse.",
        "vi": "Tôi cần một ký táo và một ít rau củ.",
        "ipa": "/ɪç ˈbraʊ̯xə aɪ̯n ˈkiːlo ˈɛpfl̩ ʊnt ˈɛtvas ɡəˈmyːzə/",
        "syllables": [
          "Ich",
          "brau",
          "che",
          "ein",
          "Ki",
          "lo",
          "Äp",
          "fel",
          "und",
          "et",
          "was",
          "Ge",
          "mü",
          "se",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Hast du noch Milch im Kühlschrank?",
        "vi": "Bạn còn sữa trong tủ lạnh không?",
        "ipa": "/hast duː nɔx mɪlç ɪm ˈkyːlʃʁaŋk/",
        "syllables": [
          "Hast",
          "du",
          "noch",
          "Milch",
          "im",
          "Kühl",
          "schrank",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Wie viel kostet dieses frische Brot?",
        "vi": "Cái bánh mì tươi này giá bao nhiêu?",
        "ipa": "/viː fiːl ˈkɔstət ˈdiːzəs ˈfʁɪʃə broːt/",
        "syllables": [
          "Wie",
          "viel",
          "kos",
          "tet",
          "die",
          "ses",
          "fri",
          "sche",
          "Brot",
          "?"
        ],
        "notation": [
          40,
          80,
          80,
          40,
          60,
          40,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Wir essen heute Abend Fisch mit Kartoffeln.",
        "vi": "Tối nay chúng ta ăn cá với khoai tây.",
        "ipa": "/viːɐ̯ ˈɛsn̩ ˈhɔɪ̯tə ˈaːbnt fɪʃ mɪt kaʁˈtɔfl̩n/",
        "syllables": [
          "Wir",
          "es",
          "sen",
          "heu",
          "te",
          "A",
          "bend",
          "Fisch",
          "mit",
          "Kar",
          "tof",
          "feln",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Trinkst du lieber Saft oder Wasser zum Essen?",
        "vi": "Bạn thích uống nước ép hay nước lọc khi ăn hơn?",
        "ipa": "/tʁɪŋkst duː ˈliːbɐ zaft ˈoːdɐ ˈvasɐ tsum ˈɛsn̩/",
        "syllables": [
          "Trinkst",
          "du",
          "lie",
          "ber",
          "Saft",
          "o",
          "der",
          "Was",
          "ser",
          "zum",
          "Es",
          "sen",
          "?"
        ],
        "notation": [
          80,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Im Supermarkt gibt es viele Sonderangebote.",
        "vi": "Trong siêu thị có nhiều ưu đãi đặc biệt.",
        "ipa": "/ɪm ˈzuːpɐmaʁkt ɡiːpt ɛs ˈfiːlə ˈzɔndɐˌʔanɡəˌboːtə/",
        "syllables": [
          "Im",
          "Su",
          "per",
          "markt",
          "gibt",
          "es",
          "vie",
          "le",
          "Son",
          "der",
          "an",
          "ge",
          "bo",
          "te",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          60,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Eine Flasche Olivenöl kostet acht Euro.",
        "vi": "Một chai dầu ô liu có giá tám euro.",
        "ipa": "/ˈaɪ̯nə ˈflaʃə oliːvn̩ˈʔøːl ˈkɔstət axt ˈɔɪ̯ʁo/",
        "syllables": [
          "Ei",
          "ne",
          "Fla",
          "sche",
          "O",
          "li",
          "ven",
          "öl",
          "kos",
          "tet",
          "acht",
          "Eu",
          "ro",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          80,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Mein Bruder mag kein Fleisch, er isst lieber Käse.",
        "vi": "Anh trai tôi không thích thịt, anh ấy thích ăn phô mai hơn.",
        "ipa": "/maɪ̯n ˈbʁuːdɐ mak kaɪ̯n flaɪ̯ʃ eːɐ̯ ɪst ˈliːbɐ ˈkɛːzə/",
        "syllables": [
          "Mein",
          "Bru",
          "der",
          "mag",
          "kein",
          "Fleisch",
          ",",
          "er",
          "isst",
          "lie",
          "ber",
          "Kä",
          "se",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          0,
          40,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Wir haben nur noch eine Dose Bohnen zu Hause.",
        "vi": "Chúng tôi chỉ còn một lon đậu ở nhà.",
        "ipa": "/viːɐ̯ ˈhaːbn̩ nuːɐ̯ nɔx ˈaɪ̯nə ˈdoːzə ˈboːnən tsuː ˈhaʊ̯zə/",
        "syllables": [
          "Wir",
          "ha",
          "ben",
          "nur",
          "noch",
          "ei",
          "ne",
          "Do",
          "se",
          "Boh",
          "nen",
          "zu",
          "Hau",
          "se",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Möchtest du Obst als Nachtisch haben?",
        "vi": "Bạn có muốn ăn trái cây tráng miệng không?",
        "ipa": "/ˈmœçtəst duː oːpst als ˈnaxtɪʃ ˈhaːbn̩/",
        "syllables": [
          "Möch",
          "test",
          "du",
          "Obst",
          "als",
          "Nach",
          "tisch",
          "ha",
          "ben",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Ich muss am Samstag noch im Supermarkt einkaufen gehen.",
        "vi": "Tôi phải đi mua sắm ở siêu thị vào thứ Bảy.",
        "ipa": "/ɪç mʊs am ˈzamstaːk nɔx ɪm ˈzuːpɐmaʁkt ˈaɪ̯nˌkaʊ̯fn̩ ɡeːən/",
        "syllables": [
          "Ich",
          "muss",
          "am",
          "Sam",
          "stag",
          "noch",
          "im",
          "Su",
          "per",
          "markt",
          "ein",
          "kau",
          "fen",
          "ge",
          "hen",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          60,
          80,
          40,
          40,
          40,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Dieses Gemüse ist sehr gesund und lecker.",
        "vi": "Loại rau củ này rất tốt cho sức khỏe và ngon.",
        "ipa": "/ˈdiːzəs ɡəˈmyːzə ɪst zeːɐ̯ ɡəˈzʊnt ʊnt ˈlɛkɐ/",
        "syllables": [
          "Die",
          "ses",
          "Ge",
          "mü",
          "se",
          "ist",
          "sehr",
          "ge",
          "sund",
          "und",
          "le",
          "cker",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Kaufen wir noch eine Packung Reis und etwas Milch?",
        "vi": "Chúng ta mua thêm một gói gạo và một ít sữa nhé?",
        "ipa": "/ˈkaʊ̯fn̩ viːɐ̯ nɔx ˈaɪ̯nə ˈpakʊŋ ʁaɪ̯s ʊnt ˈɛtvas mɪlç/",
        "syllables": [
          "Kau",
          "fen",
          "wir",
          "noch",
          "ei",
          "ne",
          "Pa",
          "ckung",
          "Reis",
          "und",
          "et",
          "was",
          "Milch",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Was brauchst du noch für das Abendessen?",
        "vi": "Bạn còn cần gì cho bữa tối nữa không?",
        "ipa": "/vas braʊ̯kst duː nɔx fyːɐ̯ das ˈaːbn̩tˌʔɛsn̩/",
        "syllables": [
          "Was",
          "brauchst",
          "du",
          "noch",
          "für",
          "das",
          "A",
          "bend",
          "es",
          "sen",
          "?"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          0
        ]
      }
    ]
  },
  "l4": {
    "words": [
      {
        "id": "w1",
        "de": "die Wohnung",
        "vi": "căn hộ",
        "ipa": "/diː ˈvoːnʊŋ/",
        "syllables": [
          "die",
          "Woh",
          "nung"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "das Zimmer",
        "vi": "căn phòng",
        "ipa": "/das ˈtsɪmɐ/",
        "syllables": [
          "das",
          "Zim",
          "mer"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "die Miete",
        "vi": "tiền thuê nhà",
        "ipa": "/diː ˈmiːtə/",
        "syllables": [
          "die",
          "Mie",
          "te"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "der Quadratmeter",
        "vi": "mét vuông",
        "ipa": "/dɛɐ kvaˈdʁaːtˌmeːtɐ/",
        "syllables": [
          "der",
          "Qua",
          "drat",
          "me",
          "ter"
        ],
        "notation": [
          40,
          40,
          80,
          60,
          40
        ]
      },
      {
        "id": "w5",
        "de": "möbliert",
        "vi": "có đồ đạc, được trang bị nội thất",
        "ipa": "/mœˈbliːɐ̯t/",
        "syllables": [
          "mö",
          "bliert"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w6",
        "de": "hell",
        "vi": "sáng sủa",
        "ipa": "/hɛl/",
        "syllables": [
          "hell"
        ],
        "notation": [
          80
        ]
      },
      {
        "id": "w7",
        "de": "gemütlich",
        "vi": "ấm cúng, thoải mái",
        "ipa": "/ɡəˈmyːtlɪç/",
        "syllables": [
          "ge",
          "müt",
          "lich"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "der Balkon",
        "vi": "ban công",
        "ipa": "/dɛɐ balˈkɔŋ/",
        "syllables": [
          "der",
          "Bal",
          "kon"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w9",
        "de": "der Aufzug",
        "vi": "thang máy",
        "ipa": "/dɛɐ ˈaʊ̯ftsʊk/",
        "syllables": [
          "der",
          "Auf",
          "zug"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "die Nebenkosten",
        "vi": "chi phí phụ, chi phí tiện ích",
        "ipa": "/diː ˈneːbn̩ˌkɔstn̩/",
        "syllables": [
          "die",
          "Ne",
          "ben",
          "kos",
          "ten"
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "w11",
        "de": "der Schrank",
        "vi": "tủ",
        "ipa": "/dɛɐ ʃʁaŋk/",
        "syllables": [
          "der",
          "Schrank"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w12",
        "de": "das Regal",
        "vi": "kệ",
        "ipa": "/das ʁeˈɡaːl/",
        "syllables": [
          "das",
          "Re",
          "gal"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w13",
        "de": "der Vermieter",
        "vi": "chủ nhà cho thuê (nam)",
        "ipa": "/dɛɐ fɛɐ̯ˈmiːtɐ/",
        "syllables": [
          "der",
          "Ver",
          "mie",
          "ter"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "die Kaution",
        "vi": "tiền đặt cọc",
        "ipa": "/diː kaʊ̯ˈtsi̯oːn/",
        "syllables": [
          "die",
          "Kau",
          "ti",
          "on"
        ],
        "notation": [
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "w15",
        "de": "einziehen",
        "vi": "chuyển vào ở",
        "ipa": "/ˈaɪ̯ntsiːən/",
        "syllables": [
          "ein",
          "zie",
          "hen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Wie groß ist deine Wohnung?",
        "vi": "Căn hộ của bạn rộng bao nhiêu?",
        "ipa": "/viː ˈɡʁoːs ɪst ˈdaɪ̯nə ˈvoːnʊŋ/",
        "syllables": [
          "Wie",
          "groß",
          "ist",
          "dei",
          "ne",
          "Woh",
          "nung",
          "?"
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Das Zimmer ist sehr hell und gemütlich.",
        "vi": "Căn phòng rất sáng sủa và ấm cúng.",
        "ipa": "/das ˈtsɪmɐ ɪst zeːɐ̯ hɛl ʊnt ɡəˈmyːtlɪç/",
        "syllables": [
          "Das",
          "Zim",
          "mer",
          "ist",
          "sehr",
          "hell",
          "und",
          "ge",
          "müt",
          "lich",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Die Miete für diese Wohnung ist zu hoch.",
        "vi": "Tiền thuê cho căn hộ này quá cao.",
        "ipa": "/diː ˈmiːtə fyːɐ̯ ˈdiːzə ˈvoːnʊŋ ɪst tsuː hoːx/",
        "syllables": [
          "Die",
          "Mie",
          "te",
          "für",
          "die",
          "se",
          "Woh",
          "nung",
          "ist",
          "zu",
          "hoch",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Das Sofa steht vor dem Fenster.",
        "vi": "Ghế sofa đặt trước cửa sổ.",
        "ipa": "/das ˈzoːfa ʃteːt foːɐ̯ dɛm ˈfɛnstɐ/",
        "syllables": [
          "Das",
          "So",
          "fa",
          "steht",
          "vor",
          "dem",
          "Fens",
          "ter",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Der Teppich liegt unter dem Tisch.",
        "vi": "Tấm thảm nằm dưới bàn.",
        "ipa": "/dɛɐ̯ ˈtɛpɪç liːkt ˈʊntɐ dɛm tɪʃ/",
        "syllables": [
          "Der",
          "Tep",
          "pich",
          "liegt",
          "un",
          "ter",
          "dem",
          "Tisch",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Ich suche eine möblierte Wohnung mit Balkon.",
        "vi": "Tôi đang tìm một căn hộ có đồ đạc và ban công.",
        "ipa": "/ɪç ˈzuːxə ˈaɪ̯nə mœˈbliːɐ̯tə ˈvoːnʊŋ mɪt balˈkɔŋ/",
        "syllables": [
          "Ich",
          "su",
          "che",
          "ei",
          "ne",
          "mö",
          "bliert",
          "te",
          "Woh",
          "nung",
          "mit",
          "Bal",
          "kon",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Wie viele Quadratmeter hat das Schlafzimmer?",
        "vi": "Phòng ngủ có bao nhiêu mét vuông?",
        "ipa": "/viː ˈfiːlə kvaˈdʁaːtˌmeːtɐ hat das ˈʃlaːft͡sɪmɐ/",
        "syllables": [
          "Wie",
          "vie",
          "le",
          "Qua",
          "drat",
          "me",
          "ter",
          "hat",
          "das",
          "Schlaf",
          "zim",
          "mer",
          "?"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Wir müssen die Nebenkosten jeden Monat bezahlen.",
        "vi": "Chúng ta phải trả các chi phí tiện ích mỗi tháng.",
        "ipa": "/viːɐ̯ ˈmʏsn̩ diː ˈneːbn̩ˌkɔstn̩ ˈjeːdn̩ ˈmoːnat bəˈtsaːln̩/",
        "syllables": [
          "Wir",
          "müs",
          "sen",
          "die",
          "Ne",
          "ben",
          "kos",
          "ten",
          "je",
          "den",
          "Mo",
          "nat",
          "be",
          "zah",
          "len",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          60,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Ist ein Aufzug im Haus vorhanden?",
        "vi": "Có thang máy trong nhà không?",
        "ipa": "/ɪst aɪ̯n ˈaʊ̯ftsʊk ɪm haʊ̯s fɔɐ̯ˈhandn̩/",
        "syllables": [
          "Ist",
          "ein",
          "Auf",
          "zug",
          "im",
          "Haus",
          "vor",
          "han",
          "den",
          "?"
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Der Schrank steht neben dem Bett.",
        "vi": "Cái tủ đứng cạnh giường.",
        "ipa": "/dɛɐ̯ ʃʁaŋk ʃteːt ˈneːbn̩ dɛm bɛt/",
        "syllables": [
          "Der",
          "Schrank",
          "steht",
          "ne",
          "ben",
          "dem",
          "Bett",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Die Bücher sind im Regal.",
        "vi": "Sách ở trên kệ.",
        "ipa": "/diː ˈbyːçɐ zɪnt ɪm ʁeˈɡaːl/",
        "syllables": [
          "Die",
          "Bü",
          "cher",
          "sind",
          "im",
          "Re",
          "gal",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Unser Vermieter ist sehr nett.",
        "vi": "Chủ nhà của chúng tôi rất tốt bụng.",
        "ipa": "/ˈʊnzɐ fɛɐ̯ˈmiːtɐ ɪst zeːɐ̯ nɛt/",
        "syllables": [
          "Un",
          "ser",
          "Ver",
          "mie",
          "ter",
          "ist",
          "sehr",
          "nett",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Man muss oft eine Kaution bezahlen, wenn man eine Wohnung mietet.",
        "vi": "Người ta thường phải trả tiền đặt cọc khi thuê căn hộ.",
        "ipa": "/man mʊs ɔft ˈaɪ̯nə kaʊ̯ˈtsi̯oːn bəˈtsaːln̩ vɛn man ˈaɪ̯nə ˈvoːnʊŋ ˈmiːtət/",
        "syllables": [
          "Man",
          "muss",
          "oft",
          "ei",
          "ne",
          "Kau",
          "ti",
          "on",
          "be",
          "zah",
          "len",
          ",",
          "wenn",
          "man",
          "ei",
          "ne",
          "Woh",
          "nung",
          "mie",
          "tet",
          "."
        ],
        "notation": [
          40,
          80,
          60,
          60,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          0,
          40,
          40,
          60,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Wann möchtest du einziehen?",
        "vi": "Khi nào bạn muốn chuyển vào ở?",
        "ipa": "/van ˈmœçtəst duː ˈaɪ̯ntsiːən/",
        "syllables": [
          "Wann",
          "möch",
          "test",
          "du",
          "ein",
          "zie",
          "hen",
          "?"
        ],
        "notation": [
          80,
          80,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "In meiner Küche gibt es einen großen Kühlschrank.",
        "vi": "Trong bếp của tôi có một cái tủ lạnh lớn.",
        "ipa": "/ɪn ˈmaɪ̯nɐ ˈkʏçə ɡɪpt ɛs ˈaɪ̯nən ˈɡʁoːsn̩ ˈkyːlʃʁaŋk/",
        "syllables": [
          "In",
          "mei",
          "ner",
          "Kü",
          "che",
          "gibt",
          "es",
          "ei",
          "nen",
          "gro",
          "ßen",
          "Kühl",
          "schrank",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      }
    ]
  },
  "l1": {
    "words": [
      {
        "id": "w1",
        "de": "der Beruf",
        "vi": "nghề nghiệp",
        "ipa": "/deːɐ̯ beˈʁuːf/",
        "syllables": [
          "der",
          "Be",
          "ruf"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w2",
        "de": "der Job",
        "vi": "công việc",
        "ipa": "/deːɐ̯ d͡ʒɔp/",
        "syllables": [
          "der",
          "Job"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w3",
        "de": "der Kollege / die Kollegin",
        "vi": "đồng nghiệp",
        "ipa": "/deːɐ̯ koˈleːɡə / diː koˈleːɡɪn/",
        "syllables": [
          "der",
          "Ko",
          "le",
          "ge",
          "/",
          "die",
          "Ko",
          "le",
          "gin"
        ],
        "notation": [
          40,
          40,
          80,
          40,
          0,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "die Arbeitszeit",
        "vi": "giờ làm việc",
        "ipa": "/diː ˈaʁbaɪ̯t͡sˌt͡saɪ̯t/",
        "syllables": [
          "die",
          "Ar",
          "beits",
          "zeit"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w5",
        "de": "die Besprechung",
        "vi": "cuộc họp",
        "ipa": "/diː bəˈʃpʁɛçʊŋ/",
        "syllables": [
          "die",
          "Be",
          "spre",
          "chung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "die Freizeit",
        "vi": "thời gian rảnh",
        "ipa": "/diː ˈfʁaɪ̯t͡saɪ̯t/",
        "syllables": [
          "die",
          "Frei",
          "zeit"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "das Hobby",
        "vi": "sở thích",
        "ipa": "/das ˈhɔbi/",
        "syllables": [
          "das",
          "Hob",
          "by"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "der Sport",
        "vi": "thể thao",
        "ipa": "/deːɐ̯ ʃpɔʁt/",
        "syllables": [
          "der",
          "Sport"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w9",
        "de": "der Sprachkurs",
        "vi": "khóa học ngôn ngữ",
        "ipa": "/deːɐ̯ ˈʃpʁaːxˌkʊʁs/",
        "syllables": [
          "der",
          "Sprach",
          "kurs"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "der Termin",
        "vi": "cuộc hẹn",
        "ipa": "/deːɐ̯ tɛʁˈmiːn/",
        "syllables": [
          "der",
          "Ter",
          "min"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w11",
        "de": "der Grund",
        "vi": "lý do",
        "ipa": "/deːɐ̯ ɡʁʊnt/",
        "syllables": [
          "der",
          "Grund"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w12",
        "de": "die Sonne",
        "vi": "mặt trời",
        "ipa": "/diː ˈzɔnə/",
        "syllables": [
          "die",
          "Son",
          "ne"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "die Natur",
        "vi": "thiên nhiên",
        "ipa": "/diː naˈtuːɐ̯/",
        "syllables": [
          "die",
          "Na",
          "tur"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w14",
        "de": "der Ausflug",
        "vi": "chuyến đi chơi, dã ngoại",
        "ipa": "/deːɐ̯ ˈaʊ̯sfluːk/",
        "syllables": [
          "der",
          "Aus",
          "flug"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "die Woche",
        "vi": "tuần",
        "ipa": "/diː ˈvɔxə/",
        "syllables": [
          "die",
          "Wo",
          "che"
        ],
        "notation": [
          40,
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.",
        "vi": "Tôi học tiếng Đức vì tôi muốn làm việc ở Đức.",
        "ipa": "/ɪç ˈlɛʁnə dɔɪ̯tʃ vaɪ̯l ɪç ɪn ˈdɔɪ̯tʃlant ˈaʁbaɪ̯tn̩ ˈmœçtə/",
        "syllables": [
          "Ich",
          "ler",
          "ne",
          "Deutsch",
          ",",
          "weil",
          "ich",
          "in",
          "Deutsch",
          "land",
          "ar",
          "bei",
          "ten",
          "möch",
          "te",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          0,
          40,
          40,
          40,
          60,
          40,
          60,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Mein Beruf ist sehr interessant und ich mag meine Kollegen.",
        "vi": "Nghề nghiệp của tôi rất thú vị và tôi thích các đồng nghiệp của mình.",
        "ipa": "/maɪ̯n beˈʁuːf ɪst zeːɐ̯ ɪntəʁɛˈsant ʊnt ɪç maːk ˈmaɪ̯nə koˈleːɡn̩/",
        "syllables": [
          "Mein",
          "Be",
          "ruf",
          "ist",
          "sehr",
          "in",
          "te",
          "res",
          "sant",
          "und",
          "ich",
          "mag",
          "mei",
          "ne",
          "Ko",
          "le",
          "gen",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Wie sind deine Arbeitszeiten diese Woche?",
        "vi": "Giờ làm việc của bạn tuần này như thế nào?",
        "ipa": "/viː zɪnt ˈdaɪ̯nə ˈaʁbaɪ̯t͡sˌt͡saɪ̯tn̩ ˈdiːzə ˈvɔxə/",
        "syllables": [
          "Wie",
          "sind",
          "dei",
          "ne",
          "Ar",
          "beits",
          "zei",
          "ten",
          "die",
          "se",
          "Wo",
          "che",
          "?"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Wir haben morgen eine wichtige Besprechung um zehn Uhr.",
        "vi": "Chúng ta có một cuộc họp quan trọng vào mười giờ ngày mai.",
        "ipa": "/viːɐ̯ ˈhaːbn̩ ˈmɔʁɡn̩ ˈaɪ̯nə ˈvɪçtɪɡə bəˈʃpʁɛçʊŋ ʊm t͡seːn uːɐ̯/",
        "syllables": [
          "Wir",
          "ha",
          "ben",
          "mor",
          "gen",
          "ei",
          "ne",
          "wich",
          "ti",
          "ge",
          "Be",
          "spre",
          "chung",
          "um",
          "zehn",
          "Uhr",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          60,
          40,
          40,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "In meiner Freizeit treffe ich gern Freunde oder mache Sport.",
        "vi": "Vào thời gian rảnh, tôi thích gặp gỡ bạn bè hoặc chơi thể thao.",
        "ipa": "/ɪn ˈmaɪ̯nɐ ˈfʁaɪ̯t͡saɪ̯t ˈtʁɛfə ɪç ɡɛʁn ˈfʁɔɪ̯ndə ˈoːdɐ ˈmaxə ʃpɔʁt/",
        "syllables": [
          "In",
          "mei",
          "ner",
          "Frei",
          "zeit",
          "tref",
          "fe",
          "ich",
          "gern",
          "Freun",
          "de",
          "o",
          "der",
          "ma",
          "che",
          "Sport",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          60,
          60,
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Hast du am Wochenende einen Termin?",
        "vi": "Bạn có cuộc hẹn nào vào cuối tuần không?",
        "ipa": "/hast du am ˈvɔxənˌɛndə ˈaɪ̯nən tɛʁˈmiːn/",
        "syllables": [
          "Hast",
          "du",
          "am",
          "Wo",
          "chen",
          "en",
          "de",
          "ei",
          "nen",
          "Ter",
          "min",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Er studiert Medizin, denn er möchte Arzt werden.",
        "vi": "Anh ấy học y khoa vì anh ấy muốn trở thành bác sĩ.",
        "ipa": "/eːɐ̯ ʃtuˈdiːɐ̯t medɪˈt͡siːn dɛn eːɐ̯ ˈmœçtə aʁt͡st ˈvɛʁdn̩/",
        "syllables": [
          "Er",
          "stu",
          "diert",
          "Me",
          "di",
          "zin",
          ",",
          "denn",
          "er",
          "möch",
          "te",
          "Arzt",
          "wer",
          "den",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          80,
          0,
          40,
          40,
          60,
          40,
          80,
          60,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Mein Hobby ist Lesen und ich gehe gern ins Kino.",
        "vi": "Sở thích của tôi là đọc sách và tôi thích đi xem phim.",
        "ipa": "/maɪ̯n ˈhɔbi ɪst ˈleːzn̩ ʊnt ɪç ˈɡeːə ɡɛʁn ɪns ˈkiːno/",
        "syllables": [
          "Mein",
          "Hob",
          "by",
          "ist",
          "Le",
          "sen",
          "und",
          "ich",
          "ge",
          "he",
          "gern",
          "ins",
          "Ki",
          "no",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Ich besuche einen Sprachkurs, um meine Deutschkenntnisse zu verbessern.",
        "vi": "Tôi tham gia một khóa học tiếng Đức để cải thiện kiến thức tiếng Đức của mình.",
        "ipa": "/ɪç bəˈzuːxə ˈaɪ̯nən ˈʃpʁaːxˌkʊʁs ʊm ˈmaɪ̯nə ˈdɔɪ̯tʃˌkɛntnɪsə t͡suː fɛʁˈbɛsɐn/",
        "syllables": [
          "Ich",
          "be",
          "su",
          "che",
          "ei",
          "nen",
          "Sprach",
          "kurs",
          ",",
          "um",
          "mei",
          "ne",
          "Deutsch",
          "kennt",
          "nis",
          "se",
          "zu",
          "ver",
          "bes",
          "sern",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          60,
          0,
          40,
          40,
          40,
          80,
          60,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Die Sonne scheint, das ist ein guter Grund für einen Ausflug.",
        "vi": "Mặt trời đang chiếu sáng, đó là một lý do tốt để đi dã ngoại.",
        "ipa": "/diː ˈzɔnə ʃaɪ̯nt das ɪst aɪ̯n ˈɡuːtɐ ɡʁʊnt fyːɐ̯ ˈaɪ̯nən ˈaʊ̯sfluːk/",
        "syllables": [
          "Die",
          "Son",
          "ne",
          "scheint",
          ",",
          "das",
          "ist",
          "ein",
          "gu",
          "ter",
          "Grund",
          "für",
          "ei",
          "nen",
          "Aus",
          "flug",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          0,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Sie arbeitet als Ingenieurin bei einer großen Firma.",
        "vi": "Cô ấy làm kỹ sư tại một công ty lớn.",
        "ipa": "/ziː ˈaʁbaɪ̯tət als ɪnʒeni̯øːˈʁɪn baɪ̯ ˈaɪ̯nɐ ˈɡʁoːsn̩ ˈfɪʁma/",
        "syllables": [
          "Sie",
          "ar",
          "bei",
          "tet",
          "als",
          "In",
          "ge",
          "nieu",
          "rin",
          "bei",
          "ei",
          "ner",
          "gro",
          "ßen",
          "Fir",
          "ma",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Wir machen oft Spaziergänge in der Natur.",
        "vi": "Chúng tôi thường đi dạo trong thiên nhiên.",
        "ipa": "/viːɐ̯ ˈmaxn̩ ɔft ʃpaˈt͡siːɐ̯ˌɡɛŋə ɪn deːɐ̯ naˈtuːɐ̯/",
        "syllables": [
          "Wir",
          "ma",
          "chen",
          "oft",
          "Spa",
          "zier",
          "gän",
          "ge",
          "in",
          "der",
          "Na",
          "tur",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Warum lernst du Deutsch?",
        "vi": "Tại sao bạn học tiếng Đức?",
        "ipa": "/vaˈʁʊm lɛʁnst du dɔɪ̯tʃ/",
        "syllables": [
          "Wa",
          "rum",
          "lernst",
          "du",
          "Deutsch",
          "?"
        ],
        "notation": [
          40,
          80,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Ich habe viel zu tun, deshalb habe ich wenig Freizeit.",
        "vi": "Tôi có nhiều việc phải làm, vì vậy tôi có ít thời gian rảnh.",
        "ipa": "/ɪç ˈhaːbə fiːl t͡suː tuːn ˈdɛshalp ˈhaːbə ɪç ˈveːnɪç ˈfʁaɪ̯t͡saɪ̯t/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "viel",
          "zu",
          "tun",
          ",",
          "des",
          "halb",
          "ha",
          "be",
          "ich",
          "we",
          "nig",
          "Frei",
          "zeit",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          40,
          60,
          0,
          60,
          40,
          60,
          40,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Der Kurs beginnt am Montag und endet am Freitag.",
        "vi": "Khóa học bắt đầu vào thứ Hai và kết thúc vào thứ Sáu.",
        "ipa": "/deːɐ̯ kʊʁs bəˈɡɪnt am ˈmoːntaːk ʊnt ˈɛndət am ˈfʁaɪ̯taːk/",
        "syllables": [
          "Der",
          "Kurs",
          "be",
          "ginnt",
          "am",
          "Mon",
          "tag",
          "und",
          "en",
          "det",
          "am",
          "Frei",
          "tag",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          80,
          40,
          0
        ]
      }
    ]
  },
  "l6": {
    "words": [
      {
        "id": "w1",
        "de": "der Beruf",
        "vi": "nghề nghiệp",
        "ipa": "/deːɐ̯ bəˈʁuːf/",
        "syllables": [
          "der",
          "Be",
          "ruf"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w2",
        "de": "die Stelle",
        "vi": "vị trí công việc",
        "ipa": "/diː ˈʃtɛlə/",
        "syllables": [
          "die",
          "Stel",
          "le"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "sich bewerben",
        "vi": "ứng tuyển",
        "ipa": "/zɪç bəˈvɛɐ̯bn̩/",
        "syllables": [
          "sich",
          "be",
          "wer",
          "ben"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "der Lebenslauf",
        "vi": "sơ yếu lý lịch",
        "ipa": "/deːɐ̯ ˈleːbn̩sˌlaʊ̯f/",
        "syllables": [
          "der",
          "Le",
          "bens",
          "lauf"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w5",
        "de": "die Arbeitszeit",
        "vi": "thời gian làm việc",
        "ipa": "/diː ˈaʁbaɪ̯tsˌtsaɪ̯t/",
        "syllables": [
          "die",
          "Ar",
          "beits",
          "zeit"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w6",
        "de": "die Tätigkeit",
        "vi": "hoạt động/nhiệm vụ",
        "ipa": "/diː ˈtɛːtɪçˌkaɪ̯t/",
        "syllables": [
          "die",
          "Tä",
          "tig",
          "keit"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w7",
        "de": "teamfähig",
        "vi": "có khả năng làm việc nhóm",
        "ipa": "/ˈtiːmˌfɛːɪç/",
        "syllables": [
          "Team",
          "fä",
          "hig"
        ],
        "notation": [
          80,
          60,
          40
        ]
      },
      {
        "id": "w8",
        "de": "flexibel",
        "vi": "linh hoạt",
        "ipa": "/flɛˈksiːbl̩/",
        "syllables": [
          "fle",
          "xi",
          "bel"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "die Computerkenntnisse",
        "vi": "kiến thức máy tính",
        "ipa": "/diː kɔmˈpuːtɐˌkɛntnɪsə/",
        "syllables": [
          "die",
          "Com",
          "pu",
          "ter",
          "kennt",
          "nis",
          "se"
        ],
        "notation": [
          40,
          40,
          80,
          40,
          60,
          40,
          40
        ]
      },
      {
        "id": "w10",
        "de": "reparieren",
        "vi": "sửa chữa",
        "ipa": "/ʁepaˈʁiːʁən/",
        "syllables": [
          "re",
          "pa",
          "rie",
          "ren"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "unterrichten",
        "vi": "dạy học",
        "ipa": "/ʊntɐˈʁɪçtn̩/",
        "syllables": [
          "un",
          "ter",
          "rich",
          "ten"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "beraten",
        "vi": "tư vấn",
        "ipa": "/bəˈʁaːtn̩/",
        "syllables": [
          "be",
          "ra",
          "ten"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "planen",
        "vi": "lập kế hoạch",
        "ipa": "/ˈplaːnən/",
        "syllables": [
          "pla",
          "nen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "selbstständig",
        "vi": "độc lập/tự chủ",
        "ipa": "/ˈzɛlpstˌʃtɛndɪç/",
        "syllables": [
          "selbst",
          "stän",
          "dig"
        ],
        "notation": [
          80,
          60,
          40
        ]
      },
      {
        "id": "w15",
        "de": "erfolgreich",
        "vi": "thành công",
        "ipa": "/ɛɐ̯ˈfɔlkˌʁaɪ̯ç/",
        "syllables": [
          "er",
          "folg",
          "reich"
        ],
        "notation": [
          40,
          80,
          60
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Was ist dein Traumberuf?",
        "vi": "Nghề nghiệp mơ ước của bạn là gì?",
        "ipa": "/vas ɪst daɪ̯n ˈtʁaʊ̯mbəˌʁuːf/",
        "syllables": [
          "Was",
          "ist",
          "dein",
          "Traum",
          "be",
          "ruf",
          "?"
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          60,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Ich suche eine neue Stelle als Ingenieur.",
        "vi": "Tôi đang tìm một vị trí mới làm kỹ sư.",
        "ipa": "/ɪç ˈzuːxə ˈaɪ̯nə ˈnɔɪ̯ə ˈʃtɛlə als ɪnʒeˈni̯øːɐ̯/",
        "syllables": [
          "Ich",
          "su",
          "che",
          "ei",
          "ne",
          "neu",
          "e",
          "Stel",
          "le",
          "als",
          "In",
          "ge",
          "nieur",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Sie möchte sich bei dieser Firma bewerben.",
        "vi": "Cô ấy muốn ứng tuyển vào công ty này.",
        "ipa": "/ziː ˈmœçtə zɪç baɪ̯ ˈdiːzɐ ˈfɪʁma bəˈvɛɐ̯bn̩/",
        "syllables": [
          "Sie",
          "möch",
          "te",
          "sich",
          "bei",
          "die",
          "ser",
          "Fir",
          "ma",
          "be",
          "wer",
          "ben",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Haben Sie Ihren Lebenslauf dabei?",
        "vi": "Bạn có mang theo sơ yếu lý lịch không?",
        "ipa": "/ˈhaːbn̩ ziː ˈiːʁən ˈleːbn̩sˌlaʊ̯f daˈbaɪ̯/",
        "syllables": [
          "Ha",
          "ben",
          "Sie",
          "Ih",
          "ren",
          "Le",
          "bens",
          "lauf",
          "da",
          "bei",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Meine Arbeitszeit ist von 9 bis 17 Uhr.",
        "vi": "Giờ làm việc của tôi là từ 9 đến 17 giờ.",
        "ipa": "/ˈmaɪ̯nə ˈaʁbaɪ̯tsˌtsaɪ̯t ɪst fɔn nɔɪ̯n bɪs ˈzɪpˌtseːn uːɐ̯/",
        "syllables": [
          "Mei",
          "ne",
          "Ar",
          "beits",
          "zeit",
          "ist",
          "von",
          "neun",
          "bis",
          "sieb",
          "zehn",
          "Uhr",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40,
          80,
          40,
          60,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Zu meinen Tätigkeiten gehört die Kundenberatung.",
        "vi": "Một trong những nhiệm vụ của tôi là tư vấn khách hàng.",
        "ipa": "/tsuː ˈmaɪ̯nən ˈtɛːtɪçˌkaɪ̯tn̩ ɡəˈhøːɐ̯t diː ˈkʊndn̩bəˌʁaːtʊŋ/",
        "syllables": [
          "Zu",
          "mei",
          "nen",
          "Tä",
          "tig",
          "kei",
          "ten",
          "ge",
          "hört",
          "die",
          "Kun",
          "den",
          "be",
          "ra",
          "tung",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Als Lehrer muss man sehr teamfähig sein.",
        "vi": "Là giáo viên, người ta phải có khả năng làm việc nhóm tốt.",
        "ipa": "/als ˈleːʁɐ mʊs man zeːɐ̯ ˈtiːmˌfɛːɪç zaɪ̯n/",
        "syllables": [
          "Als",
          "Leh",
          "rer",
          "muss",
          "man",
          "sehr",
          "team",
          "fä",
          "hig",
          "sein",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          80,
          60,
          40,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Ich bin in meiner Arbeit sehr flexibel.",
        "vi": "Tôi rất linh hoạt trong công việc của mình.",
        "ipa": "/ɪç bɪn ɪn ˈmaɪ̯nɐ ˈaʁbaɪ̯t zeːɐ̯ flɛˈksiːbl̩/",
        "syllables": [
          "Ich",
          "bin",
          "in",
          "mei",
          "ner",
          "Ar",
          "beit",
          "sehr",
          "fle",
          "xi",
          "bel",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Gute Computerkenntnisse sind für den Job wichtig.",
        "vi": "Kiến thức máy tính tốt rất quan trọng cho công việc.",
        "ipa": "/ˈɡuːtə kɔmˈpuːtɐˌkɛntnɪsə zɪnt fyːɐ̯ deːn dʒɔp ˈvɪçtɪç/",
        "syllables": [
          "Gu",
          "te",
          "Com",
          "pu",
          "ter",
          "kennt",
          "nis",
          "se",
          "sind",
          "für",
          "den",
          "Job",
          "wich",
          "tig",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          40,
          40,
          60,
          80,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Der Mechaniker muss das Auto reparieren.",
        "vi": "Người thợ máy phải sửa chiếc xe.",
        "ipa": "/deːɐ̯ meçaˈniːkɐ mʊs das ˈaʊ̯to ʁepaˈʁiːʁən/",
        "syllables": [
          "Der",
          "Me",
          "cha",
          "ni",
          "ker",
          "muss",
          "das",
          "Au",
          "to",
          "re",
          "pa",
          "rie",
          "ren",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Sie möchte später Kinder unterrichten.",
        "vi": "Cô ấy muốn dạy học cho trẻ em sau này.",
        "ipa": "/ziː ˈmœçtə ˈʃpɛːtɐ ˈkɪndɐ ʊntɐˈʁɪçtn̩/",
        "syllables": [
          "Sie",
          "möch",
          "te",
          "spä",
          "ter",
          "Kin",
          "der",
          "un",
          "ter",
          "rich",
          "ten",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Kannst du mich bitte bei dieser Entscheidung beraten?",
        "vi": "Bạn có thể tư vấn cho tôi về quyết định này không?",
        "ipa": "/kanst duː mɪç ˈbɪtə baɪ̯ ˈdiːzɐ ɛntˈʃaɪ̯dʊŋ bəˈʁaːtn̩/",
        "syllables": [
          "Kannst",
          "du",
          "mich",
          "bit",
          "te",
          "bei",
          "die",
          "ser",
          "Ent",
          "schei",
          "dung",
          "be",
          "ra",
          "ten",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Wir müssen das Projekt bis nächste Woche planen.",
        "vi": "Chúng ta phải lên kế hoạch cho dự án đến tuần tới.",
        "ipa": "/viːɐ̯ ˈmʏsn̩ das pʁoˈjɛkt bɪs ˈnɛçstə ˈvɔxə ˈplaːnən/",
        "syllables": [
          "Wir",
          "müs",
          "sen",
          "das",
          "Pro",
          "jekt",
          "bis",
          "nächs",
          "te",
          "Wo",
          "che",
          "pla",
          "nen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Er arbeitet als selbstständiger Fotograf.",
        "vi": "Anh ấy làm nhiếp ảnh gia tự do.",
        "ipa": "/ɛɐ̯ ˈaʁbaɪ̯tət als ˈzɛlpstˌʃtɛndɪçɐ ˈfoːtoˌɡʁaːf/",
        "syllables": [
          "Er",
          "ar",
          "bei",
          "tet",
          "als",
          "selbst",
          "stän",
          "di",
          "ger",
          "Fo",
          "to",
          "graf",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          60,
          40,
          40,
          80,
          40,
          60,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Der Kurs war sehr erfolgreich.",
        "vi": "Khóa học rất thành công.",
        "ipa": "/deːɐ̯ kʊʁs vaːɐ̯ zeːɐ̯ ɛɐ̯ˈfɔlkˌʁaɪ̯ç/",
        "syllables": [
          "Der",
          "Kurs",
          "war",
          "sehr",
          "er",
          "folg",
          "reich",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          60,
          40,
          80,
          60,
          0
        ]
      }
    ]
  },
  "l3": {
    "words": [
      {
        "id": "w1",
        "de": "aufstehen",
        "vi": "thức dậy",
        "ipa": "/'aʊfʃteːən/",
        "syllables": [
          "auf",
          "ste",
          "hen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w2",
        "de": "frühstücken",
        "vi": "ăn sáng",
        "ipa": "/'fryːʃtʏkn̩/",
        "syllables": [
          "früh",
          "stü",
          "cken"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w3",
        "de": "arbeiten",
        "vi": "làm việc",
        "ipa": "/'arbaɪtn̩/",
        "syllables": [
          "ar",
          "bei",
          "ten"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w4",
        "de": "einkaufen",
        "vi": "mua sắm",
        "ipa": "/'aɪnkaʊfn̩/",
        "syllables": [
          "ein",
          "kau",
          "fen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w5",
        "de": "fernsehen",
        "vi": "xem TV",
        "ipa": "/'fɛrnzeːən/",
        "syllables": [
          "fern",
          "se",
          "hen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w6",
        "de": "der Termin",
        "vi": "cuộc hẹn",
        "ipa": "/dɛɐ tɛr'miːn/",
        "syllables": [
          "der",
          "Ter",
          "min"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w7",
        "de": "die Uhrzeit",
        "vi": "giờ, thời gian",
        "ipa": "/diː 'uːɐtsaɪt/",
        "syllables": [
          "die",
          "Uhr",
          "zeit"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "der Vormittag",
        "vi": "buổi sáng (trước trưa)",
        "ipa": "/dɛɐ 'foːɐmɪtʰaːk/",
        "syllables": [
          "der",
          "Vor",
          "mit",
          "tag"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w9",
        "de": "der Nachmittag",
        "vi": "buổi chiều",
        "ipa": "/dɛɐ 'naːxmɪtʰaːk/",
        "syllables": [
          "der",
          "Nach",
          "mit",
          "tag"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w10",
        "de": "der Abend",
        "vi": "buổi tối",
        "ipa": "/dɛɐ 'aːbənt/",
        "syllables": [
          "der",
          "A",
          "bend"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "schlafen gehen",
        "vi": "đi ngủ",
        "ipa": "/'ʃlaːfn̩ ˈɡeːən/",
        "syllables": [
          "schla",
          "fen",
          "ge",
          "hen"
        ],
        "notation": [
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "w12",
        "de": "treffen",
        "vi": "gặp gỡ",
        "ipa": "/'trɛfn̩/",
        "syllables": [
          "tre",
          "ffen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "pünktlich",
        "vi": "đúng giờ",
        "ipa": "/'pʏŋktlɪç/",
        "syllables": [
          "pünkt",
          "lich"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "anrufen",
        "vi": "gọi điện",
        "ipa": "/'anruːfn̩/",
        "syllables": [
          "an",
          "ru",
          "fen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w15",
        "de": "beginnen",
        "vi": "bắt đầu",
        "ipa": "/bəˈɡɪnən/",
        "syllables": [
          "be",
          "gi",
          "nnen"
        ],
        "notation": [
          40,
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Ich stehe jeden Morgen um sieben Uhr auf.",
        "vi": "Tôi thức dậy lúc bảy giờ mỗi sáng.",
        "ipa": "/ɪç ˈʃteːə ˈjeːdn̩ ˈmɔrɡn̩ ʊm ˈziːbn̩ uːɐ ˈaʊf/",
        "syllables": [
          "Ich",
          "ste",
          "he",
          "je",
          "den",
          "Mor",
          "gen",
          "um",
          "sie",
          "ben",
          "Uhr",
          "auf",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Was machst du am Vormittag?",
        "vi": "Bạn làm gì vào buổi sáng?",
        "ipa": "/vas maxst duː am 'foːɐmɪtʰaːk/",
        "syllables": [
          "Was",
          "machst",
          "du",
          "am",
          "Vor",
          "mit",
          "tag",
          "?"
        ],
        "notation": [
          60,
          80,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Ich frühstücke immer mit meiner Familie.",
        "vi": "Tôi luôn ăn sáng cùng gia đình.",
        "ipa": "/ɪç ˈfryːʃtʏkə ˈɪmɐ mɪt ˈmaɪnɐ faˈmiːli̯ə/",
        "syllables": [
          "Ich",
          "früh",
          "stü",
          "cke",
          "im",
          "mer",
          "mit",
          "mei",
          "ner",
          "Fa",
          "mi",
          "lie",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Am Nachmittag gehe ich oft einkaufen.",
        "vi": "Vào buổi chiều, tôi thường đi mua sắm.",
        "ipa": "/am 'naːxmɪtʰaːk ˈɡeːə ɪç ɔft ˈaɪnkaʊfn̩/",
        "syllables": [
          "Am",
          "Nach",
          "mit",
          "tag",
          "ge",
          "he",
          "ich",
          "oft",
          "ein",
          "kau",
          "fen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          60,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Wir müssen heute Abend noch arbeiten.",
        "vi": "Tối nay chúng ta còn phải làm việc.",
        "ipa": "/viːɐ ˈmʏsn̩ ˈhɔɪtə ˈaːbənt nɔx ˈarbaɪtn̩/",
        "syllables": [
          "Wir",
          "mü",
          "ssen",
          "heu",
          "te",
          "A",
          "bend",
          "noch",
          "ar",
          "bei",
          "ten",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          60,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Hast du am Dienstag einen Termin?",
        "vi": "Bạn có cuộc hẹn vào thứ Ba không?",
        "ipa": "/hast duː am ˈdiːnstaːk ˈaɪnən tɛrˈmiːn/",
        "syllables": [
          "Hast",
          "du",
          "am",
          "Dien",
          "stag",
          "ei",
          "nen",
          "Ter",
          "min",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          80,
          40,
          60,
          40,
          60,
          80,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Ich rufe dich später an, okay?",
        "vi": "Tôi sẽ gọi cho bạn sau nhé?",
        "ipa": "/ɪç ˈruːfə dɪç ˈʃpɛːtɐ an oˈkeɪ/",
        "syllables": [
          "Ich",
          "ru",
          "fe",
          "dich",
          "spä",
          "ter",
          "an",
          ",",
          "o",
          "kay",
          "?"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          0,
          60,
          80,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Wann beginnt der Film im Kino?",
        "vi": "Bộ phim bắt đầu lúc mấy giờ ở rạp chiếu phim?",
        "ipa": "/van bəˈɡɪnt deːɐ fɪlm ɪm ˈkiːnoː/",
        "syllables": [
          "Wann",
          "be",
          "ginnt",
          "der",
          "Film",
          "im",
          "Ki",
          "no",
          "?"
        ],
        "notation": [
          60,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Möchtest du am Wochenende Freunde treffen?",
        "vi": "Bạn có muốn gặp gỡ bạn bè vào cuối tuần không?",
        "ipa": "/'mœçtəst duː am 'vɔxənˌɛndə 'frɔɪndə 'trɛfn̩/",
        "syllables": [
          "Möch",
          "test",
          "du",
          "am",
          "Wo",
          "chen",
          "en",
          "de",
          "Freun",
          "de",
          "tre",
          "ffen",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Er geht gegen elf Uhr schlafen.",
        "vi": "Anh ấy đi ngủ khoảng mười một giờ.",
        "ipa": "/eːɐ ɡeːt ˈɡeːɡn̩ ɛlf uːɐ ˈʃlaːfn̩/",
        "syllables": [
          "Er",
          "geht",
          "ge",
          "gen",
          "elf",
          "Uhr",
          "schla",
          "fen",
          "."
        ],
        "notation": [
          40,
          60,
          80,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Sie sehen abends gern fern.",
        "vi": "Họ thích xem TV vào buổi tối.",
        "ipa": "/ziː ˈzeːən ˈaːbənts ɡɛrn fɛrn/",
        "syllables": [
          "Sie",
          "se",
          "hen",
          "a",
          "bends",
          "gern",
          "fern",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          60,
          80,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Es ist wichtig, pünktlich zu sein.",
        "vi": "Điều quan trọng là phải đúng giờ.",
        "ipa": "/ɛs ɪst ˈvɪçtɪç ˈpʏŋktlɪç tsuː zaɪn/",
        "syllables": [
          "Es",
          "ist",
          "wich",
          "tig",
          ",",
          "pünkt",
          "lich",
          "zu",
          "sein",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          0,
          80,
          40,
          40,
          60,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Von acht bis vierzehn Uhr habe ich einen Kurs.",
        "vi": "Từ tám giờ đến mười bốn giờ tôi có một khóa học.",
        "ipa": "/fɔn axt bɪs ˈfɪɐtseːn uːɐ ˈhaːbə ɪç ˈaɪnən kʊrs/",
        "syllables": [
          "Von",
          "acht",
          "bis",
          "vier",
          "zehn",
          "Uhr",
          "ha",
          "be",
          "ich",
          "ei",
          "nen",
          "Kurs",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Können wir die Uhrzeit für unser Treffen ändern?",
        "vi": "Chúng ta có thể thay đổi giờ hẹn gặp không?",
        "ipa": "/ˈkœnən viːɐ diː ˈuːɐtsaɪt fyːɐ ˈʊnzɐ ˈtrɛfn̩ ˈɛndɐn/",
        "syllables": [
          "Kön",
          "nen",
          "wir",
          "die",
          "Uhr",
          "zeit",
          "für",
          "un",
          "ser",
          "Tre",
          "ffen",
          "än",
          "dern",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Ich habe gestern meine Einkäufe erledigt.",
        "vi": "Tôi đã hoàn thành việc mua sắm của mình vào hôm qua.",
        "ipa": "/ɪç ˈhaːbə ˈɡɛstɐn ˈmaɪnə ˈaɪnˌkɔɪfə ɛɐˈleːdɪçt/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "ges",
          "tern",
          "mei",
          "ne",
          "Ein",
          "käu",
          "fe",
          "er",
          "le",
          "digt",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      }
    ]
  },
  "l10": {
    "words": [
      {
        "id": "w1",
        "de": "der Kopf",
        "vi": "cái đầu",
        "ipa": "/dɛɐ̯ kɔpf/",
        "syllables": [
          "der",
          "Kopf"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w2",
        "de": "der Bauch",
        "vi": "cái bụng",
        "ipa": "/dɛɐ̯ baʊ̯x/",
        "syllables": [
          "der",
          "Bauch"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w3",
        "de": "der Rücken",
        "vi": "cái lưng",
        "ipa": "/dɛɐ̯ ˈrʏkən/",
        "syllables": [
          "der",
          "Rü",
          "cken"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "der Hals",
        "vi": "cổ họng/cái cổ",
        "ipa": "/dɛɐ̯ hals/",
        "syllables": [
          "der",
          "Hals"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w5",
        "de": "das Fieber",
        "vi": "cơn sốt",
        "ipa": "/das ˈfiːbɐ/",
        "syllables": [
          "das",
          "Fie",
          "ber"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "die Grippe",
        "vi": "bệnh cúm",
        "ipa": "/diː ˈɡrɪpə/",
        "syllables": [
          "die",
          "Gri",
          "ppe"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "die Tablette",
        "vi": "viên thuốc",
        "ipa": "/diː taˈblɛtə/",
        "syllables": [
          "die",
          "Ta",
          "ble",
          "tte"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "der Husten",
        "vi": "cơn ho",
        "ipa": "/dɛɐ̯ ˈhuːstən/",
        "syllables": [
          "der",
          "Hu",
          "sten"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "der Schnupfen",
        "vi": "sổ mũi/cảm lạnh",
        "ipa": "/dɛɐ̯ ˈʃnʊpfən/",
        "syllables": [
          "der",
          "Schnu",
          "pfen"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "wehtun",
        "vi": "đau",
        "ipa": "/ˈveːtuːn/",
        "syllables": [
          "weh",
          "tun"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "sich fühlen",
        "vi": "cảm thấy",
        "ipa": "/zɪç ˈfyːlən/",
        "syllables": [
          "sich",
          "füh",
          "len"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "krank",
        "vi": "ốm yếu/bị bệnh",
        "ipa": "/kraŋk/",
        "syllables": [
          "krank"
        ],
        "notation": [
          80
        ]
      },
      {
        "id": "w13",
        "de": "der Arzt",
        "vi": "bác sĩ",
        "ipa": "/dɛɐ̯ aʁtst/",
        "syllables": [
          "der",
          "Arzt"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w14",
        "de": "die Apotheke",
        "vi": "hiệu thuốc",
        "ipa": "/diː apoˈteːkə/",
        "syllables": [
          "die",
          "A",
          "po",
          "the",
          "ke"
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "das Medikament",
        "vi": "thuốc men",
        "ipa": "/das mediːkaˈmɛnt/",
        "syllables": [
          "das",
          "Me",
          "di",
          "ka",
          "ment"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Mir tut der Kopf weh.",
        "vi": "Tôi bị đau đầu.",
        "ipa": "/miːɐ̯ tuːt dɛɐ̯ kɔpf veː/",
        "syllables": [
          "Mir",
          "tut",
          "der",
          "Kopf",
          "weh",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          60,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Ich habe Fieber und Husten.",
        "vi": "Tôi bị sốt và ho.",
        "ipa": "/ɪç ˈhaːbə ˈfiːbɐ ʊnt ˈhuːstən/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "Fie",
          "ber",
          "und",
          "Hu",
          "sten",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Du solltest zum Arzt gehen.",
        "vi": "Bạn nên đi khám bác sĩ.",
        "ipa": "/duː ˈzɔltəst t͡sʊm aʁtst ˈɡeːən/",
        "syllables": [
          "Du",
          "soll",
          "test",
          "zum",
          "Arzt",
          "ge",
          "hen",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Fühlen Sie sich heute besser?",
        "vi": "Hôm nay ông/bà có thấy khá hơn không?",
        "ipa": "/ˈfyːlən ziː zɪç ˈhɔɪ̯tə ˈbɛsɐ/",
        "syllables": [
          "Füh",
          "len",
          "Sie",
          "sich",
          "heu",
          "te",
          "be",
          "sser",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Er hat starke Schmerzen im Rücken.",
        "vi": "Anh ấy bị đau lưng dữ dội.",
        "ipa": "/eːɐ̯ hat ˈʃtaʁkə ˈʃmɛʁt͡sn̩ ɪm ˈrʏkən/",
        "syllables": [
          "Er",
          "hat",
          "star",
          "ke",
          "Schmer",
          "zen",
          "im",
          "Rü",
          "cken",
          "."
        ],
        "notation": [
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Nimm diese Tablette dreimal täglich.",
        "vi": "Hãy uống viên thuốc này ba lần mỗi ngày.",
        "ipa": "/nɪm ˈdiːzə taˈblɛtə ˈdʁaɪ̯maːl ˈtɛːklɪç/",
        "syllables": [
          "Nimm",
          "die",
          "se",
          "Ta",
          "ble",
          "tte",
          "drei",
          "mal",
          "täg",
          "lich",
          "."
        ],
        "notation": [
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Sie muss in der Apotheke ein Medikament kaufen.",
        "vi": "Cô ấy phải mua thuốc ở hiệu thuốc.",
        "ipa": "/ziː mʊs ɪn dɛɐ̯ apoˈteːkə aɪ̯n mediːkaˈmɛnt ˈkaʊ̯fn̩/",
        "syllables": [
          "Sie",
          "muss",
          "in",
          "der",
          "A",
          "po",
          "the",
          "ke",
          "ein",
          "Me",
          "di",
          "ka",
          "ment",
          "kau",
          "fen",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          40,
          60,
          40,
          40,
          40,
          40,
          40,
          80,
          60,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Ich glaube, ich habe die Grippe.",
        "vi": "Tôi nghĩ mình bị cúm rồi.",
        "ipa": "/ɪç ˈɡlaʊ̯bə ɪç ˈhaːbə diː ˈɡrɪpə/",
        "syllables": [
          "Ich",
          "glau",
          "be",
          ",",
          "ich",
          "ha",
          "be",
          "die",
          "Gri",
          "ppe",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          0,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Bleiben Sie zu Hause und ruhen Sie sich aus.",
        "vi": "Ông/bà hãy ở nhà và nghỉ ngơi đi.",
        "ipa": "/ˈblaɪ̯bn̩ ziː t͡suː ˈhaʊ̯zə ʊnt ˈʁuːən ziː zɪç aʊ̯s/",
        "syllables": [
          "Blei",
          "ben",
          "Sie",
          "zu",
          "Hau",
          "se",
          "und",
          "ru",
          "hen",
          "Sie",
          "sich",
          "aus",
          "."
        ],
        "notation": [
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Mein Hals tut sehr weh beim Schlucken.",
        "vi": "Cổ họng của tôi rất đau khi nuốt.",
        "ipa": "/maɪ̯n hals tuːt zeːɐ̯ veː baɪ̯m ˈʃlʊkən/",
        "syllables": [
          "Mein",
          "Hals",
          "tut",
          "sehr",
          "weh",
          "beim",
          "Schlu",
          "cken",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Er ist seit gestern krank.",
        "vi": "Anh ấy bị ốm từ hôm qua.",
        "ipa": "/eːɐ̯ ɪst zaɪ̯t ˈɡɛstɐn kraŋk/",
        "syllables": [
          "Er",
          "ist",
          "seit",
          "ge",
          "stern",
          "krank",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Gehen Sie bitte nicht zur Arbeit.",
        "vi": "Xin ông/bà đừng đi làm.",
        "ipa": "/ˈɡeːən ziː ˈbɪtə nɪçt t͡suːɐ̯ ˈaʁbaɪ̯t/",
        "syllables": [
          "Ge",
          "hen",
          "Sie",
          "bi",
          "tte",
          "nicht",
          "zur",
          "Ar",
          "beit",
          "."
        ],
        "notation": [
          60,
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Was fehlt Ihnen denn?",
        "vi": "Ông/bà bị làm sao vậy?",
        "ipa": "/vas feːlt ˈiːnən dɛn/",
        "syllables": [
          "Was",
          "fehlt",
          "Ihnen",
          "denn",
          "?"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Ich habe auch Schnupfen und mein Bauch tut weh.",
        "vi": "Tôi cũng bị sổ mũi và đau bụng.",
        "ipa": "/ɪç ˈhaːbə aʊ̯x ˈʃnʊpfən ʊnt maɪ̯n baʊ̯x tuːt veː/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "auch",
          "Schnu",
          "pfen",
          "und",
          "mein",
          "Bauch",
          "tut",
          "weh",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          60,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Sie müssen viel Wasser trinken und Tee.",
        "vi": "Ông/bà phải uống nhiều nước và trà.",
        "ipa": "/ziː ˈmʏsn̩ fiːl ˈvasɐ ˈtʁɪŋkn̩ ʊnt teː/",
        "syllables": [
          "Sie",
          "mü",
          "ssen",
          "viel",
          "Wa",
          "sser",
          "trin",
          "ken",
          "und",
          "Tee",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      }
    ]
  },
  "l8": {
    "words": [
      {
        "id": "w1",
        "de": "der Beruf",
        "vi": "nghề nghiệp",
        "ipa": "/deːɐ̯ beˈʁuːf/",
        "syllables": [
          "der",
          "Be",
          "ruf"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w2",
        "de": "arbeiten",
        "vi": "làm việc",
        "ipa": "/ˈaʁbaɪ̯tn̩/",
        "syllables": [
          "ar",
          "bei",
          "ten"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w3",
        "de": "der Kollege",
        "vi": "đồng nghiệp (nam)",
        "ipa": "/deːɐ̯ koˈleːɡə/",
        "syllables": [
          "der",
          "Ko",
          "le",
          "ge"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "die Arbeitszeit",
        "vi": "giờ làm việc",
        "ipa": "/diː ˈaʁbaɪ̯tsˌtsaɪ̯t/",
        "syllables": [
          "die",
          "Ar",
          "beits",
          "zeit"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w5",
        "de": "der Chef",
        "vi": "sếp (nam)",
        "ipa": "/deːɐ̯ ʃɛf/",
        "syllables": [
          "der",
          "Chef"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w6",
        "de": "verdienen",
        "vi": "kiếm tiền, thu nhập",
        "ipa": "/fɛɐ̯ˈdiːnən/",
        "syllables": [
          "ver",
          "die",
          "nen"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "die Ausbildung",
        "vi": "khóa đào tạo, học nghề",
        "ipa": "/diː ˈaʊ̯sˌbɪldʊŋ/",
        "syllables": [
          "die",
          "Aus",
          "bil",
          "dung"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w8",
        "de": "der Job",
        "vi": "công việc",
        "ipa": "/deːɐ̯ d͡ʒɔp/",
        "syllables": [
          "der",
          "Job"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w9",
        "de": "selbstständig",
        "vi": "tự làm chủ, tự kinh doanh",
        "ipa": "/ˈzɛlpstˌʃtɛndɪç/",
        "syllables": [
          "selbst",
          "stän",
          "dig"
        ],
        "notation": [
          80,
          60,
          40
        ]
      },
      {
        "id": "w10",
        "de": "teilzeit",
        "vi": "bán thời gian",
        "ipa": "/ˈtaɪ̯lt͡saɪ̯t/",
        "syllables": [
          "teil",
          "zeit"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "ganztags",
        "vi": "toàn thời gian",
        "ipa": "/ˈɡant͡sˌtaːks/",
        "syllables": [
          "ganz",
          "tags"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "die Stelle",
        "vi": "vị trí công việc",
        "ipa": "/diː ˈʃtɛlə/",
        "syllables": [
          "die",
          "Stel",
          "le"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "die Karriere",
        "vi": "sự nghiệp",
        "ipa": "/diː kaˈʁiːʁə/",
        "syllables": [
          "die",
          "Kar",
          "rie",
          "re"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "stressig",
        "vi": "căng thẳng, áp lực",
        "ipa": "/ˈʃtʁɛsɪç/",
        "syllables": [
          "stres",
          "sig"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "das Gehalt",
        "vi": "tiền lương",
        "ipa": "/das ɡəˈhalt/",
        "syllables": [
          "das",
          "Ge",
          "halt"
        ],
        "notation": [
          40,
          40,
          80
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Was sind Sie von Beruf?",
        "vi": "Bạn làm nghề gì?",
        "ipa": "/vas zɪnt ziː fɔn beˈʁuːf/",
        "syllables": [
          "Was",
          "sind",
          "Sie",
          "von",
          "Be",
          "ruf",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Ich arbeite als Lehrerin.",
        "vi": "Tôi làm giáo viên.",
        "ipa": "/ɪç ˈaʁbaɪ̯tə als ˈleːʁəʁɪn/",
        "syllables": [
          "Ich",
          "ar",
          "bei",
          "te",
          "als",
          "Leh",
          "re",
          "rin",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Meine Kollegen sind sehr nett.",
        "vi": "Các đồng nghiệp của tôi rất tốt bụng.",
        "ipa": "/ˈmaɪ̯nə koˈleːɡən zɪnt zeːɐ̯ nɛt/",
        "syllables": [
          "Mei",
          "ne",
          "Ko",
          "le",
          "gen",
          "sind",
          "sehr",
          "nett",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          40,
          60,
          80,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Ich habe flexible Arbeitszeiten.",
        "vi": "Tôi có giờ làm việc linh hoạt.",
        "ipa": "/ɪç haːbə flɛkˈsiːblə ˈaʁbaɪ̯tsˌtsaɪ̯tn̩/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "flexi",
          "ble",
          "Ar",
          "beits",
          "zei",
          "ten",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Der Chef ist immer im Büro.",
        "vi": "Sếp luôn ở trong văn phòng.",
        "ipa": "/deːɐ̯ ʃɛf ɪst ˈɪmɐ ɪm byˈʁoː/",
        "syllables": [
          "Der",
          "Chef",
          "ist",
          "im",
          "mer",
          "im",
          "Bü",
          "ro",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Wie viel verdienen Sie im Monat?",
        "vi": "Mỗi tháng bạn kiếm được bao nhiêu?",
        "ipa": "/viː fiːl fɛɐ̯ˈdiːnən ziː ɪm ˈmoːnat/",
        "syllables": [
          "Wie",
          "viel",
          "ver",
          "die",
          "nen",
          "Sie",
          "im",
          "Mo",
          "nat",
          "?"
        ],
        "notation": [
          60,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Sie macht eine Ausbildung zur Krankenschwester.",
        "vi": "Cô ấy đang theo học khóa đào tạo để trở thành y tá.",
        "ipa": "/ziː maxt ˈaɪ̯nə ˈaʊ̯sˌbɪldʊŋ t͡suːɐ̯ ˈkʁankn̩ˌʃvɛstɐ/",
        "syllables": [
          "Sie",
          "macht",
          "ei",
          "ne",
          "Aus",
          "bil",
          "dung",
          "zur",
          "Kran",
          "ken",
          "schwes",
          "ter",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Ich suche einen neuen Job.",
        "vi": "Tôi đang tìm một công việc mới.",
        "ipa": "/ɪç zuːxə ˈaɪ̯nən nɔɪ̯ən d͡ʒɔp/",
        "syllables": [
          "Ich",
          "su",
          "che",
          "ei",
          "nen",
          "neu",
          "en",
          "Job",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Er möchte gern selbstständig sein.",
        "vi": "Anh ấy muốn được tự kinh doanh.",
        "ipa": "/eːɐ̯ mœçtə ɡɛʁn ˈzɛlpstˌʃtɛndɪç zaɪ̯n/",
        "syllables": [
          "Er",
          "möch",
          "te",
          "gern",
          "selbst",
          "stän",
          "dig",
          "sein",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Arbeitest du teilzeit oder ganztags?",
        "vi": "Bạn làm việc bán thời gian hay toàn thời gian?",
        "ipa": "/ˈaʁbaɪ̯təst duː ˈtaɪ̯lt͡saɪ̯t ˈoːdɐ ˈɡant͡sˌtaːks/",
        "syllables": [
          "Ar",
          "bei",
          "test",
          "du",
          "teil",
          "zeit",
          "o",
          "der",
          "ganz",
          "tags",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Die Arbeit ist manchmal sehr stressig.",
        "vi": "Công việc đôi khi rất căng thẳng.",
        "ipa": "/diː ˈaʁbaɪ̯t ɪst ˈmançmaːl zeːɐ̯ ˈʃtʁɛsɪç/",
        "syllables": [
          "Die",
          "Ar",
          "beit",
          "ist",
          "manch",
          "mal",
          "sehr",
          "stres",
          "sig",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          60,
          80,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Wir brauchen eine neue Kollegin im Team.",
        "vi": "Chúng tôi cần một đồng nghiệp nữ mới trong nhóm.",
        "ipa": "/viːɐ̯ ˈbʁaʊ̯xn̩ ˈaɪ̯nə nɔɪ̯ə koˈleːɡɪn ɪm tiːm/",
        "syllables": [
          "Wir",
          "brau",
          "chen",
          "ei",
          "ne",
          "neu",
          "e",
          "Ko",
          "le",
          "gin",
          "im",
          "Team",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Ich finde die Stelle sehr interessant.",
        "vi": "Tôi thấy vị trí này rất thú vị.",
        "ipa": "/ɪç fɪndə diː ˈʃtɛlə zeːɐ̯ ɪntəʁɛˈsant/",
        "syllables": [
          "Ich",
          "fin",
          "de",
          "die",
          "Stel",
          "le",
          "sehr",
          "in",
          "te",
          "re",
          "ssant",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Er hat eine gute Karriere gemacht.",
        "vi": "Anh ấy đã có một sự nghiệp tốt.",
        "ipa": "/eːɐ̯ hat ˈaɪ̯nə ˈɡuːtə kaˈʁiːʁə ɡəˈmaxt/",
        "syllables": [
          "Er",
          "hat",
          "ei",
          "ne",
          "gu",
          "te",
          "Kar",
          "rie",
          "re",
          "ge",
          "macht",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Man muss pünktlich zur Arbeit kommen.",
        "vi": "Người ta phải đến làm việc đúng giờ.",
        "ipa": "/man mʊs ˈpʏnktlɪç t͡suːɐ̯ ˈaʁbaɪ̯t ˈkɔmən/",
        "syllables": [
          "Man",
          "muss",
          "pünkt",
          "lich",
          "zur",
          "Ar",
          "beit",
          "kom",
          "men",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      }
    ]
  },
  "l12": {
    "words": [
      {
        "id": "w1",
        "de": "die Einladung",
        "vi": "lời mời",
        "ipa": "/diː ˈaɪnˌlaːdʊŋ/",
        "syllables": [
          "die",
          "Ein",
          "la",
          "dung"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w2",
        "de": "feiern",
        "vi": "ăn mừng, kỷ niệm",
        "ipa": "/ˈfaɪɐn/",
        "syllables": [
          "fei",
          "ern"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "das Geschenk",
        "vi": "món quà",
        "ipa": "/das ɡəˈʃɛŋk/",
        "syllables": [
          "das",
          "Ge",
          "schenk"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w4",
        "de": "alles Gute",
        "vi": "mọi điều tốt lành",
        "ipa": "/ˈaləs ˈɡuːtə/",
        "syllables": [
          "al",
          "les",
          "Gu",
          "te"
        ],
        "notation": [
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "herzlichen Glückwunsch",
        "vi": "chúc mừng",
        "ipa": "/ˈhɛʁtslɪçn̩ ˈɡlʏkvʊnʃ/",
        "syllables": [
          "herz",
          "li",
          "chen",
          "Glück",
          "wunsch"
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "die Party",
        "vi": "bữa tiệc",
        "ipa": "/diː ˈpaːɐ̯ti/",
        "syllables": [
          "die",
          "Par",
          "ty"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "das Fest",
        "vi": "lễ hội, bữa tiệc",
        "ipa": "/das fɛst/",
        "syllables": [
          "das",
          "Fest"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w8",
        "de": "der Geburtstag",
        "vi": "sinh nhật",
        "ipa": "/deːɐ̯ ˈɡəbʊɐ̯tstaːk/",
        "syllables": [
          "der",
          "Ge",
          "burts",
          "tag"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "die Hochzeit",
        "vi": "đám cưới",
        "ipa": "/diː ˈhɔxtsaɪt/",
        "syllables": [
          "die",
          "Hoch",
          "zeit"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "der Frühling",
        "vi": "mùa xuân",
        "ipa": "/deːɐ̯ ˈfryːlɪŋ/",
        "syllables": [
          "der",
          "Früh",
          "ling"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "der Sommer",
        "vi": "mùa hè",
        "ipa": "/deːɐ̯ ˈzɔmɐ/",
        "syllables": [
          "der",
          "Som",
          "mer"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "der Herbst",
        "vi": "mùa thu",
        "ipa": "/deːɐ̯ hɛʁpst/",
        "syllables": [
          "der",
          "Herbst"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w13",
        "de": "der Winter",
        "vi": "mùa đông",
        "ipa": "/deːɐ̯ ˈvɪntɐ/",
        "syllables": [
          "der",
          "Win",
          "ter"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "einladen",
        "vi": "mời",
        "ipa": "/ˈaɪnˌlaːdn̩/",
        "syllables": [
          "ein",
          "la",
          "den"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w15",
        "de": "stattfinden",
        "vi": "diễn ra",
        "ipa": "/ˈʃtatˌfɪndn̩/",
        "syllables": [
          "statt",
          "fin",
          "den"
        ],
        "notation": [
          80,
          40,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Ich habe eine Einladung zur Party bekommen.",
        "vi": "Tôi đã nhận được một lời mời đến bữa tiệc.",
        "ipa": "/ɪç ˈhaːbə ˈaɪnə ˈaɪnˌlaːdʊŋ tsʊɐ̯ ˈpaːɐ̯ti bəˈkɔmən/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "ei",
          "ne",
          "Ein",
          "la",
          "dung",
          "zur",
          "Par",
          "ty",
          "be",
          "kom",
          "men."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40
        ]
      },
      {
        "id": "s2",
        "de": "Wir möchten unseren Hochzeitstag feiern.",
        "vi": "Chúng tôi muốn kỷ niệm ngày cưới của mình.",
        "ipa": "/viːɐ̯ ˈmœçtn̩ ˈʊnzəʁn̩ ˈhɔxtsaɪtstaːk ˈfaɪɐn/",
        "syllables": [
          "Wir",
          "möch",
          "ten",
          "un",
          "se",
          "ren",
          "Hoch",
          "zeits",
          "tag",
          "fei",
          "ern."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          80,
          40
        ]
      },
      {
        "id": "s3",
        "de": "Was möchtest du zum Geburtstag als Geschenk?",
        "vi": "Bạn muốn món quà gì vào dịp sinh nhật?",
        "ipa": "/vas ˈmœçtəst duː tsʊm ˈɡəbʊɐ̯tstaːk als ɡəˈʃɛŋk/",
        "syllables": [
          "Was",
          "möch",
          "test",
          "du",
          "zum",
          "Ge",
          "burts",
          "tag",
          "als",
          "Ge",
          "schenk?"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          60,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s4",
        "de": "Alles Gute zum Geburtstag!",
        "vi": "Chúc mừng sinh nhật!",
        "ipa": "/ˈaləs ˈɡuːtə tsʊm ˈɡəbʊɐ̯tstaːk/",
        "syllables": [
          "Al",
          "les",
          "Gu",
          "te",
          "zum",
          "Ge",
          "burts",
          "tag!"
        ],
        "notation": [
          80,
          40,
          80,
          40,
          40,
          40,
          60,
          80
        ]
      },
      {
        "id": "s5",
        "de": "Herzlichen Glückwunsch zur Hochzeit!",
        "vi": "Chúc mừng đám cưới!",
        "ipa": "/ˈhɛʁtslɪçn̩ ˈɡlʏkvʊnʃ tsʊɐ̯ ˈhɔxtsaɪt/",
        "syllables": [
          "Herz",
          "li",
          "chen",
          "Glück",
          "wunsch",
          "zur",
          "Hoch",
          "zeit!"
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s6",
        "de": "Die Party findet am Samstagabend statt.",
        "vi": "Bữa tiệc diễn ra vào tối thứ Bảy.",
        "ipa": "/diː ˈpaːɐ̯ti ˈfɪndət am ˈzamstaːkˌʔaːbnt̩ ʃtat/",
        "syllables": [
          "Die",
          "Par",
          "ty",
          "fin",
          "det",
          "am",
          "Sams",
          "tag",
          "abend",
          "statt."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          80
        ]
      },
      {
        "id": "s7",
        "de": "Das Stadtfest war sehr schön.",
        "vi": "Lễ hội thành phố rất đẹp.",
        "ipa": "/das ˈʃtatˌfɛst vaːɐ̯ zeːɐ̯ ʃøːn/",
        "syllables": [
          "Das",
          "Stadt",
          "fest",
          "war",
          "sehr",
          "schön."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          80
        ]
      },
      {
        "id": "s8",
        "de": "Ich lade dich zu meiner Geburtstagsfeier ein.",
        "vi": "Tôi mời bạn đến dự tiệc sinh nhật của tôi.",
        "ipa": "/ɪç ˈlaːdə dɪç tsuː ˈmaɪnɐ ɡəˈbʊɐ̯tstaːksˌfaɪɐ aɪn/",
        "syllables": [
          "Ich",
          "la",
          "de",
          "dich",
          "zu",
          "mei",
          "ner",
          "Ge",
          "burts",
          "tags",
          "fei",
          "er",
          "ein."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          80
        ]
      },
      {
        "id": "s9",
        "de": "Sie heiraten nächsten Monat und feiern eine große Hochzeit.",
        "vi": "Họ sẽ kết hôn vào tháng tới và tổ chức một đám cưới lớn.",
        "ipa": "/ziː ˈhaɪ̯ʁaːtn̩ ˈnɛçstn̩ ˈmoːnat ʊnt ˈfaɪ̯ɐn ˈaɪ̯nə ˈɡʁoːsə ˈhɔxtsaɪ̯t/",
        "syllables": [
          "Sie",
          "hei",
          "ra",
          "ten",
          "nächs",
          "ten",
          "Mo",
          "nat",
          "und",
          "fei",
          "ern",
          "ei",
          "ne",
          "gro",
          "ße",
          "Hoch",
          "zeit."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          80,
          40
        ]
      },
      {
        "id": "s10",
        "de": "Ich mag den Sommer, weil das Wetter warm ist.",
        "vi": "Tôi thích mùa hè vì thời tiết ấm áp.",
        "ipa": "/ɪç maːk deːn ˈzɔmɐ vaɪl das ˈvɛtɐ vaʁm ɪst/",
        "syllables": [
          "Ich",
          "mag",
          "den",
          "Som",
          "mer",
          "weil",
          "das",
          "Wet",
          "ter",
          "warm",
          "ist."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "s11",
        "de": "Ich finde es toll, dass du kommst.",
        "vi": "Tôi thấy thật tuyệt khi bạn đến.",
        "ipa": "/ɪç ˈfɪndə ɛs tɔl das duː kɔmst/",
        "syllables": [
          "Ich",
          "fin",
          "de",
          "es",
          "toll,",
          "dass",
          "du",
          "kommst."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80
        ]
      },
      {
        "id": "s12",
        "de": "Wir möchten gern am Wochenende grillen.",
        "vi": "Chúng tôi muốn nướng thịt vào cuối tuần.",
        "ipa": "/viːɐ̯ ˈmœçtn̩ ɡɛʁn am ˈvɔxn̩ˌɛndə ˈɡʁɪlən/",
        "syllables": [
          "Wir",
          "möch",
          "ten",
          "gern",
          "am",
          "Wo",
          "chen",
          "en",
          "de",
          "gril",
          "len."
        ],
        "notation": [
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s13",
        "de": "Soll ich dir bei den Vorbereitungen helfen?",
        "vi": "Tôi có nên giúp bạn chuẩn bị không?",
        "ipa": "/zɔl ɪç diːɐ̯ baɪ̯ deːn ˈfoːɐ̯bəˌʁaɪ̯tʊŋən ˈhɛlfn̩/",
        "syllables": [
          "Soll",
          "ich",
          "dir",
          "bei",
          "den",
          "Vor",
          "be",
          "rei",
          "tun",
          "gen",
          "hel",
          "fen?"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s14",
        "de": "Bringst du einen Kuchen zur Feier mit?",
        "vi": "Bạn có mang bánh đến buổi lễ không?",
        "ipa": "/ˈbʁɪŋst duː ˈaɪnən ˈkuːxn̩ tsʊɐ̯ ˈfaɪɐ mɪt/",
        "syllables": [
          "Bringst",
          "du",
          "ei",
          "nen",
          "Ku",
          "chen",
          "zur",
          "Fei",
          "er",
          "mit?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80
        ]
      },
      {
        "id": "s15",
        "de": "Wann ist der genaue Termin für das Fest?",
        "vi": "Khi nào là ngày chính xác cho lễ hội?",
        "ipa": "/van ɪst deːɐ̯ ɡəˈnaʊ̯ə tɛʁˈmiːn fyːɐ̯ das fɛst/",
        "syllables": [
          "Wann",
          "ist",
          "der",
          "ge",
          "nau",
          "e",
          "Ter",
          "min",
          "für",
          "das",
          "Fest?"
        ],
        "notation": [
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80
        ]
      }
    ]
  },
  "l11": {
    "words": [
      {
        "id": "w1",
        "de": "die Fahrkarte",
        "vi": "vé (tàu, xe)",
        "ipa": "/diː ˈfaːɐ̯kaʁtə/",
        "syllables": [
          "die",
          "Fahr",
          "kar",
          "te"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w2",
        "de": "die S-Bahn",
        "vi": "tàu điện ngoại ô",
        "ipa": "/diː ˈɛsˌbaːn/",
        "syllables": [
          "die",
          "S",
          "Bahn"
        ],
        "notation": [
          40,
          60,
          80
        ]
      },
      {
        "id": "w3",
        "de": "die U-Bahn",
        "vi": "tàu điện ngầm",
        "ipa": "/diː ˈuːˌbaːn/",
        "syllables": [
          "die",
          "U",
          "Bahn"
        ],
        "notation": [
          40,
          60,
          80
        ]
      },
      {
        "id": "w4",
        "de": "die Straßenbahn",
        "vi": "tàu điện (trên mặt đất)",
        "ipa": "/diː ˈʃtraːsn̩ˌbaːn/",
        "syllables": [
          "die",
          "Stra",
          "ßen",
          "bahn"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w5",
        "de": "der Bus",
        "vi": "xe buýt",
        "ipa": "/dɛɐ̯ ˈbʊs/",
        "syllables": [
          "der",
          "Bus"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w6",
        "de": "das Fahrrad",
        "vi": "xe đạp",
        "ipa": "/das ˈfaːɐ̯ʁaːt/",
        "syllables": [
          "das",
          "Fahr",
          "rad"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "das Auto",
        "vi": "xe hơi",
        "ipa": "/das ˈaʊ̯toː/",
        "syllables": [
          "das",
          "Au",
          "to"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "fahren",
        "vi": "lái, đi (bằng phương tiện)",
        "ipa": "/ˈfaːʁən/",
        "syllables": [
          "fah",
          "ren"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "umsteigen",
        "vi": "chuyển (tàu, xe)",
        "ipa": "/ˈʊmˌʃtaɪ̯ɡn̩/",
        "syllables": [
          "um",
          "stei",
          "gen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w10",
        "de": "der Hauptbahnhof",
        "vi": "nhà ga chính",
        "ipa": "/dɛɐ̯ ˈhaʊ̯ptbaːnˌhoːf/",
        "syllables": [
          "der",
          "Haupt",
          "bahn",
          "hof"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w11",
        "de": "die Haltestelle",
        "vi": "trạm dừng (xe buýt, tàu điện)",
        "ipa": "/diː ˈhaltəˌʃtɛlə/",
        "syllables": [
          "die",
          "Hal",
          "te",
          "stel",
          "le"
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "w12",
        "de": "geradeaus",
        "vi": "thẳng tiến",
        "ipa": "/ɡəˈʁaːdəˌʔaʊ̯s/",
        "syllables": [
          "ge",
          "ra",
          "de",
          "aus"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w13",
        "de": "links",
        "vi": "bên trái",
        "ipa": "/lɪŋks/",
        "syllables": [
          "links"
        ],
        "notation": [
          80
        ]
      },
      {
        "id": "w14",
        "de": "rechts",
        "vi": "bên phải",
        "ipa": "/ʁɛçts/",
        "syllables": [
          "rechts"
        ],
        "notation": [
          80
        ]
      },
      {
        "id": "w15",
        "de": "weit",
        "vi": "xa",
        "ipa": "/vaɪ̯t/",
        "syllables": [
          "weit"
        ],
        "notation": [
          80
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Wie komme ich zum Hauptbahnhof?",
        "vi": "Làm thế nào để tôi đến được ga chính?",
        "ipa": "/viː ˈkɔmə ɪç t͡sʊm ˈhaʊ̯ptbaːnˌhoːf/",
        "syllables": [
          "Wie",
          "kom",
          "me",
          "ich",
          "zum",
          "Haupt",
          "bahn",
          "hof",
          "?"
        ],
        "notation": [
          60,
          80,
          40,
          40,
          40,
          80,
          40,
          60,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Nehmen Sie die U-Bahn Linie 3.",
        "vi": "Hãy đi tuyến tàu điện ngầm số 3.",
        "ipa": "/ˈneːmən ziː diː ˈuːˌbaːn ˈliːni̯ə dʁaɪ̯/",
        "syllables": [
          "Neh",
          "men",
          "Sie",
          "die",
          "U",
          "Bahn",
          "Li",
          "nie",
          "drei",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          40,
          60,
          80,
          80,
          40,
          80,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Fahren Sie zwei Stationen.",
        "vi": "Bạn hãy đi hai trạm.",
        "ipa": "/ˈfaːʁən ziː t͡svaɪ̯ ʃtaˈt͡sjoːnən/",
        "syllables": [
          "Fah",
          "ren",
          "Sie",
          "zwei",
          "Sta",
          "tio",
          "nen",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Steigen Sie am Marienplatz um.",
        "vi": "Bạn hãy chuyển xe ở Marienplatz.",
        "ipa": "/ˈʃtaɪ̯ɡn̩ ziː am maˈʁiːənˌplat͡s ʊm/",
        "syllables": [
          "Stei",
          "gen",
          "Sie",
          "am",
          "Ma",
          "ri",
          "en",
          "platz",
          "um",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          60,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Gehen Sie dann geradeaus.",
        "vi": "Sau đó bạn hãy đi thẳng.",
        "ipa": "/ˈɡeːən ziː dan ɡəˈʁaːdəˌʔaʊ̯s/",
        "syllables": [
          "Ge",
          "hen",
          "Sie",
          "dann",
          "ge",
          "ra",
          "de",
          "aus",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Das Museum ist auf der rechten Seite.",
        "vi": "Bảo tàng ở bên phải.",
        "ipa": "/das muˈzeːʊm ɪst aʊ̯f dɛɐ̯ ˈʁɛçtn̩ ˈzaɪ̯tə/",
        "syllables": [
          "Das",
          "Mu",
          "se",
          "um",
          "ist",
          "auf",
          "der",
          "rech",
          "ten",
          "Sei",
          "te",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Ist die Haltestelle weit von hier?",
        "vi": "Trạm dừng có xa đây không?",
        "ipa": "/ɪst diː ˈhaltəˌʃtɛlə vaɪ̯t fɔn hiːɐ̯/",
        "syllables": [
          "Ist",
          "die",
          "Hal",
          "te",
          "stel",
          "le",
          "weit",
          "von",
          "hier",
          "?"
        ],
        "notation": [
          40,
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          60,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Ich fahre lieber mit dem Fahrrad.",
        "vi": "Tôi thích đi xe đạp hơn.",
        "ipa": "/ɪç ˈfaːʁə ˈliːbɐ mɪt deːm ˈfaːɐ̯ʁaːt/",
        "syllables": [
          "Ich",
          "fah",
          "re",
          "lie",
          "ber",
          "mit",
          "dem",
          "Fahr",
          "rad",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Wo kann ich eine Fahrkarte kaufen?",
        "vi": "Tôi có thể mua vé ở đâu?",
        "ipa": "/voː kan ɪç ˈaɪ̯nə ˈfaːɐ̯kaʁtə ˈkaʊ̯fn̩/",
        "syllables": [
          "Wo",
          "kann",
          "ich",
          "ei",
          "ne",
          "Fahr",
          "kar",
          "te",
          "kau",
          "fen",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Der Bus kommt in zehn Minuten.",
        "vi": "Xe buýt sẽ đến trong mười phút nữa.",
        "ipa": "/dɛɐ̯ bʊs kɔmt ɪn t͡seːn ˈmɪnuːtn̩/",
        "syllables": [
          "Der",
          "Bus",
          "kommt",
          "in",
          "zehn",
          "Mi",
          "nu",
          "ten",
          "."
        ],
        "notation": [
          40,
          80,
          60,
          40,
          60,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Wir fliegen nächste Woche nach Berlin.",
        "vi": "Tuần tới chúng tôi bay đến Berlin.",
        "ipa": "/viːɐ̯ ˈfliːɡn̩ ˈnɛçstə ˈvɔxə naːx bɛʁˈliːn/",
        "syllables": [
          "Wir",
          "flie",
          "gen",
          "nächs",
          "te",
          "Wo",
          "che",
          "nach",
          "Ber",
          "lin",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Die Straßenbahn fährt durch die Stadtmitte.",
        "vi": "Tàu điện chạy xuyên qua trung tâm thành phố.",
        "ipa": "/diː ˈʃtraːsn̩ˌbaːn fɛːɐ̯t dʊʁç diː ˈʃtatˌmɪtə/",
        "syllables": [
          "Die",
          "Stra",
          "ßen",
          "bahn",
          "fährt",
          "durch",
          "die",
          "Stadt",
          "mit",
          "te",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          60,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Er parkt sein Auto vor dem Haus.",
        "vi": "Anh ấy đỗ xe hơi trước nhà.",
        "ipa": "/ɛɐ̯ paʁkt zaɪ̯n ˈaʊ̯toː foːɐ̯ deːm haʊ̯s/",
        "syllables": [
          "Er",
          "parkt",
          "sein",
          "Au",
          "to",
          "vor",
          "dem",
          "Haus",
          "."
        ],
        "notation": [
          40,
          80,
          60,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Die S-Bahn fährt direkt zum Flughafen.",
        "vi": "Tàu điện ngoại ô chạy thẳng đến sân bay.",
        "ipa": "/diː ˈɛsˌbaːn fɛːɐ̯t diˈʁɛkt t͡sʊm ˈfluːkˌhaːfn̩/",
        "syllables": [
          "Die",
          "S",
          "Bahn",
          "fährt",
          "di",
          "rekt",
          "zum",
          "Flu",
          "g",
          "ha",
          "fen",
          "."
        ],
        "notation": [
          40,
          60,
          80,
          60,
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Biegen Sie an der nächsten Ampel links ab.",
        "vi": "Bạn hãy rẽ trái ở đèn giao thông tiếp theo.",
        "ipa": "/ˈbiːɡn̩ ziː an dɛɐ̯ ˈnɛçstən ˈampəl lɪŋks ap/",
        "syllables": [
          "Bie",
          "gen",
          "Sie",
          "an",
          "der",
          "nächs",
          "ten",
          "Am",
          "pel",
          "links",
          "ab",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          80,
          60,
          0
        ]
      }
    ]
  },
  "l7": {
    "words": [
      {
        "id": "w1",
        "de": "der Pullover",
        "vi": "áo len",
        "ipa": "/dɛɐ̯ pʊˈloːvɐ/",
        "syllables": [
          "der",
          "Pu",
          "lo",
          "ver"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "die Hose",
        "vi": "quần",
        "ipa": "/diː ˈhoːzə/",
        "syllables": [
          "die",
          "Ho",
          "se"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "das Hemd",
        "vi": "áo sơ mi",
        "ipa": "/das hɛmt/",
        "syllables": [
          "das",
          "Hemd"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w4",
        "de": "der Rock",
        "vi": "chân váy",
        "ipa": "/dɛɐ̯ rɔk/",
        "syllables": [
          "der",
          "Rock"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w5",
        "de": "die Schuhe",
        "vi": "giày",
        "ipa": "/diː ˈʃuːə/",
        "syllables": [
          "die",
          "Schu",
          "he"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "anziehen",
        "vi": "mặc vào",
        "ipa": "/ˈanˌtsiːən/",
        "syllables": [
          "an",
          "zie",
          "hen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w7",
        "de": "ausziehen",
        "vi": "cởi ra",
        "ipa": "/ˈaʊ̯sˌtsiːən/",
        "syllables": [
          "aus",
          "zie",
          "hen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w8",
        "de": "anprobieren",
        "vi": "thử đồ",
        "ipa": "/ˈanpʁoˌbiːʁən/",
        "syllables": [
          "an",
          "pro",
          "bie",
          "ren"
        ],
        "notation": [
          60,
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "gefallen",
        "vi": "thích, làm hài lòng",
        "ipa": "/ɡəˈfalən/",
        "syllables": [
          "ge",
          "fal",
          "len"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "passen",
        "vi": "vừa vặn, phù hợp",
        "ipa": "/ˈpasən/",
        "syllables": [
          "pas",
          "sen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "stehen",
        "vi": "hợp (quần áo)",
        "ipa": "/ˈʃteːən/",
        "syllables": [
          "ste",
          "hen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "die Größe",
        "vi": "kích cỡ",
        "ipa": "/diː ˈɡʁøːsə/",
        "syllables": [
          "die",
          "Grö",
          "ße"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "die Farbe",
        "vi": "màu sắc",
        "ipa": "/diː ˈfaʁbə/",
        "syllables": [
          "die",
          "Far",
          "be"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "kaufen",
        "vi": "mua",
        "ipa": "/ˈkaʊ̯fən/",
        "syllables": [
          "kau",
          "fen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "teuer",
        "vi": "đắt",
        "ipa": "/ˈtɔɪ̯ɐ/",
        "syllables": [
          "teu",
          "er"
        ],
        "notation": [
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Ich möchte diesen Pullover anprobieren.",
        "vi": "Tôi muốn thử chiếc áo len này.",
        "ipa": "/ɪç ˈmœçtə ˈdiːzn̩ pʊˈloːvɐ ˈanpʁoˌbiːʁən/",
        "syllables": [
          "Ich",
          "möch",
          "te",
          "die",
          "sen",
          "Pu",
          "lo",
          "ver",
          "an",
          "pro",
          "bie",
          "ren",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Welche Größe haben Sie?",
        "vi": "Bạn mặc cỡ nào?",
        "ipa": "/ˈvɛlçə ˈɡʁøːsə ˈhaːbn̩ ziː/",
        "syllables": [
          "Wel",
          "che",
          "Grö",
          "ße",
          "ha",
          "ben",
          "Sie",
          "?"
        ],
        "notation": [
          80,
          40,
          60,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Die Hose ist mir zu eng.",
        "vi": "Chiếc quần này quá chật với tôi.",
        "ipa": "/diː ˈhoːzə ɪst miːɐ̯ tsuː ɛŋ/",
        "syllables": [
          "Die",
          "Ho",
          "se",
          "ist",
          "mir",
          "zu",
          "eng",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          80,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Das Hemd gefällt mir sehr gut.",
        "vi": "Tôi rất thích chiếc áo sơ mi này.",
        "ipa": "/das hɛmt ɡəˈfɛlt miːɐ̯ zeːɐ̯ ɡuːt/",
        "syllables": [
          "Das",
          "Hemd",
          "ge",
          "fällt",
          "mir",
          "sehr",
          "gut",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          40,
          60,
          80,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Steht mir dieser Rock?",
        "vi": "Chiếc chân váy này có hợp với tôi không?",
        "ipa": "/ʃteːt miːɐ̯ ˈdiːzɐ rɔk/",
        "syllables": [
          "Steht",
          "mir",
          "die",
          "ser",
          "Rock",
          "?"
        ],
        "notation": [
          80,
          40,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Ich kaufe neue Schuhe für den Winter.",
        "vi": "Tôi mua giày mới cho mùa đông.",
        "ipa": "/ɪç ˈkaʊ̯fə ˈnɔɪ̯ə ˈʃuːə fyːɐ̯ deːn ˈvɪntɐ/",
        "syllables": [
          "Ich",
          "kau",
          "fe",
          "neu",
          "e",
          "Schu",
          "he",
          "für",
          "den",
          "Win",
          "ter",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Soll ich den Mantel anziehen oder ausziehen?",
        "vi": "Tôi nên mặc áo khoác vào hay cởi ra?",
        "ipa": "/zɔl ɪç deːn ˈmantl̩ ˈanˌtsiːən ˈoːdɐ ˈaʊ̯sˌtsiːən/",
        "syllables": [
          "Soll",
          "ich",
          "den",
          "Man",
          "tel",
          "an",
          "zie",
          "hen",
          "o",
          "der",
          "aus",
          "zie",
          "hen",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Diese Jacke passt dir perfekt.",
        "vi": "Chiếc áo khoác này vừa vặn với bạn một cách hoàn hảo.",
        "ipa": "/ˈdiːzə ˈjakə past diːɐ̯ pɛʁˈfɛkt/",
        "syllables": [
          "Die",
          "se",
          "Ja",
          "cke",
          "passt",
          "dir",
          "per",
          "fekt",
          "."
        ],
        "notation": [
          80,
          40,
          60,
          40,
          40,
          40,
          60,
          80,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Was ist Ihre Lieblingsfarbe?",
        "vi": "Màu sắc yêu thích của bạn là gì?",
        "ipa": "/vas ɪst ˈiːʁə ˈliːplɪŋsˌfaʁbə/",
        "syllables": [
          "Was",
          "ist",
          "Ih",
          "re",
          "Lieb",
          "lings",
          "far",
          "be",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Ich finde, das Kleid ist zu teuer.",
        "vi": "Tôi thấy chiếc váy này quá đắt.",
        "ipa": "/ɪç ˈfɪndə das klaɪ̯t ɪst tsuː ˈtɔɪ̯ɐ/",
        "syllables": [
          "Ich",
          "fin",
          "de",
          ",",
          "das",
          "Kleid",
          "ist",
          "zu",
          "teu",
          "er",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          0,
          40,
          60,
          40,
          60,
          80,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Können Sie mir bitte helfen?",
        "vi": "Bạn có thể giúp tôi được không?",
        "ipa": "/ˈkœnən ziː miːɐ̯ ˈbɪtə ˈhɛlfn̩/",
        "syllables": [
          "Kön",
          "nen",
          "Sie",
          "mir",
          "bit",
          "te",
          "hel",
          "fen",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Wo sind die Umkleidekabinen?",
        "vi": "Phòng thử đồ ở đâu?",
        "ipa": "/voː zɪnt diː ˈʊmklaɪ̯dəkabiːnən/",
        "syllables": [
          "Wo",
          "sind",
          "die",
          "Um",
          "klei",
          "de",
          "ka",
          "bi",
          "nen",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Dieses T-Shirt ist aus Baumwolle.",
        "vi": "Chiếc áo phông này làm từ vải cotton.",
        "ipa": "/ˈdiːzəs tiːʃœrt ɪst aʊ̯s ˈbaʊ̯mvɔlə/",
        "syllables": [
          "Die",
          "ses",
          "T-",
          "Shirt",
          "ist",
          "aus",
          "Baum",
          "wol",
          "le",
          "."
        ],
        "notation": [
          80,
          40,
          60,
          40,
          40,
          60,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Ich brauche einen größeren Pullover.",
        "vi": "Tôi cần một chiếc áo len lớn hơn.",
        "ipa": "/ɪç ˈbʁaʊ̯xə ˈaɪ̯nən ˈɡʁøːsəʁən pʊˈloːvɐ/",
        "syllables": [
          "Ich",
          "brau",
          "che",
          "ei",
          "nen",
          "grö",
          "ße",
          "ren",
          "Pu",
          "lo",
          "ver",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Die Verkäuferin war sehr freundlich.",
        "vi": "Cô bán hàng rất thân thiện.",
        "ipa": "/diː fɛɐ̯ˈkɔɪ̯fəʁɪn vaːɐ̯ zeːɐ̯ ˈfʁɔɪ̯ntlɪç/",
        "syllables": [
          "Die",
          "Ver",
          "käu",
          "fe",
          "rin",
          "war",
          "sehr",
          "freund",
          "lich",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          80,
          40,
          0
        ]
      }
    ]
  },
  "l9": {
    "words": [
      {
        "id": "w1",
        "de": "der Kopfschmerz",
        "vi": "đau đầu",
        "ipa": "/dɛɐ̯ ˈkɔp͡fʃmɛɐ̯t͡s/",
        "syllables": [
          "der",
          "Kopf",
          "schmerz"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "der Husten",
        "vi": "ho",
        "ipa": "/dɛɐ̯ ˈhuːstn̩/",
        "syllables": [
          "der",
          "Hus",
          "ten"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "das Fieber",
        "vi": "sốt",
        "ipa": "/das ˈfiːbɐ/",
        "syllables": [
          "das",
          "Fie",
          "ber"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "der Schnupfen",
        "vi": "sổ mũi/cảm lạnh",
        "ipa": "/dɛɐ̯ ˈʃnʊp͡fn̩/",
        "syllables": [
          "der",
          "Schnup",
          "fen"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "der Halsschmerz",
        "vi": "đau họng",
        "ipa": "/dɛɐ̯ ˈhalʃmɛɐ̯t͡s/",
        "syllables": [
          "der",
          "Hals",
          "schmerz"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "krank",
        "vi": "ốm/bị bệnh",
        "ipa": "/kʁaŋk/",
        "syllables": [
          "krank"
        ],
        "notation": [
          80
        ]
      },
      {
        "id": "w7",
        "de": "gesund",
        "vi": "khỏe mạnh",
        "ipa": "/ɡəˈzʊnt/",
        "syllables": [
          "ge",
          "sund"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w8",
        "de": "der Arzt",
        "vi": "bác sĩ",
        "ipa": "/dɛɐ̯ aʁt͡st/",
        "syllables": [
          "der",
          "Arzt"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w9",
        "de": "die Apotheke",
        "vi": "hiệu thuốc",
        "ipa": "/diː apoˈteːkə/",
        "syllables": [
          "die",
          "A",
          "po",
          "the",
          "ke"
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "das Medikament",
        "vi": "thuốc",
        "ipa": "/das medi.kaˈmɛnt/",
        "syllables": [
          "das",
          "Me",
          "di",
          "ka",
          "ment"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "w11",
        "de": "die Tablette",
        "vi": "viên thuốc",
        "ipa": "/diː taˈblɛtə/",
        "syllables": [
          "die",
          "Ta",
          "blet",
          "te"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "wehtun (tut weh)",
        "vi": "đau/làm đau",
        "ipa": "/ˈveːˌtuːn/",
        "syllables": [
          "weh",
          "tun"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "sich fühlen",
        "vi": "cảm thấy",
        "ipa": "/zɪç ˈfyːlən/",
        "syllables": [
          "sich",
          "füh",
          "len"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "die Grippe",
        "vi": "bệnh cúm",
        "ipa": "/diː ˈɡʁɪpə/",
        "syllables": [
          "die",
          "Grip",
          "pe"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "müde",
        "vi": "mệt mỏi",
        "ipa": "/ˈmyːdə/",
        "syllables": [
          "mü",
          "de"
        ],
        "notation": [
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Ich habe Kopfschmerzen.",
        "vi": "Tôi bị đau đầu.",
        "ipa": "/ɪç ˈhaːbə ˈkɔp͡fʃmɛʁt͡sn̩/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "Kopf",
          "schmer",
          "zen",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Was tut dir weh?",
        "vi": "Bạn bị đau ở đâu?",
        "ipa": "/vas tuːt diːɐ̯ ˈveː/",
        "syllables": [
          "Was",
          "tut",
          "dir",
          "weh",
          "?"
        ],
        "notation": [
          60,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Mir tut der Bauch weh.",
        "vi": "Tôi bị đau bụng.",
        "ipa": "/miːɐ̯ tuːt dɛɐ̯ baʊ̯x ˈveː/",
        "syllables": [
          "Mir",
          "tut",
          "der",
          "Bauch",
          "weh",
          "."
        ],
        "notation": [
          60,
          40,
          40,
          80,
          80,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Ich habe Husten und Fieber.",
        "vi": "Tôi bị ho và sốt.",
        "ipa": "/ɪç ˈhaːbə ˈhuːstn̩ ʊnt ˈfiːbɐ/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "Hus",
          "ten",
          "und",
          "Fie",
          "ber",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Du solltest zum Arzt gehen.",
        "vi": "Bạn nên đi khám bác sĩ.",
        "ipa": "/duː ˈzɔltəst t͡sʊm aʁt͡st ˈɡeːən/",
        "syllables": [
          "Du",
          "soll",
          "test",
          "zum",
          "Arzt",
          "geh",
          "en",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          60,
          40,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Geh ins Bett und ruh dich aus!",
        "vi": "Hãy đi ngủ và nghỉ ngơi đi!",
        "ipa": "/ɡeː ɪns bɛt ʊnt ʁuː dɪç aʊ̯s/",
        "syllables": [
          "Geh",
          "ins",
          "Bett",
          "und",
          "ruh",
          "dich",
          "aus",
          "!"
        ],
        "notation": [
          60,
          40,
          80,
          40,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Trink viel Tee mit Honig!",
        "vi": "Hãy uống nhiều trà với mật ong!",
        "ipa": "/tʁɪŋk fiːl teː mɪt ˈhoːnɪç/",
        "syllables": [
          "Trink",
          "viel",
          "Tee",
          "mit",
          "Ho",
          "nig",
          "!"
        ],
        "notation": [
          60,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Nimm eine Tablette gegen Fieber.",
        "vi": "Hãy uống một viên thuốc hạ sốt.",
        "ipa": "/nɪm ˈaɪ̯nə taˈblɛtə ˈɡeːɡn̩ ˈfiːbɐ/",
        "syllables": [
          "Nimm",
          "ei",
          "ne",
          "Ta",
          "blet",
          "te",
          "ge",
          "gen",
          "Fie",
          "ber",
          "."
        ],
        "notation": [
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Ich fühle mich nicht gut.",
        "vi": "Tôi cảm thấy không khỏe.",
        "ipa": "/ɪç ˈfyːlə mɪç nɪçt ˈɡuːt/",
        "syllables": [
          "Ich",
          "füh",
          "le",
          "mich",
          "nicht",
          "gut",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Er ist sehr krank und hat Grippe.",
        "vi": "Anh ấy bị ốm nặng và bị cúm.",
        "ipa": "/eːɐ̯ ɪst zeːɐ̯ kʁaŋk ʊnt hat ˈɡʁɪpə/",
        "syllables": [
          "Er",
          "ist",
          "sehr",
          "krank",
          "und",
          "hat",
          "Grip",
          "pe",
          "."
        ],
        "notation": [
          40,
          40,
          60,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Sie muss in der Apotheke Medikamente kaufen.",
        "vi": "Cô ấy phải mua thuốc ở hiệu thuốc.",
        "ipa": "/ziː mʊs ɪn dɛɐ̯ apoˈteːkə medikaˈmɛntə ˈkaʊ̯fn̩/",
        "syllables": [
          "Sie",
          "muss",
          "in",
          "der",
          "A",
          "po",
          "the",
          "ke",
          "Me",
          "di",
          "ka",
          "men",
          "te",
          "kauf",
          "en",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Hoffentlich bist du bald wieder gesund!",
        "vi": "Hy vọng bạn sẽ sớm khỏe lại!",
        "ipa": "/ˈhɔfn̩tlɪç bɪst duː balt ˈviːdɐ ɡəˈzʊnt/",
        "syllables": [
          "Hoff",
          "ent",
          "lich",
          "bist",
          "du",
          "bald",
          "wie",
          "der",
          "ge",
          "sund",
          "!"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          60,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Ich bin so müde und habe Halsschmerzen.",
        "vi": "Tôi rất mệt và bị đau họng.",
        "ipa": "/ɪç bɪn zoː ˈmyːdə ʊnt ˈhaːbə ˈhalʃmɛʁt͡sn̩/",
        "syllables": [
          "Ich",
          "bin",
          "so",
          "mü",
          "de",
          "und",
          "ha",
          "be",
          "Hals",
          "schmer",
          "zen",
          "."
        ],
        "notation": [
          40,
          40,
          60,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Hast du Schnupfen oder eine Erkältung?",
        "vi": "Bạn bị sổ mũi hay cảm lạnh?",
        "ipa": "/hast duː ˈʃnʊp͡fn̩ ˈoːdɐ ˈaɪ̯nə ɛɐ̯ˈkɛltʊŋ/",
        "syllables": [
          "Hast",
          "du",
          "Schnup",
          "fen",
          "o",
          "der",
          "ei",
          "ne",
          "Er",
          "käl",
          "tung",
          "?"
        ],
        "notation": [
          60,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Ich gehe zum Arzt, weil ich starke Schmerzen habe.",
        "vi": "Tôi đi khám bác sĩ vì tôi bị đau nặng.",
        "ipa": "/ɪç ˈɡeːə t͡sʊm aʁt͡st vaɪ̯l ɪç ˈʃtaʁkə ˈʃmɛʁt͡sn̩ ˈhaːbə/",
        "syllables": [
          "Ich",
          "ge",
          "he",
          "zum",
          "Arzt",
          ",",
          "weil",
          "ich",
          "star",
          "ke",
          "Schmer",
          "zen",
          "ha",
          "be",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          80,
          0,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          0
        ]
      }
    ]
  },
  "l14": {
    "words": [
      {
        "id": "w1",
        "de": "die Fahrkarte",
        "vi": "vé xe/vé tàu",
        "ipa": "/diːˈfaːɐ̯kaʁtə/",
        "syllables": [
          "die",
          "Fahr",
          "kar",
          "te"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w2",
        "de": "der Bahnsteig",
        "vi": "sân ga",
        "ipa": "/deːɐ̯ˈbaːnʃtaɪ̯k/",
        "syllables": [
          "der",
          "Bahn",
          "steig"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "umsteigen",
        "vi": "đổi tàu/xe",
        "ipa": "/ˈʊmʃtaɪ̯ɡn̩/",
        "syllables": [
          "um",
          "stei",
          "gen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w4",
        "de": "abfahren",
        "vi": "khởi hành",
        "ipa": "/ˈapfaːʁən/",
        "syllables": [
          "ab",
          "fah",
          "ren"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w5",
        "de": "ankommen",
        "vi": "đến nơi",
        "ipa": "/ˈankɔmən/",
        "syllables": [
          "an",
          "kom",
          "men"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w6",
        "de": "das Gleis",
        "vi": "đường ray/số hiệu sân ga",
        "ipa": "/dasˈɡlaɪ̯s/",
        "syllables": [
          "das",
          "Gleis"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w7",
        "de": "die Verspätung",
        "vi": "sự chậm trễ",
        "ipa": "/diːfɛɐ̯ˈʃpɛːtʊŋ/",
        "syllables": [
          "die",
          "Ver",
          "spä",
          "tung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "der Anschluss",
        "vi": "chuyến nối/kết nối",
        "ipa": "/deːɐ̯ˈanʃlʊs/",
        "syllables": [
          "der",
          "An",
          "schluss"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "die U-Bahn",
        "vi": "tàu điện ngầm",
        "ipa": "/diːˈuːbaːn/",
        "syllables": [
          "die",
          "U-",
          "Bahn"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "das Flugzeug",
        "vi": "máy bay",
        "ipa": "/dasˈfluːktsɔɪ̯k/",
        "syllables": [
          "das",
          "Flug",
          "zeug"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "der Schalter",
        "vi": "quầy (bán vé/thông tin)",
        "ipa": "/deːɐ̯ˈʃaltɐ/",
        "syllables": [
          "der",
          "Schal",
          "ter"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "buchen",
        "vi": "đặt (vé/phòng)",
        "ipa": "/ˈbuːxn̩/",
        "syllables": [
          "bu",
          "chen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "pünktlich",
        "vi": "đúng giờ",
        "ipa": "/ˈpʏnktlɪç/",
        "syllables": [
          "pünkt",
          "lich"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "das Reisebüro",
        "vi": "công ty du lịch",
        "ipa": "/dasˈʁaɪ̯zəbyˌʁoː/",
        "syllables": [
          "das",
          "Rei",
          "se",
          "bü",
          "ro"
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "w15",
        "de": "der Fahrplan",
        "vi": "lịch trình/thời gian biểu",
        "ipa": "/deːɐ̯ˈfaːɐ̯plaːn/",
        "syllables": [
          "der",
          "Fahr",
          "plan"
        ],
        "notation": [
          40,
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Ich brauche eine Fahrkarte nach Berlin.",
        "vi": "Tôi cần một vé đi Berlin.",
        "ipa": "/ɪçˈbraʊ̯xəˈaɪ̯nəˈfaːɐ̯kaʁtənaχbɛɐ̯ˈliːn/",
        "syllables": [
          "Ich",
          "brau",
          "che",
          "ei",
          "ne",
          "Fahr",
          "kar",
          "te",
          "nach",
          "Ber",
          "lin",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Wir müssen auf Gleis 3 warten.",
        "vi": "Chúng ta phải đợi ở sân ga số 3.",
        "ipa": "/viːɐ̯ˈmʏsn̩aʊ̯fˈɡlaɪ̯sˌdʁaɪ̯ˈvaʁtn̩/",
        "syllables": [
          "Wir",
          "müs",
          "sen",
          "auf",
          "Gleis",
          "drei",
          "war",
          "ten",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          60,
          80,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Wo müssen wir umsteigen?",
        "vi": "Chúng ta phải đổi tàu/xe ở đâu?",
        "ipa": "/voːˈmʏsn̩viːɐ̯ˈʊmʃtaɪ̯ɡn̩/",
        "syllables": [
          "Wo",
          "müs",
          "sen",
          "wir",
          "um",
          "stei",
          "gen",
          "?"
        ],
        "notation": [
          60,
          80,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Der Zug fährt um 8:30 Uhr ab.",
        "vi": "Chuyến tàu khởi hành lúc 8 giờ 30 phút.",
        "ipa": "/deːɐ̯ˈtsuːkˌfɛːɐ̯tʊmˌaxtˈdʁaɪ̯sɪçˈuːɐ̯ˈap/",
        "syllables": [
          "Der",
          "Zug",
          "fährt",
          "um",
          "acht",
          "drei",
          "ßig",
          "Uhr",
          "ab",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Wann kommt der Bus in München an?",
        "vi": "Khi nào xe buýt đến Munich?",
        "ipa": "/vanˈkɔmtdeːɐ̯bʊsɪnˈmʏnçənˈan/",
        "syllables": [
          "Wann",
          "kommt",
          "der",
          "Bus",
          "in",
          "Mün",
          "chen",
          "an",
          "?"
        ],
        "notation": [
          60,
          80,
          40,
          60,
          40,
          80,
          40,
          80,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Entschuldigung, hat der Zug Verspätung?",
        "vi": "Xin lỗi, tàu có bị chậm không?",
        "ipa": "/ɛntˈʃʊldɪɡʊŋhaːtdeːɐ̯tsuːkfɛɐ̯ˈʃpɛːtʊŋ/",
        "syllables": [
          "Ent",
          "schul",
          "di",
          "gung,",
          "hat",
          "der",
          "Zug",
          "Ver",
          "spä",
          "tung",
          "?"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Haben wir einen guten Anschluss nach Hamburg?",
        "vi": "Chúng ta có chuyến nối tốt đến Hamburg không?",
        "ipa": "/ˈhaːbn̩viːɐ̯ˈaɪ̯nənguːtn̩ˈanʃlʊsnaχˈhambʊʁk/",
        "syllables": [
          "Ha",
          "ben",
          "wir",
          "ei",
          "nen",
          "gu",
          "ten",
          "An",
          "schluss",
          "nach",
          "Ham",
          "burg",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Die U-Bahn fährt alle fünf Minuten.",
        "vi": "Tàu điện ngầm chạy cứ mỗi năm phút một chuyến.",
        "ipa": "/diːˈuːbaːnfɛːɐ̯tˌaləfʏnfˈmɪnuːtn̩/",
        "syllables": [
          "Die",
          "U-",
          "Bahn",
          "fährt",
          "al",
          "le",
          "fünf",
          "Mi",
          "nu",
          "ten",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          60,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Ich fliege nächste Woche mit dem Flugzeug.",
        "vi": "Tuần tới tôi bay bằng máy bay.",
        "ipa": "/ɪçˈfliːɡənɛçstəˈvɔxəmɪtdɛmˈfluːktsɔɪ̯k/",
        "syllables": [
          "Ich",
          "flie",
          "ge",
          "nächs",
          "te",
          "Wo",
          "che",
          "mit",
          "dem",
          "Flug",
          "zeug",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Sie können die Tickets am Schalter kaufen.",
        "vi": "Bạn có thể mua vé ở quầy.",
        "ipa": "/ziːˈkœnəndiːˈtɪkɛtsamˈʃaltɐkaʊ̯fn̩/",
        "syllables": [
          "Sie",
          "kön",
          "nen",
          "die",
          "Ti",
          "ckets",
          "am",
          "Schal",
          "ter",
          "kau",
          "fen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Ich möchte einen Flug nach Rom buchen.",
        "vi": "Tôi muốn đặt một chuyến bay đến Rome.",
        "ipa": "/ɪçˈmœçtəˈaɪ̯nənfluːknaχˈʁoːmbuːxn̩/",
        "syllables": [
          "Ich",
          "möch",
          "te",
          "ei",
          "nen",
          "Flug",
          "nach",
          "Rom",
          "bu",
          "chen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          80,
          80,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Ist der Zug heute pünktlich?",
        "vi": "Hôm nay tàu có đúng giờ không?",
        "ipa": "/ɪstdeːɐ̯tsuːkˈhɔɪ̯təˈpʏnktlɪç/",
        "syllables": [
          "Ist",
          "der",
          "Zug",
          "heu",
          "te",
          "pünkt",
          "lich",
          "?"
        ],
        "notation": [
          40,
          40,
          60,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Das Reisebüro hat gute Angebote für Flüge.",
        "vi": "Công ty du lịch có những ưu đãi tốt cho các chuyến bay.",
        "ipa": "/dasˈʁaɪ̯zəbyˌʁoːhaːtˈɡuːtəˈanɡəboːtəfyːɐ̯ˈflyːɡə/",
        "syllables": [
          "Das",
          "Rei",
          "se",
          "bü",
          "ro",
          "hat",
          "gu",
          "te",
          "An",
          "ge",
          "bo",
          "te",
          "für",
          "Flü",
          "ge",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Ich muss den Fahrplan überprüfen.",
        "vi": "Tôi cần kiểm tra lịch trình.",
        "ipa": "/ɪçmʊsdɛnˈfaːɐ̯plaːnˌyːbɐˈpʁyːfn̩/",
        "syllables": [
          "Ich",
          "muss",
          "den",
          "Fahr",
          "plan",
          "über",
          "prü",
          "fen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Fahren wir mit dem Taxi zum Flughafen?",
        "vi": "Chúng ta đi taxi đến sân bay nhé?",
        "ipa": "/ˈfaːʁənviːɐ̯mɪtdɛmˈtaksiːtsʊmˈfluːkhaːfn̩/",
        "syllables": [
          "Fah",
          "ren",
          "wir",
          "mit",
          "dem",
          "Ta",
          "xi",
          "zum",
          "Flug",
          "ha",
          "fen",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      }
    ]
  },
  "l16": {
    "words": [
      {
        "id": "w1",
        "de": "die Wahl",
        "vi": "cuộc bầu cử",
        "ipa": "/diː vaːl/",
        "syllables": [
          "die",
          "Wahl"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w2",
        "de": "wählen",
        "vi": "bầu cử, lựa chọn",
        "ipa": "/vɛːlən/",
        "syllables": [
          "wäh",
          "len"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "der Politiker",
        "vi": "chính trị gia (nam)",
        "ipa": "/deːɐ poliːtɪkɐ/",
        "syllables": [
          "der",
          "Po",
          "li",
          "ti",
          "ker"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40
        ]
      },
      {
        "id": "w4",
        "de": "die Partei",
        "vi": "đảng (chính trị)",
        "ipa": "/diː paʁˈtaɪ/",
        "syllables": [
          "die",
          "Par",
          "tei"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w5",
        "de": "die Regierung",
        "vi": "chính phủ",
        "ipa": "/diː ʁeˈɡiːʁʊŋ/",
        "syllables": [
          "die",
          "Re",
          "gie",
          "rung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "das Gesetz",
        "vi": "luật",
        "ipa": "/das ɡəˈzɛt͡s/",
        "syllables": [
          "das",
          "Ge",
          "setz"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w7",
        "de": "der Bürger",
        "vi": "công dân (nam)",
        "ipa": "/deːɐ bʏʁɡɐ/",
        "syllables": [
          "der",
          "Bür",
          "ger"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "der Umweltschutz",
        "vi": "bảo vệ môi trường",
        "ipa": "/deːɐ ˈʊmvɛltʃʊt͡s/",
        "syllables": [
          "der",
          "Um",
          "welt",
          "schutz"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w9",
        "de": "die Gerechtigkeit",
        "vi": "công lý, sự công bằng",
        "ipa": "/diː ɡəˈʁɛçtɪçkaɪt/",
        "syllables": [
          "die",
          "Ge",
          "rech",
          "tig",
          "keit"
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w10",
        "de": "diskutieren",
        "vi": "thảo luận",
        "ipa": "/dɪskuˈtiːʁən/",
        "syllables": [
          "dis",
          "ku",
          "tie",
          "ren"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "die Meinung",
        "vi": "ý kiến",
        "ipa": "/diː maɪnʊŋ/",
        "syllables": [
          "die",
          "Mei",
          "nung"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "informieren",
        "vi": "thông báo, cung cấp thông tin",
        "ipa": "/ɪnfɔʁˈmiːʁən/",
        "syllables": [
          "in",
          "for",
          "mie",
          "ren"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "kritisch",
        "vi": "phê phán, có tính chất phê bình",
        "ipa": "/kʁiːtɪʃ/",
        "syllables": [
          "kri",
          "tisch"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "die Nachrichten (Pl.)",
        "vi": "tin tức",
        "ipa": "/diː naːxʁɪçtən/",
        "syllables": [
          "die",
          "Nach",
          "rich",
          "ten"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w15",
        "de": "entscheiden",
        "vi": "quyết định",
        "ipa": "/ɛntˈʃaɪdən/",
        "syllables": [
          "ent",
          "schei",
          "den"
        ],
        "notation": [
          40,
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Jeder Bürger sollte sein Wahlrecht nutzen.",
        "vi": "Mỗi công dân nên thực hiện quyền bầu cử của mình.",
        "ipa": "/jeːdɐ bʏʁɡɐ zɔltə zaɪn vaːlʁɛçt nʊt͡sn̩/",
        "syllables": [
          "Je",
          "der",
          "Bür",
          "ger",
          "soll",
          "te",
          "sein",
          "Wahl",
          "recht",
          "nut",
          "zen",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          60,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Welche Partei würden Sie wählen, wenn Sie dürften?",
        "vi": "Bạn sẽ chọn đảng nào nếu bạn được phép?",
        "ipa": "/vɛlçə paʁˈtaɪ vʏʁdn̩ ziː vɛːlən vɛn ziː dʏʁftn̩/",
        "syllables": [
          "Wel",
          "che",
          "Par",
          "tei",
          "wür",
          "den",
          "Sie",
          "wäh",
          "len",
          ",",
          "wenn",
          "Sie",
          "dürf",
          "ten",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Die Politiker müssen auf die Bürger hören.",
        "vi": "Các chính trị gia phải lắng nghe công dân.",
        "ipa": "/diː poliːtɪkɐ mʏsn̩ aʊf diː bʏʁɡɐ høːʁən/",
        "syllables": [
          "Die",
          "Po",
          "li",
          "ti",
          "ker",
          "müs",
          "sen",
          "auf",
          "die",
          "Bür",
          "ger",
          "hö",
          "ren",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Ich würde mir mehr Umweltschutz wünschen.",
        "vi": "Tôi sẽ mong muốn có nhiều biện pháp bảo vệ môi trường hơn.",
        "ipa": "/ɪç vʏʁdə miːɐ̯ meːɐ̯ ˈʊmvɛltʃʊt͡s vʏnʃn̩/",
        "syllables": [
          "Ich",
          "wür",
          "de",
          "mir",
          "mehr",
          "Um",
          "welt",
          "schutz",
          "wün",
          "schen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          80,
          40,
          60,
          80,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Ist die neue Regierung schon gewählt?",
        "vi": "Chính phủ mới đã được bầu cử chưa?",
        "ipa": "/ɪst diː nɔɪ̯ə ʁeˈɡiːʁʊŋ ʃoːn ɡəˈvɛːlt/",
        "syllables": [
          "Ist",
          "die",
          "neu",
          "e",
          "Re",
          "gie",
          "rung",
          "schon",
          "ge",
          "wählt",
          "?"
        ],
        "notation": [
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Es ist wichtig, kritisch zu denken.",
        "vi": "Điều quan trọng là phải suy nghĩ một cách phê phán.",
        "ipa": "/ɛs ɪst vɪçtɪç kʁiːtɪʃ t͡suː dɛŋkn̩/",
        "syllables": [
          "Es",
          "ist",
          "wich",
          "tig",
          ",",
          "kri",
          "tisch",
          "zu",
          "den",
          "ken",
          "."
        ],
        "notation": [
          40,
          80,
          80,
          40,
          0,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Haben Sie die Nachrichten von heute gehört?",
        "vi": "Bạn đã nghe tin tức hôm nay chưa?",
        "ipa": "/haːbn̩ ziː diː naːxʁɪçtən fɔn hɔɪ̯tə ɡəˈhøːɐ̯t/",
        "syllables": [
          "Ha",
          "ben",
          "Sie",
          "die",
          "Nach",
          "rich",
          "ten",
          "von",
          "heu",
          "te",
          "ge",
          "hört",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Wir sollten über soziale Gerechtigkeit diskutieren.",
        "vi": "Chúng ta nên thảo luận về công bằng xã hội.",
        "ipa": "/viːɐ̯ zɔltn̩ yːbɐ zoːtsjaːlə ɡəˈʁɛçtɪçkaɪt dɪskuˈtiːʁən/",
        "syllables": [
          "Wir",
          "soll",
          "ten",
          "ü",
          "ber",
          "so",
          "zia",
          "le",
          "Ge",
          "rech",
          "tig",
          "keit",
          "dis",
          "ku",
          "tie",
          "ren",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Das neue Gesetz tritt nächste Woche in Kraft.",
        "vi": "Luật mới sẽ có hiệu lực vào tuần tới.",
        "ipa": "/das nɔɪ̯ə ɡəˈzɛt͡s tʁɪt nɛçstə vɔxə ɪn kʁaft/",
        "syllables": [
          "Das",
          "neu",
          "e",
          "Ge",
          "setz",
          "tritt",
          "nächs",
          "te",
          "Wo",
          "che",
          "in",
          "Kraft",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          80,
          80,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Man sollte sich gut informieren, bevor man eine Entscheidung trifft.",
        "vi": "Người ta nên tự tìm hiểu kỹ trước khi đưa ra quyết định.",
        "ipa": "/man zɔltə zɪç ɡuːt ɪnfɔʁˈmiːʁən bəˈfoːɐ̯ man aɪ̯nə ɛntˈʃaɪdʊŋ tʁɪft/",
        "syllables": [
          "Man",
          "soll",
          "te",
          "sich",
          "gut",
          "in",
          "for",
          "mie",
          "ren",
          ",",
          "be",
          "vor",
          "man",
          "ei",
          "ne",
          "Ent",
          "schei",
          "dung",
          "trifft",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          0,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Meine Meinung ist, dass Bildung sehr wichtig ist.",
        "vi": "Ý kiến của tôi là giáo dục rất quan trọng.",
        "ipa": "/maɪ̯nə maɪnʊŋ ɪst das bɪldʊŋ zeːɐ̯ vɪçtɪç ɪst/",
        "syllables": [
          "Mei",
          "ne",
          "Mei",
          "nung",
          "ist",
          ",",
          "dass",
          "Bil",
          "dung",
          "sehr",
          "wich",
          "tig",
          "ist",
          "."
        ],
        "notation": [
          80,
          40,
          80,
          40,
          80,
          0,
          40,
          80,
          40,
          80,
          80,
          40,
          80,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Was würden Sie tun, um die Situation zu verbessern?",
        "vi": "Bạn sẽ làm gì để cải thiện tình hình?",
        "ipa": "/vas vʏʁdn̩ ziː tuːn ʊm diː zɪtu̯aˈt͡sjoːn t͡suː fɛʁˈbɛsɐn/",
        "syllables": [
          "Was",
          "wür",
          "den",
          "Sie",
          "tun",
          ",",
          "um",
          "die",
          "Si",
          "tua",
          "tion",
          "zu",
          "ver",
          "bes",
          "sern",
          "?"
        ],
        "notation": [
          80,
          80,
          40,
          40,
          80,
          0,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Die Wahlen finden im Herbst statt.",
        "vi": "Cuộc bầu cử diễn ra vào mùa thu.",
        "ipa": "/diː vaːlən fɪndn̩ ɪm hɛʁpst ʃtat/",
        "syllables": [
          "Die",
          "Wah",
          "len",
          "fin",
          "den",
          "im",
          "Herbst",
          "statt",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          80,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Viele Menschen würden gerne eine bessere Zukunft sehen.",
        "vi": "Nhiều người mong muốn được thấy một tương lai tốt đẹp hơn.",
        "ipa": "/fiːlə mɛnʃn̩ vʏʁdn̩ ɡɛʁnə aɪ̯nə bɛsəʁə t͡suːkʊnft zeːən/",
        "syllables": [
          "Vie",
          "le",
          "Men",
          "schen",
          "wür",
          "den",
          "ger",
          "ne",
          "ei",
          "ne",
          "bes",
          "se",
          "re",
          "Zu",
          "kunft",
          "se",
          "hen",
          "."
        ],
        "notation": [
          80,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Es ist schwierig, alle über die Fakten zu informieren.",
        "vi": "Thật khó để thông báo cho tất cả mọi người về các sự thật.",
        "ipa": "/ɛs ɪst ʃviːʁɪç alə yːbɐ diː faktn̩ t͡suː ɪnfɔʁˈmiːʁən/",
        "syllables": [
          "Es",
          "ist",
          "schwie",
          "rig",
          ",",
          "al",
          "le",
          "ü",
          "ber",
          "die",
          "Fak",
          "ten",
          "zu",
          "in",
          "for",
          "mie",
          "ren",
          "."
        ],
        "notation": [
          40,
          80,
          80,
          40,
          0,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      }
    ]
  },
  "l17": {
    "words": [
      {
        "id": "w1",
        "de": "Zukunft",
        "vi": "Tương lai",
        "ipa": "/ˈtsuːkʊnft/",
        "syllables": [
          "Zu",
          "kunft"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "Umweltschutz",
        "vi": "Bảo vệ môi trường",
        "ipa": "/ˈʊmvɛltʃʊts/",
        "syllables": [
          "Um",
          "welt",
          "schutz"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w3",
        "de": "erneuerbar",
        "vi": "tái tạo",
        "ipa": "/ɛɐ̯ˈnɔɪ̯ɐbaːɐ̯/",
        "syllables": [
          "er",
          "neu",
          "er",
          "bar"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w4",
        "de": "Klimawandel",
        "vi": "Biến đổi khí hậu",
        "ipa": "/ˈkliːmaˌvandl̩/",
        "syllables": [
          "Kli",
          "ma",
          "wan",
          "del"
        ],
        "notation": [
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "w5",
        "de": "Müll",
        "vi": "Rác thải",
        "ipa": "/mʏl/",
        "syllables": [
          "Müll"
        ],
        "notation": [
          80
        ]
      },
      {
        "id": "w6",
        "de": "sparen",
        "vi": "tiết kiệm",
        "ipa": "/ˈʃpaːʁən/",
        "syllables": [
          "spa",
          "ren"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "entwickeln",
        "vi": "phát triển",
        "ipa": "/ɛntˈvɪkl̩n/",
        "syllables": [
          "ent",
          "wi",
          "ckeln"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "wünschen",
        "vi": "mong ước",
        "ipa": "/ˈvʏnʃn̩/",
        "syllables": [
          "wün",
          "schen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "vermutlich",
        "vi": "có lẽ, có thể là",
        "ipa": "/fɛɐ̯ˈmuːtlɪç/",
        "syllables": [
          "ver",
          "mut",
          "lich"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "verhindern",
        "vi": "ngăn chặn",
        "ipa": "/fɛɐ̯ˈhɪndɐn/",
        "syllables": [
          "ver",
          "hin",
          "dern"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "schützen",
        "vi": "bảo vệ",
        "ipa": "/ˈʃʏtsn̩/",
        "syllables": [
          "schüt",
          "zen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "verbessern",
        "vi": "cải thiện",
        "ipa": "/fɛɐ̯ˈbɛsɐn/",
        "syllables": [
          "ver",
          "be",
          "ssern"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "nachhaltig",
        "vi": "bền vững",
        "ipa": "/ˈnaːxˌhaltɪç/",
        "syllables": [
          "nach",
          "hal",
          "tig"
        ],
        "notation": [
          80,
          60,
          40
        ]
      },
      {
        "id": "w14",
        "de": "CO2-Emissionen",
        "vi": "Lượng khí thải CO2",
        "ipa": "/ˌtseːˌoːˈtsvaɪ̯ʔeˌmɪˈsi̯oːnən/",
        "syllables": [
          "C",
          "O",
          "2",
          "E",
          "mis",
          "si",
          "o",
          "nen"
        ],
        "notation": [
          40,
          60,
          80,
          40,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w15",
        "de": "Veränderung",
        "vi": "Sự thay đổi",
        "ipa": "/fɛɐ̯ˈɛndəʁʊŋ/",
        "syllables": [
          "Ver",
          "än",
          "de",
          "rung"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Wir müssen die Umwelt besser schützen.",
        "vi": "Chúng ta phải bảo vệ môi trường tốt hơn.",
        "ipa": "/viːɐ̯ ˈmʏsn̩ diː ˈʊmvɛlt ˈbɛsɐ ˈʃʏtsn̩/",
        "syllables": [
          "Wir",
          "mü",
          "ssen",
          "die",
          "Um",
          "welt",
          "be",
          "sser",
          "schü",
          "tzen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Was wirst du in zehn Jahren machen?",
        "vi": "Bạn sẽ làm gì trong mười năm nữa?",
        "ipa": "/vas vɪʁst duː ɪn tseːn ˈjaːʁən ˈmaxn̩/",
        "syllables": [
          "Was",
          "wirst",
          "du",
          "in",
          "zehn",
          "Jah",
          "ren",
          "ma",
          "chen",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          80,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Ich würde gerne mehr reisen.",
        "vi": "Tôi rất muốn đi du lịch nhiều hơn.",
        "ipa": "/ɪç ˈvʏʁdə ˈɡɛʁnə meːɐ̯ ˈʁaɪ̯zn̩/",
        "syllables": [
          "Ich",
          "wür",
          "de",
          "ger",
          "ne",
          "mehr",
          "rei",
          "sen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          80,
          80,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Der Klimawandel ist eine große Herausforderung.",
        "vi": "Biến đổi khí hậu là một thách thức lớn.",
        "ipa": "/deːɐ̯ ˈkliːmaˌvandl̩ ɪst ˈaɪ̯nə ˈɡʁoːsə ˈheːʁaʊ̯sˌfɔʁdəʁʊŋ/",
        "syllables": [
          "Der",
          "Kli",
          "ma",
          "wan",
          "del",
          "ist",
          "ei",
          "ne",
          "gro",
          "ße",
          "He",
          "raus",
          "for",
          "de",
          "rung",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          40,
          60,
          40,
          80,
          60,
          40,
          40,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Wir sollten weniger Müll produzieren.",
        "vi": "Chúng ta nên sản xuất ít rác thải hơn.",
        "ipa": "/viːɐ̯ ˈzɔltn̩ ˈveːnɪɡɐ mʏl pʁoduˈtsiːʁən/",
        "syllables": [
          "Wir",
          "soll",
          "ten",
          "we",
          "ni",
          "ger",
          "Müll",
          "pro",
          "du",
          "zie",
          "ren",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Er wird vermutlich ein neues Auto kaufen.",
        "vi": "Anh ấy có thể sẽ mua một chiếc ô tô mới.",
        "ipa": "/eːɐ̯ vɪʁt fɛɐ̯ˈmuːtlɪç aɪ̯n ˈnɔɪ̯əs ˈaʊ̯toː ˈkaʊ̯fn̩/",
        "syllables": [
          "Er",
          "wird",
          "ver",
          "mut",
          "lich",
          "ein",
          "neu",
          "es",
          "Au",
          "to",
          "kau",
          "fen",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Wenn ich Zeit hätte, würde ich Deutsch lernen.",
        "vi": "Nếu tôi có thời gian, tôi sẽ học tiếng Đức.",
        "ipa": "/vɛn ɪç tsaɪ̯t ˈhɛtə ˈvʏʁdə ɪç dɔɪ̯tʃ ˈlɛʁnən/",
        "syllables": [
          "Wenn",
          "ich",
          "Zeit",
          "hät",
          "te,",
          "wür",
          "de",
          "ich",
          "Deutsch",
          "ler",
          "nen",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          80,
          40,
          60,
          40,
          40,
          80,
          80,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Erneuerbare Energien sind sehr wichtig für die Zukunft.",
        "vi": "Năng lượng tái tạo rất quan trọng cho tương lai.",
        "ipa": "/ɛɐ̯ˈnɔɪ̯ɐbaːʁə enɛʁˈɡiːən zɪnt zeːɐ̯ ˈvɪçtɪç fyːɐ̯ diː ˈtsuːkʊnft/",
        "syllables": [
          "Er",
          "neu",
          "er",
          "ba",
          "re",
          "E",
          "ner",
          "gi",
          "en",
          "sind",
          "sehr",
          "wich",
          "tig",
          "für",
          "die",
          "Zu",
          "kunft",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Wir werden die Welt verbessern müssen.",
        "vi": "Chúng ta sẽ phải cải thiện thế giới.",
        "ipa": "/viːɐ̯ ˈvɛʁdn̩ diː vɛlt fɛɐ̯ˈbɛsɐn ˈmʏsn̩/",
        "syllables": [
          "Wir",
          "wer",
          "den",
          "die",
          "Welt",
          "ver",
          "be",
          "ssern",
          "mü",
          "ssen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Ich wünschte, ich könnte fliegen.",
        "vi": "Tôi ước mình có thể bay.",
        "ipa": "/ɪç ˈvʏnʃtə ɪç ˈkœntə ˈfliːɡn̩/",
        "syllables": [
          "Ich",
          "wün",
          "schte,",
          "ich",
          "könn",
          "te",
          "flie",
          "gen",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Die Stadt wird neue Parks entwickeln.",
        "vi": "Thành phố sẽ phát triển các công viên mới.",
        "ipa": "/diː ʃtat vɪʁt ˈnɔɪ̯ə paʁks ɛntˈvɪkl̩n/",
        "syllables": [
          "Die",
          "Stadt",
          "wird",
          "neu",
          "e",
          "Parks",
          "ent",
          "wi",
          "ckeln",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Nachhaltige Lebensstile werden immer populärer.",
        "vi": "Lối sống bền vững ngày càng trở nên phổ biến.",
        "ipa": "/ˈnaːxˌhaltɪɡə ˈleːbn̩sˌʃtiːlə ˈvɛʁdn̩ ˈɪmɐ popuˈlɛːʁɐ/",
        "syllables": [
          "Nach",
          "hal",
          "ti",
          "ge",
          "Le",
          "bens",
          "sti",
          "le",
          "wer",
          "den",
          "im",
          "mer",
          "po",
          "pu",
          "lä",
          "rer",
          "."
        ],
        "notation": [
          80,
          60,
          40,
          40,
          80,
          60,
          40,
          40,
          60,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Wie können wir die CO2-Emissionen verhindern?",
        "vi": "Làm thế nào chúng ta có thể ngăn chặn lượng khí thải CO2?",
        "ipa": "/viː ˈkœnn̩ viːɐ̯ diː ˌtseːˌoːˈtsvaɪ̯ʔeˌmɪˈsi̯oːnən fɛɐ̯ˈhɪndɐn/",
        "syllables": [
          "Wie",
          "kön",
          "nen",
          "wir",
          "die",
          "C",
          "O",
          "2",
          "E",
          "mis",
          "si",
          "o",
          "nen",
          "ver",
          "hin",
          "dern",
          "?"
        ],
        "notation": [
          80,
          80,
          40,
          40,
          40,
          40,
          60,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Die Regierung plant große Veränderungen.",
        "vi": "Chính phủ đang lên kế hoạch cho những thay đổi lớn.",
        "ipa": "/diː ʁeˈɡiːʁʊŋ plant ˈɡʁoːsə fɛɐ̯ˈɛndəʁʊŋən/",
        "syllables": [
          "Die",
          "Re",
          "gie",
          "rung",
          "plant",
          "gro",
          "ße",
          "Ver",
          "än",
          "de",
          "run",
          "gen",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          80,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Ich würde gerne weniger arbeiten.",
        "vi": "Tôi rất muốn làm việc ít hơn.",
        "ipa": "/ɪç ˈvʏʁdə ˈɡɛʁnə ˈveːnɪɡɐ ˈaʁbaɪ̯tn̩/",
        "syllables": [
          "Ich",
          "wür",
          "de",
          "ger",
          "ne",
          "we",
          "ni",
          "ger",
          "ar",
          "bei",
          "ten",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      }
    ]
  },
  "l15": {
    "words": [
      {
        "id": "w1",
        "de": "die Reise",
        "vi": "chuyến đi",
        "ipa": "/diː ˈraɪ̯zə/",
        "syllables": [
          "die",
          "Rei",
          "se"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "der Urlaub",
        "vi": "kỳ nghỉ",
        "ipa": "/dɛɐ̯ ˈʊɐ̯laʊ̯p/",
        "syllables": [
          "der",
          "Ur",
          "laub"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "erleben",
        "vi": "trải nghiệm",
        "ipa": "/ɛɐ̯ˈleːbn̩/",
        "syllables": [
          "er",
          "le",
          "ben"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "berichten",
        "vi": "kể lại, báo cáo",
        "ipa": "/bəˈrɪçtn̩/",
        "syllables": [
          "be",
          "rich",
          "ten"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "die Sehenswürdigkeit",
        "vi": "điểm tham quan",
        "ipa": "/diː ˈzeːənsˌvʏrdɪçkaɪ̯t/",
        "syllables": [
          "die",
          "Se",
          "hens",
          "wür",
          "dig",
          "keit"
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40
        ]
      },
      {
        "id": "w6",
        "de": "die Unterkunft",
        "vi": "chỗ ở",
        "ipa": "/diː ˈʊntɐˌkʊnft/",
        "syllables": [
          "die",
          "Un",
          "ter",
          "kunft"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w7",
        "de": "wunderschön",
        "vi": "đẹp tuyệt vời",
        "ipa": "/ˈvʊndɐˌʃøːn/",
        "syllables": [
          "wun",
          "der",
          "schön"
        ],
        "notation": [
          80,
          40,
          60
        ]
      },
      {
        "id": "w8",
        "de": "der Strand",
        "vi": "bãi biển",
        "ipa": "/dɛɐ̯ ʃtrant/",
        "syllables": [
          "der",
          "Strand"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w9",
        "de": "wandern",
        "vi": "đi bộ đường dài",
        "ipa": "/ˈvandɐn/",
        "syllables": [
          "wan",
          "dern"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "besichtigen",
        "vi": "tham quan",
        "ipa": "/bəˈzɪçtɪɡn̩/",
        "syllables": [
          "be",
          "sich",
          "ti",
          "gen"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w11",
        "de": "entspannend",
        "vi": "thư giãn",
        "ipa": "/ɛntˈʃpanənt/",
        "syllables": [
          "ent",
          "span",
          "nend"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "die Landschaft",
        "vi": "phong cảnh",
        "ipa": "/diː ˈlantʃaft/",
        "syllables": [
          "die",
          "Land",
          "schaft"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "empfehlen",
        "vi": "giới thiệu, khuyên",
        "ipa": "/ɛmpˈfeːlən/",
        "syllables": [
          "emp",
          "feh",
          "len"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "damals",
        "vi": "hồi đó, lúc đó",
        "ipa": "/ˈdaːmals/",
        "syllables": [
          "da",
          "mals"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "das Erlebnis",
        "vi": "trải nghiệm, sự kiện",
        "ipa": "/das ɛɐ̯ˈleːbnɪs/",
        "syllables": [
          "das",
          "Er",
          "leb",
          "nis"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Wir erlebten viele Abenteuer auf unserer Reise.",
        "vi": "Chúng tôi đã trải nghiệm nhiều cuộc phiêu lưu trong chuyến đi của mình.",
        "ipa": "/viːɐ̯ ɛɐ̯ˈleːptn̩ ˈfiːlə ˈapn̩ˌtɔɪ̯ɐ aʊ̯f ˈʊnzəʁɐ ˈraɪ̯zə./",
        "syllables": [
          "Wir",
          "er",
          "leb",
          "ten",
          "vie",
          "le",
          "A",
          "ben",
          "teu",
          "er",
          "auf",
          "un",
          "se",
          "rer",
          "Rei",
          "se."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          40,
          60,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Letzten Sommer machte ich Urlaub in Italien.",
        "vi": "Mùa hè năm ngoái tôi đã đi nghỉ ở Ý.",
        "ipa": "/ˈlɛt͡stn̩ ˈzɔmɐ ˈmaxtə ɪç ˈʊɐ̯laʊ̯p ɪn iˈtaːli̯ən./",
        "syllables": [
          "Letz",
          "ten",
          "Som",
          "mer",
          "mach",
          "te",
          "ich",
          "Ur",
          "laub",
          "in",
          "I",
          "ta",
          "li",
          "en."
        ],
        "notation": [
          80,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Kannst du mir bitte von deinem Urlaub berichten?",
        "vi": "Bạn có thể vui lòng kể cho tôi nghe về kỳ nghỉ của bạn không?",
        "ipa": "/kanst duː miːɐ̯ ˈbɪtə fɔn ˈdaɪ̯nəm ˈʊɐ̯laʊ̯p bəˈrɪçtn̩?/",
        "syllables": [
          "Kannst",
          "du",
          "mir",
          "bit",
          "te",
          "von",
          "dei",
          "nem",
          "Ur",
          "laub",
          "be",
          "rich",
          "ten?"
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Besonders beeindruckend war die alte Kathedrale.",
        "vi": "Đặc biệt ấn tượng là nhà thờ cổ.",
        "ipa": "/bəˈzɔndɐs bəˈaɪ̯ndrʊkənt vaʁ diː ˈaltə kaˈteːdʁaːlə./",
        "syllables": [
          "Be",
          "son",
          "ders",
          "be",
          "ein",
          "dru",
          "ckend",
          "war",
          "die",
          "al",
          "te",
          "Ka",
          "the",
          "dra",
          "le."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Welche Sehenswürdigkeiten habt ihr besichtigt?",
        "vi": "Các bạn đã tham quan những điểm tham quan nào?",
        "ipa": "/ˈvɛlçə ˈzeːənsˌvʏrdɪçkaɪ̯tn̩ hapt iːɐ̯ bəˈzɪçtɪçt?/",
        "syllables": [
          "Wel",
          "che",
          "Se",
          "hens",
          "wür",
          "dig",
          "kei",
          "ten",
          "habt",
          "ihr",
          "be",
          "sich",
          "tigt?"
        ],
        "notation": [
          80,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Die Unterkunft in dem kleinen Hotel war sehr gut.",
        "vi": "Chỗ ở tại khách sạn nhỏ rất tốt.",
        "ipa": "/diː ˈʊntɐˌkʊnft ɪn deːm ˈklaɪ̯nən hoˈtɛl vaːɐ̯ zeːɐ̯ ɡuːt./",
        "syllables": [
          "Die",
          "Un",
          "ter",
          "kunft",
          "in",
          "dem",
          "klei",
          "nen",
          "Ho",
          "tel",
          "war",
          "sehr",
          "gut."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Ich fand die Landschaft am Bodensee wunderschön.",
        "vi": "Tôi thấy phong cảnh ở hồ Bodensee rất đẹp.",
        "ipa": "/ɪç fant diː ˈlantʃaft am ˈboːdn̩ˌzeː ˈvʊndɐˌʃøːn./",
        "syllables": [
          "Ich",
          "fand",
          "die",
          "Land",
          "schaft",
          "am",
          "Bo",
          "den",
          "see",
          "wun",
          "der",
          "schön."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          60,
          80,
          40,
          60
        ]
      },
      {
        "id": "s8",
        "de": "Am liebsten verbringe ich den Sommer am Strand.",
        "vi": "Tôi thích dành mùa hè ở bãi biển nhất.",
        "ipa": "/am ˈliːpstn̩ fɛɐ̯ˈbrɪŋə ɪç deːn ˈzɔmɐ am ʃtrant./",
        "syllables": [
          "Am",
          "lieb",
          "sten",
          "ver",
          "brin",
          "ge",
          "ich",
          "den",
          "Som",
          "mer",
          "am",
          "Strand."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80
        ]
      },
      {
        "id": "s9",
        "de": "Wir sind oft in den Bergen gewandert.",
        "vi": "Chúng tôi thường đi bộ đường dài trên núi.",
        "ipa": "/viːɐ̯ zɪnt ɔft ɪn deːn ˈbɛʁɡn̩ ɡəˈvandɐt./",
        "syllables": [
          "Wir",
          "sind",
          "oft",
          "in",
          "den",
          "Ber",
          "gen",
          "ge",
          "wan",
          "dert."
        ],
        "notation": [
          40,
          80,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Ich kann dieses Restaurant wirklich empfehlen.",
        "vi": "Tôi thực sự có thể giới thiệu nhà hàng này.",
        "ipa": "/ɪç kan ˈdiːzəs ˌʁɛstoˈʁãː vɪɐ̯klɪç ɛmpˈfeːlən./",
        "syllables": [
          "Ich",
          "kann",
          "die",
          "ses",
          "Res",
          "tau",
          "rant",
          "wirk",
          "lich",
          "emp",
          "feh",
          "len."
        ],
        "notation": [
          40,
          80,
          80,
          40,
          40,
          40,
          80,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Die Massage war so entspannend, ich bin fast eingeschlafen.",
        "vi": "Mát-xa thật thư giãn, tôi gần như ngủ thiếp đi.",
        "ipa": "/diː maˈsaːʒə vaːɐ̯ zoː ɛntˈʃpanənt ɪç bɪn fast ˈaɪ̯nɡəˌʃlaːfn̩./",
        "syllables": [
          "Die",
          "Mas",
          "sa",
          "ge",
          "war",
          "so",
          "ent",
          "span",
          "nend,",
          "ich",
          "bin",
          "fast",
          "ein",
          "ge",
          "schla",
          "fen."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          0,
          40,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Damals war der Tourismus noch nicht so stark.",
        "vi": "Hồi đó, du lịch chưa phát triển mạnh như vậy.",
        "ipa": "/ˈdaːmals vaːɐ̯ deːɐ̯ tuˈʁɪsmʊs nɔx nɪçt zoː ʃtaʁk./",
        "syllables": [
          "Da",
          "mals",
          "war",
          "der",
          "Tou",
          "ris",
          "mus",
          "noch",
          "nicht",
          "so",
          "stark."
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s13",
        "de": "Was war dein schönstes Erlebnis im letzten Jahr?",
        "vi": "Trải nghiệm đẹp nhất của bạn năm ngoái là gì?",
        "ipa": "/vas vaːɐ̯ daɪ̯n ˈʃœnstəs ɛɐ̯ˈleːbnɪs ɪm ˈlɛt͡stn̩ jaːɐ̯?/",
        "syllables": [
          "Was",
          "war",
          "dein",
          "schöns",
          "tes",
          "Er",
          "leb",
          "nis",
          "im",
          "letz",
          "ten",
          "Jahr?"
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Sie sagte, sie sei oft nach Spanien gereist.",
        "vi": "Cô ấy nói cô ấy thường xuyên đi du lịch Tây Ban Nha.",
        "ipa": "/ziː ˈzaːktə ziː zaɪ̯ ɔft naːx ˈʃpaːni̯ən ɡəˈʁaɪ̯st./",
        "syllables": [
          "Sie",
          "sag",
          "te,",
          "sie",
          "sei",
          "oft",
          "nach",
          "Spa",
          "ni",
          "en",
          "ge",
          "reist."
        ],
        "notation": [
          40,
          80,
          0,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Wir planten unsere nächste Reise schon im Voraus.",
        "vi": "Chúng tôi đã lên kế hoạch cho chuyến đi tiếp theo từ trước.",
        "ipa": "/viːɐ̯ ˈplantn̩ ˈʊnzəʁə ˈnɛçstə ˈraɪ̯zə ʃoːn ɪm ˈfoːʁaʊ̯s./",
        "syllables": [
          "Wir",
          "plan",
          "ten",
          "un",
          "se",
          "re",
          "näch",
          "ste",
          "Rei",
          "se",
          "schon",
          "im",
          "Vo",
          "raus."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      }
    ]
  },
  "l18": {
    "words": [
      {
        "id": "w1",
        "de": "die Politik",
        "vi": "chính trị",
        "ipa": "/diː poliˈtiːk/",
        "syllables": [
          "die",
          "Po",
          "li",
          "tik"
        ],
        "notation": [
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "w2",
        "de": "die Gesellschaft",
        "vi": "xã hội",
        "ipa": "/diː ɡəˈzɛlʃaft/",
        "syllables": [
          "die",
          "Ge",
          "sell",
          "schaft"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "die Regierung",
        "vi": "chính phủ",
        "ipa": "/diː reˈɡiːrʊŋ/",
        "syllables": [
          "die",
          "Re",
          "gie",
          "rung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "wählen",
        "vi": "bầu cử, chọn lựa",
        "ipa": "/ˈvɛːlən/",
        "syllables": [
          "wäh",
          "len"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "die Wahl",
        "vi": "cuộc bầu cử, sự lựa chọn",
        "ipa": "/diː vaːl/",
        "syllables": [
          "die",
          "Wahl"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w6",
        "de": "der Politiker",
        "vi": "chính trị gia (nam)",
        "ipa": "/deːɐ̯ poˈliːtɪkɐ/",
        "syllables": [
          "der",
          "Po",
          "li",
          "ti",
          "ker"
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w7",
        "de": "die Nachricht",
        "vi": "tin tức, thông báo",
        "ipa": "/diː ˈnaːxˌrɪçt/",
        "syllables": [
          "die",
          "Nach",
          "richt"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "die Zeitung",
        "vi": "báo (giấy)",
        "ipa": "/diː ˈtsaɪ̯tʊŋ/",
        "syllables": [
          "die",
          "Zei",
          "tung"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "das Internet",
        "vi": "Internet",
        "ipa": "/das ˈɪntɐˌnɛt/",
        "syllables": [
          "das",
          "In",
          "ter",
          "net"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w10",
        "de": "informieren",
        "vi": "thông báo, cung cấp thông tin",
        "ipa": "/ɪnfɔrˈmiːrən/",
        "syllables": [
          "in",
          "for",
          "mie",
          "ren"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "die Meinung",
        "vi": "ý kiến",
        "ipa": "/diː ˈmaɪ̯nʊŋ/",
        "syllables": [
          "die",
          "Mei",
          "nung"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "diskutieren",
        "vi": "thảo luận",
        "ipa": "/dɪskuˈtiːrən/",
        "syllables": [
          "dis",
          "ku",
          "tie",
          "ren"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "das Problem",
        "vi": "vấn đề",
        "ipa": "/das proˈbleːm/",
        "syllables": [
          "das",
          "Pro",
          "blem"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w14",
        "de": "die Demokratie",
        "vi": "nền dân chủ",
        "ipa": "/diː deˌmokraˈtiː/",
        "syllables": [
          "die",
          "De",
          "mo",
          "kra",
          "tie"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "w15",
        "de": "das Gesetz",
        "vi": "luật, đạo luật",
        "ipa": "/das ɡəˈzɛts/",
        "syllables": [
          "das",
          "Ge",
          "setz"
        ],
        "notation": [
          40,
          40,
          80
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Wir sprechen oft über Politik.",
        "vi": "Chúng tôi thường nói chuyện về chính trị.",
        "ipa": "/viːɐ̯ ˈʃprɛçn̩ ɔft ˈyːbɐ poliˈtiːk/",
        "syllables": [
          "Wir",
          "spre",
          "chen",
          "oft",
          "ü",
          "ber",
          "Po",
          "li",
          "tik."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          60,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s2",
        "de": "Die Gesellschaft diskutiert wichtige Themen.",
        "vi": "Xã hội thảo luận các chủ đề quan trọng.",
        "ipa": "/diː ɡəˈzɛlʃaft dɪskuˈtiːɐ̯t ˈvɪçtɪɡə ˈteːmən/",
        "syllables": [
          "Die",
          "Ge",
          "sell",
          "schaft",
          "dis",
          "ku",
          "tiert",
          "wich",
          "ti",
          "ge",
          "The",
          "men."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s3",
        "de": "Die Regierung hat neue Gesetze geplant.",
        "vi": "Chính phủ đã lên kế hoạch cho các luật mới.",
        "ipa": "/diː reˈɡiːrʊŋ hat ˈnɔɪ̯ə ɡəˈzɛtsə ɡəˈplaːnt/",
        "syllables": [
          "Die",
          "Re",
          "gie",
          "rung",
          "hat",
          "neu",
          "e",
          "Ge",
          "set",
          "ze",
          "ge",
          "plant."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80
        ]
      },
      {
        "id": "s4",
        "de": "Viele Leute gehen heute wählen.",
        "vi": "Nhiều người đi bỏ phiếu hôm nay.",
        "ipa": "/ˈfiːlə ˈlɔɪ̯tə ˈɡeːən ˈhɔɪ̯tə ˈvɛːlən/",
        "syllables": [
          "Vie",
          "le",
          "Leu",
          "te",
          "ge",
          "hen",
          "heu",
          "te",
          "wäh",
          "len."
        ],
        "notation": [
          80,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s5",
        "de": "Die nächste Wahl ist im Herbst.",
        "vi": "Cuộc bầu cử tiếp theo là vào mùa thu.",
        "ipa": "/diː ˈnɛçstə vaːl ɪst ɪm hɛʁpst/",
        "syllables": [
          "Die",
          "nächs",
          "te",
          "Wahl",
          "ist",
          "im",
          "Herbst."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          40,
          80
        ]
      },
      {
        "id": "s6",
        "de": "Ein guter Politiker hört den Bürgern zu.",
        "vi": "Một chính trị gia giỏi lắng nghe công dân.",
        "ipa": "/aɪ̯n ˈɡuːtɐ poˈliːtɪkɐ høːɐ̯t deːn ˈbʏʁɡɐn tsuː/",
        "syllables": [
          "Ein",
          "gu",
          "ter",
          "Po",
          "li",
          "ti",
          "ker",
          "hört",
          "den",
          "Bür",
          "gern",
          "zu."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          80
        ]
      },
      {
        "id": "s7",
        "de": "Hast du die neuesten Nachrichten gehört?",
        "vi": "Bạn đã nghe tin tức mới nhất chưa?",
        "ipa": "/hast duː diː ˈnɔɪ̯əstən ˈnaːxˌrɪçtən ɡəˈhøːɐ̯t/",
        "syllables": [
          "Hast",
          "du",
          "die",
          "neu",
          "es",
          "ten",
          "Nach",
          "rich",
          "ten",
          "ge",
          "hört?"
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s8",
        "de": "Ich lese jeden Morgen die Zeitung.",
        "vi": "Tôi đọc báo mỗi sáng.",
        "ipa": "/ɪç ˈleːzə ˈjeːdn̩ ˈmɔʁɡn̩ diː ˈtsaɪ̯tʊŋ/",
        "syllables": [
          "Ich",
          "le",
          "se",
          "je",
          "den",
          "Mor",
          "gen",
          "die",
          "Zei",
          "tung."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s9",
        "de": "Das Internet ist eine wichtige Informationsquelle.",
        "vi": "Internet là một nguồn thông tin quan trọng.",
        "ipa": "/das ˈɪntɐˌnɛt ɪst ˈaɪ̯nə ˈvɪçtɪɡə ɪnfɔʁmaˈtsi̯oːnsˌkvɛlə/",
        "syllables": [
          "Das",
          "In",
          "ter",
          "net",
          "ist",
          "ei",
          "ne",
          "wich",
          "ti",
          "ge",
          "In",
          "for",
          "ma",
          "ti",
          "ons",
          "quel",
          "le."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40
        ]
      },
      {
        "id": "s10",
        "de": "Wir müssen uns gut informieren, bevor wir wählen.",
        "vi": "Chúng ta phải tự tìm hiểu kỹ trước khi bỏ phiếu.",
        "ipa": "/viːɐ̯ ˈmʏsn̩ ʊns ɡuːt ɪnfɔrˈmiːrən bəˈfoːɐ̯ viːɐ̯ ˈvɛːlən/",
        "syllables": [
          "Wir",
          "müs",
          "sen",
          "uns",
          "gut",
          "in",
          "for",
          "mie",
          "ren",
          "be",
          "vor",
          "wir",
          "wäh",
          "len."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s11",
        "de": "Jeder hat eine eigene Meinung zu diesem Thema.",
        "vi": "Mọi người đều có ý kiến riêng về chủ đề này.",
        "ipa": "/ˈjeːdɐ hat ˈaɪ̯nə ˈaɪ̯ɡənə ˈmaɪ̯nʊŋ tsuː ˈdiːzəm ˈteːma/",
        "syllables": [
          "Je",
          "der",
          "hat",
          "ei",
          "ne",
          "ei",
          "ge",
          "ne",
          "Mei",
          "nung",
          "zu",
          "die",
          "sem",
          "The",
          "ma."
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s12",
        "de": "Lass uns das Problem diskutieren.",
        "vi": "Hãy thảo luận vấn đề đó.",
        "ipa": "/las ʊns das proˈbleːm dɪskuˈtiːrən/",
        "syllables": [
          "Lass",
          "uns",
          "das",
          "Pro",
          "blem",
          "dis",
          "ku",
          "tie",
          "ren."
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s13",
        "de": "Das ist ein großes Problem für viele Städte.",
        "vi": "Đó là một vấn đề lớn đối với nhiều thành phố.",
        "ipa": "/das ɪst aɪ̯n ˈɡroːsəs proˈbleːm fyːɐ̯ ˈfiːlə ˈʃtɛtə/",
        "syllables": [
          "Das",
          "ist",
          "ein",
          "gro",
          "ßes",
          "Pro",
          "blem",
          "für",
          "vie",
          "le",
          "Städ",
          "te."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s14",
        "de": "In einer Demokratie hat jeder eine Stimme.",
        "vi": "Trong một nền dân chủ, mỗi người đều có một tiếng nói.",
        "ipa": "/ɪn ˈaɪ̯nɐ deˌmokraˈtiː hat ˈjeːdɐ ˈaɪ̯nə ˈʃtɪmə/",
        "syllables": [
          "In",
          "ei",
          "ner",
          "De",
          "mo",
          "kra",
          "tie",
          "hat",
          "je",
          "der",
          "ei",
          "ne",
          "Stim",
          "me."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s15",
        "de": "Ein neues Gesetz wurde verabschiedet.",
        "vi": "Một đạo luật mới đã được thông qua.",
        "ipa": "/aɪ̯n ˈnɔɪ̯əs ɡəˈzɛts ˈvʊʁdə fɛɐ̯ˈʔapʃiːdət/",
        "syllables": [
          "Ein",
          "neu",
          "es",
          "Ge",
          "setz",
          "wur",
          "de",
          "ver",
          "ab",
          "schie",
          "det."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          80,
          40,
          40,
          80,
          40,
          40
        ]
      }
    ]
  },
  "l13": {
    "words": [
      {
        "id": "w1",
        "de": "die Bewerbung",
        "vi": "đơn xin việc",
        "ipa": "/diː bəˈvɛʁbʊŋ/",
        "syllables": [
          "die",
          "Be",
          "wer",
          "bung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "der Lebenslauf",
        "vi": "sơ yếu lý lịch",
        "ipa": "/deːɐ̯ ˈleːbənsˌlaʊ̯f/",
        "syllables": [
          "der",
          "Le",
          "bens",
          "lauf"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w3",
        "de": "das Vorstellungsgespräch",
        "vi": "phỏng vấn xin việc",
        "ipa": "/das ˈfɔʁʃtɛlʊŋsɡəˌʃpʁɛːç/",
        "syllables": [
          "das",
          "Vor",
          "stel",
          "lungs",
          "ge",
          "spräch"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60
        ]
      },
      {
        "id": "w4",
        "de": "die Erfahrung",
        "vi": "kinh nghiệm",
        "ipa": "/diː ɛɐ̯ˈfaːʁʊŋ/",
        "syllables": [
          "die",
          "Er",
          "fah",
          "rung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "die Kenntnisse",
        "vi": "kiến thức, kỹ năng",
        "ipa": "/diː ˈkɛntnɪsə/",
        "syllables": [
          "die",
          "Kennt",
          "nis",
          "se"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w6",
        "de": "die Stellenanzeige",
        "vi": "quảng cáo tuyển dụng",
        "ipa": "/diː ˈʃtɛlənˌʔantsaɪ̯ɡə/",
        "syllables": [
          "die",
          "Stel",
          "len",
          "an",
          "zei",
          "ge"
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40
        ]
      },
      {
        "id": "w7",
        "de": "sich bewerben",
        "vi": "ứng tuyển",
        "ipa": "/zɪç bəˈvɛʁbn̩/",
        "syllables": [
          "sich",
          "be",
          "wer",
          "ben"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "teilnehmen",
        "vi": "tham gia",
        "ipa": "/ˈtaɪ̯lˌneːmən/",
        "syllables": [
          "teil",
          "neh",
          "men"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w9",
        "de": "die Verantwortung",
        "vi": "trách nhiệm",
        "ipa": "/diː fɛɐ̯ˈʔantvɔʁtʊŋ/",
        "syllables": [
          "die",
          "Ver",
          "ant",
          "wor",
          "tung"
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w10",
        "de": "erfolgreich",
        "vi": "thành công",
        "ipa": "/ɛɐ̯ˈfɔlkʁaɪ̯ç/",
        "syllables": [
          "er",
          "folg",
          "reich"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "die Ausbildung",
        "vi": "khóa đào tạo, giáo dục",
        "ipa": "/diː ˈaʊ̯sˌbɪldʊŋ/",
        "syllables": [
          "die",
          "Aus",
          "bil",
          "dung"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w12",
        "de": "die Karriere",
        "vi": "sự nghiệp",
        "ipa": "/diː kaˈʁi̯eːʁə/",
        "syllables": [
          "die",
          "Kar",
          "rie",
          "re"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "die Medien",
        "vi": "truyền thông",
        "ipa": "/diː ˈmeːdi̯ən/",
        "syllables": [
          "die",
          "Me",
          "dien"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "die Nachrichten",
        "vi": "tin tức",
        "ipa": "/diː ˈnaːxˌrɪçtən/",
        "syllables": [
          "die",
          "Nach",
          "rich",
          "ten"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w15",
        "de": "die Zeitschrift",
        "vi": "tạp chí",
        "ipa": "/diː ˈtsaɪ̯tʃʁɪft/",
        "syllables": [
          "die",
          "Zeit",
          "schrift"
        ],
        "notation": [
          40,
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Ich habe eine interessante Stellenanzeige im Internet gefunden.",
        "vi": "Tôi đã tìm thấy một quảng cáo tuyển dụng thú vị trên Internet.",
        "ipa": "/ɪç ˈhaːbə ˈaɪ̯nə ɪntəʁɛˈsantə ˈʃtɛlənˌʔantsaɪ̯ɡə ɪm ˈɪntɐnɛt ɡəˈfʊndən/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "ei",
          "ne",
          "in",
          "te",
          "res",
          "san",
          "te",
          "Stel",
          "len",
          "an",
          "zei",
          "ge",
          "im",
          "In",
          "ter",
          "net",
          "ge",
          "fun",
          "den",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Für diese Position muss man gute Deutschkenntnisse haben.",
        "vi": "Đối với vị trí này, người ta phải có kiến thức tiếng Đức tốt.",
        "ipa": "/fyːɐ̯ ˈdiːzə poziˈtsi̯oːn mʊs man ˈɡuːtə ˈdɔɪ̯tʃˌkɛntnɪsə ˈhaːbn̩/",
        "syllables": [
          "Für",
          "die",
          "se",
          "Po",
          "si",
          "ti",
          "on",
          "muss",
          "man",
          "gu",
          "te",
          "Deutsch",
          "kennt",
          "nis",
          "se",
          "ha",
          "ben",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Sie hat sich gestern auf die Stelle beworben.",
        "vi": "Cô ấy đã nộp đơn xin việc ngày hôm qua.",
        "ipa": "/ziː hat zɪç ˈɡɛstɐn aʊ̯f diː ˈʃtɛlə bəˈvɔʁbn̩/",
        "syllables": [
          "Sie",
          "hat",
          "sich",
          "ges",
          "tern",
          "auf",
          "die",
          "Stel",
          "le",
          "be",
          "wor",
          "ben",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Der Lebenslauf sollte alle wichtigen Erfahrungen enthalten.",
        "vi": "Sơ yếu lý lịch nên chứa tất cả các kinh nghiệm quan trọng.",
        "ipa": "/deːɐ̯ ˈleːbənsˌlaʊ̯f ˈzɔltə ˈalə ˈvɪçtɪɡən ɛɐ̯ˈfaːʁʊŋən ɛntˈhaltn̩/",
        "syllables": [
          "Der",
          "Le",
          "bens",
          "lauf",
          "soll",
          "te",
          "al",
          "le",
          "wich",
          "ti",
          "gen",
          "Er",
          "fah",
          "run",
          "gen",
          "ent",
          "hal",
          "ten",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Mein Vorstellungsgespräch ist nächste Woche am Dienstag.",
        "vi": "Buổi phỏng vấn xin việc của tôi là thứ Ba tuần tới.",
        "ipa": "/maɪ̯n ˈfɔʁʃtɛlʊŋsɡəˌʃpʁɛːç ɪst ˈnɛçstə ˈvɔxə am ˈdiːnstaːk/",
        "syllables": [
          "Mein",
          "Vor",
          "stel",
          "lungs",
          "ge",
          "spräch",
          "ist",
          "nächs",
          "te",
          "Wo",
          "che",
          "am",
          "Diens",
          "tag",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Wenn ich mehr Zeit hätte, würde ich einen Sprachkurs besuchen.",
        "vi": "Nếu tôi có nhiều thời gian hơn, tôi sẽ tham gia một khóa học ngôn ngữ.",
        "ipa": "/vɛn ɪç meːɐ̯ tsaɪ̯t ˈhɛtə ˈvʏɐ̯də ɪç ˈaɪ̯nən ˈʃpʁaːxˌkʊʁs bəˈzuːxn̩/",
        "syllables": [
          "Wenn",
          "ich",
          "mehr",
          "Zeit",
          "hät",
          "te",
          ",",
          "wür",
          "de",
          "ich",
          "ei",
          "nen",
          "Sprach",
          "kurs",
          "be",
          "su",
          "chen",
          "."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          60,
          40,
          0,
          60,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Er hat viel Verantwortung in seinem neuen Job.",
        "vi": "Anh ấy có rất nhiều trách nhiệm trong công việc mới của mình.",
        "ipa": "/eːɐ̯ hat fiːl fɛɐ̯ˈʔantvɔʁtʊŋ ɪn ˈzaɪ̯nəm ˈnɔɪ̯ən dʒɔp/",
        "syllables": [
          "Er",
          "hat",
          "viel",
          "Ver",
          "ant",
          "wor",
          "tung",
          "in",
          "sei",
          "nem",
          "neu",
          "en",
          "Job",
          "."
        ],
        "notation": [
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Eine gute Ausbildung ist wichtig für eine erfolgreiche Karriere.",
        "vi": "Một nền giáo dục tốt là quan trọng cho một sự nghiệp thành công.",
        "ipa": "/ˈaɪ̯nə ˈɡuːtə ˈaʊ̯sˌbɪldʊŋ ɪst ˈvɪçtɪç fyːɐ̯ ˈaɪ̯nə ɛɐ̯ˈfɔlkʁaɪ̯çə kaˈʁi̯eːʁə/",
        "syllables": [
          "Ei",
          "ne",
          "gu",
          "te",
          "Aus",
          "bil",
          "dung",
          "ist",
          "wich",
          "tig",
          "für",
          "ei",
          "ne",
          "er",
          "folg",
          "rei",
          "che",
          "Kar",
          "rie",
          "re",
          "."
        ],
        "notation": [
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Ich lese jeden Morgen die Nachrichten in der Zeitung.",
        "vi": "Tôi đọc tin tức trên báo mỗi sáng.",
        "ipa": "/ɪç ˈleːzə ˈjeːdn̩ ˈmɔʁɡn̩ diː ˈnaːxˌrɪçtən ɪn deːɐ̯ ˈtsaɪ̯tʊŋ/",
        "syllables": [
          "Ich",
          "le",
          "se",
          "je",
          "den",
          "Mor",
          "gen",
          "die",
          "Nach",
          "rich",
          "ten",
          "in",
          "der",
          "Zei",
          "tung",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          60,
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Könnten Sie mir bitte Ihre Erfahrungen in diesem Bereich beschreiben?",
        "vi": "Bạn có thể vui lòng mô tả kinh nghiệm của mình trong lĩnh vực này cho tôi không?",
        "ipa": "/ˈkœntn̩ ziː miːɐ̯ ˈbɪtə ˈiːʁə ɛɐ̯ˈfaːʁʊŋən ɪn ˈdiːzəm bəˈʁaɪ̯ç bəˈʃʁaɪ̯bn̩/",
        "syllables": [
          "Könn",
          "ten",
          "Sie",
          "mir",
          "bit",
          "te",
          "Ih",
          "re",
          "Er",
          "fah",
          "run",
          "gen",
          "in",
          "die",
          "sem",
          "Be",
          "reich",
          "be",
          "schrei",
          "ben",
          "?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          40,
          80,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Obwohl er jung ist, hat er schon viel erreicht.",
        "vi": "Mặc dù anh ấy còn trẻ, nhưng anh ấy đã đạt được nhiều điều.",
        "ipa": "/ɔpˈvoːl eːɐ̯ jʊŋ ɪst hat eːɐ̯ ʃoːn fiːl ɛɐ̯ˈʁaɪ̯çt/",
        "syllables": [
          "Ob",
          "wohl",
          "er",
          "jung",
          "ist",
          ",",
          "hat",
          "er",
          "schon",
          "viel",
          "er",
          "reicht",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          0,
          60,
          40,
          40,
          80,
          40,
          80,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Wir müssen die Bewerbungsfrist unbedingt einhalten.",
        "vi": "Chúng ta nhất định phải tuân thủ thời hạn nộp đơn.",
        "ipa": "/viːɐ̯ ˈmʏsn̩ diː bəˈvɛʁbʊŋsˌfʁɪst ˈʊnbədɪŋt ˈaɪ̯nˌhaltn̩/",
        "syllables": [
          "Wir",
          "müs",
          "sen",
          "die",
          "Be",
          "wer",
          "bungs",
          "frist",
          "un",
          "be",
          "dingt",
          "ein",
          "hal",
          "ten",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          60,
          80,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Sie möchte in Zukunft im Bereich Marketing arbeiten.",
        "vi": "Cô ấy muốn làm việc trong lĩnh vực marketing trong tương lai.",
        "ipa": "/ziː ˈmœçtə ɪn ˈtsuːkʊnft ɪm bəˈʁaɪ̯ç ˈmaʁkətɪŋ ˈaʁbaɪ̯tn̩/",
        "syllables": [
          "Sie",
          "möch",
          "te",
          "in",
          "Zu",
          "kunft",
          "im",
          "Be",
          "reich",
          "Mar",
          "ke",
          "ting",
          "ar",
          "bei",
          "ten",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          80,
          40,
          40,
          60,
          40,
          40,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Hast du schon die neueste Ausgabe der Zeitschrift gelesen?",
        "vi": "Bạn đã đọc số mới nhất của tạp chí chưa?",
        "ipa": "/hast duː ʃoːn diː ˈnɔɪ̯ɛstə ˈaʊ̯sˌɡaːbə deːɐ̯ ˈtsaɪ̯tʃʁɪft ɡəˈleːzn̩/",
        "syllables": [
          "Hast",
          "du",
          "schon",
          "die",
          "neu",
          "es",
          "te",
          "Aus",
          "ga",
          "be",
          "der",
          "Zeit",
          "schrift",
          "ge",
          "le",
          "sen",
          "?"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Man sollte immer pünktlich zum Vorstellungsgespräch erscheinen.",
        "vi": "Người ta nên luôn đến đúng giờ cho buổi phỏng vấn xin việc.",
        "ipa": "/man ˈzɔltə ˈɪmɐ ˈpʏŋktlɪç t͡sʊm ˈfɔʁʃtɛlʊŋsɡəˌʃpʁɛːç ɛɐ̯ˈʃaɪ̯nən/",
        "syllables": [
          "Man",
          "soll",
          "te",
          "im",
          "mer",
          "pünkt",
          "lich",
          "zum",
          "Vor",
          "stel",
          "lungs",
          "ge",
          "spräch",
          "er",
          "schei",
          "nen",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          0
        ]
      }
    ]
  },
  "l20": {
    "words": [
      {
        "id": "w1",
        "de": "die Wahl",
        "vi": "cuộc bầu cử",
        "ipa": "/diː vaːl/",
        "syllables": [
          "die",
          "Wahl"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w2",
        "de": "die Regierung",
        "vi": "chính phủ",
        "ipa": "/diː ʁeˈɡiːʁʊŋ/",
        "syllables": [
          "die",
          "Re",
          "gie",
          "rung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "der Bürger",
        "vi": "công dân",
        "ipa": "/dɛɐ̯ ˈbʏʁɡɐ/",
        "syllables": [
          "der",
          "Bür",
          "ger"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "das Problem",
        "vi": "vấn đề",
        "ipa": "/das pʁoˈbleːm/",
        "syllables": [
          "das",
          "Pro",
          "blem"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w5",
        "de": "die Lösung",
        "vi": "giải pháp",
        "ipa": "/diː ˈløːzʊŋ/",
        "syllables": [
          "die",
          "Lö",
          "sung"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "die Nachricht",
        "vi": "tin tức",
        "ipa": "/diː ˈnaːxʁɪçt/",
        "syllables": [
          "die",
          "Nach",
          "richt"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "der Artikel",
        "vi": "bài báo",
        "ipa": "/dɛɐ̯ ʔaʁˈtɪkl̩/",
        "syllables": [
          "der",
          "Ar",
          "ti",
          "kel"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "berichten",
        "vi": "báo cáo, đưa tin",
        "ipa": "/bəˈʁɪçtn̩/",
        "syllables": [
          "be",
          "rich",
          "ten"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "die Demonstration",
        "vi": "cuộc biểu tình",
        "ipa": "/diː deːmɔnstʁaˈt͡sjoːn/",
        "syllables": [
          "die",
          "De",
          "mons",
          "tra",
          "tion"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "w10",
        "de": "die Umwelt",
        "vi": "môi trường",
        "ipa": "/diː ˈʊmvɛlt/",
        "syllables": [
          "die",
          "Um",
          "welt"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "die Bildung",
        "vi": "giáo dục",
        "ipa": "/diː ˈbɪldʊŋ/",
        "syllables": [
          "die",
          "Bil",
          "dung"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "die Gesundheit",
        "vi": "sức khỏe",
        "ipa": "/diː ɡəˈzʊnthaɪ̯t/",
        "syllables": [
          "die",
          "Ge",
          "sund",
          "heit"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "wichtig",
        "vi": "quan trọng",
        "ipa": "/ˈvɪçtɪç/",
        "syllables": [
          "wich",
          "tig"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "die Politik",
        "vi": "chính trị",
        "ipa": "/diː poːliˈtiːk/",
        "syllables": [
          "die",
          "Po",
          "li",
          "tik"
        ],
        "notation": [
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "w15",
        "de": "verbessern",
        "vi": "cải thiện",
        "ipa": "/fɛɐ̯ˈbɛsɐn/",
        "syllables": [
          "ver",
          "bes",
          "sern"
        ],
        "notation": [
          40,
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Viele Bürger gehen zur Wahl.",
        "vi": "Nhiều công dân đi bầu cử.",
        "ipa": "/ˈfiːlə ˈbʏʁɡɐ ˈɡeːən t͡suːɐ̯ vaːl/",
        "syllables": [
          "Vie",
          "le",
          "Bür",
          "ger",
          "ge",
          "hen",
          "zur",
          "Wahl."
        ],
        "notation": [
          80,
          40,
          80,
          40,
          60,
          40,
          40,
          80
        ]
      },
      {
        "id": "s2",
        "de": "Die Regierung muss Lösungen finden.",
        "vi": "Chính phủ phải tìm ra giải pháp.",
        "ipa": "/diː ʁeˈɡiːʁʊŋ mʊs ˈløːzʊŋən ˈfɪndn̩/",
        "syllables": [
          "Die",
          "Re",
          "gie",
          "rung",
          "muss",
          "Lö",
          "sun",
          "gen",
          "fin",
          "den."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          60,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s3",
        "de": "In den Nachrichten wurde über das Problem berichtet.",
        "vi": "Vấn đề đã được đưa tin trên thời sự.",
        "ipa": "/ɪn deːn ˈnaːxʁɪçtn̩ ˈvʊʁdə ˈyːbɐ das pʁoˈbleːm bəˈʁɪçtət/",
        "syllables": [
          "In",
          "den",
          "Nach",
          "rich",
          "ten",
          "wur",
          "de",
          "ü",
          "ber",
          "das",
          "Pro",
          "blem",
          "be",
          "rich",
          "tet."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s4",
        "de": "Er liest jeden Tag einen Artikel in der Zeitung.",
        "vi": "Anh ấy đọc một bài báo trên báo mỗi ngày.",
        "ipa": "/ɛɐ̯ liːst ˈjeːdn̩ taːk ˈaɪ̯nən aʁˈtɪkl̩ ɪn dɛɐ̯ ˈt͡saɪ̯tʊŋ/",
        "syllables": [
          "Er",
          "liest",
          "je",
          "den",
          "Tag",
          "ei",
          "nen",
          "Ar",
          "ti",
          "kel",
          "in",
          "der",
          "Zei",
          "tung."
        ],
        "notation": [
          40,
          60,
          80,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s5",
        "de": "Die Menschen demonstrieren für bessere Umweltpolitik.",
        "vi": "Người dân biểu tình vì chính sách môi trường tốt hơn.",
        "ipa": "/diː ˈmɛnʃn̩ deːmɔnsˈtʁiːʁən fyːɐ̯ ˈbɛsəʁə ˈʊmvɛltpoːliˌtiːk/",
        "syllables": [
          "Die",
          "Men",
          "schen",
          "de",
          "mons",
          "trie",
          "ren",
          "für",
          "bes",
          "se",
          "re",
          "Um",
          "welt",
          "po",
          "li",
          "tik."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          60
        ]
      },
      {
        "id": "s6",
        "de": "Bildung ist ein wichtiges Thema für die Gesellschaft.",
        "vi": "Giáo dục là một chủ đề quan trọng đối với xã hội.",
        "ipa": "/ˈbɪldʊŋ ɪst aɪ̯n ˈvɪçtɪɡəs ˈteːma fyːɐ̯ diː ɡəˈzɛlʃaft/",
        "syllables": [
          "Bil",
          "dung",
          "ist",
          "ein",
          "wich",
          "ti",
          "ges",
          "The",
          "ma",
          "für",
          "die",
          "Ge",
          "sell",
          "schaft."
        ],
        "notation": [
          80,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s7",
        "de": "Wie kann die Gesundheitsversorgung verbessert werden?",
        "vi": "Làm thế nào để cải thiện dịch vụ chăm sóc sức khỏe?",
        "ipa": "/viː kan diː ɡəˈzʊnthaɪ̯tsfɛɐ̯ˈzɔʁɡʊŋ fɛɐ̯ˈbɛsɐt ˈvɛʁdn̩/",
        "syllables": [
          "Wie",
          "kann",
          "die",
          "Ge",
          "sund",
          "heits",
          "ver",
          "sor",
          "gung",
          "ver",
          "bes",
          "sert",
          "wer",
          "den?"
        ],
        "notation": [
          80,
          60,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "s8",
        "de": "Die Politik diskutiert neue Gesetze.",
        "vi": "Chính giới đang thảo luận về các luật mới.",
        "ipa": "/diː poːliˈtiːk dɪskuˈtiːɐ̯t ˈnɔɪ̯ə ɡəˈzɛt͡sə/",
        "syllables": [
          "Die",
          "Po",
          "li",
          "tik",
          "dis",
          "ku",
          "tiert",
          "neu",
          "e",
          "Ge",
          "set",
          "ze."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s9",
        "de": "Das ist eine große Herausforderung für unser Land.",
        "vi": "Đó là một thách thức lớn đối với đất nước chúng ta.",
        "ipa": "/das ɪst ˈaɪ̯nə ˈɡʁoːsə ˈhɛʁaʊ̯sfɔʁdərʊŋ fyːɐ̯ ˈʊnzɐ lant/",
        "syllables": [
          "Das",
          "ist",
          "ei",
          "ne",
          "gro",
          "ße",
          "He",
          "raus",
          "for",
          "de",
          "rung",
          "für",
          "un",
          "ser",
          "Land."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          80
        ]
      },
      {
        "id": "s10",
        "de": "Ich finde, die Preise sind zu hoch.",
        "vi": "Tôi thấy rằng giá cả quá cao.",
        "ipa": "/ɪç ˈfɪndə diː ˈpʁaɪ̯zə zɪnt t͡suː hoːx/",
        "syllables": [
          "Ich",
          "fin",
          "de",
          ",",
          "die",
          "Prei",
          "se",
          "sind",
          "zu",
          "hoch."
        ],
        "notation": [
          40,
          80,
          40,
          0,
          40,
          80,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s11",
        "de": "Man sollte mehr in die Zukunft investieren.",
        "vi": "Người ta nên đầu tư nhiều hơn vào tương lai.",
        "ipa": "/man ˈzɔltə meːɐ̯ ɪn diː ˈt͡suːkʊnft ɪnvɛsˈtiːʁən/",
        "syllables": [
          "Man",
          "soll",
          "te",
          "mehr",
          "in",
          "die",
          "Zu",
          "kunft",
          "in",
          "ves",
          "tie",
          "ren."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s12",
        "de": "Er hat seine Meinung deutlich gesagt.",
        "vi": "Anh ấy đã bày tỏ ý kiến của mình một cách rõ ràng.",
        "ipa": "/ɛɐ̯ hat ˈzaɪ̯nə ˈmaɪ̯nʊŋ ˈdɔɪ̯tlɪç ɡəˈzaːkt/",
        "syllables": [
          "Er",
          "hat",
          "sei",
          "ne",
          "Mei",
          "nung",
          "deut",
          "lich",
          "ge",
          "sagt."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          40,
          80
        ]
      },
      {
        "id": "s13",
        "de": "Das Thema wird oft in den Medien behandelt.",
        "vi": "Chủ đề này thường được đề cập trên các phương tiện truyền thông.",
        "ipa": "/das ˈteːma vɪɐ̯t ɔft ɪn deːn ˈmeːdiən bəˈhandl̩t/",
        "syllables": [
          "Das",
          "The",
          "ma",
          "wird",
          "oft",
          "in",
          "den",
          "Me",
          "dien",
          "be",
          "han",
          "delt."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          60,
          40,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s14",
        "de": "Was ist Ihre Meinung zu diesem Gesetz?",
        "vi": "Ý kiến của bạn về luật này là gì?",
        "ipa": "/vas ɪst ˈiːʁə ˈmaɪ̯nʊŋ t͡suː ˈdiːzəm ɡəˈzɛt͡s/",
        "syllables": [
          "Was",
          "ist",
          "Ih",
          "re",
          "Mei",
          "nung",
          "zu",
          "die",
          "sem",
          "Ge",
          "setz?"
        ],
        "notation": [
          80,
          60,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80
        ]
      },
      {
        "id": "s15",
        "de": "Viele Länder sind von der globalen Erwärmung betroffen.",
        "vi": "Nhiều quốc gia bị ảnh hưởng bởi sự nóng lên toàn cầu.",
        "ipa": "/ˈfiːlə ˈlɛndɐ zɪnt fɔn dɛɐ̯ ɡloˈbaːlən ɛɐ̯ˈvɛʁmʊŋ bəˈtʁɔfn̩/",
        "syllables": [
          "Vie",
          "le",
          "Län",
          "der",
          "sind",
          "von",
          "der",
          "glo",
          "ba",
          "len",
          "Er",
          "wär",
          "mung",
          "be",
          "trof",
          "fen."
        ],
        "notation": [
          80,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      }
    ]
  },
  "l23": {
    "words": [
      {
        "id": "w1",
        "de": "die Feier",
        "vi": "buổi lễ, buổi tiệc",
        "ipa": "/diː ˈfaɪ̯ɐ/",
        "syllables": [
          "die",
          "Fei",
          "er"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "das Fest",
        "vi": "lễ hội, buổi tiệc",
        "ipa": "/das fɛst/",
        "syllables": [
          "das",
          "Fest"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w3",
        "de": "der Geburtstag",
        "vi": "sinh nhật",
        "ipa": "/deːɐ̯ ˈɡəˈbuːɐ̯t͡staːk/",
        "syllables": [
          "der",
          "Ge",
          "burts",
          "tag"
        ],
        "notation": [
          40,
          40,
          60,
          80
        ]
      },
      {
        "id": "w4",
        "de": "die Hochzeit",
        "vi": "đám cưới",
        "ipa": "/diː ˈhɔxˌt͡saɪ̯t/",
        "syllables": [
          "die",
          "Hoch",
          "zeit"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "das Geschenk",
        "vi": "món quà",
        "ipa": "/das ɡəˈʃɛŋk/",
        "syllables": [
          "das",
          "Ge",
          "schenk"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w6",
        "de": "einladen",
        "vi": "mời",
        "ipa": "/ˈaɪ̯nˌlaːdn̩/",
        "syllables": [
          "ein",
          "la",
          "den"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w7",
        "de": "die Einladung",
        "vi": "lời mời, thiệp mời",
        "ipa": "/diː ˈaɪ̯nˌlaːdʊŋ/",
        "syllables": [
          "die",
          "Ein",
          "la",
          "dung"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w8",
        "de": "gratulieren",
        "vi": "chúc mừng",
        "ipa": "/ɡratuˈliːʁən/",
        "syllables": [
          "gra",
          "tu",
          "lie",
          "ren"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "die Glückwünsche",
        "vi": "lời chúc mừng",
        "ipa": "/diː ˈɡlʏkˌvʏnʃə/",
        "syllables": [
          "die",
          "Glück",
          "wün",
          "sche"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w10",
        "de": "organisieren",
        "vi": "tổ chức",
        "ipa": "/ɔʁɡaniˈziːʁən/",
        "syllables": [
          "or",
          "ga",
          "ni",
          "sie",
          "ren"
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "vorbereiten",
        "vi": "chuẩn bị",
        "ipa": "/ˈfoːɐ̯ˌbɛʁaɪ̯tn̩/",
        "syllables": [
          "vor",
          "be",
          "rei",
          "ten"
        ],
        "notation": [
          80,
          40,
          40,
          40
        ]
      },
      {
        "id": "w12",
        "de": "abgesagt",
        "vi": "bị hủy",
        "ipa": "/ˈapɡəˌzaːkt/",
        "syllables": [
          "ab",
          "ge",
          "sagt"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w13",
        "de": "teilnehmen",
        "vi": "tham gia",
        "ipa": "/ˈtaɪ̯lˌneːmən/",
        "syllables": [
          "teil",
          "neh",
          "men"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w14",
        "de": "der Gast",
        "vi": "khách",
        "ipa": "/deːɐ̯ ɡast/",
        "syllables": [
          "der",
          "Gast"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w15",
        "de": "das Jubiläum",
        "vi": "lễ kỷ niệm",
        "ipa": "/das juːbiˈlɛːʊm/",
        "syllables": [
          "das",
          "Ju",
          "bi",
          "lä",
          "um"
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Wir feiern dieses Jahr ein großes Fest.",
        "vi": "Năm nay chúng tôi tổ chức một bữa tiệc lớn.",
        "ipa": "/viːɐ̯ ˈfaɪ̯ɐn ˈdiːzəs jaːɐ̯ aɪ̯n ˈɡʁoːsəs fɛst/",
        "syllables": [
          "Wir",
          "fei",
          "ern",
          "die",
          "ses",
          "Jahr",
          "ein",
          "gro",
          "ßes",
          "Fest."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          80
        ]
      },
      {
        "id": "s2",
        "de": "Ich muss noch die Einladungen verschicken.",
        "vi": "Tôi vẫn phải gửi các thiệp mời.",
        "ipa": "/ɪç mʊs nɔx diː ˈaɪ̯nˌlaːdʊŋən fɛɐ̯ˈʃɪkn̩/",
        "syllables": [
          "Ich",
          "muss",
          "noch",
          "die",
          "Ein",
          "la",
          "dun",
          "gen",
          "ver",
          "schi",
          "cken."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s3",
        "de": "Hast du schon ein Geschenk für sie?",
        "vi": "Bạn đã có quà cho cô ấy chưa?",
        "ipa": "/hast duː ʃoːn aɪ̯n ɡəˈʃɛŋk fyːɐ̯ ziː/",
        "syllables": [
          "Hast",
          "du",
          "schon",
          "ein",
          "Ge",
          "schenk",
          "für",
          "sie?"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "s4",
        "de": "Wir haben meine Freunde zum Geburtstag eingeladen.",
        "vi": "Chúng tôi đã mời bạn bè đến dự sinh nhật.",
        "ipa": "/viːɐ̯ ˈhaːbn̩ ˈmaɪ̯nə ˈfʁɔɪ̯ndə t͡sʊm ˈɡəˈbuːɐ̯t͡staːk ˈaɪ̯nˌlaːdn̩/",
        "syllables": [
          "Wir",
          "ha",
          "ben",
          "mei",
          "ne",
          "Freun",
          "de",
          "zum",
          "Ge",
          "burts",
          "tag",
          "ein",
          "ge",
          "la",
          "den."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          80,
          80,
          40,
          40,
          40
        ]
      },
      {
        "id": "s5",
        "de": "Herzlichen Glückwunsch zum Jubiläum!",
        "vi": "Chúc mừng kỷ niệm!",
        "ipa": "/ˈhɛʁt͡slɪçn̩ ˈɡlʏkˌvʏnʃə t͡sʊm juːbiˈlɛːʊm/",
        "syllables": [
          "Herz",
          "li",
          "chen",
          "Glück",
          "wün",
          "sche",
          "zum",
          "Ju",
          "bi",
          "lä",
          "um!"
        ],
        "notation": [
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s6",
        "de": "Die Hochzeit war sehr schön und festlich.",
        "vi": "Đám cưới rất đẹp và trang trọng.",
        "ipa": "/diː ˈhɔxˌt͡saɪ̯t vaːɐ̯ zeːɐ̯ ʃøːn ʊnt ˈfɛstlɪç/",
        "syllables": [
          "Die",
          "Hoch",
          "zeit",
          "war",
          "sehr",
          "schön",
          "und",
          "fest",
          "lich."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s7",
        "de": "Er organisiert die Party für seinen Bruder.",
        "vi": "Anh ấy đang tổ chức bữa tiệc cho em trai mình.",
        "ipa": "/eːɐ̯ ɔʁɡaniˈziːɐ̯t diː ˈpaːɐ̯tiː fyːɐ̯ ˈzaɪ̯nən ˈbʁuːdɐ/",
        "syllables": [
          "Er",
          "or",
          "ga",
          "ni",
          "siert",
          "die",
          "Par",
          "ty",
          "für",
          "sei",
          "nen",
          "Bru",
          "der."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s8",
        "de": "Ich habe die Dekoration für die Feier vorbereitet.",
        "vi": "Tôi đã chuẩn bị đồ trang trí cho buổi lễ.",
        "ipa": "/ɪç ˈhaːbə diː dekoʁat͡si̯oːn fyːɐ̯ diː ˈfaɪ̯ɐ ˈfoːɐ̯ˌbɛʁaɪ̯tət/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "die",
          "De",
          "ko",
          "ra",
          "ti",
          "on",
          "für",
          "die",
          "Fei",
          "er",
          "vor",
          "be",
          "rei",
          "tet."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40
        ]
      },
      {
        "id": "s9",
        "de": "Als ich Kind war, haben wir immer viel gefeiert.",
        "vi": "Khi tôi còn nhỏ, chúng tôi luôn tổ chức nhiều buổi tiệc.",
        "ipa": "/als ɪç kɪnt vaːɐ̯ ˈhaːbn̩ viːɐ̯ ˈɪmɐ fiːl ɡəˈfaɪ̯ɐt/",
        "syllables": [
          "Als",
          "ich",
          "Kind",
          "war,",
          "ha",
          "ben",
          "wir",
          "im",
          "mer",
          "viel",
          "ge",
          "fei",
          "ert."
        ],
        "notation": [
          40,
          40,
          80,
          0,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s10",
        "de": "Wenn du Zeit hast, kannst du uns helfen.",
        "vi": "Nếu bạn có thời gian, bạn có thể giúp chúng tôi.",
        "ipa": "/vɛn duː t͡saɪ̯t hast, kanst duː ʊns ˈhɛlfn̩/",
        "syllables": [
          "Wenn",
          "du",
          "Zeit",
          "hast,",
          "kannst",
          "du",
          "uns",
          "hel",
          "fen."
        ],
        "notation": [
          40,
          40,
          80,
          0,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s11",
        "de": "Die Feier wurde leider wegen schlechten Wetters abgesagt.",
        "vi": "Buổi lễ tiếc là đã bị hủy vì thời tiết xấu.",
        "ipa": "/diː ˈfaɪ̯ɐ ˈvʊʁdə ˈlaɪ̯dɐ ˈveːɡn̩ ˈʃlɛçtn̩ ˈvɛtɐs ˈapɡəˌzaːkt/",
        "syllables": [
          "Die",
          "Fei",
          "er",
          "wur",
          "de",
          "lei",
          "der",
          "we",
          "gen",
          "schlech",
          "ten",
          "Wet",
          "ters",
          "ab",
          "ge",
          "sagt."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "s12",
        "de": "Wie viele Gäste kommen zur Party?",
        "vi": "Có bao nhiêu khách sẽ đến dự tiệc?",
        "ipa": "/viː ˈfiːlə ˈɡɛstə ˈkɔmən t͡sʊɐ̯ ˈpaːɐ̯tiː/",
        "syllables": [
          "Wie",
          "vie",
          "le",
          "Gäs",
          "te",
          "kom",
          "men",
          "zur",
          "Par",
          "ty?"
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s13",
        "de": "Ich möchte an der Geburtstagsfeier teilnehmen.",
        "vi": "Tôi muốn tham gia vào buổi tiệc sinh nhật.",
        "ipa": "/ɪç ˈmœçtə an deːɐ̯ ɡəˈbuːɐ̯t͡staːksˌfaɪ̯ɐ ˈtaɪ̯lˌneːmən/",
        "syllables": [
          "Ich",
          "möch",
          "te",
          "an",
          "der",
          "Ge",
          "burts",
          "tags",
          "fei",
          "er",
          "teil",
          "neh",
          "men."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "s14",
        "de": "Sie gratuliert ihm herzlich zu seinem Erfolg.",
        "vi": "Cô ấy nhiệt liệt chúc mừng thành công của anh ấy.",
        "ipa": "/ziː ɡratuˈliːɐ̯t iːm ˈhɛʁt͡slɪç t͡suː ˈzaɪ̯nəm ɛɐ̯ˈfɔlk/",
        "syllables": [
          "Sie",
          "gra",
          "tu",
          "liert",
          "ihm",
          "herz",
          "lich",
          "zu",
          "sei",
          "nem",
          "Er",
          "folg."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s15",
        "de": "Wir bekommen viele Glückwünsche von unseren Freunden.",
        "vi": "Chúng tôi nhận được nhiều lời chúc mừng từ bạn bè.",
        "ipa": "/viːɐ̯ bəˈkɔmən ˈfiːlə ˈɡlʏkˌvʏnʃə fɔn ˈʊnzəʁən ˈfʁɔɪ̯ndən/",
        "syllables": [
          "Wir",
          "be",
          "kom",
          "men",
          "vie",
          "le",
          "Glück",
          "wün",
          "sche",
          "von",
          "un",
          "se",
          "ren",
          "Freun",
          "den."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      }
    ]
  },
  "l22": {
    "words": [
      {
        "id": "w1",
        "de": "würde",
        "vi": "sẽ (trong câu điều kiện)",
        "ipa": "/ˈvʏrdə/",
        "syllables": [
          "wür",
          "de"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "könnte",
        "vi": "có thể (trong câu điều kiện)",
        "ipa": "/ˈkœntə/",
        "syllables": [
          "könn",
          "te"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "hätte",
        "vi": "sẽ có",
        "ipa": "/ˈhɛtə/",
        "syllables": [
          "hät",
          "te"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "wäre",
        "vi": "sẽ là",
        "ipa": "/ˈvɛːrə/",
        "syllables": [
          "wä",
          "re"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "der Wunsch",
        "vi": "mong muốn, ước muốn",
        "ipa": "/deːɐ̯ ˈvʊnʃ/",
        "syllables": [
          "der",
          "Wunsch"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w6",
        "de": "die Zukunft",
        "vi": "tương lai",
        "ipa": "/diː ˈtsuːkʊnft/",
        "syllables": [
          "die",
          "Zu",
          "kunft"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "der Beruf",
        "vi": "nghề nghiệp",
        "ipa": "/deːɐ̯ beˈruːf/",
        "syllables": [
          "der",
          "Be",
          "ruf"
        ],
        "notation": [
          40,
          40,
          80
        ]
      },
      {
        "id": "w8",
        "de": "studieren",
        "vi": "học đại học",
        "ipa": "/ʃtuˈdiːrən/",
        "syllables": [
          "stu",
          "die",
          "ren"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "die Ausbildung",
        "vi": "khóa đào tạo nghề",
        "ipa": "/diː ˈaʊ̯sˌbɪldʊŋ/",
        "syllables": [
          "die",
          "Aus",
          "bil",
          "dung"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w10",
        "de": "sich bewerben um",
        "vi": "ứng tuyển vào",
        "ipa": "/zɪç bəˈvɛrbən ʊm/",
        "syllables": [
          "sich",
          "be",
          "wer",
          "ben",
          "um"
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w11",
        "de": "selbstständig",
        "vi": "tự làm chủ, độc lập",
        "ipa": "/ˈzɛlpstˌʃtɛndɪç/",
        "syllables": [
          "selbst",
          "stän",
          "dig"
        ],
        "notation": [
          80,
          60,
          40
        ]
      },
      {
        "id": "w12",
        "de": "sich vorstellen",
        "vi": "tưởng tượng",
        "ipa": "/zɪç ˈfɔʁˌʃtɛlən/",
        "syllables": [
          "sich",
          "vor",
          "stel",
          "len"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w13",
        "de": "die Karriere",
        "vi": "sự nghiệp",
        "ipa": "/diː kaˈri̯eːrə/",
        "syllables": [
          "die",
          "Kar",
          "rie",
          "re"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "erreichen",
        "vi": "đạt được",
        "ipa": "/ɛɐ̯ˈraɪ̯çn̩/",
        "syllables": [
          "er",
          "rei",
          "chen"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "das Praktikum",
        "vi": "kỳ thực tập",
        "ipa": "/das ˈpraktikʊm/",
        "syllables": [
          "das",
          "Prak",
          "ti",
          "kum"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Wenn ich mehr Zeit hätte, würde ich reisen.",
        "vi": "Nếu tôi có nhiều thời gian hơn, tôi sẽ đi du lịch.",
        "ipa": "/vɛn ɪç meːɐ̯ tsaɪ̯t ˈhɛtə ˈvʏrdə ɪç ˈraɪ̯zn̩/",
        "syllables": [
          "Wenn",
          "ich",
          "mehr",
          "Zeit",
          "hät",
          "te,",
          "wür",
          "de",
          "ich",
          "rei",
          "sen."
        ],
        "notation": [
          40,
          40,
          60,
          80,
          80,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s2",
        "de": "Ich würde gerne einen neuen Beruf lernen.",
        "vi": "Tôi rất muốn học một nghề mới.",
        "ipa": "/ɪç ˈvʏrdə ˈɡɛrnə ˈaɪ̯nən ˈnɔɪ̯ən beˈruːf ˈlɛrnən/",
        "syllables": [
          "Ich",
          "wür",
          "de",
          "ger",
          "ne",
          "ei",
          "nen",
          "neu",
          "en",
          "Be",
          "ruf",
          "ler",
          "nen."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          80,
          40
        ]
      },
      {
        "id": "s3",
        "de": "Könntest du mir bitte helfen?",
        "vi": "Bạn có thể giúp tôi được không?",
        "ipa": "/ˈkœntəst duː miːɐ̯ ˈbɪtə ˈhɛlfn̩/",
        "syllables": [
          "Könn",
          "test",
          "du",
          "mir",
          "bit",
          "te",
          "hel",
          "fen?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s4",
        "de": "Was würdest du in meiner Situation tun?",
        "vi": "Bạn sẽ làm gì trong tình huống của tôi?",
        "ipa": "/vas ˈvʏrdəst duː ɪn ˈmaɪ̯nɐ zɪtu̯aˈtsi̯oːn tuːn/",
        "syllables": [
          "Was",
          "wür",
          "dest",
          "du",
          "in",
          "mei",
          "ner",
          "Si",
          "tu",
          "a",
          "ti",
          "on",
          "tun?"
        ],
        "notation": [
          60,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          60,
          80,
          80
        ]
      },
      {
        "id": "s5",
        "de": "Mein größter Wunsch wäre, die Welt zu sehen.",
        "vi": "Ước muốn lớn nhất của tôi là được nhìn ngắm thế giới.",
        "ipa": "/maɪ̯n ˈɡrøːstɐ vʊnʃ ˈvɛːrə diː vɛlt tsuː ˈzeːən/",
        "syllables": [
          "Mein",
          "grö",
          "ßter",
          "Wunsch",
          "wä",
          "re,",
          "die",
          "Welt",
          "zu",
          "se",
          "hen."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          80,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s6",
        "de": "Er möchte in der Zukunft selbstständig sein.",
        "vi": "Anh ấy muốn tự làm chủ trong tương lai.",
        "ipa": "/eːɐ̯ ˈmœçtə ɪn deːɐ̯ ˈtsuːkʊnft ˈzɛlpstˌʃtɛndɪç zaɪ̯n/",
        "syllables": [
          "Er",
          "möch",
          "te",
          "in",
          "der",
          "Zu",
          "kunft",
          "selbst",
          "stän",
          "dig",
          "sein."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          60,
          40,
          80
        ]
      },
      {
        "id": "s7",
        "de": "Sie bewirbt sich um ein Praktikum bei einer Firma.",
        "vi": "Cô ấy đang nộp đơn xin thực tập tại một công ty.",
        "ipa": "/ziː bəˈvɪrpt zɪç ʊm aɪ̯n ˈpraktikʊm baɪ̯ ˈaɪ̯nɐ ˈfɪrma/",
        "syllables": [
          "Sie",
          "be",
          "wirbt",
          "sich",
          "um",
          "ein",
          "Prak",
          "ti",
          "kum",
          "bei",
          "ei",
          "ner",
          "Fir",
          "ma."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          60,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s8",
        "de": "Ich könnte mir vorstellen, im Ausland zu arbeiten.",
        "vi": "Tôi có thể hình dung mình làm việc ở nước ngoài.",
        "ipa": "/ɪç ˈkœntə miːɐ̯ ˈfɔʁˌʃtɛlən ɪm ˈaʊ̯slant tsuː ˈaʁbaɪ̯tn̩/",
        "syllables": [
          "Ich",
          "könn",
          "te",
          "mir",
          "vor",
          "stel",
          "len,",
          "im",
          "Aus",
          "land",
          "zu",
          "ar",
          "bei",
          "ten."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "s9",
        "de": "Für viele ist eine gute Ausbildung wichtig für die Karriere.",
        "vi": "Đối với nhiều người, một khóa đào tạo tốt là quan trọng cho sự nghiệp.",
        "ipa": "/fyːɐ̯ ˈfiːlə ɪst ˈaɪ̯nə ˈɡuːtə ˈaʊ̯sˌbɪldʊŋ ˈvɪçtɪç fyːɐ̯ diː kaˈri̯eːrə/",
        "syllables": [
          "Für",
          "vie",
          "le",
          "ist",
          "ei",
          "ne",
          "gu",
          "te",
          "Aus",
          "bil",
          "dung",
          "wich",
          "tig",
          "für",
          "die",
          "Kar",
          "rie",
          "re."
        ],
        "notation": [
          60,
          80,
          40,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s10",
        "de": "Wenn ich jung wäre, würde ich studieren.",
        "vi": "Nếu tôi còn trẻ, tôi sẽ học đại học.",
        "ipa": "/vɛn ɪç jʊŋ ˈvɛːrə ˈvʏrdə ɪç ʃtuˈdiːrən/",
        "syllables": [
          "Wenn",
          "ich",
          "jung",
          "wä",
          "re,",
          "wür",
          "de",
          "ich",
          "stu",
          "die",
          "ren."
        ],
        "notation": [
          40,
          40,
          80,
          80,
          40,
          80,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s11",
        "de": "Um dieses Ziel zu erreichen, muss man hart arbeiten.",
        "vi": "Để đạt được mục tiêu này, người ta phải làm việc chăm chỉ.",
        "ipa": "/ʊm ˈdiːzəs tsiːl tsuː ɛɐ̯ˈraɪ̯çn̩ mʊs man haʁt ˈaʁbaɪ̯tn̩/",
        "syllables": [
          "Um",
          "die",
          "ses",
          "Ziel",
          "zu",
          "er",
          "rei",
          "chen,",
          "muss",
          "man",
          "hart",
          "ar",
          "bei",
          "ten."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          60,
          40,
          80,
          80,
          40,
          40
        ]
      },
      {
        "id": "s12",
        "de": "Ich träume davon, eine eigene Firma zu gründen.",
        "vi": "Tôi mơ ước thành lập một công ty riêng.",
        "ipa": "/ɪç ˈtrɔɪ̯mə daˈfɔn ˈaɪ̯nə ˈaɪ̯ɡənə ˈfɪrma tsuː ˈɡrʏndn̩/",
        "syllables": [
          "Ich",
          "träu",
          "me",
          "da",
          "von,",
          "ei",
          "ne",
          "ei",
          "ge",
          "ne",
          "Fir",
          "ma",
          "zu",
          "grün",
          "den."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          80,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s13",
        "de": "Manche Leute hätten gerne mehr Freizeit.",
        "vi": "Một số người muốn có nhiều thời gian rảnh hơn.",
        "ipa": "/ˈmançə ˈlɔɪ̯tə ˈhɛtən ˈɡɛrnə meːɐ̯ ˈfraɪ̯tsaɪ̯t/",
        "syllables": [
          "Man",
          "che",
          "Leu",
          "te",
          "hät",
          "ten",
          "ger",
          "ne",
          "mehr",
          "Frei",
          "zeit."
        ],
        "notation": [
          80,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          60,
          80,
          40
        ]
      },
      {
        "id": "s14",
        "de": "Wenn ich du wäre, würde ich mich besser vorbereiten.",
        "vi": "Nếu tôi là bạn, tôi sẽ chuẩn bị tốt hơn.",
        "ipa": "/vɛn ɪç duː ˈvɛːrə ˈvʏrdə ɪç mɪç ˈbɛsɐ ˈfoːɐ̯bəˌraɪ̯tn̩/",
        "syllables": [
          "Wenn",
          "ich",
          "du",
          "wä",
          "re,",
          "wür",
          "de",
          "ich",
          "mich",
          "bes",
          "ser",
          "vor",
          "be",
          "rei",
          "ten."
        ],
        "notation": [
          40,
          40,
          80,
          80,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "s15",
        "de": "Wie stellst du dir deine berufliche Zukunft vor?",
        "vi": "Bạn hình dung tương lai nghề nghiệp của mình như thế nào?",
        "ipa": "/viː ʃtɛlst duː diːɐ̯ ˈdaɪ̯nə bəˈruːflɪçə ˈtsuːkʊnft foːɐ̯/",
        "syllables": [
          "Wie",
          "stellst",
          "du",
          "dir",
          "dei",
          "ne",
          "be",
          "ruf",
          "li",
          "che",
          "Zu",
          "kunft",
          "vor?"
        ],
        "notation": [
          60,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80
        ]
      }
    ]
  },
  "l24": {
    "words": [
      {
        "id": "w1",
        "de": "der Job",
        "vi": "công việc",
        "ipa": "/dɛɐ̯ jɔp/",
        "syllables": [
          "der",
          "Job"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w2",
        "de": "die Bewerbung",
        "vi": "đơn xin việc",
        "ipa": "/di bəˈvɛʁbʊŋ/",
        "syllables": [
          "die",
          "Be",
          "wer",
          "bung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "die Stelle",
        "vi": "vị trí, chỗ làm",
        "ipa": "/di ˈʃtɛlə/",
        "syllables": [
          "die",
          "Stel",
          "le"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "sich bewerben",
        "vi": "ứng tuyển",
        "ipa": "/zɪç bəˈvɛʁbm̩/",
        "syllables": [
          "sich",
          "be",
          "wer",
          "ben"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "die Berufserfahrung",
        "vi": "kinh nghiệm nghề nghiệp",
        "ipa": "/di bəˈʁuːfsʔɛɐ̯ˌfaːʁʊŋ/",
        "syllables": [
          "die",
          "Be",
          "rufs",
          "er",
          "fah",
          "rung"
        ],
        "notation": [
          40,
          40,
          60,
          40,
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "die Qualifikation",
        "vi": "bằng cấp, trình độ",
        "ipa": "/di kvalifikaˈt͡sjoːn/",
        "syllables": [
          "die",
          "Qua",
          "li",
          "fi",
          "ka",
          "tion"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "w7",
        "de": "die Fähigkeit",
        "vi": "khả năng, năng lực",
        "ipa": "/di ˈfɛːɪçkaɪ̯t/",
        "syllables": [
          "die",
          "Fä",
          "hig",
          "keit"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w8",
        "de": "der Lebenslauf",
        "vi": "sơ yếu lý lịch",
        "ipa": "/dɛɐ̯ ˈleːbn̩sˌlaʊ̯f/",
        "syllables": [
          "der",
          "Le",
          "bens",
          "lauf"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w9",
        "de": "das Vorstellungsgespräch",
        "vi": "phỏng vấn xin việc",
        "ipa": "/das ˈfoːɐ̯ʃtɛlʊŋsɡəˌʃpʁɛːç/",
        "syllables": [
          "das",
          "Vor",
          "stel",
          "lungs",
          "ge",
          "spräch"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60
        ]
      },
      {
        "id": "w10",
        "de": "die Ausbildung",
        "vi": "khóa đào tạo, học nghề",
        "ipa": "/di ˈaʊ̯sˌbɪldʊŋ/",
        "syllables": [
          "die",
          "Aus",
          "bil",
          "dung"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w11",
        "de": "der Kollege",
        "vi": "đồng nghiệp (nam)",
        "ipa": "/dɛɐ̯ koˈleːɡə/",
        "syllables": [
          "der",
          "Ko",
          "le",
          "ge"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "die Karriere",
        "vi": "sự nghiệp",
        "ipa": "/di kaˈʁɪɛʁə/",
        "syllables": [
          "die",
          "Kar",
          "rie",
          "re"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "erfolgreich",
        "vi": "thành công",
        "ipa": "/ɛɐ̯ˈfɔlkʁaɪ̯ç/",
        "syllables": [
          "er",
          "folg",
          "reich"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "teamfähig",
        "vi": "có khả năng làm việc nhóm",
        "ipa": "/ˈtiːmˌfɛːɪç/",
        "syllables": [
          "team",
          "fä",
          "hig"
        ],
        "notation": [
          80,
          60,
          40
        ]
      },
      {
        "id": "w15",
        "de": "der Traumjob",
        "vi": "công việc mơ ước",
        "ipa": "/dɛɐ̯ ˈtʁaʊ̯mˌjɔp/",
        "syllables": [
          "der",
          "Traum",
          "job"
        ],
        "notation": [
          40,
          80,
          60
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Ich suche einen neuen Job.",
        "vi": "Tôi đang tìm một công việc mới.",
        "ipa": "/ɪç ˈzuːxə ˈaɪ̯nən ˈnɔɪ̯ən ˈjɔp/",
        "syllables": [
          "Ich",
          "su",
          "che",
          "ei",
          "nen",
          "neu",
          "en",
          "Job."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80
        ]
      },
      {
        "id": "s2",
        "de": "Sie hat sich auf diese Stelle beworben.",
        "vi": "Cô ấy đã ứng tuyển vào vị trí này.",
        "ipa": "/ziː hat zɪç aʊ̯f ˈdiːzə ˈʃtɛlə bəˈvɔʁbn̩/",
        "syllables": [
          "Sie",
          "hat",
          "sich",
          "auf",
          "die",
          "se",
          "Stel",
          "le",
          "be",
          "wor",
          "ben."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s3",
        "de": "Meine Berufserfahrung ist sehr wichtig.",
        "vi": "Kinh nghiệm nghề nghiệp của tôi rất quan trọng.",
        "ipa": "/ˌmaɪ̯nə bəˈʁuːfsʔɛɐ̯ˌfaːʁʊŋ ɪst zeːɐ̯ ˈvɪçtɪç/",
        "syllables": [
          "Mei",
          "ne",
          "Be",
          "rufs",
          "er",
          "fah",
          "rung",
          "ist",
          "sehr",
          "wich",
          "tig."
        ],
        "notation": [
          60,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s4",
        "de": "Man sollte einen guten Lebenslauf haben.",
        "vi": "Người ta nên có một sơ yếu lý lịch tốt.",
        "ipa": "/man ˈzɔltə ˈaɪ̯nən ˈɡuːtn̩ ˈleːbn̩sˌlaʊ̯f ˈhaːbn̩/",
        "syllables": [
          "Man",
          "soll",
          "te",
          "ei",
          "nen",
          "gu",
          "ten",
          "Le",
          "bens",
          "lauf",
          "ha",
          "ben."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          60,
          60,
          40
        ]
      },
      {
        "id": "s5",
        "de": "Das Vorstellungsgespräch war sehr interessant.",
        "vi": "Buổi phỏng vấn xin việc rất thú vị.",
        "ipa": "/das ˈfoːɐ̯ʃtɛlʊŋsɡəˌʃpʁɛːç vaːɐ̯ zeːɐ̯ ˌɪntəʁɛˈsant/",
        "syllables": [
          "Das",
          "Vor",
          "stel",
          "lungs",
          "ge",
          "spräch",
          "war",
          "sehr",
          "in",
          "te",
          "res",
          "sant."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          40,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s6",
        "de": "Welche Qualifikationen bringen Sie mit?",
        "vi": "Bạn có những bằng cấp gì?",
        "ipa": "/ˈvɛlçə kvalifikaˈt͡sjoːnən ˈbʁɪŋən ziː mɪt/",
        "syllables": [
          "Wel",
          "che",
          "Qua",
          "li",
          "fi",
          "ka",
          "tio",
          "nen",
          "brin",
          "gen",
          "Sie",
          "mit?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40
        ]
      },
      {
        "id": "s7",
        "de": "Er möchte eine Ausbildung als Koch machen.",
        "vi": "Anh ấy muốn học nghề đầu bếp.",
        "ipa": "/ɛɐ̯ ˈmœçtə ˈaɪ̯nə ˈaʊ̯sˌbɪldʊŋ als kɔx ˈmaxn̩/",
        "syllables": [
          "Er",
          "möch",
          "te",
          "ei",
          "ne",
          "Aus",
          "bil",
          "dung",
          "als",
          "Koch",
          "ma",
          "chen."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          80,
          40
        ]
      },
      {
        "id": "s8",
        "de": "Ich bin sehr teamfähig und motiviert.",
        "vi": "Tôi rất có khả năng làm việc nhóm và năng động.",
        "ipa": "/ɪç bɪn zeːɐ̯ ˈtiːmˌfɛːɪç ʊnt motiˈviːɐ̯t/",
        "syllables": [
          "Ich",
          "bin",
          "sehr",
          "team",
          "fä",
          "hig",
          "und",
          "mo",
          "ti",
          "viert."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          60,
          40,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s9",
        "de": "Meine Kollegen sind sehr nett und hilfsbereit.",
        "vi": "Các đồng nghiệp của tôi rất tốt bụng và sẵn sàng giúp đỡ.",
        "ipa": "/ˈmaɪ̯nə koˈleːɡn̩ zɪnt zeːɐ̯ nɛt ʊnt ˈhɪlfsbəˌʁaɪ̯t/",
        "syllables": [
          "Mei",
          "ne",
          "Ko",
          "le",
          "gen",
          "sind",
          "sehr",
          "nett",
          "und",
          "Hilfs",
          "be",
          "reit."
        ],
        "notation": [
          60,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "s10",
        "de": "Sie träumt von einer erfolgreichen Karriere.",
        "vi": "Cô ấy mơ ước có một sự nghiệp thành công.",
        "ipa": "/ziː tʁɔʏ̯mt fɔn ˈaɪ̯nɐ ɛɐ̯ˈfɔlkʁaɪ̯çn̩ kaˈʁɪɛʁə/",
        "syllables": [
          "Sie",
          "träumt",
          "von",
          "ei",
          "ner",
          "er",
          "folg",
          "rei",
          "chen",
          "Kar",
          "rie",
          "re."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s11",
        "de": "Ich muss meine Bewerbungsunterlagen vorbereiten.",
        "vi": "Tôi phải chuẩn bị hồ sơ xin việc của mình.",
        "ipa": "/ɪç mʊs ˈmaɪ̯nə bəˈvɛʁbʊŋsˌʔʊntɐlaːɡn̩ ˈfoːɐ̯bəˌʁaɪ̯tn̩/",
        "syllables": [
          "Ich",
          "muss",
          "mei",
          "ne",
          "Be",
          "wer",
          "bungs",
          "un",
          "ter",
          "la",
          "gen",
          "vor",
          "be",
          "rei",
          "ten."
        ],
        "notation": [
          40,
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "s12",
        "de": "Er hat alle notwendigen Fähigkeiten für den Job.",
        "vi": "Anh ấy có tất cả các kỹ năng cần thiết cho công việc.",
        "ipa": "/ɛɐ̯ hat ˈalə ˈnoːtvɛndɪɡn̩ ˈfɛːɪçkaɪ̯tn̩ fyːɐ̯ deːn jɔp/",
        "syllables": [
          "Er",
          "hat",
          "al",
          "le",
          "not",
          "wen",
          "di",
          "gen",
          "Fä",
          "hig",
          "kei",
          "ten",
          "für",
          "den",
          "Job."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s13",
        "de": "Sollen wir uns online bewerben?",
        "vi": "Chúng ta có nên ứng tuyển trực tuyến không?",
        "ipa": "/ˈzɔlən viːɐ̯ ʊns ˈɔnlaɪ̯n bəˈvɛʁbn̩/",
        "syllables": [
          "Sol",
          "len",
          "wir",
          "uns",
          "on",
          "line",
          "be",
          "wer",
          "ben?"
        ],
        "notation": [
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s14",
        "de": "Der Traumjob ist nicht immer leicht zu finden.",
        "vi": "Công việc mơ ước không phải lúc nào cũng dễ tìm.",
        "ipa": "/dɛɐ̯ ˈtʁaʊ̯mˌjɔp ɪst nɪçt ˈɪmɐ laɪ̯çt t͡suː ˈfɪndn̩/",
        "syllables": [
          "Der",
          "Traum",
          "job",
          "ist",
          "nicht",
          "im",
          "mer",
          "leicht",
          "zu",
          "fin",
          "den."
        ],
        "notation": [
          40,
          80,
          60,
          40,
          40,
          60,
          40,
          60,
          40,
          80,
          40
        ]
      },
      {
        "id": "s15",
        "de": "Sie wird morgen ihr erstes Vorstellungsgespräch haben.",
        "vi": "Cô ấy sẽ có buổi phỏng vấn xin việc đầu tiên vào ngày mai.",
        "ipa": "/ziː vɪɐ̯t ˈmɔʁɡn̩ iːɐ̯ ˈɛɐ̯stəs ˈfoːɐ̯ʃtɛlʊŋsɡəˌʃpʁɛːç ˈhaːbn̩/",
        "syllables": [
          "Sie",
          "wird",
          "mor",
          "gen",
          "ihr",
          "ers",
          "tes",
          "Vor",
          "stel",
          "lungs",
          "ge",
          "spräch",
          "ha",
          "ben."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          60,
          80,
          40
        ]
      }
    ]
  },
  "l21": {
    "words": [
      {
        "id": "w1",
        "de": "die Unterkunft",
        "vi": "chỗ ở",
        "ipa": "/diː 'ʊntɐˌkʊnft/",
        "syllables": [
          "die",
          "Un",
          "ter",
          "kunft"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w2",
        "de": "buchen",
        "vi": "đặt chỗ, đặt vé",
        "ipa": "/'buːxn̩/",
        "syllables": [
          "bu",
          "chen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "der Reisepass",
        "vi": "hộ chiếu",
        "ipa": "/deːɐ̯ 'ʁaɪ̯zəˌpas/",
        "syllables": [
          "der",
          "Rei",
          "se",
          "pass"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w4",
        "de": "die Sehenswürdigkeit",
        "vi": "điểm tham quan, thắng cảnh",
        "ipa": "/diː 'zeːənˌvʏʁdɪçˌkaɪ̯t/",
        "syllables": [
          "die",
          "Se",
          "hens",
          "wür",
          "dig",
          "keit"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60
        ]
      },
      {
        "id": "w5",
        "de": "der Koffer",
        "vi": "vali",
        "ipa": "/deːɐ̯ 'kɔfɐ/",
        "syllables": [
          "der",
          "Ko",
          "ffer"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "ausruhen",
        "vi": "nghỉ ngơi",
        "ipa": "/'aʊ̯sˌʁuːən/",
        "syllables": [
          "aus",
          "ru",
          "hen"
        ],
        "notation": [
          80,
          40,
          40
        ]
      },
      {
        "id": "w7",
        "de": "wandern",
        "vi": "đi bộ đường dài, đi dạo",
        "ipa": "/'vandɐn/",
        "syllables": [
          "wan",
          "dern"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "der Strand",
        "vi": "bãi biển",
        "ipa": "/deːɐ̯ ʃtʁant/",
        "syllables": [
          "der",
          "Strand"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w9",
        "de": "erholsam",
        "vi": "thư giãn, thoải mái",
        "ipa": "/ɛɐ̯ˈhoːlˌzaːm/",
        "syllables": [
          "er",
          "hol",
          "sam"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "erleben",
        "vi": "trải nghiệm",
        "ipa": "/ɛɐ̯ˈleːbn̩/",
        "syllables": [
          "er",
          "le",
          "ben"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "der Ausflug",
        "vi": "chuyến đi chơi, dã ngoại",
        "ipa": "/deːɐ̯ 'aʊ̯sfluːk/",
        "syllables": [
          "der",
          "Aus",
          "flug"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "packen",
        "vi": "đóng gói hành lý",
        "ipa": "/'pakn̩/",
        "syllables": [
          "pa",
          "cken"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "die Berge",
        "vi": "núi",
        "ipa": "/diː 'bɛʁɡə/",
        "syllables": [
          "die",
          "Ber",
          "ge"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w14",
        "de": "vergessen",
        "vi": "quên",
        "ipa": "/fɛɐ̯ˈɡɛsn̩/",
        "syllables": [
          "ver",
          "ge",
          "ssen"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "das Meer",
        "vi": "biển",
        "ipa": "/das meːɐ̯/",
        "syllables": [
          "das",
          "Meer"
        ],
        "notation": [
          40,
          80
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Wir haben eine schöne Unterkunft für unseren Urlaub gebucht.",
        "vi": "Chúng tôi đã đặt một chỗ ở đẹp cho kỳ nghỉ của mình.",
        "ipa": "/viːɐ̯ 'haːbn̩ 'aɪ̯nə 'ʃøːnə 'ʊntɐˌkʊnft fyːɐ̯ 'ʊnzəʁən 'ʊɐ̯laʊ̯p ɡə'buːxt/",
        "syllables": [
          "Wir",
          "ha",
          "ben",
          "ei",
          "ne",
          "schö",
          "ne",
          "Un",
          "ter",
          "kunft",
          "für",
          "un",
          "se",
          "ren",
          "Ur",
          "laub",
          "ge",
          "bucht",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          60,
          40,
          40,
          40,
          40,
          60,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s2",
        "de": "Hast du deinen Reisepass eingepackt?",
        "vi": "Bạn đã đóng gói hộ chiếu của mình chưa?",
        "ipa": "/hast duː 'daɪ̯nən 'ʁaɪ̯zəˌpas 'aɪ̯nɡəˌpakt/",
        "syllables": [
          "Hast",
          "du",
          "dei",
          "nen",
          "Rei",
          "se",
          "pass",
          "ein",
          "ge",
          "packt",
          "?"
        ],
        "notation": [
          80,
          40,
          60,
          40,
          80,
          40,
          60,
          80,
          40,
          60,
          0
        ]
      },
      {
        "id": "s3",
        "de": "Letzten Sommer besuchten wir viele Sehenswürdigkeiten in Berlin.",
        "vi": "Mùa hè năm ngoái, chúng tôi đã thăm nhiều thắng cảnh ở Berlin.",
        "ipa": "/'lɛtstn̩ 'zɔmɐ bə'zuːxtn̩ viːɐ̯ 'fiːlə 'zeːənˌvʏʁdɪçˌkaɪ̯tn̩ ɪn bɛɐ̯ˈliːn/",
        "syllables": [
          "Le",
          "tzten",
          "So",
          "mmer",
          "be",
          "such",
          "ten",
          "wir",
          "vie",
          "le",
          "Se",
          "hens",
          "wür",
          "dig",
          "kei",
          "ten",
          "in",
          "Ber",
          "lin",
          "."
        ],
        "notation": [
          80,
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          60,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s4",
        "de": "Ich musste meinen Koffer am Flughafen abholen.",
        "vi": "Tôi phải lấy vali của mình ở sân bay.",
        "ipa": "/ɪç 'mʊstə 'maɪ̯nən 'kɔfɐ am 'fluːkhafn̩ 'apˌhoːln̩/",
        "syllables": [
          "Ich",
          "muss",
          "te",
          "mei",
          "nen",
          "Ko",
          "ffer",
          "am",
          "Flug",
          "ha",
          "fen",
          "ab",
          "ho",
          "len",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s5",
        "de": "Nach dem langen Flug musste ich mich erst einmal ausruhen.",
        "vi": "Sau chuyến bay dài, tôi phải nghỉ ngơi trước đã.",
        "ipa": "/naːx deːm 'laŋən fluːk 'mʊstə ɪç mɪç ɛɐ̯st 'aɪ̯nmaːl 'aʊ̯sˌʁuːən/",
        "syllables": [
          "Nach",
          "dem",
          "lan",
          "gen",
          "Flug",
          "muss",
          "te",
          "ich",
          "mich",
          "erst",
          "ein",
          "mal",
          "aus",
          "ru",
          "hen",
          "."
        ],
        "notation": [
          60,
          40,
          80,
          40,
          60,
          80,
          40,
          40,
          40,
          60,
          80,
          40,
          80,
          40,
          40,
          0
        ]
      },
      {
        "id": "s6",
        "de": "Am Wochenende gehen wir in den Bergen wandern.",
        "vi": "Cuối tuần này chúng tôi sẽ đi bộ đường dài trên núi.",
        "ipa": "/am 'vɔxn̩ˌɛndə 'ɡeːən viːɐ̯ ɪn deːn 'bɛʁɡən 'vandɐn/",
        "syllables": [
          "Am",
          "Wo",
          "chen",
          "en",
          "de",
          "ge",
          "hen",
          "wir",
          "in",
          "den",
          "Ber",
          "gen",
          "wan",
          "dern",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          60,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s7",
        "de": "Der Strand war voller Leute, die schwimmen wollten.",
        "vi": "Bãi biển đầy những người muốn bơi lội.",
        "ipa": "/deːɐ̯ ʃtʁant vaːɐ̯ 'fɔlɐ 'lɔɪ̯tə diː 'ʃvɪmən 'vɔltn̩/",
        "syllables": [
          "Der",
          "Strand",
          "war",
          "vo",
          "ller",
          "Leu",
          "te",
          ",",
          "die",
          "schwim",
          "men",
          "wo",
          "llten",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          0,
          40,
          80,
          40,
          80,
          40,
          0
        ]
      },
      {
        "id": "s8",
        "de": "Die Reise war sehr erholsam und spannend zugleich.",
        "vi": "Chuyến đi vừa rất thư giãn lại vừa thú vị.",
        "ipa": "/diː 'ʁaɪ̯zə vaːɐ̯ zeːɐ̯ ɛɐ̯ˈhoːlˌzaːm ʊnt 'ʃpanənt tsuːˈɡlaɪ̯ç/",
        "syllables": [
          "Die",
          "Rei",
          "se",
          "war",
          "sehr",
          "er",
          "hol",
          "sam",
          "und",
          "spa",
          "nnend",
          "zu",
          "gleich",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s9",
        "de": "Ich habe so viele tolle Dinge auf meiner Reise erlebt.",
        "vi": "Tôi đã trải nghiệm rất nhiều điều tuyệt vời trong chuyến đi của mình.",
        "ipa": "/ɪç 'haːbə zoː 'fiːlə 'tɔlə 'dɪŋə aʊ̯f 'maɪ̯nɐ 'ʁaɪ̯zə ɛɐ̯ˈleːpt/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "so",
          "vie",
          "le",
          "to",
          "lle",
          "Din",
          "ge",
          "auf",
          "mei",
          "ner",
          "Rei",
          "se",
          "er",
          "lebt",
          "."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          60,
          40,
          60,
          40,
          60,
          40,
          60,
          80,
          40,
          80,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s10",
        "de": "Wir machten einen Ausflug zu einem malerischen Dorf.",
        "vi": "Chúng tôi đã có một chuyến dã ngoại đến một ngôi làng đẹp như tranh vẽ.",
        "ipa": "/viːɐ̯ 'maxtn̩ 'aɪ̯nən 'aʊ̯sfluːk tsuː 'aɪ̯nəm 'maːləʁɪʃn̩ dɔʁf/",
        "syllables": [
          "Wir",
          "mach",
          "ten",
          "ei",
          "nen",
          "Aus",
          "flug",
          "zu",
          "ei",
          "nem",
          "ma",
          "le",
          "ri",
          "schen",
          "Dorf",
          "."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          40,
          80,
          0
        ]
      },
      {
        "id": "s11",
        "de": "Bitte vergiss nicht, deine Badesachen einzupacken.",
        "vi": "Xin đừng quên đóng gói đồ bơi của bạn.",
        "ipa": "/'bɪtə fɛɐ̯ˈɡɪs nɪçt 'daɪ̯nə 'baːdəˌzaxn̩ 'aɪ̯ntsuːˌpakn̩/",
        "syllables": [
          "Bi",
          "tte",
          "ver",
          "giss",
          "nicht",
          ",",
          "dei",
          "ne",
          "Ba",
          "de",
          "sa",
          "chen",
          "ein",
          "zu",
          "pa",
          "cken",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          80,
          60,
          0,
          60,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          0
        ]
      },
      {
        "id": "s12",
        "de": "Wenn ich mehr Zeit hätte, würde ich ans Meer fahren.",
        "vi": "Nếu tôi có nhiều thời gian hơn, tôi sẽ đi biển.",
        "ipa": "/vɛn ɪç meːɐ̯ tsaɪ̯t 'hɛtə 'vʏʁdə ɪç ans meːɐ̯ 'faːʁən/",
        "syllables": [
          "Wenn",
          "ich",
          "mehr",
          "Zeit",
          "hä",
          "tte",
          ",",
          "wür",
          "de",
          "ich",
          "ans",
          "Meer",
          "fah",
          "ren",
          "."
        ],
        "notation": [
          40,
          40,
          60,
          80,
          80,
          40,
          0,
          80,
          40,
          40,
          60,
          80,
          80,
          40,
          0
        ]
      },
      {
        "id": "s13",
        "de": "Das Hotel, in dem wir übernachteten, war sehr modern.",
        "vi": "Khách sạn mà chúng tôi ở lại rất hiện đại.",
        "ipa": "/das hoˈtɛl ɪn deːm viːɐ̯ 'yːbɐˌnaxtətn̩ vaːɐ̯ zeːɐ̯ moˈdɛɐ̯n/",
        "syllables": [
          "Das",
          "Ho",
          "tel",
          ",",
          "in",
          "dem",
          "wir",
          "ü",
          "ber",
          "nach",
          "te",
          "ten",
          ",",
          "war",
          "sehr",
          "mo",
          "dern",
          "."
        ],
        "notation": [
          40,
          40,
          80,
          0,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          0,
          40,
          60,
          40,
          80,
          0
        ]
      },
      {
        "id": "s14",
        "de": "Letztes Jahr waren wir in den Alpen, das war toll!",
        "vi": "Năm ngoái chúng tôi đã ở dãy Alps, điều đó thật tuyệt vời!",
        "ipa": "/'lɛtstəs jaːɐ̯ 'vaːʁən viːɐ̯ ɪn deːn 'alpn̩ das vaːɐ̯ tɔl/",
        "syllables": [
          "Le",
          "tztes",
          "Jahr",
          "wa",
          "ren",
          "wir",
          "in",
          "den",
          "Al",
          "pen",
          ",",
          "das",
          "war",
          "toll",
          "!"
        ],
        "notation": [
          80,
          40,
          60,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          0,
          40,
          60,
          80,
          0
        ]
      },
      {
        "id": "s15",
        "de": "Hoffentlich ist das Wetter nächste Woche gut für unsere Wanderung.",
        "vi": "Hy vọng thời tiết tuần tới sẽ tốt cho chuyến đi bộ của chúng tôi.",
        "ipa": "/'hɔfn̩tlɪç ɪst das 'vɛtɐ 'nɛçstə 'vɔxə ɡuːt fyːɐ̯ 'ʊnzəʁə 'vandəʁʊŋ/",
        "syllables": [
          "Ho",
          "ffen",
          "tlich",
          "ist",
          "das",
          "We",
          "tter",
          "näch",
          "ste",
          "Wo",
          "che",
          "gut",
          "für",
          "un",
          "se",
          "re",
          "Wan",
          "de",
          "rung",
          "."
        ],
        "notation": [
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          80,
          40,
          60,
          40,
          60,
          40,
          40,
          80,
          40,
          40,
          0
        ]
      }
    ]
  },
  "l19": {
    "words": [
      {
        "id": "w1",
        "de": "die Bewerbung",
        "vi": "đơn xin việc",
        "ipa": "/diː bəˈvɛʁbʊŋ/",
        "syllables": [
          "die",
          "Be",
          "wer",
          "bung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "sich bewerben",
        "vi": "nộp đơn xin việc",
        "ipa": "/zɪç bəˈvɛʁbn̩/",
        "syllables": [
          "sich",
          "be",
          "wer",
          "ben"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "die Zukunft",
        "vi": "tương lai",
        "ipa": "/diː ˈtsuːkʊnft/",
        "syllables": [
          "die",
          "Zu",
          "kunft"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "planen",
        "vi": "lên kế hoạch",
        "ipa": "/ˈplaːnən/",
        "syllables": [
          "pla",
          "nen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "der Traum",
        "vi": "giấc mơ",
        "ipa": "/dɛɐ̯ traʊ̯m/",
        "syllables": [
          "der",
          "Traum"
        ],
        "notation": [
          40,
          80
        ]
      },
      {
        "id": "w6",
        "de": "erfolgreich",
        "vi": "thành công",
        "ipa": "/ɛɐ̯ˈfɔlkʁaɪ̯ç/",
        "syllables": [
          "er",
          "folg",
          "reich"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w7",
        "de": "das Vorstellungsgespräch",
        "vi": "buổi phỏng vấn xin việc",
        "ipa": "/das ˈfoːɐ̯ʃtɛlʊŋsɡəˌʃpʁɛːç/",
        "syllables": [
          "das",
          "Vor",
          "stel",
          "lungs",
          "ge",
          "spräch"
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          60
        ]
      },
      {
        "id": "w8",
        "de": "der Lebenslauf",
        "vi": "sơ yếu lý lịch",
        "ipa": "/dɛɐ̯ ˈleːbn̩sˌlaʊ̯f/",
        "syllables": [
          "der",
          "Le",
          "bens",
          "lauf"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w9",
        "de": "die Karriere",
        "vi": "sự nghiệp",
        "ipa": "/diː kaˈʁɪ̯eːʁə/",
        "syllables": [
          "die",
          "Ka",
          "rie",
          "re"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "sich wünschen",
        "vi": "mong ước",
        "ipa": "/zɪç ˈvʏnʃn̩/",
        "syllables": [
          "sich",
          "wün",
          "schen"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "der Arbeitsplatz",
        "vi": "nơi làm việc",
        "ipa": "/dɛɐ̯ ˈaʁbaɪ̯tsˌplat͡s/",
        "syllables": [
          "der",
          "Ar",
          "beits",
          "platz"
        ],
        "notation": [
          40,
          80,
          40,
          60
        ]
      },
      {
        "id": "w12",
        "de": "die Erfahrung",
        "vi": "kinh nghiệm",
        "ipa": "/diː ɛɐ̯ˈfaːʁʊŋ/",
        "syllables": [
          "die",
          "Er",
          "fah",
          "rung"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w13",
        "de": "das Studium",
        "vi": "việc học đại học",
        "ipa": "/das ˈʃtuːdi̯ʊm/",
        "syllables": [
          "das",
          "Stu",
          "di",
          "um"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "w14",
        "de": "absolvieren",
        "vi": "hoàn thành, tốt nghiệp",
        "ipa": "/apzɔlˈviːʁən/",
        "syllables": [
          "ab",
          "sol",
          "vie",
          "ren"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w15",
        "de": "das Praktikum",
        "vi": "kỳ thực tập",
        "ipa": "/das ˈpʁaktikʊm/",
        "syllables": [
          "das",
          "Prak",
          "ti",
          "kum"
        ],
        "notation": [
          40,
          80,
          40,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Ich hatte schon gegessen, als er anrief.",
        "vi": "Tôi đã ăn xong rồi khi anh ấy gọi điện.",
        "ipa": "/ɪç ˈhatə ʃoːn ɡəˈɡɛsn̩ als eːɐ̯ ˈanʁiːf/",
        "syllables": [
          "Ich",
          "hat",
          "te",
          "schon",
          "ge",
          "ges",
          "sen,",
          "als",
          "er",
          "an",
          "rief."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s2",
        "de": "Das ist der Kollege, mit dem ich zusammenarbeite.",
        "vi": "Đây là đồng nghiệp mà tôi làm việc cùng.",
        "ipa": "/das ɪst dɛɐ̯ koˈleːɡə mɪt deːm ɪç t͡suˌzamənˈaʁbaɪ̯tə/",
        "syllables": [
          "Das",
          "ist",
          "der",
          "Ko",
          "le",
          "ge,",
          "mit",
          "dem",
          "ich",
          "zu",
          "sam",
          "men",
          "ar",
          "bei",
          "te."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          60,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "s3",
        "de": "Nächstes Jahr werde ich nach Berlin ziehen.",
        "vi": "Năm tới tôi sẽ chuyển đến Berlin.",
        "ipa": "/ˈnɛːçstəs jaːɐ̯ ˈvɛʁdə ɪç naːx bɛʁˈliːn ˈt͡siːən/",
        "syllables": [
          "Nächstes",
          "Jahr",
          "wer",
          "de",
          "ich",
          "nach",
          "Ber",
          "lin",
          "zie",
          "hen."
        ],
        "notation": [
          80,
          40,
          60,
          40,
          40,
          40,
          40,
          80,
          60,
          40
        ]
      },
      {
        "id": "s4",
        "de": "Sie hat sich um die Stelle als Marketingmanagerin beworben.",
        "vi": "Cô ấy đã nộp đơn xin việc cho vị trí quản lý marketing.",
        "ipa": "/ziː hat zɪç ʊm diː ˈʃtɛlə als ˈmaʁkətɪŋˌmanəd͡ʒəʁɪn bəˈvɔʁbn̩/",
        "syllables": [
          "Sie",
          "hat",
          "sich",
          "um",
          "die",
          "Stel",
          "le",
          "als",
          "Mar",
          "ke",
          "ting",
          "Ma",
          "na",
          "ge",
          "rin",
          "be",
          "wor",
          "ben."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s5",
        "de": "Ich bereite mich auf mein Vorstellungsgespräch vor.",
        "vi": "Tôi đang chuẩn bị cho buổi phỏng vấn xin việc của mình.",
        "ipa": "/ɪç bəˈʁaɪ̯tə mɪç aʊ̯f maɪ̯n ˈfoːɐ̯ʃtɛlʊŋsɡəˌʃpʁɛːç foːɐ̯/",
        "syllables": [
          "Ich",
          "be",
          "rei",
          "te",
          "mich",
          "auf",
          "mein",
          "Vor",
          "stel",
          "lungs",
          "ge",
          "spräch",
          "vor."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          60,
          80
        ]
      },
      {
        "id": "s6",
        "de": "Was wirst du in fünf Jahren machen?",
        "vi": "Bạn sẽ làm gì trong năm năm tới?",
        "ipa": "/vas vɪʁst duː ɪn fʏnf ˈjaːʁən ˈmaxn̩/",
        "syllables": [
          "Was",
          "wirst",
          "du",
          "in",
          "fünf",
          "Jah",
          "ren",
          "ma",
          "chen?"
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          60,
          40,
          80,
          40
        ]
      },
      {
        "id": "s7",
        "de": "Mein Traum ist es, eine eigene Firma zu gründen.",
        "vi": "Ước mơ của tôi là thành lập một công ty riêng.",
        "ipa": "/maɪ̯n traʊ̯m ɪst ɛs ˈaɪ̯nə ˈaɪ̯ɡənə ˈfɪʁma t͡suː ˈɡʁʏndn̩/",
        "syllables": [
          "Mein",
          "Traum",
          "ist",
          "es,",
          "ei",
          "ne",
          "ei",
          "ge",
          "ne",
          "Fir",
          "ma",
          "zu",
          "grün",
          "den."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s8",
        "de": "Man sollte immer ehrlich im Lebenslauf sein.",
        "vi": "Người ta nên luôn trung thực trong sơ yếu lý lịch.",
        "ipa": "/man ˈzɔltə ˈɪmɐ ˈeːɐ̯lɪç ɪm ˈleːbn̩sˌlaʊ̯f zaɪ̯n/",
        "syllables": [
          "Man",
          "soll",
          "te",
          "im",
          "mer",
          "ehr",
          "lich",
          "im",
          "Le",
          "bens",
          "lauf",
          "sein."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "s9",
        "de": "Wir waren ins Kino gegangen, bevor es anfing zu regnen.",
        "vi": "Chúng tôi đã đi xem phim trước khi trời bắt đầu mưa.",
        "ipa": "/viːɐ̯ ˈvaːʁən ɪns ˈkiːnoː ɡəˈɡaŋən bəˈfoːɐ̯ ɛs ˈanfɪŋ t͡suː ˈʁeːɡnən/",
        "syllables": [
          "Wir",
          "wa",
          "ren",
          "ins",
          "Ki",
          "no",
          "ge",
          "gan",
          "gen,",
          "be",
          "vor",
          "es",
          "an",
          "fing",
          "zu",
          "reg",
          "nen."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          60,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s10",
        "de": "Das ist das Projekt, an dem wir lange gearbeitet haben.",
        "vi": "Đây là dự án mà chúng tôi đã làm việc lâu dài.",
        "ipa": "/das ɪst das pʁoˈjɛkt an deːm viːɐ̯ ˈlaŋə ɡəˈaʁbaɪ̯tət ˈhaːbn̩/",
        "syllables": [
          "Das",
          "ist",
          "das",
          "Pro",
          "jekt,",
          "an",
          "dem",
          "wir",
          "lan",
          "ge",
          "ge",
          "ar",
          "bei",
          "tet",
          "ha",
          "ben."
        ],
        "notation": [
          40,
          40,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          60,
          40
        ]
      },
      {
        "id": "s11",
        "de": "Er wird bestimmt bald befördert.",
        "vi": "Anh ấy chắc chắn sẽ sớm được thăng chức.",
        "ipa": "/eːɐ̯ vɪʁt bəˈʃtɪmt balt bəˈfœʁdɐt/",
        "syllables": [
          "Er",
          "wird",
          "be",
          "stimmt",
          "bald",
          "be",
          "för",
          "dert."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          60,
          40,
          80,
          40
        ]
      },
      {
        "id": "s12",
        "de": "Sie hat viel Erfahrung in diesem Bereich gesammelt.",
        "vi": "Cô ấy đã tích lũy nhiều kinh nghiệm trong lĩnh vực này.",
        "ipa": "/ziː hat fiːl ɛɐ̯ˈfaːʁʊŋ ɪn ˈdiːzəm bəˈʁaɪ̯ç ɡəˈzaml̩t/",
        "syllables": [
          "Sie",
          "hat",
          "viel",
          "Er",
          "fah",
          "rung",
          "in",
          "die",
          "sem",
          "Be",
          "reich",
          "ge",
          "sam",
          "melt."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          80,
          40
        ]
      },
      {
        "id": "s13",
        "de": "Nach dem Studium möchte sie im Ausland arbeiten.",
        "vi": "Sau khi học xong đại học, cô ấy muốn làm việc ở nước ngoài.",
        "ipa": "/naːx deːm ˈʃtuːdi̯ʊm ˈmœçtə ziː ɪm ˈaʊ̯slant ˈaʁbaɪ̯tn̩/",
        "syllables": [
          "Nach",
          "dem",
          "Stu",
          "di",
          "um",
          "möch",
          "te",
          "sie",
          "im",
          "Aus",
          "land",
          "ar",
          "bei",
          "ten."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          80,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          40
        ]
      },
      {
        "id": "s14",
        "de": "Ich muss meine Karriere sorgfältig planen.",
        "vi": "Tôi phải lên kế hoạch sự nghiệp của mình một cách cẩn thận.",
        "ipa": "/ɪç mʊs ˈmaɪ̯nə kaˈʁɪ̯eːʁə ˈzɔʁkˌfɛltɪç ˈplaːnən/",
        "syllables": [
          "Ich",
          "muss",
          "mei",
          "ne",
          "Ka",
          "rie",
          "re",
          "sorg",
          "fäl",
          "tig",
          "pla",
          "nen."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "s15",
        "de": "Ich habe ein interessantes Praktikum bei einer großen Firma gefunden.",
        "vi": "Tôi đã tìm được một kỳ thực tập thú vị tại một công ty lớn.",
        "ipa": "/ɪç ˈhaːbə aɪ̯n ɪntɛʁɛˈsantəs ˈpʁaktikʊm baɪ̯ ˈaɪ̯nɐ ˈɡʁoːsn̩ ˈfɪʁma ɡəˈfʊndn̩/",
        "syllables": [
          "Ich",
          "ha",
          "be",
          "ein",
          "in",
          "te",
          "res",
          "san",
          "tes",
          "Prak",
          "ti",
          "kum",
          "bei",
          "ei",
          "ner",
          "gro",
          "ßen",
          "Fir",
          "ma",
          "ge",
          "fun",
          "den."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          80,
          40,
          40,
          40,
          40,
          40,
          80,
          40,
          60,
          40,
          40,
          80,
          40
        ]
      }
    ]
  }
};
