import React, { useState } from 'react';
import { BookOpenText, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

const LESSON_CONTENT: Record<string, any> = {

  'l1': {
     title: 'Die Bäckerei von Opa',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Mein Opa heißt Hans. Er war 40 Jahre lang Bäcker in München. Er ist jeden Tag um 3 Uhr morgens aufgestanden, um frisches Brot und Brötchen zu backen.",
       "Heute ist Opa 70 Jahre alt und arbeitet nicht mehr. Aber er backt sonntags immer noch gerne Kuchen für die ganze Familie."
     ],
     questions: [
       { id: 1, question: "Was war der Beruf von Opa Hans?", options: ["Lehrer", "Bäcker", "Mechaniker", "Arzt"], correct: 1, explanation: "Im Text steht, dass er Bäcker war." },
       { id: 2, question: "Wann ist er jeden Tag aufgestanden?", options: ["Um 5 Uhr", "Um 7 Uhr", "Um 3 Uhr", "Um 4 Uhr"], correct: 2, explanation: "Im Text steht: Er ist jeden Tag um 3 Uhr morgens aufgestanden." }
     ]
  },
  'l2': {
     title: 'Die neue Wohnung',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Wir sind gestern in unsere neue Wohnung gezogen. Im Wohnzimmer steht jetzt ein großes graues Sofa und ein Fernseher.",
       "Aber wir wissen noch nicht: Wohin mit der Kommode? Sie ist sehr groß. Vielleicht stellen wir sie ins Schlafzimmer neben das Bett?"
     ],
     questions: [
       { id: 1, question: "Wo steht das Sofa?", options: ["Im Schlafzimmer", "In der Küche", "Im Wohnzimmer", "Im Flur"], correct: 2, explanation: "Im Wohnzimmer steht jetzt ein großes graues Sofa." },
       { id: 2, question: "Wo soll die Kommode vielleicht stehen?", options: ["Vor dem Fenster", "Neben dem Bett", "Auf dem Balkon", "Im Bad"], correct: 1, explanation: "Vielleicht stellen wir sie ins Schlafzimmer neben das Bett." }
     ]
  },
  'l3': {
     title: 'Urlaub an der Ostsee',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Unsere Familie macht dieses Jahr Urlaub an der Ostsee. Wir haben ein kleines Ferienhaus gemietet.",
       "Der Ort ist sehr ruhig. Hier finden wir viel Ruhe und Erholung. Jeden Tag gehen wir am Strand spazieren."
     ],
     questions: [
       { id: 1, question: "Wo macht die Familie Urlaub?", options: ["In den Bergen", "In der Stadt", "An der Ostsee", "Am See"], correct: 2, explanation: "Urlaub an der Ostsee." },
       { id: 2, question: "Was machen sie jeden Tag?", options: ["Sie gehen schwimmen", "Sie gehen spazieren", "Sie schlafen lange", "Sie lesen"], correct: 1, explanation: "Jeden Tag gehen wir am Strand spazieren." }
     ]
  },
  'l4': {
     title: 'Auf dem Markt',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Jeden Samstag gehe ich auf den Markt. Ich mag frische Lebensmittel. 'Was darf es sein?', fragt die Verkäuferin.",
       "Ich kaufe zwei Kilo Äpfel, frisches Gemüse und ein halbes Kilo Käse."
     ],
     questions: [
       { id: 1, question: "Wann geht die Person auf den Markt?", options: ["Am Montag", "Am Freitag", "Am Wochenende (Samstag)", "Jeden Tag"], correct: 2, explanation: "Jeden Samstag gehe ich auf den Markt." },
       { id: 2, question: "Was fragt die Verkäuferin?", options: ["Was kostet das?", "Was darf es sein?", "Wie geht es Ihnen?", "Wo ist das Geld?"], correct: 1, explanation: "Was darf es sein?, fragt die Verkäuferin." }
     ]
  },
  'l5': {
     title: 'Tour durch Köln',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Wir machen heute eine Stadttour in Köln. Unser Reiseführer sagt: 'Schaut mal, der schöne Dom!'",
       "Der Kölner Dom ist wirklich sehr hoch und sieht beeindruckend aus. Danach gehen wir ins Museum."
     ],
     questions: [
       { id: 1, question: "Welche Stadt besuchen sie?", options: ["Berlin", "Hamburg", "Köln", "München"], correct: 2, explanation: "Wir machen heute eine Stadttour in Köln." },
       { id: 2, question: "Was machen sie nach dem Besuch des Doms?", options: ["Sie gehen ins Kino", "Sie gehen essen", "Sie gehen ins Museum", "Sie gehen nach Hause"], correct: 2, explanation: "Danach gehen wir ins Museum." }
     ]
  },
  'l6': {
     title: 'Musikfestival im Sommer',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Das Sommerfestival ist meine Lieblingsveranstaltung. Es findet jedes Jahr im Juli statt.",
       "Es gibt viele Bands, gutes Essen und eine tolle Atmosphäre. Ich gehe immer mit meinen Freunden dorthin."
     ],
     questions: [
       { id: 1, question: "In welchem Monat findet das Festival statt?", options: ["Im Juni", "Im Juli", "Im August", "Im Mai"], correct: 1, explanation: "Es findet jedes Jahr im Juli statt." },
       { id: 2, question: "Mit wem geht die Person zum Festival?", options: ["Mit der Familie", "Alleine", "Mit Freunden", "Mit dem Hund"], correct: 2, explanation: "Ich gehe immer mit meinen Freunden dorthin." }
     ]
  },
  'l7': {
     title: 'Fitness am Abend',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Thomas arbeitet viel am Computer. Er braucht Bewegung. Sein Kollege sagt: 'Wir könnten montags joggen gehen.'",
       "Thomas findet die Idee gut. Sie wollen nächste Woche am Montag im Park starten."
     ],
     questions: [
       { id: 1, question: "Warum braucht Thomas Bewegung?", options: ["Er isst zu viel", "Er schläft schlecht", "Er arbeitet viel am Computer", "Er ist krank"], correct: 2, explanation: "Thomas arbeitet viel am Computer. Er braucht Bewegung." },
       { id: 2, question: "An welchem Tag wollen sie joggen gehen?", options: ["Am Sonntag", "Am Dienstag", "Am Montag", "Am Freitag"], correct: 2, explanation: "Wir könnten montags joggen gehen." }
     ]
  },
  'l8': {
     title: 'Beim Arzt',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Herr Müller hat starke Schmerzen in der Brust. Er ist beim Arzt und macht sich Sorgen.",
       "'Hoffentlich ist es nicht das Herz!', denkt er. Der Arzt untersucht ihn und sagt: 'Es ist nur eine Erkältung.'"
     ],
     questions: [
       { id: 1, question: "Wo hat Herr Müller Schmerzen?", options: ["Im Bauch", "Im Kopf", "In der Brust", "Im Bein"], correct: 2, explanation: "Herr Müller hat starke Schmerzen in der Brust." },
       { id: 2, question: "Was sagt der Arzt?", options: ["Er muss ins Krankenhaus", "Es ist das Herz", "Es ist nur eine Erkältung", "Er braucht Operation"], correct: 2, explanation: "Der Arzt sagt: 'Es ist nur eine Erkältung.'" }
     ]
  },
  'l9': {
     title: 'Die deutsche Automobilindustrie',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Deutschland ist weltweit für seine Autos bekannt. Firmen wie VW, BMW und Mercedes beschäftigen tausende Menschen.",
       "'Bei guten Autos sind wir ganz vorn', sagt ein Ingenieur, der seit 20 Jahren in der Industrie arbeitet."
     ],
     questions: [
       { id: 1, question: "Wofür ist Deutschland weltweit bekannt?", options: ["Für Bier", "Für Autos", "Für Mode", "Für Schokolade"], correct: 1, explanation: "Deutschland ist weltweit für seine Autos bekannt." },
       { id: 2, question: "Wie lange arbeitet der Ingenieur in der Industrie?", options: ["10 Jahre", "5 Jahre", "20 Jahre", "30 Jahre"], correct: 2, explanation: "Ein Ingenieur, der seit 20 Jahren in der Industrie arbeitet." }
     ]
  },
  'l10': {
     title: 'Abendessen zu zweit',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Das Restaurant ist heute sehr voll. Fast alle Tische sind besetzt.",
       "Lisa sagt zu Markus: 'Gut, dass du reserviert hast!' Sie bestellen beide ein Steak und ein Glas Wein."
     ],
     questions: [
       { id: 1, question: "Warum war es gut, dass Markus reserviert hat?", options: ["Weil das Essen teuer ist", "Weil das Restaurant sehr voll ist", "Weil sie Hunger haben", "Weil Lisa spät kam"], correct: 1, explanation: "Das Restaurant ist heute sehr voll. Fast alle Tische sind besetzt." },
       { id: 2, question: "Was trinken Lisa und Markus?", options: ["Bier", "Wasser", "Wein", "Cola"], correct: 2, explanation: "Sie bestellen beide ein Steak und ein Glas Wein." }
     ]
  },
  'l11': {
     title: 'Eine gute Nachricht',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Sarah hat heute einen Brief bekommen. Sie hat ihre Deutschprüfung bestanden!",
       "Sie ruft sofort ihre Mutter an und sagt: 'Ich freue mich so! Endlich habe ich das Zertifikat B1.'"
     ],
     questions: [
       { id: 1, question: "Welche Prüfung hat Sarah bestanden?", options: ["Die Führerscheinprüfung", "Die Matheprüfung", "Die Deutschprüfung", "Die Englischprüfung"], correct: 2, explanation: "Sie hat ihre Deutschprüfung bestanden." },
       { id: 2, question: "Welches Zertifikat bekommt sie?", options: ["A1", "A2", "B1", "B2"], correct: 2, explanation: "Endlich habe ich das Zertifikat B1." }
     ]
  },
  'l12': {
     title: 'Gemeinsam kochen',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Felix und Anna kochen heute Abend zusammen. Sie machen Spaghetti Bolognese.",
       "Felix findet Kochen sehr romantisch und sagt: 'Liebe geht durch den Magen!'"
     ],
     questions: [
       { id: 1, question: "Was kochen Felix und Anna?", options: ["Pizza", "Salat", "Spaghetti Bolognese", "Suppe"], correct: 2, explanation: "Sie machen Spaghetti Bolognese." },
       { id: 2, question: "Was findet Felix romantisch?", options: ["Musik", "Tanzen", "Kochen", "Essen gehen"], correct: 2, explanation: "Felix findet Kochen sehr romantisch." }
     ]
  },

  'l13': {
     title: 'Mein freiwilliges soziales Jahr',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Ich habe im letzten Jahr mein freiwilliges soziales Jahr in Brasilien gemacht. Dort habe ich in einem Kindergarten gearbeitet. Zuerst habe ich morgens immer die Räume geputzt und dann in der Küche geholfen oder mit den Kindern gespielt.",
       "Später habe ich auch die Familien besucht und Berichte geschrieben. Am Anfang war die Stadt sehr fremd und laut, aber ich habe mich schnell eingelebt.",
       "Ich war froh, dass ich schon ein bisschen Portugiesisch verstanden habe. Ich habe in der zwölften Klasse schon Portugiesisch an der Volkshochschule gelernt und deshalb habe ich mich schon bald zu Hause gefühlt.",
       "Für mich war es ein wundervolles Jahr. Ich erinnere mich noch immer gern an die vielen freundlichen Kinderaugen. Und würde sofort wieder dort arbeiten."
     ],
     questions: [
       {
         id: 'q1',
         question: 'Was hat Jo morgens im Kindergarten gemacht?',
         options: [
           'Sie hat die Räume geputzt und in der Küche geholfen.',
           'Sie hat Portugiesisch gelernt.',
           'Sie hat den Familien Berichte geschickt.'
         ],
         correctAnswer: 0,
         explanation: 'Im Text steht: "Zuerst habe ich morgens immer die Räume geputzt und dann in der Küche geholfen..."'
       },
       {
         id: 'q2',
         question: 'Warum hat sich Jo bald zu Hause gefühlt?',
         options: [
           'Weil die Stadt nicht laut war.',
           'Weil sie schon an der Volkshochschule Portugiesisch gelernt hatte.',
           'Weil sie nicht arbeiten musste.'
         ],
         correctAnswer: 1,
         explanation: 'Sie verstand schon Portugiesisch, weil sie es in der 12. Klasse an der Volkshochschule gelernt hatte.'
       }
     ]
  },
  'l14': {
     title: 'Weihnachten und Pakete',
     instruction: 'Lesen Sie den kurzen Text und beantworten Sie die Fragen.',
     text: [
       "In der Vorweihnachtszeit ist bei der Post immer viel los. Überall werden fleißig Päckchen und Pakete gepackt. Pro Tag werden in Deutschland ungefähr 7,2 Millionen Pakete verschickt.",
       "Viele Menschen verschicken Geschenke an ihre Verwandten und Freunde, die in anderen Städten oder Ländern wohnen. Die Postämter sind voll, und die Mitarbeiter müssen viel arbeiten.",
       "Auch viele Weihnachtskarten werden geschrieben und verschickt. Schon im November beginnen einige Leute, ihre Karten zu schreiben, damit sie rechtzeitig ankommen."
     ],
     questions: [
       {
         id: 'q1',
         question: 'Wie viele Pakete werden in Deutschland pro Tag verschickt?',
         options: [
           'ungefähr 7,2 Millionen',
           'ungefähr 24 Millionen',
           'ungefähr 12 Millionen'
         ],
         correctAnswer: 0,
         explanation: 'Im Text steht: "Pro Tag werden in Deutschland ungefähr 7,2 Millionen Pakete verschickt."'
       },
       {
         id: 'q2',
         question: 'Wann beginnen einige Leute, ihre Weihnachtskarten zu schreiben?',
         options: [
           'Erst im Dezember',
           'Schon im November',
           'Nach Weihnachten'
         ],
         correctAnswer: 1,
         explanation: 'Der Text sagt: "Schon im November beginnen einige Leute, ihre Karten zu schreiben..."'
       }
     ]
  },
  'l15': {
     title: 'Der Tatort',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Der Tatort – so heißt die älteste, noch immer bestehende Krimiserie und zugleich eine der größten TV-Erfolgsgeschichten im deutschsprachigen Fernsehen. Millionen Zuschauer in Deutschland, Österreich und in der Schweiz sehen am Sonntagabend die neueste Folge. Aber auch die alten Fälle kommen immer wieder ins Programm, sodass man inzwischen fast jeden Tag Tatort sehen kann. Manche Gaststätten und Kneipen organisieren am Sonntagabend sogar ein Tatort-Public Viewing. Und wer den neuen Tatort am Sonntag nicht gesehen hat, findet ihn danach noch sieben Tage lang im Internet: in der ARD-Mediathek.",
       "Was macht diesen Fernsehkrimi eigentlich so besonders? Ganz einfach: Die Zuschauer suchen Abwechslung, und der Tatort gibt sie ihnen. Er spielt in verschiedenen Städten und Regionen, und jeder Ort hat seine eigenen Hauptdarsteller. So begegnet man zum Beispiel in Niedersachsen der kühlen Kommissarin Charlotte Lindholm aus Hannover, in Österreich dem einsamen Inspektor Moritz Eisner aus Wien, in Kiel dem brummigen Kommissar Borowski. Wer möchte, kann seinen Freunden auch Tatort-Sendungen mit seinem Lieblingsdarsteller kaufen und sie ihnen einfach als DVD-Box schenken.",
       "Fakten: Den Tatort gibt es seit 1970. Er ist eine Produktion der ARD, besser bekannt als Erstes Deutsches Fernsehen oder einfach: Das Erste. Das ist die Gemeinschaft von neun regionalen öffentlich-rechtlichen Sendern in Deutschland. „Öffentlich-rechtlich“ bedeutet, dass es keine Privatsender sind. Auch das Schweizer Fernsehen (SF) und der Österreichische Rundfunk (ORF) produzieren Tatort-Sendungen. Früher wurde nur eine Folge pro Monat gedreht, heute sind es durchschnittlich drei. Mit 90 Minuten hat der Tatort Spielfilmlänge. Die Produktionskosten liegen bei knapp über einer Million Euro pro Folge."
     ],
     questions: [
       {
         id: 1,
         question: "Wann wird die neueste Folge vom Tatort im Fernsehen gezeigt?",
         options: [
           "Am Samstagabend",
           "Am Sonntagabend",
           "Fast jeden Tag",
           "Einmal pro Monat"
         ],
         correct: 1,
         explanation: "Im Text steht: '...sehen am Sonntagabend die neueste Folge.'"
       },
       {
         id: 2,
         question: "Wo kann man die neue Folge sehen, wenn man sie am Sonntag verpasst hat?",
         options: [
           "Nur auf DVD.",
           "Man kann sie nicht mehr sehen.",
           "Sieben Tage lang in der ARD-Mediathek im Internet.",
           "In einer Kneipe."
         ],
         correct: 2,
         explanation: "Im Text steht: '...findet ihn danach noch sieben Tage lang im Internet: in der ARD-Mediathek.'"
       },
       {
         id: 3,
         question: "Warum finden viele Zuschauer den Tatort besonders gut?",
         options: [
           "Er ist die älteste Krimiserie.",
           "Weil es keine Privatsender gibt.",
           "Weil er in verschiedenen Städten spielt und Kommissare wechselt.",
           "Weil es immer ein Public Viewing gibt."
         ],
         correct: 2,
         explanation: "Im Text steht: 'Die Zuschauer suchen Abwechslung, und der Tatort gibt sie ihnen. Er spielt in verschiedenen Städten...'"
       },
       {
         id: 4,
         question: "Seit wann gibt es die Krimiserie Tatort?",
         options: [
           "Seit einem Monat",
           "Seit 1970",
           "Seit 90 Minuten",
           "Das steht nicht im Text."
         ],
         correct: 1,
         explanation: "Unter 'Fakten' steht: 'Den Tatort gibt es seit 1970.'"
       },
       {
         id: 5,
         question: "Was bedeutet „öffentlich-rechtlich“?",
         options: [
           "Dass es eine DVD-Box ist.",
           "Dass es eine Produktion für das Internet ist.",
           "Dass die Serie Spielfilmlänge hat.",
           "Dass es keine Privatsender sind."
         ],
         correct: 3,
         explanation: "Im Text steht: '„Öffentlich-rechtlich“ bedeutet, dass es keine Privatsender sind.'"
       },
       {
         id: 6,
         question: "Wie viele Folgen werden heute im Durchschnitt pro Monat gedreht?",
         options: [
           "Eine Folge",
           "Drei Folgen",
           "Sieben Folgen",
           "Neun Folgen"
         ],
         correct: 1,
         explanation: "Im Text steht: 'Früher wurde nur eine Folge pro Monat gedreht, heute sind es durchschnittlich drei.'"
       }
     ]
  },
  'l16': {
     title: 'Berufsporträt: Hotelfachfrau – ein spannender Beruf',
     instruction: 'Lesen Sie den Text und die Aufgaben genau und kreuzen Sie dann an: richtig oder falsch?',
     text: [
       "An der Rezeption des Hotels „Post“ ist gerade ziemlich viel los. Gäste kommen an oder reisen ab, manche haben Fragen, andere wollen nur ihren Zimmerschlüssel. An der Rezeption steht Janine Preising. Sie ist im 2. Jahr ihrer Ausbildung zur Hotelfachfrau. Sie muss noch ein Jahr lernen. Die 22-Jährige kümmert sich um alles: Sie füllt Formulare aus, beantwortet Fragen, telefoniert mit Kunden, reserviert und gibt den Gästen ihre Zimmerschlüssel.",
       "Manchmal beschweren sich auch Gäste. Dann muss Janine richtig reagieren. Sie meint: „Am allerwichtigsten ist, dass man immer freundlich bleibt, auch wenn es mal Ärger gibt.“",
       "Aber Janine arbeitet nicht nur an der Rezeption, sondern auch im Büro oder in der Küche. Sie bereitet die Gästezimmer vor, arbeitet im Service des Hotelrestaurants, kümmert sich um das Frühstücksbuffet oder organisiert Konferenzen. Janine sagt: „Die Arbeit ist vielleicht manchmal stressig, aber mein Beruf macht mir total viel Spaß.“"
     ],
     questions: [
       {
         id: 1,
         question: "Im Moment gibt es nicht viel Arbeit an der Rezeption.",
         options: ["Richtig", "Falsch"],
         correct: 1,
         explanation: "Falsch. Im Text steht: 'An der Rezeption des Hotels „Post“ ist gerade ziemlich viel los.'"
       },
       {
         id: 2,
         question: "Janines Ausbildung dauert noch zwei Jahre.",
         options: ["Richtig", "Falsch"],
         correct: 1,
         explanation: "Falsch. Sie ist im 2. Jahr ihrer Ausbildung und 'muss noch ein Jahr lernen'."
       },
       {
         id: 3,
         question: "Janine kümmert sich um die verschiedenen Wünsche von den Gästen an der Rezeption.",
         options: ["Richtig", "Falsch"],
         correct: 0,
         explanation: "Richtig. Im Text steht: 'Die 22-Jährige kümmert sich um alles: Sie füllt Formulare aus, beantwortet Fragen...'"
       },
       {
         id: 4,
         question: "Janine ärgert sich oft, wenn sich die Gäste beschweren.",
         options: ["Richtig", "Falsch"],
         correct: 1,
         explanation: "Falsch. Sie meint: 'Am allerwichtigsten ist, dass man immer freundlich bleibt, auch wenn es mal Ärger gibt.'"
       },
       {
         id: 5,
         question: "Janine arbeitet fast überall im Hotel.",
         options: ["Richtig", "Falsch"],
         correct: 0,
         explanation: "Richtig. Sie arbeitet an der Rezeption, im Büro, in der Küche, bereitet Gästezimmer vor, arbeitet im Restaurant usw."
       },
       {
         id: 6,
         question: "Die Arbeit im Hotel gefällt Janine.",
         options: ["Richtig", "Falsch"],
         correct: 0,
         explanation: "Richtig. Janine sagt: '...mein Beruf macht mir total viel Spaß.'"
       }
     ]
  },
  'l17': {
     title: 'Urlaub an der Ostsee',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Familie Müller plant ihren Sommerurlaub. Dieses Jahr wollen sie nicht in den Süden fliegen, sondern in Deutschland bleiben. Sie haben ein Ferienhaus an der Ostsee gemietet. Das Ferienhaus liegt direkt am Strand und hat einen großen Garten für den Hund.",
       "„Wir fahren mit dem Auto“, sagt Herr Müller. „Das ist am praktischsten. Da können wir alle unsere Sachen und auch Fahrräder mitnehmen. Am Meer wollen wir nämlich oft Fahrradtouren machen.“",
       "Aber die Autobahn ist verstopft. Es gibt einen Stau wegen einer Baustelle. Die Familie verliert zwei Stunden auf der Autobahn. Endlich kommen sie an. Aber wo ist der Schlüssel für das Ferienhaus? Frau Müller sucht in ihrer Handtasche: „Oh nein, ich glaube, der Schlüssel liegt noch zu Hause auf dem Küchentisch!“ Glücklicherweise wohnt der Vermieter gleich im Nachbarhaus und hat noch einen Ersatzschlüssel."
     ],
     questions: [
       {
         id: 1,
         question: "Wo macht Familie Müller dieses Jahr Urlaub?",
         options: ["Im Süden", "Auf dem Land", "An der Ostsee", "Am Bodensee"],
         correct: 2,
         explanation: "Im Text steht: 'Sie haben ein Ferienhaus an der Ostsee gemietet.'"
       },
       {
         id: 2,
         question: "Wie fährt die Familie in den Urlaub?",
         options: ["Mit dem Zug", "Mit dem Flugzeug", "Mit dem Bus", "Mit dem Auto"],
         correct: 3,
         explanation: "Herr Müller sagt: 'Wir fahren mit dem Auto.'"
       },
       {
         id: 3,
         question: "Warum gibt es einen Stau auf der Autobahn?",
         options: ["Wegen eines Unfalls", "Wegen einer Baustelle", "Weil viele Leute in den Süden fahren", "Weil das Meer so schön ist"],
         correct: 1,
         explanation: "Im Text steht: 'Es gibt einen Stau wegen einer Baustelle.'"
       },
       {
         id: 4,
         question: "Was hat Frau Müller zu Hause vergessen?",
         options: ["Die Handtasche", "Den Hund", "Ihren Mann", "Den Hausschlüssel"],
         correct: 3,
         explanation: "Sie sagt: 'der Schlüssel liegt noch zu Hause auf dem Küchentisch.'"
       },
       {
         id: 5,
         question: "Wie kommen sie in das Ferienhaus?",
         options: ["Sie brechen die Tür auf.", "Sie schlafen im Auto.", "Der Vermieter gibt ihnen einen Ersatzschlüssel.", "Sie fahren wieder nach Hause."],
         correct: 2,
         explanation: "Im Text steht: 'Glücklicherweise wohnt der Vermieter gleich im Nachbarhaus und hat noch einen Ersatzschlüssel.'"
       }
     ]
  },
  'l18': {
     title: 'Literatur: Alte Freunde, Neue Freunde - Teil 2',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "„Wisst ihr was?“, fragt Mara. „Wir rufen Diogo an und laden ihn zur Ausstellung ein.“",
       "„Die ist aber schon in drei Tagen. Und Diogo ist in Brasilien“, sagt Max. „Das schafft er schon noch. Ina würde sich sehr freuen.“",
       "Es ist der Tag nach Weihnachten. Mara, Max, Ralf und Bernd sitzen im Wohnzimmer. Ina ist nicht da, sie bereitet ihre Ausstellung vor.",
       "„Vielleicht will Diogo gar nicht kommen“, meint Bernd. „Das sehen wir dann schon. Jetzt rufen wir ihn erst mal an. Wer hat seine Nummer?“ „Ich nicht.“ „Ich auch nicht ...“",
       "„Ich habe Diogo als Skype-Kontakt“, sagt Bernd. „Hoffentlich ist er gerade online.“ Er macht sein Notebook an. „Ja, Glück gehabt. Ich rufe ihn gleich an.“",
       "Man sieht Diogo auf dem Bildschirm. „Hallo Diogo ... Frohe Weihnachten!“, sagt Bernd.",
       "„Hallo, schön, dass ihr mich anruft! Euch auch frohe Weihnachten! Wartet mal ... eins, zwei, drei, vier ... ich kann Ina nicht sehen.“ „Sie ist nicht hier. ... Schade.“",
       "„Wir rufen aber wegen Ina an“, sagt Ralf. „Sie hat eine große Ausstellung hier in Dresden.“",
       "„Ja, sie hat mir davon geschrieben. Finde ich toll!“ „Ina würde sich sehr freuen, wenn du auch zur Ausstellung kommst.“",
       "„Sie hat mir nichts gesagt ...“ „Aber uns. Sie redet dauernd von dir.“ „Es wäre natürlich toll, wenn ich Ina wiedersehe ...“",
       "„Ich schaue gleich im Internet nach, ob es noch einen Flug gibt“, sagt Bernd. „Ja, hier: Du kommst damit um 17 Uhr in Dresden an. Um 19 Uhr beginnt die Ausstellung. Ich schicke dir den Link.“",
       "Diogo sieht sich den Flug an. „Ja, das würde gehen. Aber ich weiß nicht ...“ „Ina würde sich wirklich freuen ...“ „Hmm ... also gut, ich mache es.“",
       "„Toll! Aber kein Wort zu Ina“, sagt Mara. „Das ist eine Überraschung. Und nimm dir warme Kleidung mit.“",
       "„Warum? Ist es kalt bei euch?“ „Fünf Grad minus. Und es schneit.“",
       "„Oh ... Bei uns scheint die Sonne. Ich sitze im T-Shirt im Garten. ... Wollen wir es nicht andersrum machen? Diogo bleibt in Brasilien und wir alle besuchen ihn.“",
       "„Gute Idee!“ Bernd lacht. „Buchen wir gleich den Flug ...“ „Welchen Flug wollt ihr buchen?“ Ina ist zurückgekommen."
     ],
     questions: [
       {
         id: 1,
         question: "Warum rufen Maras Freunde Diogo an?",
         options: ["Um ihm „Frohe Weihnachten“ zu wünschen.", "Weil Ina eine Ausstellung hat und sie ihn einladen wollen.", "Weil sie nach Brasilien fliegen wollen.", "Weil sie Inas Nummer brauchen."],
         correct: 1,
         explanation: "Ralf sagt zu Diogo: „Wir rufen aber wegen Ina an. Sie hat eine große Ausstellung hier in Dresden.“"
       },
       {
         id: 2,
         question: "Wo ist Diogo gerade?",
         options: ["In Dresden", "Im Wohnzimmer", "In Brasilien", "Im Flugzeug"],
         correct: 2,
         explanation: "Max sagt: „Und Diogo ist in Brasilien“. Diogo sagt später, dass bei ihm die Sonne scheint und er im Garten sitzt."
       },
       {
         id: 3,
         question: "Weiß Ina von der Einladung?",
         options: ["Ja, sie hat Diogo selbst eingeladen.", "Nein, es soll eine Überraschung sein.", "Ja, aber sie freut sich nicht darüber.", "Nein, Diogo wird ihr sofort davon erzählen."],
         correct: 1,
         explanation: "Mara sagt zu Diogo: „Aber kein Wort zu Ina. Das ist eine Überraschung.“"
       },
       {
         id: 4,
         question: "Wie ist das Wetter in Dresden?",
         options: ["Die Sonne scheint und es ist warm.", "Es regnet viel.", "Es hat fünf Grad minus und es schneit.", "Das Wetter ist wie in Brasilien."],
         correct: 2,
         explanation: "Auf Diogos Frage sagen sie: „Fünf Grad minus. Und es schneit.“"
       },
       {
         id: 5,
         question: "Wer bucht am Ende den Flug?",
         options: ["Bernd sucht einen Flug für Diogo im Internet.", "Max bucht einen Flug für alle nach Brasilien.", "Ina hat schon einen Flug gebucht.", "Niemand bucht einen Flug, sie rufen Diogo nur an."],
         correct: 0,
         explanation: "Bernd schaut im Internet nach und sagt: „Ja, hier: Du kommst damit um 17 Uhr in Dresden an...“"
       }
     ]
  },
  'l19': {
     title: 'Kulturprogramm für das Wochenende',
     instruction: 'Lesen Sie die E-Mail und beantworten Sie die Fragen.',
     text: [
       "Liebe Sarah,",
       "wie geht es dir? Ich hoffe, du hattest eine gute Woche. Ich komme gerade aus dem Büro und freue mich schon auf das Wochenende. Hast du am Samstagabend schon etwas vor? Wenn nicht, wollen wir zusammen ausgehen?",
       "Im Stadtzentrum gibt es ein neues Kulturzentrum. Dort gibt es am Samstagabend eine interessante Veranstaltung. Um 19 Uhr beginnt eine Fotoausstellung über Südamerika, und danach um 20:30 Uhr gibt es ein Konzert von einer argentinischen Band. Sie spielen Tango und Folklore.",
       "Ich weiß, dass du dich sehr für Fotografie interessierst, und ich liebe Live-Musik. Ich glaube, das wäre perfekt für uns beide! Die Eintrittskarten kosten nur 15 Euro für den ganzen Abend.",
       "Sollen wir uns um 18:30 Uhr vor dem Zentrum treffen? Dann können wir vor der Ausstellung noch einen Kaffee trinken.",
       "Bitte sag mir bis morgen Bescheid, ob du Zeit hast. Dann reserviere ich die Karten.",
       "Liebe Grüße",
       "Dein Felix"
     ],
     questions: [
       {
         id: 1,
         question: "Woher kommt Felix, als er die E-Mail schreibt?",
         options: ["Aus dem Kulturzentrum.", "Aus dem Büro.", "Aus Südamerika.", "Aus dem Café."],
         correct: 1,
         explanation: "Im Text steht: 'Ich komme gerade aus dem Büro...'"
       },
       {
         id: 2,
         question: "Was gibt es am Samstagabend um 19 Uhr?",
         options: ["Ein Konzert.", "Einen Kaffee.", "Eine Fotoausstellung.", "Einen Film."],
         correct: 2,
         explanation: "Im Text steht: 'Um 19 Uhr beginnt eine Fotoausstellung...'"
       },
       {
         id: 3,
         question: "Warum denkt Felix, dass Sarah das Programm gefällt?",
         options: ["Weil sie aus Argentinien kommt.", "Weil sie gerne Kaffee trinkt.", "Weil sie sich für Fotografie interessiert.", "Weil sie selbst in einer Band spielt."],
         correct: 2,
         explanation: "Im Text steht: 'Ich weiß, dass du dich sehr für Fotografie interessierst...'"
       },
       {
         id: 4,
         question: "Was wollen Felix und Sarah vor der Ausstellung machen?",
         options: ["Tickets kaufen.", "Zusammen essen.", "Einen Kaffee trinken.", "Live-Musik hören."],
         correct: 2,
         explanation: "Felix schreibt: 'Sollen wir uns um 18:30 Uhr vor dem Zentrum treffen? Dann können wir vor der Ausstellung noch einen Kaffee trinken.'"
       },
       {
         id: 5,
         question: "Bis wann muss Sarah antworten?",
         options: ["Bis heute Abend.", "Bis morgen.", "Bis Samstag.", "Bis nächste Woche."],
         correct: 1,
         explanation: "Im Text steht: 'Bitte sag mir bis morgen Bescheid, ob du Zeit hast.'"
       }
     ]
  },
  'l20': {
     title: 'Lesegewohnheiten der Deutschen',
     instruction: 'Lesen Sie den Zeitungsartikel und beantworten Sie die Fragen.',
     text: [
       "Lesen die Deutschen noch Bücher, oder sitzen sie nur noch vor dem Computer oder Handy? Eine neue Umfrage des Instituts für Meinungsforschung zeigt: Das Buch ist noch nicht tot! Etwa 40 Prozent der Deutschen lesen mindestens einmal pro Woche in einem Buch, 20 Prozent sogar täglich.",
       "Aber was lesen sie am liebsten? Bei den Erwachsenen stehen Romane – besonders Krimis und Thriller – ganz oben auf der Liste. Etwa jeder zweite Leser greift gerne zu spannenden Geschichten. Auch Sachbücher und Ratgeber (zum Thema Gesundheit, Kochen oder Garten) sind sehr beliebt.",
       "Und wie steht es mit elektronischen Büchern, den E-Books? Immer mehr Menschen, besonders junge Erwachsene, lesen digital. Der Vorteil: Auf einem kleinen E-Reader kann man Hunderte Bücher mit in den Urlaub nehmen. Dennoch bevorzugt die Mehrheit der Deutschen (über 60 Prozent) das klassische gedruckte Buch aus Papier.",
       "Ein interessantes Detail der Umfrage: Frauen lesen im Durchschnitt mehr als Männer. Frauen lesen oft Romane zur Entspannung, während Männer eher zu Sachbüchern und Zeitungen greifen.",
       "Wo lesen die Leute am meisten? Der Lieblingsort zum Lesen ist ganz klar: das Bett (vor dem Einschlafen). Aber auch auf dem Sofa, im Zug oder am Strand wird viel gelesen."
     ],
     questions: [
       {
         id: 1,
         question: "Wie oft liest jeder fünfte (20%) Deutsche in einem Buch?",
         options: ["Einmal im Jahr.", "Einmal pro Woche.", "Täglich.", "Nie."],
         correct: 2,
         explanation: "Im Text steht: '...20 Prozent sogar täglich.'"
       },
       {
         id: 2,
         question: "Welches Genre lesen Erwachsene am liebsten?",
         options: ["Comics und Mangas", "Krimis und Thriller", "Märchen", "Gedichte"],
         correct: 1,
         explanation: "Im Text steht: 'Bei den Erwachsenen stehen Romane – besonders Krimis und Thriller – ganz oben auf der Liste.'"
       },
       {
         id: 3,
         question: "Welchen Vorteil hat ein E-Reader nach dem Text?",
         options: ["Die Bücher sind kostenlos.", "Es kostet keinen Strom.", "Man kann viele Bücher mit in den Urlaub nehmen.", "Es ist besser für die Augen."],
         correct: 2,
         explanation: "Im Text steht: 'Der Vorteil: Auf einem kleinen E-Reader kann man Hunderte Bücher mit in den Urlaub nehmen.'"
       },
       {
         id: 4,
         question: "Wer liest mehr, Männer oder Frauen?",
         options: ["Männer lesen mehr.", "Frauen lesen mehr.", "Sie lesen gleich viel.", "Die Umfrage sagt dazu nichts."],
         correct: 1,
         explanation: "Im Text steht: 'Frauen lesen im Durchschnitt mehr als Männer.'"
       },
       {
         id: 5,
         question: "Wo ist der absolute Lieblingsort zum Lesen?",
         options: ["Auf dem Sofa.", "Im Zug.", "Am Strand.", "Im Bett."],
         correct: 3,
         explanation: "Im Text steht: 'Der Lieblingsort zum Lesen ist ganz klar: das Bett (vor dem Einschlafen).'"
       }
     ]
  },
  'l21': {
     title: 'Hilfe, mein Portemonnaie ist weg!',
     instruction: 'Lesen Sie den Erfahrungsbericht und beantworten Sie die Fragen.',
     text: [
       "Gestern war ein furchtbarer Tag für Lisa. Sie war nach der Arbeit noch im Supermarkt einkaufen. An der Kasse wollte sie bezahlen, griff in ihre Handtasche – aber ihr Portemonnaie war nicht da! Lisa war geschockt. Hatte sie es verloren? Oder wurde es gestohlen?",
       "Zuerst ging sie den ganzen Weg zum Büro zurück und suchte auf der Straße, aber da war nichts. Dann fragte sie in ihrem Bürogebäude beim Pförtner, aber niemand hatte etwas abgegeben.",
       "Lisa ging zur Polizei und machte eine Anzeige wegen Diebstahls. „Im Portemonnaie waren 100 Euro, mein Personalausweis, mein Führerschein und meine Kreditkarte“, erzählte sie dem Polizisten. Der Polizist riet ihr: „Sie müssen sofort Ihre EC-Karte und Ihre Kreditkarte sperren lassen, damit niemand Geld von Ihrem Konto abheben kann!“ Das machte Lisa sofort per Telefon.",
       "Heute Morgen klingelte dann Lisas Telefon. Es war das städtische Fundbüro. Ein ehrlicher Finder hatte Lisas Portemonnaie auf der Straße gefunden und dort abgegeben.",
       "Lisa fuhr schnell zum Fundbüro. Das Geld (die 100 Euro) war leider weg. Aber das Wichtigste: Der Personalausweis, der Führerschein und alle anderen Karten waren noch da! Lisa war so froh, dass sie keine neuen Papiere beantragen musste."
     ],
     questions: [
       {
         id: 1,
         question: "Wann merkte Lisa, dass ihr Portemonnaie weg war?",
         options: ["Im Büro.", "An der Kasse im Supermarkt.", "Auf der Straße.", "Bei der Polizei."],
         correct: 1,
         explanation: "Im Text steht: 'An der Kasse wollte sie bezahlen, griff in ihre Handtasche – aber ihr Portemonnaie war nicht da!'"
       },
       {
         id: 2,
         question: "Was machte Lisa, nachdem sie im Büro gesucht hatte?",
         options: ["Sie ging nach Hause.", "Sie rief ihre Bank an.", "Sie ging zur Polizei und machte eine Anzeige.", "Sie kaufte trotzdem ein."],
         correct: 2,
         explanation: "Im Text steht: 'Lisa ging zur Polizei und machte eine Anzeige wegen Diebstahls.'"
       },
       {
         id: 3,
         question: "Welchen Rat gab der Polizist?",
         options: ["Sie soll nach Hause gehen und schlafen.", "Sie soll einen neuen Ausweis beantragen.", "Sie soll ihre Karten sofort sperren lassen.", "Sie soll im Fundbüro suchen."],
         correct: 2,
         explanation: "Der Polizist riet ihr: „Sie müssen sofort Ihre EC-Karte und Ihre Kreditkarte sperren lassen...“"
       },
       {
         id: 4,
         question: "Wer rief Lisa am nächsten Morgen an?",
         options: ["Der Supermarkt.", "Der Polizist.", "Das Fundbüro.", "Der Finder."],
         correct: 2,
         explanation: "Im Text steht: 'Heute Morgen klingelte dann Lisas Telefon. Es war das städtische Fundbüro.'"
       },
       {
         id: 5,
         question: "Was fehlte am Ende im Portemonnaie?",
         options: ["Nichts fehlte.", "Der Führerschein.", "Der Personalausweis.", "Das Geld (100 Euro)."],
         correct: 3,
         explanation: "Im Text steht: 'Das Geld (die 100 Euro) war leider weg. Aber das Wichtigste: Der Personalausweis... waren noch da!'"
       }
     ]
  },
  'l22': {
     title: 'Alte Freunde, Neue Freunde - Teil 3: Polizei! Polizei!',
     instruction: 'Lesen Sie den Text und beantworten Sie die Fragen.',
     text: [
       "Der große Tag ist da. In drei Stunden ist die Vernissage von Inas Ausstellung. Die Freunde kommen in die Galerie.",
       "„Wow, die Bilder sind toll!“, sagt Max. „Die muss ich mir gleich alle ansehen.“",
       "Bernd macht sein Notebook an.",
       "„Ach komm, Bernd, einmal kannst du auch ohne Internet leben. Schau dir doch zuerst mal meine Bilder an“, sagt Ina.",
       "„Ja, gleich, ich muss nur zuerst noch etwas Wichtiges nachsehen.“",
       "„Ach was ...“ Ina geht weg.",
       "„Alles gut“, sagt Bernd. „Ich habe gerade nach Diogos Flug geschaut. Es gibt keine Probleme, in einer Stunde kommt er in Dresden an.“",
       "Ein bisschen später kommt Ina zurück.",
       "„Es ist etwas Schlimmes passiert. Ein Bild fehlt.“",
       "„Es fehlt?“, fragt Ralf. „Was meinst du damit?“",
       "„Gestern war es noch an seinem Platz. Jetzt ist es weg ... Was sollen wir machen?“",
       "„Das Beste ist, wir rufen die Polizei“, sagt Mara. „Ein Einbrecher war im Haus!“",
       "„Ja, aber ... warum hat er dann nur ein Bild gestohlen?“",
       "„Wartet lieber mit der Polizei. Vielleicht finden wir das Bild ja noch“, sagt Ralf.",
       "„Ich glaube nicht, dass wir es finden. Aber gut, gehen wir einmal gemeinsam durch die Räume“, sagt Ina.",
       "Nichts. Kein Bild.",
       "„Nur noch ein Raum ... Und da ist es sicher auch nicht. Wir müssen die Polizei rufen.“ Sie nimmt ihr Handy heraus.",
       "Sie gehen in den letzten Raum. Max sitzt auf einem Stuhl. Er hat ein großes Bild in der Hand und schaut es an.",
       "„Ich hab's mir ja gedacht!“, sagt Ralf.",
       "„Max, was machst du mit dem Bild? Wir haben es überall gesucht.“",
       "„Oh, Ina, du bist hier ... Was ist los? Gibt es ein Problem? ... Ina, das ist wirklich ein klasse Bild! Das könnte auch in einem ganz großen Museum hängen.“",
       "„Danke, Max, aber ...“",
       "„Nein, es ist wirklich toll. Kann ich es kaufen?“",
       "„Max, wenn dir das Bild so gut gefällt, schenke ich es dir.“",
       "„Wow, danke!“ Max lacht und umarmt Ina.",
       "„Aber jetzt häng das Bild bitte wieder an den richtigen Platz!“",
       "„Ja klar, gerne. Beginnt die Vernissage schon?“ Er sieht auf die Uhr. „Oh, Ralf, schnell, fahren wir. Sonst kommen wir zu spät.“"
     ],
     questions: [
       {
         id: 1,
         question: "Was macht Bernd am Anfang in der Galerie?",
         options: [
           "Er schaut sich die Bilder an.",
           "Er ruft die Polizei an.",
           "Er sieht im Internet nach Diogos Flug.",
           "Er kauft ein Bild."
         ],
         correct: 2,
         explanation: "Bernd macht sein Notebook an und sagt später: 'Ich habe gerade nach Diogos Flug geschaut.'"
       },
       {
         id: 2,
         question: "Was ist das Problem von Ina?",
         options: [
           "Ein Einbrecher ist im Haus.",
           "Sie hat ihr Handy verloren.",
           "Ein Bild fehlt.",
           "Diogo kommt zu spät."
         ],
         correct: 2,
         explanation: "Ina kommt zurück und sagt: 'Es ist etwas Schlimmes passiert. Ein Bild fehlt.'"
       },
       {
         id: 3,
         question: "Wer möchte sofort die Polizei rufen?",
         options: [
           "Ralf",
           "Mara",
           "Max",
           "Bernd"
         ],
         correct: 1,
         explanation: "Mara sagt: 'Das Beste ist, wir rufen die Polizei.'"
       },
       {
         id: 4,
         question: "Wo ist das Bild?",
         options: [
           "Ein Einbrecher hat es gestohlen.",
           "Es liegt draußen im Garten.",
           "Max schaut es sich im letzten Raum an.",
           "Diogo hat es mitgenommen."
         ],
         correct: 2,
         explanation: "Im letzten Raum finden sie Max mit dem Bild in der Hand."
       },
       {
         id: 5,
         question: "Was passiert am Ende mit dem Bild?",
         options: [
           "Ina verkauft es an Max.",
           "Ina schenkt es Max.",
           "Die Polizei nimmt es mit.",
           "Mara hängt es an die Wand."
         ],
         correct: 1,
         explanation: "Ina sagt: 'Max, wenn dir das Bild so gut gefällt, schenke ich es dir.'"
       }
     ]
  },
  'l23': {
     title: 'Liebe die Arbeit, die du machst!',
     instruction: 'Lesen Sie den Text und kreuzen Sie an: Richtig oder falsch?',
     text: [
       "Ein Mensch, der nicht weiß, was er will – so einer war auch Mark Brügge. Nach dem Abitur hat er ein Medizinstudium angefangen, hat schon nach einem Semester wieder aufgehört, hat eine Lehre als Elektroinstallateur begonnen und ist drei Monate nach Ausbildungsbeginn an die Universität zurückgegangen. Aber auch das Jurastudium war 'nicht sein Ding', also hat er wieder etwas Neues ausprobiert, bis er irgendwann sicher war: „Den Beruf, der zu mir passt, finde ich nie.“",
       "Doch dann trifft er einen alten Mann, der schon 40 Jahre als Schreiner arbeitet, und der ihm einen wichtigen Rat gibt: „Vergiss all die Jobs, die du machen könntest und liebe die Arbeit, die du machst.“",
       "Mark Brügge hat auf den alten Mann gehört und ist nun schon seit vielen Jahren ein zufriedener Landschaftsgärtner. Für junge Leute, die heute von der Schule kommen und nicht wissen, welche Ausbildung sie machen sollen, hat Mark Brügge dieses Buch geschrieben. Es heißt „Liebe die Arbeit, die du machst!“ und ist voll mit guten Tipps, wie man Probleme bei der Berufswahl und in der Ausbildung lösen kann."
     ],
     questions: [
       {
         id: 1,
         question: "Nach dem Abitur hat Mark Brügge ein Semester Medizin studiert.",
         options: [
           "Richtig",
           "Falsch"
         ],
         correct: 0,
         explanation: "Im Text steht: 'Nach dem Abitur hat er ein Medizinstudium angefangen, hat schon nach einem Semester wieder aufgehört...'"
       },
       {
         id: 2,
         question: "Danach hat er eine Lehre als Elektroinstallateur abgeschlossen.",
         options: [
           "Richtig",
           "Falsch"
         ],
         correct: 1,
         explanation: "Falsch, er hat die Lehre angefangen, ist aber 'drei Monate nach Ausbildungsbeginn an die Universität zurückgegangen'."
       },
       {
         id: 3,
         question: "Das Jurastudium hat ihm besonders gut gefallen.",
         options: [
           "Richtig",
           "Falsch"
         ],
         correct: 1,
         explanation: "Falsch, im Text steht: 'Aber auch das Jurastudium war \"nicht sein Ding\"...'"
       },
       {
         id: 4,
         question: "Mark Brügge hat auch ein paar Jahre als Schreiner gearbeitet.",
         options: [
           "Richtig",
           "Falsch"
         ],
         correct: 1,
         explanation: "Falsch, der alte Mann, den er getroffen hat, arbeitet schon 40 Jahre als Schreiner, nicht Mark selbst."
       },
       {
         id: 5,
         question: "Heute ist er Landschaftsgärtner und liebt seine Arbeit.",
         options: [
           "Richtig",
           "Falsch"
         ],
         correct: 0,
         explanation: "Richtig, im Text steht: 'Mark Brügge hat auf den alten Mann gehört und ist nun schon seit vielen Jahren ein zufriedener Landschaftsgärtner.'"
       },
       {
         id: 6,
         question: "Das Buch soll jungen Menschen bei der Berufswahl helfen.",
         options: [
           "Richtig",
           "Falsch"
         ],
         correct: 0,
         explanation: "Richtig, das Buch ist für junge Leute, 'die heute von der Schule kommen und nicht wissen, welche Ausbildung sie machen sollen...'"
       }
     ]
  },
  'l24': {
     title: 'Arzt – ein Traumberuf?',
     instruction: 'Lesen Sie den Artikel und beantworten Sie die Fragen.',
     text: [
       "Sie wollen Arzt werden? Sie träumen von einem sorgenfreien Leben mit Familie? Und von einer ruhigen Praxis im Stadtzentrum? Alles möglich. Doch bis es so weit ist, stellen Sie sich auf unruhige Wanderjahre ein. Denn der Beruf verlangt viel Flexibilität. Von der ganzen Familie.",
       "Kai Ebel ist 19, als er zum ersten Mal umzieht. Gleich nach dem Abitur zieht er zum Medizinstudium von Bremen nach Berlin. Dort lernt er seine spätere Frau Karin kennen, die in Berlin eine Ausbildung zur Physiotherapeutin macht. Gemeinsam verbringen sie ein Auslandssemester in Australien, dann das Praktische Jahr in England. Drei Umzüge hat Kai Ebel bereits hinter sich, als er eine Familie gründet.",
       "„Als unser erstes Kind auf die Welt kam, sind wir nach München gezogen“, erzählt Herr Ebel, „denn dort bekam ich eine Stelle als Assistenzarzt. Doch ich wollte nicht ewig Assistenzarzt bleiben, also musste ich mich bald wieder bewerben.“",
       "Herr Ebel bewirbt sich um eine Stelle in Wittenberg und hat Glück. Kurz darauf unterschreibt er den Vertrag.",
       "„In Wittenberg kam unser zweites Kind auf die Welt“, berichtet er. „Doch bis wir einen Kindergarten- und einen Krippenplatz hatten, zog es mich schon wieder weiter. Ein Krankenhaus in Kassel bot mir eine Facharztstelle an. Da konnte ich nicht nein sagen.“",
       "Immerhin drei Jahre verbringt die Familie in Kassel. Erst als Herr Ebel von einer freien Oberarztstelle in Lübeck erfährt, bewirbt er sich wieder – mit Erfolg. Seine Frau erinnert sich: „Auch wenn der Verdienst besser war – anfangs war ich nicht gerade begeistert. Ich musste ja auch jedes Mal wieder von vorne anfangen. Erst wenn die Kinder untergebracht waren, konnte ich selbst Arbeit suchen. Da war meine Laune manchmal nicht die beste. Aber zum Glück sind Physiotherapeuten überall sehr gefragt.“",
       "Herr Ebel kündigt also seine Stelle und die Familie zieht weiter. Zum vierten Mal. Für Herrn Ebel selbst ist es bereits der siebte Umzug. Doch diesmal soll es der letzte sein.",
       "In Lübeck fühlt sich die Familie wohl. Sie wohnt in einem hübschen Einfamilienhaus in einem ruhigen Stadtviertel, etwas außerhalb vom Zentrum. Die Kinder haben wieder Freunde gefunden. Kai Ebel ist glücklich. Er hat einen Beruf, der ihm Spaß macht, eine Frau, die er liebt, und zwei Kinder, die bereits zur Schule gehen. Sein Einkommen stimmt. Er plant keinen Umzug mehr. Zumindest nicht in naher Zukunft. Obwohl – diese Chefarztstelle in der Schweiz reizt ihn schon ..."
     ],
     questions: [
       {
         id: 1,
         question: "Wohin ist Kai Ebel für sein Medizinstudium gezogen?",
         options: [
           "Nach Bremen",
           "Nach Berlin",
           "Nach München",
           "Nach Australien"
         ],
         correct: 1,
         explanation: "Im Text steht: 'Gleich nach dem Abitur zieht er zum Medizinstudium von Bremen nach Berlin.'"
       },
       {
         id: 2,
         question: "Welche Stelle hatte Kai Ebel in München?",
         options: [
           "Facharzt",
           "Oberarzt",
           "Chefarzt",
           "Assistenzarzt"
         ],
         correct: 3,
         explanation: "Er sagt im Text: '...denn dort bekam ich eine Stelle als Assistenzarzt.'"
       },
       {
         id: 3,
         question: "Was passierte in Wittenberg mit den Kindern?",
         options: [
           "Sie haben sofort einen Kindergartenplatz gefunden.",
           "Das erste Kind kam auf die Welt.",
           "Die Familie zog weg, bevor sie Betreuungsplätze hatten.",
           "Die Kinder gingen dort zur Schule."
         ],
         correct: 2,
         explanation: "Er berichtet: 'Doch bis wir einen Kindergarten- und einen Krippenplatz hatten, zog es mich schon wieder weiter.'"
       },
       {
         id: 4,
         question: "Wie lange hat Herr Ebel am Krankenhaus in Kassel gearbeitet?",
         options: [
           "Ein Jahr",
           "Zwei Jahre",
           "Drei Jahre",
           "Vier Jahre"
         ],
         correct: 2,
         explanation: "Im Text steht: 'Immerhin drei Jahre verbringt die Familie in Kassel.'"
       },
       {
         id: 5,
         question: "Arbeitet Frau Ebel, nachdem sie Mutter wurde, immer noch in ihrem Beruf?",
         options: [
           "Nein, sie ist nur noch Hausfrau.",
           "Ja, sie hat Arbeit als Physiotherapeutin gesucht und gefunden.",
           "Nein, sie macht jetzt eine andere Ausbildung.",
           "Ja, sie ist auch Ärztin geworden."
         ],
         correct: 1,
         explanation: "Sie sagt: 'Erst wenn die Kinder untergebracht waren, konnte ich selbst Arbeit suchen... Aber zum Glück sind Physiotherapeuten überall sehr gefragt.'"
       },
       {
         id: 6,
         question: "Möchte Kai Ebel bald wieder umziehen?",
         options: [
           "Ja, er möchte sofort in die Schweiz.",
           "Ja, er zieht nach Bremen zurück.",
           "Nein, er plant keinen Umzug mehr.",
           "Nein, er möchte ewig Assistenzarzt bleiben."
         ],
         correct: 2,
         explanation: "Im Text steht: 'Er plant keinen Umzug mehr. Zumindest nicht in naher Zukunft.'"
       }
     ]
  }
};

