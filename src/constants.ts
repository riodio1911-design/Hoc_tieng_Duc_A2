export interface VocabularyItem {
  id: string;
  word: string;
  ipa?: string;
  meaning: string;
  example: string;
  exampleTranslation?: string;
  category?: string;
  grammar?: string;
}

export interface GrammarItem extends VocabularyItem {
  rule?: string;
  note?: string;
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  items: VocabularyItem[];
  grammar?: GrammarItem[];
}

export const L21_INTRO_SCRIPT = `Xin chào các bạn. Trong bài 21 của giáo trình Menschen A2, chúng ta sẽ học cách giao tiếp trong các tình huống thực tế liên quan đến giấy tờ và mô tả sự việc. Bạn sẽ học cách thuật lại một sự kiện, cách yêu cầu người khác mô tả với câu hỏi: "Können Sie das beschreiben?" . Và cách nói khi không nhớ rõ: "Dann kann ich mich nicht mehr erinnern." ... Về đọc hiểu, chúng ta sẽ rèn luyện đọc các tờ thông báo ngắn như Flyer. Về từ vựng, chủ đề chính là "Dokumente". Bạn sẽ biết cách giao tiếp với các câu như: "Ich habe meine Papiere verloren." ... "Ich muss Dokumente mitbringen." ... "Ich muss das Anmeldeformular ausfüllen." ... "Ich brauche ein Exemplar." ... và: "Ich muss mich bewerben." ... Về ngữ pháp có ba trọng tâm chính. Thứ nhất là "Frageartikel" như: "welcher" ... "welche" ... "welches" ... dùng để hỏi rõ: "Welchen Pass meinen Sie?" ... Thứ hai là "Demonstrativpronomen", đại từ chỉ định như: "dieser" ... "diese" ... "dieses" ... để nhấn mạnh một vật cụ thể, ví dụ: "Dieser Pass ist neu." ... Và thứ ba là động từ "lassen", vận dụng chủ yếu khi nhờ ai đó làm giúp việc gì, ví dụ: "Ich lasse meinen Pass kopieren." ... hoặc là: "Ich lasse meine Haare schneiden." ... Hãy nắm chắc mục tiêu và tự tin học tập nhé!`;

export const L22_GRAMMAR_SCRIPT = `Xin chào các bạn. Trong bài 22 giáo trình Menschen A2, chúng ta sẽ học về Câu phụ (Nebensatz) chỉ thời gian với các liên từ "seit", "seitdem", và "bis".
Điểm quan trọng nhất của Câu phụ là động từ luôn đứng ở cuối câu.

Thứ nhất, "seit" và "seitdem" dùng cho hành động bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại. 
Ví dụ: "Seit ich hier wohne, fahre ich mit dem Bus" (Từ khi tôi sống ở đây, tôi đi làm bằng xe buýt).

Thứ hai, "bis" dùng cho hành động kéo dài đến một thời điểm xác định. 
Ví dụ: "Ich warte, bis der Bus kommt" (Tôi chờ cho đến khi xe buýt tới).

Việc sử dụng các cấu trúc này giúp bạn nối các câu đơn thành câu phức, qua đó diễn đạt thời gian và quy trình tự nhiên hơn. Đừng quên quy tắc: liên từ đứng đầu câu phụ, và động từ nằm ở cuối cùng nhé. Chúc các bạn học tốt!`;

export const L23_GRAMMAR_SCRIPT = `Xin chào các bạn. Ngữ pháp trọng tâm của bài 23 Menschen A2 là Mệnh đề quan hệ (Relativsatz) và Đại từ quan hệ (Relativpronomen). 
Đây là bước tiến lớn giúp bạn nối câu và bổ sung thông tin chi tiết mà không bị lặp từ.

Mệnh đề quan hệ luôn đứng sau danh từ mà nó bổ nghĩa, và đặc biệt: động từ luôn phải đẩy xuống cuối câu.
Đại từ quan hệ "der, die, das" và "den, die, das" phụ thuộc vào giống của danh từ và vai trò của nó trong câu phụ.

Nếu là Chủ ngữ (Nominativ), ta dùng "der, die, das". Ví dụ: "Das ist der Beruf, der zu mir passt" (Đó là nghề nghiệp mà phù hợp với tôi).
Nếu là Tân ngữ (Akkusativ), giống đực "der" sẽ đổi thành "den". Ví dụ: "Das ist der Mann, den ich kenne" (Đó là người đàn ông mà tôi biết).

Mệnh đề quan hệ giúp câu nói của bạn tự nhiên và giống người bản xứ hơn rất nhiều. Chúc các bạn áp dụng thành công!`;

export const L23_INTRO_SCRIPT = `Xin chào các bạn. Hôm nay chúng ta cùng khám phá Bài 23 giáo trình Menschen A2 với chủ đề rất thực tế: Nghề nghiệp và Sự hài lòng trong công việc.
Nếu bài 22 giúp bạn di chuyển độc lập, thì bài 23 giúp bạn nói về định hướng cuộc sống.

Về Kỹ năng Nói, bạn sẽ học cách giới thiệu công việc như "Ich bin Ingenieur", cũng như diễn đạt cảm xúc: "Ich bin sehr zufrieden" (Tôi rất hài lòng) hoặc "Ich bin unzufrieden" (Tôi không hài lòng). Quan trọng hơn, bạn sẽ biết giải thích lý do "Tại sao" bằng các câu phụ, và nói về những dự định, kế hoạch học tập.

Về Nghe và Đọc, bài học cung cấp các đoạn hội thoại phỏng vấn và bài tư vấn nghề nghiệp, luyện cho bạn cách nắm bắt ý chính và thái độ của người nói.

Ngữ pháp trung tâm là Mệnh đề quan hệ định ngữ "Relativsatz" giúp nối câu mượt mà: "Das ist der Beruf, der zu mir passt".

Từ vựng xoay quanh nghề nghiệp ("Beruf"), đào tạo ("Ausbildung"), và quá trình ứng tuyển ("Bewerbung").

Tóm lại, bài 23 đánh dấu bước chuyển mình quan trọng từ A2 lên B1, giúp bạn giao tiếp như một người đi làm thực sự tại Đức. Chúc các bạn học tốt!`;

export const L22_INTRO_SCRIPT = `Xin chào các bạn. Hôm nay chúng ta cùng tìm hiểu bài 22 giáo trình Menschen A2.
Khác với những bài trước, bài 22 giúp nâng cao sự tự lập trong cuộc sống khi tập trung vào cách di chuyển, so sánh phương tiện và giải thích một quy trình hay dịch vụ.

Về Kỹ năng Nói, bạn sẽ học cách diễn đạt sự thay đổi thói quen di chuyển: "trước đây tôi có ô tô, bây giờ tôi đi xe buýt". Và đặc biệt là cách hướng dẫn người khác từng bước một, ví dụ như cách đặt vé tàu hay thuê xe với các từ nối: "đầu tiên... sau đó... tiếp theo... cuối cùng".

Về Kỹ năng Nghe và Đọc, bạn sẽ luyện nghe các đoạn hội thoại về Carsharing, phân biệt ưu nhược điểm. Kỹ năng đọc chú trọng vào việc hiểu hướng dẫn sử dụng dịch vụ (Anleitung) để có thể tự thao tác mà không cần người khác giúp.

Trọng tâm Ngữ pháp của bài là Câu phụ (Nebensatz) với động từ đứng cuối câu, được bắt đầu bởi các liên từ chỉ thời gian: "seit", "seitdem" và "bis". Chẳng hạn: "cho đến khi tìm được chỗ đỗ xe". Cấu trúc này giúp câu nói tự nhiên và logic hơn.

Từ vựng xoay quanh các khái niệm thiết thực: phương tiện giao thông, dịch vụ thuê xe, và đăng ký internet.

Tóm lại, bài 22 là bước tiến quan trọng giúp bạn giao tiếp và sống độc lập hơn bằng tiếng Đức. Chúc các bạn học tốt!`;

export const L24_INTRO_SCRIPT = `Xin chào các bạn. Hôm nay chúng ta cùng tìm hiểu bài 24 giáo trình Menschen A2 với chủ đề: "Wie sah dein Alltag aus?". Lektion này sẽ tập trung vào việc kể lại những trải nghiệm trong quá khứ, những chuyến đi nước ngoài và cách thể hiện cảm xúc cá nhân. Ngữ pháp trọng tâm của bài là thì Quá khứ đơn (Präteritum) của các động từ thường, bất quy tắc và động từ khuyết thiếu.`;

export const L24_GRAMMAR_SCRIPT = `Xin chào các bạn. Ngữ pháp bài 24 tập trung vào Präteritum (Thì quá khứ đơn).
Thì này chủ yếu dùng trong văn viết, kể chuyện hoặc các báo cáo.

Với động từ có quy tắc (Regular), ta thêm đuôi -te vào thân động từ. Ví dụ: machen -> machte, sagen -> sagte.
Với động từ bất quy tắc (Irregular), thân động từ sẽ bị biến đổi và bạn bắt buộc phải học thuộc. Ví dụ: kommen -> kam, gehen -> ging, finden -> fand.

Đặc biệt, nhóm động từ khuyết thiếu (Modalverben) như können, müssen, wollen... khi chuyển sang Präteritum, chúng ta bỏ Umlaut (nếu có) và thêm đuôi -te. Ví dụ: müssen -> musste, können -> konnte.

Lưu ý quan trọng: Ngôi "ich" và ngôi "er/sie/es" trong thì Präteritum luôn được chia giống hệt nhau! Chúc các bạn luyện tập tốt!`;

export const L19_INTRO_SCRIPT = `Xin chào các bạn. Chọn chương trình và hoạt động vui chơi giải trí ngày hôm nay thật là thú vị. Bài 19 của giáo trình Menschen B1 sẽ hướng dẫn chúng ta cách giao tiếp, lên kế hoạch cho cuộc hẹn đi ra ngoài, thảo luận xem chúng ta nên đi xem phim hay nghe nhạc, đặc biệt là cách sử dụng những từ vựng để diễn đạt cảm xúc khen ngợi, hoặc chê bai một tác phẩm hay buổi biểu diễn. Về mặt ngữ pháp, các bạn sẽ làm quen với giới từ chỉ hướng trả lời cho câu hỏi Woher (từ đâu đến) và Wohin (đi đâu). Đừng quên, giới từ Woher thường đi với aus/von cộng Dativ, còn Wohin đi với zu (cộng Dativ) hoặc in (cộng Akkusativ). Nào, hãy cùng bắt đầu Lektion 19 ngay nhé!`;

export const L19_GRAMMAR_SCRIPT = `Xin chào các bạn. Về Ngữ pháp bài 19, trọng tâm lớn nhất của chúng ta là các giới từ chỉ địa điểm Lokale Präpositionen dùng để trả lời cho hai câu hỏi chính: Woher (từ đâu đến) và Wohin (đi đâu đến). Đầu tiên, khi trả lời câu hỏi Woher, chúng ta dùng giới từ 'aus' cộng với Dativ dành cho các không gian kín (như nhà cửa, rạp phim) hoặc 'von' cộng với Dativ (dành cho người, địa điểm chuyên biệt hoặc sự kiện). Ví dụ: 'Ich komme gerade aus dem Kino.' hoặc 'Ich komme vom Sport, vom Arzt.' Thứ hai, khi trả lời câu hỏi Wohin, chúng ta dùng giới từ 'in' cộng với Akkusativ khi đi vào bên trong, và 'zu' cộng với Dativ khi đi đến chỗ của ai đó hoặc một sự kiện nào đó. Ví dụ: 'Ich gehe ins Kino.' hoặc 'Ich gehe zu Paul. Ich gehe zum Arzt.' Hãy nhớ đặc điểm quan trọng này nhé!`;

export const L20_INTRO_SCRIPT = `Xin chào các bạn. Hãy cùng bước vào Lektion 20 với chủ đề về thói quen đọc sách và những kỷ niệm thuở ấu thơ. Bài học này sẽ cung cấp cho chúng ta một lượng lớn từ vựng về các thể loại sách báo, tạp chí cũng như cách bày tỏ sự quan tâm, hứng thú đối với một chủ đề nào đó. Đặc biệt về mặt ngữ pháp, chúng ta sẽ học cách kể lại những chuyện đã xảy ra trong quá khứ thông qua thì Präteritum (Quá khứ đơn) của các động từ khuyết thiếu (Modalverben). Nào, hãy cùng nhau khám phá thế giới sách muôn màu ngay bây giờ nhé!`;

export const L20_GRAMMAR_SCRIPT = `Xin chào các bạn. Trọng tâm ngữ pháp của bài 20 là cách chia động từ khuyết thiếu - Modalverben ở thì quá khứ đơn Präteritum. Quá khứ đơn rất hay được dùng để kể chuyện xảy ra trong quá khứ. Đặc điểm quan trọng nhất các bạn cần nhớ khi chuyển Modalverben từ hiện tại sang quá khứ đơn là chúng ta bỏ dấu Umlaut đi và thêm đuôi -te. Ví dụ: können chuyển thành konnte, müssen chuyển thành musste, dürfen thành durfte, wollen thành wollte, sollen thành sollte, và mögen thành mochte. Các ngôi ich và er/sie/es sẽ có cách chia hoàn toàn giống nhau. Ví dụ: Als Kind durfte ich keine Comics lesen. (Hồi nhỏ tôi không được phép đọc truyện tranh). Hãy cùng luyện tập thêm trong bài nhé!`;

