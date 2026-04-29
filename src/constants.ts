export interface VocabularyItem {
  id: string;
  word: string;
  ipa?: string;
  meaning: string;
  example?: string;
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

  {
    "id": "l1_v1_m_s",
    "word": "der Cousin (số ít)",
    "ipa": "/kuˈzɛ̃ː/",
    "meaning": "anh/em họ (trai)",
    "example": "Mein Cousin spielt gern Fußball.",
    "category": "Personen"
  },
  {
    "id": "l1_v1_m_p",
    "word": "die Cousins (số nhiều)",
    "ipa": "/kuˈzɛ̃ːs/",
    "meaning": "anh/em họ (trai)",
    "example": "Mein Cousin spielt gern Fußball.",
    "category": "Personen"
  },
  {
    "id": "l1_v1_f_s",
    "word": "die Cousine (số ít)",
    "ipa": "/kuˈziːnə/",
    "meaning": "chị/em họ (gái)",
    "example": "Mein Cousin spielt gern Fußball.",
    "category": "Personen"
  },
  {
    "id": "l1_v1_f_p",
    "word": "die Cousinen (số nhiều)",
    "ipa": "/kuˈziːnən/",
    "meaning": "chị/em họ (gái)",
    "example": "Mein Cousin spielt gern Fußball.",
    "category": "Personen"
  },
  {
    "id": "l1_v2_m_s",
    "word": "der Neffe (số ít)",
    "ipa": "/ˈnɛfə/",
    "meaning": "cháu trai (con của anh chị em)",
    "example": "Mein Neffe ist fünf Jahre alt.",
    "category": "Personen"
  },
  {
    "id": "l1_v2_m_p",
    "word": "die Neffen (số nhiều)",
    "ipa": "/ˈnɛfn̩/",
    "meaning": "cháu trai (con của anh chị em)",
    "example": "Mein Neffe ist fünf Jahre alt.",
    "category": "Personen"
  },
  {
    "id": "l1_v2_f_s",
    "word": "die Nichte (số ít)",
    "ipa": "/ˈnɪçtə/",
    "meaning": "cháu gái (con của anh chị em)",
    "example": "Mein Neffe ist fünf Jahre alt.",
    "category": "Personen"
  },
  {
    "id": "l1_v2_f_p",
    "word": "die Nichten (số nhiều)",
    "ipa": "/ˈnɪçtn̩/",
    "meaning": "cháu gái (con của anh chị em)",
    "example": "Mein Neffe ist fünf Jahre alt.",
    "category": "Personen"
  },
  {
    "id": "l1_v3_m_s",
    "word": "der Onkel (số ít)",
    "ipa": "/ˈɔŋkl̩/",
    "meaning": "chú, bác",
    "example": "Meine Tante kocht sehr gut.",
    "category": "Personen"
  },
  {
    "id": "l1_v3_m_p",
    "word": "die Onkel (số nhiều)",
    "ipa": "/ˈɔŋkl̩/",
    "meaning": "chú, bác",
    "example": "Meine Tante kocht sehr gut.",
    "category": "Personen"
  },
  {
    "id": "l1_v3_f_s",
    "word": "die Tante (số ít)",
    "ipa": "/ˈtantə/",
    "meaning": "cô, dì",
    "example": "Meine Tante kocht sehr gut.",
    "category": "Personen"
  },
  {
    "id": "l1_v3_f_p",
    "word": "die Tanten (số nhiều)",
    "ipa": "/ˈtantn̩/",
    "meaning": "cô, dì",
    "example": "Meine Tante kocht sehr gut.",
    "category": "Personen"
  },
  {
    "id": "l1_v4_m_s",
    "word": "der Schwiegervater (số ít)",
    "ipa": "/ˈʃviːɡɐˌfaːtɐ/",
    "meaning": "bố chồng/vợ",
    "example": "Meine Schwiegermutter hilft oft.",
    "category": "Personen"
  },
  {
    "id": "l1_v4_m_p",
    "word": "die Schwiegerväter (số nhiều)",
    "ipa": "/ˈʃviːɡɐˌfɛːtɐ/",
    "meaning": "bố chồng/vợ",
    "example": "Meine Schwiegermutter hilft oft.",
    "category": "Personen"
  },
  {
    "id": "l1_v4_f_s",
    "word": "die Schwiegermutter (số ít)",
    "ipa": "/ˈʃviːɡɐˌmʊtɐ/",
    "meaning": "mẹ chồng/vợ",
    "example": "Meine Schwiegermutter hilft oft.",
    "category": "Personen"
  },
  {
    "id": "l1_v4_f_p",
    "word": "die Schwiegermütter (số nhiều)",
    "ipa": "/ˈʃviːɡɐˌmʏtɐ/",
    "meaning": "mẹ chồng/vợ",
    "example": "Meine Schwiegermutter hilft oft.",
    "category": "Personen"
  },
  {
    "id": "l1_v5_m_s",
    "word": "der Schwiegersohn (số ít)",
    "ipa": "/ˈʃviːɡɐˌzoːn/",
    "meaning": "con rể",
    "example": "Ihre Schwiegertochter ist sehr nett.",
    "category": "Personen"
  },
  {
    "id": "l1_v5_m_p",
    "word": "die Schwiegersöhne (số nhiều)",
    "ipa": "/ˈʃviːɡɐˌzøːnə/",
    "meaning": "con rể",
    "example": "Ihre Schwiegertochter ist sehr nett.",
    "category": "Personen"
  },
  {
    "id": "l1_v5_f_s",
    "word": "die Schwiegertochter (số ít)",
    "ipa": "/ˈʃviːɡɐˌtɔxtɐ/",
    "meaning": "con dâu",
    "example": "Ihre Schwiegertochter ist sehr nett.",
    "category": "Personen"
  },
  {
    "id": "l1_v5_f_p",
    "word": "die Schwiegertöchter (số nhiều)",
    "ipa": "/ˈʃviːɡɐˌtœçtɐ/",
    "meaning": "con dâu",
    "example": "Ihre Schwiegertochter ist sehr nett.",
    "category": "Personen"
  },
  {
    "id": "l1_v6_m_s",
    "word": "der Großvater (số ít)",
    "ipa": "/ˈɡʁoːsˌfaːtɐ/",
    "meaning": "ông",
    "example": "Mein Großvater war schon Bäcker.",
    "category": "Personen"
  },
  {
    "id": "l1_v6_m_p",
    "word": "die Großväter (số nhiều)",
    "ipa": "/ˈɡʁoːsˌfɛːtɐ/",
    "meaning": "ông",
    "example": "Mein Großvater war schon Bäcker.",
    "category": "Personen"
  },
  {
    "id": "l1_v6_f_s",
    "word": "die Großmutter (số ít)",
    "ipa": "/ˈɡʁoːsˌmʊtɐ/",
    "meaning": "bà",
    "example": "Mein Großvater war schon Bäcker.",
    "category": "Personen"
  },
  {
    "id": "l1_v6_f_p",
    "word": "die Großmütter (số nhiều)",
    "ipa": "/ˈɡʁoːsˌmʏtɐ/",
    "meaning": "bà",
    "example": "Mein Großvater war schon Bäcker.",
    "category": "Personen"
  },
  {
    "id": "l1_v7_s",
    "word": "das Enkelkind (số ít)",
    "ipa": "/ˈɛŋkl̩ˌkɪnt/",
    "meaning": "cháu (của ông bà)",
    "example": "Die Großeltern spielen mit dem Enkelkind.",
    "category": "Personen"
  },
  {
    "id": "l1_v7_p",
    "word": "die Enkelkinder (số nhiều)",
    "ipa": "/ˈɛŋkl̩ˌkɪndɐ/",
    "meaning": "cháu (của ông bà)",
    "example": "Die Großeltern spielen mit dem Enkelkind.",
    "category": "Personen"
  },
  { "id": "l1_v8", "word": "Geschichten erzählen", "ipa": "/ɡəˈʃɪçtn̩ ɛɐ̯ˈtsɛːlən/", "meaning": "kể chuyện", "example": "Ich habe oft Geschichten erzählt.", "category": "Aktion" },
  { "id": "l1_v9", "word": "draußen übernachten", "ipa": "/ˈdʁaʊ̯sn̩ ˌyːbɐˈnaxtn̩/", "meaning": "ngủ ngoài trời", "example": "Wir haben oft draußen übernachtet.", "category": "Aktion" },
  { "id": "l1_v10", "word": "auf Bäume klettern", "ipa": "/aʊ̯f ˈbɔɪ̯mə ˈklɛtɐn/", "meaning": "trèo cây", "example": "Als Kind bin ich auf Bäume geklettert.", "category": "Aktion" },
  { "id": "l1_v11", "word": "Fußballbilder sammeln", "ipa": "/ˈfuːsbalˌbɪldɐ ˈzaməln/", "meaning": "sưu tầm ảnh bóng đá", "example": "Ich habe Fußballbilder gesammelt.", "category": "Aktion" },
  { "id": "l1_v12", "word": "Sachen verkaufen", "ipa": "/ˈzaxn̩ fɛɐ̯ˈkaʊ̯fn̩/", "meaning": "bán đồ vật", "example": "Er hat Sachen auf dem Flohmarkt verkauft.", "category": "Aktion" },
  { "id": "l1_v13_a", "word": "Einrad fahren", "ipa": "/ˈaɪ̯nʁaːt ˈfaːʁən/", "meaning": "đi xe một bánh", "example": "Sie ist oft Einrad gefahren.", "category": "Aktion" },
  { "id": "l1_v13_b", "word": "Skateboard fahren", "ipa": "/ˈskeːtbɔːt ˈfaːʁən/", "meaning": "trượt ván", "example": "Sie ist oft Skateboard gefahren.", "category": "Aktion" },
  { "id": "l1_v14", "word": "Comics lesen", "ipa": "/ˈkɔmɪks ˈleːzn̩/", "meaning": "đọc truyện tranh", "example": "Mein Bruder hat immer Comics gelesen.", "category": "Aktion" },
  { "id": "l1_v15", "word": "zeichnen (nguyên thể)", "ipa": "/ˈtsaɪ̯çnən/", "meaning": "vẽ", "example": "Ich habe gern gezeichnet.", "category": "Aktion" },
  { "id": "l1_v16", "word": "Computerspiele spielen", "ipa": "/kɔmˈpjuːtɐˌʃpiːlə ˈʃpiːlən/", "meaning": "chơi game trên máy tính", "example": "Wir haben lange Computerspiele gespielt.", "category": "Aktion" },
  { "id": "l1_v17", "word": "mit Puppen spielen", "ipa": "/mɪt ˈpʊpn̩ ˈʃpiːlən/", "meaning": "chơi với búp bê", "example": "Sie hat mit Puppen gespielt.", "category": "Aktion" },
  { "id": "l1_v18", "word": "Süßigkeiten essen", "ipa": "/ˈzyːsɪçkaɪ̯tn̩ ˈɛsn̩/", "meaning": "ăn đồ ngọt", "example": "Er hat oft Süßigkeiten gegessen.", "category": "Aktion" },
  { "id": "l1_v19", "word": "Witze erzählen", "ipa": "/ˈvɪtsə ɛɐ̯ˈtsɛːlən/", "meaning": "kể chuyện cười", "example": "Mein Opa hat Witze erzählt.", "category": "Aktion" },
  {
    "id": "l1_v20_s",
    "word": "der Anfang (số ít)",
    "ipa": "/ˈanˌfaŋ/",
    "meaning": "sự bắt đầu",
    "example": "Am Anfang war es schwer.",
    "category": "Weitere Wörter"
  },
  {
    "id": "l1_v20_p",
    "word": "die Anfänge (số nhiều)",
    "ipa": "/ˈanˌfɛŋə/",
    "meaning": "sự bắt đầu",
    "example": "Am Anfang war es schwer.",
    "category": "Weitere Wörter"
  },
  {
    "id": "l1_v20_phrase",
    "word": "am Anfang",
    "ipa": "/am ˈanˌfaŋ/",
    "meaning": "vào lúc đầu",
    "example": "Am Anfang war es schwer.",
    "category": "Weitere Wörter"
  },
  {
    "id": "l1_v21_s",
    "word": "das Ende (số ít)",
    "ipa": "/ˈɛndə/",
    "meaning": "sự kết thúc",
    "example": "Am Ende hat es gut geklappt.",
    "category": "Weitere Wörter"
  },
  {
    "id": "l1_v21_p",
    "word": "die Enden (số nhiều)",
    "ipa": "/ˈɛndn̩/",
    "meaning": "sự kết thúc",
    "example": "Am Ende hat es gut geklappt.",
    "category": "Weitere Wörter"
  },
  {
    "id": "l1_v21_phrase",
    "word": "am Ende",
    "ipa": "/am ˈɛndə/",
    "meaning": "vào lúc cuối",
    "example": "Am Ende hat es gut geklappt.",
    "category": "Weitere Wörter"
  },
  {
    "id": "l1_v22",
    "word": "zum Schluss",
    "ipa": "/tsʊm ʃlʊs/",
    "meaning": "cuối cùng",
    "example": "Zum Schluss habe ich bestanden.",
    "category": "Weitere Wörter"
  },
  { "id": "l1_v23", "word": "passieren (nguyên thể)", "ipa": "/paˈsiːʁən/", "meaning": "xảy ra", "example": "Was ist dann passiert?", "category": "Aktion" },
  { "id": "l1_v24", "word": "streiten (nguyên thể)", "ipa": "/ˈʃtʁaɪ̯tn̩/", "meaning": "cãi nhau", "example": "Wir haben gestritten.", "category": "Aktion" },
  { "id": "l1_v25", "word": "wachsen (nguyên thể)", "ipa": "/ˈvaksn̩/", "meaning": "lớn lên, phát triển", "example": "Das Geschäft ist gewachsen.", "category": "Aktion" }

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

  {
    id: "v2_1_s",
    word: "die Kommode (số ít)",
    ipa: "/kɔˈmoːdə/",
    meaning: "tủ ngăn kéo",
    example: "Wohin mit der Kommode?",
    category: "Möbel"
  },
  {
    id: "v2_1_p",
    word: "die Kommoden (số nhiều)",
    ipa: "/kɔˈmoːdən/",
    meaning: "tủ ngăn kéo",
    category: "Möbel"
  },
  {
    id: "v2_2_s",
    word: "der Schrank (số ít)",
    ipa: "/ʃʁaŋk/",
    meaning: "tủ quần áo/tủ đồ",
    example: "Der Schrank steht im Schlafzimmer.",
    category: "Möbel"
  },
  {
    id: "v2_2_p",
    word: "die Schränke (số nhiều)",
    ipa: "/ˈʃʁɛŋkə/",
    meaning: "tủ quần áo/tủ đồ",
    category: "Möbel"
  },
  {
    id: "v2_3_s",
    word: "das Regal (số ít)",
    ipa: "/ʁeˈɡaːl/",
    meaning: "kệ, giá",
    example: "Stellen Sie Souvenirs auf ein Regal.",
    category: "Möbel"
  },
  {
    id: "v2_3_p",
    word: "die Regale (số nhiều)",
    ipa: "/ʁeˈɡaːlə/",
    meaning: "kệ, giá",
    category: "Möbel"
  },
  {
    id: "v2_4_s",
    word: "der Teppich (số ít)",
    ipa: "/ˈtɛpɪç/",
    meaning: "tấm thảm",
    example: "Ein Teppich auf dem Boden macht das Zimmer gemütlicher.",
    category: "Möbel"
  },
  {
    id: "v2_4_p",
    word: "die Teppiche (số nhiều)",
    ipa: "/ˈtɛpɪçə/",
    meaning: "tấm thảm",
    category: "Möbel"
  },
  {
    id: "v2_5_s",
    word: "die Lampe (số ít)",
    ipa: "/ˈlampə/",
    meaning: "cái đèn",
    example: "Stellen Sie eine Lampe auf den Tisch.",
    category: "Möbel"
  },
  {
    id: "v2_5_p",
    word: "die Lampen (số nhiều)",
    ipa: "/ˈlampən/",
    meaning: "cái đèn",
    category: "Möbel"
  },
  {
    id: "v2_6_s",
    word: "das Kissen (số ít)",
    ipa: "/ˈkɪsn̩/",
    meaning: "cái gối",
    example: "Auf dem Sofa liegen bunte Kissen.",
    category: "Möbel"
  },
  {
    id: "v2_6_p",
    word: "die Kissen (số nhiều)",
    ipa: "/ˈkɪsn̩/",
    meaning: "cái gối",
    category: "Möbel"
  },
  {
    id: "v2_7_s",
    word: "der Spiegel (số ít)",
    ipa: "/ˈʃpiːɡl̩/",
    meaning: "cái gương",
    example: "Hängen Sie den Spiegel an die Wand.",
    category: "Möbel"
  },
  {
    id: "v2_7_p",
    word: "die Spiegel (số nhiều)",
    ipa: "/ˈʃpiːɡl̩/",
    meaning: "cái gương",
    category: "Möbel"
  },
  {
    id: "v2_8_s",
    word: "der Schreibtisch (số ít)",
    ipa: "/ˈʃʁaɪ̯pˌtɪʃ/",
    meaning: "bàn làm việc",
    example: "Das Buch liegt auf dem Schreibtisch.",
    category: "Möbel"
  },
  {
    id: "v2_8_p",
    word: "die Schreibtische (số nhiều)",
    ipa: "/ˈʃʁaɪ̯pˌtɪʃə/",
    meaning: "bàn làm việc",
    category: "Möbel"
  },
  {
    id: "v2_9_s",
    word: "der Vorhang (số ít)",
    ipa: "/ˈfoːɐ̯ˌhaŋ/",
    meaning: "rèm cửa",
    example: "Das hängt vor dem Fenster.",
    category: "Möbel"
  },
  {
    id: "v2_9_p",
    word: "die Vorhänge (số nhiều)",
    ipa: "/ˈfoːɐ̯ˌhɛŋə/",
    meaning: "rèm cửa",
    category: "Möbel"
  },
  {
    id: "v2_10_s",
    word: "das Fernsehgerät (số ít)",
    ipa: "/ˈfɛʁnzeːɡəˌʁɛːt/",
    meaning: "cái tivi",
    example: "Das Fernsehgerät steht in der Ecke.",
    category: "Möbel",
    grammar: "(CH: der Fernseher)"
  },
  {
    id: "v2_10_p",
    word: "die Fernsehgeräte (số nhiều)",
    ipa: "/ˈfɛʁnzeːɡəˌʁɛːtə/",
    meaning: "cái tivi",
    category: "Möbel",
    grammar: "(CH: die Fernseher)"
  },
  {
    id: "v2_11_s",
    word: "der Herd (số ít)",
    ipa: "/heːɐ̯t/",
    meaning: "bếp lò",
    example: "Der Herd ist in der Küche.",
    category: "Möbel"
  },
  {
    id: "v2_11_p",
    word: "die Herde (số nhiều)",
    ipa: "/ˈheːɐ̯də/",
    meaning: "bếp lò",
    category: "Möbel"
  },
  {
    id: "v2_12_s",
    word: "das Werkzeug (số ít)",
    ipa: "/ˈvɛʁkˌt͡sɔʏ̯k/",
    meaning: "dụng cụ",
    example: "Das Werkzeug ist im Keller.",
    category: "Räume und Umzug"
  },
  {
    id: "v2_12_p",
    word: "die Werkzeuge (số nhiều)",
    ipa: "/ˈvɛʁkˌt͡sɔʏ̯ɡə/",
    meaning: "dụng cụ",
    category: "Räume und Umzug"
  },
  {
    id: "v2_13_s",
    word: "der Umzug (số ít)",
    ipa: "/ˈʊmˌt͡suːk/",
    meaning: "sự chuyển nhà",
    example: "Ich ziehe gar nicht gern um.",
    category: "Räume und Umzug"
  },
  {
    id: "v2_13_p",
    word: "die Umzüge (số nhiều)",
    ipa: "/ˈʊmˌt͡syːɡə/",
    meaning: "sự chuyển nhà",
    category: "Räume und Umzug"
  },
  {
    id: "v2_14_s",
    word: "der Raum (số ít)",
    ipa: "/ʁaʊ̯m/",
    meaning: "căn phòng",
    example: "Der Raum ist zu unordentlich.",
    category: "Räume und Umzug"
  },
  {
    id: "v2_14_p",
    word: "die Räume (số nhiều)",
    ipa: "/ˈʁɔɪ̯mə/",
    meaning: "căn phòng",
    category: "Räume und Umzug"
  },
  {
    id: "v2_15_s",
    word: "die Ecke (số ít)",
    ipa: "/ˈɛkə/",
    meaning: "góc",
    example: "Das Regal steht in der Ecke.",
    category: "Räume und Umzug"
  },
  {
    id: "v2_15_p",
    word: "die Ecken (số nhiều)",
    ipa: "/ˈɛkən/",
    meaning: "góc",
    category: "Räume und Umzug"
  },
  {
    id: "v2_16_s",
    word: "die Wand (số ít)",
    ipa: "/vant/",
    meaning: "bức tường",
    example: "Das Bild hängt an der Wand.",
    category: "Räume und Umzug"
  },
  {
    id: "v2_16_p",
    word: "die Wände (số nhiều)",
    ipa: "/ˈvɛndə/",
    meaning: "bức tường",
    category: "Räume und Umzug"
  },
  {
    id: "v2_17_s",
    word: "die Tür (số ít)",
    ipa: "/tyːɐ̯/",
    meaning: "cửa",
    example: "Der Stuhl steht neben der Tür.",
    category: "Räume und Umzug"
  },
  {
    id: "v2_17_p",
    word: "die Türen (số nhiều)",
    ipa: "/ˈtyːʁən/",
    meaning: "cửa",
    category: "Räume und Umzug"
  },
  {
    id: "v2_18",
    word: "einrichten (nguyên thể)",
    ipa: "/ˈaɪ̯nˌʁɪçtn̩/",
    meaning: "trang bị nội thất",
    example: "Jeder richtet seine Wohnung anders ein.",
    grammar: "hat eingerichtet",
    category: "Räume und Umzug"
  },
  {
    id: "v2_19",
    word: "renovieren (nguyên thể)",
    ipa: "/ʁenoˈviːʁən/",
    meaning: "cải tạo, sửa chữa",
    example: "Lars soll Maria beim Renovieren helfen.",
    grammar: "hat renoviert",
    category: "Räume und Umzug"
  },
  {
    id: "v2_20",
    word: "verstecken (nguyên thể)",
    ipa: "/fɛɐ̯ˈʃtɛkn̩/",
    meaning: "giấu",
    example: "Das Fernsehgerät verstecke ich im Schrank.",
    grammar: "hat versteckt",
    category: "Räume und Umzug"
  },
  {
    id: "v2_21",
    word: "diskutieren (nguyên thể)",
    ipa: "/dɪskuˈtiːʁən/",
    meaning: "thảo luận",
    example: "Sie sollen nicht mehr diskutieren.",
    grammar: "hat diskutiert",
    category: "Räume und Umzug"
  },
  {
    id: "v2_22",
    word: "schwer",
    ipa: "/ʃveːɐ̯/",
    meaning: "nặng, khó",
    example: "Die Kommode ist sehr schwer.",
    category: "Adjektive"
  },
  {
    id: "v2_23",
    word: "vorsichtig",
    ipa: "/ˈfɔʁˌzɪçtɪç/",
    meaning: "cẩn thận",
    example: "Seien Sie vorsichtig mit dunklen Möbeln.",
    category: "Adjektive"
  },
  {
    id: "v2_24",
    word: "dunkel",
    ipa: "/ˈdʊŋkl̩/",
    meaning: "tối",
    example: "Das Zimmer wird schnell zu dunkel.",
    category: "Adjektive"
  },
  {
    id: "v2_25",
    word: "hell",
    ipa: "/hɛl/",
    meaning: "sáng",
    example: "Eine helle Wand ist schöner.",
    category: "Adjektive"
  },
  {
    id: "v2_26",
    word: "unordentlich",
    ipa: "/ˈʊnˌʔɔʁdn̩tlɪç/",
    meaning: "bừa bộn",
    example: "Der Raum ist zu unordentlich.",
    category: "Adjektive"
  },
  {
    id: "v2_27",
    word: "gemütlich",
    ipa: "/ɡəˈmyːtlɪç/",
    meaning: "ấm cúng",
    example: "Ein Teppich macht das Zimmer viel gemütlicher.",
    category: "Adjektive"
  }

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

      { id: "v3_1_s", word: "die Landschaft (số ít)", meaning: "phong cảnh", example: "Die Landschaft hier ist wunderschön.", category: "Natur und Umwelt", ipa: "/ˈlantˌʃaft/" },
      { id: "v3_1_p", word: "die Landschaften (số nhiều)", meaning: "phong cảnh", example: "Die Landschaft hier ist wunderschön.", category: "Natur und Umwelt", ipa: "/ˈlantˌʃaftn̩/" },
      { id: "v3_2_s", word: "das Dorf (số ít)", meaning: "ngôi làng", example: "Das Bauerndorf liegt in den Bergen.", category: "Natur und Umwelt", ipa: "/dɔʁf/" },
      { id: "v3_2_p", word: "die Dörfer (số nhiều)", meaning: "ngôi làng", example: "Das Bauerndorf liegt in den Bergen.", category: "Natur und Umwelt", ipa: "/ˈdœʁfɐ/" },
      { id: "v3_3_s", word: "der Strand (số ít)", meaning: "bãi biển", example: "Wir liegen den ganzen Tag am Strand.", category: "Natur und Umwelt", ipa: "/ʃtʁant/" },
      { id: "v3_3_p", word: "die Strände (số nhiều)", meaning: "bãi biển", example: "Wir liegen den ganzen Tag am Strand.", category: "Natur und Umwelt", ipa: "/ˈʃtʁɛndə/" },
      { id: "v3_4_s", word: "das Ufer (số ít)", meaning: "bờ sông/bờ hồ", example: "Wir fahren am Ufer entlang.", category: "Natur und Umwelt", ipa: "/ˈuːfɐ/" },
      { id: "v3_4_p", word: "die Ufer (số nhiều)", meaning: "bờ sông/bờ hồ", example: "Wir fahren am Ufer entlang.", category: "Natur und Umwelt", ipa: "/ˈuːfɐ/" },
      { id: "v3_5_s", word: "die Pflanze (số ít)", meaning: "thực vật, cây cối", example: "Hier gibt es viele Tiere und Pflanzen.", category: "Natur und Umwelt", ipa: "/ˈpflantsə/" },
      { id: "v3_5_p", word: "die Pflanzen (số nhiều)", meaning: "thực vật, cây cối", example: "Hier gibt es viele Tiere und Pflanzen.", category: "Natur und Umwelt", ipa: "/ˈpflantsn̩/" },
      { id: "v3_6", word: "die Luft", meaning: "không khí", example: "Wir genießen die gute Luft.", category: "Natur und Umwelt", ipa: "/lʊft/" },
      { id: "v3_7", word: "die Ruhe", meaning: "sự yên tĩnh", example: "Hier finden Sie Ruhe und Erholung.", category: "Natur und Umwelt", ipa: "/ˈʁuːə/" },
      { id: "v3_8_s", word: "der Vogel (số ít)", meaning: "con chim", example: "Die Vögel singen morgens.", category: "Natur und Umwelt", ipa: "/ˈfoːɡl̩/" },
      { id: "v3_8_p", word: "die Vögel (số nhiều)", meaning: "con chim", example: "Die Vögel singen morgens.", category: "Natur und Umwelt", ipa: "/ˈføːɡl̩/" },
      { id: "v3_9_s", word: "die Katze (số ít)", meaning: "con mèo", example: "Der Bauernhof hat Hunde und Katzen.", category: "Natur und Umwelt", ipa: "/ˈkatsə/" },
      { id: "v3_9_p", word: "die Katzen (số nhiều)", meaning: "con mèo", example: "Der Bauernhof hat Hunde und Katzen.", category: "Natur und Umwelt", ipa: "/ˈkatsn̩/" },
      { id: "v3_10_s", word: "das Tier (số ít)", meaning: "động vật", example: "Welche Tiere gibt es hier?", category: "Natur và Môi trường", ipa: "/tiːɐ̯/" },
      { id: "v3_10_p", word: "die Tiere (số nhiều)", meaning: "động vật", example: "Welche Tiere gibt es hier?", category: "Natur và Môi trường", ipa: "/ˈtiːʁə/" },
      { id: "v3_11", word: "wandern (nguyên thể)", meaning: "đi bộ đường dài", example: "Wir wandern in den Bergen.", grammar: "ist gewandert", category: "Natur và Môi trường", ipa: "/ˈvandɐn/" },
      { id: "v3_12_s", word: "die Beratung (số ít)", meaning: "sự tư vấn", example: "Wir bieten kompetente Beratung.", category: "Du lịch", ipa: "/bəˈʁaːtʊŋ/" },
      { id: "v3_12_p", word: "die Beratungen (số nhiều)", meaning: "sự tư vấn", example: "Wir bieten kompetente Beratung.", category: "Du lịch", ipa: "/bəˈʁaːtʊŋən/" },
      { id: "v3_13_s", word: "die Erfahrung (số ít)", meaning: "kinh nghiệm", example: "Du hast die Motivation, wir haben die Erfahrung.", category: "Du lịch", ipa: "/ɛɐ̯ˈfaːʁʊŋ/" },
      { id: "v3_13_p", word: "die Erfahrungen (số nhiều)", meaning: "kinh nghiệm", example: "Du hast die Motivation, wir haben die Erfahrung.", category: "Du lịch", ipa: "/ɛɐ̯ˈfaːʁʊŋən/" },
      { id: "v3_14_s", word: "die Fahrt (số ít)", meaning: "chuyến đi", example: "Bei Fahrten durch die Natur sehen Sie viele Tiere.", category: "Du lịch", ipa: "/faʁt/" },
      { id: "v3_14_p", word: "die Fahrten (số nhiều)", meaning: "chuyến đi", example: "Bei Fahrten durch die Natur sehen Sie viele Tiere.", category: "Du lịch", ipa: "/ˈfaʁtn̩/" },
      { id: "v3_15_s", word: "die Gruppe (số ít)", meaning: "nhóm", example: "Unsere Gruppen sind klein.", category: "Du lịch", ipa: "/ˈɡʁʊpə/" },
      { id: "v3_15_p", word: "die Gruppen (số nhiều)", meaning: "nhóm", example: "Unsere Gruppen sind klein.", category: "Du lịch", ipa: "/ˈɡʁʊpn̩/" },
      { id: "v3_16_s", word: "die Karte (số ít)", meaning: "bản đồ / thẻ", example: "Haben Sie eine Karte von der Stadt?", category: "Du lịch", ipa: "/ˈkaʁtə/" },
      { id: "v3_16_p", word: "die Karten (số nhiều)", meaning: "bản đồ / thẻ", example: "Haben Sie eine Karte von der Stadt?", category: "Du lịch", ipa: "/ˈkaʁtn̩/" },
      { id: "v3_17_s", word: "der Service (số ít)", meaning: "dịch vụ", example: "Der Fahrradvermieter bietet extra Service.", category: "Du lịch", ipa: "/ˈsɛɐ̯vɪs/" },
      { id: "v3_17_p", word: "die Services (số nhiều)", meaning: "dịch vụ", example: "Der Fahrradvermieter bietet extra Service.", category: "Du lịch", ipa: "/ˈsɛɐ̯vɪsəs/" },
      { id: "v3_18_s", word: "der Trend (số ít)", meaning: "xu hướng", example: "Wandern liegt im Trend.", category: "Du lịch", ipa: "/tʁɛnt/" },
      { id: "v3_18_p", word: "die Trends (số nhiều)", meaning: "xu hướng", example: "Wandern liegt im Trend.", category: "Du lịch", ipa: "/tʁɛnts/" },
      { id: "v3_19_s", word: "der Unterricht (số ít)", meaning: "tiết học, sự giảng dạy", example: "Hier gibt es Unterricht für Anfänger.", category: "Du lịch", ipa: "/ˈʊntɐˌʁɪçt/" },
      { id: "v3_19_p", word: "die Unterrichte (số nhiều)", meaning: "tiết học, sự giảng dạy", example: "Hier gibt es Unterricht für Anfänger.", category: "Du lịch", ipa: "/ˈʊntɐˌʁɪçtə/" },
      { id: "v3_20", word: "anbieten (nguyên thể)", meaning: "cung cấp, mời mọc", example: "Wir bieten Stadtteilen für Touristen an.", grammar: "hat angeboten", category: "Du lịch", ipa: "/ˈanˌbiːtn̩/" },
      { id: "v3_21", word: "beraten (nguyên thể)", meaning: "tư vấn", example: "Wir beraten Sie sehr gern.", grammar: "er berät, hat beraten", category: "Du lịch", ipa: "/bəˈʁaːtn̩/" },
      { id: "v3_22", word: "beginnen (nguyên thể)", meaning: "bắt đầu", example: "Die Tour hat um 9 Uhr begonnen.", grammar: "hat begonnen", category: "Du lịch", ipa: "/bəˈɡɪnən/" },
      { id: "v3_23", word: "buchen (nguyên thể)", meaning: "đặt (chọn, vé)", example: "Welche Reise würdest du am liebsten buchen?", grammar: "hat gebucht", category: "Du lịch", ipa: "/ˈbuːxn̩/" },
      { id: "v3_24", word: "enden (nguyên thể)", meaning: "kết thúc", example: "Die Fahrt endet am See.", grammar: "hat geendet", category: "Du lịch", ipa: "/ˈɛndn̩/" },
      { id: "v3_25", word: "erleben (nguyên thể)", meaning: "trải nghiệm", example: "Mit dem Fahrrad erlebt man alles anders.", grammar: "hat erlebt", category: "Du lịch", ipa: "/ɛɐ̯ˈleːbn̩/" },
      { id: "v3_26", word: "mitmachen (nguyên thể)", meaning: "tham gia", example: "Nur Fortgeschrittene dürfen beim Unterricht mitmachen.", grammar: "hat mitgemacht", category: "Du lịch", ipa: "/ˈmɪtˌmaxn̩/" },
      { id: "v3_27", word: "aktiv", meaning: "năng động", example: "Sie können sportlich aktiv sein.", category: "Du lịch", ipa: "/akˈtiːf/" },
      { id: "v3_28", word: "sportlich", meaning: "thể thao", example: "Sind Sie sportlich?", category: "Du lịch", ipa: "/ˈʃpɔʁtlɪç/" },
      { id: "v3_29_s", word: "die Mode (số ít)", meaning: "thời trang", example: "Das ist die neueste Surf-Mode.", category: "Các từ quan trọng khác", ipa: "/ˈmoːdə/" },
      { id: "v3_29_p", word: "die Moden (số nhiều)", meaning: "thời trang", example: "Das ist die neueste Surf-Mode.", category: "Các từ quan trọng khác", ipa: "/ˈmoːdn̩/" },
      { id: "v3_30", word: "liegen in (nguyên thể)", meaning: "nằm trong, đang là xu hướng", example: "E-Bikes liegen gerade im Trend.", grammar: "hat gelegen", category: "Các từ quan trọng khác", ipa: "/ˈliːɡn̩ ɪn/" },
      { id: "v3_31", word: "überhaupt nicht", meaning: "hoàn toàn không", example: "Das gefällt mir überhaupt nicht.", category: "Các từ quan trọng khác", ipa: "/ˈyːbɐˌhaʊ̯pt nɪçt/" },
      { id: "v3_32", word: "anders", meaning: "khác", example: "Was war früher anders als heute?", category: "Các từ quan trọng khác", ipa: "/ˈandɐs/" },
      { id: "v3_33", word: "außerdem", meaning: "ngoài ra", example: "Außerdem haben wir viel Sonne.", category: "Các từ quan trọng khác", ipa: "/ˈaʊ̯sɐˌdeːm/" },
      { id: "v3_34", word: "direkt", meaning: "trực tiếp", example: "Sie übernachten direkt am Wasser.", category: "Các từ quan trọng khác", ipa: "/diˈʁɛkt/" }
    
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

  { id: "v4_1_s", word: "die Banane (số ít)", ipa: "/baˈnaːnə/", meaning: "Quả chuối", example: "Ich esse gern Bananen.", category: "Lebensmittel" },
  { id: "v4_1_p", word: "die Bananen (số nhiều)", ipa: "/baˈnaːnən/", meaning: "Quả chuối", example: "Ich esse gern Bananen.", category: "Lebensmittel" },
  { id: "v4_2_s", word: "die Birne (số ít)", ipa: "/ˈbɪʁnə/", meaning: "Quả lê", example: "Die Birne ist sehr süß.", category: "Lebensmittel" },
  { id: "v4_2_p", word: "die Birnen (số nhiều)", ipa: "/ˈbɪʁnən/", meaning: "Quả lê", example: "Die Birne ist sehr süß.", category: "Lebensmittel" },
  { id: "v4_3_s", word: "die Bohne (số ít)", ipa: "/ˈboːnə/", meaning: "Hạt đậu / Đỗ", example: "Wir kochen grüne Bohnen.", category: "Lebensmittel" },
  { id: "v4_3_p", word: "die Bohnen (số nhiều)", ipa: "/ˈboːnən/", meaning: "Hạt đậu / Đỗ", example: "Wir kochen grüne Bohnen.", category: "Lebensmittel" },
  { id: "v4_4_s", word: "das Bonbon (số ít)", ipa: "/ˈbɔnbɔŋ/", meaning: "Kẹo", example: "Möchtest du ein Bonbon?", category: "Lebensmittel" },
  { id: "v4_4_p", word: "die Bonbons (số nhiều)", ipa: "/ˈbɔnbɔŋs/", meaning: "Kẹo", example: "Möchtest du ein Bonbon?", category: "Lebensmittel" },
  { id: "v4_5", word: "die Cola (số ít)", ipa: "/ˈkoːla/", meaning: "Nước ngọt Cola", example: "Ich trinke eine Cola.", category: "Lebensmittel" },
  { id: "v4_6", word: "das Gemüse (số ít)", ipa: "/ɡəˈmyːzə/", meaning: "Rau củ", example: "Gemüse ist sehr gesund.", category: "Lebensmittel" },
  { id: "v4_7_s", word: "das Getränk (số ít)", ipa: "/ɡəˈtʁɛŋk/", meaning: "Đồ uống", example: "Welches Getränk möchtest du?", category: "Lebensmittel" },
  { id: "v4_7_p", word: "die Getränke (số nhiều)", ipa: "/ɡəˈtʁɛŋkə/", meaning: "Đồ uống", example: "Welches Getränk möchtest du?", category: "Lebensmittel" },
  { id: "v4_8_s", word: "die Marmelade (số ít)", ipa: "/ˌmaʁməˈlaːdə/", meaning: "Mứt", example: "Ich esse Brot mit Marmelade.", category: "Lebensmittel" },
  { id: "v4_8_p", word: "die Marmeladen (số nhiều)", ipa: "/ˌmaʁməˈlaːdən/", meaning: "Mứt", example: "Ich esse Brot mit Marmelade.", category: "Lebensmittel" },
  { id: "v4_9", word: "das Mehl (số ít)", ipa: "/meːl/", meaning: "Bột mì", example: "Für den Kuchen brauchen wir Mehl.", category: "Lebensmittel" },
  { id: "v4_10", word: "der Quark (số ít)", ipa: "/kvaʁk/", meaning: "Phô mai tươi / Sữa đông", example: "Quark mit Obst schmeckt gut.", category: "Lebensmittel" },
  { id: "v4_11_s", word: "der Saft (số ít)", ipa: "/zaft/", meaning: "Nước ép", example: "Ich trinke ein Glas Orangensaft.", category: "Lebensmittel" },
  { id: "v4_11_p", word: "die Säfte (số nhiều)", ipa: "/ˈzɛftə/", meaning: "Nước ép", example: "Ich trinke ein Glas Orangensaft.", category: "Lebensmittel" },
  { id: "v4_12", word: "fett", ipa: "/fɛt/", meaning: "Nhiều chất béo / Mỡ", example: "Das ist ein fetter Braten.", category: "Lebensmittel (Adjektive)" },
  { id: "v4_13", word: "fettarm", ipa: "/ˈfɛtˌʔaʁm/", meaning: "Ít béo", example: "Ich trinke fettarme Milch.", category: "Lebensmittel (Adjektive)" },
  { id: "v4_14", word: "frisch", ipa: "/fʁɪʃ/", meaning: "Tươi", example: "Haben Sie frischen Fisch?", category: "Lebensmittel (Adjektive)" },
  { id: "v4_15", word: "hart", ipa: "/haʁt/", meaning: "Cứng / Luộc kỹ", example: "Ich möchte ein hart gekochtes Ei.", category: "Lebensmittel (Adjektive)" },
  { id: "v4_16", word: "mager", ipa: "/ˈmaːɡɐ/", meaning: "Nạc / Ít mỡ", example: "Ich hätte gern einen mageren Schinken.", category: "Lebensmittel (Adjektive)" },
  { id: "v4_17", word: "normal", ipa: "/nɔʁˈmaːl/", meaning: "Bình thường", example: "Wir brauchen normale Milch.", category: "Lebensmittel (Adjektive)" },
  { id: "v4_18", word: "roh", ipa: "/ʁoː/", meaning: "Sống", example: "Das Fleisch ist noch roh.", category: "Lebensmittel (Adjektive)" },
  { id: "v4_19", word: "weich", ipa: "/vaɪ̯ç/", meaning: "Mềm / Luộc lòng đào", example: "Ich esse gern weich gekochte Eier.", category: "Lebensmittel (Adjektive)" },
  { id: "v4_20_s", word: "die Dose (số ít)", ipa: "/ˈdoːzə/", meaning: "Lon / Hộp kim loại", example: "Eine Dose Thunfisch, bitte.", category: "Mengen" },
  { id: "v4_20_p", word: "die Dosen (số nhiều)", ipa: "/ˈdoːzn̩/", meaning: "Lon / Hộp kim loại", example: "Eine Dose Thunfisch, bitte.", category: "Mengen" },
  { id: "v4_21_s", word: "das Gramm (số ít)", ipa: "/ɡʁam/", meaning: "Gram", example: "Ich brauche 200 Gramm Käse.", category: "Mengen" },
  { id: "v4_21_p", word: "die Gramme (số nhiều)", ipa: "/ˈɡʁamə/", meaning: "Gram", example: "Ich brauche 200 Gramm Käse.", category: "Mengen" },
  { id: "v4_22_s", word: "das Kilo(gramm) (số ít)", ipa: "/ˈkiːlo/", meaning: "Kilogram", example: "Ein Kilo Äpfel kostet 2 Euro.", category: "Mengen" },
  { id: "v4_22_p", word: "die Kilo(gramm) (số nhiều)", ipa: "/ˈkiːlo/", meaning: "Kilogram", example: "Ein Kilo Äpfel kostet 2 Euro.", category: "Mengen" },
  { id: "v4_23_s", word: "der Liter (số ít)", ipa: "/ˈliːtɐ/", meaning: "Lít", example: "Zwei Liter Milch, bitte.", category: "Mengen" },
  { id: "v4_23_p", word: "die Liter (số nhiều)", ipa: "/ˈliːtɐ/", meaning: "Lít", example: "Zwei Liter Milch, bitte.", category: "Mengen" },
  { id: "v4_24_s", word: "die Packung (số ít)", ipa: "/ˈpakʊŋ/", meaning: "Gói / Hộp giấy", example: "Eine Packung Tee.", category: "Mengen" },
  { id: "v4_24_p", word: "die Packungen (số nhiều)", ipa: "/ˈpakʊŋən/", meaning: "Gói / Hộp giấy", example: "Eine Packung Tee.", category: "Mengen" },
  { id: "v4_25_s", word: "das Pfund (số ít)", ipa: "/pfʊnt/", meaning: "Cân Anh (500 gram tại Đức)", example: "Ein Pfund Tomaten.", category: "Mengen" },
  { id: "v4_25_p", word: "die Pfunde (số nhiều)", ipa: "/ˈpfʊndə/", meaning: "Cân Anh (500 gram tại Đức)", example: "Ein Pfund Tomaten.", category: "Mengen" },
  { id: "v4_26_s", word: "die Portion (số ít)", ipa: "/pɔʁˈtsi̯oːn/", meaning: "Khẩu phần / Suất", example: "Eine Portion Pommes frites.", category: "Mengen" },
  { id: "v4_26_p", word: "die Portionen (số nhiều)", ipa: "/pɔʁˈtsi̯oːnən/", meaning: "Khẩu phần / Suất", example: "Eine Portion Pommes frites.", category: "Mengen" },
  { id: "v4_27_s", word: "die Tüte (số ít)", ipa: "/ˈtyːtə/", meaning: "Túi (nilon, giấy)", example: "Kostet die Tüte etwas?", category: "Mengen" },
  { id: "v4_27_p", word: "die Tüten (số nhiều)", ipa: "/ˈtyːtn̩/", meaning: "Túi (nilon, giấy)", example: "Kostet die Tüte etwas?", category: "Mengen" },
  { id: "v4_28_s", word: "der Zettel (số ít)", ipa: "/ˈtsɛtl̩/", meaning: "Mảnh giấy", example: "Hast du den Einkaufszettel?", category: "Weitere Wörter" },
  { id: "v4_28_p", word: "die Zettel (số nhiều)", ipa: "/ˈtsɛtl̩/", meaning: "Mảnh giấy", example: "Hast du den Einkaufszettel?", category: "Weitere Wörter" },
  { id: "v4_29", word: "hungrig", ipa: "/ˈhʊnɡʁɪç/", meaning: "Đói", example: "Bist du hungrig?", category: "Weitere Wörter" },
  { id: "v4_30", word: "satt", ipa: "/zat/", meaning: "No", example: "Nein, danke, ich bin satt.", category: "Weitere Wörter" },
  { id: "v4_31", word: "je", ipa: "/jeː/", meaning: "Mỗi (cho mỗi)", example: "Die Tomaten kosten 2,80 Euro je Kilo.", category: "Weitere Wörter" },
  { id: "v4_32", word: "pro", ipa: "/pʁoː/", meaning: "Mỗi (pro Woche...)", example: "Einmal pro Woche gehe ich einkaufen.", category: "Weitere Wörter" },
  { id: "v4_33_s", word: "die Gewohnheit (số ít)", ipa: "/ɡəˈvoːnhaɪ̯t/", meaning: "Thói quen", example: "Das ist meine Essgewohnheit.", category: "Weitere Wörter" },
  { id: "v4_33_p", word: "die Gewohnheiten (số nhiều)", ipa: "/ɡəˈvoːnhaɪ̯tn̩/", meaning: "Thói quen", example: "Das ist meine Essgewohnheit.", category: "Weitere Wörter" },
  { id: "v4_34_s", word: "der Fehler (số ít)", ipa: "/ˈfeːlɐ/", meaning: "Lỗi", example: "Das ist ein großer Fehler.", category: "Weitere Wörter" },
  { id: "v4_34_p", word: "die Fehler (số nhiều)", ipa: "/ˈfeːlɐ/", meaning: "Lỗi", example: "Das ist ein großer Fehler.", category: "Weitere Wörter" },
  { id: "v4_35", word: "bestellen (nguyên thể)", ipa: "/bəˈʃtɛlən/", meaning: "Gọi món / Đặt hàng", example: "Was hast du bestellt?", category: "Weitere Wörter" },
  { id: "v4_36", word: "hoffen (nguyên thể)", ipa: "/ˈhɔfn̩/", meaning: "Hy vọng", example: "Ich hoffe, du magst Eier.", category: "Weitere Wörter" },
  { id: "v4_37", word: "nämlich", ipa: "/ˈnɛːmlɪç/", meaning: "Đó là vì / Bởi vì (giải thích lý do)", example: "Ich trinke Tee, ich mag nämlich keinen Kaffee.", category: "Weitere Wörter" }

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

      { id: "v5_1_s", word: "der Besuch (số ít)", ipa: "/bəˈzuːx/", meaning: "Chuyến viếng thăm", example: "Der Besuch war sehr kurz.", category: "Tourismus" },
      { id: "v5_1_p", word: "die Besuche (số nhiều)", ipa: "/bəˈzuːxə/", meaning: "Chuyến viếng thăm", example: "Der Besuch war sehr kurz.", category: "Tourismus" },
      { id: "v5_2_s", word: "der Club (số ít)", ipa: "/klʊp/", meaning: "Câu lạc bộ", example: "Wir gehen am Samstag in einen Club.", category: "Tourismus" },
      { id: "v5_2_p", word: "die Clubs (số nhiều)", ipa: "/klʊps/", meaning: "Câu lạc bộ", example: "Wir gehen am Samstag in einen Club.", category: "Tourismus" },
      { id: "v5_3", word: "die Ferien (số nhiều)", ipa: "/ˈfeːʁiən/", meaning: "Kỳ nghỉ", example: "Ich wünsche dir schöne Ferien!", category: "Tourismus" },
      { id: "v5_4_s", word: "die Führung (số ít)", ipa: "/ˈfyːʁʊŋ/", meaning: "Chuyến tham quan có hướng dẫn", example: "Wir machen eine Stadtführung.", category: "Tourismus" },
      { id: "v5_4_p", word: "die Führungen (số nhiều)", ipa: "/ˈfyːʁʊŋən/", meaning: "Chuyến tham quan có hướng dẫn", example: "Wir machen eine Stadtführung.", category: "Tourismus" },
      { id: "v5_5_s", word: "die Kamera (số ít)", ipa: "/ˈkaməʁa/", meaning: "Máy ảnh", example: "Hast du deine Kamera dabei?", category: "Tourismus" },
      { id: "v5_5_p", word: "die Kameras (số nhiều)", ipa: "/ˈkaməʁas/", meaning: "Máy ảnh", example: "Hast du deine Kamera dabei?", category: "Tourismus" },
      { id: "v5_6_s", word: "die Mauer (số ít)", ipa: "/ˈmaʊ̯ɐ/", meaning: "Bức tường (Stadtmauer: tường thành)", example: "Die alte Stadtmauer ist sehenswert.", category: "Tourismus" },
      { id: "v5_6_p", word: "die Mauern (số nhiều)", ipa: "/ˈmaʊ̯ɐn/", meaning: "Bức tường (Stadtmauer: tường thành)", example: "Die alte Stadtmauer ist sehenswert.", category: "Tourismus" },
      { id: "v5_7_s", word: "der Prospekt (số ít)", ipa: "/pʁoˈspɛkt/", meaning: "Tờ rơi (quảng cáo)", example: "Ich lese den Prospekt.", category: "Tourismus" },
      { id: "v5_7_p", word: "die Prospekte (số nhiều)", ipa: "/pʁoˈspɛktə/", meaning: "Tờ rơi (quảng cáo)", example: "Ich lese den Prospekt.", category: "Tourismus" },
      { id: "v5_8_s", word: "der Reiseführer (số ít)", ipa: "/ˈʁaɪ̯zəˌfyːʁɐ/", meaning: "Hướng dẫn viên / Sách hướng dẫn du lịch", example: "Unser Reiseführer war sehr nett.", category: "Tourismus" },
      { id: "v5_8_p", word: "die Reiseführer (số nhiều)", ipa: "/ˈʁaɪ̯zəˌfyːʁɐ/", meaning: "Hướng dẫn viên / Sách hướng dẫn du lịch", example: "Unser Reiseführer war sehr nett.", category: "Tourismus" },
      { id: "v5_9_s", word: "der Rundgang (số ít)", ipa: "/ˈʁʊntˌɡaŋ/", meaning: "Chuyến đi dạo quanh vòng", example: "Wir machen einen Rundgang durch die Altstadt.", category: "Tourismus" },
      { id: "v5_9_p", word: "die Rundgänge (số nhiều)", ipa: "/ˈʁʊntˌɡɛŋə/", meaning: "Chuyến đi dạo quanh vòng", example: "Wir machen einen Rundgang durch die Altstadt.", category: "Tourismus" },
      { id: "v5_10_s", word: "die Sehenswürdigkeit (số ít)", ipa: "/ˈzeːənsˌvʏʁdɪçkaɪ̯t/", meaning: "Danh lam thắng cảnh", example: "Der Dom ist eine bekannte Sehenswürdigkeit.", category: "Tourismus" },
      { id: "v5_10_p", word: "die Sehenswürdigkeiten (số nhiều)", ipa: "/ˈzeːənsˌvʏʁdɪçkaɪ̯tən/", meaning: "Danh lam thắng cảnh", example: "Der Dom ist eine bekannte Sehenswürdigkeit.", category: "Tourismus" },
      { id: "v5_11_s", word: "der Tourist (số ít)", ipa: "/tuˈʁɪst/", meaning: "Khách du lịch (nam)", example: "Viele Touristen kommen im Sommer.", category: "Tourismus" },
      { id: "v5_11_p", word: "die Touristen (số nhiều)", ipa: "/tuˈʁɪstn̩/", meaning: "Khách du lịch (nam)", example: "Viele Touristen kommen im Sommer.", category: "Tourismus" },
      { id: "v5_12_s", word: "das Trinkgeld (số ít)", ipa: "/ˈtʁɪŋkˌɡɛlt/", meaning: "Tiền boa", example: "Wir geben dem Kellner Trinkgeld.", category: "Tourismus" },
      { id: "v5_12_p", word: "die Trinkgelder (số nhiều)", ipa: "/ˈtʁɪŋkˌɡɛldɐ/", meaning: "Tiền boa", example: "Wir geben dem Kellner Trinkgeld.", category: "Tourismus" },
      { id: "v5_13_s", word: "die Unterkunft (số ít)", ipa: "/ˈʊntɐˌkʊnft/", meaning: "Chỗ ở", example: "Suchen Sie eine günstige Unterkunft?", category: "Tourismus" },
      { id: "v5_13_p", word: "die Unterkünfte (số nhiều)", ipa: "/ˈʊntɐˌkʏnftə/", meaning: "Chỗ ở", example: "Suchen Sie eine günstige Unterkunft?", category: "Tourismus" },
      { id: "v5_14", word: "besichtigen (nguyên thể)", ipa: "/bəˈzɪçtɪɡn̩/", meaning: "Tham quan", example: "Sie besichtigen das Museum.", category: "Tourismus" },
      { id: "v5_15", word: "sich interessieren (nguyên thể)", ipa: "/zɪç ɪntəʁɛˈsiːʁən/", meaning: "Quan tâm đến", example: "Interessierst du dich für Kunst?", category: "Tourismus" },
      { id: "v5_16", word: "wechseln (nguyên thể)", ipa: "/ˈvɛksl̩n/", meaning: "Đổi (Geld wechseln: đổi tiền)", example: "Wo kann ich Geld wechseln?", category: "Tourismus" },
      { id: "v5_17", word: "zeigen (nguyên thể)", ipa: "/ˈtsaɪ̯ɡn̩/", meaning: "Chỉ, cho xem", example: "Die Stadtführerin zeigt uns das Rathaus.", category: "Tourismus" },
      { id: "v5_18", word: "berühmt", ipa: "/bəˈʁyːmt/", meaning: "Nổi tiếng", example: "Der Dom ist sehr berühmt.", category: "Tourismus" },
      { id: "v5_19_1", word: "geöffnet", ipa: "/ɡəˈʔœfnət/", meaning: "Mở cửa", example: "Das Museum ist heute geöffnet.", category: "Tourismus" },
      { id: "v5_19_2", word: "offen", ipa: "/ˈɔfn̩/", meaning: "Mở cửa", example: "Das Museum ist heute offen.", category: "Tourismus" },
      { id: "v5_20_s", word: "die Nachricht (số ít)", ipa: "/ˈnaːxˌʁɪçt/", meaning: "Tin nhắn, tin tức", example: "Ich habe eine Nachricht von dir.", category: "Weitere Wörter" },
      { id: "v5_20_p", word: "die Nachrichten (số nhiều)", ipa: "/ˈnaːxˌʁɪçtn̩/", meaning: "Tin nhắn, tin tức", example: "Ich habe eine Nachricht von dir.", category: "Weitere Wörter" },
      { id: "v5_21_s", word: "die Postkarte (số ít)", ipa: "/ˈpɔstˌkaʁtə/", meaning: "Bưu thiếp", example: "Schreibst du mir eine Postkarte?", category: "Weitere Wörter" },
      { id: "v5_21_p", word: "die Postkarten (số nhiều)", ipa: "/ˈpɔstˌkaʁtn̩/", meaning: "Bưu thiếp", example: "Schreibst du mir eine Postkarte?", category: "Weitere Wörter" },
      { id: "v5_22_s", word: "der Supermarkt (số ít)", ipa: "/ˈzuːpɐˌmaʁkt/", meaning: "Siêu thị", example: "Der Supermarkt ist um die Ecke.", category: "Weitere Wörter" },
      { id: "v5_22_p", word: "die Supermärkte (số nhiều)", ipa: "/ˈzuːpɐˌmɛʁktə/", meaning: "Siêu thị", example: "Der Supermarkt ist um die Ecke.", category: "Weitere Wörter" },
      { id: "v5_23_s", word: "der Wunsch (số ít)", ipa: "/vʊnʃ/", meaning: "Mong muốn, điều ước", example: "Hast du noch einen Wunsch?", category: "Weitere Wörter" },
      { id: "v5_23_p", word: "die Wünsche (số nhiều)", ipa: "/ˈvʏnʃə/", meaning: "Mong muốn, điều ước", example: "Hast du noch einen Wunsch?", category: "Weitere Wörter" },
      { id: "v5_24", word: "abgeben (nguyên thể)", ipa: "/ˈapˌɡeːbn̩/", meaning: "Giao nộp, gửi (đồ)", example: "Bitte geben Sie Ihre Jacke ab.", category: "Weitere Wörter" },
      { id: "v5_25", word: "sich ärgern (nguyên thể)", ipa: "/zɪç ˈɛʁɡɐn/", meaning: "Tức giận", example: "Ich ärgere mich über das Wetter.", category: "Weitere Wörter" },
      { id: "v5_26", word: "dafür sein (nguyên thể)", ipa: "/daˈfyːɐ̯ zaɪ̯n/", meaning: "Ủng hộ (việc gì)", example: "Ich bin dafür, dass wir ins Kino gehen.", category: "Weitere Wörter" },
      { id: "v5_27", word: "dagegen sein (nguyên thể)", ipa: "/daˈɡeːɡn̩ zaɪ̯n/", meaning: "Phản đối", example: "Er ist dagegen.", category: "Weitere Wörter" },
      { id: "v5_28", word: "sich freuen (nguyên thể)", ipa: "/zɪç ˈfʁɔʏ̯ən/", meaning: "Vui mừng", example: "Ich freue mich auf den Urlaub.", category: "Weitere Wörter" },
      { id: "v5_29", word: "bunt", ipa: "/bʊnt/", meaning: "Nhiều màu sắc", example: "Das Haus ist bunt.", category: "Weitere Wörter" },
      { id: "v5_30", word: "einverstanden", ipa: "/ˈaɪ̯nfɛɐ̯ˌʃtandn̩/", meaning: "Đồng ý", example: "Bist du einverstanden?", category: "Weitere Wörter" },
      { id: "v5_31", word: "schick", ipa: "/ʃɪk/", meaning: "Sang trọng, sành điệu", example: "Der Club ist sehr schick.", category: "Weitere Wörter" },
      { id: "v5_32", word: "bestimmt", ipa: "/bəˈʃtɪmt/", meaning: "Chắc chắn", example: "Das wird bestimmt toll.", category: "Weitere Wörter" },
      { id: "v5_33", word: "meistens", ipa: "/ˈmaɪ̯stn̩s/", meaning: "Thường, hầu hết", example: "Meistens gehe ich am Wochenende ins Museum.", category: "Weitere Wörter" },
      { id: "v5_34", word: "später", ipa: "/ˈʃpɛːtɐ/", meaning: "Muộn hơn, sau đó", example: "Können wir das später machen?", category: "Weitere Wörter" },
      { id: "v5_35", word: "geschlossen", ipa: "/ɡəˈʃlɔsn̩/", meaning: "Đóng cửa", example: "Das Geschäft ist heute geschlossen.", category: "Tourismus" },
      { id: "v5_36", word: "beeindruckend", ipa: "/bəˈʔaɪ̯nˌdʁʊkn̩t/", meaning: "Ấn tượng", example: "Der Kölner Dom ist wirklich beeindruckend.", category: "Tourismus" }

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

      { id: "v6_1_s", word: "die Veranstaltung (số ít)", ipa: "/fɛɐ̯ˈʔanʃtaltʊŋ/", meaning: "Sự kiện", example: "Das ist meine Lieblingsveranstaltung.", category: "Veranstaltungen" },
      { id: "v6_1_p", word: "die Veranstaltungen (số nhiều)", ipa: "/fɛɐ̯ˈʔanʃtaltʊŋən/", meaning: "Sự kiện", example: "Das ist meine Lieblingsveranstaltung.", category: "Veranstaltungen" },
      { id: "v6_2_s", word: "die Bühne (số ít)", ipa: "/ˈbyːnə/", meaning: "Sân khấu", example: "Der Künstler steht auf der Bühne.", category: "Veranstaltungen" },
      { id: "v6_2_p", word: "die Bühnen (số nhiều)", ipa: "/ˈbyːnən/", meaning: "Sân khấu", example: "Der Künstler steht auf der Bühne.", category: "Veranstaltungen" },
      { id: "v6_3_s", word: "die Diskussion (số ít)", ipa: "/dɪskʊˈsjoːn/", meaning: "Cuộc thảo luận", example: "Die Diskussion war sehr spannend.", category: "Veranstaltungen" },
      { id: "v6_3_p", word: "die Diskussionen (số nhiều)", ipa: "/dɪskʊˈsjoːnən/", meaning: "Cuộc thảo luận", example: "Die Diskussion war sehr spannend.", category: "Veranstaltungen" },
      { id: "v6_4_s", word: "der Eintritt (số ít)", ipa: "/ˈaɪ̯nˌtʁɪt/", meaning: "Vé vào cửa / Sự vào cửa", example: "Der Eintritt ist heute kostenlos.", category: "Veranstaltungen" },
      { id: "v6_4_p", word: "die Eintritte (số nhiều)", ipa: "/ˈaɪ̯nˌtʁɪtə/", meaning: "Vé vào cửa / Sự vào cửa", example: "Der Eintritt ist heute kostenlos.", category: "Veranstaltungen" },
      { id: "v6_5_s", word: "die Ermäßigung (số ít)", ipa: "/ɛɐ̯ˈmɛːsɪɡʊŋ/", meaning: "Sự giảm giá", example: "Gibt es eine Ermäßigung für Studenten?", category: "Veranstaltungen" },
      { id: "v6_5_p", word: "die Ermäßigungen (số nhiều)", ipa: "/ɛɐ̯ˈmɛːsɪɡʊŋən/", meaning: "Sự giảm giá", example: "Gibt es eine Ermäßigung für Studenten?", category: "Veranstaltungen" },
      { id: "v6_6_s", word: "das Festival (số ít)", ipa: "/ˈfɛstɪval/", meaning: "Lễ hội", example: "Wir gehen im Sommer auf ein Festival.", category: "Veranstaltungen" },
      { id: "v6_6_p", word: "die Festivals (số nhiều)", ipa: "/ˈfɛstɪvals/", meaning: "Lễ hội", example: "Wir gehen im Sommer auf ein Festival.", category: "Veranstaltungen" },
      { id: "v6_7_s", word: "die Karte (số ít)", ipa: "/ˈkaʁtə/", meaning: "Vé (nói chung)", example: "Hast du schon die Karten gekauft?", category: "Veranstaltungen" },
      { id: "v6_7_p", word: "die Karten (số nhiều)", ipa: "/ˈkaʁtən/", meaning: "Vé (nói chung)", example: "Hast du schon die Karten gekauft?", category: "Veranstaltungen" },
      { id: "v6_8_s", word: "die Eintrittskarte (số ít)", ipa: "/ˈaɪ̯ntʁɪtsˌkaʁtə/", meaning: "Vé vào cửa", example: "Ich brauche zwei Eintrittskarten.", category: "Veranstaltungen" },
      { id: "v6_8_p", word: "die Eintrittskarten (số nhiều)", ipa: "/ˈaɪ̯ntʁɪtsˌkaʁtən/", meaning: "Vé vào cửa", example: "Ich brauche zwei Eintrittskarten.", category: "Veranstaltungen" },
      { id: "v6_9_s", word: "das Kostüm (số ít)", ipa: "/kɔsˈtyːm/", meaning: "Trang phục hóa trang", example: "Das Kostüm ist sehr schön.", category: "Veranstaltungen" },
      { id: "v6_9_p", word: "die Kostüme (số nhiều)", ipa: "/kɔsˈtyːmə/", meaning: "Trang phục hóa trang", example: "Das Kostüm ist sehr schön.", category: "Veranstaltungen" },
      { id: "v6_10_s", word: "die Kunst (số ít)", ipa: "/kʊnst/", meaning: "Nghệ thuật", example: "Interessierst du dich für Kunst?", category: "Veranstaltungen" },
      { id: "v6_10_p", word: "die Künste (số nhiều)", ipa: "/ˈkʏnstə/", meaning: "Nghệ thuật", example: "Interessierst du dich für Kunst?", category: "Veranstaltungen" },
      { id: "v6_11_ms", word: "der Künstler (số ít)", ipa: "/ˈkʏnstlɐ/", meaning: "Nghệ sĩ", example: "Er ist ein bekannter Künstler.", category: "Veranstaltungen" },
      { id: "v6_11_mp", word: "die Künstler (số nhiều)", ipa: "/ˈkʏnstlɐ/", meaning: "Nghệ sĩ", example: "Er ist ein bekannter Künstler.", category: "Veranstaltungen" },
      { id: "v6_11_fs", word: "die Künstlerin (số ít)", ipa: "/ˈkʏnstlərɪn/", meaning: "Nghệ sĩ", example: "Er ist ein bekannter Künstler.", category: "Veranstaltungen" },
      { id: "v6_11_fp", word: "die Künstlerinnen (số nhiều)", ipa: "/ˈkʏnstlərɪnən/", meaning: "Nghệ sĩ", example: "Er ist ein bekannter Künstler.", category: "Veranstaltungen" },
      { id: "v6_12_s", word: "der Vortrag (số ít)", ipa: "/ˈfoːɐ̯ˌtʁaːk/", meaning: "Bài thuyết trình / Diễn thuyết", example: "Der Vortrag über Kunst war interessant.", category: "Veranstaltungen" },
      { id: "v6_12_p", word: "die Vorträge (số nhiều)", ipa: "/ˈfoːɐ̯ˌtʁɛːɡə/", meaning: "Bài thuyết trình / Diễn thuyết", example: "Der Vortrag über Kunst war interessant.", category: "Veranstaltungen" },
      { id: "v6_13", word: "erleben (nguyên thể)", ipa: "/ɛɐ̯ˈleːbən/", meaning: "Trải nghiệm", example: "Auf dem Festival kann man viel erleben.", category: "Veranstaltungen" },
      { id: "v6_14", word: "stattfinden (nguyên thể)", ipa: "/ˈʃtatˌfɪndən/", meaning: "Diễn ra (sự kiện)", example: "Das Konzert findet um 20 Uhr statt.", category: "Veranstaltungen" },
      { id: "v6_15", word: "zahlen (nguyên thể)", ipa: "/ˈtsaːlən/", meaning: "Thanh toán, trả tiền", example: "Ich möchte zahlen, bitte.", category: "Veranstaltungen" },
      { id: "v6_16", word: "spannend", ipa: "/ˈʃpanənt/", meaning: "Hấp dẫn", example: "Der Film ist sehr spannend.", category: "Veranstaltungen" },
      { id: "v6_17_s", word: "der Vorschlag (số ít)", ipa: "/ˈfoːɐ̯ˌʃlaːk/", meaning: "Lời đề nghị", example: "Das ist ein guter Vorschlag.", category: "Verabredungen" },
      { id: "v6_17_p", word: "die Vorschläge (số nhiều)", ipa: "/ˈfoːɐ̯ˌʃlɛːɡə/", meaning: "Lời đề nghị", example: "Das ist ein guter Vorschlag.", category: "Verabredungen" },
      { id: "v6_18", word: "ausmachen (nguyên thể)", ipa: "/ˈaʊ̯sˌmaxən/", meaning: "Quyết định, hẹn", example: "Wir haben einen Treffpunkt ausgemacht.", category: "Verabredungen" },
      { id: "v6_19", word: "halten von (nguyên thể)", ipa: "/ˈhaltən fɔn/", meaning: "Nghĩ gì về (ai/cái gì)", example: "Was hältst du von dieser Idee?", category: "Verabredungen" },
      { id: "v6_20", word: "hin", ipa: "/hɪn/", meaning: "Đi đến đó", example: "Gehst du auch hin?", category: "Verabredungen" },
      { id: "v6_21", word: "hinfahren (nguyên thể)", ipa: "/ˈhɪnˌfaːʁən/", meaning: "Lái xe đến đó", example: "Wir fahren zusammen hin.", category: "Verabredungen" },
      { id: "v6_22", word: "lassen (nguyên thể)", ipa: "/ˈlasən/", meaning: "Để, cho phép, rủ", example: "Lass uns ins Kino gehen!", category: "Verabredungen" },
      { id: "v6_23", word: "mitkommen (nguyên thể)", ipa: "/ˈmɪtˌkɔmən/", meaning: "Đi cùng", example: "Kommst du mit?", category: "Verabredungen" },
      { id: "v6_24", word: "sich verabreden (nguyên thể)", ipa: "/zɪç fɛɐ̯ˈʔapˌʁeːdn̩/", meaning: "Hẹn hò", example: "Wir haben uns für morgen verabredet.", category: "Verabredungen" },
      { id: "v6_25", word: "vorschlagen (nguyên thể)", ipa: "/ˈfoːɐ̯ˌʃlaːɡn̩/", meaning: "Đề nghị", example: "Ich schlage vor, wir gehen essen.", category: "Verabredungen" },
      { id: "v6_26", word: "prima", ipa: "/ˈpʁiːma/", meaning: "Tuyệt vời", example: "Das ist eine prima Idee!", category: "Verabredungen" },
      { id: "v6_27", word: "das Feuer", ipa: "/ˈfɔɪ̯ɐ/", meaning: "Lửa", example: "Wir sitzen am Lagerfeuer.", category: "Weitere Wörter" },
      { id: "v6_28_s", word: "das Mal (số ít)", ipa: "/maːl/", meaning: "Lần", example: "Das ist mein erstes Mal in Berlin.", category: "Weitere Wörter" },
      { id: "v6_28_p", word: "die Male (số nhiều)", ipa: "/ˈmaːlə/", meaning: "Lần", example: "Das ist mein erstes Mal in Berlin.", category: "Weitere Wörter" },
      { id: "v6_28_phrase", word: "das erste Mal", ipa: "/das ˈeːɐ̯stə maːl/", meaning: "Lần đầu tiên", example: "Das ist mein erstes Mal in Berlin.", category: "Weitere Wörter" },
      { id: "v6_29_a", word: "da", ipa: "/daː/", meaning: "Ở đó", example: "Wer ist da?", category: "Weitere Wörter" },
      { id: "v6_29_b", word: "dort", ipa: "/dɔʁt/", meaning: "Ở đó", example: "Die Bühne ist dort.", category: "Weitere Wörter" },
      { id: "v6_30", word: "genau", ipa: "/ɡəˈnaʊ̯/", meaning: "Chính xác", example: "Genau das meine ich.", category: "Weitere Wörter" },
      { id: "v6_31", word: "mal", ipa: "/maːl/", meaning: "Một chút, thử xem", example: "Schau mal!", category: "Weitere Wörter" },
      { id: "v6_32", word: "ziemlich", ipa: "/ˈtsiːmlɪç/", meaning: "Khá", example: "Das ist ziemlich teuer.", category: "Weitere Wörter" },
      { id: "v6_33", word: "zusammen", ipa: "/tsuˈzamən/", meaning: "Cùng nhau", example: "Wir gehen zusammen.", category: "Weitere Wörter" }

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

      { id: "l7_v1_s", word: "die Art (số ít)", ipa: "/aːɐ̯t/", meaning: "loại, hình thức", example: "Welche Art von Sport machst du?", exampleTranslation: "Bạn chơi loại thể thao nào?", category: "Weitere Wörter" },
      { id: "l7_v1_p", word: "die Arten (số nhiều)", ipa: "/ˈaːɐ̯tn̩/", meaning: "loại, hình thức", example: "Welche Art von Sport machst du?", exampleTranslation: "Bạn chơi loại thể thao nào?", category: "Weitere Wörter" },
      { id: "l7_v2_s", word: "die Sportart (số ít)", ipa: "/ˈʃpɔʁtˌʔaːɐ̯t/", meaning: "môn thể thao", example: "Schwimmen ist eine gute Sportart.", exampleTranslation: "Bơi lội là một môn thể thao tốt.", category: "Sport" },
      { id: "l7_v2_p", word: "die Sportarten (số nhiều)", ipa: "/ˈʃpɔʁtˌʔaːɐ̯tn̩/", meaning: "môn thể thao", example: "Es gibt viele verschiedene Sportarten.", exampleTranslation: "Có rất nhiều môn thể thao khác nhau.", category: "Sport" },
      { id: "l7_v3_s", word: "die Diät (số ít)", ipa: "/diˈɛːt/", meaning: "chế độ ăn kiêng", example: "Sie macht eine Diät.", exampleTranslation: "Cô ấy đang ăn kiêng.", category: "Gesundheit" },
      { id: "l7_v3_p", word: "die Diäten (số nhiều)", ipa: "/diˈɛːtn̩/", meaning: "chế độ ăn kiêng", example: "Viele Diäten sind nicht gesund.", exampleTranslation: "Nhiều chế độ ăn kiêng không lành mạnh.", category: "Gesundheit" },
      { id: "l7_v4", word: "die Gesundheit (số ít)", ipa: "/ɡəˈzʊntˌhaɪ̯t/", meaning: "sức khỏe", example: "Gesundheit ist sehr wichtig.", exampleTranslation: "Sức khỏe rất quan trọng.", category: "Gesundheit" },
      { id: "l7_v5_s", word: "das Gewicht (số ít)", ipa: "/ɡəˈvɪçt/", meaning: "cân nặng", example: "Sein Gewicht ist normal.", exampleTranslation: "Cân nặng của anh ấy bình thường.", category: "Gesundheit" },
      { id: "l7_v5_p", word: "die Gewichte (số nhiều)", ipa: "/ɡəˈvɪçtə/", meaning: "cân nặng, quả tạ", example: "Er hebt schwere Gewichte im Fitnessstudio.", exampleTranslation: "Anh ấy nâng tạ nặng ở phòng tập gym.", category: "Gesundheit" },
      { id: "l7_v6_s", word: "das Training (số ít)", ipa: "/ˈtʁeːnɪŋ/", meaning: "sự tập luyện", example: "Das Training fängt um 6 Uhr an.", exampleTranslation: "Buổi tập bắt đầu lúc 6 giờ.", category: "Sport" },
      { id: "l7_v6_p", word: "die Trainings (số nhiều)", ipa: "/ˈtʁeːnɪŋs/", meaning: "sự tập luyện", example: "Die Trainings für die Meisterschaft sind intensiv.", exampleTranslation: "Các buổi tập cho giải vô địch rất căng thẳng.", category: "Sport" },
      { id: "l7_v7", word: "abnehmen (nguyên thể)", ipa: "/ˈapˌneːmən/", meaning: "giảm cân (du nimmst ab, er nimmt ab, hat abgenommen)", example: "Er möchte 5 Kilo abnehmen.", exampleTranslation: "Anh ấy muốn giảm 5 cân.", category: "Aktion" },
      { id: "l7_v8", word: "sich ausruhen (nguyên thể)", ipa: "/zɪç ˈaʊ̯sˌʁuːən/", meaning: "nghỉ ngơi (hat sich ausgeruht)", example: "Am Wochenende ruhe ich mich aus.", exampleTranslation: "Vào cuối tuần tôi nghỉ ngơi.", category: "Aktion" },
      { id: "l7_v9", word: "trainieren (nguyên thể)", ipa: "/tʁeˈniːʁən/", meaning: "tập luyện (hat trainiert)", example: "Wir trainieren jeden Tag.", exampleTranslation: "Chúng tôi tập luyện mỗi ngày.", category: "Aktion" },
      { id: "l7_v10", word: "wiegen (nguyên thể)", ipa: "/ˈviːɡn̩/", meaning: "cân nặng bao nhiêu / cân (vật) (hat gewogen)", example: "Wie viel wiegst du?", exampleTranslation: "Bạn nặng bao nhiêu?", category: "Aktion" },
      { id: "l7_v11", word: "fit", ipa: "/fɪt/", meaning: "khỏe mạnh, thon gọn", example: "Ich bin nicht fit.", exampleTranslation: "Tôi không có sức khỏe tốt / không thon gọn.", category: "Adjektiv" },
      { id: "l7_v12", word: "frisch", ipa: "/fʁɪʃ/", meaning: "tươi mát, trong lành", example: "Das Gemüse ist frisch.", exampleTranslation: "Rau này tươi.", category: "Adjektiv" },
      { id: "l7_v13", word: "die frische Luft", ipa: "/diː ˈfʁɪʃə lʊft/", meaning: "không khí trong lành", example: "Wir gehen an die frische Luft.", exampleTranslation: "Chúng tôi đi ra chỗ có không khí trong lành.", category: "Weitere Wörter" },
      { id: "l7_v14", word: "regelmäßig", ipa: "/ˈʁeːɡl̩ˌmɛːsɪç/", meaning: "thường xuyên, đều đặn", example: "Man sollte regelmäßig Sport machen.", exampleTranslation: "Người ta nên tập thể thao đều đặn.", category: "Adverb" },
      { id: "l7_v15", word: "selten", ipa: "/ˈzɛltn̩/", meaning: "hiếm khi", example: "Ich esse selten Fastfood.", exampleTranslation: "Tôi hiếm khi ăn thức ăn nhanh.", category: "Adverb" },
      { id: "l7_v16", word: "mindestens", ipa: "/ˈmɪndəstn̩s/", meaning: "ít nhất", example: "Du solltest mindestens zwei Liter Wasser trinken.", exampleTranslation: "Bạn nên uống ít nhất 2 lít nước.", category: "Adverb" },
      { id: "l7_v17", word: "das Golf (số ít)", ipa: "/ɡɔlf/", meaning: "môn golf", example: "Spielen Sie Golf?", exampleTranslation: "Ngài có chơi golf không?", category: "Sport" },
      { id: "l7_v18_s", word: "die Nudel (số ít)", ipa: "/ˈnuːdl̩/", meaning: "mì", example: "Eine Nudel ist vom Tisch gefallen.", exampleTranslation: "Một sợi mì đã rơi khỏi bàn.", category: "Essen & Trinken" },
      { id: "l7_v18_p", word: "die Nudeln (số nhiều)", ipa: "/ˈnuːdln̩/", meaning: "mì", example: "Ich esse gern Nudeln.", exampleTranslation: "Tôi thích ăn mì.", category: "Essen & Trinken" },
      { id: "l7_v19", word: "die Post (số ít)", ipa: "/pɔst/", meaning: "bưu điện, thư từ", example: "Ich muss meine Post bearbeiten.", exampleTranslation: "Tôi phải xử lý thư từ của mình.", category: "Weitere Wörter" },
      { id: "l7_v20_s", word: "die Stelle (số ít)", ipa: "/ˈʃtɛlə/", meaning: "vị trí / an deiner Stelle: nếu tôi là bạn", example: "An deiner Stelle würde ich joggen gehen.", exampleTranslation: "Nếu là bạn, tôi sẽ đi chạy bộ.", category: "Weitere Wörter" },
      { id: "l7_v20_p", word: "die Stellen (số nhiều)", ipa: "/ˈʃtɛlən/", meaning: "vị trí", example: "In dieser Firma gibt es viele offene Stellen.", exampleTranslation: "Trong công ty này có nhiều vị trí trống.", category: "Weitere Wörter" },
      { id: "l7_v21_s", word: "der Verein (số ít)", ipa: "/fɛɐ̯ˈʔaɪ̯n/", meaning: "câu lạc bộ", example: "Ich bin in einem Sportverein.", exampleTranslation: "Tôi tham gia một câu lạc bộ thể thao.", category: "Organisation" },
      { id: "l7_v21_p", word: "die Vereine (số nhiều)", ipa: "/fɛɐ̯ˈʔaɪ̯nə/", meaning: "câu lạc bộ", example: "In Deutschland gibt es viele Sportvereine.", exampleTranslation: "Ở Đức có rất nhiều câu lạc bộ thể thao.", category: "Organisation" },
      { id: "l7_v22", word: "empfehlen (nguyên thể)", ipa: "/ɛmpˈfeːlən/", meaning: "khuyên, giới thiệu (du empfiehlst, er empfiehlt, hat empfohlen)", example: "Welche Sportart würdest du mir empfehlen?", exampleTranslation: "Bạn sẽ giới thiệu môn thể thao nào cho tôi?", category: "Aktion" },
      { id: "l7_v23", word: "leihen (nguyên thể)", ipa: "/ˈlaɪ̯ən/", meaning: "cho mượn, mượn (hat geliehen)", example: "Kannst du mir dein Fahrrad leihen?", exampleTranslation: "Bạn có thể cho tôi mượn xe đạp của bạn không?", category: "Aktion" },
      { id: "l7_v24", word: "öffnen (nguyên thể)", ipa: "/ˈœfnən/", meaning: "mở (hat geöffnet)", example: "Das Schwimmbad hat geöffnet.", exampleTranslation: "Hồ bơi đang mở cửa.", category: "Aktion" },
      { id: "l7_v25", word: "teilnehmen (nguyên thể)", ipa: "/ˈtaɪ̯lˌneːmən/", meaning: "tham gia (du nimmst teil, er nimmt teil, hat teilgenommen)", example: "Sie nimmt an einem Kurs teil.", exampleTranslation: "Cô ấy tham gia một khóa học.", category: "Aktion" },
      { id: "l7_v26", word: "circa", ipa: "/ˈt͡sɪʁka/", meaning: "khoảng", example: "Das dauert circa fünf Minuten.", exampleTranslation: "Việc đó kéo dài khoảng 5 phút.", category: "Adverb" },
      { id: "l7_v27", word: "früh", ipa: "/fʁyː/", meaning: "sớm", example: "Ich stehe früh auf.", exampleTranslation: "Tôi thức dậy sớm.", category: "Adverb" },
      { id: "l7_v28", word: "morgens, nachmittags, abends, nachts", ipa: "/ˈmɔʁɡn̩s, ˈnaːxˌmɪtaːks, ˈaːbn̩ts, naxts/", meaning: "mỗi buổi sáng / chiều / tối / đêm", example: "Abends esse ich keine Nudeln mehr.", exampleTranslation: "Vào các buổi tối tôi không ăn mì nữa.", category: "Zeit" },
      { id: "l7_v29", word: "montags, dienstags, ...", ipa: "/ˈmoːnˌtaːks, ˈdiːnsˌtaːks/", meaning: "mỗi thứ hai, thứ ba, ...", example: "Wir könnten montags joggen gehen.", exampleTranslation: "Chúng ta có thể đi chạy bộ vào các thứ Hai.", category: "Zeit" },
      { id: "l7_v30", word: "zwischen", ipa: "/ˈt͡svɪʃn̩/", meaning: "ở giữa", example: "Zwischen 7.00 und 7.15 Uhr gibt es Frühstück.", exampleTranslation: "Từ 7:00 đến 7:15 có bữa sáng.", category: "Präposition" },
      { id: "l7_v31", word: "andere", ipa: "/ˈandəʁə/", meaning: "khác", example: "Wir können auch andere Sportarten machen.", exampleTranslation: "Chúng ta cũng có thể chơi các môn thể thao khác.", category: "Adjektiv" }

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

      { id: "l8_v1_s", word: "der Krankenwagen (số ít)", ipa: "/ˈkʁaŋkn̩ˌvaːɡn̩/", meaning: "xe cứu thương", example: "Der Krankenwagen ist schnell da.", exampleTranslation: "Xe cứu thương đến nhanh.", category: "Medizin & Gesundheit" },
      { id: "l8_v1_p", word: "die Krankenwagen (số nhiều)", ipa: "/ˈkʁaŋkn̩ˌvaːɡn̩/", meaning: "xe cứu thương", example: "Der Krankenwagen ist schnell da.", exampleTranslation: "Xe cứu thương đến nhanh.", category: "Medizin & Gesundheit" },
      { id: "l8_v2_s", word: "der Notarzt (số ít)", ipa: "/ˈnoːtˌʔaːɐ̯tst/", meaning: "bác sĩ cấp cứu", example: "Der Notarzt untersucht den Verletzten.", exampleTranslation: "Bác sĩ cấp cứu kiểm tra người bị thương.", category: "Personen" },
      { id: "l8_v2_p", word: "die Notärzte (số nhiều)", ipa: "/ˈnoːtˌʔɛːɐ̯tstə/", meaning: "bác sĩ cấp cứu", example: "Der Notarzt untersucht den Verletzten.", exampleTranslation: "Bác sĩ cấp cứu kiểm tra người bị thương.", category: "Personen" },
      { id: "l8_v3_s", word: "die Notaufnahme (số ít)", ipa: "/ˈnoːtˌʔaʊ̯fnaːmə/", meaning: "khoa cấp cứu", example: "Sie ist in der Notaufnahme.", exampleTranslation: "Cô ấy ở trong khoa cấp cứu.", category: "Medizin & Gesundheit" },
      { id: "l8_v3_p", word: "die Notaufnahmen (số nhiều)", ipa: "/ˈnoːtˌʔaʊ̯fnaːmən/", meaning: "khoa cấp cứu", example: "Sie ist in der Notaufnahme.", exampleTranslation: "Cô ấy ở trong khoa cấp cứu.", category: "Medizin & Gesundheit" },
      { id: "l8_v4_s", word: "der Notfall (số ít)", ipa: "/ˈnoːtˌfal/", meaning: "trường hợp khẩn cấp, cấp cứu", example: "Bei einem Notfall rufen Sie die 112.", exampleTranslation: "Trong trường hợp khẩn cấp, hãy gọi 112.", category: "Situationen" },
      { id: "l8_v4_p", word: "die Notfälle (số nhiều)", ipa: "/ˈnoːtˌfɛlə/", meaning: "trường hợp khẩn cấp, cấp cứu", example: "Bei einem Notfall rufen Sie die 112.", exampleTranslation: "Trong trường hợp khẩn cấp, hãy gọi 112.", category: "Situationen" },
      { id: "l8_v5_s", word: "der Unfall (số ít)", ipa: "/ˈʊnˌfal/", meaning: "tai nạn", example: "Er hatte einen Autounfall.", exampleTranslation: "Anh ấy bị tai nạn ô tô.", category: "Situationen" },
      { id: "l8_v5_p", word: "die Unfälle (số nhiều)", ipa: "/ˈʊnˌfɛlə/", meaning: "tai nạn", example: "Er hatte einen Autounfall.", exampleTranslation: "Anh ấy bị tai nạn ô tô.", category: "Situationen" },
      { id: "l8_v6_s", word: "die Verletzung (số ít)", ipa: "/fɛɐ̯ˈlɛtsʊŋ/", meaning: "vết thương", example: "Die Verletzung ist nicht so schlimm.", exampleTranslation: "Vết thương không nghiêm trọng lắm.", category: "Medizin & Gesundheit" },
      { id: "l8_v6_p", word: "die Verletzungen (số nhiều)", ipa: "/fɛɐ̯ˈlɛtsʊŋən/", meaning: "vết thương", example: "Die Verletzung ist nicht so schlimm.", exampleTranslation: "Vết thương không nghiêm trọng lắm.", category: "Medizin & Gesundheit" },
      { id: "l8_v7", word: "verletzen (sich) (nguyên thể)", ipa: "/fɛɐ̯ˈlɛtsn̩/", meaning: "làm bị thương", example: "Ich habe mich beim Sport verletzt.", exampleTranslation: "Tôi đã tự làm mình bị thương lúc chơi thể thao.", category: "Aktion" },
      { id: "l8_v8", word: "das Blut", ipa: "/bluːt/", meaning: "máu", example: "Mein Bein hat viel Blut verloren.", exampleTranslation: "Chân của tôi đã mất nhiều máu.", category: "Medizin & Gesundheit" },
      { id: "l8_v9", word: "die Grippe", ipa: "/ˈɡʁɪpə/", meaning: "bệnh cúm", example: "Er liegt mit Grippe im Bett.", exampleTranslation: "Anh ấy đang nằm viện vì bị cúm.", category: "Medizin & Gesundheit" },
      { id: "l8_v10_s", word: "das Herz (số ít)", ipa: "/hɛʁts/", meaning: "trái tim", example: "Hoffentlich ist es nicht das Herz!", exampleTranslation: "Hy vọng đó không phải là bệnh tim!", category: "Medizin & Gesundheit" },
      { id: "l8_v10_p", word: "die Herzen (số nhiều)", ipa: "/ˈhɛʁtsn̩/", meaning: "trái tim", example: "Hoffentlich ist es nicht das Herz!", exampleTranslation: "Hy vọng đó không phải là bệnh tim!", category: "Medizin & Gesundheit" },
      { id: "l8_v11_s", word: "die Krankheit (số ít)", ipa: "/ˈkʁaŋkˌhaɪ̯t/", meaning: "căn bệnh", example: "Was ist das für eine Krankheit?", exampleTranslation: "Đó là loại bệnh gì vậy?", category: "Medizin & Gesundheit" },
      { id: "l8_v11_p", word: "die Krankheiten (số nhiều)", ipa: "/ˈkʁaŋkˌhaɪ̯tn̩/", meaning: "căn bệnh", example: "Was ist das für eine Krankheit?", exampleTranslation: "Đó là loại bệnh gì vậy?", category: "Medizin & Gesundheit" },
      { id: "l8_v12_s", word: "der Magen (số ít)", ipa: "/ˈmaːɡn̩/", meaning: "dạ dày", example: "Mein Magen tut weh.", exampleTranslation: "Dạ dày tôi bị đau.", category: "Medizin & Gesundheit" },
      { id: "l8_v12_p", word: "die Mägen (số nhiều)", ipa: "/ˈmɛːɡn̩/", meaning: "dạ dày", example: "Mein Magen tut weh.", exampleTranslation: "Dạ dày tôi bị đau.", category: "Medizin & Gesundheit" },
      { id: "l8_v13_s", word: "die Operation (số ít)", ipa: "/opəʁaˈtsjoːn/", meaning: "ca phẫu thuật", example: "Die Operation hat lange gedauert.", exampleTranslation: "Ca phẫu thuật kéo dài rất lâu.", category: "Medizin & Gesundheit" },
      { id: "l8_v13_p", word: "die Operationen (số nhiều)", ipa: "/opəʁaˈtsjoːnən/", meaning: "ca phẫu thuật", example: "Die Operation hat lange gedauert.", exampleTranslation: "Ca phẫu thuật kéo dài rất lâu.", category: "Medizin & Gesundheit" },
      { id: "l8_v14_s", word: "die Sprechstunde (số ít)", ipa: "/ˈʃpʁɛçˌʃtʊndə/", meaning: "giờ khám bệnh", example: "Wann hat der Arzt Sprechstunde?", exampleTranslation: "Khi nào thì bác sĩ có giờ khám bệnh?", category: "Medizin & Gesundheit" },
      { id: "l8_v14_p", word: "die Sprechstunden (số nhiều)", ipa: "/ˈʃpʁɛçˌʃtʊndn̩/", meaning: "giờ khám bệnh", example: "Wann hat der Arzt Sprechstunde?", exampleTranslation: "Khi nào thì bác sĩ có giờ khám bệnh?", category: "Medizin & Gesundheit" },
      { id: "l8_v15_s", word: "die Untersuchung (số ít)", ipa: "/ˌʊntɐˈzuːxʊŋ/", meaning: "sự kiểm tra, khám", example: "Die Untersuchung dauert nur kurz.", exampleTranslation: "Cuộc kiểm tra chỉ diễn ra ngắn thôi.", category: "Medizin & Gesundheit" },
      { id: "l8_v15_p", word: "die Untersuchungen (số nhiều)", ipa: "/ˌʊntɐˈzuːxʊŋən/", meaning: "sự kiểm tra, khám", example: "Die Untersuchung dauert nur kurz.", exampleTranslation: "Cuộc kiểm tra chỉ diễn ra ngắn thôi.", category: "Medizin & Gesundheit" },
      { id: "l8_v16_s", word: "der Verband (số ít)", ipa: "/fɛɐ̯ˈbant/", meaning: "băng gạc", example: "Der Arzt macht einen Verband.", exampleTranslation: "Bác sĩ bó băng.", category: "Medizin & Gesundheit" },
      { id: "l8_v16_p", word: "die Verbände (số nhiều)", ipa: "/fɛɐ̯ˈbɛndə/", meaning: "băng gạc", example: "Der Arzt macht einen Verband.", exampleTranslation: "Bác sĩ bó băng.", category: "Medizin & Gesundheit" },
      { id: "l8_v17", word: "bluten (nguyên thể)", ipa: "/ˈbluːtn̩/", meaning: "chảy máu", example: "Mein Finger blutet.", exampleTranslation: "Ngón tay của tôi đang chảy máu.", category: "Aktion" },
      { id: "l8_v18", word: "operieren (nguyên thể)", ipa: "/opəˈʁiːʁən/", meaning: "phẫu thuật", example: "Der Arzt operiert das Knie.", exampleTranslation: "Bác sĩ phẫu thuật đầu gối.", category: "Aktion" },
      { id: "l8_v19", word: "sterben (nguyên thể)", ipa: "/ˈʃtɛʁbn̩/", meaning: "chết, qua đời", example: "Seine Großmutter ist gestorben.", exampleTranslation: "Bà của anh ấy đã qua đời.", category: "Aktion" },
      { id: "l8_v20", word: "untersuchen (nguyên thể)", ipa: "/ˌʊntɐˈzuːxn̩/", meaning: "kiểm tra, theo dõi", example: "Der Arzt untersucht den Patienten.", exampleTranslation: "Bác sĩ khám cho bệnh nhân.", category: "Aktion" },
      { id: "l8_v21", word: "verbinden (nguyên thể)", ipa: "/fɛɐ̯ˈbɪndn̩/", meaning: "băng bó, kết nối", example: "Er verbindet die Wunde.", exampleTranslation: "Anh ấy băng bó vết thương.", category: "Aktion" },
      { id: "l8_v22", word: "erkältet sein", ipa: "/ɛɐ̯ˈkɛltət zaɪ̯n/", meaning: "bị cảm lạnh", example: "Ich bin stark erkältet.", exampleTranslation: "Tôi đang bị cảm lạnh nặng.", category: "Zustand & Adjektiv" },
      { id: "l8_v23_s", word: "der Satz (số ít)", ipa: "/zats/", meaning: "câu", example: "Ich schreibe einen Satz.", exampleTranslation: "Tôi viết một câu.", category: "Weitere Wörter" },
      { id: "l8_v23_p", word: "die Sätze (số nhiều)", ipa: "/ˈzɛtsə/", meaning: "câu", example: "Ich schreibe einen Satz.", exampleTranslation: "Tôi viết một câu.", category: "Weitere Wörter" },
      { id: "l8_v24_s", word: "die Sorge (số ít)", ipa: "/ˈzɔʁɡə/", meaning: "sự lo lắng", example: "Mach dir keine Sorgen!", exampleTranslation: "Đừng lo lắng!", category: "Gefühle" },
      { id: "l8_v24_p", word: "die Sorgen (số nhiều)", ipa: "/ˈzɔʁɡn̩/", meaning: "sự lo lắng", example: "Mach dir keine Sorgen!", exampleTranslation: "Đừng lo lắng!", category: "Gefühle" },
      { id: "l8_v25", word: "sich Sorgen machen", ipa: "/zɪç ˈzɔʁɡn̩ ˈmaxn̩/", meaning: "lo lắng", example: "Ich mache mir Sorgen um ihn.", exampleTranslation: "Tôi lo lắng cho anh ấy.", category: "Aktion" },
      { id: "l8_v26_s", word: "die Wahrheit (số ít)", ipa: "/ˈvaːɐ̯ˌhaɪ̯t/", meaning: "sự thật", example: "Sag mir bitte die Wahrheit.", exampleTranslation: "Xin hãy nói cho tôi biết sự thật.", category: "Weitere Wörter" },
      { id: "l8_v26_p", word: "die Wahrheiten (số nhiều)", ipa: "/ˈvaːɐ̯ˌhaɪ̯tn̩/", meaning: "sự thật", example: "Sag mir bitte die Wahrheit.", exampleTranslation: "Xin hãy nói cho tôi biết sự thật.", category: "Weitere Wörter" },
      { id: "l8_v27", word: "hinfallen (nguyên thể)", ipa: "/ˈhɪnˌfalən/", meaning: "vấp ngã", example: "Er ist hingefallen und hat sich verletzt.", exampleTranslation: "Anh ấy đã bị ngã và tự làm mình bị thương.", category: "Aktion" },
      { id: "l8_v28", word: "los sein", ipa: "/loːs zaɪ̯n/", meaning: "xảy ra chuyện gì", example: "Was ist denn los?", exampleTranslation: "Có chuyện gì đã xảy ra vậy?", category: "Redewendung" },
      { id: "l8_v29", word: "vertrauen (nguyên thể)", ipa: "/fɛɐ̯ˈtʁaʊ̯ən/", meaning: "tin tưởng", example: "Ich vertraue meinem Arzt.", exampleTranslation: "Tôi tin tưởng bác sĩ của mình.", category: "Aktion" },
      { id: "l8_v30", word: "weil", ipa: "/vaɪ̯l/", meaning: "bởi vì", example: "Ich habe Kopfschmerzen, weil ich krank bin.", exampleTranslation: "Tôi bị đau đầu vì tôi bị ốm.", category: "Konjunktionen" },
      { id: "l8_v31", word: "deshalb", ipa: "/ˈdɛsˌhalp/", meaning: "vì vậy", example: "Ich bin krank. Deshalb komme ich nicht.", exampleTranslation: "Tôi đang ốm. Vì vậy tôi không đến.", category: "Adverbien" }
    
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

      {
        id: "l9_v1_s",
        word: "die Produktion (số ít)",
        ipa: "/pʁodʊkˈt͡si̯oːn/",
        meaning: "sự sản xuất",
        example: "Die Produktion in Vietnam steigt.",
        exampleTranslation: "Sự sản xuất ở Việt Nam đang tăng.",
        category: "Konzepte",
      },
      {
        id: "l9_v1_p",
        word: "die Produktionen (số nhiều)",
        ipa: "/pʁodʊkˈt͡si̯oːnən/",
        meaning: "sự sản xuất",
        example: "Die Produktionen in mehreren Ländern wurden gestoppt.",
        exampleTranslation: "Việc sản xuất ở nhiều quốc gia đã bị dừng lại.",
        category: "Konzepte",
      },
      {
        id: "l9_v2_s",
        word: "das Werk (số ít)",
        ipa: "/vɛʁk/",
        meaning: "nhà máy",
        example: "Das ist ein großes Werk von Audi.",
        exampleTranslation: "Đó là một nhà máy lớn của Audi.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v2_p",
        word: "die Werke (số nhiều)",
        ipa: "/ˈvɛʁkə/",
        meaning: "nhà máy",
        example: "Die Werke des Unternehmens sind auf der ganzen Welt verteilt.",
        exampleTranslation: "Các nhà máy của công ty được phân bổ trên toàn thế giới.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v3_s",
        word: "das Lager (số ít)",
        ipa: "/ˈlaːɡɐ/",
        meaning: "nhà kho",
        example: "Wir haben viele Teile im Lager.",
        exampleTranslation: "Chúng tôi có nhiều phụ tùng trong kho.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v3_p",
        word: "die Lager (số nhiều)",
        ipa: "/ˈlaːɡɐ/",
        meaning: "nhà kho",
        example: "Die Lager sind voll.",
        exampleTranslation: "Các kho hàng đã đầy.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v4_s",
        word: "die Maschine (số ít)",
        ipa: "/maˈʃiːnə/",
        meaning: "máy móc",
        example: "Diese Maschine ist sehr modern.",
        exampleTranslation: "Cỗ máy này rất hiện đại.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v4_p",
        word: "die Maschinen (số nhiều)",
        ipa: "/maˈʃiːnən/",
        meaning: "máy móc",
        example: "Die neuen Maschinen erhöhen die Produktion.",
        exampleTranslation: "Những cỗ máy mới làm tăng sản lượng.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v5_s",
        word: "der Lkw (số ít)",
        ipa: "/ˈɛlkaːˌveː/",
        meaning: "xe tải",
        example: "Der Lkw transportiert die Waren.",
        exampleTranslation: "Xe tải vận chuyển hàng hóa.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v5_p",
        word: "die Lkws (số nhiều)",
        ipa: "/ˈɛlkaːˌveːs/",
        meaning: "xe tải",
        example: "Viele Lkws stehen im Stau.",
        exampleTranslation: "Nhiều xe tải đang bị kẹt xe.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v6_s",
        word: "der Wagen (số ít)",
        ipa: "/ˈvaːɡn̩/",
        meaning: "xe ô tô",
        example: "Der Wagen ist sehr teuer.",
        exampleTranslation: "Chiếc xe này rất đắt.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v6_p",
        word: "die Wagen (số nhiều)",
        ipa: "/ˈvaːɡn̩/",
        meaning: "xe ô tô",
        example: "Alle Wagen in der Garage sind neu.",
        exampleTranslation: "Tất cả các xe trong ga-ra đều mới.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v7_s",
        word: "der Arbeiter (số ít)",
        ipa: "/ˈaʁbaɪ̯tɐ/",
        meaning: "công nhân",
        example: "Ein Arbeiter repariert die Maschine.",
        exampleTranslation: "Một công nhân đang sửa chữa máy móc.",
        category: "Personen",
      },
      {
        id: "l9_v7_p",
        word: "die Arbeiter (số nhiều)",
        ipa: "/ˈaʁbaɪ̯tɐ/",
        meaning: "công nhân",
        example: "Die Arbeiter arbeiten am Fließband.",
        exampleTranslation: "Các công nhân làm việc ở dây chuyền.",
        category: "Personen",
      },
      {
        id: "l9_v8_s",
        word: "die Halle (số ít)",
        ipa: "/ˈhalə/",
        meaning: "xưởng, hội trường",
        example: "In der Halle stehen viele Autos.",
        exampleTranslation: "Trong xưởng có rất nhiều ô tô.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v8_p",
        word: "die Hallen (số nhiều)",
        ipa: "/ˈhalən/",
        meaning: "xưởng, hội trường",
        example: "Die Messe findet in den großen Hallen statt.",
        exampleTranslation: "Hội chợ diễn ra trong các hội trường lớn.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v9_s",
        word: "der Export (số ít)",
        ipa: "/ɛksˈpɔʁt/",
        meaning: "sự xuất khẩu",
        example: "Der Export von Autos ist wichtig für Deutschland.",
        exampleTranslation: "Việc xuất khẩu ô tô rất quan trọng đối với nước Đức.",
        category: "Konzepte",
      },
      {
        id: "l9_v9_p",
        word: "die Exporte (số nhiều)",
        ipa: "/ɛksˈpɔʁtə/",
        meaning: "sự xuất khẩu",
        example: "Die Exporte nach Asien sind gestiegen.",
        exampleTranslation: "Xuất khẩu sang châu Á đã tăng lên.",
        category: "Konzepte",
      },
      {
        id: "l9_v10_s",
        word: "der Import (số ít)",
        ipa: "/ɪmˈpɔʁt/",
        meaning: "sự nhập khẩu",
        example: "Der Import aus China steigt.",
        exampleTranslation: "Việc nhập khẩu từ Trung Quốc đang tăng.",
        category: "Konzepte",
      },
      {
        id: "l9_v10_p",
        word: "die Importe (số nhiều)",
        ipa: "/ɪmˈpɔʁtə/",
        meaning: "sự nhập khẩu",
        example: "Wir müssen die Importe reduzieren.",
        exampleTranslation: "Chúng ta phải giảm nhập khẩu.",
        category: "Konzepte",
      },
      {
        id: "l9_v11_s",
        word: "der Lohn (số ít)",
        ipa: "/loːn/",
        meaning: "tiền lương",
        example: "Die Arbeiter fordern mehr Lohn.",
        exampleTranslation: "Các công nhân đòi tăng lương.",
        category: "Konzepte",
      },
      {
        id: "l9_v11_p",
        word: "die Löhne (số nhiều)",
        ipa: "/ˈløːnə/",
        meaning: "tiền lương",
        example: "Die Löhne in dieser Branche sind hoch.",
        exampleTranslation: "Lương trong ngành này cao.",
        category: "Konzepte",
      },
      {
        id: "l9_v12_s",
        word: "das Prozent (số ít)",
        ipa: "/pʁoˈt͡sɛnt/",
        meaning: "phần trăm",
        example: "Das sind fünfzig Prozent.",
        exampleTranslation: "Đó là 50 phần trăm.",
        category: "Konzepte",
      },
      {
        id: "l9_v12_p",
        word: "die Prozente (số nhiều)",
        ipa: "/pʁoˈt͡sɛntə/",
        meaning: "phần trăm",
        example: "Im Ausverkauf gibt es hohe Prozente.",
        exampleTranslation: "Trong đợt giảm giá có tỷ lệ phần trăm cao.",
        category: "Konzepte",
      },
      {
        id: "l9_v13_s",
        word: "der Betrieb (số ít)",
        ipa: "/bəˈtʁiːp/",
        meaning: "doanh nghiệp, công ty",
        example: "Er arbeitet in einem großen Betrieb.",
        exampleTranslation: "Anh ấy làm việc trong một doanh nghiệp lớn.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v13_p",
        word: "die Betriebe (số nhiều)",
        ipa: "/bəˈtʁiːbə/",
        meaning: "doanh nghiệp, công ty",
        example: "Viele Betriebe haben Probleme wegen der Krise.",
        exampleTranslation: "Nhiều công ty gặp vấn đề vì khủng hoảng.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v14_s",
        word: "die Wirtschaft (số ít)",
        ipa: "/ˈvɪʁtʃaft/",
        meaning: "kinh tế",
        example: "Die Wirtschaft wächst in diesem Jahr.",
        exampleTranslation: "Nền kinh tế đang tăng trưởng trong năm nay.",
        category: "Konzepte",
      },
      {
        id: "l9_v15_s",
        word: "der/die Angestellte (số ít)",
        ipa: "/ˈanɡəˌʃtɛltə/",
        meaning: "nhân viên",
        example: "Ich bin Angestellter in einer Computerfirma.",
        exampleTranslation: "Tôi là nhân viên trong một công ty máy tính.",
        category: "Personen",
      },
      {
        id: "l9_v15_p",
        word: "die Angestellten (số nhiều)",
        ipa: "/ˈanɡəˌʃtɛltən/",
        meaning: "nhân viên",
        example: "Alle Angestellten bekommen einen Bonus.",
        exampleTranslation: "Tất cả các nhân viên đều nhận được tiền thưởng.",
        category: "Personen",
      },
      {
        id: "l9_v16_s",
        word: "der Erfolg (số ít)",
        ipa: "/ɛɐ̯ˈfɔlk/",
        meaning: "thành công",
        example: "Das neue Auto ist ein großer Erfolg.",
        exampleTranslation: "Chiếc ô tô mới là một sự thành công lớn.",
        category: "Konzepte",
      },
      {
        id: "l9_v16_p",
        word: "die Erfolge (số nhiều)",
        ipa: "/ɛɐ̯ˈfɔlɡə/",
        meaning: "thành công",
        example: "Wir feiern unsere Erfolge.",
        exampleTranslation: "Chúng tôi ăn mừng những thành công của mình.",
        category: "Konzepte",
      },
      {
        id: "l9_v17_s",
        word: "die Bedingung (số ít)",
        ipa: "/bəˈdɪŋʊŋ/",
        meaning: "điều kiện",
        example: "Die Arbeitsbedingungen sind wirklich gut.",
        exampleTranslation: "Các điều kiện làm việc thực sự rất tốt.",
        category: "Konzepte",
      },
      {
        id: "l9_v17_p",
        word: "die Bedingungen (số nhiều)",
        ipa: "/bəˈdɪŋʊŋən/",
        meaning: "điều kiện",
        example: "Die Bedingungen des Vertrags sind klar.",
        exampleTranslation: "Các điều kiện của hợp đồng rất rõ ràng.",
        category: "Konzepte",
      },
      {
        id: "l9_v18_s",
        word: "das Jahrzehnt (số ít)",
        ipa: "/jaːɐ̯ˈt͡seːnt/",
        meaning: "thập kỷ",
        example: "In den vergangenen Jahrzehnten hat sich viel geändert.",
        exampleTranslation: "Trong những thập kỷ qua có rất nhiều thứ đã thay đổi.",
        category: "Zeit",
      },
      {
        id: "l9_v18_p",
        word: "die Jahrzehnte (số nhiều)",
        ipa: "/jaːɐ̯ˈt͡seːntə/",
        meaning: "thập kỷ",
        example: "Die Mode der letzten Jahrzehnte war sehr vielfältig.",
        exampleTranslation: "Thời trang của những thập kỷ qua rất đa dạng.",
        category: "Zeit",
      },
      {
        id: "l9_v19_s",
        word: "die Reparatur (số ít)",
        ipa: "/ʁepaʁaˈtuːɐ̯/",
        meaning: "sự sửa chữa",
        example: "Die Reparatur des Autos dauert zwei Tage.",
        exampleTranslation: "Sự sửa chữa chiếc xe mất hai ngày.",
        category: "Konzepte",
      },
      {
        id: "l9_v19_p",
        word: "die Reparaturen (số nhiều)",
        ipa: "/ʁepaʁaˈtuːʁən/",
        meaning: "sự sửa chữa",
        example: "Am Haus sind viele Reparaturen nötig.",
        exampleTranslation: "Ngôi nhà cần nhiều sửa chữa.",
        category: "Konzepte",
      },
      {
        id: "l9_v20_s",
        word: "das Fließband (số ít)",
        ipa: "/ˈfliːsˌbant/",
        meaning: "băng chuyền, dây chuyền sản xuất",
        example: "Er arbeitet seit 40 Jahren am Fließband.",
        exampleTranslation: "Ông ấy đã làm việc ở dây chuyền suốt 40 năm.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v20_p",
        word: "die Fließbänder (số nhiều)",
        ipa: "/ˈfliːsˌbɛndɐ/",
        meaning: "băng chuyền, dây chuyền sản xuất",
        example: "Die Fließbänder in der Fabrik laufen rund um die Uhr.",
        exampleTranslation: "Các dây chuyền sản xuất trong nhà máy hoạt động suốt ngày đêm.",
        category: "Orte & Dinge",
      },
      {
        id: "l9_v21",
        word: "produzieren (nguyên thể)",
        ipa: "/pʁoduˈt͡siːʁən/",
        meaning: "sản xuất",
        example: "Die Firma produziert LKWs.",
        exampleTranslation: "Công ty sản xuất xe tải.",
        category: "Aktion",
      },
      {
        id: "l9_v22",
        word: "sparen (nguyên thể)",
        ipa: "/ˈʃpaːʁən/",
        meaning: "tiết kiệm",
        example: "Wir müssen Geld sparen.",
        exampleTranslation: "Chúng tôi phải tiết kiệm tiền.",
        category: "Aktion",
      },
      {
        id: "l9_v23",
        word: "steigen (nguyên thể)",
        ipa: "/ˈʃtaɪ̯ɡn̩/",
        meaning: "tăng lên",
        example: "Die Preise steigen jedes Jahr.",
        exampleTranslation: "Vật giá tăng lên mỗi năm.",
        category: "Aktion",
      },
      {
        id: "l9_v24",
        word: "sinken (nguyên thể)",
        ipa: "/ˈzɪŋkn̩/",
        meaning: "giảm xuống",
        example: "Die Produktion ist gesunken.",
        exampleTranslation: "Sản lượng đã giảm xuống.",
        category: "Aktion",
      },
      {
        id: "l9_v25",
        word: "erklären (nguyên thể)",
        ipa: "/ɛɐ̯ˈklɛːʁən/",
        meaning: "giải thích",
        example: "Der Lehrer erklärt die Grammatik.",
        exampleTranslation: "Thầy giáo giải thích ngữ pháp.",
        category: "Aktion",
      },
      {
        id: "l9_v26",
        word: "selbstständig",
        ipa: "/ˈzɛlpstˌʃtɛndɪç/",
        meaning: "độc lập, tự kinh doanh",
        example: "Ich bin selbstständig und habe keinen Chef.",
        exampleTranslation: "Tôi tự kinh doanh và không có sếp.",
        category: "Adjektiv",
      },
      {
        id: "l9_v27",
        word: "international",
        ipa: "/ɪntɐnat͡si̯oˈnaːl/",
        meaning: "quốc tế",
        example: "Wir sind eine internationale Firma.",
        exampleTranslation: "Chúng tôi là một công ty quốc tế.",
        category: "Adjektiv",
      },
      {
        id: "l9_v28",
        word: "dringend",
        ipa: "/ˈdʁɪŋənt/",
        meaning: "khẩn cấp",
        example: "Wir suchen dringend neue Mitarbeiter.",
        exampleTranslation: "Chúng tôi đang tìm kiếm nhân viên mới một cách khẩn trương.",
        category: "Adjektiv",
      },

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

      { id: "l10_v1_s", word: "das Besteck (số ít)", ipa: "/bəˈʃtɛk/", meaning: "dao dĩa (chung)", example: "Das Besteck liegt auf dem Tisch.", exampleTranslation: "Dao dĩa đặt trên bàn.", category: "Essen & Trinken" },
      { id: "l10_v1_p", word: "die Bestecke (số nhiều)", ipa: "/diː bəˈʃtɛkə/", meaning: "dao dĩa (chung)", example: "Wir brauchen noch mehrere Bestecke für die Gäste.", exampleTranslation: "Chúng ta cần thêm nhiều bộ dao dĩa cho khách.", category: "Essen & Trinken" },
      { id: "l10_v2_s", word: "die Gabel (số ít)", ipa: "/diː ˈɡaːbl̩/", meaning: "cái dĩa", example: "Die Gabel ist nicht sauber.", exampleTranslation: "Cái dĩa không sạch.", category: "Essen & Trinken" },
      { id: "l10_v2_p", word: "die Gabeln (số nhiều)", ipa: "/diː ˈɡaːbl̩n/", meaning: "cái dĩa", example: "Alle Gabeln sind in der Schublade.", exampleTranslation: "Tất cả dĩa đều ở trong ngăn kéo.", category: "Essen & Trinken" },
      { id: "l10_v3_s", word: "das Glas (số ít)", ipa: "/das ɡlaːs/", meaning: "cái ly", example: "Bringen Sie mir bitte ein Glas Wasser.", exampleTranslation: "Làm ơn mang cho tôi một ly nước.", category: "Essen & Trinken" },
      { id: "l10_v3_p", word: "die Gläser (số nhiều)", ipa: "/diː ˈɡlɛːzɐ/", meaning: "cái ly", example: "Stell bitte die Gläser auf den Tisch.", exampleTranslation: "Làm ơn đặt những cái ly lên bàn.", category: "Essen & Trinken" },
      { id: "l10_v4_s", word: "die Kanne (số ít)", ipa: "/diː ˈkanə/", meaning: "cái bình", example: "Ich hätte gern eine Kanne Tee.", exampleTranslation: "Tôi muốn một bình trà.", category: "Essen & Trinken" },
      { id: "l10_v4_p", word: "die Kannen (số nhiều)", ipa: "/diː ˈkanən/", meaning: "cái bình", example: "Im Schrank stehen viele Kannen.", exampleTranslation: "Trong tủ có rất nhiều bình.", category: "Essen & Trinken" },
      { id: "l10_v5_s", word: "der Löffel (số ít)", ipa: "/deːɐ̯ ˈlœfl̩/", meaning: "cái thìa", example: "Mir fehlt ein Löffel für die Suppe.", exampleTranslation: "Tôi thiếu một cái thìa để ăn súp.", category: "Essen & Trinken" },
      { id: "l10_v5_p", word: "die Löffel (số nhiều)", ipa: "/diː ˈlœfl̩/", meaning: "cái thìa", example: "Wo sind die Löffel?", exampleTranslation: "Những cái thìa ở đâu?", category: "Essen & Trinken" },
      { id: "l10_v6_s", word: "das Lokal (số ít)", ipa: "/das loˈkaːl/", meaning: "quán ăn, nhà hàng", example: "Das Lokal am Marktplatz ist sehr beliebt.", exampleTranslation: "Quán ăn ở quảng trường rất được yêu thích.", category: "Orte" },
      { id: "l10_v6_p", word: "die Lokale (số nhiều)", ipa: "/diː loˈkaːlə/", meaning: "quán ăn, nhà hàng", example: "In dieser Straße gibt es viele gute Lokale.", exampleTranslation: "Trên con phố này có nhiều quán ăn ngon.", category: "Orte" },
      { id: "l10_v7_s", word: "das Messer (số ít)", ipa: "/das ˈmɛsɐ/", meaning: "con dao", example: "Könnte ich ein anderes Messer bekommen?", exampleTranslation: "Tôi có thể lấy một con dao khác được không?", category: "Essen & Trinken" },
      { id: "l10_v7_p", word: "die Messer (số nhiều)", ipa: "/diː ˈmɛsɐ/", meaning: "con dao", example: "Die Messer sind nicht scharf genug.", exampleTranslation: "Những con dao này không đủ sắc.", category: "Essen & Trinken" },
      { id: "l10_v8_s", word: "die Rechnung (số ít)", ipa: "/diː ˈʁɛçnʊŋ/", meaning: "hóa đơn", example: "Die Rechnung, bitte!", exampleTranslation: "Làm ơn thanh toán!", category: "Weitere Wörter" },
      { id: "l10_v8_p", word: "die Rechnungen (số nhiều)", ipa: "/diː ˈʁɛçnʊŋən/", meaning: "hóa đơn", example: "Ich muss noch die Rechnungen bezahlen.", exampleTranslation: "Tôi vẫn phải thanh toán các hóa đơn.", category: "Weitere Wörter" },
      { id: "l10_v9_s", word: "die Tasse (số ít)", ipa: "/diː ˈtasə/", meaning: "tách, cốc", example: "Möchtest du eine Tasse Kaffee?", exampleTranslation: "Bạn có muốn một tách cà phê không?", category: "Essen & Trinken" },
      { id: "l10_v9_p", word: "die Tassen (số nhiều)", ipa: "/diː ˈtasən/", meaning: "tách, cốc", example: "Stell die Tassen in den Schrank.", exampleTranslation: "Hãy cất những chiếc cốc vào tủ.", category: "Essen & Trinken" },
      { id: "l10_v10_s", word: "der Teller (số ít)", ipa: "/deːɐ̯ ˈtɛlɐ/", meaning: "cái đĩa", example: "Dein Teller ist leer.", exampleTranslation: "Đĩa của bạn trống trơn.", category: "Essen & Trinken" },
      { id: "l10_v10_p", word: "die Teller (số nhiều)", ipa: "/diː ˈtɛlɐ/", meaning: "cái đĩa", example: "Die Teller sind sehr schön.", exampleTranslation: "Những cái đĩa này rất đẹp.", category: "Essen & Trinken" },
      { id: "l10_v11", word: "reservieren (nguyên thể)", ipa: "/ʁezɛʁˈviːʁən/", meaning: "đặt chỗ", example: "Gut, dass du einen Tisch reserviert hast.", exampleTranslation: "Thật tốt vì bạn đã đặt bàn.", category: "Aktion" },
      { id: "l10_v12", word: "stimmen (nguyên thể)", ipa: "/ˈʃtɪmən/", meaning: "đúng vậy / (stimmt so) cứ giữ lại tiền thừa nhé", example: "Hier bitte, stimmt so.", exampleTranslation: "Đây ạ, tiền thừa cứ giữ lại nhé.", category: "Aktion" },
      { id: "l10_v13", word: "zusammen / getrennt", ipa: "/t͡suˈzamən | ɡəˈtʁɛnt/", meaning: "cùng nhau <-> riêng (tính tiền)", example: "Zahlen Sie zusammen oder getrennt?", exampleTranslation: "Quý khách thanh toán chung hay riêng?", category: "Adverb" },
      { id: "l10_v14_s", word: "der Augenblick (số ít)", ipa: "/deːɐ̯ ˈaʊ̯ɡn̩ˌblɪk/", meaning: "một chốc, một lát", example: "Einen Augenblick, bitte.", exampleTranslation: "Xin chờ một lát.", category: "Weitere Wörter" },
      { id: "l10_v14_p", word: "die Augenblicke (số nhiều)", ipa: "/diː ˈaʊ̯ɡn̩ˌblɪkə/", meaning: "một chốc, một lát", example: "Das waren unvergessliche Augenblicke.", exampleTranslation: "Đó là những khoảnh khắc không thể nào quên.", category: "Weitere Wörter" },
      { id: "l10_v14a_s", word: "der Moment (số ít)", ipa: "/deːɐ̯ moˈmɛnt/", meaning: "một chốc, một lát", example: "Warten Sie einen Moment, bitte.", exampleTranslation: "Xin vui lòng đợi một lát.", category: "Weitere Wörter" },
      { id: "l10_v14a_p", word: "die Momente (số nhiều)", ipa: "/diː moˈmɛntə/", meaning: "một chốc, một lát", example: "Es gibt Momente, die man nie vergisst.", exampleTranslation: "Có những khoảnh khắc người ta không bao giờ quên.", category: "Weitere Wörter" },
      { id: "l10_v15", word: "verzeihen (nguyên thể)", ipa: "/fɛɐ̯ˈt͡saɪ̯ən/", meaning: "xin lỗi, tha lỗi", example: "Verzeihen Sie, aber die Suppe ist kalt.", exampleTranslation: "Xin lỗi, nhưng súp bị lạnh.", category: "Aktion" },
      { id: "l10_v16", word: "der Essig", ipa: "/deːɐ̯ ˈɛsɪç/", meaning: "giấm", example: "Der Salat braucht mehr Essig.", exampleTranslation: "Salad cần thêm giấm.", category: "Essen & Trinken" },
      { id: "l10_v17_s", word: "das Hähnchen (số ít)", ipa: "/das ˈhɛːnçən/", meaning: "thịt gà", example: "Ich nehme das Hähnchen mit Pommes.", exampleTranslation: "Tôi lấy phần gà với khoai tây chiên.", category: "Essen & Trinken" },
      { id: "l10_v17_p", word: "die Hähnchen (số nhiều)", ipa: "/diː ˈhɛːnçən/", meaning: "thịt gà", example: "Wir haben zwei Hähnchen bestellt.", exampleTranslation: "Chúng tôi đã gọi hai phần gà.", category: "Essen & Trinken" },
      { id: "l10_v18_s", word: "das Öl (số ít)", ipa: "/das øːl/", meaning: "dầu ăn", example: "Könnten Sie mir Essig und Öl bringen?", exampleTranslation: "Bạn có thể mang cho tôi giấm và dầu không?", category: "Essen & Trinken" },
      { id: "l10_v18_p", word: "die Öle (số nhiều)", ipa: "/diː ˈøːlə/", meaning: "dầu ăn", example: "Es gibt viele verschiedene Öle zum Kochen.", exampleTranslation: "Có nhiều loại dầu khác nhau để nấu ăn.", category: "Essen & Trinken" },
      { id: "l10_v19", word: "die Pommes frites (số nhiều)", ipa: "/diː ˌpɔm ˈfrɪt/", meaning: "khoai tây chiên", example: "Die Kinder essen gern Pommes.", exampleTranslation: "Trẻ em thích ăn khoai tây chiên.", category: "Essen & Trinken" },
      { id: "l10_v20", word: "das Salz", ipa: "/das zalt͡s/", meaning: "muối", example: "Die Kartoffeln haben zu viel Salz.", exampleTranslation: "Khoai tây có quá nhiều muối.", category: "Essen & Trinken" },
      { id: "l10_v21_s", word: "die Soße (số ít)", ipa: "/diː ˈzoːsə/", meaning: "nước sốt", example: "Ist die Soße scharf?", exampleTranslation: "Nước sốt có cay không?", category: "Essen & Trinken" },
      { id: "l10_v21_p", word: "die Soßen (số nhiều)", ipa: "/diː ˈzoːsən/", meaning: "nước sốt", example: "Der Koch kann viele leckere Soßen zubereiten.", exampleTranslation: "Đầu bếp có thể chế biến nhiều loại nước sốt ngon.", category: "Essen & Trinken" },
      { id: "l10_v22_s", word: "das Schnitzel (số ít)", ipa: "/das ˈʃnɪt͡sl̩/", meaning: "thịt tẩm bột chiên", example: "Ein Schnitzel Wiener Art, bitte.", exampleTranslation: "Cho tôi một phần Schnitzel kiểu Vienna.", category: "Essen & Trinken" },
      { id: "l10_v22_p", word: "die Schnitzel (số nhiều)", ipa: "/diː ˈʃnɪt͡sl̩/", meaning: "thịt tẩm bột chiên", example: "Wir möchten zwei Schnitzel bestellen.", exampleTranslation: "Chúng tôi muốn đặt hai phần Schnitzel.", category: "Essen & Trinken" },
      { id: "l10_v23_s", word: "das Steak (số ít)", ipa: "/das steːk/", meaning: "bít tết", example: "Ich möchte das Steak medium.", exampleTranslation: "Tôi muốn bít tết chín vừa.", category: "Essen & Trinken" },
      { id: "l10_v23_p", word: "die Steaks (số nhiều)", ipa: "/diː steːks/", meaning: "bít tết", example: "Die Steaks hier sind immer perfekt.", exampleTranslation: "Bít tết ở đây luôn hoàn hảo.", category: "Essen & Trinken" },
      { id: "l10_v24", word: "der Zucker", ipa: "/deːɐ̯ ˈt͡sʊkɐ/", meaning: "đường", example: "Ich trinke Kaffee ohne Zucker.", exampleTranslation: "Tôi uống cà phê không đường.", category: "Essen & Trinken" },
      { id: "l10_v25", word: "reagieren (nguyên thể)", ipa: "/ʁeaˈɡiːʁən/", meaning: "phản ứng", example: "Wie hat der Kellner reagiert?", exampleTranslation: "Bồi bàn đã phản ứng thế nào?", category: "Aktion" },
      { id: "l10_v26", word: "wenigstens", ipa: "/ˈveːnɪçstn̩s/", meaning: "ít nhất là", example: "Du hast wenigstens noch Wasser.", exampleTranslation: "Ít nhất là bạn vẫn còn nước.", category: "Adverb" },
      { id: "l10_v27", word: "sondern", ipa: "/ˈzɔndɐn/", meaning: "mà là", example: "Das ist kein Rindfleisch, sondern Schweinefleisch.", exampleTranslation: "Đó không phải thịt bò, mà là thịt lợn.", category: "Weitere Wörter" }

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

      { id: "l11_v1_s", word: "der Kunde (số ít)", ipa: "/ˈkʊndə/", meaning: "khách hàng (nam)", example: "Der Kunde beschwert sich über den Service.", exampleTranslation: "Khách hàng phàn nàn về dịch vụ.", category: "Personen" },
      { id: "l11_v1_p", word: "die Kunden (số nhiều)", ipa: "/ˈkʊndn̩/", meaning: "khách hàng (nam)", example: "Der Kunde beschwert sich über den Service.", exampleTranslation: "Khách hàng phàn nàn về dịch vụ.", category: "Personen" },
      { id: "l11_v1b_s", word: "die Kundin (số ít)", ipa: "/ˈkʊndɪn/", meaning: "khách hàng (nữ)", example: "Der Kunde beschwert sich über den Service.", exampleTranslation: "Khách hàng phàn nàn về dịch vụ.", category: "Personen" },
      { id: "l11_v1b_p", word: "die Kundinnen (số nhiều)", ipa: "/ˈkʊndɪnən/", meaning: "khách hàng (nữ)", example: "Der Kunde beschwert sich über den Service.", exampleTranslation: "Khách hàng phàn nàn về dịch vụ.", category: "Personen" },
      { id: "l11_v2_s", word: "die Notiz (số ít)", ipa: "/noˈtiːt͡s/", meaning: "ghi chú", example: "Ich mache mir eine Notiz.", exampleTranslation: "Tôi tạo một ghi chú.", category: "Nomen" },
      { id: "l11_v2_p", word: "die Notizen (số nhiều)", ipa: "/noˈtiːt͡sn̩/", meaning: "ghi chú", example: "Ich mache mir eine Notiz.", exampleTranslation: "Tôi tạo một ghi chú.", category: "Nomen" },
      { id: "l11_v3_s", word: "der Notizblock (số ít)", ipa: "/noˈtiːt͡sˌblɔk/", meaning: "cuốn sổ ghi chú", example: "Er schreibt auf den Notizblock.", exampleTranslation: "Anh ấy viết vào cuốn sổ ghi chú.", category: "Nomen" },
      { id: "l11_v3_p", word: "die Notizblöcke (số nhiều)", ipa: "/noˈtiːt͡sˌblœkə/", meaning: "cuốn sổ ghi chú", example: "Er schreibt auf den Notizblock.", exampleTranslation: "Anh ấy viết vào cuốn sổ ghi chú.", category: "Nomen" },
      { id: "l11_v4_s", word: "die Werkstatt (số ít)", ipa: "/ˈvɛɐ̯kˌʃtat/", meaning: "xưởng, phân xưởng", example: "Mein Auto ist in der Werkstatt.", exampleTranslation: "Xe của tôi đang ở trong xưởng.", category: "Orte" },
      { id: "l11_v4_p", word: "die Werkstätten (số nhiều)", ipa: "/ˈvɛɐ̯kˌʃtɛtn̩/", meaning: "xưởng, phân xưởng", example: "Mein Auto ist in der Werkstatt.", exampleTranslation: "Xe của tôi đang ở trong xưởng.", category: "Orte" },
      { id: "l11_v5", word: "herstellen (nguyên thể), hat hergestellt", ipa: "/ˈheːɐ̯ˌʃtɛlən/", meaning: "sản xuất, chế tạo", example: "Wir stellen Taschen her.", exampleTranslation: "Chúng tôi sản xuất túi xách.", category: "Aktion" },
      { id: "l11_v6", word: "organisieren (nguyên thể), hat organisiert", ipa: "/ɔʁɡaniˈziːʁən/", meaning: "tổ chức", example: "Sie organisiert ein Fest.", exampleTranslation: "Cô ấy tổ chức một bữa tiệc.", category: "Aktion" },
      { id: "l11_v7", word: "verwenden (nguyên thể), hat verwendet", ipa: "/fɛɐ̯ˈvɛndn̩/", meaning: "sử dụng", example: "Wir verwenden nur alte Materialien.", exampleTranslation: "Chúng tôi chỉ sử dụng các vật liệu cũ.", category: "Aktion" },
      { id: "l11_v8_s", word: "der Briefumschlag (số ít)", ipa: "/ˈbʁiːfʔʊmˌʃlaːk/", meaning: "phong bì", example: "Ich brauche einen Briefumschlag für den Brief.", exampleTranslation: "Tôi cần một chiếc phong bì cho lá thư.", category: "Nomen" },
      { id: "l11_v8_p", word: "die Briefumschläge (số nhiều)", ipa: "/ˈbʁiːfʔʊmˌʃlɛːɡə/", meaning: "phong bì", example: "Ich brauche einen Briefumschlag für den Brief.", exampleTranslation: "Tôi cần một chiếc phong bì cho lá thư.", category: "Nomen" },
      { id: "l11_v9_s", word: "die Handtasche (số ít)", ipa: "/ˈhantˌtaʃə/", meaning: "túi xách tay", example: "Sie hat eine neue Handtasche.", exampleTranslation: "Cô ấy có một cái túi xách tay mới.", category: "Nomen" },
      { id: "l11_v9_p", word: "die Handtaschen (số nhiều)", ipa: "/ˈhantˌtaʃn̩/", meaning: "túi xách tay", example: "Sie hat eine neue Handtasche.", exampleTranslation: "Cô ấy có một cái túi xách tay mới.", category: "Nomen" },
      { id: "l11_v10", word: "wegwerfen (nguyên thể), hat weggeworfen", ipa: "/ˈvɛkˌvɛʁfn̩/", meaning: "vứt bỏ", example: "Man soll alte Sachen nicht wegwerfen.", exampleTranslation: "Người ta không nên vứt bỏ đồ cũ.", category: "Aktion" },
      { id: "l11_v11", word: "viel Erfolg", ipa: "/fiːl ɛɐ̯ˈfɔlk/", meaning: "chúc nhiều thành công", example: "Ich wünsche dir viel Erfolg!", exampleTranslation: "Tôi chúc bạn nhiều thành công!", category: "Ausdrücke" },
      { id: "l11_v12", word: "viel Glück", ipa: "/fiːl ɡlʏk/", meaning: "chúc nhiều may mắn", example: "Wir wünschen Ihnen viel Glück für die Zukunft.", exampleTranslation: "Chúng tôi chúc ngài nhiều may mắn cho tương lai.", category: "Ausdrücke" },
      { id: "l11_v13", word: "sich bedanken (nguyên thể) (bei D. / für A.)", ipa: "/zɪç bəˈdaŋkn̩/", meaning: "cảm ơn", example: "Ich bedanke mich für Ihre Hilfe.", exampleTranslation: "Tôi cảm ơn vì sự giúp đỡ của ngài.", category: "Verben" },
      { id: "l11_v14", word: "wünschen (nguyên thể), hat gewünscht", ipa: "/ˈvʏnʃn̩/", meaning: "mong ước, chúc", example: "Wir wünschen Ihnen alles Gute.", exampleTranslation: "Chúng tôi chúc ngài mọi điều tốt đẹp.", category: "Verben" },
      { id: "l11_v15_s", word: "der Artikel (số ít)", ipa: "/aʁˈtiːkl̩/", meaning: "bài báo, điều khoản", example: "Hast du den Artikel gelesen?", exampleTranslation: "Bạn đã đọc bài báo chưa?", category: "Nomen" },
      { id: "l11_v15_p", word: "die Artikel (số nhiều)", ipa: "/aʁˈtiːkl̩/", meaning: "bài báo, điều khoản", example: "Hast du den Artikel gelesen?", exampleTranslation: "Bạn đã đọc bài báo chưa?", category: "Nomen" },
      { id: "l11_v16_s", word: "der Erwachsene (số ít)", ipa: "/dɛɐ̯ ɛɐ̯ˈvaksənə/", meaning: "người lớn", example: "Das Spiel ist für Erwachsene.", exampleTranslation: "Trò chơi này dành cho người lớn.", category: "Personen" },
      { id: "l11_v16_p", word: "die Erwachsenen (số nhiều)", ipa: "/diː ɛɐ̯ˈvaksənən/", meaning: "người lớn", example: "Das Spiel ist für Erwachsene.", exampleTranslation: "Trò chơi này dành cho người lớn.", category: "Personen" },
      { id: "l11_v17_s", word: "der Grund (số ít)", ipa: "/ɡʁʊnt/", meaning: "lý do, nguyên nhân", example: "Was ist der Grund für deinen Ärger?", exampleTranslation: "Nguyên nhân khiến bạn tức giận là gì?", category: "Nomen" },
      { id: "l11_v17_p", word: "die Gründe (số nhiều)", ipa: "/ˈɡʁʏndə/", meaning: "lý do, nguyên nhân", example: "Was ist der Grund für deinen Ärger?", exampleTranslation: "Nguyên nhân khiến bạn tức giận là gì?", category: "Nomen" },
      { id: "l11_v18_s", word: "die Meinung (số ít)", ipa: "/ˈmaɪ̯nʊŋ/", meaning: "ý kiến", example: "Was ist deine Meinung dazu?", exampleTranslation: "Ý kiến của bạn về việc này là gì?", category: "Nomen" },
      { id: "l11_v18_p", word: "die Meinungen (số nhiều)", ipa: "/ˈmaɪ̯nʊŋən/", meaning: "ý kiến", example: "Was ist deine Meinung dazu?", exampleTranslation: "Ý kiến của bạn về việc này là gì?", category: "Nomen" },
      { id: "l11_v19", word: "meiner Meinung nach", ipa: "/ˈmaɪ̯nɐ ˈmaɪ̯nʊŋ naːx/", meaning: "theo ý kiến của tôi", example: "Meiner Meinung nach ist das eine gute Idee.", exampleTranslation: "Theo ý kiến của tôi thì đó là một ý tưởng hay.", category: "Ausdrücke" },
      { id: "l11_v20", word: "der Schmuck (số ít)", ipa: "/ʃmʊk/", meaning: "đồ trang sức", example: "Sie trägt gern Schmuck.", exampleTranslation: "Cô ấy thích đeo đồ trang sức.", category: "Nomen" },
      { id: "l11_v21_s", word: "der Stoff (số ít)", ipa: "/ʃtɔf/", meaning: "chất liệu, vải", example: "Der Stoff ist sehr weich.", exampleTranslation: "Vải này rất mềm.", category: "Nomen" },
      { id: "l11_v21_p", word: "die Stoffe (số nhiều)", ipa: "/ˈʃtɔfə/", meaning: "chất liệu, vải", example: "Der Stoff ist sehr weich.", exampleTranslation: "Vải này rất mềm.", category: "Nomen" },
      { id: "l11_v22", word: "sich erinnern (nguyên thể) (an A.)", ipa: "/zɪç ɛɐ̯ˈʔɪnɐn/", meaning: "nhớ về, nhớ đến", example: "Erinnerst du dich an unseren Urlaub?", exampleTranslation: "Bạn có nhớ về kỳ nghỉ của chúng ta không?", category: "Verben" },
      { id: "l11_v23", word: "sich fühlen (nguyên thể)", ipa: "/zɪç ˈfyːlən/", meaning: "cảm thấy", example: "Ich fühle mich heute nicht gut.", exampleTranslation: "Hôm nay tôi cảm thấy không khỏe.", category: "Verben" },
      { id: "l11_v24", word: "sich streiten (nguyên thể)", ipa: "/zɪç ˈʃtʁaɪ̯tn̩/", meaning: "cãi nhau", example: "Die Kinder streiten sich oft.", exampleTranslation: "Bọn trẻ thường cãi nhau.", category: "Verben" },
      { id: "l11_v25", word: "sich unterhalten (nguyên thể) (über A.)", ipa: "/zɪç ʊntɐˈhaltn̩/", meaning: "trò chuyện", example: "Wir unterhalten uns über das Buch.", exampleTranslation: "Chúng tôi trò chuyện về cuốn sách.", category: "Verben" },
      { id: "l11_v26", word: "verlieren (nguyên thể), hat verloren", ipa: "/fɛɐ̯ˈliːʁən/", meaning: "đánh mất, thua", example: "Ich habe meinen Schlüssel verloren.", exampleTranslation: "Tôi đã làm mất chìa khóa.", category: "Verben" },
      { id: "l11_v27", word: "froh (sein)", ipa: "/fʁoː/", meaning: "vui mừng", example: "Ich bin froh, dass du hier bist.", exampleTranslation: "Tôi rất vui vì bạn ở đây.", category: "Adjektiv" },
      { id: "l11_v28", word: "jung", ipa: "/jʊŋ/", meaning: "trẻ", example: "Sie ist noch sehr jung.", exampleTranslation: "Cô ấy vẫn còn rất trẻ.", category: "Adjektiv" },
      { id: "l11_v29", word: "schrecklich", ipa: "/ˈʃʁɛklɪç/", meaning: "kinh khủng, khủng khiếp", example: "Ich finde das Wetter schrecklich.", exampleTranslation: "Tôi thấy thời tiết thật kinh khủng.", category: "Adjektiv" },
      { id: "l11_v30", word: "stark", ipa: "/ʃtaʁk/", meaning: "mạnh mẽ", example: "Er ist sehr stark.", exampleTranslation: "Anh ấy rất mạnh mẽ.", category: "Adjektiv" },
      { id: "l11_v31", word: "willkommen", ipa: "/vɪlˈkɔmən/", meaning: "chào mừng, hoan nghênh", example: "Herzlich willkommen in Berlin!", exampleTranslation: "Nhiệt liệt chào mừng tới Berlin!", category: "Adjektiv" },
      { id: "l11_v32", word: "sich freuen (nguyên thể) (auf/über A.)", ipa: "/zɪç ˈfʁɔʏ̯ən/", meaning: "vui mừng (về)", example: "Ich freue mich auf das Wochenende.", exampleTranslation: "Tôi rất mong chờ đến cuối tuần.", category: "Verben" },
      { id: "l11_v33", word: "sich ärgern (nguyên thể) (über A.)", ipa: "/zɪç ˈɛʁɡɐn/", meaning: "tức giận (về)", example: "Er ärgert sich über die Fehler.", exampleTranslation: "Anh ấy tức giận về những lỗi sai.", category: "Verben" },
      { id: "l11_v34", word: "sich beschweren (nguyên thể) (über A.)", ipa: "/zɪç bəˈʃveːʁən/", meaning: "phàn nàn (về)", example: "Wir beschweren uns über den Lärm.", exampleTranslation: "Chúng tôi phàn nàn về tiếng ồn.", category: "Verben" },
      { id: "l11_v35", word: "gratulieren (nguyên thể) (D.)", ipa: "/ɡʁatuˈliːʁən/", meaning: "chúc mừng (ai đó)", example: "Ich gratuliere dir zum Geburtstag.", exampleTranslation: "Tôi chúc mừng sinh nhật bạn.", category: "Verben" }

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

  { "id": "l12_v1", "word": "der Alkohol", "ipa": "/ˈalkohoːl/", "meaning": "rượu, cồn", "example": "Trinken Sie Alkohol?", "exampleTranslation": "Bạn có uống rượu không?", "category": "Lebensmittel" },
  { "id": "l12_v2_s", "word": "das Gericht (số ít)", "ipa": "/ɡəˈʁɪçt/", "meaning": "món ăn", "example": "Das ist mein Lieblingsgericht.", "exampleTranslation": "Đó là món ăn yêu thích của tôi.", "category": "Lebensmittel" },
  { "id": "l12_v2_p", "word": "die Gerichte (số nhiều)", "ipa": "/ɡəˈʁɪçtə/", "meaning": "món ăn", "example": "Das ist mein Lieblingsgericht.", "exampleTranslation": "Đó là món ăn yêu thích của tôi.", "category": "Lebensmittel" },
  { "id": "l12_v3", "word": "das Getreide", "ipa": "/ɡəˈtʁaɪ̯də/", "meaning": "ngũ cốc", "example": "Brot wird aus Getreide gemacht.", "exampleTranslation": "Bánh mì được làm từ ngũ cốc.", "category": "Lebensmittel" },
  { "id": "l12_v4_s", "word": "das Huhn (số ít)", "ipa": "/huːn/", "meaning": "con gà", "example": "Wir essen heute Hühnerfleisch.", "exampleTranslation": "Hôm nay chúng tôi ăn thịt gà.", "category": "Lebensmittel" },
  { "id": "l12_v4_p", "word": "die Hühner (số nhiều)", "ipa": "/ˈhyːnɐ/", "meaning": "con gà", "example": "Wir essen heute Hühnerfleisch.", "exampleTranslation": "Hôm nay chúng tôi ăn thịt gà.", "category": "Lebensmittel" },
  { "id": "l12_v4_fleisch", "word": "das Hühnerfleisch", "ipa": "/ˈhyːnɐˌflaɪ̯ʃ/", "meaning": "thịt gà", "example": "Wir essen heute Hühnerfleisch.", "exampleTranslation": "Hôm nay chúng tôi ăn thịt gà.", "category": "Lebensmittel" },
  { "id": "l12_v5_s", "word": "das Lebensmittel (số ít)", "ipa": "/ˈleːbnsˌmɪtl̩/", "meaning": "thực phẩm", "example": "Wir kaufen frische Lebensmittel.", "exampleTranslation": "Chúng tôi mua thực phẩm tươi.", "category": "Lebensmittel" },
  { "id": "l12_v5_p", "word": "die Lebensmittel (số nhiều)", "ipa": "/ˈleːbnsˌmɪtl̩/", "meaning": "thực phẩm", "example": "Wir kaufen frische Lebensmittel.", "exampleTranslation": "Chúng tôi mua thực phẩm tươi.", "category": "Lebensmittel" },
  { "id": "l12_v6_s", "word": "die Limonade (số ít)", "ipa": "/limoˈnaːdə/", "meaning": "nước ngọt, nước chanh", "example": "Die Kinder trinken Limonade.", "exampleTranslation": "Bọn trẻ uống nước ngọt.", "category": "Lebensmittel" },
  { "id": "l12_v6_p", "word": "die Limonaden (số nhiều)", "ipa": "/limoˈnaːdn̩/", "meaning": "nước ngọt, nước chanh", "example": "Die Kinder trinken Limonade.", "exampleTranslation": "Bọn trẻ uống nước ngọt.", "category": "Lebensmittel" },
  { "id": "l12_v7", "word": "das Mineralwasser", "ipa": "/mɪneˈʁaːlˌvasɐ/", "meaning": "nước khoáng", "example": "Ein Glas Mineralwasser, bitte.", "exampleTranslation": "Cho một ly nước khoáng.", "category": "Lebensmittel" },
  { "id": "l12_v8_s", "word": "das Rind (số ít)", "ipa": "/ʁɪnt/", "meaning": "con bò", "example": "Ich esse lieber Rindfleisch als Schweinefleisch.", "exampleTranslation": "Tôi thích ăn thịt bò hơn thịt lợn.", "category": "Lebensmittel" },
  { "id": "l12_v8_p", "word": "die Rinder (số nhiều)", "ipa": "/ˈʁɪndɐ/", "meaning": "con bò", "example": "Ich esse lieber Rindfleisch als Schweinefleisch.", "exampleTranslation": "Tôi thích ăn thịt bò hơn thịt lợn.", "category": "Lebensmittel" },
  { "id": "l12_v8_fleisch", "word": "das Rindfleisch", "ipa": "/ˈʁɪntˌflaɪ̯ʃ/", "meaning": "thịt bò", "example": "Ich esse lieber Rindfleisch als Schweinefleisch.", "exampleTranslation": "Tôi thích ăn thịt bò hơn thịt lợn.", "category": "Lebensmittel" },
  { "id": "l12_v9_s", "word": "das Schwein (số ít)", "ipa": "/ʃvaɪ̯n/", "meaning": "con lợn", "example": "In Deutschland isst man viel Schweinefleisch.", "exampleTranslation": "Ở Đức người ta ăn nhiều thịt lợn.", "category": "Lebensmittel" },
  { "id": "l12_v9_p", "word": "die Schweine (số nhiều)", "ipa": "/ˈʃvaɪ̯nə/", "meaning": "con lợn", "example": "In Deutschland isst man viel Schweinefleisch.", "exampleTranslation": "Ở Đức người ta ăn nhiều thịt lợn.", "category": "Lebensmittel" },
  { "id": "l12_v9_fleisch", "word": "das Schweinefleisch", "ipa": "/ˈʃvaɪ̯nəˌflaɪ̯ʃ/", "meaning": "thịt lợn", "example": "In Deutschland isst man viel Schweinefleisch.", "exampleTranslation": "Ở Đức người ta ăn nhiều thịt lợn.", "category": "Lebensmittel" },
  { "id": "l12_v10", "word": "braten (nguyên thể), hat gebraten", "ipa": "/ˈbʁaːtn̩/", "meaning": "chiên, rán, nướng", "example": "Ich brate das Fleisch in der Pfanne.", "exampleTranslation": "Tôi chiên thịt trong chảo.", "category": "Aktion" },
  { "id": "l12_v11", "word": "scharf", "ipa": "/ʃaʁf/", "meaning": "cay", "example": "Das Gericht ist sehr scharf.", "exampleTranslation": "Món ăn này rất cay.", "category": "Adjektiv" },
  { "id": "l12_v12", "word": "vegetarisch", "ipa": "/veɡeˈtaːʁɪʃ/", "meaning": "ăn chay", "example": "Er isst nur vegetarisch.", "exampleTranslation": "Anh ấy chỉ ăn đồ chay.", "category": "Adjektiv" },
  { "id": "l12_v13_s", "word": "die Hälfte (số ít)", "ipa": "/ˈhɛlftə/", "meaning": "một nửa", "example": "Die Hälfte der Deutschen isst oft Obst.", "exampleTranslation": "Một nửa người Đức thường xuyên ăn trái cây.", "category": "Weitere Wörter" },
  { "id": "l12_v13_p", "word": "die Hälften (số nhiều)", "ipa": "/ˈhɛlftn̩/", "meaning": "một nửa", "example": "Die Hälfte der Deutschen isst oft Obst.", "exampleTranslation": "Một nửa người Đức thường xuyên ăn trái cây.", "category": "Weitere Wörter" },
  { "id": "l12_v14", "word": "doppelt (so viele)", "ipa": "/ˈdɔpl̩t/", "meaning": "gấp đôi", "example": "Männer essen doppelt so viel Fleisch wie Frauen.", "exampleTranslation": "Nam giới ăn thịt nhiều gấp đôi nữ giới.", "category": "Weitere Wörter" },
  { "id": "l12_v15", "word": "durchschnittlich", "ipa": "/ˈdʊʁçˌʃnɪtlɪç/", "meaning": "trung bình", "example": "Durchschnittlich trinken wir viel Wasser.", "exampleTranslation": "Trung bình chúng tôi uống nhiều nước.", "category": "Adjektiv" },
  { "id": "l12_v16", "word": "genug", "ipa": "/ɡəˈnuːk/", "meaning": "đủ", "example": "Wir haben genug Essen.", "exampleTranslation": "Chúng ta có đủ thức ăn.", "category": "Weitere Wörter" },
  { "id": "l12_v17", "word": "häufig", "ipa": "/ˈhɔɪ̯fɪç/", "meaning": "thường xuyên", "example": "Er geht häufig ins Restaurant.", "exampleTranslation": "Anh ấy thường xuyên đi nhà hàng.", "category": "Adjektiv" },
  { "id": "l12_v18", "word": "kaum", "ipa": "/kaʊ̯m/", "meaning": "hầu như không", "example": "Ich esse kaum Fleisch.", "exampleTranslation": "Tôi hầu như không ăn thịt.", "category": "Weitere Wörter" },
  { "id": "l12_v19", "word": "rund", "ipa": "/ʁʊnt/", "meaning": "khoảng chừng", "example": "Rund 30 Prozent essen gern Pizza.", "exampleTranslation": "Khoảng 30 phần trăm thích ăn pizza.", "category": "Weitere Wörter" },
  { "id": "l12_v20_s", "word": "der/die Deutsche (số ít)", "ipa": "/ˈdɔɪ̯tʃə/", "meaning": "người Đức", "example": "Viele Deutsche trinken Kaffee.", "exampleTranslation": "Nhiều người Đức uống cà phê.", "category": "Personen" },
  { "id": "l12_v20_p", "word": "die Deutschen (số nhiều)", "ipa": "/ˈdɔɪ̯tʃn̩/", "meaning": "người Đức", "example": "Viele Deutsche trinken Kaffee.", "exampleTranslation": "Nhiều người Đức uống cà phê.", "category": "Personen" },
  { "id": "l12_v21", "word": "die Heimat", "ipa": "/ˈhaɪ̯maːt/", "meaning": "quê hương", "example": "In meiner Heimat kocht man anders.", "exampleTranslation": "Ở quê tôi người ta nấu ăn khác.", "category": "Orte" },
  { "id": "l12_v22_s", "word": "die Zeitschrift (số ít)", "ipa": "/ˈt͡saɪ̯tˌʃʁɪft/", "meaning": "tạp chí", "example": "Ich lese eine Zeitschrift über Essen.", "exampleTranslation": "Tôi đọc một tạp chí về đồ ăn.", "category": "Medien" },
  { "id": "l12_v22_p", "word": "die Zeitschriften (số nhiều)", "ipa": "/ˈt͡saɪ̯tˌʃʁɪftn̩/", "meaning": "tạp chí", "example": "Ich lese eine Zeitschrift über Essen.", "exampleTranslation": "Tôi đọc một tạp chí về đồ ăn.", "category": "Medien" },
  { "id": "l12_v23", "word": "ansehen (nguyên thể), hat angesehen", "ipa": "/ˈanˌzeːən/", "meaning": "nhìn, xem", "example": "Wir sehen uns das Menü an.", "exampleTranslation": "Chúng tôi xem thực đơn.", "category": "Aktion" },
  { "id": "l12_v24", "word": "aussuchen (nguyên thể), hat ausgesucht", "ipa": "/ˈaʊ̯sˌzuːxn̩/", "meaning": "chọn lựa", "example": "Hast du dir ein Gericht ausgesucht?", "exampleTranslation": "Bạn đã chọn được món ăn chưa?", "category": "Aktion" },
  { "id": "l12_v25", "word": "holen (nguyên thể), hat geholt", "ipa": "/ˈhoːlən/", "meaning": "lấy, mang về", "example": "Ich hole eine Pizza.", "exampleTranslation": "Tôi đi lấy một chiếc pizza.", "category": "Aktion" },
  { "id": "l12_v26", "word": "überraschen (nguyên thể), hat überrascht", "ipa": "/yːbɐˈʁaʃn̩/", "meaning": "làm ngạc nhiên", "example": "Das hat mich sehr überrascht.", "exampleTranslation": "Điều đó đã làm tôi rất ngạc nhiên.", "category": "Aktion" },
  { "id": "l12_v27", "word": "verbrauchen (nguyên thể), hat verbraucht", "ipa": "/fɛɐ̯ˈbʁaʊ̯xn̩/", "meaning": "tiêu thụ", "example": "Wir verbrauchen viel Strom.", "exampleTranslation": "Chúng tôi tiêu thụ nhiều điện.", "category": "Aktion" },
  { "id": "l12_v28", "word": "sich vorbereiten (nguyên thể), hat sich vorbereitet", "ipa": "/ˈfoːɐ̯bəˌʁaɪ̯tn̩/", "meaning": "chuẩn bị", "example": "Er bereitet sich auf die Prüfung vor.", "exampleTranslation": "Anh ấy chuẩn bị cho kỳ thi.", "category": "Aktion" },
  { "id": "l12_v29", "word": "sich wundern (nguyên thể), hat sich gewundert", "ipa": "/ˈvʊndɐn/", "meaning": "ngạc nhiên", "example": "Es wundert mich, dass es so billig ist.", "exampleTranslation": "Tôi ngạc nhiên là nó rẻ đến vậy.", "category": "Aktion" },
  { "id": "l12_v30", "word": "preiswert", "ipa": "/ˈpʁaɪ̯sˌveːɐ̯t/", "meaning": "phải chăng, giá hợp lý", "example": "Das Essen hier ist sehr preiswert.", "exampleTranslation": "Thức ăn ở đây giá rất hợp lý.", "category": "Adjektiv" },
  { "id": "l12_v31", "word": "wahrscheinlich", "ipa": "/vaːɐ̯ˈʃaɪ̯nlɪç/", "meaning": "có lẽ, có khả năng", "example": "Wahrscheinlich gehen wir heute essen.", "exampleTranslation": "Có lẽ hôm nay chúng tôi đi ăn nhà hàng.", "category": "Weitere Wörter" },
  { "id": "l12_v32", "word": "komisch", "ipa": "/ˈkoːmɪʃ/", "meaning": "kỳ lạ, buồn cười", "example": "Das finde ich komisch.", "exampleTranslation": "Tôi thấy điều đó thật kỳ lạ.", "category": "Adjektiv" },
  { "id": "l12_v33", "word": "wenn - dann", "ipa": "/vɛn/ - /dan/", "meaning": "nếu - thì", "example": "Wenn es regnet, dann bleiben wir zu Hause.", "exampleTranslation": "Nếu trời mưa, thì chúng tôi ở nhà.", "category": "Weitere Wörter" }

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
      { id: "l13_v1_s", word: "die Aufgabe (số ít)", ipa: "/ˈaʊ̯fˌɡaːbə/", meaning: "bài tập", example: "Wir lösen die Aufgabe.", exampleTranslation: "Chúng tôi giải bài tập." },
      { id: "l13_v1_p", word: "die Aufgaben (số nhiều)", ipa: "/ˈaʊ̯fˌɡaːbən/", meaning: "các bài tập", example: "Wir lösen die Grammatikaufgaben.", exampleTranslation: "Chúng tôi giải các bài tập ngữ pháp." },
      { id: "l13_v2_s", word: "das Goethe-Institut (số ít)", ipa: "/ˈɡøːtə ɪnstiˈtuːt/", meaning: "Viện Goethe", example: "Ich lerne Deutsch am Goethe-Institut.", exampleTranslation: "Tôi học tiếng Đức ở viện Goethe." },
      { id: "l13_v2_p", word: "die Goethe-Institute (số nhiều)", ipa: "/ˈɡøːtə ɪnstiˈtuːtə/", meaning: "các Viện Goethe", example: "Es gibt viele Goethe-Institute weltweit.", exampleTranslation: "Có rất nhiều Viện Goethe trên toàn thế giới." },
      { id: "l13_v3_s", word: "die Klasse (số ít)", ipa: "/ˈklasə/", meaning: "lớp học", example: "In meiner Klasse gibt es viele Studenten.", exampleTranslation: "Trong lớp tôi có nhiều sinh viên." },
      { id: "l13_v3_p", word: "die Klassen (số nhiều)", ipa: "/ˈklasən/", meaning: "các lớp học", example: "Die Klassen sind groß.", exampleTranslation: "Các lớp học thì quá lớn." },
      { id: "l13_v4_p", word: "die Nachrichten (số nhiều)", ipa: "/ˈnaːxʁɪçtn̩/", meaning: "tin tức", example: "Ich höre jeden Tag die Nachrichten.", exampleTranslation: "Tôi nghe tin tức mỗi ngày." },
      { id: "l13_v5_s", word: "das Semester (số ít)", ipa: "/zeˈmɛstɐ/", meaning: "học kỳ", example: "Er ist im ersten Semester.", exampleTranslation: "Anh ấy đang ở học kỳ một." },
      { id: "l13_v5_p", word: "die Semester (số nhiều)", ipa: "/zeˈmɛstɐ/", meaning: "các học kỳ", example: "Er ist im vierten Semester.", exampleTranslation: "Anh ấy đang học kỳ bốn." },
      { id: "l13_v6_s", word: "die Sprachenschule (số ít)", ipa: "/ˈʃpʁaːxn̩ˌʃuːlə/", meaning: "trường ngoại ngữ", example: "Ich besuche eine Sprachenschule.", exampleTranslation: "Tôi đi học ở một trường ngoại ngữ." },
      { id: "l13_v6_p", word: "die Sprachenschulen (số nhiều)", ipa: "/ˈʃpʁaːxn̩ˌʃuːlən/", meaning: "các trường ngoại ngữ", example: "Es gibt hier viele Sprachenschulen.", exampleTranslation: "Có nhiều trường ngôn ngữ ở đây." },
      { id: "l13_v7_s", word: "der Test (số ít)", ipa: "/tɛst/", meaning: "bài kiểm tra", example: "Der Test war schwer.", exampleTranslation: "Bài kiểm tra đó rất khó." },
      { id: "l13_v7_p", word: "die Tests (số nhiều)", ipa: "/tɛsts/", meaning: "các bài kiểm tra", example: "Wir haben viele Tests geschrieben.", exampleTranslation: "Chúng tôi đã làm nhiều bài kiểm tra." },
      { id: "l13_v8_s", word: "der Typ (số ít)", ipa: "/tyːp/", meaning: "kiểu, loại (người/vật)", example: "Welcher Lernertyp bist du?", exampleTranslation: "Bạn là kiểu người học nào?" },
      { id: "l13_v8_p", word: "die Typen (số nhiều)", ipa: "/ˈtyːpən/", meaning: "các kiểu, loại", example: "Es gibt verschiedene Typen.", exampleTranslation: "Có nhiều kiểu khác nhau." },
      { id: "l13_v9_s", word: "die Volkshochschule (số ít)", ipa: "/ˈfɔlkshoːxˌʃuːlə/", meaning: "trung tâm giáo dục thường xuyên", example: "Sie macht einen Kurs an der Volkshochschule.", exampleTranslation: "Cô ấy học một khóa ở trung tâm giáo dục thường xuyên." },
      { id: "l13_v9_p", word: "die Volkshochschulen (số nhiều)", ipa: "/ˈfɔlkshoːxˌʃuːlən/", meaning: "các trung tâm GDTX", example: "In Deutschland gibt es viele Volkshochschulen.", exampleTranslation: "Ở Đức có nhiều trung tâm giáo dục thường xuyên." },
      { id: "l13_v10", word: "anschauen (nguyên thể)", ipa: "/ˈanˌʃaʊ̯ən/", meaning: "ngắm, xem", example: "Wir schauen Filme an.", exampleTranslation: "Chúng tôi xem phim." },
      { id: "l13_v11", word: "aufschreiben (nguyên thể)", ipa: "/ˈaʊ̯fˌʃʁaɪ̯bən/", meaning: "viết ra, ghi chép", example: "Er hat die Sätze aufgeschrieben.", exampleTranslation: "Anh ấy đã ghi chép các câu lại." },
      { id: "l13_v12", word: "sich bewegen (nguyên thể)", ipa: "/bəˈveːɡn̩/", meaning: "chuyển động, vận động", example: "Man muss sich bewegen.", exampleTranslation: "Người ta phải chuyển động." },
      { id: "l13_v13", word: "korrigieren (nguyên thể)", ipa: "/kɔʁiˈɡiːʁən/", meaning: "sửa lỗi", example: "Der Lehrer korrigiert die Fehler.", exampleTranslation: "Giáo viên đã sửa các lỗi." },
      { id: "l13_v14", word: "lösen (nguyên thể)", ipa: "/ˈløːzən/", meaning: "giải", example: "Ich kann die Aufgabe nicht lösen.", exampleTranslation: "Tôi không thể giải bài tập này." },
      { id: "l13_v15", word: "sich merken (nguyên thể)", ipa: "/ˈmɛʁkn̩/", meaning: "ghi nhớ", example: "Ich kann mir neue Wörter gut merken.", exampleTranslation: "Tôi có thể ghi nhớ từ mới rất tốt." },
      { id: "l13_v16", word: "übersetzen (nguyên thể)", ipa: "/ˌyːbɐˈzɛt͡sn̩/", meaning: "dịch", example: "Ich übersetze den Text.", exampleTranslation: "Tôi dịch văn bản." },
      { id: "l13_v17", word: "wiederholen (nguyên thể)", ipa: "/ˌviːdɐˈhoːlən/", meaning: "lặp lại, ôn tập", example: "Wir müssen die Wörter oft wiederholen.", exampleTranslation: "Chúng tôi phải thường xuyên ôn tập lại từ vựng." },
      { id: "l13_v18_s", word: "die Gegenwart (số ít)", ipa: "/ˈɡeːɡn̩vaʁt/", meaning: "hiện tại", example: "In der Gegenwart ist alles anders.", exampleTranslation: "Ở hiện tại mọi thứ đều khác." },
      { id: "l13_v19_s", word: "die Vergangenheit (số ít)", ipa: "/fɛɐ̯ˈɡaŋənhaɪ̯t/", meaning: "quá khứ", example: "In der Vergangenheit habe ich viel gelernt.", exampleTranslation: "Trong quá khứ tôi đã học rất nhiều." },
      { id: "l13_v20", word: "planen (nguyên thể)", ipa: "/ˈplaːnən/", meaning: "lên kế hoạch", example: "Wir haben eine Reise geplant.", exampleTranslation: "Chúng tôi đã lên kế hoạch cho một chuyến đi." },
      { id: "l13_v21", word: "sich verlieben (nguyên thể)", ipa: "/fɛɐ̯ˈliːbn̩/", meaning: "yêu", example: "Er hat sich in Marie verliebt.", exampleTranslation: "Anh ấy đã yêu Marie." },
      { id: "l13_v22", word: "verreisen (nguyên thể)", ipa: "/fɛɐ̯ˈʁaɪ̯zn̩/", meaning: "đi du lịch", example: "Meine Oma ist verreist.", exampleTranslation: "Bà tôi đã đi du lịch." },
      { id: "l13_v23", word: "möglich", ipa: "/ˈmøːklɪç/", meaning: "có thể", example: "Das ist nicht möglich.", exampleTranslation: "Điều đó là không thể." },
      { id: "l13_v24", word: "so viel wie möglich", ipa: "/zoː fiːl viː ˈmøːklɪç/", meaning: "nhiều nhất có thể", example: "Ich übe so viel wie möglich.", exampleTranslation: "Tôi luyện tập nhiều nhất có thể." },
      { id: "l13_v25", word: "am allerwichtigsten", ipa: "/am ˌalɐˈvɪçtɪçstn̩/", meaning: "quan trọng nhất", example: "Am allerwichtigsten ist für mich Grammatik.", exampleTranslation: "Quan trọng nhất đối với tôi là ngữ pháp." },
      { id: "l13_v26", word: "laut", ipa: "/laʊ̯t/", meaning: "to (âm thanh)", example: "Deutsch klingt laut.", exampleTranslation: "Tiếng Đức nghe to." },
      { id: "l13_v27", word: "leise", ipa: "/ˈlaɪ̯zə/", meaning: "nhỏ (âm thanh)", example: "Französisch klingt leise.", exampleTranslation: "Tiếng Pháp nghe nhỏ." },
      { id: "l13_v28", word: "weich", ipa: "/vaɪ̯ç/", meaning: "mềm mại", example: "Die Sprache klingt weich.", exampleTranslation: "Ngôn ngữ nghe mềm mại." },
      { id: "l13_v29", word: "hart", ipa: "/haʁt/", meaning: "cứng", example: "Deutsch klingt manchmal hart.", exampleTranslation: "Đôi khi tiếng Đức nghe cứng." },
      { id: "l13_v30", word: "melodisch", ipa: "/meˈloːdɪʃ/", meaning: "du dương", example: "Vietnamesisch klingt sehr melodisch.", exampleTranslation: "Tiếng Việt nghe rất du dương." }
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
      { id: "l14_v1_s", word: "die Post (số ít)", ipa: "/pɔst/", meaning: "bưu điện", example: "Ich muss noch zur Post gehen.", exampleTranslation: "Tôi còn phải đi đến bưu điện.", category: "Post" },
      { id: "l14_v2_s", word: "der Absender (số ít)", ipa: "/ˈapˌzɛndɐ/", meaning: "người gửi", example: "Hier steht leider kein Absender.", exampleTranslation: "Thật tiếc là ở đây không ghi người gửi.", category: "Post" },
      { id: "l14_v2_p", word: "die Absender (số nhiều)", ipa: "/ˈapˌzɛndɐ/", meaning: "những người gửi", example: "Viele Absender haben das Formular falsch ausgefüllt.", exampleTranslation: "Nhiều người gửi đã điền sai mẫu.", category: "Post" },
      { id: "l14_v3_s", word: "der Empfänger (số ít)", ipa: "/ɛmˈpfɛŋɐ/", meaning: "người nhận", example: "Das Paket wird an den Empfänger geliefert.", exampleTranslation: "Kiện hàng được giao cho người nhận.", category: "Post" },
      { id: "l14_v3_p", word: "die Empfänger (số nhiều)", ipa: "/ɛmˈpfɛŋɐ/", meaning: "những người nhận", example: "Die Empfänger haben das Geld erhalten.", exampleTranslation: "Những người nhận đã nhận được tiền.", category: "Post" },
      { id: "l14_v4_s", word: "der Briefkasten (số ít)", ipa: "/ˈbʁiːfˌkastn̩/", meaning: "hòm thư", example: "Bitte wirf den Brief in den Briefkasten.", exampleTranslation: "Làm ơn bỏ bức thư vào hòm thư.", category: "Post" },
      { id: "l14_v4_p", word: "die Briefkästen (số nhiều)", ipa: "/ˈbʁiːfˌkɛstn̩/", meaning: "những hòm thư", example: "Die Briefkästen am Bahnhof sind rot.", exampleTranslation: "Những hòm thư ở nhà ga có màu đỏ.", category: "Post" },
      { id: "l14_v5_s", word: "der Schalter (số ít)", ipa: "/ˈʃaltɐ/", meaning: "quầy giao dịch", example: "Gehen Sie bitte zum Schalter 3.", exampleTranslation: "Vui lòng đến quầy số 3.", category: "Post" },
      { id: "l14_v5_p", word: "die Schalter (số nhiều)", ipa: "/ˈʃaltɐ/", meaning: "các quầy giao dịch", example: "Alle Schalter sind geschlossen.", exampleTranslation: "Tất cả các quầy đều đã đóng cửa.", category: "Post" },
      { id: "l14_v6_s", word: "die Unterschrift (số ít)", ipa: "/ˈʊntɐˌʃʁɪft/", meaning: "chữ ký", example: "Hier fehlt Ihre Unterschrift.", exampleTranslation: "Ở đây thiếu chữ ký của ngài.", category: "Post" },
      { id: "l14_v6_p", word: "die Unterschriften (số nhiều)", ipa: "/ˈʊntɐˌʃʁɪftn̩/", meaning: "các chữ ký", example: "Wir brauchen viele Unterschriften.", exampleTranslation: "Chúng tôi cần rất nhiều chữ ký.", category: "Post" },
      { id: "l14_v7_s", word: "das Päckchen (số ít)", ipa: "/ˈpɛkçən/", meaning: "gói hàng nhỏ", example: "Zuerst wird das Päckchen gepackt.", exampleTranslation: "Đầu tiên gói hàng nhỏ được đóng gói.", category: "Post" },
      { id: "l14_v7_p", word: "die Päckchen (số nhiều)", ipa: "/ˈpɛkçən/", meaning: "các gói hàng nhỏ", example: "Es werden fleißig Päckchen gepackt.", exampleTranslation: "Những gói hàng nhỏ đang được thu xếp đóng gói chăm chỉ.", category: "Post" },
      { id: "l14_v8_s", word: "das Paket (số ít)", ipa: "/paˈkeːt/", meaning: "bưu kiện", example: "Paula verschickt ein Paket.", exampleTranslation: "Paula gửi một bưu kiện.", category: "Post" },
      { id: "l14_v8_p", word: "die Pakete (số nhiều)", ipa: "/paˈkeːtə/", meaning: "các bưu kiện", example: "Die Pakete werden transportiert.", exampleTranslation: "Các bưu kiện được vận chuyển.", category: "Post" },
      { id: "l14_v9", word: "einpacken (nguyên thể)", ipa: "/ˈaɪ̯nˌpakn̩/", meaning: "đóng gói", example: "Geschenke werden in den Karton eingepackt.", exampleTranslation: "Những món quà được đóng gói vào thùng carton.", category: "Post" },
      { id: "l14_v10", word: "packen (nguyên thể)", ipa: "/ˈpakn̩/", meaning: "đóng đồ", example: "Es werden fleißig Päckchen gepackt.", exampleTranslation: "Những gói hàng nhỏ đang được thu xếp đóng gói chăm chỉ.", category: "Post" },
      { id: "l14_v11", word: "transportieren (nguyên thể)", ipa: "/tʁanspɔʁˈtiːʁən/", meaning: "vận chuyển", example: "Die Pakete werden mit einem Lkw transportiert.", exampleTranslation: "Những kiện hàng được vận chuyển bằng xe tải.", category: "Post" },
      { id: "l14_v12", word: "unterschreiben (nguyên thể)", ipa: "/ˌʊntɐˈʃʁaɪ̯bən/", meaning: "ký tên", example: "Man muss das Formular unterschreiben.", exampleTranslation: "Người ta phải ký vào biểu mẫu.", category: "Post" },
      { id: "l14_v13_s", word: "die Creme (số ít)", ipa: "/kʁeːm/", meaning: "kem bôi/dưỡng", example: "Die Gesichtscreme ist super.", exampleTranslation: "Kem dưỡng da mặt này rất tuyệt.", category: "Weitere Wörter" },
      { id: "l14_v13_p", word: "die Cremes (số nhiều)", ipa: "/kʁeːms/", meaning: "các loại kem", example: "Wir haben verschiedene Cremes.", exampleTranslation: "Chúng tôi có nhiều loại kem khác nhau.", category: "Weitere Wörter" },
      { id: "l14_v14_s", word: "die Gebrauchsanweisung (số ít)", ipa: "/ɡəˈbʁaʊ̯xsʔanˌvaɪ̯zʊŋ/", meaning: "hướng dẫn sử dụng", example: "Lesen Sie die Gebrauchsanweisung.", exampleTranslation: "Hãy đọc bản hướng dẫn sử dụng.", category: "Weitere Wörter" },
      { id: "l14_v14_p", word: "die Gebrauchsanweisungen (số nhiều)", ipa: "/ɡəˈbʁaʊ̯xsʔanˌvaɪ̯zʊŋən/", meaning: "các hướng dẫn sử dụng", example: "Die Gebrauchsanweisungen liegen dort.", exampleTranslation: "Các tờ hướng dẫn nằm ở đó.", category: "Weitere Wörter" },
      { id: "l14_v15_s", word: "das Gesicht (số ít)", ipa: "/ɡəˈzɪçt/", meaning: "khuôn mặt", example: "Sie hat ein schönes Gesicht.", exampleTranslation: "Cô ấy có một khuôn mặt đẹp.", category: "Weitere Wörter" },
      { id: "l14_v15_p", word: "die Gesichter (số nhiều)", ipa: "/ɡəˈzɪçtɐ/", meaning: "các khuôn mặt", example: "Die Kinder haben lachende Gesichter.", exampleTranslation: "Những đứa trẻ có khuôn mặt tươi cười.", category: "Weitere Wörter" },
      { id: "l14_v16_s", word: "der Junge (số ít)", ipa: "/ˈjʊŋə/", meaning: "cậu bé", example: "Die Geschenke sind für einen Jungen.", exampleTranslation: "Những món quà dành cho một cậu bé.", category: "Weitere Wörter" },
      { id: "l14_v16_p", word: "die Jungen (số nhiều)", ipa: "/ˈjʊŋən/", meaning: "các cậu bé", example: "Die Jungen spielen Fußball.", exampleTranslation: "Các cậu bé đang chơi bóng đá.", category: "Weitere Wörter" },
      { id: "l14_v17_s", word: "das Mädchen (số ít)", ipa: "/ˈmɛːtçən/", meaning: "cô bé", example: "Das Mädchen freut sich über das Geschenk.", exampleTranslation: "Cô bé vui mừng vì món quà.", category: "Weitere Wörter" },
      { id: "l14_v17_p", word: "die Mädchen (số nhiều)", ipa: "/ˈmɛːtçən/", meaning: "các cô bé", example: "Die Mädchen tanzen.", exampleTranslation: "Những cô bé đang nhảy múa.", category: "Weitere Wörter" },
      { id: "l14_v18_s", word: "das Projekt (số ít)", ipa: "/pʁoˈjɛkt/", meaning: "dự án", example: "Das Projekt 'Weihnachten im Schuhkarton' ist toll.", exampleTranslation: "Dự án 'Giáng sinh trong hộp giày' rất tuyệt.", category: "Weitere Wörter" },
      { id: "l14_v18_p", word: "die Projekte (số nhiều)", ipa: "/pʁoˈjɛktə/", meaning: "các dự án", example: "Wir haben viele Projekte.", exampleTranslation: "Chúng tôi có nhiều dự án.", category: "Weitere Wörter" },
      { id: "l14_v19_s", word: "der Schritt (số ít)", ipa: "/ʃʁɪt/", meaning: "bước", example: "Schritt 1: Zuerst wird der Karton beklebt.", exampleTranslation: "Bước 1: Ban đầu hộp bìa cứng được dán giấy.", category: "Weitere Wörter" },
      { id: "l14_v19_p", word: "die Schritte (số nhiều)", ipa: "/ˈʃʁɪtə/", meaning: "các bước", example: "Es gibt fünf Schritte.", exampleTranslation: "Có tổng cộng 5 bước.", category: "Weitere Wörter" },
      { id: "l14_v20_s", word: "die Tafel (số ít)", ipa: "/ˈtaːfl̩/", meaning: "thanh, bảng", example: "Ich liebe 3 Tafeln Chili-Schokolade.", exampleTranslation: "Tôi thích 3 thanh sô-cô-la ớt.", category: "Weitere Wörter" },
      { id: "l14_v20_p", word: "die Tafeln (số nhiều)", ipa: "/ˈtaːfl̩n/", meaning: "các thanh, bảng", example: "Wir haben viele Tafeln Schokolade.", exampleTranslation: "Chúng tôi có nhiều thanh sô-cô-la.", category: "Weitere Wörter" },
      { id: "l14_v21_s", word: "der Zentimeter (số ít)", ipa: "/t͡sɛntiˈmeːtɐ/", meaning: "xen-ti-mét", example: "Der Schuhkarton sollte ca. 30 x 20 x 10 Zentimeter groß sein.", exampleTranslation: "Hộp giày nên có kích thước khoảng 30x20x10 xen-ti-mét.", category: "Weitere Wörter" },
      { id: "l14_v21_p", word: "die Zentimeter (số nhiều)", ipa: "/t͡sɛntiˈmeːtɐ/", meaning: "các xen-ti-mét", example: "Er ist ein paar Zentimeter größer.", exampleTranslation: "Anh ấy cao hơn một vài xăng-ti-mét.", category: "Weitere Wörter" },
      { id: "l14_v22", word: "ankreuzen (nguyên thể)", ipa: "/ˈanˌkʁɔɪ̯t͡sn̩/", meaning: "đánh dấu chéo", example: "Bitte Geschlecht und Alter ankreuzen.", exampleTranslation: "Vui lòng đánh dấu vào giới tính và tuổi.", category: "Weitere Wörter" },
      { id: "l14_v23", word: "benutzen (nguyên thể)", ipa: "/bəˈnʊt͡sn̩/", meaning: "sử dụng", example: "Gestern habe ich sie gleich benutzt.", exampleTranslation: "Hôm qua tôi đã sử dụng chúng ngay.", category: "Weitere Wörter" },
      { id: "l14_v24", word: "an etwas denken (nguyên thể)", ipa: "/an ˈɛtvas ˈdɛŋkn̩/", meaning: "nhớ đến, nghĩ về", example: "Schön, dass Du an mich gedacht hast.", exampleTranslation: "Thật vui vì bạn đã nhớ tới mình.", category: "Weitere Wörter" },
      { id: "l14_v25", word: "ergänzen (nguyên thể)", ipa: "/ɛɐ̯ˈɡɛnt͡sn̩/", meaning: "điền vào, bổ sung", example: "Ergänzen Sie die fehlenden Wörter.", exampleTranslation: "Hãy điền các từ còn thiếu.", category: "Weitere Wörter" },
      { id: "l14_v26", word: "gebrauchen (nguyên thể)", ipa: "/ɡəˈbʁaʊ̯xn̩/", meaning: "dùng, sử dụng", example: "Das kann ich gut gebrauchen.", exampleTranslation: "Cái này mình có thể dùng tốt.", category: "Weitere Wörter" },
      { id: "l14_v27", word: "arm", ipa: "/aʁm/", meaning: "nghèo", example: "Die Päckchen werden an arme Kinder verschickt.", exampleTranslation: "Những gói hàng được gửi cho trẻ em nghèo.", category: "Weitere Wörter" },
      { id: "l14_v28", word: "verschieden", ipa: "/fɛɐ̯ˈʃiːdn̩/", meaning: "khác nhau", example: "Am besten verschiedene Geschenke in den Karton legen.", exampleTranslation: "Tốt nhất là bỏ những món quà khác nhau vào vỏ hộp.", category: "Weitere Wörter" },
      { id: "l14_v29", word: "schließlich", ipa: "/ˈʃliːslɪç/", meaning: "cuối cùng", example: "Schließlich wird das Päckchen gepackt.", exampleTranslation: "Cuối cùng gói hàng được đóng gói.", category: "Weitere Wörter" }
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

      { id: "v15_1", word: "der Krimi (số ít)", ipa: "/ˈkʁiːmi/", meaning: "Phim hình sự", example: "Wir sehen heute Abend einen Krimi.", exampleTranslation: "Tối nay chúng ta sẽ xem một phim hình sự.", category: "Medien" },
      { id: "v15_2", word: "die Serie (số ít)", ipa: "/ˈzeːʁiə/", meaning: "Phim bộ/Phim dài tập", example: "Das ist meine Lieblingsserie.", exampleTranslation: "Đó là series yêu thích của tôi.", category: "Medien" },
      { id: "v15_3", word: "die Folge (số ít)", ipa: "/ˈfɔlɡə/", meaning: "Tập phim", example: "Hast du die letzte Folge gesehen?", exampleTranslation: "Bạn đã xem tập cuối chưa?", category: "Medien" },
      { id: "v15_4", word: "der Spielfilm (số ít)", ipa: "/ˈʃpiːlˌfɪlm/", meaning: "Phim truyện", example: "Der Spielfilm dauert zwei Stunden.", exampleTranslation: "Phim truyện dài hai tiếng.", category: "Medien" },
      { id: "v15_5", word: "die Sendung (số ít)", ipa: "/ˈzɛndʊŋ/", meaning: "Chương trình (TV, radio)", example: "Diese Sendung ist sehr beliebt.", exampleTranslation: "Chương trình này rất được yêu thích.", category: "Medien" },
      { id: "v15_6", word: "der Sender (số ít)", ipa: "/ˈzɛndɐ/", meaning: "Đài truyền hình, kênh", example: "ARD ist ein deutscher Sender.", exampleTranslation: "ARD là một đài truyền hình Đức.", category: "Medien" },
      { id: "v15_7", word: "produzieren (nguyên thể)", ipa: "/pʁoduˈt͡siːʁən/", meaning: "Sản xuất", example: "Der Film wird in Berlin produziert.", exampleTranslation: "Bộ phim được sản xuất ở Berlin.", category: "Arbeit" },
      { id: "v15_8", word: "das Drehbuch (số ít)", ipa: "/ˈdʁeːˌbuːx/", meaning: "Kịch bản", example: "Das Drehbuch wird zuerst geschrieben.", exampleTranslation: "Kịch bản được viết đầu tiên.", category: "Arbeit" },
      { id: "v15_9", word: "der Regisseur (số ít)", ipa: "/ʁeʒɪˈsøːɐ̯/", meaning: "Đạo diễn", example: "Der Regisseur instruiert die Schauspieler.", exampleTranslation: "Đạo diễn chỉ đạo các diễn viên.", category: "Arbeit" },
      { id: "v15_10", word: "der Schauspieler (số ít)", ipa: "/ˈʃaʊ̯ˌʃpiːlɐ/", meaning: "Diễn viên", example: "Er ist ein bekannter Schauspieler.", exampleTranslation: "Anh ấy là một một diễn viên nổi tiếng.", category: "Arbeit" },
      { id: "v15_11", word: "das Studio (số ít)", ipa: "/ˈʃtuːdi̯o/", meaning: "Trường quay, phòng thu", example: "Die Show wird im Studio gedreht.", exampleTranslation: "Chương trình được quay ở trường quay.", category: "Arbeit" },
      { id: "v15_12", word: "der Zuschauer (số ít)", ipa: "/ˈt͡suːˌʃaʊ̯ɐ/", meaning: "Khán giả", example: "Die Zuschauer klatschen.", exampleTranslation: "Khán giả vỗ tay.", category: "Medien" },
      { id: "v15_13", word: "die Quizshow (số ít)", ipa: "/ˈkvɪzˌʃoː/", meaning: "Chương trình đố vui", example: "In der Quizshow kann man Geld gewinnen.", exampleTranslation: "Trong chương trình đố vui người ta có thể thắng tiền.", category: "Medien" },
      { id: "v15_14", word: "die Dokumentation (số ít)", ipa: "/dokumɛntaˈt͡si̯oːn/", meaning: "Phim tài liệu", example: "Ich sehe gern Dokumentationen über Tiere.", exampleTranslation: "Tôi thích xem phim tài liệu về động vật.", category: "Medien" },
      { id: "v15_15", word: "die Nachrichtensendung (số ít)", ipa: "/ˈnaːxʁɪçtn̩ˌzɛndʊŋ/", meaning: "Chương trình thời sự", example: "Die Nachrichten kommen um 20 Uhr.", exampleTranslation: "Bản tin thời sự phát lúc 20h.", category: "Medien" },
      { id: "v15_16", word: "bestellen (nguyên thể)", ipa: "/bəˈʃtɛlən/", meaning: "Đặt hàng", example: "Ich bestelle das Buch online.", exampleTranslation: "Tôi đặt mua sách trên mạng.", category: "Aktion" },
      { id: "v15_17", word: "liefern (nguyên thể)", ipa: "/ˈliːfɐn/", meaning: "Giao hàng", example: "Das Paket wird morgen geliefert.", exampleTranslation: "Gói hàng sẽ được giao vào ngày mai.", category: "Aktion" }
    
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

      { id: "v16_1_s", word: "das Einzelzimmer (số ít)", ipa: "/ˈaɪ̯nt͡sl̩ˌt͡sɪmɐ/", meaning: "Phòng đơn", example: "Ich hätte gern ein Einzelzimmer.", exampleTranslation: "Tôi muốn một phòng đơn.", category: "Hotel" },
      { id: "v16_1_p", word: "die Einzelzimmer (số nhiều)", ipa: "/ˈaɪ̯nt͡sl̩ˌt͡sɪmɐ/", meaning: "Các phòng đơn", example: "Es gibt noch viele Einzelzimmer frei.", exampleTranslation: "Vẫn còn nhiều phòng đơn trống.", category: "Hotel" },
      { id: "v16_2_s", word: "das Doppelzimmer (số ít)", ipa: "/ˈdɔpl̩ˌt͡sɪmɐ/", meaning: "Phòng đôi", example: "Haben Sie noch ein Doppelzimmer frei?", exampleTranslation: "Bạn còn phòng đôi nào trống không?", category: "Hotel" },
      { id: "v16_2_p", word: "die Doppelzimmer (số nhiều)", ipa: "/ˈdɔpl̩ˌt͡sɪmɐ/", meaning: "Các phòng đôi", example: "Alle Doppelzimmer sind belegt.", exampleTranslation: "Tất cả các phòng đôi đã được đặt.", category: "Hotel" },
      { id: "v16_3_s", word: "das Mehrbettzimmer (số ít)", ipa: "/ˈmeːɐ̯bɛtˌt͡sɪmɐ/", meaning: "Phòng nhiều giường", example: "Wir brauchen ein Mehrbettzimmer.", exampleTranslation: "Chúng tôi cần một phòng nhiều giường.", category: "Hotel" },
      { id: "v16_3_p", word: "die Mehrbettzimmer (số nhiều)", ipa: "/ˈmeːɐ̯bɛtˌt͡sɪmɐ/", meaning: "Các phòng nhiều giường", example: "Gibt es auch Mehrbettzimmer für Familien?", exampleTranslation: "Có cả các phòng nhiều giường cho gia đình không?", category: "Hotel" },
      { id: "v16_4", word: "das Frühstück (số ít)", ipa: "/ˈfʁyːˌʃtʏk/", meaning: "Bữa sáng", example: "Ist das Frühstück im Preis inklusive?", exampleTranslation: "Giá phòng đã bao gồm bữa sáng chưa?", category: "Verpflegung" },
      { id: "v16_5", word: "die Halbpension (số ít)", ipa: "/ˈhalppɑ̃ˌzi̯oːn/", meaning: "Bán thời gian ăn uống (sáng + tối)", example: "Wir buchen mit Halbpension.", exampleTranslation: "Chúng tôi đặt phòng kèm bán trú.", category: "Verpflegung" },
      { id: "v16_6", word: "die Vollpension (số ít)", ipa: "/ˈfɔlpɑ̃ˌzi̯oːn/", meaning: "Toàn thời gian ăn uống (3 bữa)", example: "Die Vollpension kostet 30 Euro extra.", exampleTranslation: "Toàn trú tốn thêm 30 Euro.", category: "Verpflegung" },
      { id: "v16_7_s", word: "die Rezeption (số ít)", ipa: "/ʁet͡sɛpˈt͡si̯oːn/", meaning: "Quầy lễ tân", example: "Der Schlüssel liegt an der Rezeption.", exampleTranslation: "Chìa khóa ở tại quầy lễ tân.", category: "Service" },
      { id: "v16_7_p", word: "die Rezeptionen (số nhiều)", ipa: "/ʁet͡sɛpˈt͡si̯oːnən/", meaning: "Các quầy lễ tân", example: "In großen Hotels gibt es oft mehrere Rezeptionen.", exampleTranslation: "Trong các khách sạn lớn thường có nhiều quầy lễ tân.", category: "Service" },
      { id: "v16_8_s", word: "die Reservierung (số ít)", ipa: "/ʁezɛʁˈviːʁʊŋ/", meaning: "Việc đặt phòng", example: "Haben Sie eine Reservierung?", exampleTranslation: "Bạn đã đặt phòng chưa?", category: "Service" },
      { id: "v16_8_p", word: "die Reservierungen (số nhiều)", ipa: "/ʁezɛʁˈviːʁʊŋən/", meaning: "Các việc đặt phòng", example: "Wir haben viele Reservierungen für das Wochenende.", exampleTranslation: "Chúng tôi có nhiều đặt phòng cho cuối tuần.", category: "Service" },
      { id: "v16_9", word: "buchen (nguyên thể)", ipa: "/ˈbuːxn̩/", meaning: "Đặt chỗ, đặt phòng", example: "Er möchte ein Zimmer buchen.", exampleTranslation: "Anh ấy muốn đặt một phòng.", category: "Service" },
      { id: "v16_10_s", word: "der Parkplatz (số ít)", ipa: "/ˈpaʁkˌplat͡s/", meaning: "Bãi đỗ xe", example: "Gibt es hier einen Parkplatz?", exampleTranslation: "Ở đây có bãi đỗ xe không?", category: "Service" },
      { id: "v16_10_p", word: "die Parkplätze (số nhiều)", ipa: "/ˈpaʁkˌplɛt͡sə/", meaning: "Các bãi đỗ xe", example: "Das Hotel verfügt über viele Parkplätze.", exampleTranslation: "Khách sạn có nhiều bãi đỗ xe.", category: "Service" },
      { id: "v16_11_s", word: "die Sauna (số ít)", ipa: "/ˈzaʊ̯na/", meaning: "Phòng xông hơi", example: "Das Hotel hat eine kleine Sauna.", exampleTranslation: "Khách sạn có một phòng xông hơi nhỏ.", category: "Service" },
      { id: "v16_11_p", word: "die Saunen (số nhiều)", ipa: "/ˈzaʊ̯nən/", meaning: "Các phòng xông hơi", example: "Manche Hotels bieten mehrere Saunen an.", exampleTranslation: "Một số khách sạn cung cấp nhiều phòng xông hơi.", category: "Service" },
      { id: "v16_12_s", word: "das Schwimmbad (số ít)", ipa: "/ˈʃvɪmˌbaːt/", meaning: "Bể bơi", example: "Wie lange ist das Schwimmbad geöffnet?", exampleTranslation: "Bể bơi mở cửa đến mấy giờ?", category: "Service" },
      { id: "v16_12_p", word: "die Schwimmbäder (số nhiều)", ipa: "/ˈʃvɪmˌbɛːdɐ/", meaning: "Các bể bơi", example: "Es gibt sowohl ein Innen- als auch ein Außenschwimmbad.", exampleTranslation: "Có cả bể bơi trong nhà và ngoài trời.", category: "Service" },
      { id: "v16_13_s", word: "die Kreditkarte (số ít)", ipa: "/kʁeˈdiːtˌkaʁtə/", meaning: "Thẻ tín dụng", example: "Kann ich mit Kreditkarte bezahlen?", exampleTranslation: "Tôi có thể trả bằng thẻ tín dụng không?", category: "Service" },
      { id: "v16_13_p", word: "die Kreditkarten (số nhiều)", ipa: "/kʁeˈdiːtˌkaʁtən/", meaning: "Các thẻ tín dụng", example: "Wir akzeptieren alle gängigen Kreditkarten.", exampleTranslation: "Chúng tôi chấp nhận tất cả các thẻ tín dụng phổ biến.", category: "Service" },
      { id: "v16_14_s", word: "der Schlüssel (số ít)", ipa: "/ˈʃlʏsl̩/", meaning: "Chìa khóa", example: "Hier ist Ihr Schlüssel.", exampleTranslation: "Đây là chìa khóa của bạn.", category: "Service" },
      { id: "v16_14_p", word: "die Schlüssel (số nhiều)", ipa: "/ˈʃlʏsl̩/", meaning: "Các chìa khóa", example: "Alle Schlüssel sind nummeriert.", exampleTranslation: "Tất cả các chìa khóa đều được đánh số.", category: "Service" },
      { id: "v16_15", word: "ausfüllen (nguyên thể)", ipa: "/ˈaʊ̯sˌfʏlən/", meaning: "Điền vào (mẫu)", example: "Bitte füllen Sie das Formular aus.", exampleTranslation: "Vui lòng điền vào biểu mẫu này.", category: "Alltag" },
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

      { id: "v17_1_s", word: "die Tankstelle (số ít)", ipa: "/ˈtaŋkˌʃtɛlə/", meaning: "Trạm xăng", example: "Wir müssen an der nächsten Tankstelle halten.", exampleTranslation: "Chúng ta phải dừng ở trạm xăng tiếp theo.", category: "Verkehrsmittel & Straße" },
      { id: "v17_1_p", word: "die Tankstellen (số nhiều)", ipa: "/ˌtaŋkˈʃtɛlən/", meaning: "Các trạm xăng", example: "Es gibt viele Tankstellen entlang der Autobahn.", exampleTranslation: "Có nhiều trạm xăng dọc đường cao tốc.", category: "Verkehrsmittel & Straße" },
      { id: "v17_2_s", word: "die Panne (số ít)", ipa: "/ˈpanə/", meaning: "Sự cố, hỏng hóc", example: "Wir haben eine Panne auf der Autobahn.", exampleTranslation: "Chúng tôi gặp sự cố trên đường cao tốc.", category: "Verkehrsmittel & Straße" },
      { id: "v17_2_p", word: "die Pannen (số nhiều)", ipa: "/ˈpanən/", meaning: "Các sự cố, hỏng hóc", example: "Unerwartete Pannen können eine Reise ruinieren.", exampleTranslation: "Những sự cố bất ngờ có thể phá hỏng một chuyến đi.", category: "Verkehrsmittel & Straße" },
      { id: "v17_3_s", word: "die Ampel (số ít)", ipa: "/ˈampəl/", meaning: "Đèn giao thông", example: "Du musst an der Ampel warten.", exampleTranslation: "Bạn phải đợi ở đèn giao thông.", category: "Verkehrsmittel & Straße" },
      { id: "v17_3_p", word: "die Ampeln (số nhiều)", ipa: "/ˈampəln/", meaning: "Các đèn giao thông", example: "Viele Ampeln in der Stadt sind ausgefallen.", exampleTranslation: "Nhiều đèn giao thông trong thành phố đã hỏng.", category: "Verkehrsmittel & Straße" },
      { id: "v17_4_s", word: "die Autobahn (số ít)", ipa: "/ˈaʊ̯toˌbaːn/", meaning: "Đường cao tốc", example: "Auf der Autobahn darf man schnell fahren.", exampleTranslation: "Người ta được lái xe nhanh trên cao tốc.", category: "Verkehrsmittel & Straße" },
      { id: "v17_4_p", word: "die Autobahnen (số nhiều)", ipa: "/ˌaʊ̯toˈbaːnən/", meaning: "Các đường cao tốc", example: "Es gibt viele Autobahnen, die Städte verbinden.", exampleTranslation: "Có nhiều đường cao tốc nối các thành phố.", category: "Verkehrsmittel & Straße" },
      { id: "v17_5_s", word: "die Grenze (số ít)", ipa: "/ˈɡʁɛnt͡sə/", meaning: "Biên giới", example: "An der Grenze zu Österreich stehen wir im Stau.", exampleTranslation: "Ở biên giới qua Áo, chúng tôi đang bị tắc đường.", category: "Verkehrsmittel & Straße" },
      { id: "v17_5_p", word: "die Grenzen (số nhiều)", ipa: "/ˈɡʁɛnt͡sən/", meaning: "Các biên giới", example: "Europäische Länder haben offene Grenzen.", exampleTranslation: "Các nước châu Âu có biên giới mở.", category: "Verkehrsmittel & Straße" },
      { id: "v17_6_s", word: "die Fähre (số ít)", ipa: "/ˈfɛːʁə/", meaning: "Phà", example: "Wir fahren mit der Fähre über den Fluss.", exampleTranslation: "Chúng tôi đi phà qua sông.", category: "Verkehrsmittel & Straße" },
      { id: "v17_6_p", word: "die Fähren (số nhiều)", ipa: "/ˈfɛːʁən/", meaning: "Các phà", example: "Die Fähren zwischen den Inseln fahren regelmäßig.", exampleTranslation: "Các phà giữa các đảo chạy thường xuyên.", category: "Verkehrsmittel & Straße" },
      { id: "v17_7_s", word: "der Motor (số ít)", ipa: "/ˈmoːtoːɐ/", meaning: "Động cơ", example: "Der Motor ist kaputtgegangen.", exampleTranslation: "Động cơ đã bị hỏng.", category: "Verkehrsmittel & Straße" },
      { id: "v17_7_p", word: "die Motoren (số nhiều)", ipa: "/moˈtoːʁən/", meaning: "Các động cơ", example: "In diesem Geschäft werden Motoren repariert.", exampleTranslation: "Tại cửa hàng này, các động cơ được sửa chữa.", category: "Verkehrsmittel & Straße" },
      { id: "v17_8_s", word: "das Autoradio (số ít)", ipa: "/ˈaʊ̯toˌʁaːdio/", meaning: "Đài trên ô tô", example: "Mach das Autoradio an!", exampleTranslation: "Hãy bật đài ô tô lên!", category: "Verkehrsmittel & Straße" },
      { id: "v17_8_p", word: "die Autoradios (số nhiều)", ipa: "/ˌaʊ̯toˈʁaːdios/", meaning: "Các đài trên ô tô", example: "Moderne Autoradios bieten viele Funktionen.", exampleTranslation: "Đài ô tô hiện đại cung cấp nhiều chức năng.", category: "Verkehrsmittel & Straße" },
      { id: "v17_9_s", word: "der Reifen (số ít)", ipa: "/ˈʁaɪ̯fən/", meaning: "Lốp xe", example: "Ein Reifen ist platt.", exampleTranslation: "Một chiếc lốp bị xịt.", category: "Verkehrsmittel & Straße" },
      { id: "v17_9_p", word: "die Reifen (số nhiều)", ipa: "/ˈʁaɪ̯fən/", meaning: "Các lốp xe", example: "Wir müssen die Winterreifen wechseln.", exampleTranslation: "Chúng ta phải đổi lốp xe mùa đông.", category: "Verkehrsmittel & Straße" },
      { id: "v17_10_s", word: "die Abfahrt (số ít)", ipa: "/ˈapˌfaːɐ̯t/", meaning: "Sự khởi hành", example: "Die Abfahrt ist früh am Morgen.", exampleTranslation: "Khởi hành vào sáng sớm.", category: "Verkehrsmittel & Straße" },
      { id: "v17_10_p", word: "die Abfahrten (số nhiều)", ipa: "/ˈapˌfaːɐ̯tən/", meaning: "Các sự khởi hành", example: "Alle Abfahrten wurden wegen des Schnees verschoben.", exampleTranslation: "Tất cả các chuyến khởi hành đã bị hoãn do tuyết.", category: "Verkehrsmittel & Straße" },
      { id: "v17_11_s", word: "die Ankunft (số ít)", ipa: "/ˈanˌkʊnft/", meaning: "Sự đến nơi", example: "Kurz nach der Ankunft waren wir im Hotel.", exampleTranslation: "Ngay sau khi đến nơi, chúng tôi đã ở khách sạn.", category: "Verkehrsmittel & Straße" },
      { id: "v17_11_p", word: "die Ankünfte (số nhiều)", ipa: "/ˈanˌkʏnftə/", meaning: "Các sự đến nơi", example: "Die Ankünfte der Züge werden auf der Tafel angezeigt.", exampleTranslation: "Các chuyến tàu đến được hiển thị trên bảng.", category: "Verkehrsmittel & Straße" },
      { id: "v17_12_s", word: "das Meer (số ít)", ipa: "/meːɐ̯/", meaning: "Biển", example: "Wir fahren jedes Jahr ans Meer.", exampleTranslation: "Chúng tôi đi ra biển mỗi năm.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_12_p", word: "die Meere (số nhiều)", ipa: "/ˈmeːʁə/", meaning: "Các biển", example: "Die Weltmeere sind voller Leben.", exampleTranslation: "Các biển trên thế giới tràn đầy sự sống.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_13_s", word: "die Küste (số ít)", ipa: "/ˈkʏstə/", meaning: "Bờ biển", example: "Wir machen Urlaub an der Küste.", exampleTranslation: "Chúng tôi nghỉ dưỡng ở bờ biển.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_13_p", word: "die Küsten (số nhiều)", ipa: "/ˈkʏstən/", meaning: "Các bờ biển", example: "Die Küsten Europas sind vielfältig.", exampleTranslation: "Các bờ biển châu Âu rất đa dạng.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_14_s", word: "der Strand (số ít)", ipa: "/ʃtʁant/", meaning: "Bãi cát", example: "Ich liege gern am Strand.", exampleTranslation: "Tôi thích nằm ở bãi biển.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_14_p", word: "die Strände (số nhiều)", ipa: "/ˈʃtʁɛndə/", meaning: "Các bãi cát", example: "Die Strände sind im Sommer voller Menschen.", exampleTranslation: "Các bãi biển vào mùa hè đầy người.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_15_s", word: "die Insel (số ít)", ipa: "/ˈɪnzəl/", meaning: "Hòn đảo", example: "Wir übernachten auf einer Insel.", exampleTranslation: "Chúng tôi qua đêm trên một hòn đảo.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_15_p", word: "die Inseln (số nhiều)", ipa: "/ˈɪnzəln/", meaning: "Các hòn đảo", example: "Griechenland hat viele schöne Inseln.", exampleTranslation: "Hy Lạp có nhiều hòn đảo đẹp.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_16_s", word: "das Gebirge (số ít)", ipa: "/ɡəˈbɪʁɡə/", meaning: "Dãy núi", example: "Sie wandern gern im Gebirge.", exampleTranslation: "Họ thích đi bộ trong dãy núi.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_16_p", word: "die Berge (số nhiều)", ipa: "/ˈbɛʁɡə/", meaning: "Các ngọn núi", example: "Die Berge sind im Winter mit Schnee bedeckt.", exampleTranslation: "Các ngọn núi được phủ tuyết vào mùa đông.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_17_s", word: "der Wald (số ít)", ipa: "/valt/", meaning: "Rừng", example: "Wir gehen im Wald spazieren.", exampleTranslation: "Chúng tôi đi bộ trong rừng.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_17_p", word: "die Wälder (số nhiều)", ipa: "/ˈvɛldɐ/", meaning: "Các khu rừng", example: "Deutschlands Wälder sind wichtig für die Umwelt.", exampleTranslation: "Các khu rừng của Đức quan trọng cho môi trường.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_18_s", word: "die Wüste (số ít)", ipa: "/ˈvyːstə/", meaning: "Sa mạc", example: "In der Wüste ist es sehr heiß.", exampleTranslation: "Trong sa mạc trời rất nóng.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_18_p", word: "die Wüsten (số nhiều)", ipa: "/ˈvyːstən/", meaning: "Các sa mạc", example: "Die größten Wüsten der Welt sind beeindruckend.", exampleTranslation: "Các sa mạc lớn nhất thế giới thật ấn tượng.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_19_s", word: "das Zelt (số ít)", ipa: "/t͡sɛlt/", meaning: "Lều", example: "Wir haben ein Zelt gekauft.", exampleTranslation: "Chúng tôi đã mua một cái lều.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_19_p", word: "die Zelte (số nhiều)", ipa: "/ˈt͡sɛltə/", meaning: "Các lều", example: "Auf dem Campingplatz stehen viele Zelte.", exampleTranslation: "Trong khu cắm trại có nhiều lều.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_20_s", word: "die Wiese (số ít)", ipa: "/ˈviːzə/", meaning: "Đồng cỏ", example: "Wir zelten auf einer großen Wiese.", exampleTranslation: "Chúng tôi cắm trại trên một đồng cỏ lớn.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_20_p", word: "die Wiesen (số nhiều)", ipa: "/ˈviːzən/", meaning: "Các đồng cỏ", example: "Im Frühling blühen viele Blumen auf den Wiesen.", exampleTranslation: "Vào mùa xuân, nhiều hoa nở trên các đồng cỏ.", category: "Landschaften & Urlaubsorte" },
      { id: "v17_21", word: "der Süden (số ít)", ipa: "/ˈzyːdən/", meaning: "Hướng Nam", example: "Die Vögel fliegen in den Süden.", exampleTranslation: "Chim bay về hướng Nam.", category: "Himmelsrichtungen" },
      { id: "v17_22", word: "müde", ipa: "/ˈmyːdə/", meaning: "Mệt mỏi", example: "Nach der Fahrt war ich total müde.", exampleTranslation: "Sau chuyến đi, tôi cực kỳ mệt mỏi.", category: "Adjektive & Verben" },
      { id: "v17_23", word: "munter", ipa: "/ˈmʊntɐ/", meaning: "Tỉnh táo / Vui vẻ", example: "Am Morgen bin ich wieder munter.", exampleTranslation: "Buổi sáng tôi lại tỉnh táo.", category: "Adjektive & Verben" },
      { id: "v17_24", word: "optimistisch", ipa: "/ɔptiˈmɪstɪʃ/", meaning: "Lạc quan", example: "Er bleibt immer optimistisch.", exampleTranslation: "Anh ấy luôn lạc quan.", category: "Adjektive & Verben" },
      { id: "v17_25", word: "komisch", ipa: "/ˈkoːmɪʃ/", meaning: "Kỳ lạ", example: "Das ist aber eine komische Geschichte.", exampleTranslation: "Đấy quả là một câu chuyện kỳ lạ.", category: "Adjektive & Verben" },
      { id: "v17_26", word: "sich ausruhen (nguyên thể)", ipa: "/ˈaʊ̯sˌʁuːən/", meaning: "Nghỉ ngơi", example: "Wir müssen uns ein bisschen ausruhen.", exampleTranslation: "Chúng ta cần nghỉ ngơi một chút.", category: "Adjektive & Verben" },
      { id: "v17_27", word: "einschlafen (nguyên thể)", ipa: "/ˈaɪ̯nˌʃlaːfən/", meaning: "Ngủ thiếp đi", example: "Ich bin sofort eingeschlafen.", exampleTranslation: "Tôi đã ngủ thiếp đi ngay lập tức.", category: "Adjektive & Verben" }
    
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

      { id: "v18_1_s", word: "die Sonne (số ít)", ipa: "/ˈzɔnə/", meaning: "Mặt trời", example: "Die Sonne scheint.", exampleTranslation: "Mặt trời đang chiếu sáng.", category: "Wetter" },
      { id: "v18_1_p", word: "die Sonnen (số nhiều)", ipa: "/ˈzɔnən/", meaning: "Các mặt trời", example: "Die Sonnen auf anderen Planeten sind sehr unterschiedlich.", exampleTranslation: "Các mặt trời trên các hành tinh khác rất khác nhau.", category: "Wetter" },
      { id: "v18_2_s", word: "der Regen (số ít)", ipa: "/ˈʁeːɡən/", meaning: "Mưa", example: "Wir bleiben bei dem Regen zu Hause.", exampleTranslation: "Chúng tôi ở nhà khi trời mưa.", category: "Wetter" },
      { id: "v18_2_p", word: "die Regen (số nhiều)", ipa: "/ˈʁeːɡən/", meaning: "Những cơn mưa", example: "Die starken Regen führten zu Überschwemmungen.", exampleTranslation: "Những cơn mưa lớn đã gây ra lũ lụt.", category: "Wetter" },
      { id: "v18_3", word: "der Schnee", ipa: "/ʃneː/", meaning: "Tuyết", example: "Im Winter gibt es viel Schnee.", exampleTranslation: "Vào mùa đông có rất nhiều tuyết.", category: "Wetter" },
      { id: "v18_4_s", word: "der Wind (số ít)", ipa: "/vɪnt/", meaning: "Gió", example: "Der Wind ist heute sehr stark.", exampleTranslation: "Gió hôm nay rất mạnh.", category: "Wetter" },
      { id: "v18_4_p", word: "die Winde (số nhiều)", ipa: "/ˈvɪndə/", meaning: "Những cơn gió", example: "Die Winde bliesen stark über das Meer.", exampleTranslation: "Những cơn gió thổi mạnh trên biển.", category: "Wetter" },
      { id: "v18_5_s", word: "der Nebel (số ít)", ipa: "/ˈneːbl̩/", meaning: "Sương mù", example: "Bei Nebel muss man langsam fahren.", exampleTranslation: "Khi có sương mù, người ta phải lái xe chậm.", category: "Wetter" },
      { id: "v18_5_p", word: "die Nebel (số nhiều)", ipa: "/ˈneːbl̩/", meaning: "Những lớp sương mù", example: "Am Morgen gab es mehrere dichte Nebel.", exampleTranslation: "Sáng sớm có nhiều lớp sương mù dày đặc.", category: "Wetter" },
      { id: "v18_6_s", word: "das Gewitter (số ít)", ipa: "/ɡəˈvɪtɐ/", meaning: "Dông bão", example: "Ich habe Angst vor dem Gewitter.", exampleTranslation: "Tôi sợ dông bão.", category: "Wetter" },
      { id: "v18_6_p", word: "die Gewitter (số nhiều)", ipa: "/ɡəˈvɪtɐ/", meaning: "Những trận dông bão", example: "In den Bergen gibt es oft heftige Gewitter.", exampleTranslation: "Ở vùng núi thường có những trận dông bão dữ dội.", category: "Wetter" },
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
      { id: "v18_17_s", word: "das Handtuch (số ít)", ipa: "/ˈhantˌtuːχ/", meaning: "Khăn tắm", example: "Ich brauche ein Handtuch.", exampleTranslation: "Tôi cần một cái khăn tắm.", category: "Urlaub & Strand" },
      { id: "v18_17_p", word: "die Handtücher (số nhiều)", ipa: "/ˈhantˌtyçɐ/", meaning: "Những chiếc khăn tắm", example: "Bitte legen Sie die Handtücher in den Korb.", exampleTranslation: "Vui lòng đặt những chiếc khăn tắm vào giỏ.", category: "Urlaub & Strand" },
      { id: "v18_18_s", word: "die Badehose (số ít)", ipa: "/ˈbaːdəˌhoːzə/", meaning: "Quần bơi", example: "Wo ist meine Badehose?", exampleTranslation: "Quần bơi của tôi ở đâu?", category: "Urlaub & Strand" },
      { id: "v18_18_p", word: "die Badehosen (số nhiều)", ipa: "/ˈbaːdəˌhoːzn̩/", meaning: "Những chiếc quần bơi", example: "Sie hat drei neue Badehosen gekauft.", exampleTranslation: "Cô ấy đã mua ba chiếc quần bơi mới.", category: "Urlaub & Strand" },
      { id: "v18_19", word: "die Sonnencreme", ipa: "/ˈzɔnənˌkʁeːm/", meaning: "Kem chống nắng", example: "Vergiss die Sonnencreme nicht!", exampleTranslation: "Đừng quên kem chống nắng!", category: "Urlaub & Strand" },
      { id: "v18_20_s", word: "der Golfplatz (số ít)", ipa: "/ˈɡɔlfˌplat͡s/", meaning: "Sân golf", example: "Er spielt auf dem Golfplatz.", exampleTranslation: "Anh ấy chơi ở sân golf.", category: "Orte & Wegbeschreibung" },
      { id: "v18_20_p", word: "die Golfplätze (số nhiều)", ipa: "/ˈɡɔlfˌplɛt͡sə/", meaning: "Các sân golf", example: "Es gibt mehrere Golfplätze in dieser Region.", exampleTranslation: "Có một số sân golf trong khu vực này.", category: "Orte & Wegbeschreibung" },
      { id: "v18_21_s", word: "der Parkplatz (số ít)", ipa: "/ˈpaʁkˌplat͡s/", meaning: "Bãi đỗ xe", example: "Gibt es hier einen Parkplatz?", exampleTranslation: "Ở đây có bãi đỗ xe không?", category: "Orte & Wegbeschreibung" },
      { id: "v18_21_p", word: "die Parkplätze (số nhiều)", ipa: "/ˈpaʁkˌplɛt͡sə/", meaning: "Các bãi đỗ xe", example: "Alle Parkplätze sind besetzt.", exampleTranslation: "Tất cả các bãi đỗ xe đều đã đầy.", category: "Orte & Wegbeschreibung" },
      { id: "v18_22_s", word: "das Freizeitland (số ít)", ipa: "/ˈfʁaɪ̯t͡saɪ̯tˌlant/", meaning: "Khu vui chơi / công viên giải trí", example: "Die Kinder wollen ins Freizeitland.", exampleTranslation: "Bọn trẻ muốn đến công viên giải trí.", category: "Orte & Wegbeschreibung" },
      { id: "v18_22_p", word: "die Freizeitländer (số nhiều)", ipa: "/ˈfʁaɪ̯t͡saɪ̯tˌlɛndɐ/", meaning: "Các khu vui chơi / công viên giải trí", example: "Es gibt viele schöne Freizeitländer in Deutschland.", exampleTranslation: "Có nhiều khu vui chơi giải trí đẹp ở Đức.", category: "Orte & Wegbeschreibung" },
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

  { id: "v19_1_s", word: "das Publikum (số ít)", ipa: "/ˈpuːblikʊm/", meaning: "Khán giả, công chúng", example: "Das Publikum war begeistert.", exampleTranslation: "Khán giả rất hào hứng.", category: "Kultur" },
  { id: "v19_1_p", word: "die Publika (số nhiều)", ipa: "/ˈpuːblika/", meaning: "Khán giả, công chúng", example: "Die Publika waren begeistert.", exampleTranslation: "Các khán giả rất hào hứng.", category: "Kultur" },
  { id: "v19_2_s", word: "die Sendung (số ít)", ipa: "/ˈzɛndʊŋ/", meaning: "Chương trình (máy thu thanh, truyền hình)", example: "Die Sendung beginnt um 20 Uhr.", exampleTranslation: "Chương trình bắt đầu lúc 20 giờ.", category: "Medien" },
  { id: "v19_2_p", word: "die Sendungen (số nhiều)", ipa: "/ˈzɛndʊŋən/", meaning: "Chương trình (máy thu thanh, truyền hình)", example: "Die Sendungen beginnen um 20 Uhr.", exampleTranslation: "Các chương trình bắt đầu lúc 20 giờ.", category: "Medien" },
  { id: "v19_3_s", word: "der Spielfilm (số ít)", ipa: "/ˈʃpiːlˌfɪlm/", meaning: "Phim truyện", example: "Wir schauen einen Spielfilm.", exampleTranslation: "Chúng tôi xem một bộ phim truyện.", category: "Medien" },
  { id: "v19_3_p", word: "die Spielfilme (số nhiều)", ipa: "/ˈʃpiːlˌfɪlmə/", meaning: "Phim truyện", example: "Wir schauen viele Spielfilme.", exampleTranslation: "Chúng tôi xem nhiều bộ phim truyện.", category: "Medien" },
  { id: "v19_4_s", word: "die Ausstellung (số ít)", ipa: "/ˈaʊ̯sˌʃtɛlʊŋ/", meaning: "Cuộc triển lãm", example: "Wir gehen in die Ausstellung.", exampleTranslation: "Chúng tôi đi xem triển lãm.", category: "Kultur" },
  { id: "v19_4_p", word: "die Ausstellungen (số nhiều)", ipa: "/ˈaʊ̯sˌʃtɛlʊŋən/", meaning: "Cuộc triển lãm", example: "Wir gehen in viele Ausstellungen.", exampleTranslation: "Chúng tôi đi xem nhiều triển lãm.", category: "Kultur" },
  { id: "v19_5_s", word: "die Vorstellung (số ít)", ipa: "/ˈfoːɐ̯ˌʃtɛlʊŋ/", meaning: "Buổi biểu diễn", example: "Die Vorstellung war ausgezeichnet.", exampleTranslation: "Buổi biểu diễn rất xuất sắc.", category: "Kultur" },
  { id: "v19_5_p", word: "die Vorstellungen (số nhiều)", ipa: "/ˈfoːɐ̯ˌʃtɛlʊŋən/", meaning: "Buổi biểu diễn", example: "Die Vorstellungen waren ausgezeichnet.", exampleTranslation: "Các buổi biểu diễn rất xuất sắc.", category: "Kultur" },
  { id: "v19_6_s", word: "die Eröffnung (số ít)", ipa: "/ɛɐ̯ˈʔœfnʊŋ/", meaning: "Sự khai mạc, khai trương", example: "Zur Eröffnung gab es Sekt.", exampleTranslation: "Có rượu champagne tại lễ khai mạc.", category: "Kultur" },
  { id: "v19_6_p", word: "die Eröffnungen (số nhiều)", ipa: "/ɛɐ̯ˈʔœfnʊŋən/", meaning: "Sự khai mạc, khai trương", example: "Zu den Eröffnungen gab es Sekt.", exampleTranslation: "Có rượu champagne tại các lễ khai mạc.", category: "Kultur" },
  { id: "v19_7_s", word: "der Spaziergang (số ít)", ipa: "/ʃpaˈt͡siːɐ̯ˌɡaŋ/", meaning: "Cuộc đi dạo", example: "Wir machen einen Spaziergang.", exampleTranslation: "Chúng tôi đang đi dạo.", category: "Freizeit" },
  { id: "v19_7_p", word: "die Spaziergänge (số nhiều)", ipa: "/ʃpaˈt͡siːɐ̯ˌɡɛŋə/", meaning: "Cuộc đi dạo", example: "Wir machen viele Spaziergänge.", exampleTranslation: "Chúng tôi đang đi dạo nhiều lần.", category: "Freizeit" },
  { id: "v19_8_s", word: "der Club (số ít)", ipa: "/klʊp/", meaning: "Câu lạc bộ", example: "Sie gehen am Wochenende in den Club.", exampleTranslation: "Họ đi đến câu lạc bộ vào cuối tuần.", category: "Freizeit" },
  { id: "v19_8_p", word: "die Clubs (số nhiều)", ipa: "/klʊps/", meaning: "Câu lạc bộ", example: "Sie gehen am Wochenende in verschiedene Clubs.", exampleTranslation: "Họ đi đến các câu lạc bộ khác nhau vào cuối tuần.", category: "Freizeit" },
  { id: "v19_9_s", word: "die Kultur (số ít)", ipa: "/kʊlˈtuːɐ̯/", meaning: "Văn hóa", example: "Er interessiert sich für Kultur.", exampleTranslation: "Anh ấy quan tâm đến văn hóa.", category: "Kultur" },
  { id: "v19_9_p", word: "die Kulturen (số nhiều)", ipa: "/kʊlˈtuːʁən/", meaning: "Văn hóa", example: "Er interessiert sich für verschiedene Kulturen.", exampleTranslation: "Anh ấy quan tâm đến các nền văn hóa khác nhau.", category: "Kultur" },
  { id: "v19_10_s", word: "der Beginn (số ít)", ipa: "/beˈɡɪn/", meaning: "Sự bắt đầu", example: "Der Beginn ist um 19 Uhr.", exampleTranslation: "Bắt đầu lúc 19 giờ.", category: "Allgemein" },
  { id: "v19_10_p", word: "die Beginne (số nhiều)", ipa: "/beˈɡɪnə/", meaning: "Sự bắt đầu", example: "Die Beginne sind um 19 Uhr.", exampleTranslation: "Các lần bắt đầu đều lúc 19 giờ.", category: "Allgemein" },
  { id: "v19_11", word: "ausgezeichnet", ipa: "/ˈaʊ̯sɡəˈt͡saɪ̯çnət/", meaning: "Xuất sắc, tuyệt vời", example: "Das Essen war ausgezeichnet.", exampleTranslation: "Thức ăn rất tuyệt vời.", category: "Adjektiv" },
  { id: "v19_12", word: "beliebt", ipa: "/bəˈliːpt/", meaning: "Được yêu thích / Phổ biến", example: "Das Restaurant ist sehr beliebt.", exampleTranslation: "Nhà hàng này rất được yêu thích.", category: "Adjektiv" },
  { id: "v19_13", word: "klassisch", ipa: "/ˈklasɪʃ/", meaning: "Cổ điển", example: "Ich mag klassische Musik.", exampleTranslation: "Tôi thích nhạc cổ điển.", category: "Adjektiv" },
  { id: "v19_14", word: "kostenlos / gratis", ipa: "/ˈkɔstn̩ˌloːs/", meaning: "Miễn phí", example: "Der Eintritt ist kostenlos.", exampleTranslation: "Vào cửa miễn phí.", category: "Adjektiv" },
  { id: "v19_15", word: "kulturell", ipa: "/kʊltuˈʁɛl/", meaning: "Thuộc về văn hóa", example: "Wir nehmen an einem kulturellen Event teil.", exampleTranslation: "Chúng tôi tham gia một sự kiện văn hóa.", category: "Adjektiv" },
  { id: "v19_16", word: "negativ", ipa: "/ˈneːɡatiːf/", meaning: "Tiêu cực", example: "Sei nicht so negativ!", exampleTranslation: "Đừng có tỏ ra tiêu cực như vậy!", category: "Adjektiv" },
  { id: "v19_17", word: "positiv", ipa: "/ˈpoːzitiːf/", meaning: "Tích cực", example: "Er hat eine positive Einstellung.", exampleTranslation: "Anh ấy có một thái độ tích cực.", category: "Adjektiv" },
  { id: "v19_18", word: "neugierig", ipa: "/ˈnɔɪ̯ˌɡiːʁɪç/", meaning: "Tò mò", example: "Bist du gar nicht neugierig?", exampleTranslation: "Bạn không tò mò chút nào sao?", category: "Adjektiv" },
  { id: "v19_19", word: "wahr", ipa: "/vaːɐ̯/", meaning: "Đúng, có thật", example: "Das ist wahr.", exampleTranslation: "Điều đó là sự thật.", category: "Adjektiv" },
  { id: "v19_20", word: "eröffnen (nguyên thể)", ipa: "/ɛɐ̯ˈʔœfnən/", meaning: "Mở cửa, khai trương", example: "Ein neues Café wird eröffnet.", exampleTranslation: "Một quán cà phê mới đang được khai trương.", category: "Verb" },
  { id: "v19_21", word: "verlängern (nguyên thể)", ipa: "/fɛɐ̯ˈlɛŋɐn/", meaning: "Kéo dài, gia hạn", example: "Die Ausstellung wird verlängert.", exampleTranslation: "Buổi triển lãm được kéo dài.", category: "Verb" },
  { id: "v19_22", word: "verpassen (nguyên thể)", ipa: "/fɛɐ̯ˈpasn̩/", meaning: "Bỏ lỡ", example: "Du solltest diesen Film nicht verpassen.", exampleTranslation: "Bạn không nên bỏ lỡ bộ phim này.", category: "Verb" },
  { id: "v19_23", word: "recht haben (nguyên thể)", ipa: "/ʁɛçt ˈhaːbən/", meaning: "Có lý, đúng", example: "Du hast recht.", exampleTranslation: "Bạn nói đúng.", category: "Verb" },
  { id: "v19_24", word: "unternehmen (nguyên thể)", ipa: "/ˌʊntɐˈneːmən/", meaning: "Thực hiện (một hoạt động)", example: "Wollen wir heute Abend etwas unternehmen?", exampleTranslation: "Tối nay chúng ta có muốn làm gì đó không?", category: "Verb" },
  { id: "v19_25", word: "versuchen (nguyên thể)", ipa: "/fɛɐ̯ˈzuːxn̩/", meaning: "Thử, cố gắng", example: "Versuch das doch mal.", exampleTranslation: "Hãy thử xem sao.", category: "Verb" },
  { id: "v19_26", word: "weggehen (nguyên thể)", ipa: "/ˈvɛkˌɡeːən/", meaning: "Đi ra ngoài chơi, rời đi", example: "Wir wollen am Wochenende weggehen.", exampleTranslation: "Chúng tôi muốn ra ngoài đi chơi vào cuối tuần.", category: "Verb" },
  { id: "v19_27", word: "überzeugen (nguyên thể)", ipa: "/ˌyːbɐˈt͡sɔɪ̯ɡən/", meaning: "Thuyết phục", example: "Ich versuche, ihn zu überzeugen.", exampleTranslation: "Tôi đang cố gắng thuyết phục anh ấy.", category: "Verb" },
  { id: "v19_28", word: "sich lohnen (nguyên thể)", ipa: "/zɪç ˈloːnən/", meaning: "Đáng giá, bõ công", example: "Das lohnt sich bestimmt.", exampleTranslation: "Chắc chắn là bõ công đó.", category: "Verb" },
  { id: "v19_29", word: "probieren (nguyên thể)", ipa: "/pʁoˈbiːʁən/", meaning: "Thử nghiệm, nếm", example: "Probier mal!", exampleTranslation: "Hãy thử đi!", category: "Verb" }

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

      {
        id: "v20_1_s",
        word: "der Comic (số ít)",
        ipa: "/ˈkɔmɪk/",
        meaning: "Truyện tranh",
        example: "Ich lese gern einen Comic.",
        exampleTranslation: "Tôi thích đọc một cuốn truyện tranh.",
        category: "Medien"
      },
      {
        id: "v20_1_p",
        word: "die Comics (số nhiều)",
        ipa: "/ˈkɔmɪks/",
        meaning: "Truyện tranh",
        example: "Ich lese gern Comics.",
        exampleTranslation: "Tôi thích đọc truyện tranh.",
        category: "Medien"
      },
      {
        id: "v20_2_s",
        word: "das Märchen (số ít)",
        ipa: "/ˈmɛːɐ̯çən/",
        meaning: "Truyện cổ tích",
        example: "Meine Oma hat mir früher ein Märchen erzählt.",
        exampleTranslation: "Bà tôi ngày xưa đã kể cho tôi nghe một câu chuyện cổ tích.",
        category: "Medien"
      },
      {
        id: "v20_2_p",
        word: "die Märchen (số nhiều)",
        ipa: "/ˈmɛːɐ̯çən/",
        meaning: "Truyện cổ tích",
        example: "Meine Oma hat mir früher Märchen erzählt.",
        exampleTranslation: "Bà tôi ngày xưa đã kể cho tôi nghe những câu chuyện cổ tích.",
        category: "Medien"
      },
      {
        id: "v20_3_s",
        word: "das Bilderbuch (số ít)",
        ipa: "/ˈbɪldɐˌbuːx/",
        meaning: "Sách tranh",
        example: "Das ist ein schönes Bilderbuch für Kinder.",
        exampleTranslation: "Đây là một cuốn sách tranh đẹp cho trẻ em.",
        category: "Medien"
      },
      {
        id: "v20_3_p",
        word: "die Bilderbücher (số nhiều)",
        ipa: "/ˈbɪldɐˌbyːçɐ/",
        meaning: "Sách tranh",
        example: "Das sind schöne Bilderbücher für Kinder.",
        exampleTranslation: "Đây là những cuốn sách tranh đẹp cho trẻ em.",
        category: "Medien"
      },
      {
        id: "v20_4_s",
        word: "das Sachbuch (số ít)",
        ipa: "/ˈzaxˌbuːx/",
        meaning: "Sách chuyên ngành/thông tin",
        example: "Ich lese gern ein Sachbuch über Geschichte.",
        exampleTranslation: "Tôi thích đọc một cuốn sách chuyên ngành về lịch sử.",
        category: "Medien"
      },
      {
        id: "v20_4_p",
        word: "die Sachbücher (số nhiều)",
        ipa: "/ˈzaxˌbyːçɐ/",
        meaning: "Sách chuyên ngành/thông tin",
        example: "Ich lese gern Sachbücher über Geschichte.",
        exampleTranslation: "Tôi thích đọc sách chuyên ngành về lịch sử.",
        category: "Medien"
      },
      {
        id: "v20_5_s",
        word: "das Hörbuch (số ít)",
        ipa: "/ˈhøːɐ̯ˌbuːx/",
        meaning: "Sách nói",
        example: "Im Auto höre ich oft ein Hörbuch.",
        exampleTranslation: "Trong ô tô tôi thường nghe một cuốn sách nói.",
        category: "Medien"
      },
      {
        id: "v20_5_p",
        word: "die Hörbücher (số nhiều)",
        ipa: "/ˈhøːɐ̯ˌbyːçɐ/",
        meaning: "Sách nói",
        example: "Im Auto höre ich oft Hörbücher.",
        exampleTranslation: "Trong ô tô tôi thường nghe sách nói.",
        category: "Medien"
      },
      {
        id: "v20_6_s",
        word: "der Krimi (số ít)",
        ipa: "/ˈkʁimi/",
        meaning: "Truyện/phim trinh thám",
        example: "Ein Krimi ist sehr spannend.",
        exampleTranslation: "Một bộ truyện/phim trinh thám rất hấp dẫn.",
        category: "Medien"
      },
      {
        id: "v20_6_p",
        word: "die Krimis (số nhiều)",
        ipa: "/ˈkʁimis/",
        meaning: "Truyện/phim trinh thám",
        example: "Krimis sind sehr spannend.",
        exampleTranslation: "Truyện/phim trinh thám rất hấp dẫn.",
        category: "Medien"
      },
      {
        id: "v20_7_s",
        word: "der Roman (số ít)",
        ipa: "/ʁoˈmaːn/",
        meaning: "Tiểu thuyết",
        example: "Sie liest einen dicken Roman.",
        exampleTranslation: "Cô ấy đang đọc một cuốn tiểu thuyết dày.",
        category: "Medien"
      },
      {
        id: "v20_7_p",
        word: "die Romane (số nhiều)",
        ipa: "/ʁoˈmaːnə/",
        meaning: "Tiểu thuyết",
        example: "Sie liest dicke Romane.",
        exampleTranslation: "Cô ấy đang đọc những cuốn tiểu thuyết dày.",
        category: "Medien"
      },
      {
        id: "v20_8_s",
        word: "das Kinderbuch (số ít)",
        ipa: "/ˈkɪndɐˌbuːx/",
        meaning: "Sách trẻ em",
        example: "Das ist ein bekanntes Kinderbuch.",
        exampleTranslation: "Đây là một cuốn sách trẻ em nổi tiếng.",
        category: "Medien"
      },
      {
        id: "v20_8_p",
        word: "die Kinderbücher (số nhiều)",
        ipa: "/ˈkɪndɐˌbyːçɐ/",
        meaning: "Sách trẻ em",
        example: "Das sind bekannte Kinderbücher.",
        exampleTranslation: "Đây là những cuốn sách trẻ em nổi tiếng.",
        category: "Medien"
      },
      {
        id: "v20_9_s",
        word: "der Ratgeber (số ít)",
        ipa: "/ˈʁaːtˌɡeːbɐ/",
        meaning: "Sách hướng dẫn / Cố vấn",
        example: "Ich habe einen Ratgeber über Pflanzen gekauft.",
        exampleTranslation: "Tôi đã mua một cuốn sách hướng dẫn về cây cảnh.",
        category: "Medien"
      },
      {
        id: "v20_9_p",
        word: "die Ratgeber (số nhiều)",
        ipa: "/ˈʁaːtˌɡeːbɐ/",
        meaning: "Sách hướng dẫn / Cố vấn",
        example: "Ich habe Ratgeber über Pflanzen gekauft.",
        exampleTranslation: "Tôi đã mua những cuốn sách hướng dẫn về cây cảnh.",
        category: "Medien"
      },
      {
        id: "v20_10_s",
        word: "das Gedicht (số ít)",
        ipa: "/ɡəˈdɪçt/",
        meaning: "Bài thơ",
        example: "Er hat ein romantisches Gedicht geschrieben.",
        exampleTranslation: "Anh ấy đã viết một bài thơ lãng mạn.",
        category: "Medien"
      },
      {
        id: "v20_10_p",
        word: "die Gedichte (số nhiều)",
        ipa: "/ɡəˈdɪçtə/",
        meaning: "Bài thơ",
        example: "Er hat romantische Gedichte geschrieben.",
        exampleTranslation: "Anh ấy đã viết những bài thơ lãng mạn.",
        category: "Medien"
      },
      {
        id: "v20_11_s",
        word: "die Zeitschrift (số ít)",
        ipa: "/ˈt͡saɪ̯tˌʃʁɪft/",
        meaning: "Tạp chí",
        example: "Liest du gern eine Computerzeitschrift?",
        exampleTranslation: "Bạn có thích đọc một tạp chí máy tính không?",
        category: "Medien"
      },
      {
        id: "v20_11_p",
        word: "die Zeitschriften (số nhiều)",
        ipa: "/ˈt͡saɪ̯tˌʃʁɪftn̩/",
        meaning: "Tạp chí",
        example: "Liest du gern Computerzeitschriften?",
        exampleTranslation: "Bạn có thích đọc tạp chí máy tính không?",
        category: "Medien"
      },
      {
        id: "v20_12_s",
        word: "die Zeitung (số ít)",
        ipa: "/ˈt͡saɪ̯tʊŋ/",
        meaning: "Tờ báo",
        example: "Mein Vater liest jeden Morgen eine Zeitung.",
        exampleTranslation: "Bố tôi đọc một tờ báo mỗi sáng.",
        category: "Medien"
      },
      {
        id: "v20_12_p",
        word: "die Zeitungen (số nhiều)",
        ipa: "/ˈt͡saɪ̯tʊŋən/",
        meaning: "Tờ báo",
        example: "Mein Vater liest jeden Morgen die Zeitungen.",
        exampleTranslation: "Bố tôi đọc những tờ báo mỗi sáng.",
        category: "Medien"
      },
      {
        id: "v20_13",
        word: "die Literatur (số ít)",
        ipa: "/litəʁaˈtuːɐ̯/",
        meaning: "Văn học",
        example: "Er studiert deutsche Literatur.",
        exampleTranslation: "Anh ấy học văn học Đức.",
        category: "Kultur"
      },
      {
        id: "v20_14_s",
        word: "die Geschichte (số ít)",
        ipa: "/ɡəˈʃɪçtə/",
        meaning: "Câu chuyện / Lịch sử",
        example: "Die Geschichte ist sehr lustig.",
        exampleTranslation: "Câu chuyện đó rất vui nhộn.",
        category: "Kultur"
      },
      {
        id: "v20_14_p",
        word: "die Geschichten (số nhiều)",
        ipa: "/ɡəˈʃɪçtn̩/",
        meaning: "Câu chuyện / Lịch sử",
        example: "Die Geschichten sind sehr lustig.",
        exampleTranslation: "Những câu chuyện đó rất vui nhộn.",
        category: "Kultur"
      },
      {
        id: "v20_15_s",
        word: "der Autor (số ít)",
        ipa: "/ˈaʊ̯toːɐ̯/",
        meaning: "Tác giả (nam)",
        example: "Der Autor schreibt spannende Bücher.",
        exampleTranslation: "Tác giả (nam) viết những cuốn sách hấp dẫn.",
        category: "Personen"
      },
      {
        id: "v20_15_p",
        word: "die Autoren (số nhiều)",
        ipa: "/aʊ̯ˈtoːʁən/",
        meaning: "Tác giả (nam)",
        example: "Die Autoren schreiben spannende Bücher.",
        exampleTranslation: "Các tác giả (nam) viết những cuốn sách hấp dẫn.",
        category: "Personen"
      },
      {
        id: "v20_16",
        word: "spannend",
        ipa: "/ˈʃpanənt/",
        meaning: "Hấp dẫn, hồi hộp",
        example: "Der Film war sehr spannend.",
        exampleTranslation: "Bộ phim rất hấp dẫn.",
        category: "Adjektiv"
      },
      {
        id: "v20_17",
        word: "romantisch",
        ipa: "/ʁoˈmantɪʃ/",
        meaning: "Lãng mạn",
        example: "Das ist ein romantisches Buch.",
        exampleTranslation: "Đây là một cuốn sách lãng mạn.",
        category: "Adjektiv"
      },
      {
        id: "v20_18",
        word: "lustig",
        ipa: "/ˈlʊstɪç/",
        meaning: "Vui nhộn, hài hước",
        example: "Der Comic ist total lustig.",
        exampleTranslation: "Cuốn truyện tranh này rất vui nhộn.",
        category: "Adjektiv"
      },
      {
        id: "v20_19",
        word: "interessant",
        ipa: "/ɪntəʁɛˈsant/",
        meaning: "Thú vị",
        example: "Dieses Sachbuch ist sehr interessant.",
        exampleTranslation: "Cuốn sách chuyên ngành này rất thú vị.",
        category: "Adjektiv"
      },
      {
        id: "v20_20",
        word: "traurig",
        ipa: "/ˈtʁaʊ̯ʁɪç/",
        meaning: "Buồn",
        example: "Die Geschichte hat ein trauriges Ende.",
        exampleTranslation: "Câu chuyện có một cái kết buồn.",
        category: "Adjektiv"
      },
      {
        id: "v20_21",
        word: "langweilig",
        ipa: "/ˈlaŋˌvaɪ̯lɪç/",
        meaning: "Nhàm chán",
        example: "Das Buch finde ich ehrlich gesagt langweilig.",
        exampleTranslation: "Thành thật mà nói, tôi thấy cuốn sách đó nhàm chán.",
        category: "Adjektiv"
      },
      {
        id: "v20_22",
        word: "furchtbar",
        ipa: "/ˈfʊʁçtbaːɐ̯/",
        meaning: "Khủng khiếp",
        example: "Das Wetter war furchtbar.",
        exampleTranslation: "Thời tiết thật khủng khiếp.",
        category: "Adjektiv"
      },
      {
        id: "v20_23",
        word: "ehrlich",
        ipa: "/ˈeːɐ̯lɪç/",
        meaning: "Thành thật / trung thực",
        example: "Ehrlich gesagt, habe ich keine Lust.",
        exampleTranslation: "Thành thật mà nói, tôi không có hứng thú.",
        category: "Adjektiv"
      },
      {
        id: "v20_24",
        word: "vorlesen (nguyên thể)",
        ipa: "/ˈfoːɐ̯ˌleːzn̩/",
        meaning: "Đọc to lên (cho ai nghe)",
        example: "Mein Vater hat mir oft Märchen vorgelesen.",
        exampleTranslation: "Bố tôi thường đọc truyện cổ tích cho tôi nghe.",
        category: "Verb"
      },
      {
        id: "v20_25",
        word: "erfahren (nguyên thể)",
        ipa: "/ɛɐ̯ˈfaːʁən/",
        meaning: "Trải nghiệm / biết được",
        example: "Man erfährt viel über die Krankheit.",
        exampleTranslation: "Người ta tìm hiểu được nhiều điều về căn bệnh này.",
        category: "Verb"
      },
      {
        id: "v20_26",
        word: "weinen (nguyên thể)",
        ipa: "/ˈvaɪ̯nən/",
        meaning: "Khóc",
        example: "Bei diesem Text musste ich weinen.",
        exampleTranslation: "Khi đọc đoạn văn này tôi đã phải khóc.",
        category: "Verb"
      },
      {
        id: "v20_27",
        word: "sich beeilen (nguyên thể)",
        ipa: "/bəˈʔaɪ̯lən/",
        meaning: "Vội vàng, khẩn trương",
        example: "Ich musste mich beeilen, weil ich zu spät aufgestanden bin.",
        exampleTranslation: "Tôi phải vội vàng vì tôi đã dậy muộn.",
        category: "Verb"
      },
      {
        id: "v20_28_s",
        word: "das Interesse (số ít)",
        ipa: "/ɪnˈtʁɛsə/",
        meaning: "Sự quan tâm / sở thích",
        example: "Ich habe großes Interesse an Kunst.",
        exampleTranslation: "Tôi có sự quan tâm lớn đến nghệ thuật.",
        category: "Allgemein"
      },
      {
        id: "v20_28_p",
        word: "die Interessen (số nhiều)",
        ipa: "/ɪntəˈʁɛsn̩/",
        meaning: "Sự quan tâm / sở thích",
        example: "Ich habe große Interessen in Kunst und Musik.",
        exampleTranslation: "Tôi có nhiều sở thích lớn trong nghệ thuật và âm nhạc.",
        category: "Allgemein"
      },
      {
        id: "v20_29",
        word: "sich interessieren für (nguyên thể)",
        ipa: "/ɪntəʁɛˈsiːʁən/",
        meaning: "Quan tâm đến cái gì",
        example: "Interessierst du dich für Autos?",
        exampleTranslation: "Bạn có quan tâm đến ô tô không?",
        category: "Verb"
      },
      {
        id: "v20_30",
        word: "überhaupt",
        ipa: "/yːbɐˈhaʊ̯pt/",
        meaning: "Hoàn toàn (không)",
        example: "Das interessiert mich überhaupt nicht.",
        exampleTranslation: "Điều đó hoàn toàn không làm tôi quan tâm.",
        category: "Allgemein"
      }
    
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
