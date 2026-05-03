import { GoogleGenAI, Type } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    instruction: { type: Type.STRING },
    text: { type: Type.ARRAY, items: { type: Type.STRING } },
    questions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          question: { type: Type.STRING },
          options: { type: Type.ARRAY, items: { type: Type.STRING } },
          correctAnswer: { type: Type.INTEGER },
          explanation: { type: Type.STRING }
        },
        required: ["id", "question", "options", "correctAnswer", "explanation"]
      }
    }
  },
  required: ["title", "instruction", "text", "questions"]
};

const lektionThemes: Record<string, string> = {
  'l1': 'Peter schreibt eine E-Mail über seinen Opa, der 40 Jahre lang Bäcker war. Er ist immer um 3 Uhr früh aufgestanden.',
  'l2': 'Informationen / Stockwerke in einem Baumarkt (Untergeschoss, Erdgeschoss, 1. Stock etc.) oder Herr Fischers unordentliches Büro.',
  'l3': 'Ein Ausflug mit Freunden oder dem Deutschkurs: Wandern in den Bergen, Zelten oder Urlaub an der Ostsee.',
  'l4': 'Einkaufen auf dem Markt: Lebensmittel, Käse, Obst, Was darf es sein?',
  'l5': 'Zusammenfassung einer Stadtbesichtigung, Postkarte aus Wien oder Köln. Sehenswürdigkeiten, Burgtheater etc.',
  'l6': 'Veranstaltungstipps in der Stadt: Tanzparty, Kunst der Moderne, Stadtmuseum.',
  'l7': 'Vereinssport, Fitness: Programm eines Turn- und Sportvereins (Alster). Verschiedene Sportangebote.',
  'l8': 'Situation beim Arzt oder im Krankenhaus. Symptome, Wartezeit, Ratschläge.',
  'l9': 'Arbeitswelt: Willkommen in einer Autofabrik. Produktion von Wagen, Export in andere Länder.',
  'l10': 'Gästebuch oder Kritik zu einem Restaurant (z.B. "Seeblick"). Essen war gut/schlecht, laut, Portionen etc.',
  'l11': 'Job-Forum oder Glückwünsche zum Job / Jubiläum. Jemand schreibt über seinen Traumjob.',
  'l12': 'Essgewohnheiten der Deutschen: Wenn es warm ist, essen wir Salat. Wetter und Ernährung.',
  'l13': 'Erfahrungsbericht: Ein freiwilliges soziales Jahr in Brasilien. Neue Sprachen lernen, sich einleben.',
  'l14': 'Pakete und Post. Stress vor Weihnachten, Pakete verschicken.',
  'l15': 'Fernsehen früher und heute. Sender, Mediathek, oder Beiträge zu sozialen Netzwerken.',
  'l16': 'Berufsporträt: Eine junge Hotelfachfrau an der Rezeption im Hotel "Post". Ihre Aufgaben.',
  'l17': 'Mit dem Rad an der Donau. Übernachten im Zelt auf einer Wiese, Begegnung mit Wildschwein.',
  'l18': 'Wetterberichte und Urlaub. Pech mit dem Urlaubswetter in Dänemark oder Kenia.',
  'l19': 'Kulturnachrichten und Abendplanung. E-Mail über Fotoausstellung oder Konzert.',
  'l20': 'Lesegewohnheiten: Artikel über Kinder- und Jugendliteratur. Wann und was lesen Erwachsene/Deutsche?',
  'l21': 'Verloren / Gestohlen: Portemonnaie an der Kasse weg, EC-Karte sperren lassen, Polizei.',
  'l22': 'Mobilität: Mit dem Handy ein Fahrrad mieten. Beschreibung des Ausleihprozesses.',
  'l23': 'Lebenslauf / Beruf: Zeitungsartikel über Simon Stern (Schönheitschirurg) oder Mark Brügge (Landschaftsgärtner).',
  'l24': 'Reiseratgeber: Dokumente, Visum, Impfungen, Flugtickets kaufen.'
};

async function augmentSingle(lektionId: string) {
  const theme = lektionThemes[lektionId];
  const prompt = `Erstelle eine Leseverstehensaufgabe (Reading Comprehension) für das Niveau A2, passend zur Lektion ${lektionId} aus "Menschen A2". 
Thema aus dem Arbeitsbuch: ${theme}

- Der Lesetext soll genau 2 bis 3 Absätze haben und insgesamt zwischen 100 und 150 Wörter lang sein (nicht länger!).
- Schreibe passende Multiple-Choice-Fragen (genau 4 Fragen).
- Jede Frage hat 3 oder 4 Optionen (options: Array von Texten), wobei "correctAnswer" der 0-basierte Index der richtigen Antwort ist.
- "explanation": kurze Erklärung auf Deutsch, warum die Antwort richtig ist.

Formatiere alles strictly im verlangten JSON-Format.`;

  try {
    const res = await ai.models.generateContent({
      model: "gemini-2.5-flash", 
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema
      }
    });

    return JSON.parse(res.text!);
  } catch (e: any) {
    console.error(`Failed ${lektionId}:`, e?.message);
    return null;
  }
}

async function run() {
  const finalData: Record<string, any> = {};
  for (let i = 1; i <= 24; i++) {
    const lId = `l${i}`;
    let result = null;
    let attempts = 0;
    while(attempts < 3 && !result) {
      result = await augmentSingle(lId);
      attempts++;
      if(!result) await new Promise(r => setTimeout(r, 2000));
    }
    if (result) {
      finalData[lId] = result;
      console.log(`Success ${lId}`);
    } else {
      console.log(`Failed totally ${lId}`);
    }
  }

  const exportStr = JSON.stringify(finalData, null, 2);
  const fileContent = `export const READING_DATA: Record<string, any> = ${exportStr};\n`;
  fs.writeFileSync(path.resolve('src/data/readingData.ts'), fileContent);
  console.log('Finished updating readingData.ts');
}

run();
