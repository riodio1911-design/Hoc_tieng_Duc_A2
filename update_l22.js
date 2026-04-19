import fs from 'fs';

const rawWords = [
  { w: "die Anmeldung, -en", vi: "sự đăng ký", a2: "Ich mache eine Anmeldung im Internet.", vi_a2: "Tôi đăng ký trên Internet." },
  { w: "der Buchstabe, -n", vi: "chữ cái", a2: "Dieser Buchstabe ist schwierig.", vi_a2: "Chữ cái này khó." },
  { w: "die Chipkarte, -n", vi: "thẻ chip", a2: "Ich habe eine Chipkarte.", vi_a2: "Tôi có một thẻ chip." },
  { w: "die Daten (Pl.)", vi: "dữ liệu", a2: "Ich gebe meine Daten ein.", vi_a2: "Tôi nhập dữ liệu của mình." },
  { w: "der Zugangscode, -s", vi: "mã truy cập", a2: "Ich brauche den Zugangscode.", vi_a2: "Tôi cần mã truy cập." },
  { w: "das Passwort, -¨er", vi: "mật khẩu", a2: "Mein Passwort ist einfach.", vi_a2: "Mật khẩu của tôi đơn giản." },
  { w: "der Vertrag, -¨e", vi: "hợp đồng", a2: "Ich unterschreibe den Vertrag.", vi_a2: "Tôi ký hợp đồng." },
  { w: "die Zahl, -en", vi: "con số", a2: "Die Zahl ist groß.", vi_a2: "Con số lớn." },
  { w: "die Verbindung, -en", vi: "kết nối", a2: "Die Verbindung ist gut.", vi_a2: "Kết nối tốt." },
  { w: "das Ziel, -e", vi: "mục tiêu / đích", a2: "Mein Ziel ist Deutsch lernen.", vi_a2: "Mục tiêu của tôi là học tiếng Đức." },
  { w: "die Fahrkarte, -n", vi: "vé xe", a2: "Ich kaufe eine Fahrkarte.", vi_a2: "Tôi mua vé." },
  { w: "das Mitglied, -er", vi: "thành viên", a2: "Ich bin Mitglied im Club.", vi_a2: "Tôi là thành viên." },
  { w: "die Organisation, -en", vi: "tổ chức", a2: "Die Organisation hilft Menschen.", vi_a2: "Tổ chức giúp mọi người." },
  { w: "die Steuer, -n", vi: "thuế", a2: "Ich zahle Steuer.", vi_a2: "Tôi trả thuế." },
  { w: "die Umwelt", vi: "môi trường", a2: "Wir schützen die Umwelt.", vi_a2: "Chúng ta bảo vệ môi trường." },
  { w: "anklicken (klickte an, hat angeklickt)", vi: "nhấp chuột", a2: "Ich klicke den Button an.", vi_a2: "Tôi nhấp nút." },
  { w: "ausfüllen (füllte aus, hat ausgefüllt)", vi: "điền (form)", a2: "Ich fülle das Formular aus.", vi_a2: "Tôi điền form." },
  { w: "bestätigen (bestätigte, hat bestätigt)", vi: "xác nhận", a2: "Ich bestätige die E-Mail.", vi_a2: "Tôi xác nhận email." },
  { w: "wählen (wählte, hat gewählt)", vi: "chọn / bầu", a2: "Ich wähle eine Option.", vi_a2: "Tôi chọn một lựa chọn." },
  { w: "besitzen (besaß, hat besessen)", vi: "sở hữu", a2: "Ich besitze ein Auto.", vi_a2: "Tôi sở hữu một chiếc xe." },
  { w: "erreichen (erreichte, hat erreicht)", vi: "đạt được", a2: "Ich erreiche mein Ziel.", vi_a2: "Tôi đạt được mục tiêu." },
  { w: "mieten (mietete, hat gemietet)", vi: "thuê", a2: "Ich miete eine Wohnung.", vi_a2: "Tôi thuê một căn hộ." },
  { w: "teilen (teilte, hat geteilt)", vi: "chia sẻ", a2: "Ich teile das Essen.", vi_a2: "Tôi chia sẻ thức ăn." },
  { w: "sich vorstellen (stellte sich vor, hat sich vorgestellt)", vi: "giới thiệu bản thân", a2: "Ich stelle mich vor.", vi_a2: "Tôi tự giới thiệu." },
  { w: "zurückbringen (brachte zurück, hat zurückgebracht)", vi: "mang trả lại", a2: "Ich bringe das Buch zurück.", vi_a2: "Tôi mang sách trả lại." },
  { w: "zurückfahren (fuhr zurück, ist zurückgefahren)", vi: "quay về (bằng xe)", a2: "Ich fahre nach Hause zurück.", vi_a2: "Tôi lái xe về nhà." },
  { w: "außerhalb", vi: "bên ngoài", a2: "Ich wohne außerhalb der Stadt.", vi_a2: "Tôi sống ở bên ngoài thành phố." },
  { w: "höchstens", vi: "nhiều nhất", a2: "Ich habe höchstens 10 Euro.", vi_a2: "Tôi có nhiều nhất 10 Euro." },
  { w: "klar", vi: "rõ ràng", a2: "Das ist klar.", vi_a2: "Điều đó rõ ràng." },
  { w: "na klar", vi: "tất nhiên rồi", a2: "Hilfst du mir? – Na klar!", vi_a2: "Giúp tôi không? Tất nhiên rồi!" },
  { w: "unterwegs", vi: "đang trên đường", a2: "Ich bin unterwegs.", vi_a2: "Tôi đang trên đường." },
  { w: "unterwegs sein", vi: "đang di chuyển", a2: "Ich bin oft unterwegs.", vi_a2: "Tôi thường hay di chuyển." },
  { w: "umweltfreundlich", vi: "thân thiện môi trường", a2: "Das Auto ist umweltfreundlich.", vi_a2: "Chiếc xe thân thiện với môi trường." }
];

const mapped = rawWords.map((itm, i) => {
  return `      { id: "22-${i+1}", word: "${itm.w.replace(/"/g, '\\"')}", ipa: "", meaning: "${itm.vi}", example: "${itm.a2.replace(/"/g, '\\"')}", exampleTranslation: "${itm.vi_a2}", category: "MENSCHEN A2" }`;
});

const content = fs.readFileSync('src/constants.ts', 'utf-8');
const regex = /id: "l22",[\s\S]*?items: \[[\s\S]*?\],/;
const newArr = `id: "l22",\n    title: "Lektion 22",\n    subtitle: "Menschen A2 Wörter",\n    items: [\n${mapped.join(',\n')}\n    ],`;

const newContent = content.replace(regex, newArr);
fs.writeFileSync('src/constants.ts', newContent);
console.log("Replaced L22 words");
