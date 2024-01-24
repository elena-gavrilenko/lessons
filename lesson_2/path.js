import path from'path';
import { fileURLToPath } from 'url';

// только  c require
// __dirname
// __filename

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

console.log(__filename);//директория +файл
console.log(__dirname);//директория

console.log(path.basename(__filename));//имя файла

console.log(path.extname(__filename));//расширение с точкой
console.log(path.extname(__filename).slice(1));//расширение без точки
console.log(path.parse(__filename));//информация о файле

