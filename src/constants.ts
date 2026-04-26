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
