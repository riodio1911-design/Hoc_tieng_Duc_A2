import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Loader2, Send, CheckCircle2, AlertCircle, Edit3, Sparkles, Mic } from 'lucide-react';
import { getAI } from '../ai';

const ai = getAI();

const LESSON_CONTENT: Record<string, {
  topicTitle: string;
  topicDesc: string;
  placeholder: string;
  aiPrompt: string;
  redemittel: { de: string; vi: string }[];
}> = {

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

  'l13': {
    topicTitle: 'Welcher Lerntyp sind Sie?',
    topicDesc: 'Viết về kiểu học của bạn. Bạn là người học qua thị giác (visuell), thính giác (auditiv), giao tiếp (kommunikativ) hay nhận thức (kognitiv)? Bạn thường làm gì khi học tiếng Đức?',
    placeholder: 'Ich bin ein...',
    aiPrompt: 'The writing prompt asks the user to describe their learning type (visual, auditory, communicative, or cognitive) and how they typically learn German. Evaluate their vocabulary usage related to learning strategies and grammar.',
    redemittel: [
      { de: 'Ich bin ein visueller / auditiver / kommunikativer Lerntyp.', vi: 'Tôi là người học qua thị giác / thính giác / giao tiếp.' },
      { de: 'Ich schreibe oft neue Wörter auf und verwende Farben.', vi: 'Tôi thường viết lại các từ mới và sử dụng màu sắc.' },
      { de: 'Am besten lerne ich, wenn ich mit anderen spreche.', vi: 'Tôi học tốt nhất khi nói chuyện với người khác.' },
      { de: 'Ich höre oft deutsche Nachrichten oder Podcasts.', vi: 'Tôi thường nghe tin tức tiếng Đức hoặc Podcasts.' },
      { de: 'Mir hilft es, wenn ich Grammatikregeln lese.', vi: 'Nó giúp ích cho tôi khi tôi đọc các quy tắc ngữ pháp.' }
    ]
  },
  'l14': {
    topicTitle: 'Dankeschön für ein Päckchen',
    topicDesc: 'Bạn vừa nhận được một gói quà sinh nhật từ người bạn Anna ở Đức. Hãy viết một tấm bưu thiếp để cảm ơn cô ấy về món quà, và kết thúc bằng việc mong sớm gặp lại.',
    placeholder: 'Liebe Anna,...',
    aiPrompt: 'The writing prompt asks the user to write a thank you postcard for a birthday package from their friend Anna in Germany. Evaluate structure (salutation, body, closing) and appropriate expressions of gratitude.',
    redemittel: [
      { de: 'Liebe Anna, vielen Dank für Dein Päckchen!', vi: 'Anna thân mến, cảm ơn bạn rất nhiều vì gói quà!' },
      { de: 'Ich habe mich sehr über das schöne Geschenk gefreut.', vi: 'Tôi rất vui về món quà đẹp đẽ này.' },
      { de: 'Das war eine tolle Überraschung zu meinem Geburtstag.', vi: 'Đó thực sự là một điều bất ngờ tuyệt vời cho sinh nhật của tôi.' },
      { de: 'Bis hoffentlich bald!', vi: 'Hy vọng sớm gặp lại!' },
      { de: 'Herzliche Grüße, ...', vi: 'Thân mến, ...' }
    ]
  },
  'l15': {
    topicTitle: 'Ein perfekter Fernseh- oder Kinoabend',
    topicDesc: 'Viết một bài đăng trên diễn đàn về một buổi tối xem phim hoặc TV hoàn hảo của bạn. Bạn thích xem ở nhà hay ở rạp? Tại sao? Bạn xem cùng với ai và ăn/uống gì?',
    placeholder: 'Hallo zusammen, am liebsten sehe ich zu Hause auf dem Sofa fern...',
    aiPrompt: 'The writing prompt is: "Wie sieht für Sie ein perfekter Fernseh- oder Kinoabend aus? Schreiben Sie einen Forumsbeitrag zu folgenden Punkten: Im Kino oder zu Hause? Was?/Warum? Mit wem? Essen/Trinken?" (What does a perfect TV or movie night look like for you? Write a forum post answering: In the cinema or at home? What and why? With whom? Food/Drinks?). Evaluate their ability to express preferences, describe leisure activities, and provide reasons.',
    redemittel: [
      { de: 'Am liebsten sehe ich zu Hause auf dem Sofa fern, weil...', vi: 'Tôi thích xem trên ghế sofa ở nhà nhất, bởi vì...' },
      { de: 'Das ist sehr gemütlich.', vi: 'Điều đó rất thoải mái/ấm cúng.' },
      { de: 'Ich interessiere mich für...', vi: 'Tôi quan tâm đến / thích...' },
      { de: 'Deshalb gucke ich zuerst...', vi: 'Vì vậy đầu tiên tôi sẽ xem...' },
      { de: 'Meistens gucke ich zusammen mit...', vi: 'Tôi thường xem cùng với...' }
    ]
  },
  'l16': {
    topicTitle: 'Ein Zimmer reservieren',
    topicDesc: 'Viết một email (E-Mail) đặt phòng khách sạn. Hãy đề cập đến các thông tin sau: đặt phòng đơn (Einzelzimmer) cho 3 đêm, có ăn sáng và ăn tối (Halbpension). Ngoài ra, hãy dùng câu hỏi lịch sự (indirekte Fragen) để hỏi về giá phòng và bãi đỗ xe (Parkplatz).',
    placeholder: 'Sehr geehrte Damen und Herren, ich möchte gerne ein Zimmer...',
    aiPrompt: 'The writing prompt is: "Reservieren Sie ein Zimmer in einem Hotel. Schreiben Sie eine E-Mail mit folgenden Punkten: - 3 Nächte, - 1 Person (Einzelzimmer), - mit Frühstück und Abendessen (Halbpension), - Frage nach dem Preis, - Frage nach einem Parkplatz. Verwenden Sie auch indirekte Fragen (z.B. Ich würde gerne wissen, ob...)." Evaluate if they included all points, used polite/indirect questions correctly, and used formal email greeting/closing.',
    redemittel: [
      { de: 'Sehr geehrte Damen und Herren,', vi: 'Kính thưa ông/bà, (lời chào trang trọng)' },
      { de: 'Ich möchte gerne ein Einzelzimmer für drei Nächte reservieren.', vi: 'Tôi muốn đặt một phòng đơn cho 3 đêm.' },
      { de: 'Ich brauche Halbpension (Zimmer mit Frühstück und Abendessen).', vi: 'Tôi cần loại phòng được bao ăn sáng và ăn tối (Halbpension).' },
      { de: 'Können Sie mir sagen, wie viel das Zimmer kostet?', vi: 'Bạn có thể cho tôi biết phòng giá bao nhiêu không?' },
      { de: 'Ich würde gerne wissen, ob das Hotel einen Parkplatz hat.', vi: 'Tôi muốn biết liệu khách sạn có bãi đậu xe không.' }
    ]
  },
  'l17': {
    topicTitle: 'Einladung zum Fotoabend',
    topicDesc: 'Viết một email (E-Mail) trả lời lời mời đến một buổi tối xem ảnh (Fotoabend). Bạn hãy chọn 3 trong số 4 ý sau để viết: mang theo ai đó (jemanden mitbringen), mang theo đồ ăn/thức uống (Essen/Getränke mitbringen), đến trễ một chút (etwas später kommen), hoặc kỳ nghỉ của riêng bạn ở đất nước đó (eigener Urlaub in dem Land). Đừng quên lời chào mở đầu và kết thúc phù hợp.',
    placeholder: 'Liebe/r..., vielen Dank für die Einladung...',
    aiPrompt: 'The writing prompt is: "Freunde laden Sie zu einem Foto-Abend ein. Schreiben Sie eine Antwort-E-Mail. Wählen Sie drei dieser Punkte: - jemanden mitbringen - Essen/Getränke mitbringen - etwas später kommen - eigener Urlaub in dem Land. Schreiben Sie auch eine Einleitung und einen Schluss." Evaluate if they included 3 of the 4 points clearly, used appropriate friendly email greetings/closings, and wrote coherent sentences.',
    redemittel: [
      { de: 'Vielen Dank für die Einladung!', vi: 'Cảm ơn bạn rất nhiều vì lời mời!' },
      { de: 'Ein Fotoabend ist eine tolle Idee.', vi: 'Một buổi tối xem ảnh là một ý tưởng tuyệt vời.' },
      { de: 'Ich freue mich schon.', vi: 'Tôi đang rất mong chờ điều đó.' },
      { de: 'Ich komme gern.', vi: 'Tôi rất sẵn lòng đến.' },
      { de: 'Kann ich meinen Freund / meine Freundin mitbringen?', vi: 'Tôi có thể dẫn theo bạn / bạn gái / bạn trai của tôi không?' }
    ]
  },
  'l18': {
    topicTitle: 'Das Wetter an Ihrem Wohnort',
    topicDesc: 'Viết một đoạn văn ngắn (hoặc một bức E-Mail cho một người bạn) kể về thời tiết ở nơi bạn đang sống hiện tại. Hãy cho biết: Hôm nay thời tiết thế nào? Nó có phải là đặc trưng cho mùa này không? Bình thường thì thời tiết vào mùa/tháng này sẽ như thế nào?',
    placeholder: 'Hallo ..., das Wetter hier ist heute...',
    aiPrompt: 'The writing prompt is: "Wie ist das Wetter an Ihrem Wohnort? Schreiben Sie eine kurze Nachricht/E-Mail an einen Freund. Beantworten Sie folgende Fragen: - Wie ist das Wetter heute? - Ist das typisch für die Jahreszeit? - Wie ist das Wetter sonst zu dieser Jahreszeit?". Evaluate if they described the weather, compared it to typical weather for the season, and used relevant vocabulary.',
    redemittel: [
      { de: 'Das Wetter ist heute (sehr) kalt / heiß / windig / trocken.', vi: 'Thời tiết hôm nay (rất) lạnh / nóng / nhiều gió / khô hanh.' },
      { de: 'Es regnet / schneit / stürmt.', vi: 'Trời đang mưa / tuyết rơi / bão.' },
      { de: 'Das ist typisch / nicht typisch für den Sommer / Winter.', vi: 'Điều đó thì điển hình / không điển hình cho mùa hè / mùa đông.' },
      { de: 'In dieser Jahreszeit sind Niederschläge / Schauer typisch.', vi: 'Vào mùa này thì lượng mưa / mưa rào là rất đặc trưng.' },
      { de: 'Normalerweise ist das Wetter hier wärmer / kälter als heute.', vi: 'Bình thường thì thời tiết ở đây ấm hơn / lạnh hơn so với hôm nay.' }
    ]
  },
  'l19': {
    topicTitle: 'Kulturprogramm für das Wochenende',
    topicDesc: 'Viết một email cho bạn bè để rủ họ đi tham gia một sự kiện văn hóa vào cuối tuần (ví dụ: xem phim, nghe nhạc, đi bảo tàng). Hãy đề cập đến: Bạn vừa từ đâu về? Tại sao bạn muốn xem chương trình này? Địa điểm và thời gian gặp mặt.',
    placeholder: 'Hallo ..., hast du am Wochenende schon etwas vor? Ich komme gerade vom...',
    aiPrompt: 'The writing prompt is: "Schreiben Sie eine E-Mail an Freunde, um sie zu einer Kulturveranstaltung am Wochenende einzuladen. Punkte: - Woher kommen Sie gerade? - Warum wollen Sie diese Veranstaltung besuchen? - Ort und Zeit des Treffens." (Write an email to friends inviting them to a cultural event this weekend. Include: Where are you coming from right now? Why do you want to attend this event? Place and time of meeting). Evaluate their ability to invite clearly, use Wo/Woher/Wohin prepositions (aus/von, in/zu/nach) correctly, and their use of cultural vocabulary.',
    redemittel: [
      { de: 'Hast du am Wochenende schon etwas vor?', vi: 'Cuối tuần này bạn đã có kế hoạch gì chưa?' },
      { de: 'Ich komme gerade vom/aus dem...', vi: 'Tôi vừa mới đi ... về.' },
      { de: 'Haben Sie / Hast du Lust auf ...?', vi: 'Bạn có hứng thú với ... không?' },
      { de: 'Sollen wir ins Konzert / ins Kino gehen?', vi: 'Chúng ta có nên đi xem hòa nhạc / xem phim không?' },
      { de: 'Wir treffen uns am Samstag um ... vor dem ...', vi: 'Chúng ta gặp nhau vào thứ Bảy lúc ... trước ...' }
    ]
  },
  'l20': {
    topicTitle: 'Die Lesegewohnheiten der Deutschen',
    topicDesc: 'Viết một đoạn văn trên diễn đàn kể về thói quen đọc sách của bạn. Hãy nói về: Bạn có thích đọc sách/báo không? Loại sách hay văn bản nào bạn thích nhất (sách chuyên ngành, truyện tranh, truyện cổ tích...)? Khi nào và ở đâu bạn thường đọc sách?',
    placeholder: 'Hallo zusammen, bei diesem Thema möchte ich gerne meine Erfahrungen teilen. Ich lese ...',
    aiPrompt: 'The writing prompt is: "Lesegewohnheiten. Schreiben Sie einen Forumsbeitrag über Ihre Lesegewohnheiten. Punkte: - Lesen Sie gern? - Welche Bücher/Texte lesen Sie am liebsten (Sachbuch, Comic, Märchen etc.)? - Wann und wo lesen Sie meistens?" (Reading habits. Write a forum post about your reading habits. Include: Do you like reading? What kind of books/texts do you prefer? When and where do you usually read?). Evaluate their vocabulary related to books/reading and their ability to express reading habits.',
    redemittel: [
      { de: 'Ich lese sehr gerne in meiner Freizeit.', vi: 'Tôi rất thích đọc sách vào thời gian rảnh rỗi.' },
      { de: 'Am liebsten lese ich...', vi: 'Tôi thích đọc nhất là...' },
      { de: 'Manchmal lese ich auch...', vi: 'Thỉnh thoảng tôi cũng đọc...' },
      { de: 'Ich interessiere mich für...', vi: 'Tôi quan tâm đến / hứng thú với...' },
      { de: 'Ich lese meistens im Bett / auf dem Sofa / in der Bahn.', vi: 'Tôi thường đọc sách trên giường / trên ghế sofa / trên tàu điện.' }
    ]
  },
  'l21': {
    topicTitle: 'Schreiben Sie eine spannende Geschichte.',
    topicDesc: 'Viết một câu chuyện ly kỳ với một người bạn dưới dạng một bức E-Mail. Kể về một vụ trộm (Einbruch).',
    placeholder: 'Liebe Anna, stell dir vor, was gestern passiert ist...',
    aiPrompt: 'The writing prompt is: "Schreiben Sie eine E-Mail an eine Freundin / einen Freund. Erzählen Sie eine spannende Geschichte über einen Einbruch." (Write an email to a friend telling an exciting story about a burglary).',
    redemittel: [
      { de: 'Liebe/Lieber [Tên],', vi: 'Gửi [Tên] thân mến,' },
      { de: 'Weißt du, was passiert ist?', vi: 'Bạn có biết chuyện gì đã xảy ra không?' },
      { de: 'Stell dir vor: ...', vi: 'Thử tưởng tượng xem: ...' },
      { de: 'Plötzlich ...', vi: 'Đột nhiên ...' },
      { de: 'Zum Glück ...', vi: 'May mắn thay ...' }
    ]
  },
  'l23': {
    topicTitle: 'Schreiben Sie einen Beitrag ins Feedback-Forum.',
    topicDesc: 'Viết một bài đăng trên diễn đàn phản hồi về khóa học tiếng Đức của bạn. Chọn 2 chủ đề (giáo viên, phòng học, bạn học, thư viện...) để bày tỏ sự hài lòng hoặc không hài lòng và giải thích lý do.',
    placeholder: 'Hallo zusammen, mit meinem Deutschkurs bin ich insgesamt ganz zufrieden. Besonders gut gefällt mir...',
    aiPrompt: 'The writing prompt is: "Schreiben Sie einen Beitrag in ein Feedback-Forum über einen Sprachkurs. Wählen Sie zwei Themen (z.B. Lehrer, Unterricht, Kursräume, Teilnehmer, Bibliothek). Schreiben Sie, womit Sie zufrieden sind und womit Sie unzufrieden sind, und begründen Sie Ihre Meinung." (Write a feedback forum post about a language course. Choose 2 topics, state what you are satisfied/dissatisfied with and explain why). Evaluate their ability to express satisfaction/dissatisfaction and provide reasons.',
    redemittel: [
      { de: 'Damit bin ich sehr zufrieden. / Das finde ich prima. / Das macht mir Spaß.', vi: 'Tôi rất hài lòng với điều đó. / Tôi thấy điều đó thật tuyệt. / Nó mang lại niềm vui cho tôi.' },
      { de: 'Besonders gut gefällt mir, dass...', vi: 'Tôi đặc biệt thích việc...' },
      { de: 'Damit bin ich unzufrieden. / Das stört mich.', vi: 'Tôi không hài lòng với điều đó. / Điều đó làm phiền tôi.' },
      { de: 'Schade ist nur, dass...', vi: 'Chỉ tiếc là...' },
      { de: 'Außerdem / Darüber hinaus...', vi: 'Ngoài ra / Thêm vào đó...' }
    ]
  },
  'l22': {
    topicTitle: 'Und so einfach geht\'s: Etwas erklären',
    topicDesc: 'Viết một tin nhắn / E-Mail cho một người bạn để hướng dẫn họ cách đặt vé tàu trực tuyến (Online-Ticket) hoặc sử dụng dịch vụ thuê xe chung (Carsharing). Hãy dùng các từ chỉ trình tự thời gian (zuerst, dann...).',
    placeholder: 'Hallo, ein Ticket online zu buchen ist ganz einfach. Zuerst musst du...',
    aiPrompt: 'The writing prompt is: "Erklären Sie einem Freund in einer E-Mail, wie man ein Ticket im Internet bucht oder Carsharing nutzt. Verwenden Sie Wörter zur zeitlichen Reihenfolge wie zuerst, dann, danach, zuletzt." Evaluate if they explained the steps logically and used the temporal connectors correctly.',
    redemittel: [
      { de: 'Das ist ganz einfach. / Kein Problem!', vi: 'Nó rất đơn giản. / Không vấn đề gì!' },
      { de: 'Zuerst musst du dich online anmelden.', vi: 'Đầu tiên bạn phải đăng ký trực tuyến.' },
      { de: 'Dann / Danach wählst du...', vi: 'Tiếp theo / Sau đó bạn chọn...' },
      { de: 'Und dann gibst du deine Daten ein.', vi: 'Và sau đó bạn nhập thông tin của mình.' },
      { de: 'Zuletzt klickst du auf "Buchen".', vi: 'Cuối cùng bạn nhấp vào "Đặt".' }
    ]
  },
  'l24': {
    topicTitle: 'Welche Erfahrungen haben Sie mit Auslandsaufenthalten?',
    topicDesc: 'Viết một bài báo cáo / kể lại trải nghiệm (Erfahrungsbericht) về khoảng thời gian bạn ở nước ngoài.',
    placeholder: 'Nach meinem Studium war ich für sechs Monate in Deutschland...',
    aiPrompt: 'The writing prompt is: "Schreiben Sie einen Erfahrungsbericht über einen Auslandsaufenthalt." (Write an experience report about a stay abroad). Evaluate if they described their stay clearly, what they did, what they missed, best/worst experiences, and if they recommend it.',
    redemittel: [
      { de: 'Nach der Schule / dem Studium... war ich in...', vi: 'Sau khi học xong / học đại học... tôi đã ở...' },
      { de: 'Ich habe... / Ich musste...', vi: 'Tôi đã (làm gì)... / Tôi phải (làm gì)...' },
      { de: 'Am meisten habe ich... vermisst.', vi: 'Tôi nhớ... nhất.' },
      { de: 'Am besten hat mir... gefallen.', vi: 'Tôi thích phần... nhất.' },
      { de: 'Das war eine tolle Zeit mit vielen schönen Erlebnissen.', vi: 'Đó là một thời gian tuyệt vời với nhiều kỷ niệm/trải nghiệm đẹp.' }
    ]
  }
};

