// os модуль для работы с операционной системой в node
import os from 'os';

// console.log(os.platform())//платформа

// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.freemem())//свободной памяти
// console.log(os.totalmem())//всего памяти

console.log(os.uptime())//время работы компа

console.log(os.homedir()) //имя корневой директории