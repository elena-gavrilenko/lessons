const path = require('path');
const fs=require('fs/promises');
const { writeFile } = require('fs');
const { stringify } = require('querystring');
const chalk=require('chalk');

const notes = []

const notesPath = path.join(__dirname, 'db.json')

// console.log(notesPath)

async function addNote(title) {

    const notes=await getNotes();
       
    const note={
        title,
        id: Date.now().toString()
    }
    
    notes.push(note);
    // для записи в файл используется writeFile
    await fs.writeFile(notesPath, JSON.stringify(notes))
    console.log(chalk.magenta('Note was added!'))
}

async function printNotes() {
    const notes=await getNotes();
    console.log(chalk.bgBlue('Here is the list of notes'));
    notes.forEach((note) => {
        console.log(chalk.blue(note.title))
    });
}

async function getNotes(){
    // можно сделать так - напрямую
    // const notes=require('./db.json')
    // const buffer=await fs.readFile(notesPath);
    // const notes=Buffer.from(buffer).toString('utf-8');
    // console.log(typeof JSON.parse(notes))
    // console.log(Array.isArray(JSON.parse(notes)))
    const notes=await fs.readFile(notesPath,{encoding:'utf-8'});
    return Array.isArray(JSON.parse(notes))?JSON.parse(notes):[];
}

module.exports = {
    addNote, printNotes
}

// если нужна конкретная версия пакета нужно писать вот так
// npm i chalk@4.1.2