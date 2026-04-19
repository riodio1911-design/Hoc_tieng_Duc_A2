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
      // NHÓM 1: TÊN CÁC NGHỀ NGHIỆP (BERUFE)
      { id: "23-1", word: "der Schauspieler (số ít nam)", ipa: "deːɐ̯ ˈʃaʊ̯ˌʃpiːlɐ", meaning: "Nam diễn viên", example: "Ein Schauspieler ist ein Mann, der im Film spielt.", exampleTranslation: "Nam diễn viên là một người đàn ông đóng phim.", category: "Nghề nghiệp" },
      { id: "23-2", word: "die Schauspielerin (số ít nữ)", ipa: "diː ˈʃaʊ̯ˌʃpiːləʁɪn", meaning: "Nữ diễn viên", example: "Sie arbeitet als erfolgreiche Schauspielerin.", exampleTranslation: "Cô ấy làm việc như một nữ diễn viên thành công.", category: "Nghề nghiệp" },
      { id: "23-3", word: "die Schauspieler (số nhiều chung)", ipa: "diː ˈʃaʊ̯ˌʃpiːlɐ", meaning: "Các diễn viên (chung)", example: "Die Schauspieler proben für das neue Stück.", exampleTranslation: "Các diễn viên đang tập dượt cho vở diễn mới.", category: "Nghề nghiệp" },
      { id: "23-4", word: "die Schauspielerinnen (số nhiều nữ)", ipa: "diː ˈʃaʊ̯ˌʃpiːləʁɪnən", meaning: " Các nữ diễn viên", example: "Die Schauspielerinnen trugen wunderschöne Kleider.", exampleTranslation: "Các nữ diễn viên đã mặc những chiếc váy tuyệt đẹp.", category: "Nghề nghiệp" },
      { id: "23-5", word: "der Mechatroniker (số ít nam)", ipa: "deːɐ̯ mɛçaˈtʁoːnɪkɐ", meaning: "Nam thợ cơ điện tử", example: "Der Mechatroniker repariert Maschinen und Autos.", exampleTranslation: "Thợ cơ điện tử sửa chữa máy móc và ô tô.", category: "Nghề nghiệp" },
      { id: "23-6", word: "die Mechatronikerin (số ít nữ)", ipa: "diː mɛçaˈtʁoːnɪkəʁɪn", meaning: "Nữ thợ cơ điện tử", example: "Sie macht eine Ausbildung zur Mechatronikerin.", exampleTranslation: "Cô ấy đang học nghề để trở thành thợ cơ điện tử.", category: "Nghề nghiệp" },
      { id: "23-7", word: "die Mechatroniker (số nhiều chung)", ipa: "diː mɛçaˈtʁoːnɪkɐ", meaning: "Các thợ cơ điện tử", example: "In dieser Fabrik arbeiten viele Mechatroniker.", exampleTranslation: "Trong nhà máy này có nhiều thợ cơ điện tử làm việc.", category: "Nghề nghiệp" },
      { id: "23-8", word: "die Mechatronikerinnen (số nhiều nữ)", ipa: "diː mɛçaˈtʁoːnɪkəʁɪnən", meaning: "Các nữ thợ cơ điện tử", example: "Die Mechatronikerinnen überprüfen das System.", exampleTranslation: "Các nữ thợ cơ điện tử đang kiểm tra lại hệ thống.", category: "Nghề nghiệp" },
      { id: "23-9", word: "die Krankenschwester (số ít nữ)", ipa: "diː ˈkʁaŋkn̩ ˌʃvɛstɐ", meaning: "Nữ điều dưỡng", example: "Eine Krankenschwester pflegt kranke Menschen.", exampleTranslation: "Một nữ điều dưỡng chăm sóc người bệnh.", category: "Nghề nghiệp" },
      { id: "23-10", word: "die Krankenschwestern (số nhiều nữ)", ipa: "diː ˈkʁaŋkn̩ ˌʃvɛstɐn", meaning: "Các nữ điều dưỡng", example: "Die Krankenschwestern auf dieser Station sind sehr nett.", exampleTranslation: "Các nữ điều dưỡng ở trạm này rất tốt bụng.", category: "Nghề nghiệp" },
      { id: "23-11", word: "der Krankenpfleger (số ít nam)", ipa: "deːɐ̯ ˈkʁaŋkn̩ ˌp͡fleːɡɐ", meaning: "Nam điều dưỡng", example: "Der Krankenpfleger kümmert sich um die Patienten.", exampleTranslation: "Nam điều dưỡng đang chăm sóc các bệnh nhân.", category: "Nghề nghiệp" },
      { id: "23-12", word: "der Altenpfleger (số ít nam)", ipa: "deːɐ̯ ˈaltl̩ ˌp͡fleːɡɐ", meaning: "Nam điều dưỡng người già", example: "Mein Bruder arbeitet als Altenpfleger im Seniorenheim.", exampleTranslation: "Anh trai tôi làm điều dưỡng người già tại viện dưỡng lão.", category: "Nghề nghiệp" },
      { id: "23-13", word: "die Altenpflegerin (số ít nữ)", ipa: "diː ˈaltn̩ ˌp͡fleːɡəʁɪn", meaning: "Nữ điều dưỡng người già", example: "Eine Altenpflegerin muss viel Geduld haben.", exampleTranslation: "Một nữ điều dưỡng người già cần phải có nhiều sự kiên nhẫn.", category: "Nghề nghiệp" },
      { id: "23-14", word: "die Altenpfleger (số nhiều chung)", ipa: "diː ˈaltn̩ ˌp͡fleːɡɐ", meaning: "Các điều dưỡng người già", example: "Wir suchen dringend neue Altenpfleger.", exampleTranslation: "Chúng tôi đang cần tìm gấp những điều dưỡng người già mới.", category: "Nghề nghiệp" },
      { id: "23-15", word: "die Altenpflegerinnen (số nhiều nữ)", ipa: "diː ˈaltn̩ ˌp͡fleːɡəʁɪnən", meaning: "Các nữ điều dưỡng người già", example: "Die Altenpflegerinnen organisieren ein Fest.", exampleTranslation: "Các nữ điều dưỡng người già đang tổ chức một bữa tiệc.", category: "Nghề nghiệp" },
      { id: "23-16", word: "der Programmierer (số ít nam)", ipa: "deːɐ̯ pʁoɡʁaˈmiːʁɐ", meaning: "Nam lập trình viên", example: "Ein Programmierer schreibt Software für Computer.", exampleTranslation: "Một lập trình viên viết phần mềm cho máy tính.", category: "Nghề nghiệp" },
      { id: "23-17", word: "die Programmiererin (số ít nữ)", ipa: "diː pʁoɡʁaˈmiːʁəʁɪn", meaning: "Nữ lập trình viên", example: "Sie ist eine sehr talentierte Programmiererin.", exampleTranslation: "Cô ấy là một nữ lập trình viên rất tài năng.", category: "Nghề nghiệp" },
      { id: "23-18", word: "die Programmierer (số nhiều chung)", ipa: "diː pʁoɡʁaˈmiːʁɐ", meaning: "Các lập trình viên", example: "Die Programmierer arbeiten an einer neuen App.", exampleTranslation: "Các lập trình viên đang làm việc trên một ứng dụng mới.", category: "Nghề nghiệp" },
      { id: "23-19", word: "die Programmiererinnen (số nhiều nữ)", ipa: "diː pʁoɡʁaˈmiːʁəʁɪnən", meaning: " Các nữ lập trình viên", example: "Unsere Programmiererinnen leiten das Projekt.", exampleTranslation: "Những nữ lập trình viên của chúng tôi đang dẫn dắt dự án.", category: "Nghề nghiệp" },
      { id: "23-20", word: "der Architekt (số ít nam)", ipa: "deːɐ̯ aʁçiˈtɛkt", meaning: "Nam kiến trúc sư", example: "Der Architekt ist jemand, der Häuser baut.", exampleTranslation: "Kiến trúc sư là người xây dựng những ngôi nhà.", category: "Nghề nghiệp" },
      { id: "23-21", word: "die Architektin (số ít nữ)", ipa: "diː aʁçiˈtɛktɪn", meaning: "Nữ kiến trúc sư", example: "Die Architektin hat dieses Museum entworfen.", exampleTranslation: "Nữ kiến trúc sư đã thiết kế bảo tàng này.", category: "Nghề nghiệp" },
      { id: "23-22", word: "die Architekten (số nhiều chung)", ipa: "diː aʁçiˈtɛktn̩", meaning: "Các kiến trúc sư", example: "Die Architekten präsentieren ihre Pläne.", exampleTranslation: "Các kiến trúc sư đang trình bày kế hoạch của họ.", category: "Nghề nghiệp" },
      { id: "23-23", word: "die Architektinnen (số nhiều nữ)", ipa: "diː aʁçiˈtɛktɪnən", meaning: "Các nữ kiến trúc sư", example: "Wir haben ein Büro mit fünf Architektinnen.", exampleTranslation: "Chúng tôi có một văn phòng với 5 nữ kiến trúc sư.", category: "Nghề nghiệp" },
      { id: "23-24", word: "der Friseur (số ít nam)", ipa: "deːɐ̯ fʁiˈzøːɐ̯", meaning: "Nam thợ cắt tóc", example: "Ich gehe zum Friseur, weil meine Haare zu lang sind.", exampleTranslation: "Tôi đi hớt tóc vì tóc tôi quá dài.", category: "Nghề nghiệp" },
      { id: "23-25", word: "die Friseurin (số ít nữ)", ipa: "diː fʁiˈzøːʁɪn", meaning: "Nữ thợ cắt tóc", example: "Meine Friseurin hat heute leider keine Zeit.", exampleTranslation: "Thợ cắt tóc của tôi hôm nay tiếc là không có rảnh.", category: "Nghề nghiệp" },
      { id: "23-26", word: "die Friseure (số nhiều chung)", ipa: "diː fʁiˈzøːʁə", meaning: "Các thợ cắt tóc", example: "Am Montag haben die meisten Friseure geschlossen.", exampleTranslation: "Thứ Hai hầu hết các tiệm cắt tóc đều đóng cửa.", category: "Nghề nghiệp" },
      { id: "23-27", word: "die Friseurinnen (số nhiều nữ)", ipa: "diː fʁiˈzøːʁɪnən", meaning: "Các nữ thợ cắt tóc", example: "Die Friseurinnen machen eine Pause.", exampleTranslation: "Các nữ thợ cắt tóc đang được nghỉ ngơi.", category: "Nghề nghiệp" },
      { id: "23-28", word: "die Erzieherin (số ít nữ)", ipa: "diː ɛɐ̯ˈ͡tsiːəʁɪn", meaning: "Cô giáo mầm non", example: "Eine Erzieherin spielt und lernt mit Kindern.", exampleTranslation: "Một cô giáo mầm non chơi và học cùng trẻ em.", category: "Nghề nghiệp" },
      { id: "23-29", word: "der Erzieher (số ít nam)", ipa: "deːɐ̯ ɛɐ̯ˈ͡tsiːɐ", meaning: "Thầy giáo mầm non", example: "Der Erzieher liest den Kindern ein Buch vor.", exampleTranslation: "Thầy giáo mầm non đang đọc sách cho lũ trẻ nghe.", category: "Nghề nghiệp" },
      { id: "23-30", word: "die Erzieher (số nhiều chung)", ipa: "diː ɛɐ̯ˈ͡tsiːɐ", meaning: "Các giáo viên mầm non", example: "Die Erzieher machen einen Ausflug mit den Kindern.", exampleTranslation: "Các giáo viên mầm non đi tham quan cùng lũ trẻ.", category: "Nghề nghiệp" },
      { id: "23-31", word: "die Erzieherinnen (số nhiều nữ)", ipa: "diː ɛɐ̯ˈ͡tsiːəʁɪnən", meaning: "Các cô giáo mầm non", example: "Die Erzieherinnen basteln mit den Kindern.", exampleTranslation: "Các cô giáo mầm non đang cùng lũ trẻ làm đồ thủ công.", category: "Nghề nghiệp" },
      { id: "23-32", word: "der Koch (số ít nam)", ipa: "deːɐ̯ kɔx", meaning: "Nam đầu bếp", example: "Ein Koch ist jemand, der sehr gut kochen kann.", exampleTranslation: "Đầu bếp là người có thể nấu ăn rất tốt.", category: "Nghề nghiệp" },
      { id: "23-33", word: "die Köchin (số ít nữ)", ipa: "diː ˈkœçɪn", meaning: "Nữ đầu bếp", example: "Die Köchin bereitet das Dessert zu.", exampleTranslation: "Nữ đầu bếp đang chuẩn bị món tráng miệng.", category: "Nghề nghiệp" },
      { id: "23-34", word: "die Köche (số nhiều chung)", ipa: "diː ˈkœçə", meaning: "Các đầu bếp", example: "Zu viele Köche verderben den Brei.", exampleTranslation: "Lắm thầy thối ma (quá nhiều đầu bếp làm hỏng món súp).", category: "Nghề nghiệp" },
      { id: "23-35", word: "die Köchinnen (số nhiều nữ)", ipa: "diː ˈkœçɪnən", meaning: "Các nữ đầu bếp", example: "In diesem Restaurant kochen nur Köchinnen.", exampleTranslation: "Trong nhà hàng này chỉ có nữ đầu bếp nấu ăn.", category: "Nghề nghiệp" },

      // NHÓM 2: HOẠT ĐỘNG VÀ NHIỆM VỤ (TÄTIGKEITEN)
      { id: "23-36", word: "beraten (nguyên thể)", ipa: "bəˈʁaːtn̩", meaning: "Tư vấn", example: "Ein Verkäufer muss Kunden freundlich beraten.", exampleTranslation: "Người bán hàng phải tư vấn khách hàng một cách thân thiện.", category: "Hoạt động" },
      { id: "23-37", word: "hat beraten (quá khứ)", ipa: "hat bəˈʁaːtn̩", meaning: "Đã tư vấn", example: "Die Bankkauffrau hat mich gestern gut beraten.", exampleTranslation: "Nữ nhân viên ngân hàng đã tư vấn cho tôi rất tốt hôm qua.", category: "Hoạt động" },
      { id: "23-38", word: "pflegen (nguyên thể)", ipa: "ˈp͡fleːɡn̩", meaning: "Chăm sóc", example: "Krankenschwestern pflegen Patienten im Krankenhaus.", exampleTranslation: "Điều dưỡng chăm sóc bệnh nhân trong bệnh viện.", category: "Hoạt động" },
      { id: "23-39", word: "hat gepflegt (quá khứ)", ipa: "hat ɡəˈp͡fleːkt", meaning: "Đã chăm sóc", example: "Er hat seine kranke Mutter zu Hause gepflegt.", exampleTranslation: "Anh ấy đã tự tay chăm sóc mẹ già bị bệnh ở nhà.", category: "Hoạt động" },
      { id: "23-40", word: "leiten (nguyên thể)", ipa: "ˈlaɪ̯tn̩", meaning: "Lãnh đạo, quản lý", example: "Er leitet ein Büro mit 10 Mitarbeitern.", exampleTranslation: "Anh ấy quản lý một văn phòng với 10 nhân viên.", category: "Hoạt động" },
      { id: "23-41", word: "hat geleitet (quá khứ)", ipa: "hat ɡəˈlaɪ̯tət", meaning: "Đã lãnh đạo", example: "Sie hat das IT-Projekt sehr erfolgreich geleitet.", exampleTranslation: "Cô ấy đã dẫn dắt dự án IT rất thành công.", category: "Hoạt động" },
      { id: "23-42", word: "entwickeln (nguyên thể)", ipa: "ɛntˈvɪkl̩n", meaning: "Phát triển", example: "Ingenieure entwickeln neue Techniken.", exampleTranslation: "Các kỹ sư đang phát triển những kỹ thuật mới.", category: "Hoạt động" },
      { id: "23-43", word: "hat entwickelt (quá khứ)", ipa: "hat ɛntˈvɪkl̩t", meaning: "Đã phát triển", example: "Die Firma hat eine neue Software entwickelt.", exampleTranslation: "Công ty đã phát triển một phần mềm mới.", category: "Hoạt động" },
      { id: "23-44", word: "verkaufen (nguyên thể)", ipa: "fɛɐ̯ˈkaʊ̯fn̩", meaning: "Bán", example: "In diesem Geschäft verkaufen sie Brot und Kuchen.", exampleTranslation: "Trong cửa hàng này người ta bán bánh mì và bánh ngọt.", category: "Hoạt động" },
      { id: "23-45", word: "hat verkauft (quá khứ)", ipa: "hat fɛɐ̯ˈkaʊ̯ft", meaning: "Đã bán", example: "Er hat sein altes Auto an einen Freund verkauft.", exampleTranslation: "Anh ấy đã bán chiếc xe cũ của mình cho một người bạn.", category: "Hoạt động" },
      { id: "23-46", word: "unterrichten (nguyên thể)", ipa: "ˌʊntɐˈʁɪçtn̩", meaning: "Giảng dạy", example: "Der Lehrer unterrichtet Deutsch.", exampleTranslation: "Thầy giáo đang giảng dạy tiếng Đức.", category: "Hoạt động" },
      { id: "23-47", word: "hat unterrichten (quá khứ)", ipa: "hat ˌʊntɐˈʁɪçtət", meaning: "Đã giảng dạy", example: "Sie hat viele Jahre an der Universität unterrichtet.", exampleTranslation: "Cô ấy đã giảng dạy tại trường đại học trong nhiều năm.", category: "Hoạt động" },

      // NHÓM 3: TÍNH CHẤT CÔNG VIỆC (EIGENSCHAFTEN)
      { id: "23-48", word: "anstrengend (tính từ)", ipa: "ˈanˌʃtʁɛŋənt", meaning: "Vất vả, tốn sức", example: "Die Arbeit auf dem Bau ist sehr anstrengend.", exampleTranslation: "Làm việc tại công trường rất vất vả.", category: "Tính chất" },
      { id: "23-49", word: "stressig (tính từ)", ipa: "ˈʃtʁɛsɪç", meaning: "Căng thẳng", example: "Mein Job ist oft stressig, ich habe viel Arbeit.", exampleTranslation: "Công việc của tôi hay căng thẳng, tôi có rất nhiều việc.", category: "Tính chất" },
      { id: "23-50", word: "kreativ (tính từ)", ipa: "kʁeaˈtiːf", meaning: "Sáng tạo", example: "Als Designer muss man kreativ sein.", exampleTranslation: "Là một nhà thiết kế bạn phải sáng tạo.", category: "Tính chất" },
      { id: "23-51", word: "gefährlich (tính từ)", ipa: "ɡəˈfɛːɐ̯lɪç", meaning: "Nguy hiểm", example: "Polizist ist ein gefährlicher Job.", exampleTranslation: "Cảnh sát là một công việc nguy hiểm.", category: "Tính chất" },
      { id: "23-52", word: "sicher (tính từ)", ipa: "ˈzɪçɐ", meaning: "An toàn, ổn định", example: "Ein Job bei der Bank ist sehr sicher.", exampleTranslation: "Một công việc tại ngân hàng rất ổn định.", category: "Tính chất" },
      { id: "23-53", word: "selbstständig (tính từ)", ipa: "ˈzɛlpstˌʃtɛndɪç", meaning: "Tự lập / Làm tự do", example: "Ich möchte selbstständig arbeiten und keinen Chef haben.", exampleTranslation: "Tôi muốn làm việc tự do và không phải có sếp.", category: "Tính chất" },

      // NHÓM 4: NƠI LÀM VIỆC VÀ KHÁI NIỆM KHÁC (ARBEITSORTE & KONZEPTE)
      { id: "23-54", word: "die Agentur (số ít)", ipa: "diː aɡɛnˈtuːɐ̯", meaning: "Đại lý / Công ty dịch vụ", example: "Er arbeitet in einer Werbeagentur.", exampleTranslation: "Anh ấy làm việc ở một công ty quảng cáo.", category: "Nơi làm việc & khái niệm khác" },
      { id: "23-55", word: "die Agenturen (số nhiều)", ipa: "diː aɡɛnˈtuːʁən", meaning: "Các đại lý", example: "Es gibt viele Agenturen in dieser Stadt.", exampleTranslation: "Có nhiều đại lý trong thành phố này.", category: "Nơi làm việc & khái niệm khác" },
      { id: "23-56", word: "das Gehalt (số ít)", ipa: "das ɡəˈhalt", meaning: "Lương", example: "Wie hoch ist dein Gehalt pro Monat?", exampleTranslation: "Mức lương mỗi tháng của bạn là bao nhiêu?", category: "Nơi làm việc & khái niệm khác" },
      { id: "23-57", word: "die Gehälter (số nhiều)", ipa: "diː ɡəˈhɛltɐ", meaning: "Các mức lương", example: "Die Gehälter werden am Ende des Monats ausgezahlt.", exampleTranslation: "Lương được chi trả vào cuối tháng.", category: "Nơi làm việc & khái niệm khác" },
      { id: "23-58", word: "die Werkstatt (số ít)", ipa: "diː ˈvɛʁkˌʃtat", meaning: "Xưởng", example: "Das Auto steht zur Reparatur in der Werkstatt.", exampleTranslation: "Chiếc xe đang ở trong xưởng để sửa chữa.", category: "Nghề nghiệp" },
      { id: "23-59", word: "die Werkstätten (số nhiều)", ipa: "diː ˈvɛʁkˌʃtɛtn̩", meaning: "Các xưởng", example: "Diese Werkstätten sind sehr zuverlässig.", exampleTranslation: "Những xưởng này rất đáng tin cậy.", category: "Nghề nghiệp" },
      { id: "23-60", word: "passen zu (nguyên thể)", ipa: "ˈpasn̩ ͡tsuː", meaning: "Phù hợp với", example: "Dieser Beruf passt gut zu mir.", exampleTranslation: "Nghề nghiệp này rất phù hợp với tôi.", category: "Nơi làm việc & khái niệm khác" },
      { id: "23-61", word: "hat gepasst (quá khứ)", ipa: "hat ɡəˈpast", meaning: "Đã phù hợp", example: "Dieser Job hat perfekt zu ihren Fähigkeiten gepasst.", exampleTranslation: "Công việc này hoàn toàn phù hợp với những kỹ năng của cô ấy.", category: "Nơi làm việc & khái niệm khác" },
      { id: "23-62", word: "das Betriebsklima (số ít)", ipa: "das bəˈtʁiːpsˌkliːma", meaning: "Bầu không khí công ty", example: "Wir haben ein sehr gutes Betriebsklima.", exampleTranslation: "Chúng tôi có một bầu không khí công ty rất tốt.", category: "Nơi làm việc & khái niệm khác" },
      { id: "23-63", word: "die Gleitzeit (số ít)", ipa: "diː ˈɡlaɪ̯tˌ͡tsaɪ̯t", meaning: "Thời gian làm việc linh hoạt", example: "Ich habe Gleitzeit und kann spät anfangen.", exampleTranslation: "Tôi có thời gian linh hoạt và có thể bắt đầu muộn.", category: "Nơi làm việc & khái niệm khác" },
      { id: "23-64", word: "die Überstunde (số ít)", ipa: "diː ˈyːbɐˌʃtʊndə", meaning: "Giờ làm thêm", example: "Ich muss heute eine Überstunde machen.", exampleTranslation: "Hôm nay tôi phải làm thêm một giờ.", category: "Nơi làm việc & khái niệm khác" },
      { id: "23-65", word: "die Überstunden (số nhiều)", ipa: "diː ˈyːbɐˌʃtʊndn̩", meaning: "Nhiều giờ làm thêm", example: "Gestern musste ich zwei Überstunden machen.", exampleTranslation: "Hôm qua tôi đã phải làm thêm hai giờ.", category: "Nơi làm việc & khái niệm khác" },

      // NHÓM 5: DANH TỪ (NOMEN - TỪ PDF)
      { id: "23-pdf-1", word: "das Abitur (kein Plural)", ipa: "das abɪˈtuːɐ̯", meaning: "Bằng tốt nghiệp THPT", example: "Ich mache dieses Jahr mein Abitur.", exampleTranslation: "Tôi thi tốt nghiệp năm nay.", category: "Danh từ" },
      { id: "23-pdf-2", word: "die Berufsschule", ipa: "diː bəˈʁuːfsˌʃuːlə", meaning: "Trường nghề", example: "Ich gehe in die Berufsschule.", exampleTranslation: "Tôi học trường nghề.", category: "Danh từ" },
      { id: "23-pdf-3", word: "die Fachhochschule", ipa: "diː ˈfaxhoːxˌʃuːlə", meaning: "Đại học ứng dụng", example: "Er studiert an einer Fachhochschule.", exampleTranslation: "Anh ấy học ở đại học ứng dụng.", category: "Danh từ" },
      { id: "23-pdf-4", word: "die Gesamtschule", ipa: "diː ɡəˈzamtˌʃuːlə", meaning: "Trường tổng hợp", example: "Mein Kind geht auf eine Gesamtschule.", exampleTranslation: "Con tôi học trường tổng hợp.", category: "Danh từ" },
      { id: "23-pdf-5", word: "die Grundschule", ipa: "diː ˈɡʁʊntˌʃuːlə", meaning: "Trường tiểu học", example: "Ich war in der Grundschule hier.", exampleTranslation: "Tôi học tiểu học ở đây.", category: "Danh từ" },
      { id: "23-pdf-6", word: "das Gymnasium", ipa: "das ɡʏmˈnaːzi̯ʊm", meaning: "Trường cấp 3 (thi Abitur)", example: "Er geht aufs Gymnasium.", exampleTranslation: "Anh ấy học cấp 3.", category: "Danh từ" },
      { id: "23-pdf-7", word: "die Hauptschule", ipa: "diː ˈhaʊ̯ptˌʃuːlə", meaning: "Trường trung học cơ bản", example: "Sie besucht die Hauptschule.", exampleTranslation: "Cô ấy học trường Hauptschule.", category: "Danh từ" },
      { id: "23-pdf-8", word: "die Lehre", ipa: "diː ˈleːʁə", meaning: "Học nghề", example: "Er macht eine Lehre.", exampleTranslation: "Anh ấy học nghề.", category: "Danh từ" },
      { id: "23-pdf-9", word: "die Note", ipa: "diː ˈnoːtə", meaning: "Điểm số", example: "Ich habe gute Noten.", exampleTranslation: "Tôi có điểm tốt.", category: "Danh từ" },
      { id: "23-pdf-10", word: "die Realschule", ipa: "diː ʁeˈaːlˌʃuːlə", meaning: "Trường trung học", example: "Ich war in der Realschule.", exampleTranslation: "Tôi học Realschule.", category: "Danh từ" },
      { id: "23-pdf-11", word: "das Zeugnis", ipa: "das ˈ͡tsɔɪ̯knɪs", meaning: "Học bạ / bảng điểm", example: "Ich bekomme mein Zeugnis.", exampleTranslation: "Tôi nhận bảng điểm.", category: "Danh từ" },
      { id: "23-pdf-12", word: "die Bewerbung", ipa: "diː bəˈvɛʁbʊŋ", meaning: "Đơn xin việc", example: "Ich schreibe eine Bewerbung.", exampleTranslation: "Tôi viết đơn xin việc.", category: "Danh từ" },
      { id: "23-pdf-13", word: "das Einkommen", ipa: "das ˈaɪ̯nˌkɔmən", meaning: "Thu nhập", example: "Mein Einkommen ist nicht hoch.", exampleTranslation: "Thu nhập của tôi không cao.", category: "Danh từ" },
      { id: "23-pdf-14", word: "die Kündigung", ipa: "diː ˈkʏndɪɡʊŋ", meaning: "Đơn nghỉ việc", example: "Ich bekomme eine Kündigung.", exampleTranslation: "Tôi nhận quyết định nghỉ việc.", category: "Danh từ" },
      { id: "23-pdf-15", word: "der Praktikant", ipa: "deːɐ̯ pʁaktiˈkant", meaning: "Thực tập sinh", example: "Ich bin Praktikant.", exampleTranslation: "Tôi là thực tập sinh.", category: "Danh từ" },
      { id: "23-pdf-16", word: "die Tätigkeit", ipa: "diː ˈtɛːtɪçkaɪ̯t", meaning: "Công việc / hoạt động", example: "Meine Tätigkeit ist interessant.", exampleTranslation: "Công việc của tôi thú vị.", category: "Danh từ" },
      { id: "23-pdf-17", word: "der Elektroinstallateur", ipa: "deːɐ̯ eˈlɛktʁoɪnstalatuːɐ̯", meaning: "Thợ điện", example: "Er ist Elektroinstallateur.", exampleTranslation: "Anh ấy là thợ điện.", category: "Danh từ" },
      { id: "23-pdf-18", word: "die Laune", ipa: "diː ˈlaʊ̯nə", meaning: "Tâm trạng", example: "Ich habe gute Laune.", exampleTranslation: "Tôi có tâm trạng tốt.", category: "Danh từ" },
      { id: "23-pdf-19", word: "das Thema", ipa: "das ˈteːma", meaning: "Chủ đề", example: "Das Thema ist interessant.", exampleTranslation: "Chủ đề thú vị.", category: "Danh từ" },

      // NHÓM 6: ĐỘNG TỪ (VERBEN - TỪ PDF)
      { id: "23-pdf-20", word: "sich bewerben (um)", ipa: "zɪç bəˈvɛʁbn̩", meaning: "Nộp đơn", example: "Ich bewerbe mich um eine Stelle.", exampleTranslation: "Tôi nộp đơn xin việc.", category: "Động từ" },
      { id: "23-pdf-21", word: "kündigen", ipa: "ˈkʏndɪɡn̩", meaning: "Nghỉ việc", example: "Ich kündige meinen Job.", exampleTranslation: "Tôi nghỉ việc.", category: "Động từ" },
      { id: "23-pdf-22", word: "kopieren", ipa: "koˈpiːʁən", meaning: "Sao chép", example: "Ich kopiere das Dokument.", exampleTranslation: "Tôi sao chép tài liệu.", category: "Động từ" },
      { id: "23-pdf-23", word: "stören", ipa: "ˈʃtøːʁən", meaning: "Làm phiền", example: "Das stört mich.", exampleTranslation: "Điều đó làm tôi khó chịu.", category: "Động từ" },
      { id: "23-pdf-24", word: "vorhaben", ipa: "ˈfoːɐ̯ˌhaːbn̩", meaning: "Dự định", example: "Ich habe viel vor.", exampleTranslation: "Tôi có nhiều kế hoạch.", category: "Động từ" },

      // NHÓM 7: TÍNH TỪ & TRẠNG TỪ (ADJEKTIVE & ADVERBIEN - TỪ PDF)
      { id: "23-pdf-25", word: "mündlich", ipa: "ˈmʏntlɪç", meaning: "Bằng miệng", example: "Die Prüfung ist mündlich.", exampleTranslation: "Bài thi nói.", category: "Tính từ & Trạng từ" },
      { id: "23-pdf-26", word: "schriftlich", ipa: "ˈʃʁɪftlɪç", meaning: "Bằng viết", example: "Ich schreibe eine schriftliche Prüfung.", exampleTranslation: "Tôi làm bài thi viết.", category: "Tính từ & Trạng từ" },
      { id: "23-pdf-27", word: "eigentlich", ipa: "ˈaɪ̯ɡn̩tlɪç", meaning: "Thực ra", example: "Eigentlich bin ich müde.", exampleTranslation: "Thực ra tôi mệt.", category: "Tính từ & Trạng từ" },
      { id: "23-pdf-28", word: "freiwillig", ipa: "ˈfʁaɪ̯ˌvɪlɪç", meaning: "Tự nguyện", example: "Ich mache das freiwillig.", exampleTranslation: "Tôi làm tự nguyện.", category: "Tính từ & Trạng từ" },
      { id: "23-pdf-29", word: "genug", ipa: "ɡəˈnuːk", meaning: "Đủ", example: "Ich habe genug Geld.", exampleTranslation: "Tôi có đủ tiền.", category: "Tính từ & Trạng từ" },
      { id: "23-pdf-30", word: "neulich", ipa: "ˈnɔɪ̯lɪç", meaning: "Gần đây", example: "Ich habe ihn neulich gesehen.", exampleTranslation: "Tôi gặp anh ấy gần đây.", category: "Tính từ & Trạng từ" },
      { id: "23-pdf-31", word: "vorgestern", ipa: "ˈfoːɐ̯ˌɡɛstɐn", meaning: "Hôm kia", example: "Ich war vorgestern krank.", exampleTranslation: "Hôm kia tôi bị ốm.", category: "Tính từ & Trạng từ" },

      // NHÓM 8: CÂU CỐ ĐỊNH (PHRASEN - TỪ PDF)
      { id: "23-pdf-32", word: "Das habe ich vor.", ipa: "das ˈhaːbə ɪç ˈfoːɐ̯", meaning: "Tôi dự định làm điều đó", example: "Das habe ich vor.", exampleTranslation: "Tôi định làm vậy.", category: "Câu cố định" }
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
  }
];
