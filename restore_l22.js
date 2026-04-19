import fs from 'fs';

const oldL22 = `
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
    ],`;

const content = fs.readFileSync('src/constants.ts', 'utf-8');
const regex = /id: "l22",[\s\S]*?items: \[[\s\S]*?\],/;
const newContent = content.replace(regex, oldL22);
fs.writeFileSync('src/constants.ts', newContent);
console.log("Restored L22 with custom groupings.");