export default function ReadingPractice({ lessonId }: { lessonId: string }) {
  const content = LESSON_CONTENT[lessonId];
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <BookOpenText className="w-16 h-16 text-theme-dark/10" />
        <p className="font-bold text-theme-dark/40">Chưa có bài đọc hiểu cho bài học này.</p>
      </div>
    );
  }

  const handleSelect = (qId: number, optIdx: number) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  const score = Object.keys(answers).reduce((acc, qId) => {
    const q = content.questions.find((x: any) => x.id === Number(qId));
    if (q && answers[Number(qId)] === q.correct) return acc + 1;
    return acc;
  }, 0);

  const totalQuestions = content.questions.length;
  const isAllAnswered = Object.keys(answers).length === totalQuestions;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12 w-full px-2 md:px-0">
      
      {/* Header section */}
      <div className="text-center space-y-2 mb-8">
        <span className="px-6 py-2 bg-indigo-100 text-indigo-600 font-black uppercase tracking-widest rounded-full text-sm inline-flex items-center gap-2 mb-2">
          <BookOpenText size={18} /> Đọc Hiểu
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-black text-theme-dark">{content.title}</h2>
        <p className="font-bold text-theme-dark/60">{content.instruction}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Reading Text Panel */}
        <div className="bg-white rounded-[32px] p-6 text-base shadow-xl shadow-theme-dark/5 border-2 border-theme-dark/5">
          <div className="prose prose-p:leading-relaxed prose-p:mb-4 max-w-none text-theme-dark/80 font-medium">
            {content.text.map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Questions Panel */}
        <div className="space-y-6">
          {content.questions.map((q: any, i: number) => {
            const hasAnswered = answers[q.id] !== undefined;
            const isCorrect = isSubmitted && answers[q.id] === q.correct;
            const isWrong = isSubmitted && hasAnswered && answers[q.id] !== q.correct;

            return (
              <div 
                key={q.id} 
                className={`bg-white rounded-3xl p-6 shadow-sm border-2 transition-all ${
                  isCorrect ? 'border-emerald-500 bg-emerald-50/30' : 
                  isWrong ? 'border-rose-500 bg-rose-50/30' : 
                  'border-theme-dark/5'
                }`}
              >
                <h4 className="font-bold text-theme-dark mb-4 flex gap-2">
                  <span className="text-theme-dark/40">{i+1}.</span>
                  {q.question}
                </h4>
                <div className="space-y-2">
                  {q.options.map((opt: string, optIdx: number) => {
                    const isSelected = answers[q.id] === optIdx;
                    const showCorrect = isSubmitted && optIdx === q.correct;
                    const showWrong = isSubmitted && isSelected && !showCorrect;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(q.id, optIdx)}
                        disabled={isSubmitted}
                        className={`w-full text-left p-3 rounded-xl font-medium border text-sm transition-all flex items-center justify-between ${
                          showCorrect ? 'bg-emerald-100 border-emerald-500 text-emerald-800' :
                          showWrong ? 'bg-rose-100 border-rose-500 text-rose-800' :
                          isSelected ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-inner' :
                          'bg-zinc-50 border-zinc-200 text-theme-dark hover:bg-zinc-100 hover:border-zinc-300'
                        } ${isSubmitted ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <span>{opt}</span>
                        {showCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                        {showWrong && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                {isSubmitted && q.explanation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    className="mt-4 p-3 bg-white/60 rounded-xl border border-theme-dark/10 text-sm font-bold text-theme-dark/70"
                  >
                    💡 {q.explanation}
                  </motion.div>
                )}
              </div>
            );
          })}

          <div className="pt-4 flex justify-between items-center sticky bottom-4 z-10 bg-white/80 backdrop-blur pb-4 border-b">
            {!isSubmitted ? (
               <button
                 onClick={handleSubmit}
                 disabled={!isAllAnswered}
                 className="w-full py-4 bg-theme-primary text-white rounded-2xl font-black text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-theme-dark transition-colors shadow-lg shadow-theme-primary/20 flex justify-center items-center gap-2"
               >
                 Nộp Bài <ArrowRight size={20} />
               </button>
            ) : (
               <div className="w-full flex items-center justify-between bg-zinc-50 border-2 border-theme-dark/10 p-4 rounded-2xl shadow-sm">
                 <div className="font-black text-xl text-theme-dark">
                   Kết quả: <span className={score === totalQuestions ? 'text-emerald-500' : 'text-theme-primary'}>{score}/{totalQuestions}</span>
                 </div>
                 <button 
                   onClick={handleReset}
                   className="px-6 py-2 bg-theme-dark/5 hover:bg-theme-dark/10 text-theme-dark rounded-xl font-bold flex items-center gap-2 transition-colors"
                 >
                   <RotateCcw size={18} /> Làm lại
                 </button>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
