export interface VocabularyItem {
  id: string;
  word: string;
  ipa?: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  category?: string;
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

export const VOCABULARY_DATA: Lesson[] = [
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
