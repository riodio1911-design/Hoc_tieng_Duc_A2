import fs from 'fs';
import path from 'path';

const rpPath = path.resolve('src/components/ReadingPractice.tsx');
let rpContent = fs.readFileSync(rpPath, 'utf8');

if (rpContent.includes('const LESSON_CONTENT')) {
  let start = rpContent.indexOf('const LESSON_CONTENT');
  let end = rpContent.indexOf('export default function ReadingPractice');
  
  rpContent = rpContent.substring(0, start) + rpContent.substring(end);
  rpContent = "import { READING_DATA } from '../data/readingData';\n" + rpContent;
  
  fs.writeFileSync(rpPath, rpContent);
  console.log('Fixed ReadingPractice.tsx');
} else {
  console.log('Already fixed?');
}