export default function WritingPractice({ lessonId }: { lessonId: string }) {
  const content = LESSON_CONTENT[lessonId] || LESSON_CONTENT['l21'];

  const [text, setText] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isDictating, setIsDictating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);
  const [feedback, setFeedback] = useState<{
    score: number;
    grammar: string;
    vocabulary: string;
    coherence: string;
    suggestion: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      const recognition = new SpeechRec();
      recognition.lang = 'de-DE';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      
      recognition.onresult = (event: any) => {
        if (event.results.length > 0) {
          const transcript = event.results[0][0].transcript;
          
          if (textareaRef.current) {
            const start = textareaRef.current.selectionStart;
            const end = textareaRef.current.selectionEnd;
            const currentText = textareaRef.current.value;
            
            const newText = currentText.substring(0, start) + transcript + (currentText.length > end && currentText[end] !== ' ' ? ' ' : '') + currentText.substring(end);
            
            setText(newText);
            
            // Setting cursor position after the inserted text
            setTimeout(() => {
              if (textareaRef.current) {
                textareaRef.current.selectionStart = start + transcript.length + 1;
                textareaRef.current.selectionEnd = start + transcript.length + 1;
                textareaRef.current.focus();
              }
            }, 10);
          } else {
            // Append if ref not available
            setText(prev => prev + (prev.length > 0 && !prev.endsWith(' ') ? ' ' : '') + transcript);
          }
        }
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsDictating(false);
        if (event.error !== 'no-speech') {
           setError('Lỗi nhận diện giọng nói: ' + event.error);
        }
      };
      
      recognition.onend = () => {
        setIsDictating(false);
      };
      
      recognitionRef.current = recognition;
    }
  }, []);

  const toggleDictation = () => {
    if (isDictating) {
      recognitionRef.current?.stop();
      setIsDictating(false);
    } else {
      setError(null);
      if (!recognitionRef.current) {
        setError('Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Vui lòng dùng Chrome/Edge.');
        return;
      }
      try {
        recognitionRef.current.start();
        setIsDictating(true);
      } catch (err: any) {
         if (err.name === 'NotAllowedError') {
             setError('Vui lòng cấp quyền sử dụng Microphone cho trình duyệt.');
         } else {
             // If already started, just ignore or restart
             console.error(err);
         }
      }
    }
  };

  const evaluateText = async () => {
    if (text.trim().length < 20) {
      setError('Vui lòng viết ít nhất một câu hoàn chỉnh (khoảng 20 ký tự) để AI có thể chấm điểm.');
      return;
    }
    
    setError(null);
    setIsEvaluating(true);

    const promptText = `Evaluate German text for prompt: "${content.aiPrompt}"
Return JSON:
{
  "score": 0-100,
  "grammar": "VNese feedback on grammar errors",
  "vocabulary": "VNese feedback on vocabulary",
  "coherence": "VNese feedback on structure",
  "suggestion": "VNese general improvement tips"
}
Student's text: "${text}"`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: promptText,
        config: {
          responseMimeType: "application/json",
        }
      });

      const result = JSON.parse(response.text || '{}');
      setFeedback(result);
    } catch (err: any) {
      console.error(err);
      setError('Có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-10 py-6 md:py-12 px-4 relative">
      <div className="flex items-center justify-between">
        <div className="space-y-1 md:space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-black text-theme-dark">Luyện viết</h2>
          <p className="text-theme-dark/40 font-bold uppercase tracking-widest text-xs">Phân tích & Chấm điểm bằng AI</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white rounded-[32px] border-4 border-theme-dark/5 p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-display font-black text-theme-dark mb-4 flex items-center gap-2">
                 <Edit3 className="text-theme-primary" /> Đề bài
              </h3>
              <div className="p-4 bg-theme-cream/30 rounded-2xl border-2 border-theme-primary/10 space-y-4">
                 <p className="font-bold text-theme-dark leading-relaxed">
                   {content.topicTitle}
                 </p>
                 <p className="text-sm font-medium text-theme-dark/60">
                   {content.topicDesc}
                 </p>
              </div>

              <div className="mt-8 space-y-3">
                 <h4 className="font-black text-theme-dark/70 uppercase tracking-widest text-xs">Gợi ý cấu trúc (Redemittel)</h4>
                 <div className="space-y-2">
                    {content.redemittel.map((item, idx) => (
                      <div key={idx} className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 flex flex-col">
                        <span className="font-bold text-theme-dark text-sm">{item.de}</span>
                        <span className="text-xs text-theme-dark/50">{item.vi}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
           <div className="bg-white rounded-[32px] border-4 border-theme-dark/5 p-6 md:p-8 shadow-xl flex flex-col h-full relative">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={content.placeholder}
                className="w-full h-64 md:h-80 p-6 pt-16 bg-zinc-50 rounded-2xl border-2 border-zinc-200 outline-none focus:border-theme-primary focus:bg-white resize-none font-medium text-theme-dark leading-relaxed transition-all"
              />
              
              <div className="absolute top-10 right-10 md:top-12 md:right-12 z-10">
                <button
                   onClick={toggleDictation}
                   title="Nhập bằng giọng nói (Bôi đen đoạn cần nhét sau đó bấm nút này)"
                   className={`w-12 h-12 flex items-center justify-center rounded-full transition-all shadow-md active:scale-95 ${isDictating ? 'bg-red-500 text-white animate-pulse shadow-red-500/30' : 'bg-theme-cream text-theme-dark hover:bg-theme-primary hover:text-white border border-theme-dark/10 hover:border-theme-primary'}`}
                >
                   <Mic size={22} className={isDictating ? "animate-bounce" : ""} />
                </button>
              </div>

              {isDictating && (
                 <div className="absolute top-[80px] right-12 z-10 bg-theme-dark text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg w-max shadow-xl animate-fade-in pointer-events-none before:content-[''] before:absolute before:-top-1 before:right-4 before:w-2 before:h-2 before:bg-theme-dark before:rotate-45">
                   Đang nghe Đức ngữ...
                 </div>
              )}
              
              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 font-medium">
                  <AlertCircle size={20} /> {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                 <button
                   onClick={evaluateText}
                   disabled={isEvaluating || text.trim().length === 0}
                   className="px-8 py-4 bg-theme-dark text-white font-black rounded-2xl shadow-xl hover:bg-theme-primary hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-theme-dark flex items-center gap-2"
                 >
                   {isEvaluating ? (
                     <>
                       <Loader2 className="animate-spin" size={20} /> Đang phân tích...
                     </>
                   ) : (
                     <>
                       <Sparkles size={20} /> Chấm bài bằng AI
                     </>
                   )}
                 </button>
              </div>
           </div>
        </div>

        {feedback && (
          <div className="lg:col-span-12">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-theme-dark rounded-[32px] p-8 shadow-2xl text-white relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-theme-primary/20 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                   <div className="shrink-0 flex flex-col items-center justify-center bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                     <div className="text-6xl font-black text-emerald-400 font-display">
                       {feedback.score}
                     </div>
                     <div className="text-white/60 font-bold uppercase tracking-widest text-xs mt-2">
                       Trực tiếp từ AI
                     </div>
                   </div>

                   <div className="flex-1 space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FeedbackCard title="Ngữ pháp" content={feedback.grammar} />
                        <FeedbackCard title="Từ vựng" content={feedback.vocabulary} />
                        <FeedbackCard title="Bố cục & Mạch lạc" content={feedback.coherence} />
                     </div>
                     
                     <div className="p-6 bg-theme-primary/20 border border-theme-primary/30 rounded-2xl box-border max-w-full overflow-hidden">
                       <h4 className="font-black text-theme-primary mb-2 uppercase tracking-widest text-sm">Gợi ý cải thiện</h4>
                       <p className="text-white/90 leading-relaxed font-medium">
                         {feedback.suggestion}
                       </p>
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

function FeedbackCard({ title, content }: { title: string, content: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
      <h4 className="font-black text-white/50 mb-2 uppercase tracking-widest text-xs">{title}</h4>
      <p className="text-sm font-medium leading-relaxed">{content}</p>
    </div>
  );
}
