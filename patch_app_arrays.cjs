const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf-8');

appContent = appContent.replace(
  `"l13",
                            "l14",
                            "l17",
                            "l18",
                            "l19",
                            "l20",
                            "l21",
                            "l22",
                            "l23",
                            "l24",
                          ].includes(selectedLesson.id) && (`,
  `"l13",
                            "l14",
                            "l15",
                            "l16",
                            "l17",
                            "l18",
                            "l19",
                            "l20",
                            "l21",
                            "l22",
                            "l23",
                            "l24",
                          ].includes(selectedLesson.id) && (`
);


appContent = appContent.replace(
  `"l9",
                      "l10",
                      "l13",
                      "l14",
                      "l15",
                      "l16",
                      "l17",
                      "l18",
                      "l19",
                      "l20",
                      "l21",
                      "l22",
                      "l23",
                      "l24",
                    ].includes(selectedLesson.id) && (`,
  `"l9",
                      "l10",
                      "l11",
                      "l12",
                      "l13",
                      "l14",
                      "l15",
                      "l16",
                      "l17",
                      "l18",
                      "l19",
                      "l20",
                      "l21",
                      "l22",
                      "l23",
                      "l24",
                    ].includes(selectedLesson.id) && (`
);

fs.writeFileSync('src/App.tsx', appContent);
console.log('App.tsx arrays patched successfully');
