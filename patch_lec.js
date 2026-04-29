const fs = require('fs');
const content = fs.readFileSync('./src/App.tsx', 'utf8');

let newContent = content.replace(
  "{(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l13', 'l14', 'l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && (",
  "{(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l13', 'l14', 'l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && ("
);

newContent = newContent.replace(
  "{(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l13', 'l14', 'l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && (",
  "{(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l13', 'l14', 'l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && ("
);

newContent = newContent.replace(
  "(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l4' || selectedLesson.id === 'l5' || selectedLesson.id === 'l6' || selectedLesson.id === 'l7' || selectedLesson.id === 'l8' || selectedLesson.id === 'l13' || selectedLesson.id === 'l14' || selectedLesson.id === 'l15' || selectedLesson.id === 'l16' || selectedLesson.id === 'l17' || selectedLesson.id === 'l18' || selectedLesson.id === 'l19' || selectedLesson.id === 'l20' || selectedLesson.id === 'l22' || selectedLesson.id === 'l23' || selectedLesson.id === 'l24')",
  "(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l4' || selectedLesson.id === 'l5' || selectedLesson.id === 'l6' || selectedLesson.id === 'l7' || selectedLesson.id === 'l8' || selectedLesson.id === 'l9' || selectedLesson.id === 'l13' || selectedLesson.id === 'l14' || selectedLesson.id === 'l15' || selectedLesson.id === 'l16' || selectedLesson.id === 'l17' || selectedLesson.id === 'l18' || selectedLesson.id === 'l19' || selectedLesson.id === 'l20' || selectedLesson.id === 'l22' || selectedLesson.id === 'l23' || selectedLesson.id === 'l24')"
);

newContent = newContent.replace(
  "{(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l13', 'l14', 'l17', 'l18', 'l19', 'l20'].includes(selectedLesson.id)) && (",
  "{(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l13', 'l14', 'l17', 'l18', 'l19', 'l20'].includes(selectedLesson.id)) && ("
);

// We need a global replace since that exact string appears multiple times. Let's just use regex with g flag
let newContentRegex = content.replace(
  /\{\(\['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l13', 'l14', 'l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'\]\.includes\(selectedLesson\.id\)\) && \(/g,
  "{(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l13', 'l14', 'l15', 'l16', 'l17', 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24'].includes(selectedLesson.id)) && ("
);

newContentRegex = newContentRegex.replace(
  /\(selectedLesson\.id === 'l1' \|\| selectedLesson\.id === 'l2' \|\| selectedLesson\.id === 'l3' \|\| selectedLesson\.id === 'l4' \|\| selectedLesson\.id === 'l5' \|\| selectedLesson\.id === 'l6' \|\| selectedLesson\.id === 'l7' \|\| selectedLesson\.id === 'l8' \|\| selectedLesson\.id === 'l13'/g,
  "(selectedLesson.id === 'l1' || selectedLesson.id === 'l2' || selectedLesson.id === 'l3' || selectedLesson.id === 'l4' || selectedLesson.id === 'l5' || selectedLesson.id === 'l6' || selectedLesson.id === 'l7' || selectedLesson.id === 'l8' || selectedLesson.id === 'l9' || selectedLesson.id === 'l13'"
)

newContentRegex = newContentRegex.replace(
  /\{\(\['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l13', 'l14', 'l17', 'l18', 'l19', 'l20'\]\.includes\(selectedLesson\.id\)\) && \(/g,
  "{(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l13', 'l14', 'l17', 'l18', 'l19', 'l20'].includes(selectedLesson.id)) && ("
);


fs.writeFileSync('./src/App.tsx', newContentRegex);