export const VOCABULARY_DATA: Lesson[] = [
  {
    id: "l1",
    title: "Lektion 1",
    subtitle: "Mein Opa war auch schon Bäcker",
    items: [
      { id: "l1_v1", word: "der Cousin / die Cousine", meaning: "anh/chị/em họ", example: "Mein Cousin spielt gern Fußball." },
      { id: "l1_v2", word: "der Neffe / die Nichte", meaning: "cháu trai/gái (con của anh chị em)", example: "Mein Neffe ist fünf Jahre alt." },
      { id: "l1_v3", word: "der Onkel / die Tante", meaning: "chú, bác / cô, dì", example: "Meine Tante kocht sehr gut." },
      { id: "l1_v4", word: "der Schwiegervater / die Schwiegermutter", meaning: "bố/mẹ chồng (vợ)", example: "Meine Schwiegermutter hilft oft." },
      { id: "l1_v5", word: "der Schwiegersohn / die Schwiegertochter", meaning: "con rể / con dâu", example: "Ihre Schwiegertochter ist sehr nett." },
      { id: "l1_v6", word: "der Großvater / die Großmutter", meaning: "ông / bà", example: "Mein Großvater war schon Bäcker." },
      { id: "l1_v7", word: "das Enkelkind", meaning: "cháu (của ông bà)", example: "Die Großeltern spielen mit dem Enkelkind." },
      { id: "l1_v8", word: "Geschichten erzählen", meaning: "kể chuyện", example: "Ich habe oft Geschichten erzählt." },
      { id: "l1_v9", word: "draußen übernachten", meaning: "ngủ ngoài trời", example: "Wir haben oft draußen übernachtet." },
      { id: "l1_v10", word: "auf Bäume klettern", meaning: "trèo cây", example: "Als Kind bin ich auf Bäume geklettert." },
      { id: "l1_v11", word: "Fußballbilder sammeln", meaning: "sưu tầm ảnh bóng đá", example: "Ich habe Fußballbilder gesammelt." },
      { id: "l1_v12", word: "Sachen verkaufen", meaning: "bán đồ vật", example: "Er hat Sachen auf dem Flohmarkt verkauft." },
      { id: "l1_v13", word: "Einrad / Skateboard fahren", meaning: "đi xe một bánh / trượt ván", example: "Sie ist oft Einrad gefahren." },
      { id: "l1_v14", word: "Comics lesen", meaning: "đọc truyện tranh", example: "Mein Bruder hat immer Comics gelesen." },
      { id: "l1_v15", word: "zeichnen", meaning: "vẽ", example: "Ich habe gern gezeichnet." },
      { id: "l1_v16", word: "Computerspiele spielen", meaning: "chơi game trên máy tính", example: "Wir haben lange Computerspiele gespielt." },
      { id: "l1_v17", word: "mit Puppen spielen", meaning: "chơi với búp bê", example: "Sie hat mit Puppen gespielt." },
      { id: "l1_v18", word: "Süßigkeiten essen", meaning: "ăn đồ ngọt", example: "Er hat oft Süßigkeiten gegessen." },
      { id: "l1_v19", word: "Witze erzählen", meaning: "kể chuyện cười", example: "Mein Opa hat Witze erzählt." },
      { id: "l1_v20", word: "der Anfang / am Anfang", meaning: "sự bắt đầu / vào lúc đầu", example: "Am Anfang war es schwer." },
      { id: "l1_v21", word: "das Ende / am Ende", meaning: "sự kết thúc / vào lúc cuối", example: "Am Ende hat es gut geklappt." },
      { id: "l1_v22", word: "zum Schluss", meaning: "cuối cùng", example: "Zum Schluss habe ich bestanden." },
      { id: "l1_v23", word: "passieren", meaning: "xảy ra", example: "Was ist dann passiert?" },
      { id: "l1_v24", word: "streiten", meaning: "cãi nhau", example: "Wir haben gestritten." },
      { id: "l1_v25", word: "wachsen", meaning: "lớn lên, phát triển", example: "Das Geschäft ist gewachsen." }
    ],
    grammar: [
      { id: "l1_g1", word: "Possessivartikel - Nominativ", meaning: "Đại từ sở hữu - Cách 1", rule: "unser, euer, ihr, Ihr. Thêm -e cho giống cái (die) và số nhiều (Plural). Ví dụ: unser Opa, unsere Tante.", example: "Sind das eure Fahrräder?", exampleTranslation: "Đó có phải là xe đạp của các bạn không?" },
      { id: "l1_g2", word: "Possessivartikel - Akkusativ / Dativ", meaning: "Đại từ sở hữu - Cách 4/3", rule: "Akkusativ: der -> den (meinen Opa). Dativ: der/das -> dem (meinem Opa), die -> der (meiner Tante), die(Pl.) -> den (meinen Neffen).", example: "Ich habe einen Opa. Ich erzähle oft von meinem Opa.", exampleTranslation: "Tôi có một người ông. Tôi thường kể về ông của tôi." },
      { id: "l1_g3", word: "Präteritum von 'sein' und 'haben'", meaning: "Quá khứ đơn của sein/haben", rule: "sein -> war (ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren). haben -> hatte (ich hatte...)", example: "Mein Großvater war Arzt. Er hatte viel Geld.", exampleTranslation: "Ông của tôi từng là bác sĩ. Ông từng có nhiều tiền." }
    ]
  },
  {
    id: "l2",
    title: "Lektion 2",
    subtitle: "Wohin mit der Kommode?",
    items: [
      { id: "v2_1", word: "die Kommode, -n", meaning: "tủ ngăn kéo", example: "Wohin mit der Kommode?", category: "Möbel" },
      { id: "v2_2", word: "der Schrank, -\"e", meaning: "tủ quần áo/tủ đồ", example: "Der Schrank steht im Schlafzimmer.", category: "Möbel" },
      { id: "v2_3", word: "das Regal, -e", meaning: "kệ, giá", example: "Stellen Sie Souvenirs auf ein Regal.", category: "Möbel" },
      { id: "v2_4", word: "der Teppich, -e", meaning: "tấm thảm", example: "Ein Teppich auf dem Boden macht das Zimmer gemütlicher.", category: "Möbel" },
      { id: "v2_5", word: "die Lampe, -n", meaning: "cái đèn", example: "Stellen Sie eine Lampe auf den Tisch.", category: "Möbel" },
      { id: "v2_6", word: "das Kissen, -", meaning: "cái gối", example: "Auf dem Sofa liegen bunte Kissen.", category: "Möbel" },
      { id: "v2_7", word: "der Spiegel, -", meaning: "cái gương", example: "Hängen Sie den Spiegel an die Wand.", category: "Möbel" },
      { id: "v2_8", word: "der Schreibtisch, -e", meaning: "bàn làm việc", example: "Das Buch liegt auf dem Schreibtisch.", category: "Möbel" },
      { id: "v2_9", word: "der Vorhang, -\"e", meaning: "rèm cửa", example: "Das hängt vor dem Fenster.", category: "Möbel" },
      { id: "v2_10", word: "das Fernsehgerät, -e", meaning: "cái tivi", example: "Das Fernsehgerät steht in der Ecke.", category: "Möbel", grammar: "(CH: der Fernseher)" },
      { id: "v2_11", word: "der Herd, -e", meaning: "bếp lò", example: "Der Herd ist in der Küche.", category: "Möbel" },
      { id: "v2_12", word: "das Werkzeug, -e", meaning: "dụng cụ", example: "Das Werkzeug ist im Keller.", category: "Räume und Umzug" },
      { id: "v2_13", word: "der Umzug", meaning: "sự chuyển nhà", example: "Ich ziehe gar nicht gern um.", category: "Räume und Umzug" },
      { id: "v2_14", word: "der Raum, -\"e", meaning: "căn phòng", example: "Der Raum ist zu unordentlich.", category: "Räume und Umzug" },
      { id: "v2_15", word: "die Ecke, -n", meaning: "góc", example: "Das Regal steht in der Ecke.", category: "Räume und Umzug" },
      { id: "v2_16", word: "die Wand, -\"e", meaning: "bức tường", example: "Das Bild hängt an der Wand.", category: "Räume und Umzug" },
      { id: "v2_17", word: "die Tür, -en", meaning: "cửa", example: "Der Stuhl steht neben der Tür.", category: "Räume und Umzug" },
      { id: "v2_18", word: "einrichten", meaning: "trang bị nội thất", example: "Jeder richtet seine Wohnung anders ein.", grammar: "hat eingerichtet", category: "Räume und Umzug" },
      { id: "v2_19", word: "renovieren", meaning: "cải tạo, sửa chữa", example: "Lars soll Maria beim Renovieren helfen.", grammar: "hat renoviert", category: "Räume und Umzug" },
      { id: "v2_20", word: "verstecken", meaning: "giấu", example: "Das Fernsehgerät verstecke ich im Schrank.", grammar: "hat versteckt", category: "Räume und Umzug" },
      { id: "v2_21", word: "diskutieren", meaning: "thảo luận", example: "Sie sollen nicht mehr diskutieren.", grammar: "hat diskutiert", category: "Räume und Umzug" },
      { id: "v2_22", word: "schwer", meaning: "nặng, khó", example: "Die Kommode ist sehr schwer.", category: "Adjektive" },
      { id: "v2_23", word: "vorsichtig", meaning: "cẩn thận", example: "Seien Sie vorsichtig mit dunklen Möbeln.", category: "Adjektive" },
      { id: "v2_24", word: "dunkel", meaning: "tối", example: "Das Zimmer wird schnell zu dunkel.", category: "Adjektive" },
      { id: "v2_25", word: "hell", meaning: "sáng", example: "Eine helle Wand ist schöner.", category: "Adjektive" },
      { id: "v2_26", word: "unordentlich", meaning: "bừa bộn", example: "Der Raum ist zu unordentlich.", category: "Adjektive" },
      { id: "v2_27", word: "gemütlich", meaning: "ấm cúng", example: "Ein Teppich macht das Zimmer viel gemütlicher.", category: "Adjektive" }
    ],
    grammar: [
      { id: "l2_g1", word: "Wechselpräpositionen - Wo?", meaning: "Giới từ chỉ vị trí + Dativ", rule: "an, auf, hinter, in, neben, über, unter, vor, zwischen. Khi hỏi Wo? (Trạng thái tĩnh) dùng Dativ. VD: auf dem Tisch, an der Wand, in den Ecken.", example: "Das Buch liegt auf dem Tisch.", exampleTranslation: "Cuốn sách nằm trên bàn." },
      { id: "l2_g2", word: "Wechselpräpositionen - Wohin?", meaning: "Giới từ chỉ chuyển động + Akkusativ", rule: "Khi hỏi Wohin? (Sự chuyển vị trí / Đặt để) dùng Akkusativ. VD: auf den Tisch, an die Wand, in die Ecken.", example: "Ich lege das Buch auf den Tisch.", exampleTranslation: "Tôi đặt/để cuốn sách lên bàn." },
      { id: "l2_g3", word: "Verben: stehen - stellen", meaning: "đứng (tĩnh) - đặt đứng (động)", rule: "stehen (đang đứng - Dativ), stellen (đặt vật đứng - Akkusativ)", example: "Die Lampe steht auf dem Tisch. Ich stelle die Lampe auf den Tisch.", exampleTranslation: "Đèn đứng trên bàn. Tôi đặt đèn lên bàn." },
      { id: "l2_g4", word: "Verben: liegen - legen", meaning: "nằm (tĩnh) - đặt nằm (động)", rule: "liegen (đang nằm - Dativ), legen (đặt vật nằm - Akkusativ)", example: "Der Teppich liegt auf dem Boden. Er legt den Teppich auf den Boden.", exampleTranslation: "Tấm thảm nằm trên sàn. Anh ấy đặt tấm thảm lên sàn." },
      { id: "l2_g5", word: "Verben: hängen", meaning: "đang treo (tĩnh) - móc/treo lên (động)", rule: "hängen (hat gehangen) là động từ trạng thái (Dativ). hängen (hat gehängt) là động từ hành động (Akkusativ).", example: "Das Bild hängt an der Wand. Ich hänge das Bild an die Wand.", exampleTranslation: "Tranh đang treo trên tường. Tôi treo tranh lên tường." },
      { id: "l2_g6", word: "Verben: sitzen - setzen", meaning: "ngồi (tĩnh) - ngồi xuống (động)", rule: "sitzen (đang ngồi - Dativ), sich setzen (nói về hành động ngồi xuống - Akkusativ)", example: "Er sitzt auf dem Stuhl. Er setzt sich auf den Stuhl.", exampleTranslation: "Anh ấy đang ngồi trên ghế. Anh ấy đi tới ngồi xuống ghế." }
    ]
  },
  {
    id: "l3",
    title: "Lektion 3",
    subtitle: "Hier finden Sie Ruhe und Erholung.",
    items: [
      { id: "v3_1", word: "die Landschaft, -en", meaning: "phong cảnh", example: "Die Landschaft hier ist wunderschön.", category: "Natur und Umwelt" },
      { id: "v3_2", word: "das Dorf, -\"er", meaning: "ngôi làng", example: "Das Bauerndorf liegt in den Bergen.", category: "Natur und Umwelt" },
      { id: "v3_3", word: "der Strand, -\"e", meaning: "bãi biển", example: "Wir liegen den ganzen Tag am Strand.", category: "Natur und Umwelt" },
      { id: "v3_4", word: "das Ufer, -", meaning: "bờ sông/bờ hồ", example: "Wir fahren am Ufer entlang.", category: "Natur und Umwelt" },
      { id: "v3_5", word: "die Pflanze, -n", meaning: "thực vật, cây cối", example: "Hier gibt es viele Tiere und Pflanzen.", category: "Natur und Umwelt" },
      { id: "v3_6", word: "die Luft (Sg.)", meaning: "không khí", example: "Wir genießen die gute Luft.", category: "Natur und Umwelt" },
      { id: "v3_7", word: "die Ruhe (Sg.)", meaning: "sự yên tĩnh", example: "Hier finden Sie Ruhe und Erholung.", category: "Natur und Umwelt" },
      { id: "v3_8", word: "der Vogel, -\"", meaning: "con chim", example: "Die Vögel singen morgens.", category: "Natur und Umwelt" },
      { id: "v3_9", word: "die Katze, -n", meaning: "con mèo", example: "Der Bauernhof hat Hunde und Katzen.", category: "Natur und Umwelt" },
      { id: "v3_10", word: "das Tier, -e", meaning: "động vật", example: "Welche Tiere gibt es hier?", category: "Natur und Umwelt" },
      { id: "v3_11", word: "wandern", meaning: "đi bộ đường dài", example: "Wir wandern in den Bergen.", grammar: "ist gewandert", category: "Natur und Umwelt" },
      { id: "v3_12", word: "die Beratung, -en", meaning: "sự tư vấn", example: "Wir bieten kompetente Beratung.", category: "Tourismus" },
      { id: "v3_13", word: "die Erfahrung, -en", meaning: "kinh nghiệm", example: "Du hast die Motivation, wir haben die Erfahrung.", category: "Tourismus" },
      { id: "v3_14", word: "die Fahrt, -en", meaning: "chuyến đi", example: "Bei Fahrten durch die Natur sehen Sie viele Tiere.", category: "Tourismus" },
      { id: "v3_15", word: "die Gruppe, -n", meaning: "nhóm", example: "Unsere Gruppen sind klein.", category: "Tourismus" },
      { id: "v3_16", word: "die Karte, -n", meaning: "bản đồ / thẻ", example: "Haben Sie eine Karte von der Stadt?", category: "Tourismus" },
      { id: "v3_17", word: "der Service, -s", meaning: "dịch vụ", example: "Der Fahrradvermieter bietet extra Service.", category: "Tourismus" },
      { id: "v3_18", word: "der Trend, -s", meaning: "xu hướng", example: "Wandern liegt im Trend.", category: "Tourismus" },
      { id: "v3_19", word: "der Unterricht, -e", meaning: "tiết học, sự giảng dạy", example: "Hier gibt es Unterricht für Anfänger.", category: "Tourismus" },
      { id: "v3_20", word: "anbieten", meaning: "cung cấp, mời mọc", example: "Wir bieten Stadtteilen für Touristen an.", grammar: "hat angeboten", category: "Tourismus" },
      { id: "v3_21", word: "beraten", meaning: "tư vấn", example: "Wir beraten Sie sehr gern.", grammar: "er berät, hat beraten", category: "Tourismus" },
      { id: "v3_22", word: "beginnen", meaning: "bắt đầu", example: "Die Tour hat um 9 Uhr begonnen.", grammar: "hat begonnen", category: "Tourismus" },
      { id: "v3_23", word: "buchen", meaning: "đặt (chọn, vé)", example: "Welche Reise würdest du am liebsten buchen?", grammar: "hat gebucht", category: "Tourismus" },
      { id: "v3_24", word: "enden", meaning: "kết thúc", example: "Die Fahrt endet am See.", grammar: "hat geendet", category: "Tourismus" },
      { id: "v3_25", word: "erleben", meaning: "trải nghiệm", example: "Mit dem Fahrrad erlebt man alles anders.", grammar: "hat erlebt", category: "Tourismus" },
      { id: "v3_26", word: "mitmachen", meaning: "tham gia", example: "Nur Fortgeschrittene dürfen beim Unterricht mitmachen.", grammar: "hat mitgemacht", category: "Tourismus" },
      { id: "v3_27", word: "aktiv", meaning: "năng động", example: "Sie können sportlich aktiv sein.", category: "Tourismus" },
      { id: "v3_28", word: "sportlich", meaning: "thể thao", example: "Sind Sie sportlich?", category: "Tourismus" },
      { id: "v3_29", word: "die Mode, -n", meaning: "thời trang", example: "Das ist die neueste Surf-Mode.", category: "Weitere wichtige Wörter" },
      { id: "v3_30", word: "liegen in", meaning: "nằm trong, đang là xu hướng", example: "E-Bikes liegen gerade im Trend.", grammar: "hat gelegen", category: "Weitere wichtige Wörter" },
      { id: "v3_31", word: "überhaupt nicht", meaning: "hoàn toàn không", example: "Das gefällt mir überhaupt nicht.", category: "Weitere wichtige Wörter" },
      { id: "v3_32", word: "anders", meaning: "khác", example: "Was war früher anders als heute?", category: "Weitere wichtige Wörter" },
      { id: "v3_33", word: "außerdem", meaning: "ngoài ra", example: "Außerdem haben wir viel Sonne.", category: "Weitere wichtige Wörter" },
      { id: "v3_34", word: "direkt", meaning: "trực tiếp", example: "Sie übernachten direkt am Wasser.", category: "Weitere wichtige Wörter" }
    ],
    grammar: [
      { id: "l3_g1", word: "Wortbildung: Verb → Nomen (mit -ung)", meaning: "Danh từ hóa với đuôi -ung", rule: "Động từ (bỏ đuôi -en) + ung = Danh từ (luôn là giống cái 'die'). Áp dụng cho nhiều động từ để tạo danh từ chỉ quá trình/sự việc.", example: "sich erholen → die Erholung, wandern → die Wanderung.", exampleTranslation: "thư giãn → sự thư giãn, đi bộ đường dài → chuyến đi bộ." },
      { id: "l3_g2", word: "Wortbildung: Verb → Nomen (mit -er)", meaning: "Danh từ hóa với đuôi -er", rule: "Động từ + er = Danh từ chỉ người (luôn là giống đực 'der').", example: "vermieten → der Vermieter, wandern → der Wanderer.", exampleTranslation: "cho thuê → người cho thuê, đi bộ đường dài → người đi bộ đd." },
      { id: "l3_g3", word: "etwas bewerten", meaning: "Đánh giá, nhận xét ý kiến", rule: "Wir benutzen 'Gefällt Ihnen..?' oder 'Ich finde/denke/glaube...'.", example: "Mir gefällt die Idee sehr gut. Ich glaube, das funktioniert.", exampleTranslation: "Tôi rất thích ý tưởng này. Tôi tin là nó sẽ khả thi." },
      { id: "l3_g4", word: "Vorlieben ausdrücken", meaning: "Bày tỏ sở thích / mong muốn", rule: "Dùng 'würde am liebsten' hoặc 'ich ... lieber'.", example: "Ich würde am liebsten eine Radtour machen. Ich fahre lieber Fahrrad.", exampleTranslation: "Tôi thích đi tour xe đạp nhất. Tôi thích đạp xe hơn." }
    ]
  },
  {
    id: "l4",
    title: "Lektion 4",
    subtitle: "Was darf es sein?",
    items: [
      { id: "v4_1", word: "die Banane, -n", meaning: "Quả chuối", example: "Ich esse gern Bananen.", category: "Lebensmittel" },
      { id: "v4_2", word: "die Birne, -n", meaning: "Quả lê", example: "Die Birne ist sehr süß.", category: "Lebensmittel" },
      { id: "v4_3", word: "die Bohne, -n", meaning: "Hạt đậu / Đỗ", example: "Wir kochen grüne Bohnen.", category: "Lebensmittel" },
      { id: "v4_4", word: "das Bonbon, -s", meaning: "Kẹo", example: "Möchtest du ein Bonbon?", category: "Lebensmittel" },
      { id: "v4_5", word: "die Cola", meaning: "Nước ngọt Cola", example: "Ich trinke eine Cola.", category: "Lebensmittel" },
      { id: "v4_6", word: "das Gemüse (Sg.)", meaning: "Rau củ", example: "Gemüse ist sehr gesund.", category: "Lebensmittel" },
      { id: "v4_7", word: "das Getränk, -e", meaning: "Đồ uống", example: "Welches Getränk möchtest du?", category: "Lebensmittel" },
      { id: "v4_8", word: "die Marmelade, -n", meaning: "Mứt", example: "Ich esse Brot mit Marmelade.", category: "Lebensmittel" },
      { id: "v4_9", word: "das Mehl (Sg.)", meaning: "Bột mì", example: "Für den Kuchen brauchen wir Mehl.", category: "Lebensmittel" },
      { id: "v4_10", word: "der Quark (Sg.)", meaning: "Phô mai tươi / Sữa đông", example: "Quark mit Obst schmeckt gut.", category: "Lebensmittel" },
      { id: "v4_11", word: "der Saft, -\"e", meaning: "Nước ép", example: "Ich trinke ein Glas Orangensaft.", category: "Lebensmittel" },
      { id: "v4_12", word: "fett", meaning: "Nhiều chất béo / Mỡ", example: "Das ist ein fetter Braten.", category: "Lebensmittel (Adjektive)" },
      { id: "v4_13", word: "fettarm", meaning: "Ít béo", example: "Ich trinke fettarme Milch.", category: "Lebensmittel (Adjektive)" },
      { id: "v4_14", word: "frisch", meaning: "Tươi", example: "Haben Sie frischen Fisch?", category: "Lebensmittel (Adjektive)" },
      { id: "v4_15", word: "hart", meaning: "Cứng / Luộc kỹ", example: "Ich möchte ein hart gekochtes Ei.", category: "Lebensmittel (Adjektive)" },
      { id: "v4_16", word: "mager", meaning: "Nạc / Ít mỡ", example: "Ich hätte gern einen mageren Schinken.", category: "Lebensmittel (Adjektive)" },
      { id: "v4_17", word: "normal", meaning: "Bình thường", example: "Wir brauchen normale Milch.", category: "Lebensmittel (Adjektive)" },
      { id: "v4_18", word: "roh", meaning: "Sống", example: "Das Fleisch ist noch roh.", category: "Lebensmittel (Adjektive)" },
      { id: "v4_19", word: "weich", meaning: "Mềm / Luộc lòng đào", example: "Ich esse gern weich gekochte Eier.", category: "Lebensmittel (Adjektive)" },
      { id: "v4_20", word: "die Dose, -n", meaning: "Lon / Hộp kim loại", example: "Eine Dose Thunfisch, bitte.", category: "Mengen" },
      { id: "v4_21", word: "das Gramm, -e (g)", meaning: "Gram", example: "Ich brauche 200 Gramm Käse.", category: "Mengen" },
      { id: "v4_22", word: "das Kilo(gramm), - (kg)", meaning: "Kilogram", example: "Ein Kilo Äpfel kostet 2 Euro.", category: "Mengen" },
      { id: "v4_23", word: "der Liter, - (l)", meaning: "Lít", example: "Zwei Liter Milch, bitte.", category: "Mengen" },
      { id: "v4_24", word: "die Packung, -en", meaning: "Gói / Hộp giấy", example: "Eine Packung Tee.", category: "Mengen" },
      { id: "v4_25", word: "das Pfund, -e", meaning: "Cân Anh (500 gram tại Đức)", example: "Ein Pfund Tomaten.", category: "Mengen" },
      { id: "v4_26", word: "die Portion, -en", meaning: "Khẩu phần / Suất", example: "Eine Portion Pommes frites.", category: "Mengen" },
      { id: "v4_27", word: "die Tüte, -n", meaning: "Túi (nilon, giấy)", example: "Kostet die Tüte etwas?", category: "Mengen" },
      { id: "v4_28", word: "der Zettel, -", meaning: "Mảnh giấy", example: "Hast du den Einkaufszettel?", category: "Weitere Wörter" },
      { id: "v4_29", word: "hungrig", meaning: "Đói", example: "Bist du hungrig?", category: "Weitere Wörter" },
      { id: "v4_30", word: "satt", meaning: "No", example: "Nein, danke, ich bin satt.", category: "Weitere Wörter" },
      { id: "v4_31", word: "je", meaning: "Mỗi (cho mỗi)", example: "Die Tomaten kosten 2,80 Euro je Kilo.", category: "Weitere Wörter" },
      { id: "v4_32", word: "pro", meaning: "Mỗi (pro Woche...)", example: "Einmal pro Woche gehe ich einkaufen.", category: "Weitere Wörter" },
      { id: "v4_33", word: "die Gewohnheit, -en", meaning: "Thói quen", example: "Das ist meine Essgewohnheit.", category: "Weitere Wörter" },
      { id: "v4_34", word: "der Fehler, -", meaning: "Lỗi", example: "Das ist ein großer Fehler.", category: "Weitere Wörter" },
      { id: "v4_35", word: "bestellen, hat bestellt", meaning: "Gọi món / Đặt hàng", example: "Was hast du bestellt?", category: "Weitere Wörter" },
      { id: "v4_36", word: "hoffen, hat gehofft", meaning: "Hy vọng", example: "Ich hoffe, du magst Eier.", category: "Weitere Wörter" },
      { id: "v4_37", word: "nämlich", meaning: "Đó là vì / Bởi vì (giải thích lý do)", example: "Ich trinke Tee, ich mag nämlich keinen Kaffee.", category: "Weitere Wörter" }
    ],
    grammar: [
      { id: "l4_g1", word: "Adjektivdeklination: indefiniter Artikel (Nominativ)", meaning: "Biến cách tính từ: Mạo từ không xác định (Nominativ)", rule: "Với ein/eine và kein/meine: Maskulin: -er (ein magerer), Neutral: -es (ein helles), Feminin: -e (eine grüne), Plural (không mạo từ): -e (helle Brötchen) / Plural (với keine/meine): -en (keine hellen Brötchen).", example: "Das ist ein magerer Schinken. / Das ist ein helles Brot.", exampleTranslation: "Đó là một miếng thịt xông khói nạc. / Đó là một ổ bánh mì nhạt màu." },
      { id: "l4_g2", word: "Adjektivdeklination: indefiniter Artikel (Akkusativ)", meaning: "Biến cách tính từ: Mạo từ không xác định (Akkusativ)", rule: "Chỉ giống đực (Maskulin) đổi thành -en (einen mageren). Các giống khác và số nhiều giống Nominativ.", example: "Ich hätte gern einen mageren Schinken.", exampleTranslation: "Tôi muốn một miếng thịt xông khói nạc." },
      { id: "l4_g3", word: "Adjektivdeklination: indefiniter Artikel (Dativ)", meaning: "Biến cách tính từ: Mạo từ không xác định (Dativ)", rule: "Tất cả các giống ở số ít sau một mạo từ không xác định (einem/einer) đều thêm đuôi -en. Số nhiều không mạo từ thêm -en.", example: "Mit einem mageren Schinken. / Mit einer grünen Paprika.", exampleTranslation: "Với một miếng thịt dăm bông nạc. / Với một quả ớt chuông xanh." },
      { id: "l4_g4", word: "Einkaufen & Vorlieben äußern", meaning: "Mua sắm & Thể hiện sở thích", rule: "Hỏi: Was darf es sein? / Sonst noch etwas? Bán: Ich hätte gern... / Ich nehme... / Geben Sie mir... Sở thích: Ich esse gern... / Ich mag lieber...", example: "Ich nehme 200 Gramm Schinken. / Ich mag keine Marmelade.", exampleTranslation: "Tôi lấy 200 gr dăm bông. / Tôi không thích mứt." }
    ]
  },
  {
    id: "l5",
    title: "Lektion 5",
    subtitle: "Schaut mal, der schöne Dom!",
    items: [
      { id: "v5_1", word: "der Besuch, -e", meaning: "Chuyến viếng thăm", example: "Der Besuch war sehr kurz.", category: "Tourismus" },
      { id: "v5_2", word: "der Club, -s", meaning: "Câu lạc bộ", example: "Wir gehen am Samstag in einen Club.", category: "Tourismus" },
      { id: "v5_3", word: "die Ferien (Pl.)", meaning: "Kỳ nghỉ", example: "Ich wünsche dir schöne Ferien!", category: "Tourismus" },
      { id: "v5_4", word: "die Führung, -en", meaning: "Chuyến tham quan có hướng dẫn", example: "Wir machen eine Stadtführung.", category: "Tourismus" },
      { id: "v5_5", word: "die Kamera, -s", meaning: "Máy ảnh", example: "Hast du deine Kamera dabei?", category: "Tourismus" },
      { id: "v5_6", word: "die Mauer, -n", meaning: "Bức tường (Stadtmauer: tường thành)", example: "Die alte Stadtmauer ist sehenswert.", category: "Tourismus" },
      { id: "v5_7", word: "der Prospekt, -e", meaning: "Tờ rơi (quảng cáo)", example: "Ich lese den Prospekt.", category: "Tourismus" },
      { id: "v5_8", word: "der Reiseführer, -", meaning: "Hướng dẫn viên / Sách hướng dẫn du lịch", example: "Unser Reiseführer war sehr nett.", category: "Tourismus" },
      { id: "v5_9", word: "der Rundgang, -\"e", meaning: "Chuyến đi dạo quanh vòng", example: "Wir machen einen Rundgang durch die Altstadt.", category: "Tourismus" },
      { id: "v5_10", word: "die Sehenswürdigkeit, -en", meaning: "Danh lam thắng cảnh", example: "Der Dom ist eine bekannte Sehenswürdigkeit.", category: "Tourismus" },
      { id: "v5_11", word: "der Tourist, -en", meaning: "Khách du lịch (nam)", example: "Viele Touristen kommen im Sommer.", category: "Tourismus" },
      { id: "v5_12", word: "das Trinkgeld, -er", meaning: "Tiền boa", example: "Wir geben dem Kellner Trinkgeld.", category: "Tourismus" },
      { id: "v5_13", word: "die Unterkunft, -\"e", meaning: "Chỗ ở", example: "Suchen Sie eine günstige Unterkunft?", category: "Tourismus" },
      { id: "v5_14", word: "besichtigen, hat besichtigt", meaning: "Tham quan", example: "Sie besichtigen das Museum.", category: "Tourismus" },
      { id: "v5_15", word: "sich interessieren, hat sich interessiert", meaning: "Quan tâm đến", example: "Interessierst du dich für Kunst?", category: "Tourismus" },
      { id: "v5_16", word: "wechseln, hat gewechselt", meaning: "Đổi (Geld wechseln: đổi tiền)", example: "Wo kann ich Geld wechseln?", category: "Tourismus" },
      { id: "v5_17", word: "zeigen, hat gezeigt", meaning: "Chỉ, cho xem", example: "Die Stadtführerin zeigt uns das Rathaus.", category: "Tourismus" },
      { id: "v5_18", word: "berühmt", meaning: "Nổi tiếng", example: "Der Dom ist sehr berühmt.", category: "Tourismus" },
      { id: "v5_19", word: "geöffnet / offen", meaning: "Mở cửa", example: "Das Museum ist heute geöffnet.", category: "Tourismus" },
      { id: "v5_20", word: "die Nachricht, -en", meaning: "Tin nhắn, tin tức", example: "Ich habe eine Nachricht von dir.", category: "Weitere Wörter" },
      { id: "v5_21", word: "die Postkarte, -n", meaning: "Bưu thiếp", example: "Schreibst du mir eine Postkarte?", category: "Weitere Wörter" },
      { id: "v5_22", word: "der Supermarkt, -\"e", meaning: "Siêu thị", example: "Der Supermarkt ist um die Ecke.", category: "Weitere Wörter" },
      { id: "v5_23", word: "der Wunsch, -\"e", meaning: "Mong muốn, điều ước", example: "Hast du noch einen Wunsch?", category: "Weitere Wörter" },
      { id: "v5_24", word: "abgeben, du gibst ab, er gibt ab, hat abgegeben", meaning: "Giao nộp, gửi (đồ)", example: "Bitte geben Sie Ihre Jacke ab.", category: "Weitere Wörter" },
      { id: "v5_25", word: "sich ärgern, hat sich geärgert", meaning: "Tức giận", example: "Ich ärgere mich über das Wetter.", category: "Weitere Wörter" },
      { id: "v5_26", word: "dafür sein, war dafür, ist dafür gewesen", meaning: "Ủng hộ (việc gì)", example: "Ich bin dafür, dass wir ins Kino gehen.", category: "Weitere Wörter" },
      { id: "v5_27", word: "dagegen sein, war dagegen, ist dagegen gewesen", meaning: "Phản đối", example: "Er ist dagegen.", category: "Weitere Wörter" },
      { id: "v5_28", word: "sich freuen, hat sich gefreut", meaning: "Vui mừng", example: "Ich freue mich auf den Urlaub.", category: "Weitere Wörter" },
      { id: "v5_29", word: "bunt", meaning: "Nhiều màu sắc", example: "Das Haus ist bunt.", category: "Weitere Wörter" },
      { id: "v5_30", word: "einverstanden", meaning: "Đồng ý", example: "Bist du einverstanden?", category: "Weitere Wörter" },
      { id: "v5_31", word: "schick", meaning: "Sang trọng, sành điệu", example: "Der Club ist sehr schick.", category: "Weitere Wörter" },
      { id: "v5_32", word: "bestimmt", meaning: "Chắc chắn", example: "Das wird bestimmt toll.", category: "Weitere Wörter" },
      { id: "v5_33", word: "meistens", meaning: "Thường, hầu hết", example: "Meistens gehe ich am Wochenende ins Museum.", category: "Weitere Wörter" },
      { id: "v5_34", word: "später", meaning: "Muộn hơn, sau đó", example: "Können wir das später machen?", category: "Weitere Wörter" },
      { id: "v5_35", word: "geschlossen", meaning: "Đóng cửa", example: "Das Geschäft ist heute geschlossen.", category: "Tourismus" },
      { id: "v5_36", word: "beeindruckend", meaning: "Ấn tượng", example: "Der Kölner Dom ist wirklich beeindruckend.", category: "Tourismus" }
    ],
    grammar: [
      { id: "l5_g1", word: "Adjektivdeklination: definiter Artikel (Nominativ)", meaning: "Biến cách tính từ: Mạo từ xác định (Nominativ)", rule: "Tất cả các giống ở số ít đều thêm đuôi -e (der schöne Dom, das bunte Fenster, die neue Kamera). Số nhiều thêm -en (die netten Leute).", example: "Der alte Dom gefällt mir gut. / Die schönen Häuser sind hier.", exampleTranslation: "Tôi thích nhà thờ cổ ấy. / Những ngôi nhà đẹp ở đây." },
      { id: "l5_g2", word: "Adjektivdeklination: definiter Artikel (Akkusativ)", meaning: "Biến cách tính từ: Mạo từ xác định (Akkusativ)", rule: "Giống đực thêm đuôi -en (den alten Dom). Các giống khác và số nhiều giống hệt Nominativ.", example: "Ich finde den alten Dom toll. Wir besichtigen die neue Kirche.", exampleTranslation: "Tôi thấy nhà thờ cổ tuyệt vời. Chúng tôi tham quan nhà thờ mới." },
      { id: "l5_g3", word: "Adjektivdeklination: definiter Artikel (Dativ)", meaning: "Biến cách tính từ: Mạo từ xác định (Dativ)", rule: "Số ít và số nhiều sau mạo từ xác định đều thêm đuôi -en (dem netten Reiseführer, dem bunten Fenster, der neuen Kamera, den netten Leuten).", example: "Mit dem netten Reiseführer gehen wir durch die Stadt.", exampleTranslation: "Cùng người hướng dẫn viên thân thiện, chúng tôi đi dạo quanh thành phố." },
      { id: "l5_g4", word: "Etwas gemeinsam planen", meaning: "Lên kế hoạch đi chơi cùng nhau", rule: "Dùng các mẫu câu: Wollen wir zuerst/danach ins Kino gehen? Und am Sonntag können wir...? Ich bin (auch) dafür. / Ich bin dagegen.", example: "Was denkst du? / Einverstanden.", exampleTranslation: "Cậu nghĩ sao? / Đồng ý." }
    ]
  },
  {
    id: "l6",
    title: "Lektion 6",
    subtitle: "Meine Lieblingsveranstaltung",
    items: [
      { id: "v6_1", word: "die Veranstaltung, -en", meaning: "Sự kiện", example: "Das ist meine Lieblingsveranstaltung.", category: "Veranstaltungen" },
      { id: "v6_2", word: "die Bühne, -n", meaning: "Sân khấu", example: "Der Künstler steht auf der Bühne.", category: "Veranstaltungen" },
      { id: "v6_3", word: "die Diskussion, -en", meaning: "Cuộc thảo luận", example: "Die Diskussion war sehr spannend.", category: "Veranstaltungen" },
      { id: "v6_4", word: "der Eintritt, -e", meaning: "Vé vào cửa / Sự vào cửa", example: "Der Eintritt ist heute kostenlos.", category: "Veranstaltungen" },
      { id: "v6_5", word: "die Ermäßigung, -en", meaning: "Sự giảm giá", example: "Gibt es eine Ermäßigung für Studenten?", category: "Veranstaltungen" },
      { id: "v6_6", word: "das Festival, -s", meaning: "Lễ hội", example: "Wir gehen im Sommer auf ein Festival.", category: "Veranstaltungen" },
      { id: "v6_7", word: "die Karte, -n", meaning: "Vé (nói chung)", example: "Hast du schon die Karten gekauft?", category: "Veranstaltungen" },
      { id: "v6_8", word: "die Eintrittskarte, -n", meaning: "Vé vào cửa", example: "Ich brauche zwei Eintrittskarten.", category: "Veranstaltungen" },
      { id: "v6_9", word: "das Kostüm, -e", meaning: "Trang phục hóa trang", example: "Das Kostüm ist sehr schön.", category: "Veranstaltungen" },
      { id: "v6_10", word: "die Kunst, -\"e", meaning: "Nghệ thuật", example: "Interessierst du dich für Kunst?", category: "Veranstaltungen" },
      { id: "v6_11", word: "der Künstler, - / die Künstlerin, -nen", meaning: "Nghệ sĩ", example: "Er ist ein bekannter Künstler.", category: "Veranstaltungen" },
      { id: "v6_12", word: "der Vortrag, -\"e", meaning: "Bài thuyết trình / Diễn thuyết", example: "Der Vortrag über Kunst war interessant.", category: "Veranstaltungen" },
      { id: "v6_13", word: "erleben, hat erlebt", meaning: "Trải nghiệm", example: "Auf dem Festival kann man viel erleben.", category: "Veranstaltungen" },
      { id: "v6_14", word: "stattfinden, hat stattgefunden", meaning: "Diễn ra (sự kiện)", example: "Das Konzert findet um 20 Uhr statt.", category: "Veranstaltungen" },
      { id: "v6_15", word: "zahlen, hat gezahlt", meaning: "Thanh toán, trả tiền", example: "Ich möchte zahlen, bitte.", category: "Veranstaltungen" },
      { id: "v6_16", word: "spannend", meaning: "Hấp dẫn", example: "Der Film ist sehr spannend.", category: "Veranstaltungen" },
      { id: "v6_17", word: "der Vorschlag, -\"e", meaning: "Lời đề nghị", example: "Das ist ein guter Vorschlag.", category: "Verabredungen" },
      { id: "v6_18", word: "ausmachen, hat ausgemacht", meaning: "Quyết định, hẹn", example: "Wir haben einen Treffpunkt ausgemacht.", category: "Verabredungen" },
      { id: "v6_19", word: "halten von, hat gehalten", meaning: "Nghĩ gì về (ai/cái gì)", example: "Was hältst du von dieser Idee?", category: "Verabredungen" },
      { id: "v6_20", word: "hin", meaning: "Đi đến đó", example: "Gehst du auch hin?", category: "Verabredungen" },
      { id: "v6_21", word: "hinfahren, ist hingefahren", meaning: "Lái xe đến đó", example: "Wir fahren zusammen hin.", category: "Verabredungen" },
      { id: "v6_22", word: "lassen, du lässt, er lässt, hat gelassen", meaning: "Để, cho phép, rủ", example: "Lass uns ins Kino gehen!", category: "Verabredungen" },
      { id: "v6_23", word: "mitkommen, ist mitgekommen", meaning: "Đi cùng", example: "Kommst du mit?", category: "Verabredungen" },
      { id: "v6_24", word: "sich verabreden, hat sich verabredet", meaning: "Hẹn hò", example: "Wir haben uns für morgen verabredet.", category: "Verabredungen" },
      { id: "v6_25", word: "vorschlagen, du schlägst vor, er schlägt vor", meaning: "Đề nghị", example: "Ich schlage vor, wir gehen essen.", category: "Verabredungen" },
      { id: "v6_26", word: "prima", meaning: "Tuyệt vời", example: "Das ist eine prima Idee!", category: "Verabredungen" },
      { id: "v6_27", word: "das Feuer, -", meaning: "Lửa", example: "Wir sitzen am Lagerfeuer.", category: "Weitere Wörter" },
      { id: "v6_28", word: "das Mal, -e / das erste Mal", meaning: "Lần / Lần đầu tiên", example: "Das ist mein erstes Mal in Berlin.", category: "Weitere Wörter" },
      { id: "v6_29", word: "da / dort", meaning: "Ở đó", example: "Wer ist da? / Die Bühne ist dort.", category: "Weitere Wörter" },
      { id: "v6_30", word: "genau", meaning: "Chính xác", example: "Genau das meine ich.", category: "Weitere Wörter" },
      { id: "v6_31", word: "mal", meaning: "Một chút, thử xem", example: "Schau mal!", category: "Weitere Wörter" },
      { id: "v6_32", word: "ziemlich", meaning: "Khá", example: "Das ist ziemlich teuer.", category: "Weitere Wörter" },
      { id: "v6_33", word: "zusammen", meaning: "Cùng nhau", example: "Wir gehen zusammen.", category: "Weitere Wörter" }
    ],
    grammar: [
      { id: "l6_g1", word: "Temporale Präposition: von ... bis (zu)", meaning: "Giới từ chỉ thời gian: từ ... đến", rule: "Dùng để chỉ một khoảng thời gian xác định có điểm khởi đầu và kết thúc.", example: "Das Festival dauert von Freitag bis Sonntag.", exampleTranslation: "Lễ hội kéo dài từ thứ Sáu đến Chủ Nhật." },
      { id: "l6_g2", word: "Temporale Präposition: von ... an", meaning: "Giới từ chỉ thời gian: từ ... trở đi", rule: "Dùng để chỉ điểm bắt đầu của một sự việc ở hiện tại hoặc tương lai (không có kết thúc).", example: "Von morgen an lerne ich jeden Tag Deutsch.", exampleTranslation: "Từ ngày mai trở đi tôi sẽ học tiếng Đức mỗi ngày." },
      { id: "l6_g3", word: "Temporale Präposition: seit + Dativ", meaning: "Giới từ chỉ thời gian: từ (khi) ...", rule: "Dùng cho sự việc bắt đầu trong quá khứ và vẫn còn tiếp diễn ở hiện tại.", example: "Ich lebe seit einem Jahr in Deutschland.", exampleTranslation: "Tôi đã sống ở Đức được một năm rồi." },
      { id: "l6_g4", word: "Temporale Präposition: über + Akkusativ", meaning: "Giới từ chỉ thời gian: hơn ... (thời gian)", rule: "Dùng để chỉ một khoảng thời gian dài hơn một lượng nhất định.", example: "Er arbeitet schon über 10 Jahre bei dieser Firma.", exampleTranslation: "Anh ấy đã làm việc ở công ty này hơn 10 năm." },
      { id: "l6_g5", word: "Etwas vorschlagen / zustimmen / ablehnen", meaning: "Đề nghị / Đồng ý / Từ chối", rule: "Mẫu câu dùng trong giao tiếp.", example: "Wollen wir ins Kino gehen? - Ja, okay, das machen wir! / Nein, das ist mir zu langweilig.", exampleTranslation: "Chúng ta đi xem phim nhé? - Vâng, ok, chúng ta làm vậy đi! / Không, điều đó quá nhàm chán với tôi." }
    ]
  },
  {
    id: "l7",
    title: "Lektion 7",
    subtitle: "Wir könnten montags joggen gehen",
    items: [
      { id: "l7_v1", word: "die Art, -en", meaning: "loại, hình thức", example: "Welche Art von Sport machst du?", exampleTranslation: "Bạn chơi loại thể thao nào?" },
      { id: "l7_v2", word: "die Sportart, -en", meaning: "môn thể thao", example: "Schwimmen ist eine gute Sportart.", exampleTranslation: "Bơi lội là một môn thể thao tốt." },
      { id: "l7_v3", word: "die Diät, -en", meaning: "chế độ ăn kiêng", example: "Sie macht eine Diät.", exampleTranslation: "Cô ấy đang ăn kiêng." },
      { id: "l7_v4", word: "die Gesundheit", meaning: "sức khỏe", example: "Gesundheit ist sehr wichtig.", exampleTranslation: "Sức khỏe rất quan trọng." },
      { id: "l7_v5", word: "das Gewicht, -e", meaning: "cân nặng", example: "Sein Gewicht ist normal.", exampleTranslation: "Cân nặng của anh ấy bình thường." },
      { id: "l7_v6", word: "das Training, -s", meaning: "sự tập luyện", example: "Das Training fängt um 6 Uhr an.", exampleTranslation: "Buổi tập bắt đầu lúc 6 giờ." },
      { id: "l7_v7", word: "ab|nehmen, du nimmst ab, er nimmt ab, hat abgenommen", meaning: "giảm cân", example: "Er möchte 5 Kilo abnehmen.", exampleTranslation: "Anh ấy muốn giảm 5 cân." },
      { id: "l7_v8", word: "aus|ruhen (sich), hat sich ausgeruht", meaning: "nghỉ ngơi", example: "Am Wochenende ruhe ich mich aus.", exampleTranslation: "Vào cuối tuần tôi nghỉ ngơi." },
      { id: "l7_v9", word: "trainieren, hat trainiert", meaning: "tập luyện", example: "Wir trainieren jeden Tag.", exampleTranslation: "Chúng tôi tập luyện mỗi ngày." },
      { id: "l7_v10", word: "wiegen, hat gewogen", meaning: "cân nặng bao nhiêu / cân (vật)", example: "Wie viel wiegst du?", exampleTranslation: "Bạn nặng bao nhiêu?" },
      { id: "l7_v11", word: "fit", meaning: "khỏe mạnh, thon gọn", example: "Ich bin nicht fit.", exampleTranslation: "Tôi không có sức khỏe tốt / không thon gọn." },
      { id: "l7_v12", word: "frisch", meaning: "tươi mát, trong lành", example: "Das Gemüse ist frisch.", exampleTranslation: "Rau này tươi." },
      { id: "l7_v13", word: "die frische Luft", meaning: "không khí trong lành", example: "Wir gehen an die frische Luft.", exampleTranslation: "Chúng tôi đi ra chỗ có không khí trong lành." },
      { id: "l7_v14", word: "regelmäßig", meaning: "thường xuyên, đều đặn", example: "Man sollte regelmäßig Sport machen.", exampleTranslation: "Người ta nên tập thể thao đều đặn." },
      { id: "l7_v15", word: "selten", meaning: "hiếm khi", example: "Ich esse selten Fastfood.", exampleTranslation: "Tôi hiếm khi ăn thức ăn nhanh." },
      { id: "l7_v16", word: "mindestens", meaning: "ít nhất", example: "Du solltest mindestens zwei Liter Wasser trinken.", exampleTranslation: "Bạn nên uống ít nhất 2 lít nước." },
      { id: "l7_v17", word: "das Golf", meaning: "môn golf", example: "Spielen Sie Golf?", exampleTranslation: "Ngài có chơi golf không?" },
      { id: "l7_v18", word: "die Nudel, -n", meaning: "mì", example: "Ich esse gern Nudeln.", exampleTranslation: "Tôi thích ăn mì." },
      { id: "l7_v19", word: "die Post", meaning: "bưu điện, thư từ", example: "Ich muss meine Post bearbeiten.", exampleTranslation: "Tôi phải xử lý thư từ của mình." },
      { id: "l7_v20", word: "die Stelle, -n / an deiner Stelle", meaning: "vị trí / nếu tôi là bạn", example: "An deiner Stelle würde ich joggen gehen.", exampleTranslation: "Nếu là bạn, tôi sẽ đi chạy bộ." },
      { id: "l7_v21", word: "der Verein, -e", meaning: "câu lạc bộ", example: "Ich bin in einem Sportverein.", exampleTranslation: "Tôi tham gia một câu lạc bộ thể thao." },
      { id: "l7_v22", word: "empfehlen, du empfiehlst, er empfiehlt, hat empfohlen", meaning: "khuyên, giới thiệu", example: "Welche Sportart würdest du mir empfehlen?", exampleTranslation: "Bạn sẽ giới thiệu môn thể thao nào cho tôi?" },
      { id: "l7_v23", word: "leihen, hat geliehen", meaning: "cho mượn, mượn", example: "Kannst du mir dein Fahrrad leihen?", exampleTranslation: "Bạn có thể cho tôi mượn xe đạp của bạn không?" },
      { id: "l7_v24", word: "öffnen, hat geöffnet", meaning: "mở", example: "Das Schwimmbad hat geöffnet.", exampleTranslation: "Hồ bơi đang mở cửa." },
      { id: "l7_v25", word: "teil|nehmen, du nimmst teil, er nimmt teil, hat teilgenommen", meaning: "tham gia", example: "Sie nimmt an einem Kurs teil.", exampleTranslation: "Cô ấy tham gia một khóa học." },
      { id: "l7_v26", word: "circa", meaning: "khoảng", example: "Das dauert circa fünf Minuten.", exampleTranslation: "Việc đó kéo dài khoảng 5 phút." },
      { id: "l7_v27", word: "früh", meaning: "sớm", example: "Ich stehe früh auf.", exampleTranslation: "Tôi thức dậy sớm." },
      { id: "l7_v28", word: "morgens, nachmittags, abends, nachts", meaning: "mỗi buổi sáng / chiều / tối / đêm", example: "Abends esse ich keine Nudeln mehr.", exampleTranslation: "Vào các buổi tối tôi không ăn mì nữa." },
      { id: "l7_v29", word: "montags, dienstags, ...", meaning: "mỗi thứ hai, thứ ba, ...", example: "Wir könnten montags joggen gehen.", exampleTranslation: "Chúng ta có thể đi chạy bộ vào các thứ Hai." },
      { id: "l7_v30", word: "zwischen", meaning: "ở giữa", example: "Zwischen 7.00 und 7.15 Uhr gibt es Frühstück.", exampleTranslation: "Từ 7:00 đến 7:15 có bữa sáng." },
      { id: "l7_v31", word: "andere", meaning: "khác", example: "Wir können auch andere Sportarten machen.", exampleTranslation: "Chúng ta cũng có thể chơi các môn thể thao khác." }
    ],
    grammar: [
      { id: "l7_g1", word: "Temporale Adverbien", meaning: "Trạng từ chỉ thời gian lặp lại", rule: "Thêm đuôi -s vào danh từ chỉ buổi hoặc thứ (viết thường chữ cái đầu) để diễn tả sự lặp lại. (jeden Abend -> abends, jeden Montag -> montags).", example: "Montags und mittwochs gehe ich schwimmen.", exampleTranslation: "Vào các buổi thứ hai và thứ tư tôi đi bơi." },
      { id: "l7_g2", word: "Temporale Präposition: zwischen ... und ... (+ Dativ)", meaning: "Giới từ chỉ thời gian: Giữa ... và ...", rule: "Dùng để chỉ một khoảng thời gian nằm giữa hai mốc xác định.", example: "Zwischen 20 Uhr und 6 Uhr sollten Sie nichts essen.", exampleTranslation: "Từ 20 giờ đến 6 giờ Ngài không nên ăn gì." },
      { id: "l7_g3", word: "Temporale Präposition: seit (+ Dativ)", meaning: "Giới từ chỉ thời gian: Từ (khi) ...", rule: "Dùng để diễn tả sự việc bắt đầu trong quá khứ và vẫn còn tiếp diễn.", example: "Seit vier Monaten habe ich kein Auto mehr.", exampleTranslation: "Từ bốn tháng nay tôi không có ô tô nữa." },
      { id: "l7_g4", word: "Konjunktiv II: Vorschläge und Ratschläge (könnte / sollte)", meaning: "Cách 2 của động từ khuyết thiếu: Đề nghị và khuyên nhủ", rule: "Dùng 'könnten' (có thể) hoặc 'sollten' (nên) ở Konjunktiv II để đưa ra lời khuyên lịch sự hoặc lời đề nghị. Động từ chính nằm cuối ở dạng nguyên thể.", example: "Ihr solltet euch ausruhen. / Wir könnten montags joggen gehen.", exampleTranslation: "Các bạn nên nghỉ ngơi. / Chúng ta có thể đi chạy bộ vào các ngày thứ Hai." },
      { id: "l7_g5", word: "Ratschläge geben - Redemittel", meaning: "Mẫu câu đưa ra lời khuyên", rule: "Các cách đưa ra lời khuyên khác nhau: Du solltest..., Du könntest..., An deiner Stelle würde ich...", example: "An deiner Stelle würde ich joggen gehen.", exampleTranslation: "Nếu tôi là bạn, tôi sẽ đi chạy bộ." }
    ]
  },
  {
    id: "l8",
    title: "Lektion 8",
    subtitle: "Hoffentlich ist es nicht das Herz!",
    items: [
      { id: "l8_v1", word: "der Krankenwagen, -", meaning: "xe cứu thương", example: "Der Krankenwagen ist schnell da.", exampleTranslation: "Xe cứu thương đến nhanh." },
      { id: "l8_v2", word: "der Notarzt, ⸚e", meaning: "bác sĩ cấp cứu", example: "Der Notarzt untersucht den Verletzten.", exampleTranslation: "Bác sĩ cấp cứu kiểm tra người bị thương." },
      { id: "l8_v3", word: "die Notaufnahme, -n", meaning: "khoa cấp cứu", example: "Sie ist in der Notaufnahme.", exampleTranslation: "Cô ấy ở trong khoa cấp cứu." },
      { id: "l8_v4", word: "der Notfall, ⸚e", meaning: "trường hợp khẩn cấp, cấp cứu", example: "Bei einem Notfall rufen Sie die 112.", exampleTranslation: "Trong trường hợp khẩn cấp, hãy gọi 112." },
      { id: "l8_v5", word: "der Unfall, ⸚e", meaning: "tai nạn", example: "Er hatte einen Autounfall.", exampleTranslation: "Anh ấy bị tai nạn ô tô." },
      { id: "l8_v6", word: "die Verletzung, -en", meaning: "vết thương", example: "Die Verletzung ist nicht so schlimm.", exampleTranslation: "Vết thương không nghiêm trọng lắm." },
      { id: "l8_v7", word: "verletzen (sich), hat sich verletzt", meaning: "làm bị thương", example: "Ich habe mich beim Sport verletzt.", exampleTranslation: "Tôi đã tự làm mình bị thương lúc chơi thể thao." },
      { id: "l8_v8", word: "das Blut", meaning: "máu", example: "Mein Bein hat viel Blut verloren.", exampleTranslation: "Chân của tôi đã mất nhiều máu." },
      { id: "l8_v9", word: "die Grippe", meaning: "bệnh cúm", example: "Er liegt mit Grippe im Bett.", exampleTranslation: "Anh ấy đang nằm viện vì bị cúm." },
      { id: "l8_v10", word: "das Herz, -en", meaning: "trái tim", example: "Hoffentlich ist es nicht das Herz!", exampleTranslation: "Hy vọng đó không phải là bệnh tim!" },
      { id: "l8_v11", word: "die Krankheit, -en", meaning: "căn bệnh", example: "Was ist das für eine Krankheit?", exampleTranslation: "Đó là loại bệnh gì vậy?" },
      { id: "l8_v12", word: "der Magen, ⸚", meaning: "dạ dày", example: "Mein Magen tut weh.", exampleTranslation: "Dạ dày tôi bị đau." },
      { id: "l8_v13", word: "die Operation, -en", meaning: "ca phẫu thuật", example: "Die Operation hat lange gedauert.", exampleTranslation: "Ca phẫu thuật kéo dài rất lâu." },
      { id: "l8_v14", word: "die Sprechstunde, -n", meaning: "giờ khám bệnh", example: "Wann hat der Arzt Sprechstunde?", exampleTranslation: "Khi nào thì bác sĩ có giờ khám bệnh?" },
      { id: "l8_v15", word: "die Untersuchung, -en", meaning: "sự kiểm tra, khám", example: "Die Untersuchung dauert nur kurz.", exampleTranslation: "Cuộc kiểm tra chỉ diễn ra ngắn thôi." },
      { id: "l8_v16", word: "der Verband, ⸚e", meaning: "băng gạc", example: "Der Arzt macht einen Verband.", exampleTranslation: "Bác sĩ bó băng." },
      { id: "l8_v17", word: "bluten, hat geblutet", meaning: "chảy máu", example: "Mein Finger blutet.", exampleTranslation: "Ngón tay của tôi đang chảy máu." },
      { id: "l8_v18", word: "operieren, hat operiert", meaning: "phẫu thuật", example: "Der Arzt operiert das Knie.", exampleTranslation: "Bác sĩ phẫu thuật đầu gối." },
      { id: "l8_v19", word: "sterben, du stirbst, er stirbt, ist gestorben", meaning: "chết, qua đời", example: "Seine Großmutter ist gestorben.", exampleTranslation: "Bà của anh ấy đã qua đời." },
      { id: "l8_v20", word: "untersuchen, hat untersucht", meaning: "kiểm tra, theo dõi", example: "Der Arzt untersucht den Patienten.", exampleTranslation: "Bác sĩ khám cho bệnh nhân." },
      { id: "l8_v21", word: "verbinden, hat verbunden", meaning: "băng bó, kết nối", example: "Er verbindet die Wunde.", exampleTranslation: "Anh ấy băng bó vết thương." },
      { id: "l8_v22", word: "erkältet sein", meaning: "bị cảm lạnh", example: "Ich bin stark erkältet.", exampleTranslation: "Tôi đang bị cảm lạnh nặng." },
      { id: "l8_v23", word: "der Satz, ⸚e", meaning: "câu", example: "Ich schreibe einen Satz.", exampleTranslation: "Tôi viết một câu." },
      { id: "l8_v24", word: "die Sorge, -n", meaning: "sự lo lắng", example: "Mach dir keine Sorgen!", exampleTranslation: "Đừng lo lắng!" },
      { id: "l8_v25", word: "sich Sorgen machen", meaning: "lo lắng", example: "Ich mache mir Sorgen um ihn.", exampleTranslation: "Tôi lo lắng cho anh ấy." },
      { id: "l8_v26", word: "die Wahrheit, -en", meaning: "sự thật", example: "Sag mir bitte die Wahrheit.", exampleTranslation: "Xin hãy nói cho tôi biết sự thật." },
      { id: "l8_v27", word: "hinfallen, du fällst hin, er fällt hin, ist hingefallen", meaning: "vấp ngã", example: "Er ist hingefallen und hat sich verletzt.", exampleTranslation: "Anh ấy đã bị ngã và tự làm mình bị thương." },
      { id: "l8_v28", word: "los sein", meaning: "xảy ra chuyện gì", example: "Was ist denn los?", exampleTranslation: "Có chuyện gì đã xảy ra vậy?" },
      { id: "l8_v29", word: "vertrauen, hat vertraut", meaning: "tin tưởng", example: "Ich vertraue meinem Arzt.", exampleTranslation: "Tôi tin tưởng bác sĩ của mình." },
      { id: "l8_v30", word: "weil", meaning: "bởi vì", example: "Ich habe Kopfschmerzen, weil ich krank bin.", exampleTranslation: "Tôi bị đau đầu vì tôi bị ốm." },
      { id: "l8_v31", word: "deshalb", meaning: "vì vậy", example: "Ich bin krank. Deshalb komme ich nicht.", exampleTranslation: "Tôi đang ốm. Vì vậy tôi không đến." }
    ],
    grammar: [
      { id: "l8_g1", word: "Nebensatz mit weil", meaning: "Mệnh đề phụ với weil (bởi vì)", rule: "Weil chỉ nguyên nhân. Động từ đã chia ở mệnh đề weil phải đứng cuối câu. (Hauptsatz + , + weil + Subjekt + ... + Verb).", example: "Er geht nicht zur Arbeit, weil er krank ist.", exampleTranslation: "Anh ấy không đi làm, bởi vì anh ấy ốm." },
      { id: "l8_g2", word: "Hauptsatz mit deshalb", meaning: "Mệnh đề chính với deshalb (vì vậy)", rule: "Deshalb chỉ kết quả. Nó đứng ở vị trí số 1 trong mệnh đề thứ 2, động từ đã chia đứng ngay sau nó ở vị trí số 2.", example: "Er ist krank. Deshalb geht er nicht zur Arbeit.", exampleTranslation: "Anh ấy ốm. Vì vậy anh ấy không đi làm." },
      { id: "l8_g3", word: "Sorge ausdrücken", meaning: "Bày tỏ sự lo lắng", rule: "Dùng để hỏi han hoặc thể hiện sự lo lắng. (Was ist los? / Ich habe Angst vor...)", example: "Was ist los? Ich habe Angst vor der Operation.", exampleTranslation: "Có chuyện gì vậy? Tôi sợ cuộc phẫu thuật." },
      { id: "l8_g4", word: "Mitleid ausdrücken", meaning: "Bày tỏ sự cảm thông", rule: "Dùng để chia sẻ, đồng cảm với nỗi đau hay sự không may của ai đó. (Das finde ich traurig. / Das tut mir leid.)", example: "Oh, das tut mir wirklich sehr leid.", exampleTranslation: "Oh, tôi thực sự rất lấy làm tiếc." },
      { id: "l8_g5", word: "Hoffnung ausdrücken", meaning: "Bày tỏ sự hy vọng", rule: "Dùng để thể hiện mong muốn điều tốt đẹp. (Hoffentlich... / Ich hoffe...)", example: "Hoffentlich hast du nichts Schlimmes!", exampleTranslation: "Hy vọng bạn không có gì nghiêm trọng!" }
    ]
  },

  {
    id: "l9",
    title: "Lektion 9",
    subtitle: "Bei guten Autos sind wir ganz vorn",
    items: [
      { id: "l9_v1", word: "die Produktion, -en", meaning: "sự sản xuất", example: "Die Produktion in Vietnam steigt.", exampleTranslation: "Sự sản xuất ở Việt Nam đang tăng." },
      { id: "l9_v2", word: "das Werk, -e", meaning: "nhà máy", example: "Das ist ein großes Werk von Audi.", exampleTranslation: "Đó là một nhà máy lớn của Audi." },
      { id: "l9_v3", word: "das Lager, -", meaning: "nhà kho", example: "Wir haben viele Teile im Lager.", exampleTranslation: "Chúng tôi có nhiều phụ tùng trong kho." },
      { id: "l9_v4", word: "die Maschine, -n", meaning: "máy móc", example: "Diese Maschine ist sehr modern.", exampleTranslation: "Cỗ máy này rất hiện đại." },
      { id: "l9_v5", word: "der Lkw, -s (der Lastkraftwagen)", meaning: "xe tải", example: "Der Lkw transportiert die Waren.", exampleTranslation: "Xe tải vận chuyển hàng hóa." },
      { id: "l9_v6", word: "der Wagen, -", meaning: "xe ô tô", example: "Der Wagen ist sehr teuer.", exampleTranslation: "Chiếc xe này rất đắt." },
      { id: "l9_v7", word: "der Arbeiter, -", meaning: "công nhân", example: "Die Arbeiter arbeiten am Fließband.", exampleTranslation: "Các công nhân làm việc ở dây chuyền." },
      { id: "l9_v8", word: "die Halle, -n", meaning: "xưởng, hội trường", example: "In der Halle stehen viele Autos.", exampleTranslation: "Trong xưởng có rất nhiều ô tô." },
      { id: "l9_v9", word: "der Export, -e", meaning: "sự xuất khẩu", example: "Der Export von Autos ist wichtig für Deutschland.", exampleTranslation: "Việc xuất khẩu ô tô rất quan trọng đối với nước Đức." },
      { id: "l9_v10", word: "der Import, -e", meaning: "sự nhập khẩu", example: "Der Import aus China steigt.", exampleTranslation: "Việc nhập khẩu từ Trung Quốc đang tăng." },
      { id: "l9_v11", word: "der Lohn, ⸚e", meaning: "tiền lương", example: "Die Arbeiter fordern mehr Lohn.", exampleTranslation: "Các công nhân đòi tăng lương." },
      { id: "l9_v12", word: "das Prozent, -e", meaning: "phần trăm", example: "Das sind fünfzig Prozent.", exampleTranslation: "Đó là 50 phần trăm." },
      { id: "l9_v13", word: "der Betrieb, -e", meaning: "doanh nghiệp, công ty", example: "Er arbeitet in einem großen Betrieb.", exampleTranslation: "Anh ấy làm việc trong một doanh nghiệp lớn." },
      { id: "l9_v14", word: "die Wirtschaft", meaning: "kinh tế", example: "Die Wirtschaft wächst in diesem Jahr.", exampleTranslation: "Nền kinh tế đang tăng trưởng trong năm nay." },
      { id: "l9_v15", word: "der / die Angestellte, -n", meaning: "nhân viên", example: "Ich bin Angestellter in einer Computerfirma.", exampleTranslation: "Tôi là nhân viên trong một công ty máy tính." },
      { id: "l9_v16", word: "der Erfolg, -e", meaning: "thành công", example: "Das neue Auto ist ein großer Erfolg.", exampleTranslation: "Chiếc ô tô mới là một sự thành công lớn." },
      { id: "l9_v17", word: "die Bedingung, -en (Arbeitsbedingungen)", meaning: "điều kiện (điều kiện làm việc)", example: "Die Arbeitsbedingungen sind wirklich gut.", exampleTranslation: "Các điều kiện làm việc thực sự rất tốt." },
      { id: "l9_v18", word: "das Jahrzehnt, -e", meaning: "thập kỷ", example: "In den vergangenen Jahrzehnten hat sich viel geändert.", exampleTranslation: "Trong những thập kỷ qua có rất nhiều thứ đã thay đổi." },
      { id: "l9_v19", word: "die Reparatur, -en", meaning: "sự sửa chữa", example: "Die Reparatur des Autos dauert zwei Tage.", exampleTranslation: "Sự sửa chữa chiếc xe mất hai ngày." },
      { id: "l9_v20", word: "das Fließband, ⸚er", meaning: "băng chuyền, dây chuyền sản xuất", example: "Er arbeitet seit 40 Jahren am Fließband.", exampleTranslation: "Ông ấy đã làm việc ở dây chuyền suốt 40 năm." },
      { id: "l9_v21", word: "produzieren, hat produziert", meaning: "sản xuất", example: "Die Firma produziert LKWs.", exampleTranslation: "Công ty sản xuất xe tải." },
      { id: "l9_v22", word: "sparen, hat gespart", meaning: "tiết kiệm", example: "Wir müssen Geld sparen.", exampleTranslation: "Chúng tôi phải tiết kiệm tiền." },
      { id: "l9_v23", word: "steigen, ist gestiegen", meaning: "tăng lên", example: "Die Preise steigen jedes Jahr.", exampleTranslation: "Vật giá tăng lên mỗi năm." },
      { id: "l9_v24", word: "sinken, ist gesunken", meaning: "giảm xuống", example: "Die Produktion ist gesunken.", exampleTranslation: "Sản lượng đã giảm xuống." },
      { id: "l9_v25", word: "erklären, hat erklärt", meaning: "giải thích", example: "Der Lehrer erklärt die Grammatik.", exampleTranslation: "Thầy giáo giải thích ngữ pháp." },
      { id: "l9_v26", word: "selbstständig", meaning: "độc lập, tự kinh doanh", example: "Ich bin selbstständig und habe keinen Chef.", exampleTranslation: "Tôi tự kinh doanh và không có sếp." },
      { id: "l9_v27", word: "international", meaning: "quốc tế", example: "Wir sind eine internationale Firma.", exampleTranslation: "Chúng tôi là một công ty quốc tế." },
      { id: "l9_v28", word: "dringend", meaning: "khẩn cấp", example: "Wir suchen dringend neue Mitarbeiter.", exampleTranslation: "Chúng tôi đang tìm kiếm nhân viên mới một cách khẩn trương." }
    ],
    grammar: [
      { id: "l9_g1", word: "Komparativ (So sánh hơn)", meaning: "So sánh hơn của tính từ", rule: "Tính từ + er + als. Ví dụ: schnell -> schneller, billig -> billiger. Một số tính từ có Umlaut: alt -> älter, groß -> größer, hoch -> höher. So sánh bất quy tắc: gut -> besser, viel -> mehr, gern -> lieber.", example: "Ein BMW ist schneller als ein Toyota.", exampleTranslation: "Một chiếc BMW nhanh hơn một chiếc Toyota." },
      { id: "l9_g2", word: "Superlativ (So sánh nhất)", meaning: "So sánh nhất của tính từ", rule: "am + tính từ + sten. Ví dụ: am schnellsten, am billigsten. Các tính từ có âm cuối -d, -t, -s, -z, -sch,... thêm '-esten': am neuesten. Có Umlaut: am ältesten, am größten. Bất quy tắc: gut -> am besten, viel -> am meisten, gern -> am liebsten, hoch -> am höchsten.", example: "Mein Auto ist am schnellsten.", exampleTranslation: "Xe của tôi là nhanh nhất." },
      { id: "l9_g3", word: "Adjektivdeklination mit Nullartikel (Nominativ / Akkusativ)", meaning: "Chia đuôi tính từ không có mạo từ", rule: "Chia đuôi tính từ khi không có mạo từ (Nullartikel) mang đuôi của mạo từ xác định. Nominativ: guter Lohn (der), großes Lager (das), flexible Zeit (die), kleine Büros (Pl.). Akkusativ: guten Lohn, großes Lager, flexible Zeit, kleine Büros.", example: "Wir bieten flexiblen Urlaub und guten Lohn.", exampleTranslation: "Chúng tôi mang lại kỳ nghỉ linh hoạt và lương thưởng tốt." },
      { id: "l9_g4", word: "Wichtigkeit ausdrücken", meaning: "Diễn tả sự quan trọng", rule: "Mẫu câu: Ist dir das wichtig? / Ja, das ist mir sehr wichtig. / Das ist mir nicht so wichtig. Dùng Đại từ Dativ (mir, dir, ihm, ihr, uns, euch, ihnen) để thể hiện sự quan trọng đối với ai đó.", example: "Ein guter Lohn ist mir sehr wichtig.", exampleTranslation: "Mức lương tốt là rất quan trọng đối với tôi." }
    ]
  },
  {
    id: "l10",
    title: "Lektion 10",
    subtitle: "Gut, dass du reserviert hast",
    items: [
      { id: "l10_v1", word: "das Besteck, -e", meaning: "dao dĩa (chung)", example: "Das Besteck liegt auf dem Tisch.", exampleTranslation: "Dao dĩa đặt trên bàn." },
      { id: "l10_v2", word: "die Gabel, -n", meaning: "cái dĩa", example: "Die Gabel ist nicht sauber.", exampleTranslation: "Cái dĩa không sạch." },
      { id: "l10_v3", word: "das Glas, ⸚er", meaning: "cái ly", example: "Bringen Sie mir bitte ein Glas Wasser.", exampleTranslation: "Làm ơn mang cho tôi một ly nước." },
      { id: "l10_v4", word: "die Kanne, -n", meaning: "cái bình", example: "Ich hätte gern eine Kanne Tee.", exampleTranslation: "Tôi muốn một bình trà." },
      { id: "l10_v5", word: "der Löffel, -", meaning: "cái thìa", example: "Mir fehlt ein Löffel für die Suppe.", exampleTranslation: "Tôi thiếu một cái thìa để ăn súp." },
      { id: "l10_v6", word: "das Lokal, -e", meaning: "quán ăn, nhà hàng", example: "Das Lokal am Marktplatz ist sehr beliebt.", exampleTranslation: "Quán ăn ở quảng trường rất được yêu thích." },
      { id: "l10_v7", word: "das Messer, -", meaning: "con dao", example: "Könnte ich ein anderes Messer bekommen?", exampleTranslation: "Tôi có thể lấy một con dao khác được không?" },
      { id: "l10_v8", word: "die Rechnung, -en", meaning: "hóa đơn", example: "Die Rechnung, bitte!", exampleTranslation: "Làm ơn thanh toán!" },
      { id: "l10_v9", word: "die Tasse, -n", meaning: "tách, cốc", example: "Möchtest du eine Tasse Kaffee?", exampleTranslation: "Bạn có muốn một tách cà phê không?" },
      { id: "l10_v10", word: "der Teller, -", meaning: "cái đĩa", example: "Die Teller sind sehr schön.", exampleTranslation: "Những cái đĩa này rất đẹp." },
      { id: "l10_v11", word: "reservieren, hat reserviert", meaning: "đặt chỗ", example: "Gut, dass du einen Tisch reserviert hast.", exampleTranslation: "Thật tốt vì bạn đã đặt bàn." },
      { id: "l10_v12", word: "stimmen, stimmt so", meaning: "đúng vậy / cứ giữ lại tiền thừa nhé", example: "Hier bitte, stimmt so.", exampleTranslation: "Đây ạ, tiền thừa cứ giữ lại nhé." },
      { id: "l10_v13", word: "zusammen <-> getrennt", meaning: "cùng nhau <-> riêng (tính tiền)", example: "Zahlen Sie zusammen oder getrennt?", exampleTranslation: "Quý khách thanh toán chung hay riêng?" },
      { id: "l10_v14", word: "der Augenblick / der Moment", meaning: "một chốc, một lát", example: "Einen Augenblick, bitte.", exampleTranslation: "Xin chờ một lát." },
      { id: "l10_v15", word: "verzeihen (Sie)", meaning: "xin lỗi, tha lỗi", example: "Verzeihen Sie, aber die Suppe ist kalt.", exampleTranslation: "Xin lỗi, nhưng súp bị lạnh." },
      { id: "l10_v16", word: "der Essig", meaning: "giấm", example: "Der Salat braucht mehr Essig.", exampleTranslation: "Salad cần thêm giấm." },
      { id: "l10_v17", word: "das Hähnchen, -", meaning: "thịt gà", example: "Ich nehme das Hähnchen mit Pommes.", exampleTranslation: "Tôi lấy phần gà với khoai tây chiên." },
      { id: "l10_v18", word: "das Öl, -e", meaning: "dầu ăn", example: "Könnten Sie mir Essig und Öl bringen?", exampleTranslation: "Bạn có thể mang cho tôi giấm và dầu không?" },
      { id: "l10_v19", word: "die Pommes frites", meaning: "khoai tây chiên", example: "Die Kinder essen gern Pommes.", exampleTranslation: "Trẻ em thích ăn khoai tây chiên." },
      { id: "l10_v20", word: "das Salz", meaning: "muối", example: "Die Kartoffeln haben zu viel Salz.", exampleTranslation: "Khoai tây có quá nhiều muối." },
      { id: "l10_v21", word: "die Soße, -n", meaning: "nước sốt", example: "Ist die Soße scharf?", exampleTranslation: "Nước sốt có cay không?" },
      { id: "l10_v22", word: "das Schnitzel, -", meaning: "thịt tẩm bột chiên", example: "Ein Schnitzel Wiener Art, bitte.", exampleTranslation: "Cho tôi một phần Schnitzel kiểu Vienna." },
      { id: "l10_v23", word: "das Steak, -s", meaning: "bít tết", example: "Ich möchte das Steak medium.", exampleTranslation: "Tôi muốn bít tết chín vừa." },
      { id: "l10_v24", word: "der Zucker", meaning: "đường", example: "Ich trinke Kaffee ohne Zucker.", exampleTranslation: "Tôi uống cà phê không đường." },
      { id: "l10_v25", word: "reagieren, hat reagiert", meaning: "phản ứng", example: "Wie hat der Kellner reagiert?", exampleTranslation: "Bồi bàn đã phản ứng thế nào?" },
      { id: "l10_v26", word: "wenigstens", meaning: "ít nhất là", example: "Du hast wenigstens noch Wasser.", exampleTranslation: "Ít nhất là bạn vẫn còn nước." },
      { id: "l10_v27", word: "sondern", meaning: "mà là", example: "Das ist kein Rindfleisch, sondern Schweinefleisch.", exampleTranslation: "Đó không phải thịt bò, mà là thịt lợn." }
    ],
    grammar: [
      { id: "l10_g1", word: "dass-Sätze (Mệnh đề phụ với dass)", meaning: "Câu phụ bắt đầu bằng dass (rằng)", rule: "Mệnh đề phụ bắt đầu bằng 'dass' (rằng) dùng để bổ sung ý nghĩa cho mệnh đề chính. Động từ được chia trong mệnh đề 'dass' PHẢI ĐỨNG Ở CUỐI CÂU.", example: "Ich finde, dass das Restaurant toll ist. / Es ist gut, dass du reserviert hast.", exampleTranslation: "Tôi thấy rằng nhà hàng rất tuyệt. / Thật tốt là bạn đã đặt bàn." },
      { id: "l10_g2", word: "Ausdrücke vor dass-Sätzen", meaning: "Các cụm từ thường đứng trước mệnh đề dass", rule: "Thường đứng sau các động từ/cụm từ bày tỏ ý kiến, cảm xúc hoặc suy nghĩ: Ich finde/glaube/denke/hoffe/weiß, dass... hoặc các cấu trúc như Gut/Schön/Schade, dass... / Kann es sein, dass...?", example: "Ich hoffe, dass das Essen bald kommt.", exampleTranslation: "Tôi hi vọng rằng đồ ăn sẽ đến sớm." },
      { id: "l10_g3", word: "Reklamieren im Restaurant", meaning: "Mẫu câu phàn nàn trong nhà hàng", rule: "Dùng để báo cáo sự cố lịch sự: Verzeihen Sie, aber die Suppe ist kalt. / Das Messer ist nicht sauber. / Die Kartoffeln waren versalzen. Phản hồi của phục vụ: Oh, das tut mir leid. Ich bringe sofort ein anderes/eine neue (Món thay thế).", example: "Entschuldigung, die Gabel ist nicht sauber. - Oh, das tut mir leid.", exampleTranslation: "Xin lỗi, cái dĩa không được sạch. - Ồ, tôi rất xin lỗi." }
    ]
  },
  {
    id: "l11",
    title: "Lektion 11",
    subtitle: "Ich freue mich so.",
    items: [
      { id: "l11_v1", word: "der Kunde, -n / die Kundin, -nen", meaning: "khách hàng", example: "Der Kunde beschwert sich über den Service.", exampleTranslation: "Khách hàng phàn nàn về dịch vụ." },
      { id: "l11_v2", word: "die Notiz, -en", meaning: "ghi chú", example: "Ich mache mir eine Notiz.", exampleTranslation: "Tôi tạo một ghi chú." },
      { id: "l11_v3", word: "der Notizblock, ⸚e", meaning: "cuốn sổ ghi chú", example: "Er schreibt auf den Notizblock.", exampleTranslation: "Anh ấy viết vào cuốn sổ ghi chú." },
      { id: "l11_v4", word: "die Werkstatt, ⸚en", meaning: "xưởng, phân xưởng", example: "Mein Auto ist in der Werkstatt.", exampleTranslation: "Xe của tôi đang ở trong xưởng." },
      { id: "l11_v5", word: "herstellen, hat hergestellt", meaning: "sản xuất, chế tạo", example: "Wir stellen Taschen her.", exampleTranslation: "Chúng tôi sản xuất túi xách." },
      { id: "l11_v6", word: "organisieren, hat organisiert", meaning: "tổ chức", example: "Sie organisiert ein Fest.", exampleTranslation: "Cô ấy tổ chức một bữa tiệc." },
      { id: "l11_v7", word: "verwenden, hat verwendet", meaning: "sử dụng", example: "Wir verwenden nur alte Materialien.", exampleTranslation: "Chúng tôi chỉ sử dụng các vật liệu cũ." },
      { id: "l11_v8", word: "der Briefumschlag, ⸚e", meaning: "phong bì", example: "Ich brauche einen Briefumschlag für den Brief.", exampleTranslation: "Tôi cần một chiếc phong bì cho lá thư." },
      { id: "l11_v9", word: "die Handtasche, -n", meaning: "túi xách tay", example: "Sie hat eine neue Handtasche.", exampleTranslation: "Cô ấy có một cái túi xách tay mới." },
      { id: "l11_v10", word: "wegwerfen, hat weggeworfen", meaning: "vứt bỏ", example: "Man soll alte Sachen nicht wegwerfen.", exampleTranslation: "Người ta không nên vứt bỏ đồ cũ." },
      { id: "l11_v11", word: "viel Erfolg", meaning: "chúc nhiều thành công", example: "Ich wünsche dir viel Erfolg!", exampleTranslation: "Tôi chúc bạn nhiều thành công!" },
      { id: "l11_v12", word: "viel Glück", meaning: "chúc nhiều may mắn", example: "Wir wünschen Ihnen viel Glück für die Zukunft.", exampleTranslation: "Chúng tôi chúc ngài nhiều may mắn cho tương lai." },
      { id: "l11_v13", word: "sich bedanken (bei D. / für A.)", meaning: "cảm ơn", example: "Ich bedanke mich für Ihre Hilfe.", exampleTranslation: "Tôi cảm ơn vì sự giúp đỡ của ngài." },
      { id: "l11_v14", word: "wünschen, hat gewünscht", meaning: "mong ước, chúc", example: "Wir wünschen Ihnen alles Gute.", exampleTranslation: "Chúng tôi chúc ngài mọi điều tốt đẹp." },
      { id: "l11_v15", word: "der Artikel, -", meaning: "bài báo, điều khoản", example: "Hast du den Artikel gelesen?", exampleTranslation: "Bạn đã đọc bài báo chưa?" },
      { id: "l11_v16", word: "der Erwachsene, -n", meaning: "người lớn", example: "Das Spiel ist für Erwachsene.", exampleTranslation: "Trò chơi này dành cho người lớn." },
      { id: "l11_v17", word: "der Grund, ⸚e", meaning: "lý do, nguyên nhân", example: "Was ist der Grund für deinen Ärger?", exampleTranslation: "Nguyên nhân khiến bạn tức giận là gì?" },
      { id: "l11_v18", word: "die Meinung, -en", meaning: "ý kiến", example: "Was ist deine Meinung dazu?", exampleTranslation: "Ý kiến của bạn về việc này là gì?" },
      { id: "l11_v19", word: "meiner Meinung nach", meaning: "theo ý kiến của tôi", example: "Meiner Meinung nach ist das eine gute Idee.", exampleTranslation: "Theo ý kiến của tôi thì đó là một ý tưởng hay." },
      { id: "l11_v20", word: "der Schmuck", meaning: "đồ trang sức", example: "Sie trägt gern Schmuck.", exampleTranslation: "Cô ấy thích đeo đồ trang sức." },
      { id: "l11_v21", word: "der Stoff, -e", meaning: "chất liệu, vải", example: "Der Stoff ist sehr weich.", exampleTranslation: "Vải này rất mềm." },
      { id: "l11_v22", word: "sich erinnern (an A.)", meaning: "nhớ về, nhớ đến", example: "Erinnerst du dich an unseren Urlaub?", exampleTranslation: "Bạn có nhớ về kỳ nghỉ của chúng ta không?" },
      { id: "l11_v23", word: "sich fühlen", meaning: "cảm thấy", example: "Ich fühle mich heute nicht gut.", exampleTranslation: "Hôm nay tôi cảm thấy không khỏe." },
      { id: "l11_v24", word: "sich streiten", meaning: "cãi nhau", example: "Die Kinder streiten sich oft.", exampleTranslation: "Bọn trẻ thường cãi nhau." },
      { id: "l11_v25", word: "sich unterhalten (über A.)", meaning: "trò chuyện", example: "Wir unterhalten uns über das Buch.", exampleTranslation: "Chúng tôi trò chuyện về cuốn sách." },
      { id: "l11_v26", word: "verlieren, hat verloren", meaning: "đánh mất, thua", example: "Ich habe meinen Schlüssel verloren.", exampleTranslation: "Tôi đã làm mất chìa khóa." },
      { id: "l11_v27", word: "froh (sein)", meaning: "vui mừng", example: "Ich bin froh, dass du hier bist.", exampleTranslation: "Tôi rất vui vì bạn ở đây." },
      { id: "l11_v28", word: "jung", meaning: "trẻ", example: "Sie ist noch sehr jung.", exampleTranslation: "Cô ấy vẫn còn rất trẻ." },
      { id: "l11_v29", word: "schrecklich", meaning: "kinh khủng, khủng khiếp", example: "Ich finde das Wetter schrecklich.", exampleTranslation: "Tôi thấy thời tiết thật kinh khủng." },
      { id: "l11_v30", word: "stark", meaning: "mạnh mẽ", example: "Er ist sehr stark.", exampleTranslation: "Anh ấy rất mạnh mẽ." },
      { id: "l11_v31", word: "willkommen", meaning: "chào mừng, hoan nghênh", example: "Herzlich willkommen in Berlin!", exampleTranslation: "Nhiệt liệt chào mừng tới Berlin!" },
      { id: "l11_v32", word: "sich freuen (auf/über A.)", meaning: "vui mừng (về)", example: "Ich freue mich auf das Wochenende.", exampleTranslation: "Tôi rất mong chờ đến cuối tuần." },
      { id: "l11_v33", word: "sich ärgern (über A.)", meaning: "tức giận (về)", example: "Er ärgert sich über die Fehler.", exampleTranslation: "Anh ấy tức giận về những lỗi sai." },
      { id: "l11_v34", word: "sich beschweren (über A.)", meaning: "phàn nàn (về)", example: "Wir beschweren uns über den Lärm.", exampleTranslation: "Chúng tôi phàn nàn về tiếng ồn." },
      { id: "l11_v35", word: "gratulieren (D.)", meaning: "chúc mừng (ai đó)", example: "Ich gratuliere dir zum Geburtstag.", exampleTranslation: "Tôi chúc mừng sinh nhật bạn." }
    ],
    grammar: [
      { id: "l11_g1", word: "Reflexive Verben (Động từ phản thân)", meaning: "Cách sử dụng động từ đi cùng đại từ phản thân (Reflexivpronomen)", rule: "Nhiều động từ trong tiếng Đức luôn đi kèm với đại từ phản thân. Đại từ phản thân ở cách Akkusativ: ich -> mich, du -> dich, er/es/sie -> sich, wir -> uns, ihr -> euch, sie/Sie -> sich.", example: "Ich fühle mich prima. - Freut ihr euch auf das Wochenende?", exampleTranslation: "Tôi cảm thấy tuyệt vời. - Các bạn có mong chờ đến cuối tuần không?" },
      { id: "l11_g2", word: "Etwas bewerten (Đánh giá điều gì đó)", meaning: "Các mẫu câu dùng để nhận xét hoặc đưa ra ý kiến đánh giá", rule: "Để nói lên quan điểm cá nhân, ta thường dùng các câu chứa 'dass': Ich finde es traurig/schön/schrecklich, dass... ; Ich bin froh/denke/glaube, dass... ; Meiner Meinung nach ist es sehr gut, dass...", example: "Ich finde es traurig, dass man so viel wegwirft.", exampleTranslation: "Tôi thấy thật buồn khi người ta vứt bỏ quá nhiều." },
      { id: "l11_g3", word: "Gratulieren und sich bedanken", meaning: "Mẫu câu dùng để chúc mừng và cảm ơn", rule: "Mẫu câu chúc mừng: Herzlichen Glückwunsch zum Jubiläum! / Alles Gute zum Jubiläum! / Viel Glück! / Wir wünschen Ihnen ... / Wir gratulieren Ihnen / dir. Cảm ơn: Wir danken Ihnen für ... / Wir bedanken uns für ...", example: "Herzlichen Glückwunsch zum zehnjährigen Jubiläum!", exampleTranslation: "Chúc mừng sinh nhật 10 năm thành lập!" }
    ]
  },
  {
    id: "l12",
    title: "Lektion 12",
    subtitle: "Liebe geht durch den Magen",
    items: [
      { id: "l12_v1", word: "der Alkohol", meaning: "rượu, cồn", example: "Trinken Sie Alkohol?", exampleTranslation: "Bạn có uống rượu không?" },
      { id: "l12_v2", word: "das Gericht, -e", meaning: "món ăn", example: "Das ist mein Lieblingsgericht.", exampleTranslation: "Đó là món ăn yêu thích của tôi." },
      { id: "l12_v3", word: "das Getreide", meaning: "ngũ cốc", example: "Brot wird aus Getreide gemacht.", exampleTranslation: "Bánh mì được làm từ ngũ cốc." },
      { id: "l12_v4", word: "das Huhn, ⸚er / das Hühnerfleisch", meaning: "con gà / thịt gà", example: "Wir essen heute Hühnerfleisch.", exampleTranslation: "Hôm nay chúng tôi ăn thịt gà." },
      { id: "l12_v5", word: "das Lebensmittel, -", meaning: "thực phẩm", example: "Wir kaufen frische Lebensmittel.", exampleTranslation: "Chúng tôi mua thực phẩm tươi." },
      { id: "l12_v6", word: "die Limonade, -n", meaning: "nước ngọt, nước chanh", example: "Die Kinder trinken Limonade.", exampleTranslation: "Bọn trẻ uống nước ngọt." },
      { id: "l12_v7", word: "das Mineralwasser", meaning: "nước khoáng", example: "Ein Glas Mineralwasser, bitte.", exampleTranslation: "Cho một ly nước khoáng." },
      { id: "l12_v8", word: "das Rind, -er / das Rindfleisch", meaning: "con bò / thịt bò", example: "Ich esse lieber Rindfleisch als Schweinefleisch.", exampleTranslation: "Tôi thích ăn thịt bò hơn thịt lợn." },
      { id: "l12_v9", word: "das Schwein, -e / das Schweinefleisch", meaning: "con lợn / thịt lợn", example: "In Deutschland isst man viel Schweinefleisch.", exampleTranslation: "Ở Đức người ta ăn nhiều thịt lợn." },
      { id: "l12_v10", word: "braten, hat gebraten", meaning: "chiên, rán, nướng", example: "Ich brate das Fleisch in der Pfanne.", exampleTranslation: "Tôi chiên thịt trong chảo." },
      { id: "l12_v11", word: "scharf", meaning: "cay", example: "Das Gericht ist sehr scharf.", exampleTranslation: "Món ăn này rất cay." },
      { id: "l12_v12", word: "vegetarisch", meaning: "ăn chay", example: "Er isst nur vegetarisch.", exampleTranslation: "Anh ấy chỉ ăn đồ chay." },
      { id: "l12_v13", word: "die Hälfte, -n", meaning: "một nửa", example: "Die Hälfte der Deutschen isst oft Obst.", exampleTranslation: "Một nửa người Đức thường xuyên ăn trái cây." },
      { id: "l12_v14", word: "doppelt (so viele)", meaning: "gấp đôi", example: "Männer essen doppelt so viel Fleisch wie Frauen.", exampleTranslation: "Nam giới ăn thịt nhiều gấp đôi nữ giới." },
      { id: "l12_v15", word: "durchschnittlich", meaning: "trung bình", example: "Durchschnittlich trinken wir viel Wasser.", exampleTranslation: "Trung bình chúng tôi uống nhiều nước." },
      { id: "l12_v16", word: "genug", meaning: "đủ", example: "Wir haben genug Essen.", exampleTranslation: "Chúng ta có đủ thức ăn." },
      { id: "l12_v17", word: "häufig", meaning: "thường xuyên", example: "Er geht häufig ins Restaurant.", exampleTranslation: "Anh ấy thường xuyên đi nhà hàng." },
      { id: "l12_v18", word: "kaum", meaning: "hầu như không", example: "Ich esse kaum Fleisch.", exampleTranslation: "Tôi hầu như không ăn thịt." },
      { id: "l12_v19", word: "rund", meaning: "khoảng chừng", example: "Rund 30 Prozent essen gern Pizza.", exampleTranslation: "Khoảng 30 phần trăm thích ăn pizza." },
      { id: "l12_v20", word: "der / die Deutsche, -n", meaning: "người Đức", example: "Viele Deutsche trinken Kaffee.", exampleTranslation: "Nhiều người Đức uống cà phê." },
      { id: "l12_v21", word: "die Heimat", meaning: "quê hương", example: "In meiner Heimat kocht man anders.", exampleTranslation: "Ở quê tôi người ta nấu ăn khác." },
      { id: "l12_v22", word: "die Zeitschrift, -en", meaning: "tạp chí", example: "Ich lese eine Zeitschrift über Essen.", exampleTranslation: "Tôi đọc một tạp chí về đồ ăn." },
      { id: "l12_v23", word: "ansehen, hat angesehen", meaning: "nhìn, xem", example: "Wir sehen uns das Menü an.", exampleTranslation: "Chúng tôi xem thực đơn." },
      { id: "l12_v24", word: "aussuchen, hat ausgesucht", meaning: "chọn lựa", example: "Hast du dir ein Gericht ausgesucht?", exampleTranslation: "Bạn đã chọn được món ăn chưa?" },
      { id: "l12_v25", word: "holen, hat geholt", meaning: "lấy, mang về", example: "Ich hole eine Pizza.", exampleTranslation: "Tôi đi lấy một chiếc pizza." },
      { id: "l12_v26", word: "überraschen, hat überrascht", meaning: "làm ngạc nhiên", example: "Das hat mich sehr überrascht.", exampleTranslation: "Điều đó đã làm tôi rất ngạc nhiên." },
      { id: "l12_v27", word: "verbrauchen, hat verbraucht", meaning: "tiêu thụ", example: "Wir verbrauchen viel Strom.", exampleTranslation: "Chúng tôi tiêu thụ nhiều điện." },
      { id: "l12_v28", word: "sich vorbereiten, hat sich vorbereitet", meaning: "chuẩn bị", example: "Er bereitet sich auf die Prüfung vor.", exampleTranslation: "Anh ấy chuẩn bị cho kỳ thi." },
      { id: "l12_v29", word: "sich wundern, hat sich gewundert", meaning: "ngạc nhiên", example: "Es wundert mich, dass es so billig ist.", exampleTranslation: "Tôi ngạc nhiên là nó rẻ đến vậy." },
      { id: "l12_v30", word: "preiswert", meaning: "phải chăng, giá hợp lý", example: "Das Essen hier ist sehr preiswert.", exampleTranslation: "Thức ăn ở đây giá rất hợp lý." },
      { id: "l12_v31", word: "wahrscheinlich", meaning: "có lẽ, có khả năng", example: "Wahrscheinlich gehen wir heute essen.", exampleTranslation: "Có lẽ hôm nay chúng tôi đi ăn nhà hàng." },
      { id: "l12_v32", word: "komisch", meaning: "kỳ lạ, buồn cười", example: "Das finde ich komisch.", exampleTranslation: "Tôi thấy điều đó thật kỳ lạ." },
      { id: "l12_v33", word: "wenn - dann", meaning: "nếu - thì", example: "Wenn es regnet, dann bleiben wir zu Hause.", exampleTranslation: "Nếu trời mưa, thì chúng tôi ở nhà." }
    ],
    grammar: [
      { id: "l12_g1", word: "Konjunktion: wenn", meaning: "Liên từ: wenn (nếu, khi)", rule: "Mệnh đề với 'wenn' là mệnh đề phụ (Nebensatz), động từ đã chia phải đứng ở cuối câu. Nếu mệnh đề 'wenn' đứng trước mệnh đề chính (Hauptsatz), thì động từ của mệnh đề chính phải đứng ở vị trí đầu của mệnh đề chính (ngay sau dấu phẩy).", example: "Wenn es warm ist, essen wir meist Salat. / Wir essen meist Salat, wenn es warm ist.", exampleTranslation: "Khi trời ấm, chúng tôi thường ăn salad. / Chúng tôi thường ăn salad khi trời ấm." },
      { id: "l12_g2", word: "Überraschung ausdrücken", meaning: "Cách diễn đạt sự ngạc nhiên", rule: "Để diễn đạt sự ngạc nhiên, có thể dùng các mẫu câu với 'dass' (rằng).", example: "Es überrascht mich, dass... / Es wundert mich, dass... / Ich finde es komisch, dass...", exampleTranslation: "Tôi ngạc nhiên rằng... / Tôi lấy làm lạ rằng... / Tôi thấy kỳ lạ khi..." },
      { id: "l12_g3", word: "Etwas vergleichen", meaning: "So sánh các thói quen/văn hóa", rule: "Dùng để so sánh thói quen giữa quê hương và nước Đức.", example: "Bei uns / In meiner Heimat ist das auch so. / ... ist das anders.", exampleTranslation: "Ở chỗ chúng tôi / Ở quê tôi cũng như vậy. / ... thì khác." }
    ]
  },
  {
    id: "l13",
    title: "Lektion 13",
    subtitle: "Meine erste Deutschlehrerin",
    items: [
      { id: "l13_v1", word: "die Aufgabe, -n", meaning: "bài tập", example: "Wir lösen die Grammatikaufgaben.", exampleTranslation: "Chúng tôi giải các bài tập ngữ pháp." },
      { id: "l13_v2", word: "das Goethe-Institut, -e", meaning: "Viện Goethe", example: "Ich lerne Deutsch am Goethe-Institut.", exampleTranslation: "Tôi học tiếng Đức ở viện Goethe." },
      { id: "l13_v3", word: "die Klasse, -n", meaning: "lớp học", example: "In meiner Klasse gibt es viele Studenten.", exampleTranslation: "Trong lớp tôi có nhiều sinh viên." },
      { id: "l13_v4", word: "die Nachrichten (Pl.)", meaning: "tin tức", example: "Ich höre jeden Tag die Nachrichten.", exampleTranslation: "Tôi nghe tin tức mỗi ngày." },
      { id: "l13_v5", word: "das Semester, -", meaning: "học kỳ", example: "Er ist im vierten Semester.", exampleTranslation: "Anh ấy đang học kỳ bốn." },
      { id: "l13_v6", word: "die Sprachenschule, -n", meaning: "trường ngoại ngữ", example: "Ich besuche eine Sprachenschule.", exampleTranslation: "Tôi đi học ở một trường ngoại ngữ." },
      { id: "l13_v7", word: "der Test, -s", meaning: "bài kiểm tra", example: "Der Test war sehr schwer.", exampleTranslation: "Bài kiểm tra rất khó." },
      { id: "l13_v8", word: "der Typ, -en", meaning: "kiểu, loại", example: "Welcher Lernertyp bist du?", exampleTranslation: "Bạn là kiểu người học nào?" },
      { id: "l13_v9", word: "die Volkshochschule, -n", meaning: "trung tâm giáo dục thường xuyên", example: "Sie macht einen Kurs an der Volkshochschule.", exampleTranslation: "Cô ấy học một khóa ở trung tâm giáo dục thường xuyên." },
      { id: "l13_v10", word: "anschauen (sich etwas), hat sich angeschaut", meaning: "ngắm, xem", example: "Wir schauen Filme an.", exampleTranslation: "Chúng tôi xem phim." },
      { id: "l13_v11", word: "aufschreiben, hat aufgeschrieben", meaning: "viết ra, ghi chép", example: "Er hat die Sätze aufgeschrieben.", exampleTranslation: "Anh ấy đã ghi chép các câu lại." },
      { id: "l13_v12", word: "bewegen (sich), hat sich bewegt", meaning: "chuyển động", example: "Man muss sich bewegen.", exampleTranslation: "Người ta phải chuyển động." },
      { id: "l13_v13", word: "korrigieren, hat korrigiert", meaning: "sửa lỗi", example: "Der Lehrer hat die Fehler korrigiert.", exampleTranslation: "Giáo viên đã sửa các lỗi." },
      { id: "l13_v14", word: "lösen, hat gelöst", meaning: "giải", example: "Ich kann die Aufgabe nicht lösen.", exampleTranslation: "Tôi không thể giải bài tập này." },
      { id: "l13_v15", word: "merken (sich etwas), hat sich gemerkt", meaning: "ghi nhớ", example: "Ich kann mir neue Wörter gut merken.", exampleTranslation: "Tôi có thể ghi nhớ từ mới rất tốt." },
      { id: "l13_v16", word: "übersetzen, hat übersetzt", meaning: "dịch", example: "Ich übersetze den Text.", exampleTranslation: "Tôi dịch văn bản." },
      { id: "l13_v17", word: "wiederholen, hat wiederholt", meaning: "lặp lại, ôn tập", example: "Wir müssen die Wörter oft wiederholen.", exampleTranslation: "Chúng tôi phải thường xuyên ôn tập lại từ vựng." },
      { id: "l13_v18", word: "die Gegenwart", meaning: "hiện tại", example: "In der Gegenwart ist alles anders.", exampleTranslation: "Ở hiện tại mọi thứ đều khác." },
      { id: "l13_v19", word: "die Vergangenheit", meaning: "quá khứ", example: "In der Vergangenheit habe ich viel gelernt.", exampleTranslation: "Trong quá khứ tôi đã học rất nhiều." },
      { id: "l13_v20", word: "planen, hat geplant", meaning: "lên kế hoạch", example: "Wir haben eine Reise geplant.", exampleTranslation: "Chúng tôi đã lên kế hoạch cho một chuyến đi." },
      { id: "l13_v21", word: "verlieben (sich), hat sich verliebt", meaning: "yêu", example: "Er hat sich in Marie verliebt.", exampleTranslation: "Anh ấy đã yêu Marie." },
      { id: "l13_v22", word: "verreisen, ist verreist", meaning: "đi du lịch", example: "Meine Oma ist verreist.", exampleTranslation: "Bà tôi đã đi du lịch." },
      { id: "l13_v23", word: "möglich", meaning: "có thể", example: "Das ist nicht möglich.", exampleTranslation: "Điều đó là không thể." },
      { id: "l13_v24", word: "so viel wie möglich", meaning: "nhiều nhất có thể", example: "Ich übe so viel wie möglich.", exampleTranslation: "Tôi luyện tập nhiều nhất có thể." },
      { id: "l13_v25", word: "am allerwichtigsten", meaning: "quan trọng nhất", example: "Am allerwichtigsten ist für mich Grammatik.", exampleTranslation: "Quan trọng nhất đối với tôi là ngữ pháp." },
      { id: "l13_v26", word: "laut", meaning: "to (âm thanh)", example: "Deutsch klingt laut.", exampleTranslation: "Tiếng Đức nghe to." },
      { id: "l13_v27", word: "leise", meaning: "nhỏ (âm thanh)", example: "Französisch klingt leise.", exampleTranslation: "Tiếng Pháp nghe nhỏ." },
      { id: "l13_v28", word: "weich", meaning: "mềm mại", example: "Die Sprache klingt weich.", exampleTranslation: "Ngôn ngữ nghe mềm mại." },
      { id: "l13_v29", word: "hart", meaning: "cứng", example: "Deutsch klingt manchmal hart.", exampleTranslation: "Đôi khi tiếng Đức nghe cứng." },
      { id: "l13_v30", word: "melodisch", meaning: "du dương", example: "Vietnamesisch klingt sehr melodisch.", exampleTranslation: "Tiếng Việt nghe rất du dương." }
    ],
    grammar: [
      { id: "l13_g1", word: "als (Liên từ cho quá khứ)", meaning: "khi, vào lúc (xảy ra 1 lần)", rule: "Dùng 'als' cho một sự kiện (hoặc một khoảng thời gian liên tục) xảy ra MỘT LẦN duy nhất trong quá khứ. Động từ trong câu phụ 'als' luôn nằm ở BẤU/CUỐI CÂU.", example: "Als ich im vierten Semester war, habe ich das Stipendium bekommen.", exampleTranslation: "Khi tôi học kỳ 4, tôi đã nhận được học bổng.", note: "Nếu đứng đầu câu, mệnh đề chính phía sau phải đảo ngữ (động từ đứng trước chủ ngữ)." },
      { id: "l13_g2", word: "wenn (Liên từ cho quá khứ lặp lại)", meaning: "khi (xảy ra nhiều lần)", rule: "Dùng 'wenn' cho những sự kiện xảy ra NHIỀU LẦN (thường xuyên, lặp đi lặp lại) trong quá khứ. Thường đi kèm với các từ như 'immer' hay 'oft'.", example: "Immer wenn Paul Marie getroffen hat, hat er mit ihr Deutsch gesprochen.", exampleTranslation: "Bất cứ khi nào Paul gặp Marie, anh ấy đều nói tiếng Đức với cô ấy.", note: "Sự phân biệt giữa 'als' và 'wenn' trong quá khứ là câu hỏi bài thi rất phổ biến." }
    ]
  },
  {
    id: "l14",
    title: "Lektion 14",
    subtitle: "Es werden fleißig Päckchen gepackt.",
    items: [
      { id: "l14_v1", word: "die Post", meaning: "bưu điện", example: "Ich muss noch zur Post gehen.", exampleTranslation: "Tôi còn phải đi đến bưu điện.", category: "Post" },
      { id: "l14_v2", word: "der Absender, -", meaning: "người gửi", example: "Hier steht leider kein Absender.", exampleTranslation: "Thật tiếc là ở đây không ghi người gửi.", category: "Post" },
      { id: "l14_v3", word: "der Empfänger, -", meaning: "người nhận", example: "Das Paket wird an den Empfänger geliefert.", exampleTranslation: "Kiện hàng được giao cho người nhận.", category: "Post" },
      { id: "l14_v4", word: "der Briefkasten, ⸚", meaning: "hòm thư", example: "Bitte wirf den Brief in den Briefkasten.", exampleTranslation: "Làm ơn bỏ bức thư vào hòm thư.", category: "Post" },
      { id: "l14_v5", word: "der Schalter, -", meaning: "quầy giao dịch", example: "Gehen Sie bitte zum Schalter 3.", exampleTranslation: "Vui lòng đến quầy số 3.", category: "Post" },
      { id: "l14_v6", word: "die Unterschrift, -en", meaning: "chữ ký", example: "Hier fehlt Ihre Unterschrift.", exampleTranslation: "Ở đây thiếu chữ ký của ngài.", category: "Post" },
      { id: "l14_v7", word: "das Päckchen, -", meaning: "gói hàng nhỏ", example: "Zuerst wird das Päckchen gepackt.", exampleTranslation: "Đầu tiên gói hàng nhỏ được đóng gói.", category: "Post" },
      { id: "l14_v8", word: "das Paket, -e", meaning: "bưu kiện", example: "Paula verschickt ein Paket.", exampleTranslation: "Paula gửi một bưu kiện.", category: "Post" },
      { id: "l14_v9", word: "einpacken, hat eingepackt", meaning: "đóng gói", example: "Geschenke werden in den Karton eingepackt.", exampleTranslation: "Những món quà được đóng gói vào thùng carton.", category: "Post" },
      { id: "l14_v10", word: "packen, hat gepackt", meaning: "đóng đồ", example: "Es werden fleißig Päckchen gepackt.", exampleTranslation: "Những gói hàng nhỏ đang được thu xếp đóng gói chăm chỉ.", category: "Post" },
      { id: "l14_v11", word: "transportieren, hat transportiert", meaning: "vận chuyển", example: "Die Pakete werden mit einem Lkw transportiert.", exampleTranslation: "Những kiện hàng được vận chuyển bằng xe tải.", category: "Post" },
      { id: "l14_v12", word: "unterschreiben, hat unterschrieben", meaning: "ký tên", example: "Man muss das Formular unterschreiben.", exampleTranslation: "Người ta phải ký vào biểu mẫu.", category: "Post" },
      { id: "l14_v13", word: "die Creme, -s", meaning: "kem bôi/dưỡng", example: "Die Gesichtscreme ist super.", exampleTranslation: "Kem dưỡng da mặt này rất tuyệt.", category: "Weitere Wörter" },
      { id: "l14_v14", word: "die Gebrauchsanweisung, -en", meaning: "hướng dẫn sử dụng", example: "Lesen Sie die Gebrauchsanweisung.", exampleTranslation: "Hãy đọc bản hướng dẫn sử dụng.", category: "Weitere Wörter" },
      { id: "l14_v15", word: "das Gesicht, -er", meaning: "khuôn mặt", example: "Sie hat ein schönes Gesicht.", exampleTranslation: "Cô ấy có một khuôn mặt đẹp.", category: "Weitere Wörter" },
      { id: "l14_v16", word: "der Junge, -n", meaning: "cậu bé", example: "Die Geschenke sind für einen Jungen.", exampleTranslation: "Những món quà dành cho một cậu bé.", category: "Weitere Wörter" },
      { id: "l14_v17", word: "das Mädchen, -", meaning: "cô bé", example: "Das Mädchen freut sich über das Geschenk.", exampleTranslation: "Cô bé vui mừng vì món quà.", category: "Weitere Wörter" },
      { id: "l14_v18", word: "das Projekt, -e", meaning: "dự án", example: "Das Projekt 'Weihnachten im Schuhkarton' ist toll.", exampleTranslation: "Dự án 'Giáng sinh trong hộp giày' rất tuyệt.", category: "Weitere Wörter" },
      { id: "l14_v19", word: "der Schritt, -e", meaning: "bước", example: "Schritt 1: Zuerst wird der Karton beklebt.", exampleTranslation: "Bước 1: Ban đầu hộp bìa cứng được dán giấy.", category: "Weitere Wörter" },
      { id: "l14_v20", word: "die Tafel, -n", meaning: "thanh, bảng", example: "Ich liebe 3 Tafeln Chili-Schokolade.", exampleTranslation: "Tôi thích 3 thanh sô-cô-la ớt.", category: "Weitere Wörter" },
      { id: "l14_v21", word: "der Zentimeter, -", meaning: "xen-ti-mét", example: "Der Schuhkarton sollte ca. 30 x 20 x 10 Zentimeter groß sein.", exampleTranslation: "Hộp giày nên có kích thước khoảng 30x20x10 xen-ti-mét.", category: "Weitere Wörter" },
      { id: "l14_v22", word: "ankreuzen, hat angekreuzt", meaning: "đánh dấu chéo", example: "Bitte Geschlecht und Alter ankreuzen.", exampleTranslation: "Vui lòng đánh dấu vào giới tính và tuổi.", category: "Weitere Wörter" },
      { id: "l14_v23", word: "benutzen, hat benutzt", meaning: "sử dụng", example: "Gestern habe ich sie gleich benutzt.", exampleTranslation: "Hôm qua tôi đã sử dụng chúng ngay.", category: "Weitere Wörter" },
      { id: "l14_v24", word: "denken an, hat an ... gedacht", meaning: "nhớ đến, nghĩ về", example: "Schön, dass Du an mich gedacht hast.", exampleTranslation: "Thật vui vì bạn đã nhớ tới mình.", category: "Weitere Wörter" },
      { id: "l14_v25", word: "ergänzen, hat ergänzt", meaning: "điền vào, bổ sung", example: "Ergänzen Sie die fehlenden Wörter.", exampleTranslation: "Hãy điền các từ còn thiếu.", category: "Weitere Wörter" },
      { id: "l14_v26", word: "gebrauchen, hat gebraucht", meaning: "dùng, sử dụng", example: "Das kann ich gut gebrauchen.", exampleTranslation: "Cái này mình có thể dùng tốt.", category: "Weitere Wörter" },
      { id: "l14_v27", word: "arm", meaning: "nghèo", example: "Die Päckchen werden an arme Kinder verschickt.", exampleTranslation: "Những gói hàng được gửi cho trẻ em nghèo.", category: "Weitere Wörter" },
      { id: "l14_v28", word: "verschieden", meaning: "khác nhau", example: "Am besten verschiedene Geschenke in den Karton legen.", exampleTranslation: "Tốt nhất là bỏ những món quà khác nhau vào vỏ hộp.", category: "Weitere Wörter" },
      { id: "l14_v29", word: "schließlich", meaning: "cuối cùng", example: "Schließlich wird das Päckchen gepackt.", exampleTranslation: "Cuối cùng gói hàng được đóng gói.", category: "Weitere Wörter" }
    ],
    grammar: [
      { id: "l14_g1", word: "Passiv Präsens (Thể bị động ở hiện tại)", meaning: "Bị động", rule: "werden + Partizip II (Động từ werden chia theo chủ ngữ mới + Động từ chính dạng phân từ 2 đứng ở cuối câu).", example: "Das Päckchen wird gepackt. / Die Geschenke werden in den Karton gelegt.", exampleTranslation: "Gói hàng đang được đóng gói. / Những món quà được đặt vào hộp bìa cứng.", note: "Dùng để nhấn mạnh HÀNH ĐỘNG hoặc QUÁ TRÌNH, thay vì nhấn mạnh NGƯỜI THỰC HIỆN. Khi ai là người làm không quan trọng hoặc đã rõ ràng." },
      { id: "l14_g2", word: "Freude ausdrücken", meaning: "Bày tỏ sự vui mừng", rule: "Các mẫu câu dùng để cảm ơn và bày tỏ sự vui mừng khi nhận được quà.", example: "Vielen Dank für Deine tollen Geschenke! Schön, dass Du an mich gedacht hast. Ich habe mich sehr gefreut.", exampleTranslation: "Cảm ơn rất nhiều vì những món quà tuyệt vời của bạn! Thật vui vì bạn đã nhớ tới mình. Mình đã rất vui.", note: "Cũng có thể dùng: Ich liebe/mag ... besonders gern." }
    ]
  },
  {
    id: "l15",
    title: "Lektion 15",
    subtitle: "Gleich geht's los!",
    items: [
      { id: "v15_1", word: "der Krimi", ipa: "/ˈkʁiːmi/", meaning: "Phim hình sự", example: "Wir sehen heute Abend einen Krimi.", exampleTranslation: "Tối nay chúng ta sẽ xem một phim hình sự.", category: "Medien" },
      { id: "v15_2", word: "die Serie", ipa: "/ˈzeːʁiə/", meaning: "Phim bộ/Phim dài tập", example: "Das ist meine Lieblingsserie.", exampleTranslation: "Đó là series yêu thích của tôi.", category: "Medien" },
      { id: "v15_3", word: "die Folge", ipa: "/ˈfɔlɡə/", meaning: "Tập phim", example: "Hast du die letzte Folge gesehen?", exampleTranslation: "Bạn đã xem tập cuối chưa?", category: "Medien" },
      { id: "v15_4", word: "der Spielfilm", ipa: "/ˈʃpiːlˌfɪlm/", meaning: "Phim truyện", example: "Der Spielfilm dauert zwei Stunden.", exampleTranslation: "Phim truyện dài hai tiếng.", category: "Medien" },
      { id: "v15_5", word: "die Sendung", ipa: "/ˈzɛndʊŋ/", meaning: "Chương trình (TV, radio)", example: "Diese Sendung ist sehr beliebt.", exampleTranslation: "Chương trình này rất được yêu thích.", category: "Medien" },
      { id: "v15_6", word: "der Sender", ipa: "/ˈzɛndɐ/", meaning: "Đài truyền hình, kênh", example: "ARD ist ein deutscher Sender.", exampleTranslation: "ARD là một đài truyền hình Đức.", category: "Medien" },
      { id: "v15_7", word: "produzieren", ipa: "/pʁoduˈt͡siːʁən/", meaning: "Sản xuất", example: "Der Film wird in Berlin produziert.", exampleTranslation: "Bộ phim được sản xuất ở Berlin.", category: "Arbeit" },
      { id: "v15_8", word: "das Drehbuch", ipa: "/ˈdʁeːˌbuːx/", meaning: "Kịch bản", example: "Das Drehbuch wird zuerst geschrieben.", exampleTranslation: "Kịch bản được viết đầu tiên.", category: "Arbeit" },
      { id: "v15_9", word: "der Regisseur", ipa: "/ʁeʒɪˈsøːɐ̯/", meaning: "Đạo diễn", example: "Der Regisseur instruiert die Schauspieler.", exampleTranslation: "Đạo diễn chỉ đạo các diễn viên.", category: "Arbeit" },
      { id: "v15_10", word: "der Schauspieler", ipa: "/ˈʃaʊ̯ˌʃpiːlɐ/", meaning: "Diễn viên", example: "Er ist ein bekannter Schauspieler.", exampleTranslation: "Anh ấy là một diễn viên nổi tiếng.", category: "Arbeit" },
      { id: "v15_11", word: "das Studio", ipa: "/ˈʃtuːdi̯o/", meaning: "Trường quay, phòng thu", example: "Die Show wird im Studio gedreht.", exampleTranslation: "Chương trình được quay ở trường quay.", category: "Arbeit" },
      { id: "v15_12", word: "der Zuschauer", ipa: "/ˈt͡suːˌʃaʊ̯ɐ/", meaning: "Khán giả", example: "Die Zuschauer klatschen.", exampleTranslation: "Khán giả vỗ tay.", category: "Medien" },
      { id: "v15_13", word: "die Quizshow", ipa: "/ˈkvɪzˌʃoː/", meaning: "Chương trình đố vui", example: "In der Quizshow kann man Geld gewinnen.", exampleTranslation: "Trong chương trình đố vui người ta có thể thắng tiền.", category: "Medien" },
      { id: "v15_14", word: "die Dokumentation", ipa: "/dokumɛntaˈt͡si̯oːn/", meaning: "Phim tài liệu", example: "Ich sehe gern Dokumentationen über Tiere.", exampleTranslation: "Tôi thích xem phim tài liệu về động vật.", category: "Medien" },
      { id: "v15_15", word: "die Nachrichtensendung", ipa: "/ˈnaːxʁɪçtn̩ˌzɛndʊŋ/", meaning: "Chương trình thời sự", example: "Die Nachrichten kommen um 20 Uhr.", exampleTranslation: "Bản tin thời sự phát lúc 20h.", category: "Medien" },
      { id: "v15_16", word: "bestellen", ipa: "/bəˈʃtɛlən/", meaning: "Đặt hàng", example: "Ich bestelle das Buch online.", exampleTranslation: "Tôi đặt mua sách trên mạng.", category: "Aktion" },
      { id: "v15_17", word: "liefern", ipa: "/ˈliːfɐn/", meaning: "Giao hàng", example: "Das Paket wird morgen geliefert.", exampleTranslation: "Gói hàng sẽ được giao vào ngày mai.", category: "Aktion" }
    ],
    grammar: [
      { id: "g15_1", word: "Passiv Präsens", ipa: "", meaning: "Câu bị động hiện tại", rule: "werden + Partizip II", example: "Das Auto wird repariert.", exampleTranslation: "Chiếc xe đang được sửa.", note: "Nhấn mạnh hành động, không quan trọng ai làm. Chia động từ werden: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden." },
      { id: "g15_2", word: "Passiv mit Trạng từ (Zuerst, dann, danach, am Ende)", ipa: "", meaning: "Câu bị động theo trình tự", rule: "Trạng từ + wird/werden + Chủ ngữ + ... + Partizip II", example: "Zuerst wird das Drehbuch geschrieben.", exampleTranslation: "Đầu tiên, kịch bản được viết.", note: "Dùng để mô tả quy trình." },
      { id: "g15_3", word: "Man -> Passiv", ipa: "", meaning: "Đại từ bất định chuyển sang bị động", rule: "Man dreht den Film -> Der Film wird gedreht.", example: "Man zeigt die Serie. -> Die Serie wird gezeigt.", exampleTranslation: "Người ta chiếu phim bộ. -> Phim bộ được chiếu.", note: "Thường dùng để thay thế cho nhau." }
    ]
  },
  {
    id: "l16",
    title: "Lektion 16",
    subtitle: "Darf ich fragen, ob ...?",
    items: [
      { id: "v16_1", word: "das Einzelzimmer", ipa: "/ˈaɪ̯nt͡sl̩ˌt͡sɪmɐ/", meaning: "Phòng đơn", example: "Ich hätte gern ein Einzelzimmer.", exampleTranslation: "Tôi muốn một phòng đơn.", category: "Hotel" },
      { id: "v16_2", word: "das Doppelzimmer", ipa: "/ˈdɔpl̩ˌt͡sɪmɐ/", meaning: "Phòng đôi", example: "Haben Sie noch ein Doppelzimmer frei?", exampleTranslation: "Bạn còn phòng đôi nào trống không?", category: "Hotel" },
      { id: "v16_3", word: "das Mehrbettzimmer", ipa: "/ˈmeːɐ̯bɛtˌt͡sɪmɐ/", meaning: "Phòng nhiều giường", example: "Wir brauchen ein Mehrbettzimmer.", exampleTranslation: "Chúng tôi cần một phòng nhiều giường.", category: "Hotel" },
      { id: "v16_4", word: "das Frühstück", ipa: "/ˈfʁyːˌʃtʏk/", meaning: "Bữa sáng", example: "Ist das Frühstück im Preis inklusive?", exampleTranslation: "Giá phòng đã bao gồm bữa sáng chưa?", category: "Verpflegung" },
      { id: "v16_5", word: "die Halbpension", ipa: "/ˈhalppɑ̃ˌzi̯oːn/", meaning: "Bán thời gian ăn uống (sáng + tối)", example: "Wir buchen mit Halbpension.", exampleTranslation: "Chúng tôi đặt phòng kèm bán trú.", category: "Verpflegung" },
      { id: "v16_6", word: "die Vollpension", ipa: "/ˈfɔlpɑ̃ˌzi̯oːn/", meaning: "Toàn thời gian ăn uống (3 bữa)", example: "Die Vollpension kostet 30 Euro extra.", exampleTranslation: "Toàn trú tốn thêm 30 Euro.", category: "Verpflegung" },
      { id: "v16_7", word: "die Rezeption", ipa: "/ʁet͡sɛpˈt͡si̯oːn/", meaning: "Quầy lễ tân", example: "Der Schlüssel liegt an der Rezeption.", exampleTranslation: "Chìa khóa ở tại quầy lễ tân.", category: "Service" },
      { id: "v16_8", word: "die Reservierung", ipa: "/ʁezɛʁˈviːʁʊŋ/", meaning: "Việc đặt phòng", example: "Haben Sie eine Reservierung?", exampleTranslation: "Bạn đã đặt phòng chưa?", category: "Service" },
      { id: "v16_9", word: "buchen", ipa: "/ˈbuːxn̩/", meaning: "Đặt chỗ, đặt phòng", example: "Er möchte ein Zimmer buchen.", exampleTranslation: "Anh ấy muốn đặt một phòng.", category: "Service" },
      { id: "v16_10", word: "der Parkplatz", ipa: "/ˈpaʁkˌplat͡s/", meaning: "Bãi đỗ xe", example: "Gibt es hier einen Parkplatz?", exampleTranslation: "Ở đây có bãi đỗ xe không?", category: "Service" },
      { id: "v16_11", word: "die Sauna", ipa: "/ˈzaʊ̯na/", meaning: "Phòng xông hơi", example: "Das Hotel hat eine kleine Sauna.", exampleTranslation: "Khách sạn có một phòng xông hơi nhỏ.", category: "Service" },
      { id: "v16_12", word: "das Schwimmbad", ipa: "/ˈʃvɪmˌbaːt/", meaning: "Bể bơi", example: "Wie lange ist das Schwimmbad geöffnet?", exampleTranslation: "Bể bơi mở cửa đến mấy giờ?", category: "Service" },
      { id: "v16_13", word: "die Kreditkarte", ipa: "/kʁeˈdiːtˌkaʁtə/", meaning: "Thẻ tín dụng", example: "Kann ich mit Kreditkarte bezahlen?", exampleTranslation: "Tôi có thể trả bằng thẻ tín dụng không?", category: "Service" },
      { id: "v16_14", word: "der Schlüssel", ipa: "/ˈʃlʏsl̩/", meaning: "Chìa khóa", example: "Hier ist Ihr Schlüssel.", exampleTranslation: "Đây là chìa khóa của bạn.", category: "Service" },
      { id: "v16_15", word: "ausfüllen", ipa: "/ˈaʊ̯sˌfʏlən/", meaning: "Điền vào (mẫu)", example: "Bitte füllen Sie das Formular aus.", exampleTranslation: "Vui lòng điền vào biểu mẫu này.", category: "Alltag" },
      { id: "v16_16", word: "angenehm", ipa: "/ˈanɡəˌneːm/", meaning: "Dễ chịu", example: "Wir wünschen Ihnen einen angenehmen Aufenthalt.", exampleTranslation: "Chúng tôi chúc bạn một kỳ nghỉ dễ chịu.", category: "Alltag" },
      { id: "v16_17", word: "frei", ipa: "/fʁaɪ̯/", meaning: "Trống, rảnh", example: "Haben Sie noch ein Zimmer frei?", exampleTranslation: "Bạn còn phòng trống không?", category: "Alltag" }
    ],
    grammar: [
      { id: "g16_1", word: "Indirekte Fragen (W-Fragen)", ipa: "", meaning: "Câu hỏi gián tiếp với từ để hỏi", rule: "Mệnh đề chính + W-Wort + ... + Verb ở cuối", example: "Wissen Sie, wann der Zug abfährt?", exampleTranslation: "Bạn có biết khi nào tàu chạy không?", note: "Làm câu hỏi lịch sự hơn. Ví dụ khác: Können Sie mir sagen, wo die Rezeption ist?" },
      { id: "g16_2", word: "Indirekte Fragen (ob)", ipa: "", meaning: "Câu hỏi gián tiếp với ob (Yes/No)", rule: "Mệnh đề chính + ob + ... + Verb ở cuối", example: "Darf ich fragen, ob das Frühstück inklusiv ist?", exampleTranslation: "Cho tôi hỏi bữa sáng có bao gồm không?", note: "Dùng khi câu trả lời của câu trực tiếp là Ja/Nein." },
      { id: "g16_3", word: "Lokale Präpositionen (door/an/gegenüber)", ipa: "", meaning: "Giới từ chỉ vị trí và hướng", rule: "durch + Akkusativ; an ... vorbei + Dativ; gegenüber von + Dativ", example: "Gehen Sie durch die Empfangshalle, dann am Restaurant vorbei.", exampleTranslation: "Hãy đi xuyên qua sảnh lễ tân, sau đó đi ngang qua nhà hàng.", note: "Dùng để chỉ đường trong không gian hẹp như khách sạn." }
    ]
  },
  {
    id: "l17",
    title: "Lektion 17",
    subtitle: "Wir wollen nach Rumänien",
    items: [
      { id: "v17_1", word: "die Tankstelle", ipa: "/ˈtaŋkˌʃtɛlə/", meaning: "Trạm xăng", example: "Wir müssen an der nächsten Tankstelle halten.", exampleTranslation: "Chúng ta phải dừng ở trạm xăng tiếp theo.", category: "Verkehrsmittel & Straße" },
      { id: "v17_2", word: "die Panne", ipa: "/ˈpanə/", meaning: "Sự cố, hỏng hóc", example: "Wir haben eine Panne auf der Autobahn.", exampleTranslation: "Chúng tôi gặp sự cố trên đường cao tốc.", category: "Verkehrsmittel & Straße" },
      { id: "v17_3", word: "die Ampel", ipa: "/ˈampəl/", meaning: "Đèn giao thông", example: "Du musst an der Ampel warten.", exampleTranslation: "Bạn phải đợi ở đèn giao thông.", category: "Verkehrsmittel & Straße" },
      { id: "v17_4", word: "die Autobahn", ipa: "/ˈaʊ̯toˌbaːn/", meaning: "Đường cao tốc", example: "Auf der Autobahn darf man schnell fahren.", exampleTranslation: "Người ta được lái xe nhanh trên cao tốc.", category: "Verkehrsmittel & Straße" },
      { id: "v17_5", word: "die Grenze", ipa: "/ˈɡʁɛnt͡sə/", meaning: "Biên giới", example: "An der Grenze zu Österreich stehen wir im Stau.", exampleTranslation: "Ở biên giới qua Áo, chúng tôi đang bị tắc đường.", category: "Verkehrsmittel & Straße" },
      { id: "v17_6", word: "die Fähre", ipa: "/ˈfɛːʁə/", meaning: "Phà", example: "Wir fahren mit der Fähre über den Fluss.", exampleTranslation: "Chúng tôi đi phà qua sông.", category: "Verkehrsmittel & Straße" },
      { id: "v17_7", word: "der Motor", ipa: "/ˈmoːtoːɐ/", meaning: "Động cơ", example: "Der Motor ist kaputtgegangen.", exampleTranslation: "Động cơ đã bị hỏng.", category: "Verkehrsmittel & Straße" },
      { id: "v17_8", word: "das Autoradio", ipa: "/ˈaʊ̯toˌʁaːdio/", meaning: "Đài trên ô tô", example: "Mach das Autoradio an!", exampleTranslation: "Hãy bật đài ô tô lên!", category: "Verkehrsmittel & Straße" },
      { id: "v17_9", word: "der Reifen", ipa: "/ˈʁaɪ̯fən/", meaning: "Lốp xe", example: "Wir müssen die Winterreifen wechseln.", exampleTranslation: "Chúng ta phải đổi lốp xe mùa đông.", category: "Verkehrsmittel & Straße" },
      { id: "v17_10", word: "die Abfahrt", ipa: "/ˈapˌfaːɐ̯t/", meaning: "Sự khởi hành", example: "Die Abfahrt ist früh am Morgen.", exampleTranslation: "Khởi hành vào sáng sớm.", category: "Verkehrsmittel & Straße" },
      { id: "v17_11", word: "die Ankunft", ipa: "/ˈanˌkʊnft/", meaning: "Sự đến nơi", example: "Kurz nach der Ankunft waren wir im Hotel.", exampleTranslation: "Ngay sau khi đến nơi, chúng tôi đã ở khách sạn.", category: "Verkehrsmittel & Straße" },
      { id: "v17_12", word: "das Meer", ipa: "/meːɐ̯/", meaning: "Biển", example: "Wir fahren jedes Jahr ans Meer.", exampleTranslation: "Chúng tôi đi ra biển mỗi năm.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_13", word: "die Küste", ipa: "/ˈkʏstə/", meaning: "Bờ biển", example: "Wir machen Urlaub an der Küste.", exampleTranslation: "Chúng tôi nghỉ dưỡng ở bờ biển.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_14", word: "der Strand", ipa: "/ʃtʁant/", meaning: "Bãi cát", example: "Ich liege gern am Strand.", exampleTranslation: "Tôi thích nằm ở bãi biển.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_15", word: "die Insel", ipa: "/ˈɪnzəl/", meaning: "Hòn đảo", example: "Wir übernachten auf einer Insel.", exampleTranslation: "Chúng tôi qua đêm trên một hòn đảo.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_16", word: "das Gebirge / die Berge", ipa: "/ɡəˈbɪʁɡə/", meaning: "Dãy núi", example: "Sie wandern gern im Gebirge.", exampleTranslation: "Họ thích đi bộ trong dãy núi.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_17", word: "der Wald", ipa: "/valt/", meaning: "Rừng", example: "Wir gehen im Wald spazieren.", exampleTranslation: "Chúng tôi đi bộ trong rừng.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_18", word: "die Wüste", ipa: "/ˈvyːstə/", meaning: "Sa mạc", example: "In der Wüste ist es sehr heiß.", exampleTranslation: "Trong sa mạc trời rất nóng.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_19", word: "das Zelt", ipa: "/t͡sɛlt/", meaning: "Lều", example: "Wir haben ein Zelt gekauft.", exampleTranslation: "Chúng tôi đã mua một cái lều.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_20", word: "die Wiese", ipa: "/ˈviːzə/", meaning: "Đồng cỏ", example: "Wir zelten auf einer großen Wiese.", exampleTranslation: "Chúng tôi cắm trại trên một đồng cỏ lớn.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_21", word: "der Süden", ipa: "/ˈzyːdən/", meaning: "Hướng Nam", example: "Die Vögel fliegen in den Süden.", exampleTranslation: "Chim bay về hướng Nam.", category: "Himmelsrichtungen" },
      { id: "v17_22", word: "müde", ipa: "/ˈmyːdə/", meaning: "Mệt mỏi", example: "Nach der Fahrt war ich total müde.", exampleTranslation: "Sau chuyến đi, tôi cực kỳ mệt mỏi.", category: "Adjektive & Verben" },
      { id: "v17_23", word: "munter", ipa: "/ˈmʊntɐ/", meaning: "Tỉnh táo / Vui vẻ", example: "Am Morgen bin ich wieder munter.", exampleTranslation: "Buổi sáng tôi lại tỉnh táo.", category: "Adjektive & Verben" },
      { id: "v17_24", word: "optimistisch", ipa: "/ɔptiˈmɪstɪʃ/", meaning: "Lạc quan", example: "Er bleibt immer optimistisch.", exampleTranslation: "Anh ấy luôn lạc quan.", category: "Adjektive & Verben" },
      { id: "v17_25", word: "komisch", ipa: "/ˈkoːmɪʃ/", meaning: "Kỳ lạ", example: "Das ist aber eine komische Geschichte.", exampleTranslation: "Đấy quả là một câu chuyện kỳ lạ.", category: "Adjektive & Verben" },
      { id: "v17_26", word: "sich ausruhen", ipa: "/ˈaʊ̯sˌʁuːən/", meaning: "Nghỉ ngơi", example: "Wir müssen uns ein bisschen ausruhen.", exampleTranslation: "Chúng ta cần nghỉ ngơi một chút.", category: "Adjektive & Verben" },
      { id: "v17_27", word: "einschlafen", ipa: "/ˈaɪ̯nˌʃlaːfən/", meaning: "Ngủ thiếp đi", example: "Ich bin sofort eingeschlafen.", exampleTranslation: "Tôi đã ngủ thiếp đi ngay lập tức.", category: "Adjektive & Verben" }
    ],
    grammar: [
      { id: "g17_1", word: "Wohin? (Akkusativ)", ipa: "", meaning: "Hỏi hướng đi đâu", rule: "in/an/auf/nach + Akkusativ/Dativ", example: "Wir fahren ans Meer.", exampleTranslation: "Chúng tôi lái xe ra biển.", note: "Chỉ sự rẽ hướng, di chuyển." }
    ]
  },
  {
    id: "l18",
    title: "Lektion 18",
    subtitle: "Ich weiß nicht, wo ich bin",
    items: [
      { id: "v18_1", word: "die Sonne", ipa: "/ˈzɔnə/", meaning: "Mặt trời", example: "Die Sonne scheint.", exampleTranslation: "Mặt trời đang chiếu sáng.", category: "Wetter" },
      { id: "v18_2", word: "der Regen", ipa: "/ˈʁeːɡən/", meaning: "Mưa", example: "Wir bleiben bei dem Regen zu Hause.", exampleTranslation: "Chúng tôi ở nhà khi trời mưa.", category: "Wetter" },
      { id: "v18_3", word: "der Schnee", ipa: "/ʃneː/", meaning: "Tuyết", example: "Im Winter gibt es viel Schnee.", exampleTranslation: "Vào mùa đông có rất nhiều tuyết.", category: "Wetter" },
      { id: "v18_4", word: "der Wind", ipa: "/vɪnt/", meaning: "Gió", example: "Der Wind ist heute sehr stark.", exampleTranslation: "Gió hôm nay rất mạnh.", category: "Wetter" },
      { id: "v18_5", word: "der Nebel", ipa: "/ˈneːbl̩/", meaning: "Sương mù", example: "Bei Nebel muss man langsam fahren.", exampleTranslation: "Khi có sương mù, người ta phải lái xe chậm.", category: "Wetter" },
      { id: "v18_6", word: "das Gewitter", ipa: "/ɡəˈvɪtɐ/", meaning: "Dông bão", example: "Ich habe Angst vor dem Gewitter.", exampleTranslation: "Tôi sợ dông bão.", category: "Wetter" },
      { id: "v18_7", word: "die Hitze", ipa: "/ˈhɪt͡sə/", meaning: "Sự nóng bức", example: "Die Hitze im Sommer ist unerträglich.", exampleTranslation: "Cái nóng bức vào mùa hè thật không thể chịu nổi.", category: "Wetter" },
      { id: "v18_8", word: "die Kälte", ipa: "/ˈkɛltə/", meaning: "Sự lạnh lẽo", example: "Ich mag die Kälte nicht.", exampleTranslation: "Tôi không thích thời tiết lạnh lẽo.", category: "Wetter" },
      { id: "v18_9", word: "sonnig", ipa: "/ˈzɔnɪç/", meaning: "Nhiều nắng", example: "Heute ist ein sonniger Tag.", exampleTranslation: "Hôm nay là một ngày nhiều nắng.", category: "Wetter" },
      { id: "v18_10", word: "regnerisch", ipa: "/ˈʁeːɡnəʁɪʃ/", meaning: "Trời mưa", example: "Das Wetter ist heute regnerisch.", exampleTranslation: "Thời tiết hôm nay trời có mưa.", category: "Wetter" },
      { id: "v18_11", word: "windig", ipa: "/ˈvɪndɪç/", meaning: "Nhiều gió", example: "An der Küste ist es oft windig.", exampleTranslation: "Ở bờ biển thường có nhiều gió.", category: "Wetter" },
      { id: "v18_12", word: "neblig", ipa: "/ˈneːblɪç/", meaning: "Nhiều sương mù", example: "Im Herbst ist es morgens oft neblig.", exampleTranslation: "Vào mùa thu buổi sáng thường có sương mù.", category: "Wetter" },
      { id: "v18_13", word: "heiß", ipa: "/haɪ̯s/", meaning: "Nóng", example: "Es ist heute sehr heiß.", exampleTranslation: "Hôm nay trời rất nóng.", category: "Wetter" },
      { id: "v18_14", word: "kalt", ipa: "/kalt/", meaning: "Lạnh", example: "Mir ist kalt.", exampleTranslation: "Tôi thấy lạnh.", category: "Wetter" },
      { id: "v18_15", word: "warm", ipa: "/vaʁm/", meaning: "Ấm áp", example: "Das Wasser ist warm.", exampleTranslation: "Nước ấm.", category: "Wetter" },
      { id: "v18_16", word: "bewölkt", ipa: "/bəˈvœlkt/", meaning: "Nhiều mây", example: "Der Himmel ist bewölkt.", exampleTranslation: "Bầu trời có nhiều mây.", category: "Wetter" },
      { id: "v18_17", word: "das Handtuch", ipa: "/ˈhantˌtuːχ/", meaning: "Khăn tắm", example: "Ich brauche ein Handtuch.", exampleTranslation: "Tôi cần một cái khăn tắm.", category: "Urlaub & Strand" },
      { id: "v18_18", word: "die Badehose", ipa: "/ˈbaːdəˌhoːzə/", meaning: "Quần bơi", example: "Wo ist meine Badehose?", exampleTranslation: "Quần bơi của tôi ở đâu?", category: "Urlaub & Strand" },
      { id: "v18_19", word: "die Sonnencreme", ipa: "/ˈzɔnənˌkʁeːm/", meaning: "Kem chống nắng", example: "Vergiss die Sonnencreme nicht!", exampleTranslation: "Đừng quên kem chống nắng!", category: "Urlaub & Strand" },
      { id: "v18_20", word: "der Golfplatz", ipa: "/ˈɡɔlfˌplat͡s/", meaning: "Sân golf", example: "Er spielt auf dem Golfplatz.", exampleTranslation: "Anh ấy chơi ở sân golf.", category: "Orte & Wegbeschreibung" },
      { id: "v18_21", word: "der Parkplatz", ipa: "/ˈpaʁkˌplat͡s/", meaning: "Bãi đỗ xe", example: "Gibt es hier einen Parkplatz?", exampleTranslation: "Ở đây có bãi đỗ xe không?", category: "Orte & Wegbeschreibung" },
      { id: "v18_22", word: "das Freizeitland", ipa: "/ˈfʁaɪ̯t͡saɪ̯tˌlant/", meaning: "Khu vui chơi / công viên giải trí", example: "Die Kinder wollen ins Freizeitland.", exampleTranslation: "Bọn trẻ muốn đến công viên giải trí.", category: "Orte & Wegbeschreibung" },
      { id: "v18_23", word: "geradeaus", ipa: "/ɡəʁaːdəˈaʊ̯s/", meaning: "Đi thẳng", example: "Gehen Sie immer geradeaus.", exampleTranslation: "Hãy cứ đi thẳng.", category: "Orte & Wegbeschreibung" },
      { id: "v18_24", word: "links / rechts", ipa: "/lɪŋks / ʁɛçt͡s/", meaning: "Trái / Phải", example: "An der Ampel nach links.", exampleTranslation: "Đến đèn giao thông rẽ trái.", category: "Orte & Wegbeschreibung" },
      { id: "v18_25", word: "dahinter", ipa: "/daˈhɪntɐ/", meaning: "Phía sau đó", example: "Der Parkplatz ist gleich dahinter.", exampleTranslation: "Bãi đỗ xe ở ngay phía sau đó.", category: "Orte & Wegbeschreibung" },
      { id: "v18_26", word: "vorbei", ipa: "/foːɐ̯ˈbaɪ̯/", meaning: "Ngang qua", example: "Gehen Sie an der Bäckerei vorbei.", exampleTranslation: "Hãy đi ngang qua tiệm bánh.", category: "Orte & Wegbeschreibung" },
      { id: "v18_27", word: "meistens", ipa: "/ˈmaɪ̯stn̩s/", meaning: "Thông thường", example: "Er ist meistens pünktlich.", exampleTranslation: "Anh ấy thông thường đúng giờ.", category: "Adverbien" },
      { id: "v18_28", word: "leider", ipa: "/ˈlaɪ̯dɐ/", meaning: "Đáng tiếc", example: "Ich habe leider keine Zeit.", exampleTranslation: "Đáng tiếc là tôi không có thời gian.", category: "Adverbien" }
    ],
    grammar: [
      { id: "g18_1", word: "Verben mit festen Präpositionen", ipa: "", meaning: "Động từ đi kèm giới từ cố định", rule: "Học thuộc động từ + giới từ + cách (Akk/Dat)", example: "Ich freue mich auf den Urlaub. / Er träumt von einer Reise.", exampleTranslation: "Tôi mong đợi kỳ nghỉ. / Anh ấy mơ về một chuyến đi.", note: "Ví dụ: sich freuen auf (Akk), träumen von (Dat), sprechen über (Akk)..." },
      { id: "g18_2", word: "Lokale Präpositionen (Wege)", ipa: "", meaning: "Giới từ chỉ phương hướng (Chỉ đường)", rule: "durch/über + Akk, an...vorbei/bis zu + Dat", example: "Gehen Sie durch den Wald. / Fahren Sie über die Brücke.", exampleTranslation: "Hãy đi xuyên qua rừng. / Hãy lái xe qua cầu.", note: "Chỉ lộ trình hoặc đường đi." }
    ]
  },
  {
    id: "l19",
    title: "Lektion 19",
    subtitle: "Wohin gehen wir heute?",
    items: [
      { id: "v19_1", word: "das Publikum", ipa: "/ˈpuːblikʊm/", meaning: "Khán giả, công chúng", example: "Das Publikum war begeistert.", exampleTranslation: "Khán giả rất hào hứng.", category: "Kultur" },
      { id: "v19_2", word: "die Sendung", ipa: "/ˈzɛndʊŋ/", meaning: "Chương trình (máy thu thanh, truyền hình)", example: "Die Sendung beginnt um 20 Uhr.", exampleTranslation: "Chương trình bắt đầu lúc 20 giờ.", category: "Medien" },
      { id: "v19_3", word: "der Spielfilm", ipa: "/ˈʃpiːlˌfɪlm/", meaning: "Phim truyện", example: "Wir schauen einen Spielfilm.", exampleTranslation: "Chúng tôi xem một bộ phim truyện.", category: "Medien" },
      { id: "v19_4", word: "die Ausstellung", ipa: "/ˈaʊ̯sˌʃtɛlʊŋ/", meaning: "Cuộc triển lãm", example: "Wir gehen in die Ausstellung.", exampleTranslation: "Chúng tôi đi xem triển lãm.", category: "Kultur" },
      { id: "v19_5", word: "die Vorstellung", ipa: "/ˈfoːɐ̯ˌʃtɛlʊŋ/", meaning: "Buổi biểu diễn", example: "Die Vorstellung war ausgezeichnet.", exampleTranslation: "Buổi biểu diễn rất xuất sắc.", category: "Kultur" },
      { id: "v19_6", word: "die Eröffnung", ipa: "/ɛɐ̯ˈʔœfnʊŋ/", meaning: "Sự khai mạc, khai trương", example: "Zur Eröffnung gab es Sekt.", exampleTranslation: "Có rượu champagne tại lễ khai mạc.", category: "Kultur" },
      { id: "v19_7", word: "der Spaziergang", ipa: "/ʃpaˈt͡siːɐ̯ˌɡaŋ/", meaning: "Cuộc đi dạo", example: "Wir machen einen Spaziergang.", exampleTranslation: "Chúng tôi đang đi dạo.", category: "Freizeit" },
      { id: "v19_8", word: "der Club", ipa: "/klʊp/", meaning: "Câu lạc bộ", example: "Sie gehen am Wochenende in den Club.", exampleTranslation: "Họ đi đến câu lạc bộ vào cuối tuần.", category: "Freizeit" },
      { id: "v19_9", word: "die Kultur", ipa: "/kʊlˈtuːɐ̯/", meaning: "Văn hóa", example: "Er interessiert sich für Kultur.", exampleTranslation: "Anh ấy quan tâm đến văn hóa.", category: "Kultur" },
      { id: "v19_10", word: "der Beginn", ipa: "/beˈɡɪn/", meaning: "Sự bắt đầu", example: "Der Beginn ist um 19 Uhr.", exampleTranslation: "Bắt đầu lúc 19 giờ.", category: "Allgemein" },
      { id: "v19_11", word: "ausgezeichnet", ipa: "/ˈaʊ̯sɡəˈt͡saɪ̯çnət/", meaning: "Xuất sắc, tuyệt vời", example: "Das Essen war ausgezeichnet.", exampleTranslation: "Thức ăn rất tuyệt vời.", category: "Adjektiv" },
      { id: "v19_12", word: "beliebt", ipa: "/bəˈliːpt/", meaning: "Được yêu thích / Phổ biến", example: "Das Restaurant ist sehr beliebt.", exampleTranslation: "Nhà hàng này rất được yêu thích.", category: "Adjektiv" },
      { id: "v19_13", word: "klassisch", ipa: "/ˈklasɪʃ/", meaning: "Cổ điển", example: "Ich mag klassische Musik.", exampleTranslation: "Tôi thích nhạc cổ điển.", category: "Adjektiv" },
      { id: "v19_14", word: "kostenlos / gratis", ipa: "/ˈkɔstn̩ˌloːs/", meaning: "Miễn phí", example: "Der Eintritt ist kostenlos.", exampleTranslation: "Vào cửa miễn phí.", category: "Adjektiv" },
      { id: "v19_15", word: "kulturell", ipa: "/kʊltuˈʁɛl/", meaning: "Thuộc về văn hóa", example: "Wir nehmen an einem kulturellen Event teil.", exampleTranslation: "Chúng tôi tham gia một sự kiện văn hóa.", category: "Adjektiv" },
      { id: "v19_16", word: "negativ", ipa: "/ˈneːɡatiːf/", meaning: "Tiêu cực", example: "Sei nicht so negativ!", exampleTranslation: "Đừng có tỏ ra tiêu cực như vậy!", category: "Adjektiv" },
      { id: "v19_17", word: "positiv", ipa: "/ˈpoːzitiːf/", meaning: "Tích cực", example: "Er hat eine positive Einstellung.", exampleTranslation: "Anh ấy có một thái độ tích cực.", category: "Adjektiv" },
      { id: "v19_18", word: "neugierig", ipa: "/ˈnɔɪ̯ˌɡiːʁɪç/", meaning: "Tò mò", example: "Bist du gar nicht neugierig?", exampleTranslation: "Bạn không tò mò chút nào sao?", category: "Adjektiv" },
      { id: "v19_19", word: "wahr", ipa: "/vaːɐ̯/", meaning: "Đúng, có thật", example: "Das ist wahr.", exampleTranslation: "Điều đó là sự thật.", category: "Adjektiv" },
      { id: "v19_20", word: "eröffnen", ipa: "/ɛɐ̯ˈʔœfnən/", meaning: "Mở cửa, khai trương", example: "Ein neues Café wird eröffnet.", exampleTranslation: "Một quán cà phê mới đang được khai trương.", category: "Verb" },
      { id: "v19_21", word: "verlängern", ipa: "/fɛɐ̯ˈlɛŋɐn/", meaning: "Kéo dài, gia hạn", example: "Die Ausstellung wird verlängert.", exampleTranslation: "Buổi triển lãm được kéo dài.", category: "Verb" },
      { id: "v19_22", word: "verpassen", ipa: "/fɛɐ̯ˈpasn̩/", meaning: "Bỏ lỡ", example: "Du solltest diesen Film nicht verpassen.", exampleTranslation: "Bạn không nên bỏ lỡ bộ phim này.", category: "Verb" },
      { id: "v19_23", word: "recht haben", ipa: "/ʁɛçt ˈhaːbən/", meaning: "Có lý, đúng", example: "Du hast recht.", exampleTranslation: "Bạn nói đúng.", category: "Verb" },
      { id: "v19_24", word: "unternehmen", ipa: "/ˌʊntɐˈneːmən/", meaning: "Thực hiện (một hoạt động)", example: "Wollen wir heute Abend etwas unternehmen?", exampleTranslation: "Tối nay chúng ta có muốn làm gì đó không?", category: "Verb" },
      { id: "v19_25", word: "versuchen", ipa: "/fɛɐ̯ˈzuːxn̩/", meaning: "Thử, cố gắng", example: "Versuch das doch mal.", exampleTranslation: "Hãy thử xem sao.", category: "Verb" },
      { id: "v19_26", word: "weggehen", ipa: "/ˈvɛkˌɡeːən/", meaning: "Đi ra ngoài chơi, rời đi", example: "Wir wollen am Wochenende weggehen.", exampleTranslation: "Chúng tôi muốn ra ngoài đi chơi vào cuối tuần.", category: "Verb" },
      { id: "v19_27", word: "überzeugen", ipa: "/ˌyːbɐˈt͡sɔɪ̯ɡən/", meaning: "Thuyết phục", example: "Ich versuche, ihn zu überzeugen.", exampleTranslation: "Tôi đang cố gắng thuyết phục anh ấy.", category: "Verb" },
      { id: "v19_28", word: "sich lohnen", ipa: "/zɪç ˈloːnən/", meaning: "Đáng giá, bõ công", example: "Das lohnt sich bestimmt.", exampleTranslation: "Chắc chắn là bõ công đó.", category: "Verb" },
      { id: "v19_29", word: "probieren", ipa: "/pʁoˈbiːʁən/", meaning: "Thử nghiệm, nếm", example: "Probier mal!", exampleTranslation: "Hãy thử đi!", category: "Verb" }
    ],
    grammar: [
      { id: "g19_1", word: "aus / von (Woher?)", meaning: "Từ đâu đến?", rule: "'aus' cộng Dativ dùng cho không gian kín (aus dem Kino). 'von' cộng Dativ dùng cho người, sự kiện hoặc hoạt động (vom Arzt, vom Sport).", example: "Ich komme gerade aus dem Theater.", exampleTranslation: "Tôi vừa từ nhà hát về." },
      { id: "g19_2", word: "in / zu (Wohin?)", meaning: "Đi đâu?", rule: "'in' cộng Akkusativ dùng cho đi vào bên trong (ins Kino). 'zu' cộng Dativ dùng khi đi đến nơi nào đó xác định, hoặc người nào đó (zur Bank, zu Paul).", example: "Wir gehen heute Abend ins Kino.", exampleTranslation: "Tối nay chúng ta sẽ đi xem phim." }
    ]
  },
  {
    id: "l20",
    title: "Lektion 20",
    subtitle: "Ich durfte eigentlich keine Comics lesen",
    items: [
      { id: "v20_1", word: "der Comic", ipa: "/ˈkɔmɪk/", meaning: "Truyện tranh", example: "Ich lese gern Comics.", grammar: "Pl: die Comics", category: "Medien" },
      { id: "v20_2", word: "das Märchen", ipa: "/ˈmɛːɐ̯çən/", meaning: "Truyện cổ tích", example: "Meine Oma hat mir früher Märchen erzählt.", grammar: "Pl: die Märchen", category: "Medien" },
      { id: "v20_3", word: "das Bilderbuch", ipa: "/ˈbɪldɐˌbuːx/", meaning: "Sách tranh", example: "Das ist ein schönes Bilderbuch für Kinder.", grammar: "Pl: die Bilderbücher", category: "Medien" },
      { id: "v20_4", word: "das Sachbuch", ipa: "/ˈzaxˌbuːx/", meaning: "Sách chuyên ngành/thông tin", example: "Ich lese gern Sachbücher über Geschichte.", grammar: "Pl: die Sachbücher", category: "Medien" },
      { id: "v20_5", word: "das Hörbuch", ipa: "/ˈhøːɐ̯ˌbuːx/", meaning: "Sách nói", example: "Im Auto höre ich oft ein Hörbuch.", grammar: "Pl: die Hörbücher", category: "Medien" },
      { id: "v20_6", word: "der Krimi", ipa: "/ˈkʁimi/", meaning: "Truyện/phim trinh thám", example: "Krimis sind sehr spannend.", grammar: "Pl: die Krimis", category: "Medien" },
      { id: "v20_7", word: "der Roman", ipa: "/ʁoˈmaːn/", meaning: "Tiểu thuyết", example: "Sie liest einen dicken Roman.", grammar: "Pl: die Romane", category: "Medien" },
      { id: "v20_8", word: "das Kinderbuch", ipa: "/ˈkɪndɐˌbuːx/", meaning: "Sách trẻ em", example: "Das ist ein bekanntes Kinderbuch.", grammar: "Pl: die Kinderbücher", category: "Medien" },
      { id: "v20_9", word: "der Ratgeber", ipa: "/ˈʁaːtˌɡeːbɐ/", meaning: "Sách hướng dẫn / Cố vấn", example: "Ich habe einen Ratgeber über Pflanzen gekauft.", grammar: "Pl: die Ratgeber", category: "Medien" },
      { id: "v20_10", word: "das Gedicht", ipa: "/ɡəˈdɪçt/", meaning: "Bài thơ", example: "Er hat ein romantisches Gedicht geschrieben.", grammar: "Pl: die Gedichte", category: "Medien" },
      { id: "v20_11", word: "die Zeitschrift", ipa: "/ˈt͡saɪ̯tˌʃʁɪft/", meaning: "Tạp chí", example: "Liest du gern Computerzeitschriften?", grammar: "Pl: die Zeitschriften", category: "Medien" },
      { id: "v20_12", word: "die Zeitung", ipa: "/ˈt͡saɪ̯tʊŋ/", meaning: "Tờ báo", example: "Mein Vater liest jeden Morgen die Zeitung.", grammar: "Pl: die Zeitungen", category: "Medien" },
      { id: "v20_13", word: "die Literatur", ipa: "/litəʁaˈtuːɐ̯/", meaning: "Văn học", example: "Er studiert deutsche Literatur.", category: "Kultur" },
      { id: "v20_14", word: "die Geschichte", ipa: "/ɡəˈʃɪçtə/", meaning: "Câu chuyện / Lịch sử", example: "Die Geschichte ist sehr lustig.", grammar: "Pl: die Geschichten", category: "Kultur" },
      { id: "v20_15", word: "der Autor", ipa: "/ˈaʊ̯toːɐ̯/", meaning: "Tác giả (nam)", example: "Der Autor schreibt spannende Bücher.", grammar: "Pl: die Autoren", category: "Personen" },
      { id: "v20_16", word: "spannend", ipa: "/ˈʃpanənt/", meaning: "Hấp dẫn, hồi hộp", example: "Der Film war sehr spannend.", category: "Adjektiv" },
      { id: "v20_17", word: "romantisch", ipa: "/ʁoˈmantɪʃ/", meaning: "Lãng mạn", example: "Das ist ein romantisches Buch.", category: "Adjektiv" },
      { id: "v20_18", word: "lustig", ipa: "/ˈlʊstɪç/", meaning: "Vui nhộn, hài hước", example: "Der Comic ist total lustig.", category: "Adjektiv" },
      { id: "v20_19", word: "interessant", ipa: "/ɪntəʁɛˈsant/", meaning: "Thú vị", example: "Dieses Sachbuch ist sehr interessant.", category: "Adjektiv" },
      { id: "v20_20", word: "traurig", ipa: "/ˈtʁaʊ̯ʁɪç/", meaning: "Buồn", example: "Die Geschichte hat ein trauriges Ende.", category: "Adjektiv" },
      { id: "v20_21", word: "langweilig", ipa: "/ˈlaŋˌvaɪ̯lɪç/", meaning: "Nhàm chán", example: "Das Buch finde ich ehrlich gesagt langweilig.", category: "Adjektiv" },
      { id: "v20_22", word: "furchtbar", ipa: "/ˈfʊʁçtbaːɐ̯/", meaning: "Khủng khiếp", example: "Das Wetter war furchtbar.", category: "Adjektiv" },
      { id: "v20_23", word: "ehrlich", ipa: "/ˈeːɐ̯lɪç/", meaning: "Thành thật / trung thực", example: "Ehrlich gesagt, habe ich keine Lust.", category: "Adjektiv" },
      { id: "v20_24", word: "vorlesen", ipa: "/ˈfoːɐ̯ˌleːzn̩/", meaning: "Đọc to lên (cho ai nghe)", example: "Mein Vater hat mir oft Märchen vorgelesen.", grammar: "liest vor, hat vorgelesen", category: "Verb" },
      { id: "v20_25", word: "erfahren", ipa: "/ɛɐ̯ˈfaːʁən/", meaning: "Trải nghiệm / biết được", example: "Man erfährt viel über die Krankheit.", grammar: "erfährt, hat erfahren", category: "Verb" },
      { id: "v20_26", word: "weinen", ipa: "/ˈvaɪ̯nən/", meaning: "Khóc", example: "Bei diesem Text musste ich weinen.", grammar: "hat geweint", category: "Verb" },
      { id: "v20_27", word: "sich beeilen", ipa: "/bəˈʔaɪ̯lən/", meaning: "Vội vàng, khẩn trương", example: "Ich musste mich beeilen, weil ich zu spät aufgestanden bin.", grammar: "hat sich beeilt", category: "Verb" },
      { id: "v20_28", word: "das Interesse", ipa: "/ɪnˈtʁɛsə/", meaning: "Sự quan tâm / sở thích", example: "Ich habe großes Interesse an Kunst.", grammar: "Pl: die Interessen", category: "Allgemein" },
      { id: "v20_29", word: "sich interessieren für", ipa: "/ɪntəʁɛˈsiːʁən/", meaning: "Quan tâm đến cái gì", example: "Interessierst du dich für Autos?", grammar: "+ Akkusativ", category: "Verb" },
      { id: "v20_30", word: "überhaupt", ipa: "/yːbɐˈhaʊ̯pt/", meaning: "Hoàn toàn (không)", example: "Das interessiert mich überhaupt nicht.", category: "Allgemein" }
    ],
    grammar: [
      { id: "g20_1", word: "Modalverben im Präteritum", meaning: "Động từ khuyết thiếu ở thì quá khứ", rule: "Bỏ dấu Umlaut (ä, ö, ü) của động từ khuyết thiếu nguyên thể và thêm đuôi quá khứ (-te). Ví dụ: können -> konnte, müssen -> musste, dürfen -> durfte, wollen -> wollte, sollen -> sollte, mögen -> mochte.", example: "Als Kind durfte ich keine Comics lesen.", exampleTranslation: "Hồi nhỏ tôi không được phép đọc truyện tranh." },
      { id: "g20_2", word: "Interesse haben an + Dativ", meaning: "Quan tâm/hứng thú với cái gì", rule: "Dùng để diễn tả sự quan tâm đến một đối tượng nào đó, theo sau giới từ 'an' là cách 3 (Dativ).", example: "Hast du Interesse an Büchern?", exampleTranslation: "Bạn có hứng thú với sách không?" },
      { id: "g20_3", word: "sich interessieren für + Akkusativ", meaning: "Quan tâm đến cái gì", rule: "Động từ phản thân đi với giới từ 'für' cộng cách 4 (Akkusativ) có nghĩa giống với 'Interesse haben an'.", example: "Ich interessiere mich für Geschichte.", exampleTranslation: "Tôi quan tâm đến lịch sử." }
    ]
  },
  {
    id: "l21",
    title: "Lektion 21",
    subtitle: "Ja genau, den meine ich",
    items: [
      // CHỦ ĐỀ I: VỤ TRỘM & BÁO CÁO
      { id: "21-1", word: "der Einbruch (số ít)", ipa: "deːɐ̯ ˈaɪ̯nˌbʁʊχ", meaning: "Vụ trộm đột nhập", example: "Es gab einen Einbruch in mein Auto.", exampleTranslation: "Có một vụ trộm đột nhập vào xe tôi.", category: "Vụ trộm & Báo cáo" },
      { id: "21-2", word: "die Einbrüche (số nhiều)", ipa: "diː ˈaɪ̯nˌbʁʏçə", meaning: "Các vụ trộm đột nhập", example: "Es gab in letzter Zeit viele Einbrüche.", exampleTranslation: "Dạo gần đây có nhiều vụ trộm đột nhập.", category: "Vụ trộm & Báo cáo" },
      { id: "21-3", word: "der Täter (số ít)", ipa: "deːɐ̯ ˈtɛːtɐ", meaning: "Thủ phạm", example: "Die Polizei sucht den Täter.", exampleTranslation: "Cảnh sát đang truy tìm thủ phạm.", category: "Vụ trộm & Báo cáo" },
      { id: "21-4", word: "die Täter (số nhiều)", ipa: "diː ˈtɛːtɐ", meaning: "Các thủ phạm", example: "Die Täter wurden nhanh gefasst.", exampleTranslation: "Các thủ phạm đã nhanh chóng bị bắt.", category: "Vụ trộm & Báo cáo" },
      { id: "21-5", word: "stehlen (nguyên thể)", ipa: "ˈʃteːlən", meaning: "Ăn cắp, lấy trộm", example: "Diebe stehlen oft Handys und Geldbörsen.", exampleTranslation: "Kẻ trộm thường lấy cắp điện thoại và ví tiền.", category: "Vụ trộm & Báo cáo" },
      { id: "21-6", word: "hat gestohlen (quá khứ)", ipa: "hat ɡəˈʃtoːlən", meaning: "Đã ăn cắp", example: "Jemand hat meine Tasche gestohlen.", exampleTranslation: "Ai đó đã lấy trộm túi của tôi.", category: "Vụ trộm & Báo cáo" },
      { id: "21-7", word: "bemerken (nguyên thể)", ipa: "bəˈmɛʁkn̩", meaning: "Nhận thấy, nhận ra", example: "Ich bemerke oft kleine Details.", exampleTranslation: "Tôi hay nhận ra những chi tiết nhỏ.", category: "Vụ trộm & Báo cáo" },
      { id: "21-8", word: "hat bemerkt (quá khứ)", ipa: "hat bəˈmɛʁkt", meaning: "Đã nhận ra", example: "Ich habe den Diebstahl sofort bemerkt.", exampleTranslation: "Tôi đã nhận ra vụ trộm ngay lập tức.", category: "Vụ trộm & Báo cáo" },
      { id: "21-9", word: "sperren (nguyên thể)", ipa: "ˈʃpɛʁən", meaning: "Khóa (thẻ, TK)", example: "Ich muss meine EC-Karte sperren.", exampleTranslation: "Tôi phải khóa thẻ ngân hàng của mình.", category: "Vụ trộm & Báo cáo" },
      { id: "21-10", word: "hat gesperrt (quá khứ)", ipa: "hat ɡəˈʃpɛʁt", meaning: "Đã khóa", example: "Die Bank hat meine Karte wegen Verlust gesperrt.", exampleTranslation: "Ngân hàng đã khóa thẻ của tôi vì bị mất.", category: "Vụ trộm & Báo cáo" },
      { id: "21-11", word: "die Aussage (số ít)", ipa: "diː ˈaʊ̯sˌzaːɡə", meaning: "Lời khai", example: "Ich muss bei der Polizei eine Aussage machen.", exampleTranslation: "Tôi phải khai báo với cảnh sát.", category: "Vụ trộm & Báo cáo" },
      { id: "21-12", word: "die Aussagen (số nhiều)", ipa: "diː ˈaʊ̯sˌzaːɡn̩", meaning: "Các lời khai", example: "Die Aussagen der Zeugen waren sehr hilfreich.", exampleTranslation: "Những lời khai của nhân chứng rất hữu ích.", category: "Vụ trộm & Báo cáo" },

      // CHỦ ĐỀ II: GIẤY TỜ TÙY THÂN
      { id: "21-13", word: "die Geldbörse (số ít)", ipa: "diː ˈɡɛltˌbœʁzə", meaning: "Ví tiền", example: "Meine Geldbörse ist weg!", exampleTranslation: "Ví tiền của tôi mất rồi!", category: "Giấy tờ tùy thân" },
      { id: "21-14", word: "die Geldbörsen (số nhiều)", ipa: "diː ˈɡɛltˌbœʁzn̩", meaning: "Các ví tiền", example: "Im Geschäft verkaufen sie viele Geldbörsen.", exampleTranslation: "Trong cửa hàng họ bán rất nhiều ví tiền.", category: "Giấy tờ tùy thân" },
      { id: "21-15", word: "der Ausweis (số ít)", ipa: "deːɐ̯ ˈaʊ̯sˌvaɪ̯s", meaning: "Giấy tờ tùy thân", example: "Zeigen Sie mir bitte Ihren Ausweis.", exampleTranslation: "Vui lòng cho tôi xem giấy tờ tùy thân của bạn.", category: "Giấy tờ tùy thân" },
      { id: "21-16", word: "die Ausweise (số nhiều)", ipa: "diː ˈaʊ̯sˌvaɪ̯zə", meaning: "Các giấy tờ tùy thân", example: "Bitte legen Sie Ihre Ausweise auf den Tisch.", exampleTranslation: "Vui lòng đặt giấy tờ tùy thân của các bạn lên bàn.", category: "Giấy tờ tùy thân" },
      { id: "21-17", word: "die EC-Karte (số ít)", ipa: "diː eːˈtseː ˈkaʁtə", meaning: "Thẻ ngân hàng", example: "Kann ich mit EC-Karte bezahlen?", exampleTranslation: "Tôi có thể thanh toán bằng thẻ ngân hàng không?", category: "Giấy tờ tùy thân" },
      { id: "21-18", word: "die EC-Karten (số nhiều)", ipa: "diː eːˈtseː ˈkaʁtn̩", meaning: "Các thẻ ngân hàng", example: "Er hat zwei verschiedene EC-Karten.", exampleTranslation: "Anh ấy có hai thẻ ngân hàng khác nhau.", category: "Giấy tờ tùy thân" },
      { id: "21-19", word: "der Führerschein (số ít)", ipa: "deːɐ̯ ˈfyːʁɐˌʃaɪ̯n", meaning: "Bằng lái xe", example: "Ich habe meinen Führerschein vergessen.", exampleTranslation: "Tôi đã quên bằng lái xe của mình.", category: "Giấy tờ tùy thân" },
      { id: "21-20", word: "die Führerscheine (số nhiều)", ipa: "diː ˈfyːʁɐˌʃaɪ̯nə", meaning: "Các bằng lái xe", example: "Internationale Führerscheine sind hier gültig.", exampleTranslation: "Bằng lái xe quốc tế có hiệu lực ở đây.", category: "Giấy tờ tùy thân" },
      { id: "21-21", word: "die Gesundheitskarte (số ít)", ipa: "diː ɡəˈzʊntˌhaɪ̯tsˌkaʁtə", meaning: "Thẻ bảo hiểm y tế", example: "Bringen Sie bitte Ihre Gesundheitskarte mit.", exampleTranslation: "Vui lòng mang theo thẻ bảo hiểm y tế.", category: "Giấy tờ tùy thân" },
      { id: "21-22", word: "die Gesundheitskarten (số nhiều)", ipa: "diː ɡəˈzʊntˌhaɪ̯tsˌkaʁtn̩", meaning: "Các thẻ bảo hiểm y tế", example: "Die Praxis braucht die Gesundheitskarten aller Kinder.", exampleTranslation: "Phòng khám cần thẻ bảo hiểm y tế của tất cả trẻ em.", category: "Giấy tờ tùy thân" },

      // CHỦ ĐỀ III: MÔ TẢ NHÂN DẠNG
      { id: "21-23", word: "schmal (tính từ)", ipa: "ʃmaːl", meaning: "Gầy, thon, mảnh", example: "Der Täter hat ein schmales Gesicht.", exampleTranslation: "Thủ phạm có khuôn mặt gầy.", category: "Mô tả nhân dạng" },
      { id: "21-24", word: "rund (tính từ)", ipa: "ʁʊnt", meaning: "Tròn", example: "Das Kind hat ein rundes Gesicht.", exampleTranslation: "Đứa trẻ có khuôn mặt tròn.", category: "Mô tả nhân dạng" },
      { id: "21-25", word: "dunkel (tính từ)", ipa: "ˈdʊŋkl̩", meaning: "Tối màu, sẫm", example: "Er hat dunkle Haare und Augen.", exampleTranslation: "Anh ta có tóc và mắt màu tối.", category: "Mô tả nhân dạng" },
      { id: "21-26", word: "tragen (nguyên thể)", ipa: "ˈtʁaːɡn̩", meaning: "Mặc, đội, đeo", example: "Der Mann trägt eine schwarze Brille.", exampleTranslation: "Người đàn ông đeo một chiếc kính đen.", category: "Mô tả nhân dạng" },
      { id: "21-27", word: "hat getragen (quá khứ)", ipa: "hat ɡəˈtʁaːɡn̩", meaning: "Đã mặc, đội, đeo", example: "Der Dieb hat gestern eine schwarze Jacke getragen.", exampleTranslation: "Tên trộm hôm qua đã mặc một chiếc áo khoác đen.", category: "Mô tả nhân dạng" },
      { id: "21-28", word: "der Bart (số ít)", ipa: "deːɐ̯ baːɐ̯t", meaning: "Râu", example: "Er hat einen kurzen Bart.", exampleTranslation: "Anh ta có một bộ râu ngắn.", category: "Mô tả nhân dạng" },
      { id: "21-29", word: "die Bärte (số nhiều)", ipa: "diː ˈbɛːʁtə", meaning: "Các bộ râu", example: "Heutzutage tragen viele junge Männer Bärte.", exampleTranslation: "Ngày nay nhiều chàng trai trẻ để râu.", category: "Mô tả nhân dạng" },
      { id: "21-30", word: "schlank (tính từ)", ipa: "ʃlaŋk", meaning: "Mảnh khảnh, gầy", example: "Sie ist groß und sehr schlank.", exampleTranslation: "Cô ấy cao và rất mảnh mai.", category: "Mô tả nhân dạng" },

      // CHỦ ĐỀ IV: DỊCH VỤ & LASSEN
      { id: "21-31", word: "reparieren (nguyên thể)", ipa: "ʁepaˈʁiːʁən", meaning: "Sửa chữa", example: "Ich lasse mein Handy reparieren.", exampleTranslation: "Tôi thuê người sửa điện thoại.", category: "Dịch vụ & Lassen" },
      { id: "21-32", word: "hat repariert (quá khứ)", ipa: "hat ʁepaˈʁiːʁt", meaning: "Đã sửa", example: "Der Mechaniker hat mein Auto repariert.", exampleTranslation: "Người thợ máy đã sửa xong xe cho tôi.", category: "Dịch vụ & Lassen" },
      { id: "21-33", word: "schneiden (nguyên thể)", ipa: "ˈʃnaɪ̯dn̩", meaning: "Cắt", example: "Ich lasse mir die Haare schneiden.", exampleTranslation: "Tôi đi cắt tóc.", category: "Dịch vụ & Lassen" },
      { id: "21-34", word: "hat geschnitten (quá khứ)", ipa: "hat ɡəˈʃnɪtn̩", meaning: "Đã cắt", example: "Der Friseur hat meine Haare zu kurz geschnitten.", exampleTranslation: "Thợ cắt tóc đã cắt tóc tôi hơi ngắn quá.", category: "Dịch vụ & Lassen" },
      { id: "21-35", word: "reinigen (nguyên thể)", ipa: "ˈʁaɪ̯nɪɡn̩", meaning: "Làm sạch, giặt khô", example: "Lassen Sie den Mantel reinigen?", exampleTranslation: "Ngài có thuê giặt khô cái áo khoác không?", category: "Dịch vụ & Lassen" },
      { id: "21-36", word: "hat gereinigt (quá khứ)", ipa: "hat ɡəˈʁaɪ̯nɪçt", meaning: "Đã làm sạch", example: "Die Firma hat den Teppich gestern gereinigt.", exampleTranslation: "Công ty đã làm sạch tấm thảm hôm qua.", category: "Dịch vụ & Lassen" },
      { id: "21-37", word: "die Werkstatt (số ít)", ipa: "diː ˈvɛʁkˌʃtat", meaning: "Xưởng sửa chữa", example: "Mein Auto ist in der Werkstatt.", exampleTranslation: "Xe của tôi đang ở trong xưởng sửa chữa.", category: "Dịch vụ & Lassen" },
      { id: "21-38", word: "die Werkstätten (số nhiều)", ipa: "diː ˈvɛʁkˌʃtɛtn̩", meaning: "Các xưởng sửa chữa", example: "Viele Werkstätten sind am Wochenende geschlossen.", exampleTranslation: "Nhiều xưởng sửa chữa đóng cửa vào cuối tuần.", category: "Dịch vụ & Lassen" },
      { id: "21-39", word: "prüfen (nguyên thể)", ipa: "ˈpʁyːfən", meaning: "Kiểm tra, check", example: "Lassen Sie bitte das Öl prüfen.", exampleTranslation: "Vui lòng thuê thợ kiểm tra dầu máy giúp.", category: "Dịch vụ & Lassen" },
      { id: "21-40", word: "hat geprüft (quá khứ)", ipa: "hat ɡəˈpʁyːft", meaning: "Đã kiểm tra", example: "Der Experte hat die Bremsen geprüft.", exampleTranslation: "Chuyên gia đã kiểm tra phanh xe.", category: "Dịch vụ & Lassen" },

      // CHỦ ĐỀ V: TRẠNG TỪ & TỪ NỐI
      { id: "21-41", word: "plötzlich (trạng từ)", ipa: "ˈplœtslɪç", meaning: "Bỗng nhiên", example: "Plötzlich war das Licht aus.", exampleTranslation: "Bỗng nhiên đèn tắt.", category: "Trạng từ & Từ nối" },
      { id: "21-42", word: "zum Glück (trạng từ)", ipa: "tsʊm ɡlʏk", meaning: "May mắn thay", example: "Zum Glück hat man die Geldbörse gefunden.", exampleTranslation: "May mắn thay người ta đã tìm thấy ví tiền.", category: "Trạng từ & Từ nối" },
      { id: "21-43", word: "leider (trạng từ)", ipa: "ˈlaɪ̯dɐ", meaning: "Đáng tiếc, không may", example: "Leider habe ich keine Zeit.", exampleTranslation: "Đáng tiếc là tôi không có thời gian.", category: "Trạng từ & Từ nối" }
    ],
    grammar: [
      { id: "g21-1", word: "Welcher...?", ipa: "vɛlçɐ", meaning: "Người nào/Cái nào? (Giống đực/Nom)", example: "Welcher Mann ist der Täter?", exampleTranslation: "Người đàn ông nào là thủ phạm?", rule: "Từ hỏi xác định Welch-", note: "Đuôi thay đổi theo giống và cách (der/die/das)" },
      { id: "g21-2", word: "Welchen...?", ipa: "vɛlçn̩", meaning: "Người nào/Cái nào? (Giống đực/Akk - Tân ngữ)", example: "Welchen Ausweis haben Sie verloren?", exampleTranslation: "Bạn đã làm mất thẻ căn cước nào?", rule: "Từ hỏi xác định Welch-" },
      { id: "g21-3", word: "Welche...?", ipa: "vɛlçə", meaning: "Cái nào/Người nào? (Giống cái/Nom+Akk)", example: "Welche Tasche meinst du?", exampleTranslation: "Bạn muốn nói đến cái túi nào?", rule: "Từ hỏi xác định Welch-" },
      { id: "g21-4", word: "Welches...?", ipa: "vɛlçəs", meaning: "Cái nào? (Giống trung/Nom+Akk)", example: "Welches Auto gehört Ihnen?", exampleTranslation: "Chiếc xe nào thuộc về bạn?", rule: "Từ hỏi xác định Welch-" },
      { id: "g21-5", word: "dieser", ipa: "diːzɐ", meaning: "Người này/đó (Giống đực/Nom)", example: "Dieser Mann da!", exampleTranslation: "Chính là người đàn ông đó!", rule: "Đại từ chỉ định dieser & der/die/das" },
      { id: "g21-6", word: "der", ipa: "deːɐ̯", meaning: "Người này/đó (Giống đực/Nom)", example: "Der Mann da!", exampleTranslation: "Người đăng kia!", rule: "Đại từ chỉ định dieser & der/die/das" },
      { id: "g21-7", word: "diesen", ipa: "diːzn̩", meaning: "Người này/đó (Tân ngữ - Giống đực/Akk)", example: "Diesen meine ich!", exampleTranslation: "Tôi muốn nói đến người này!", rule: "Đại từ chỉ định dieser & der/die/das" },
      { id: "g21-8", word: "den", ipa: "deːn", meaning: "Người này/đó (Tân ngữ - Giống đực/Akk)", example: "Den meine ich!", exampleTranslation: "Tôi muốn nói đến người đó!", rule: "Đại từ chỉ định dieser & der/die/das" },
      { id: "g21-9", word: "lassen", ipa: "lasn̩", meaning: "Để/Nhờ/Thuê (Nguyên thể)", example: "Ich lasse mein Auto reparieren.", exampleTranslation: "Tôi thuê người sửa xe ô tô.", rule: "Động từ LASSEN", note: "Dùng khi bạn không tự làm mà thuê người khác (sửa xe, cắt tóc...)" },
      { id: "g21-10", word: "lässt", ipa: "lɛst", meaning: "Để/Nhờ/Thuê (Ngôi du / er / sie / es)", example: "Er lässt sein Auto reparieren.", exampleTranslation: "Anh ấy thuê người sửa xe.", rule: "Động từ LASSEN" },
      { id: "g21-11", word: "Was ist passiert?", ipa: "vas ɪst paˈsiːɐ̯t", meaning: "Chuyện gì đã xảy ra?", example: "Guten Tag, was ist passiert?", exampleTranslation: "Chào ngày mới, có chuyện gì đã xảy ra vậy?", rule: "Hội thoại mẫu (Tại đồn cảnh sát)" },
      { id: "g21-12", word: "Jemand hat...", ipa: "ˈjeːmant hat", meaning: "Ai đó đã...", example: "Jemand hat meine Tasche gestohlen!", exampleTranslation: "Ai đó đã lấy trộm túi của tôi!", rule: "Hội thoại mẫu (Tại đồn cảnh sát)" },
      { id: "g21-13", word: "Welche Tasche...?", ipa: "ˈvɛlçə ˈtaʃə", meaning: "Cái túi nào...?", example: "Welche Tasche meinen Sie?", exampleTranslation: "Ngài ý nói cái túi nào?", rule: "Hội thoại mẫu (Tại đồn cảnh sát)" },
      { id: "g21-14", word: "Diese Tasche da!", ipa: "ˈdiːzə ˈtaʃə daː", meaning: "Chính là cái túi này!", example: "Diese Tasche da! Die schwarze.", exampleTranslation: "Chính là cái túi này! Cái màu đen.", rule: "Hội thoại mẫu (Tại đồn cảnh sát)" }
    ]
  },
  {
    
    id: "l22",
    title: "Lektion 22",
    subtitle: "Từ vựng & Bài tập mở rộng",
    items: [
      // CHỦ ĐỀ I: PHƯƠNG TIỆN & GIAO THÔNG
      { id: "22-1", word: "der Wagen (số ít)", ipa: "deːɐ̯ ˈvaːɡn̩", meaning: "Xe ô tô, xe hơi", example: "Seit ich meinen Wagen verkauft habe, fahre ich mit dem Rad.", exampleTranslation: "Từ khi bán xe hơi, tôi đi bằng xe đạp.", category: "Phương tiện & Giao thông" },
      { id: "22-2", word: "die Wagen (số nhiều)", ipa: "diː ˈvaːɡn̩", meaning: "Những chiếc xe ô tô", example: "Die Wagen stehen vor dem Haus.", exampleTranslation: "Những chiếc xe hơi đang đỗ trước cửa nhà.", category: "Phương tiện & Giao thông" },
      { id: "22-3", word: "die Autobahn (số ít)", ipa: "diː ˈaʊ̯toˌbaːn", meaning: "Đường cao tốc", example: "Auf der Autobahn darf man schnell fahren.", exampleTranslation: "Trên đường cao tốc, người ta được phép lái xe nhanh.", category: "Phương tiện & Giao thông" },
      { id: "22-4", word: "die Autobahnen (số nhiều)", ipa: "diː ˈaʊ̯toˌbaːnən", meaning: "Các đường cao tốc", example: "Die Autobahnen in Deutschland sind sehr lang.", exampleTranslation: "Các đường cao tốc ở Đức rất dài.", category: "Phương tiện & Giao thông" },
      { id: "22-5", word: "die Tankstelle (số ít)", ipa: "diː ˈtaŋkˌʃtɛlə", meaning: "Trạm đổ xăng", example: "Wir müssen zur Tankstelle fahren, das Benzin ist fast alle.", exampleTranslation: "Chúng ta phải đến trạm xăng, xăng sắp hết sạch rồi.", category: "Phương tiện & Giao thông" },
      { id: "22-6", word: "die Tankstellen (số nhiều)", ipa: "diː ˈtaŋkˌʃtələn", meaning: "Các trạm đổ xăng", example: "Nachts haben nicht alle Tankstellen geöffnet.", exampleTranslation: "Vào ban đêm không phải trạm xăng nào cũng mở cửa.", category: "Phương tiện & Giao thông" },
      { id: "22-7", word: "die Kfz-Werkstatt (số ít)", ipa: "diː kaːʔɛfˈtsɛt ˈvɛʁkʃtat", meaning: "Xưởng sửa ô tô", example: "Mein Auto ist kaputt, es steht in der Kfz-Werkstatt.", exampleTranslation: "Xe tôi bị hỏng, nó đang ở xưởng sửa chữa ô tô.", category: "Phương tiện & Giao thông" },
      { id: "22-8", word: "die Kfz-Werkstätten (số nhiều)", ipa: "diː kaːʔɛfˈtsɛt ˈvɛʁkʃtɛtn̩", meaning: "Các xưởng sửa ô tô", example: "Wir haben hier zwei gute Kfz-Werkstätten.", exampleTranslation: "Chúng tôi có hai xưởng sửa xe tốt ở đây.", category: "Phương tiện & Giao thông" },
      { id: "22-9", word: "der Motor (số ít)", ipa: "deːɐ̯ moˈtoːɐ̯", meaning: "Động cơ", example: "Der Motor macht komische Geräusche.", exampleTranslation: "Động cơ phát ra những tiếng động lạ.", category: "Phương tiện & Giao thông" },
      { id: "22-10", word: "die Motoren (số nhiều)", ipa: "diː moˈtoːʁən", meaning: "Các động cơ", example: "Diese neuen Motoren sind umweltfreundlich.", exampleTranslation: "Những động cơ mới này rất thân thiện với môi trường.", category: "Phương tiện & Giao thông" },
      { id: "22-11", word: "die Reifenpanne (số ít)", ipa: "diː ˈʁaɪ̯fn̩ ˌpanə", meaning: "Sự cố thủng lốp", example: "Ich hatte auf dem Weg eine Reifenpanne.", exampleTranslation: "Tôi đã bị thủng lốp trên đường đi.", category: "Phương tiện & Giao thông" },
      { id: "22-12", word: "die Reifenpannen (số nhiều)", ipa: "diː ˈʁaɪ̯fn̩ ˌpanən", meaning: "Các sự cố thủng lốp", example: "Reifenpannen passieren oft auf schlechten Straßen.", exampleTranslation: "Sự cố thủng lốp thường xảy ra trên những con đường xấu.", category: "Phương tiện & Giao thông" },
      { id: "22-13", word: "tanken (nguyên thể)", ipa: "ˈtaŋkən", meaning: "Đổ xăng", example: "Wo kann ich hier günstig tanken?", exampleTranslation: "Tôi có thể đổ xăng giá rẻ ở đâu quanh đây?", category: "Phương tiện & Giao thông" },
      { id: "22-14", word: "hat getankt (quá khứ)", ipa: "hat ɡəˈtaŋkt", meaning: "Đã đổ xăng", example: "Ich habe mein Auto gestern voll getankt.", exampleTranslation: "Tôi đã đổ đầy bình xăng hôm qua.", category: "Phương tiện & Giao thông" },
      { id: "22-15", word: "überqueren (nguyên thể)", ipa: "ˌyːbɐˈkvɛːʁən", meaning: "Băng qua", example: "Wir überqueren die Donau mit einer Fähre.", exampleTranslation: "Chúng tôi băng qua sông Danube bằng một con phà.", category: "Phương tiện & Giao thông" },
      { id: "22-16", word: "hat überquert (quá khứ)", ipa: "hat ˌyːbɐˈkvɛːɐ̯t", meaning: "Đã băng qua", example: "Wir haben die Grenze um Mitternacht überquert.", exampleTranslation: "Chúng tôi đã băng qua biên giới vào lúc nửa đêm.", category: "Phương tiện & Giao thông" },
      // TỪ VỰNG BỔ SUNG - PHƯƠNG TIỆN & GIAO THÔNG
      { id: "22-101", word: "die Fahrkarte, -n", ipa: "", meaning: "Vé xe", example: "Ich kaufe eine Fahrkarte.", exampleTranslation: "Tôi mua vé.", category: "Phương tiện & Giao thông" },
      { id: "22-102", word: "zurückfahren", ipa: "", meaning: "Quay về (bằng xe)", example: "Ich fahre nach Hause zurück.", exampleTranslation: "Tôi lái xe về nhà.", category: "Phương tiện & Giao thông" },
      { id: "22-103", word: "unterwegs", ipa: "", meaning: "Đang trên đường", example: "Ich bin unterwegs.", exampleTranslation: "Tôi đang trên đường.", category: "Phương tiện & Giao thông" },
      { id: "22-104", word: "unterwegs sein", ipa: "", meaning: "Đang di chuyển", example: "Ich bin oft unterwegs.", exampleTranslation: "Tôi thường hay di chuyển.", category: "Phương tiện & Giao thông" },

      // CHỦ ĐỀ II: CÁC LIÊN TỪ & TRẠNG TỪ
      { id: "22-17", word: "seit / seitdem (liên từ)", ipa: "zaɪ̯t / zaɪ̯tˈdeːm", meaning: "Kể từ khi", example: "Seitdem er in Berlin wohnt, ist er viel glücklicher.", exampleTranslation: "Kể từ khi anh ấy sống ở Berlin, anh ấy hạnh phúc hơn nhiều.", category: "Liên từ, Trạng từ & Tính từ" },
      { id: "22-18", word: "plötzlich (trạng từ)", ipa: "ˈplœtslɪç", meaning: "Bỗng nhiên, đột ngột", example: "Plötzlich blieb das Auto stehen.", exampleTranslation: "Bỗng nhiên chiếc xe dừng lại.", category: "Liên từ, Trạng từ & Tính từ" },
      { id: "22-19", word: "insgesamt (trạng từ)", ipa: "ɪnsɡəˈzamt", meaning: "Tổng cộng", example: "Wir haben insgesamt bốn Wochen Urlaub.", exampleTranslation: "Tổng cộng chúng tôi có 4 tuần nghỉ lễ.", category: "Liên từ, Trạng từ & Tính từ" },
      { id: "22-20", word: "ständig (trạng từ)", ipa: "ˈʃtɛndɪç", meaning: "Liên tục, thường xuyên", example: "Es regnet ständig.", exampleTranslation: "Trời mưa liên tục.", category: "Liên từ, Trạng từ & Tính từ" },
      // TỪ VỰNG BỔ SUNG - TÍNH TỪ & TRẠNG TỪ
      { id: "22-105", word: "außerhalb", ipa: "", meaning: "Bên ngoài", example: "Ich wohne außerhalb der Stadt.", exampleTranslation: "Tôi sống ở bên ngoài thành phố.", category: "Liên từ, Trạng từ & Tính từ" },
      { id: "22-106", word: "höchstens", ipa: "", meaning: "Nhiều nhất", example: "Ich habe höchstens 10 Euro.", exampleTranslation: "Tôi có nhiều nhất 10 Euro.", category: "Liên từ, Trạng từ & Tính từ" },
      { id: "22-107", word: "klar", ipa: "", meaning: "Rõ ràng", example: "Das ist klar.", exampleTranslation: "Điều đó rõ ràng.", category: "Liên từ, Trạng từ & Tính từ" },
      { id: "22-108", word: "na klar", ipa: "", meaning: "Tất nhiên rồi", example: "Hilfst du mir? – Na klar!", exampleTranslation: "Giúp tôi không? Tất nhiên rồi!", category: "Liên từ, Trạng từ & Tính từ" },

      // CHỦ ĐỀ III: HÀNH CHÍNH & CÔNG NGHỆ (TỪ MỚI)
      { id: "22-109", word: "die Anmeldung, -en", ipa: "", meaning: "Sự đăng ký", example: "Ich mache eine Anmeldung im Internet.", exampleTranslation: "Tôi đăng ký trên Internet.", category: "Hành chính & Công nghệ" },
      { id: "22-110", word: "die Chipkarte, -n", ipa: "", meaning: "Thẻ chip", example: "Ich habe eine Chipkarte.", exampleTranslation: "Tôi có một thẻ chip.", category: "Hành chính & Công nghệ" },
      { id: "22-111", word: "die Daten (Pl.)", ipa: "", meaning: "Dữ liệu", example: "Ich gebe meine Daten ein.", exampleTranslation: "Tôi nhập dữ liệu của mình.", category: "Hành chính & Công nghệ" },
      { id: "22-112", word: "der Zugangscode, -s", ipa: "", meaning: "Mã truy cập", example: "Ich brauche den Zugangscode.", exampleTranslation: "Tôi cần mã truy cập.", category: "Hành chính & Công nghệ" },
      { id: "22-113", word: "das Passwort, -¨er", ipa: "", meaning: "Mật khẩu", example: "Mein Passwort ist einfach.", exampleTranslation: "Mật khẩu của tôi đơn giản.", category: "Hành chính & Công nghệ" },
      { id: "22-114", word: "der Vertrag, -¨e", ipa: "", meaning: "Hợp đồng", example: "Ich unterschreibe den Vertrag.", exampleTranslation: "Tôi ký hợp đồng.", category: "Hành chính & Công nghệ" },
      { id: "22-115", word: "die Verbindung, -en", ipa: "", meaning: "Kết nối", example: "Die Verbindung ist gut.", exampleTranslation: "Kết nối tốt.", category: "Hành chính & Công nghệ" },
      { id: "22-116", word: "anklicken", ipa: "", meaning: "Nhấp chuột", example: "Ich klicke den Button an.", exampleTranslation: "Tôi nhấp nút.", category: "Hành chính & Công nghệ" },
      { id: "22-117", word: "ausfüllen", ipa: "", meaning: "Điền (form)", example: "Ich fülle das Formular aus.", exampleTranslation: "Tôi điền form.", category: "Hành chính & Công nghệ" },
      { id: "22-118", word: "bestätigen", ipa: "", meaning: "Xác nhận", example: "Ich bestätige die E-Mail.", exampleTranslation: "Tôi xác nhận email.", category: "Hành chính & Công nghệ" },

      // CHỦ ĐỀ IV: XÃ HỘI & MÔI TRƯỜNG (TỪ MỚI)
      { id: "22-119", word: "die Umwelt", ipa: "", meaning: "Môi trường", example: "Wir schützen die Umwelt.", exampleTranslation: "Chúng ta bảo vệ môi trường.", category: "Xã hội & Môi trường" },
      { id: "22-120", word: "umweltfreundlich", ipa: "", meaning: "Thân thiện môi trường", example: "Das Auto ist umweltfreundlich.", exampleTranslation: "Chiếc xe thân thiện với môi trường.", category: "Xã hội & Môi trường" },
      { id: "22-121", word: "das Mitglied, -er", ipa: "", meaning: "Thành viên", example: "Ich bin Mitglied im Club.", exampleTranslation: "Tôi là thành viên.", category: "Xã hội & Môi trường" },
      { id: "22-122", word: "die Organisation, -en", ipa: "", meaning: "Tổ chức", example: "Die Organisation hilft Menschen.", exampleTranslation: "Tổ chức giúp mọi người.", category: "Xã hội & Môi trường" },
      { id: "22-123", word: "die Steuer, -n", ipa: "", meaning: "Thuế", example: "Ich zahle Steuer.", exampleTranslation: "Tôi trả thuế.", category: "Xã hội & Môi trường" },
      
      // CHỦ ĐỀ V: TỪ VỰNG KHÁC TRONG BÀI
      { id: "22-21", word: "die Abfahrt (số ít)", ipa: "diː ˈapˌfaːɐ̯t", meaning: "Sự khởi hành", example: "Kurz nach der Abfahrt hatten wir ein Problem.", exampleTranslation: "Ngay sau khi khởi hành chúng tôi đã gặp vấn đề.", category: "Từ vựng khác" },
      { id: "22-22", word: "die Abfahrten (số nhiều)", ipa: "diː ˈapˌfaːɐ̯tn̩", meaning: "Các chuyến khởi hành", example: "Die Abfahrten der Züge stehen auf dem Fahrplan.", exampleTranslation: "Các chuyến tàu khởi hành được ghi trên lịch trình.", category: "Từ vựng khác" },
      { id: "22-23", word: "die Ankunft (số ít)", ipa: "diː ˈanˌkʊnft", meaning: "Sự đến nơi", example: "Bei der Ankunft im Hotel waren wir sehr müde.", exampleTranslation: "Khi đến khách sạn chúng tôi đã rất mệt.", category: "Từ vựng khác" },
      { id: "22-24", word: "die Ankünfte (số nhiều)", ipa: "diː ˈanˌkʏnftə", meaning: "Các chuyến đến nơi", example: "Sie können die Ankünfte online überprüfen.", exampleTranslation: "Bạn có thể kiểm tra danh sách các chuyến đến nơi trực tuyến.", category: "Từ vựng khác" },
      { id: "22-25", word: "wechseln (nguyên thể)", ipa: "ˈvɛksl̩n", meaning: "Thay đổi, thay thế", example: "Felix muss den Reifen wechseln.", exampleTranslation: "Felix phải thay lốp xe.", category: "Từ vựng khác" },
      { id: "22-26", word: "hat gewechselt (quá khứ)", ipa: "hat ɡəˈvɛksl̩t", meaning: "Đã thay thế", example: "Er hat nach dem Unfall den Reifen gewechselt.", exampleTranslation: "Sau vụ tai nạn anh ấy đã thay lốp xe.", category: "Từ vựng khác" },
      { id: "22-27", word: "sich erinnern (nguyên thể)", ipa: "zɪç ɛɐ̯ˈɪnɐn", meaning: "Nhớ lại", example: "Kannst du dich noch an die Reise erinnern?", exampleTranslation: "Bạn có còn nhớ về chuyến đi đó không?", category: "Từ vựng khác" },
      { id: "22-28", word: "hat sich erinnert (quá khứ)", ipa: "hat zɪç ɛɐ̯ˈɪnɐt", meaning: "Đã nhớ lại", example: "Er hat sich endlich an meinen Namen erinnert.", exampleTranslation: "Cuối cùng anh ấy cũng nhớ ra tên tôi.", category: "Từ vựng khác" },
      { id: "22-29", word: "vorsichtig (tính từ)", ipa: "ˈfoːɐ̯ˌzɪçtɪç", meaning: "Cẩn thận", example: "Man muss auf den Straßen vorsichtig fahren.", exampleTranslation: "Người ta phải lái xe cẩn thận trên đường.", category: "Từ vựng khác" },
      { id: "22-30", word: "das Feld (số ít)", ipa: "das fɛlt", meaning: "Cánh đồng", example: "Auf dem Feld wird noch gearbeitet.", exampleTranslation: "Cánh đồng vẫn đang được canh tác.", category: "Từ vựng khác" },
      { id: "22-31", word: "die Felder (số nhiều)", ipa: "diː ˈfɛldɐ", meaning: "Các cánh đồng", example: "Im Sommer sind die Felder wunderschön grün.", exampleTranslation: "Vào mùa hè các cánh đồng xanh tươi tuyệt đẹp.", category: "Từ vựng khác" },
      
      // TỪ VỰNG BỔ SUNG - KHÁC
      { id: "22-124", word: "der Buchstabe, -n", ipa: "", meaning: "Chữ cái", example: "Dieser Buchstabe ist schwierig.", exampleTranslation: "Chữ cái này khó.", category: "Từ vựng khác" },
      { id: "22-125", word: "die Zahl, -en", ipa: "", meaning: "Con số", example: "Die Zahl ist groß.", exampleTranslation: "Con số lớn.", category: "Từ vựng khác" },
      { id: "22-126", word: "das Ziel, -e", ipa: "", meaning: "Mục tiêu / Đích", example: "Mein Ziel ist Deutsch lernen.", exampleTranslation: "Mục tiêu của tôi là học tiếng Đức.", category: "Từ vựng khác" },
      { id: "22-127", word: "wählen", ipa: "", meaning: "Chọn / Bầu", example: "Ich wähle eine Option.", exampleTranslation: "Tôi chọn một lựa chọn.", category: "Từ vựng khác" },
      { id: "22-128", word: "besitzen", ipa: "", meaning: "Sở hữu", example: "Ich besitze ein Auto.", exampleTranslation: "Tôi sở hữu một chiếc xe.", category: "Từ vựng khác" },
      { id: "22-129", word: "erreichen", ipa: "", meaning: "Đạt được", example: "Ich erreiche mein Ziel.", exampleTranslation: "Tôi đạt được mục tiêu.", category: "Từ vựng khác" },
      { id: "22-130", word: "mieten", ipa: "", meaning: "Thuê", example: "Ich miete eine Wohnung.", exampleTranslation: "Tôi thuê một căn hộ.", category: "Từ vựng khác" },
      { id: "22-131", word: "teilen", ipa: "", meaning: "Chia sẻ", example: "Ich teile das Essen.", exampleTranslation: "Tôi chia sẻ thức ăn.", category: "Từ vựng khác" },
      { id: "22-132", word: "sich vorstellen", ipa: "", meaning: "Giới thiệu bản thân", example: "Ich stelle mich vor.", exampleTranslation: "Tôi tự giới thiệu.", category: "Từ vựng khác" },
      { id: "22-133", word: "zurückbringen", ipa: "", meaning: "Mang trả lại", example: "Ich bringe das Buch zurück.", exampleTranslation: "Tôi mang sách trả lại.", category: "Từ vựng khác" }
    ],
    grammar: [
      { id: "g22-1", word: "seit / seitdem", ipa: "zaɪ̯t / zaɪ̯tˈdeːm", meaning: "Kể từ khi (Liên từ)", example: "Seit ich kein Auto habe, fahre ich mit dem Bus.", exampleTranslation: "Kể từ khi không có ô tô, tôi đi bằng xe buýt.", rule: "Câu phụ với Seit / Seitdem", note: "Động từ đã chia luôn đứng ở CUỐI CÂU." },
      { id: "g22-2", word: "seitdem", ipa: "zaɪ̯tˈdeːm", meaning: "Kể từ khi (Nhấn mạnh hơn)", example: "Ich bin fitter, seitdem ich jeden Tag radfahre.", exampleTranslation: "Tôi khỏe hơn kể từ khi tôi đạp xe mỗi ngày.", rule: "Câu phụ với Seit / Seitdem" },
      { id: "g22-3", word: "Seit es regnet...", ipa: "zaɪ̯t ɛs ˈʁeːɡnət", meaning: "Nếu câu phụ đứng đầu", example: "Seit es regnet, bleiben wir zu Hause.", exampleTranslation: "Kể từ khi trời mưa, chúng tôi ở nhà.", rule: "Câu phụ với Seit / Seitdem", note: "Động từ của câu chính phải đứng ngay sau dấu phẩy." },
      { id: "g22-4", word: "der Wagen (số ít)", ipa: "vaːɡn̩", meaning: "Xe hơi (ô tô)", example: "Seit ich meinen Wagen habe, bin ich flexibel.", exampleTranslation: "Từ khi tôi có xe hơi, tôi trở nên linh hoạt.", rule: "Phương tiện & Hạ tầng" },
      { id: "g22-5", word: "die Autobahn (số ít)", ipa: "aʊ̯toˌbaːn", meaning: "Đường cao tốc", example: "Ich fahre không thích lái xe trên đường cao tốc.", exampleTranslation: "Tôi không thích lái xe trên đường cao tốc.", rule: "Phương tiện & Hạ tầng" },
      { id: "g22-6", word: "das Benzin", ipa: "bɛnˈtsin", meaning: "Xăng", example: "Seitdem Benzin teuer ist, spare ich Geld.", exampleTranslation: "Kể từ khi xăng đắt đỏ, tôi tiết kiệm tiền.", rule: "Sự cố & Sửa chữa" },
      { id: "g22-7", word: "überqueren", ipa: "yːbɐˈkvɛːʁən", meaning: "Băng qua (đường, sông)", example: "Wir überqueren die Donau mit der Fähre.", exampleTranslation: "Chúng tôi băng qua sông Danube bằng phà.", rule: "Sự cố & Sửa chữa" },
      { id: "g22-8", word: "Warum...?", ipa: "vaˈʁʊm", meaning: "Tại sao...?", example: "Warum kommst du so spät zur Arbeit?", exampleTranslation: "Sao bạn đến chỗ làm muộn thế?", rule: "Hội thoại mẫu (Sự cố trên đường)" },
      { id: "g22-9", word: "Ich hatte...", ipa: "ɪç ˈhatə", meaning: "Tôi đã bị...", example: "Ich hatte eine Reifenpanne auf der Autobahn!", exampleTranslation: "Tôi bị thủng lốp trên đường cao tốc!", rule: "Hội thoại mẫu (Sự cố trên đường)" },
      { id: "g22-10", word: "Seitdem...", ipa: "zaɪ̯tˈdeːm", meaning: "Kể từ khi...", example: "Ja. Seitdem der Motor komische Geräusche macht, fahre ich sehr vorsichtig.", exampleTranslation: "Ừ. Kể từ khi động cơ phát ra tiếng lạ, tôi lái rất cẩn thận.", rule: "Hội thoại mẫu (Sự cố trên đường)" }
    ]
  },
  {
    id: "l23",
    title: "Lektion 23",
    subtitle: "Der Beruf, der zu mir passt",
    items: [
      // TỪ VỰNG PDF Trang 89 Lektion 23 - Trường học và Đào tạo
      { id: "23-p1", word: "das Abitur (sg.)", ipa: "das abɪˈtuːɐ̯", meaning: "Bằng tú tài, tốt nghiệp PTTH (Đức)", example: "Ich mache dieses Jahr mein Abitur.", exampleTranslation: "Năm nay tôi thi tú tài.", category: "Schule und Ausbildung" },
      { id: "23-p2", word: "die Berufsschule, -n", ipa: "diː bəˈʁuːfsˌʃuːlə", meaning: "Trường dạy nghề", example: "Ich gehe in die Berufsschule.", exampleTranslation: "Tôi đi học ở trường dạy nghề.", category: "Schule und Ausbildung" },
      { id: "23-p3", word: "die Fachhochschule, -n", ipa: "diː ˈfaxhoːxˌʃuːlə", meaning: "Trường đại học khoa học ứng dụng", example: "Er studiert an einer Fachhochschule.", exampleTranslation: "Anh ấy học ở đại học khoa học ứng dụng.", category: "Schule und Ausbildung" },
      { id: "23-p4", word: "die Gesamtschule, -n", ipa: "diː ɡəˈzamtˌʃuːlə", meaning: "Trường trung học tổng hợp", example: "Mein Kind geht auf eine Gesamtschule.", exampleTranslation: "Con tôi học trường trung học tổng hợp.", category: "Schule und Ausbildung" },
      { id: "23-p5", word: "die Grundschule, -n", ipa: "diː ˈɡʁʊntˌʃuːlə", meaning: "Trường tiểu học", example: "Ich war in der Grundschule hier.", exampleTranslation: "Tôi đã học trường tiểu học ở đây.", category: "Schule und Ausbildung" },
      { id: "23-p6", word: "das Gymnasium, Gymnasien", ipa: "das ɡʏmˈnaːzi̯ʊm", meaning: "Trường trung học phổ thông", example: "Er geht aufs Gymnasium.", exampleTranslation: "Cậu ấy đi học Gymnasium.", category: "Schule und Ausbildung" },
      { id: "23-p7", word: "die Hauptschule, -n", ipa: "diː ˈhaʊ̯ptˌʃuːlə", meaning: "Trường trung học cơ bản", example: "Sie besucht die Hauptschule.", exampleTranslation: "Cô ấy học trường trung học cơ bản.", category: "Schule und Ausbildung" },
      { id: "23-p8", word: "die Lehre, -n", ipa: "diː ˈleːʁə", meaning: "Sự học nghề", example: "Er macht eine Lehre.", exampleTranslation: "Anh ấy đang học nghề.", category: "Schule und Ausbildung" },
      { id: "23-p9", word: "die Note, -n", ipa: "diː ˈnoːtə", meaning: "Điểm số", example: "Ich habe gute Noten.", exampleTranslation: "Tôi có điểm số tốt.", category: "Schule und Ausbildung" },
      { id: "23-p10", word: "die Realschule, -n", ipa: "diː ʁeˈaːlˌʃuːlə", meaning: "Trường trung học thực hành", example: "Ich war in der Realschule.", exampleTranslation: "Tôi đã học trường Realschule.", category: "Schule und Ausbildung" },
      { id: "23-p11", word: "das Zeugnis, -se", ipa: "das ˈtsɔʏ̯knɪs", meaning: "Bảng điểm/Học bạ", example: "Ich bekomme mein Zeugnis.", exampleTranslation: "Tôi nhận được bảng điểm của mình.", category: "Schule und Ausbildung" },
      { id: "23-p12", word: "mündlich", ipa: "ˈmʏntlɪç", meaning: "Bằng miệng (thi vấn đáp)", example: "Die Prüfung ist mündlich.", exampleTranslation: "Bài kiểm tra là thi vấn đáp.", category: "Schule und Ausbildung" },
      { id: "23-p13", word: "schriftlich", ipa: "ˈʃʁɪftlɪç", meaning: "Bằng văn bản (thi viết)", example: "Ich schreibe eine schriftliche Prüfung.", exampleTranslation: "Tôi làm một bài thi viết.", category: "Schule und Ausbildung" },
      
      // TỪ VỰNG PDF - Nghề nghiệp (Beruf)
      { id: "23-p14", word: "die Bewerbung, -en", ipa: "diː bəˈvɛʁbʊŋ", meaning: "Đơn xin việc", example: "Ich schreibe eine Bewerbung.", exampleTranslation: "Tôi viết một đơn xin việc.", category: "Beruf" },
      { id: "23-p15", word: "das Einkommen, -", ipa: "das ˈaɪ̯nˌkɔmən", meaning: "Thu nhập", example: "Mein Einkommen ist nicht hoch.", exampleTranslation: "Thu nhập của tôi không cao.", category: "Beruf" },
      { id: "23-p16", word: "die Kündigung, -en", ipa: "diː ˈkʏndɪɡʊŋ", meaning: "Đơn từ chức/Sự thôi việc", example: "Ich bekomme eine Kündigung.", exampleTranslation: "Tôi nhận được quyết định nghỉ việc.", category: "Beruf" },
      { id: "23-p17", word: "der Praktikant, -en", ipa: "deːɐ̯ pʁaktiˈkant", meaning: "Thực tập sinh", example: "Ich bin Praktikant.", exampleTranslation: "Tôi là thực tập sinh.", category: "Beruf" },
      { id: "23-p18", word: "die Tätigkeit, -en", ipa: "diː ˈtɛːtɪçkaɪ̯t", meaning: "Hoạt động/Công việc", example: "Meine Tätigkeit ist interessant.", exampleTranslation: "Công việc của tôi rất thú vị.", category: "Beruf" },
      { id: "23-p19", word: "sich bewerben (um) / er bewirbt sich / hat sich beworben", ipa: "zɪç bəˈvɛʁbn̩", meaning: "Ứng tuyển", example: "Ich bewerbe mich um eine Stelle.", exampleTranslation: "Tôi ứng tuyển vào một vị trí.", category: "Beruf" },
      { id: "23-p20", word: "kündigen / hat gekündigt", ipa: "ˈkʏndɪɡn̩", meaning: "Nghỉ việc/Chấm dứt hợp đồng", example: "Ich kündige meinen Job.", exampleTranslation: "Tôi sẽ nghỉ việc.", category: "Beruf" },

      // TỪ VỰNG PDF - Các từ quan trọng khác (Weitere wichtige Wörter)
      { id: "23-p21", word: "der Elektroinstallateur, -e", ipa: "deːɐ̯ eˈlɛktʁoɪnstalatuːɐ̯", meaning: "Thợ lắp đặt điện", example: "Er ist Elektroinstallateur.", exampleTranslation: "Anh ấy là thợ điện.", category: "Weitere wichtige Wörter" },
      { id: "23-p22", word: "die Laune, -n", ipa: "diː ˈlaʊ̯nə", meaning: "Tâm trạng", example: "Ich habe heute gute Laune.", exampleTranslation: "Hôm nay tôi có tâm trạng tốt.", category: "Weitere wichtige Wörter" },
      { id: "23-p23", word: "das Thema, Themen", ipa: "das ˈteːma", meaning: "Chủ đề", example: "Das ist ein gutes Thema.", exampleTranslation: "Đó là một chủ đề hay.", category: "Weitere wichtige Wörter" },
      { id: "23-p24", word: "kopieren / hat kopiert", ipa: "koˈpiːʁən", meaning: "Sao chép/Photocopy", example: "Ich kopiere das Dokument.", exampleTranslation: "Tôi sao chép tài liệu.", category: "Weitere wichtige Wörter" },
      { id: "23-p25", word: "stören / hat gestört", ipa: "ˈʃtøːʁən", meaning: "Làm phiền", example: "Das stört mich.", exampleTranslation: "Điều đó làm phiền tôi.", category: "Weitere wichtige Wörter" },
      { id: "23-p26", word: "vorhaben / hat vorgehabt", ipa: "ˈfoːɐ̯ˌhaːbn̩", meaning: "Dự định", example: "Ich habe viel vor.", exampleTranslation: "Tôi có nhiều dự định.", category: "Weitere wichtige Wörter" },
      { id: "23-p27", word: "Das habe ich vor.", ipa: "das ˈhaːbə ɪç ˈfoːɐ̯", meaning: "Tôi dự định làm vậy.", example: "Das habe ich fest vor.", exampleTranslation: "Tôi dự định chắc chắn sẽ làm vậy.", category: "Weitere wichtige Wörter" },
      { id: "23-p28", word: "eigentlich", ipa: "ˈaɪ̯ɡn̩tlɪç", meaning: "Thật ra thì..", example: "Eigentlich bin ich müde.", exampleTranslation: "Thật ra thì tôi cũng đang mệt.", category: "Weitere wichtige Wörter" },
      { id: "23-p29", word: "freiwillig", ipa: "ˈfʁaɪ̯ˌvɪlɪç", meaning: "Tự nguyện", example: "Ich mache das freiwillig.", exampleTranslation: "Tôi tự nguyện làm việc đó.", category: "Weitere wichtige Wörter" },
      { id: "23-p30", word: "genug", ipa: "ɡəˈnuːk", meaning: "Đủ", example: "Ich habe genug Geld.", exampleTranslation: "Tôi có đủ tiền.", category: "Weitere wichtige Wörter" },
      { id: "23-p31", word: "neulich", ipa: "ˈnɔɪ̯lɪç", meaning: "Gần đây", example: "Ich habe ihn neulich gesehen.", exampleTranslation: "Gần đây tôi có nhìn thấy anh ấy.", category: "Weitere wichtige Wörter" },
      { id: "23-p32", word: "vorgestern", ipa: "ˈfoːɐ̯ˌɡɛstɐn", meaning: "Hôm kia", example: "Ich war vorgestern krank.", exampleTranslation: "Hôm kia tôi đã bị ốm.", category: "Weitere wichtige Wörter" }
    ],
    grammar: [
      { id: "g23-1", word: "der", ipa: "deːɐ̯", meaning: "Người mà/Cái mà (Làm chủ ngữ - Giống đực)", example: "Ein Koch ist ein Mann, der gut kochen kann.", exampleTranslation: "Đầu bếp là người (mà) có thể nấu ăn ngon.", rule: "Mệnh đề quan hệ (Relativsatz) - Nominativ", note: "Động từ luôn đứng cuối câu mệnh đề quan hệ." },
      { id: "g23-2", word: "die", ipa: "diː", meaning: "Người mà/Cái mà (Làm chủ ngữ - Giống cái)", example: "Das ist die Erzieherin, die mit Kindern spielt.", exampleTranslation: "Đó là cô giáo mầm non (người mà) chơi với trẻ em.", rule: "Mệnh đề quan hệ (Relativsatz) - Nominativ" },
      { id: "g23-3", word: "das", ipa: "das", meaning: "Điều mà/Cái mà (Làm chủ ngữ - Giống trung)", example: "Das ist ein Praktikum, das mir gefällt.", exampleTranslation: "Đó là một kỳ thực tập (cái mà) tôi thích.", rule: "Mệnh đề quan hệ (Relativsatz) - Nominativ" },
      { id: "g23-4", word: "den", ipa: "deːn", meaning: "Người mà/Cái mà (Làm tân ngữ - Giống đực)", example: "Das ist der Job, den ich liebe.", exampleTranslation: "Đó là cái nghề (cái mà) tôi yêu thích.", rule: "Mệnh đề quan hệ (Relativsatz) - Akkusativ", note: "Hầu như giống hệt quán từ xác định, chỉ thay đổi ở giống đực Akkusativ (der -> den)." },
      { id: "g23-5", word: "die (Akk)", ipa: "diː", meaning: "Người mà/Cái mà (Làm tân ngữ - Giống cái)", example: "Das ist die Arbeit, die tôi gerne mache.", exampleTranslation: "Đó là công việc (cái mà) tôi thích làm.", rule: "Mệnh đề quan hệ (Relativsatz) - Akkusativ" },
      { id: "g23-6", word: "das (Akk)", ipa: "das", meaning: "Điều mà/Cái mà (Làm tân ngữ - Giống trung)", example: "Das ist das Büro, das tôi mượn.", exampleTranslation: "Đó là văn phòng (cái mà) tôi mượn.", rule: "Mệnh đề quan hệ (Relativsatz) - Akkusativ" },
      { id: "g23-7", word: "passen zu (+ Dat)", ipa: "pasn̩ tsuː", meaning: "Phù hợp với", example: "Der Beruf passt zu mir.", exampleTranslation: "Nghề nghiệp này phù hợp với tôi.", rule: "Cấu trúc định nghĩa" },
      { id: "g23-8", word: "der Berater", ipa: "bəˈʁaːtɐ", meaning: "Người tư vấn", example: "Ein Berater ist ein Mann, der Kunden hilft.", exampleTranslation: "Người tư vấn là người giúp đỡ khách hàng.", rule: "Cấu trúc định nghĩa" },
      { id: "g23-9", word: "das Gehalt", ipa: "ɡəˈhalt", meaning: "Tiền lương", example: "Ich tìm một nghề, der một cái Gehalt cao có.", exampleTranslation: "Tôi tìm một nghề có mức lương cao.", rule: "Cấu trúc định nghĩa" },
      { id: "g23-10", word: "Warum möchten Sie...?", ipa: "vaˈʁʊm ˈmœçtn̩ ziː", meaning: "Tại sao bạn muốn...?", example: "Warum möchten Sie als Programmierer arbeiten?", exampleTranslation: "Tại sao bạn muốn làm lập trình viên?", rule: "Hội thoại mẫu (Tìm việc làm)" },
      { id: "g23-11", word: "kreativ ist", ipa: "kʁeaˈtif ɪst", meaning: "(Mà) rất sáng tạo", example: "Das ist ein Beruf, der sehr kreativ ist.", exampleTranslation: "Đó là một nghề (cái mà) rất sáng tạo.", rule: "Hội thoại mẫu (Tìm việc làm)" },
      { id: "g23-12", word: "đó là cái Job...", ipa: "das ɪst deːɐ̯ dʒɔp", meaning: "Đó là công việc...", example: "Ich weiß. Aber das ist der Job, den ich schon immer machen wollte.", exampleTranslation: "Tôi biết. Nhưng đó là công việc (cái mà) tôi luôn muốn làm.", rule: "Hội thoại mẫu (Tìm việc làm)" }
    ]
  },
  {
    id: "l24",
    title: "Lektion 24",
    subtitle: "Wie sah dein Alltag aus?",
    items: [
      { id: "24-pdf-1", word: "der Abflug - die Abflüge", ipa: "deːɐ̯ ˈapˌfluːk", meaning: "chuyến bay khởi hành", example: "Der Abflug ist um 10 Uhr.", exampleTranslation: "Chuyến bay khởi hành lúc 10 giờ.", category: "Danh từ" },
      { id: "24-pdf-2", word: "die Ankunft", ipa: "diː ˈankʊnft", meaning: "sự đến nơi", example: "Die Ankunft ist um 18 Uhr.", exampleTranslation: "Sự đến nơi là lúc 18 giờ.", category: "Danh từ" },
      { id: "24-pdf-3", word: "der Anschluss - die Anschlüsse", ipa: "deːɐ̯ ˈanʃlʊs", meaning: "chuyến nối", example: "Ich habe keinen Anschluss.", exampleTranslation: "Tôi không có chuyến bay/tàu nối.", category: "Danh từ" },
      { id: "24-pdf-4", word: "der Pass - die Pässe", ipa: "deːɐ̯ pas", meaning: "hộ chiếu", example: "Ich habe meinen Pass dabei.", exampleTranslation: "Tôi mang theo hộ chiếu.", category: "Danh từ" },
      { id: "24-pdf-5", word: "das Visum - die Visa", ipa: "das ˈviːzʊm", meaning: "visa", example: "Ich brauche ein Visum.", exampleTranslation: "Tôi cần một visa.", category: "Danh từ" },
      { id: "24-pdf-6", word: "der Zoll", ipa: "deːɐ̯ tsɔl", meaning: "hải quan", example: "Ich gehe durch den Zoll.", exampleTranslation: "Tôi đi qua hải quan.", category: "Danh từ" },
      { id: "24-pdf-7", word: "das Ausland", ipa: "das ˈaʊ̯slant", meaning: "nước ngoài", example: "Ich arbeite im Ausland.", exampleTranslation: "Tôi làm việc ở nước ngoài.", category: "Danh từ" },
      { id: "24-pdf-8", word: "die Erfahrung - die Erfahrungen", ipa: "diː ɛɐ̯ˈfaːʁʊŋ", meaning: "trải nghiệm", example: "Ich habe viele Erfahrungen.", exampleTranslation: "Tôi có nhiều trải nghiệm.", category: "Danh từ" },
      { id: "24-pdf-9", word: "der Alltag", ipa: "deːɐ̯ ˈaltak", meaning: "cuộc sống hàng ngày", example: "Mein Alltag ist stressig.", exampleTranslation: "Cuộc sống hàng ngày của tôi áp lực.", category: "Danh từ" },
      { id: "24-pdf-10", word: "die Geburt - die Geburten", ipa: "diː ɡəˈbuːɐ̯t", meaning: "ca sinh", example: "Die Geburt war schwer.", exampleTranslation: "Ca sinh rất khó khăn.", category: "Danh từ" },
      { id: "24-pdf-11", word: "die Kollegin - die Kolleginnen", ipa: "diː kɔˈleːɡɪn", meaning: "đồng nghiệp nữ", example: "Meine Kollegin ist nett.", exampleTranslation: "Đồng nghiệp nữ của tôi rất thân thiện.", category: "Danh từ" },
      { id: "24-pdf-12", word: "die Familie - die Familien", ipa: "diː faˈmiːli̯ə", meaning: "gia đình", example: "Meine Familie ist wichtig.", exampleTranslation: "Gia đình tôi rất quan trọng.", category: "Danh từ" },
      { id: "24-pdf-13", word: "abholen", ipa: "ˈapˌhoːlən", meaning: "đón", example: "Ich hole dich ab.", exampleTranslation: "Tôi đến đón bạn.", category: "Động từ" },
      { id: "24-pdf-14", word: "beantragen", ipa: "bəˈʔantʁaːɡn̩", meaning: "xin", example: "Ich beantrage ein Visum.", exampleTranslation: "Tôi xin visa.", category: "Động từ" },
      { id: "24-pdf-15", word: "verlängern", ipa: "fɛɐ̯ˈlɛŋɐn", meaning: "gia hạn", example: "Ich verlängere meinen Pass.", exampleTranslation: "Tôi gia hạn hộ chiếu của mình.", category: "Động từ" },
      { id: "24-pdf-16", word: "arbeiten", ipa: "ˈaʁbaɪ̯tn̩", meaning: "làm việc", example: "Ich arbeite viel.", exampleTranslation: "Tôi làm việc nhiều.", category: "Động từ" },
      { id: "24-pdf-17", word: "leiten", ipa: "ˈlaɪ̯tn̩", meaning: "quản lý", example: "Er leitet ein Team.", exampleTranslation: "Anh ấy quản lý một nhóm.", category: "Động từ" },
      { id: "24-pdf-18", word: "vermissen", ipa: "fɛɐ̯ˈmɪsn̩", meaning: "nhớ", example: "Ich vermisse dich.", exampleTranslation: "Tôi nhớ bạn.", category: "Động từ" },
      { id: "24-pdf-19", word: "gefallen", ipa: "ɡəˈfalən", meaning: "thích", example: "Das gefällt mir.", exampleTranslation: "Điều đó làm tôi thích.", category: "Động từ" },
      { id: "24-pdf-20", word: "passieren", ipa: "paˈsiːʁən", meaning: "xảy ra", example: "Was passiert?", exampleTranslation: "Chuyện gì xảy ra vậy?", category: "Động từ" },
      { id: "24-pdf-21", word: "kompliziert", ipa: "kɔmpliˈt͡siːɐ̯t", meaning: "phức tạp", example: "Das ist kompliziert.", exampleTranslation: "Cái này phức tạp.", category: "Tính từ & Trạng từ" },
      { id: "24-pdf-22", word: "schön", ipa: "ʃøːn", meaning: "đẹp", example: "Das war schön.", exampleTranslation: "Điều đó từng rất đẹp.", category: "Tính từ & Trạng từ" },
      { id: "24-pdf-23", word: "schwierig", ipa: "ˈʃviːʁɪç", meaning: "khó", example: "Das ist schwierig.", exampleTranslation: "Cái này khó.", category: "Tính từ & Trạng từ" },
      { id: "24-pdf-24", word: "wichtig", ipa: "ˈvɪçtɪç", meaning: "quan trọng", example: "Das ist wichtig.", exampleTranslation: "Điều đó quan trọng.", category: "Tính từ & Trạng từ" },
      { id: "24-pdf-25", word: "besonders", ipa: "bəˈzɔndɐs", meaning: "đặc biệt", example: "Das gefällt mir besonders.", exampleTranslation: "Tôi đặc biệt thích nó.", category: "Tính từ & Trạng từ" },
      { id: "24-pdf-26", word: "leider", ipa: "ˈlaɪ̯dɐ", meaning: "tiếc là", example: "Leider habe ich keine Zeit.", exampleTranslation: "Tiếc là tôi không có thời gian.", category: "Tính từ & Trạng từ" },
      { id: "24-pdf-27", word: "oft", ipa: "ɔft", meaning: "thường xuyên", example: "Ich arbeite oft.", exampleTranslation: "Tôi thường xuyên làm việc.", category: "Tính từ & Trạng từ" },
      { id: "24-pdf-28", word: "am besten", ipa: "am ˈbɛstn̩", meaning: "tốt nhất", example: "Am besten ist das Essen.", exampleTranslation: "Tốt nhất là đồ ăn.", category: "Câu cố định" },
      { id: "24-pdf-33", word: "eine schöne Zeit", ipa: "aɪ̯nə ʃøːnə t͡saɪ̯t", meaning: "thời gian đẹp", example: "Das war eine schöne Zeit.", exampleTranslation: "Đó đã là một thời gian đẹp.", category: "Câu cố định" },
      { id: "24-pdf-34", word: "viel lernen", ipa: "fiːl ˈlɛʁnən", meaning: "học nhiều", example: "Ich lerne viel.", exampleTranslation: "Tôi học nhiều.", category: "Câu cố định" },
      { id: "24-pdf-35", word: "nicht einfach", ipa: "nɪçt ˈaɪ̯nfax", meaning: "không dễ", example: "Das ist nicht einfach.", exampleTranslation: "Điều đó không dễ.", category: "Câu cố định" },
      { id: "24-pdf-36", word: "oft müssen", ipa: "ɔft ˈmʏsn̩", meaning: "thường phải", example: "Ich muss oft arbeiten.", exampleTranslation: "Tôi thường phải làm việc.", category: "Câu cố định" }
    ],
    grammar: [
      { id: "g24-1", word: "ich / er / sie sagte", ipa: "ˈzaːktə", meaning: "tôi / anh ấy / cô ấy đã nói", example: "Er sagte, dass er gestern keine Zeit hatte.", exampleTranslation: "Anh ấy đã nói rằng hôm qua anh ấy không có thời gian.", rule: "Präteritum: Động từ có quy tắc (sagen)", note: "Thêm đuôi -te cho ngôi ich, er/es/sie" },
      { id: "g24-2", word: "du sagtest", ipa: "ˈzaːktəst", meaning: "bạn đã nói", example: "Was sagtest du gerade?", exampleTranslation: "Bạn vừa mới nói gì cơ?", rule: "Präteritum: Động từ có quy tắc (sagen)", note: "Thêm đuôi -test" },
      { id: "g24-3", word: "wir / sie / Sie sagten", ipa: "ˈzaːktn̩", meaning: "chúng tôi / họ / Ngài đã nói", example: "Wir sagten ihm die Wahrheit.", exampleTranslation: "Chúng tôi đã nói cho anh ấy sự thật.", rule: "Präteritum: Động từ có quy tắc (sagen)", note: "Thêm đuôi -ten" },
      { id: "g24-4", word: "ihr sagtet", ipa: "ˈzaːktət", meaning: "các bạn đã nói", example: "Sagtet ihr etwas?", exampleTranslation: "Các bạn đã nói gì à?", rule: "Präteritum: Động từ có quy tắc (sagen)", note: "Thêm đuôi -tet" },

      // unregelmäßige Verben
      { id: "g24-5", word: "ich / er / sie kam", ipa: "kaːm", meaning: "tôi / anh ấy / cô ấy đã đến", example: "Ich kam gestern spät nach Hause.", exampleTranslation: "Hôm qua tôi đã về nhà muộn.", rule: "Präteritum: Động từ bất quy tắc (kommen)", note: "Không có đuôi ở ngôi ich & er/es/sie" },
      { id: "g24-6", word: "wir / sie / Sie kamen", ipa: "ˈkaːmən", meaning: "chúng tôi / họ / Ngài đã đến", example: "Sie kamen pünktlich an.", exampleTranslation: "Họ đã đến đúng giờ.", rule: "Präteritum: Động từ bất quy tắc (kommen)", note: "Các ngôi khác chia như bình thường: kamst, kamt, kamen" },
      { id: "g24-7", word: "ich / er / sie gab", ipa: "ɡaːp", meaning: "tôi / anh ấy / cô ấy đã đưa/cho", example: "Er gab mir ein Buch.", exampleTranslation: "Anh ấy đã đưa cho tôi một cuốn sách.", rule: "Präteritum: Động từ bất quy tắc (geben)", note: "Các ngôi khác: gabst, gabt, gaben" },
      { id: "g24-8", word: "ich / er / sie fand", ipa: "fant", meaning: "tôi / anh ấy / cô ấy đã thấy (cảm nhận)", example: "Ich fand den Film sehr interessant.", exampleTranslation: "Tôi nhận thấy bộ phim rất thú vị.", rule: "Präteritum: Động từ bất quy tắc (finden)", note: "Đuôi có thêm 'e' để phân cách (du fandest, ihr fandet)" },
      { id: "g24-9", word: "ich / er / sie sah", ipa: "zaː", meaning: "tôi / anh ấy / cô ấy đã nhìn thấy", example: "Ich sah ein schönes Auto.", exampleTranslation: "Tôi đã nhìn thấy một chiếc ô tô đẹp.", rule: "Präteritum: Động từ bất quy tắc (sehen)", note: "Các ngôi khác: sahst, saht, sahen" },

      // KOMMUNIKATION - Begeisterung ausdrücken
      { id: "g24-10", word: "Das war eine tolle Zeit mit vielen schönen Erlebnissen/Erfahrungen.", ipa: "", meaning: "Đó là một khoảng thời gian tuyệt vời với nhiều trải nghiệm đẹp.", example: "Letztes Jahr war ich in der Schweiz. Das war eine tolle Zeit mit vielen schönen Erlebnissen.", exampleTranslation: "Năm ngoái tôi ở Thụy Sĩ. Đó là một khoảng thời gian tuyệt vời với nhiều trải nghiệm đẹp.", rule: "Mẫu câu Giao tiếp: Thể hiện sự hào hứng (Begeisterung)" },
      { id: "g24-11", word: "Ich konnte viele neue/schöne/… Erfahrungen machen.", ipa: "", meaning: "Tôi đã có thể có được nhiều kinh nghiệm/trải nghiệm mới.", example: "Während des Praktikums konnte ich viele neue Erfahrungen machen.", exampleTranslation: "Trong kỳ thực tập tôi đã có thể thu được nhiều kinh nghiệm mới.", rule: "Mẫu câu Giao tiếp: Thể hiện sự hào hứng (Begeisterung)" },
      { id: "g24-12", word: "Es hat mir super gefallen, dass...", ipa: "", meaning: "Tôi cực kỳ thích việc...", example: "Es hat mir super gefallen, dass die Kollegen nett waren.", exampleTranslation: "Tôi cực kỳ thích việc các đồng nghiệp đều thân thiện.", rule: "Mẫu câu Giao tiếp: Thể hiện sự hào hứng (Begeisterung)" },
      { id: "g24-13", word: "Das würde ich jedem empfehlen.", ipa: "", meaning: "Tôi sẽ khuyên mọi người nên làm thế (rất đề cử).", example: "Die Reise war fantastisch. Das würde ich jedem empfehlen.", exampleTranslation: "Chuyến đi thật tuyệt vời. Tôi rất đề cử cho mọi người.", rule: "Mẫu câu Giao tiếp: Thể hiện sự hào hứng (Begeisterung)" },

      // KOMMUNIKATION - Enttäuschung ausdrücken
      { id: "g24-14", word: "Ich fand es traurig, dass...", ipa: "", meaning: "Tôi thấy buồn (thất vọng) về việc...", example: "Ich fand es traurig, dass das Wetter schlecht war.", exampleTranslation: "Tôi thấy buồn vì thời tiết quá xấu.", rule: "Mẫu câu Giao tiếp: Thể hiện sự thất vọng (Enttäuschung)" },
      { id: "g24-15", word: "Leider hat das nicht so gut geklappt.", ipa: "", meaning: "Rất tiếc điều đó diễn ra không suôn sẻ/tốt lắm.", example: "Ich wollte nach Berlin fahren, aber leider hat das nicht so gut geklappt.", exampleTranslation: "Tôi muốn đi Berlin, nhưng rất tiếc việc đó diễn ra không suôn sẻ lắm.", rule: "Mẫu câu Giao tiếp: Thể hiện sự thất vọng (Enttäuschung)" },
      { id: "g24-16", word: "Ich musste immer... Das hat mir nicht so gut gefallen.", ipa: "", meaning: "Tôi đã luôn phải... Điều đó làm tôi không hài lòng lắm.", example: "Ich musste immer am Wochenende arbeiten. Das hat mir nicht so gut gefallen.", exampleTranslation: "Tôi luôn phải làm việc cuối tuần. Điều này làm tôi không thích tý nào.", rule: "Mẫu câu Giao tiếp: Thể hiện sự thất vọng (Enttäuschung)" },
      { id: "g24-17", word: "Es war keine schöne Zeit. Das würde ich niemandem empfehlen.", ipa: "", meaning: "Đó không phải là thời gian tốt đẹp. Tôi sẽ không khuyên ai làm thế cả.", example: "Der Job war furchtbar. Es war keine schöne Zeit. Das würde ich niemandem empfehlen.", exampleTranslation: "Công việc thật khủng khiếp. Đó không phải là khoảng thời gian đẹp. Tôi không khuyên ai nhận việc ấy.", rule: "Mẫu câu Giao tiếp: Thể hiện sự thất vọng (Enttäuschung)" }
    ]
  }
];
