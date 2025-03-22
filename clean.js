const fs = require('fs');
const path = require('path');
const sys = require('util');
const cleanModulesPath = path.join(__dirname, 'node_modules');
fs.rm(cleanModulesPath, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error('Ошибка при очистке:', err);
  } else {
    //Ничего не делать
  }
});
console.log("Процесс завершён. Вам теперь потребуется переустановить модули через `npm i`.");