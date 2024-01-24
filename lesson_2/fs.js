import fs from 'fs/promises';
import fsSynk from 'fs'
import path from'path';
import { fileURLToPath } from 'url';


const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

// const base=path.join(__dirname,'FLODER')

// fs.mkdir(base);
// // fs.mkdir(test); создаст, но выдаст ошибку
// const createFolder=(n)=>{
//     for(let i=1; i<=n;i++){
//         const dirName=`Лекция_${i}`
//     fs.mkdir(dirName)}
// }

// createFolder(3);

const base=path.join(__dirname,'temp');

// fs.mkdir(base)
//     .then(()=>{
//         console.log('folder created')
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

const getContent=()=>`${process.argv[2] ?? ''}\n`

async function createFolder() {
    try {
        // await fs.mkdir(base);
        // console.log('folder created');
        // await fs.writeFile(path.join(base,'log.txt'),process.argv[2] ?? '');
        if (fs.existsSync(base)) {
            // await fs.writeFile(path.join(base,'log.txt'),process.argv[2] ?? '');
            await fs.appendFile(path.join(base,'log.txt'),getContent());
            const logs=await fs.readFile(path.join(base,'log.txt'),{encoding:'utf-8'})
            console.log(logs)
        } else {
            await fs.mkdir(base);
            await fs.writeFile(path.join(base,'log.txt'),getContent());
        }

    } catch (error) {
        console.log(error);
    }
}    
createFolder();

// удалять файлы
// fs.rm('test.js')