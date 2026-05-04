export type LektionTestQuestion = {
  id: string;
  type: 'vocab' | 'grammar' | 'communication';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export const LEKTION_TESTS: Record<number, LektionTestQuestion[]> = {
  1: [
    { id: 'l1-1', type: 'vocab', question: 'Gia đình: ______ und Nichte.', options: ['Neffe', 'Onkel', 'Cousin', 'Schwiegervater'], correctAnswer: 'Neffe', explanation: 'Neffe (cháu trai) đi cùng cặp với Nichte (cháu gái).' },
    { id: 'l1-2', type: 'vocab', question: 'Gia đình: ______ und Tante.', options: ['Neffe', 'Onkel', 'Cousin', 'Schwiegervater'], correctAnswer: 'Onkel', explanation: 'Onkel (chú/bác trai) và Tante (cô/dì).' },
    { id: 'l1-3', type: 'grammar', question: 'Ergänzen Sie das Präteritum: "Ach, ich (sein) _____ heute mit Theresa bei Elena."', options: ['bin', 'war', 'habe gewesen', 'waren'], correctAnswer: 'war', explanation: 'Ngôi "ich" của động từ "sein" ở Präteritum là "war".' },
    { id: 'l1-4', type: 'grammar', question: 'Ergänzen Sie das Perfekt: "Zuerst haben wir Kuchen (essen) _______."', options: ['gegessen', 'aßen', 'geessen', 'esset'], correctAnswer: 'gegessen', explanation: 'Partizip II của "essen" là "gegessen".' },
    { id: 'l1-5', type: 'grammar', question: 'Ergänzen Sie den Possessivartikel: "Amelie und Theresa, was sind _____ Lieblingswitze?"', options: ['ihre', 'eure', 'unsere', 'deine'], correctAnswer: 'eure', explanation: 'Người nói đang xưng hô trực tiếp với 2 người (ihr), do đó dùng tính từ sở hữu "euer", chia theo số nhiều là "eure".' },
    { id: 'l1-6', type: 'grammar', question: 'Ergänzen Sie den Possessivartikel (formell): "Herr Kuhnert, Ihr Garten und _____ Blumen sind wunderschön."', options: ['Ihre', 'seine', 'ihre', 'euer'], correctAnswer: 'Ihre', explanation: 'Ngôi trang trọng (Sie) có tính từ sở hữu là "Ihr", chia theo danh từ số nhiều "Blumen" thành "Ihre".' },
  ],
  2: [
    { id: 'l2-1', type: 'vocab', question: 'Hier kann man arbeiten:', options: ['der Schreibtisch', 'der Spiegel', 'der Herd', 'der Teppich'], correctAnswer: 'der Schreibtisch', explanation: 'Schreibtisch (bàn viết/bàn làm việc) là nơi để làm việc.' },
    { id: 'l2-2', type: 'vocab', question: 'Sie liegen oft auf dem Sofa:', options: ['die Kissen', 'die Vorhänge', 'die Souvenirs', 'die Handtücher'], correctAnswer: 'die Kissen', explanation: 'Kissen (gối) thường được đặt (nằm) trên sofa để xem tivi, nghỉ ngơi.' },
    { id: 'l2-3', type: 'grammar', question: 'Was ist richtig? Herr Fischer _____ seine Tasche in die Ecke. (legen / liegen)', options: ['legt', 'liegt', 'stellen', 'steht'], correctAnswer: 'legt', explanation: '"legen" diễn tả hành động đặt, để một vật ở tư thế nằm (Akkusativ).' },
    { id: 'l2-4', type: 'grammar', question: 'Er stellt seinen Kaffee auf _____ Schreibtisch.', options: ['den', 'dem', 'der', 'das'], correctAnswer: 'den', explanation: 'Hành động "stellen" chỉ sự di chuyển, yêu cầu giới từ "auf" + Akkusativ: "den Schreibtisch".' },
    { id: 'l2-5', type: 'grammar', question: 'Die Rechnungen _____ neben dem Drucker. (liegen/legen)', options: ['liegen', 'legen', 'stehen', 'stellen'], correctAnswer: 'liegen', explanation: '"liegen" là động từ chỉ vị trí (Dativ) tĩnh, diễn tả các hóa đơn đang nằm ở đó.' },
  ],
  3: [
    { id: 'l3-1', type: 'vocab', question: 'Finden Sie das Nomen mit -ung: Wir möchten dreimal übernachten. Eine ______ kostet 38 Euro.', options: ['Übernachtung', 'Übernachter', 'Übernachten', 'Nächtung'], correctAnswer: 'Übernachtung', explanation: 'Động từ "übernachten" (qua đêm) => Danh từ "die Übernachtung".' },
    { id: 'l3-2', type: 'vocab', question: 'Finden Sie das Nomen mit -ung: Buchen Sie doch eine geführte Nacht-_______. (wandern)', options: ['Wanderung', 'Wanderer', 'Wandern', 'Wander'], correctAnswer: 'Wanderung', explanation: 'Động từ "wandern" (đi bộ đường dài) => Danh từ "die Wanderung".' },
    { id: 'l3-3', type: 'communication', question: 'Sollen wir in den Sommerferien in die Berge fahren? - Nicht schon wieder! Das gefällt mir _______.', options: ['überhaupt nicht', 'am liebsten', 'würde gern', 'finde die Idee'], correctAnswer: 'überhaupt nicht', explanation: '"überhaupt nicht" nghĩa là "hoàn toàn không".' },
    { id: 'l3-4', type: 'communication', question: 'Berge, Meer... das kennen wir schon. Ich _______ nach Norddeutschland reisen.', options: ['würde gern', 'am liebsten', 'gefällt mir', 'finde die Idee'], correctAnswer: 'würde gern', explanation: 'Konjunktiv II "würde" + "gern" diễn tả một mong muốn: tôi muốn (thích) đi du lịch...' },
  ],
  4: [
    { id: 'l4-1', type: 'grammar', question: 'Ergänzen Sie die Endung: "Sollen wir eine groß__ Pizza backen?" (die Pizza)', options: ['e', 'en', 'er', 'es'], correctAnswer: 'e', explanation: 'Akkusativ, giống Cái, không có quán từ xác định/mạo từ bất định: "eine große Pizza".' },
    { id: 'l4-2', type: 'grammar', question: 'Ergänzen Sie die Endung: "Ja, aber hier ist kein hell__ Mehl." (das Mehl)', options: ['es', 'er', 'e', 'en'], correctAnswer: 'es', explanation: 'Nominativ, giống Trung, đi với kein: "kein helles Mehl".' },
    { id: 'l4-3', type: 'grammar', question: 'Ergänzen Sie die Endung: "Aber bitte keinen roh__ Schinken!" (der Schinken)', options: ['en', 'e', 'er', 'em'], correctAnswer: 'en', explanation: 'Akkusativ, giống Đực, đi với mạo từ/kein: "keinen rohen Schinken".' },
  ],
  5: [
    { id: 'l5-1', type: 'grammar', question: 'Ergänzen Sie die Endung: "Besuchen Sie das berühmt__ Münster mit dem bunt__ Dach." (das Münster, das Dach)', options: ['e / en', 'es / em', 'e / e', 'en / en'], correctAnswer: 'e / en', explanation: 'Akk. trung tính xác định: das berühmte Münster; Dativ trung tính xác định: dem bunten Dach.' },
    { id: 'l5-2', type: 'grammar', question: 'Ergänzen Sie die Endung: "Das Museum für Gegenwartskunst mit den modern__ Bildern." (die Bilder - Plural)', options: ['en', 'e', 'er', 'em'], correctAnswer: 'en', explanation: 'Dativ số nhiều có đuôi -en (den modernen Bildern).' },
    { id: 'l5-3', type: 'communication', question: '"Hallo David, gehen wir heute Abend zuerst ins Kino und _____ in den neuen Jazz-Club?"', options: ['danach', 'davor', 'dann', 'deshalb'], correctAnswer: 'danach', explanation: '"danach" (sau đó) chỉ thứ tự thời gian của hành động.' },
  ],
  6: [
    { id: 'l6-1', type: 'vocab', question: 'Ergänzen Sie von... bis / ab / seit / zwischen: "documenta" findet alle fünf Jahre ______ statt. (Juli - September)', options: ['von Juli bis September', 'ab Juli bis September', 'seit Juli bis September', 'zwischen Juli und September'], correctAnswer: 'von Juli bis September', explanation: 'Khoảng thời gian từ tháng này đến tháng kia: von ... bis ...' },
    { id: 'l6-2', type: 'grammar', question: 'Ergänzen Sie: "Meine Kollegin ist _______ krank." (Mittwoch)', options: ['seit Mittwoch', 'von Mittwoch', 'bis Mittwoch', 'ab Mittwoch'], correctAnswer: 'seit Mittwoch', explanation: '"seit" + Dativ diễn đạt một sự việc đã bắt đầu trong quá khứ và vẫn còn tiếp diễn.' },
    { id: 'l6-3', type: 'communication', question: 'Tom wird mit dem Auto fahren. Das finde ich aber _______.', options: ['nicht so gut', 'eine gute Idee', 'das passt', 'vielleicht mitkommen'], correctAnswer: 'nicht so gut', explanation: 'Đáp lại một ý kiến, bạn có thể bày tỏ "finde ich (nicht) so gut".' },
  ],
  7: [
    { id: 'l7-1', type: 'grammar', question: 'Ergänzen Sie: "Sie waren _____ zwei Stunden an der frischen Luft." (seit/über/von/bis/zwischen)', options: ['über', 'seit', 'von', 'zwischen'], correctAnswer: 'über', explanation: '"über" + khoảng thời gian (hơn 2 tiếng).' },
    { id: 'l7-2', type: 'grammar', question: 'Ergänzen Sie: "______ Mai findet das Training draußen statt."', options: ['Von ... an', 'Von ... bis', 'Seit ... an', 'Zwischen ... und'], correctAnswer: 'Von ... an', explanation: '"Von Mai an" (hoặc "Ab Mai") chỉ sự bắt đầu ở tương lai hoặc thói quen mới.' },
    { id: 'l7-3', type: 'grammar', question: 'Ergänzen Sie: "Er holt die Kinder ______ Viertel vor vier und vier vom Schwimmtraining ab."', options: ['zwischen', 'von', 'seit', 'über'], correctAnswer: 'zwischen', explanation: '"zwischen ... und ..." (giữa thời điểm này và thời điểm kia).' },
  ],
  8: [
    { id: 'l8-1', type: 'grammar', question: 'Verbinden Sie mit WEIL: "Simon geht heute nicht in die Schule, weil ______." (er ist krank)', options: ['er krank ist', 'ist er krank', 'er ist krank', 'er krank sein'], correctAnswer: 'er krank ist', explanation: '"weil" là liên từ phụ thuộc, động từ ở mệnh đề phụ bị đẩy xuống cuối câu.' },
    { id: 'l8-2', type: 'grammar', question: 'Verbinden Sie mit WEIL: "Herr Bosch hatte einen Unfall, weil ______." (er ist zu schnell gefahren)', options: ['er zu schnell gefahren ist', 'er ist zu schnell gefahren', 'er zu schnell fahren', 'er gefahren zu schnell ist'], correctAnswer: 'er zu schnell gefahren ist', explanation: 'Trợ động từ "ist" lùi xuống cuối.' },
    { id: 'l8-3', type: 'grammar', question: 'Verbinden Sie mit WEIL: "Ich kaufe Tabletten in der Apotheke, weil ______." (ich habe Kopfschmerzen)', options: ['ich Kopfschmerzen habe', 'ich habe Kopfschmerzen', 'ich bin krank', 'ich krank bin'], correctAnswer: 'ich Kopfschmerzen habe', explanation: 'Động từ "habe" ở cuối câu.' },
  ],
  9: [
    { id: 'l9-1', type: 'grammar', question: 'Ergänzen Sie die Endungen: "Freundlich__ Mitarbeiter mit lang__ Berufserfahrung sucht international__ Betrieb."', options: ['er / er / en', 'e / e / e', 'er / es / em', 'er / er / er'], correctAnswer: 'er / er / en', explanation: 'Nominativ (der Betrieb): internationaler Betrieb. Akkusativ (der Mitarbeiter): freundlichen Mitarbeiter.' },
    { id: 'l9-2', type: 'grammar', question: 'Ergänzen Sie die Endungen: "Suche hell__ Wohnung mit schön__ Garten."', options: ['e / em', 'es / en', 'e / en', 'er / em'], correctAnswer: 'e / em', explanation: 'Akk. die Wohnung: helle. Dat. der Garten (nach mit): schönem.' },
  ],
  10: [
    { id: 'l10-1', type: 'grammar', question: 'Bilden Sie Sätze mit DASS: "Ich finde, dass die Pommes versalzen ______."', options: ['sind', 'ist', 'sein', 'seid'], correctAnswer: 'sind', explanation: 'Mệnh đề phụ "dass", động từ (sind) nằm cuối câu.' },
    { id: 'l10-2', type: 'grammar', question: 'Bilden Sie Sätze mit DASS: "Kann es sein, dass _______?" (Die Suppe ist kalt.)', options: ['die Suppe kalt ist', 'ist die Suppe kalt', 'die Suppe ist kalt', 'kalt ist die Suppe'], correctAnswer: 'die Suppe kalt ist', explanation: 'Mệnh đề "dass" đẩy động từ "ist" xuống phía sau.' },
    { id: 'l10-3', type: 'grammar', question: 'DASS-Satz: "Gut, dass _______." (Es gibt einen Obstsalat.)', options: ['es einen Obstsalat gibt', 'gibt es einen Obstsalat', 'es gibt einen Obstsalat', 'einen Obstsalat es gibt'], correctAnswer: 'es einen Obstsalat gibt', explanation: 'Động từ "gibt" chuyển xuống cuối câu.' },
  ],
  11: [
    { id: 'l11-1', type: 'grammar', question: 'Reflexivpronomen: "Ich verstehe _______ gut mit meinen Kollegen." (sich verstehen)', options: ['mich', 'sich', 'uns', 'dich'], correctAnswer: 'mich', explanation: 'Ngôi "ich" thì đại từ phản thân ở Akkusativ là "mich".' },
    { id: 'l11-2', type: 'grammar', question: 'Reflexivpronomen: "Meine Kinder streiten _______ schon wieder!" (sich streiten)', options: ['sich', 'euch', 'mich', 'uns'], correctAnswer: 'sich', explanation: 'Ngôi thứ 3 số nhiều (sie - meine Kinder) dùng "sich".' },
  ],
  12: [
    { id: 'l12-1', type: 'vocab', question: 'Ordnen Sie zu: "Obst und Gemüse sind gesund. Aber ______ 70 Prozent der Deutschen essen nicht ______ Obst und Gemüse." (Hälfte / rund / genug / durchschnittlich)', options: ['rund / genug', 'durchschnittlich / Prozent', 'Hälfte / rund', 'genug / Hälfte'], correctAnswer: 'rund / genug', explanation: '"rund 70%" (khoảng 70%). "Nicht genug" (không đủ).' },
    { id: 'l12-2', type: 'grammar', question: 'Bilden Sie Sätze mit WENN: "Wenn mir das Essen im Restaurant nicht schmeckt, _______." (sich beschweren - ich)', options: ['beschwere ich mich.', 'ich beschwere mich.', 'beschweren ich mich.', 'mich beschwere ich.'], correctAnswer: 'beschwere ich mich.', explanation: 'Mệnh đề phụ đứng trước (Wenn...), thì mệnh đề chính bắt đầu bằng động từ.' },
    { id: 'l12-3', type: 'grammar', question: 'Sätze mit WENN: "Ich mag Schweinefleisch nur, wenn _______." (mager sein - es)', options: ['es mager ist.', 'ist es mager.', 'es ist mager.', 'mager es ist.'], correctAnswer: 'es mager ist.', explanation: '"wenn" đẩy động từ "ist" về cuối câu.' }
  ]
};
