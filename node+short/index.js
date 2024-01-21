// чтобы импортировать сюда файл test.js нужно
// require('./test');

// установленный пакет
const yargs=require('yargs')
const {addNote, printNotes}=require('./notes.controller')

// console.log('Hello NODE JS')
// выполнение node <имя файла>
// нет объекта window
// есть доступ  к файлам и папкам

// путь к файлу
// console.log(__filename)
// путь к папке
// console.log(__dirname)

// есть глобальный объект process
// вызов глобального процесса
// console.log(process.argv);
// выводит массив с путем, где находится node и наш файл
// если при вызове добавить что-то он окажется в массиве
// const username=process.argv[2];
// const userage=process.argv[3];

// console.log('user name', username);
// console.log('user age', userage);

//  и сожем прямо в терминале внести аргументы
// node index.js Maxim 40

// установить packet-JSON
// npm init

// yargs npm - пакет для работы с аргументами

// консольное приложение с заметками(база данных)
yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    builder: {
        title: {
            type:'string',
            describe: 'note title',
            // обязательный ли параметр
            dimandOption:true
            
        }
    },
    handler({title}){
        console.log('add command',title)
        addNote()
    }
    
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    handler(){
        console.log('All notes')
        printNotes()
    }
})
// проинициализировать
yargs.parse()

// express фреймворк для Node.js
// Nest.js фреймворк для Node.js

// node index.js add --title=hello
// если два слова то писать в кавычках
