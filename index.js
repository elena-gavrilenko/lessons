import chalk from 'chalk'
import path from 'path'
import { fileURLToPath } from 'url'
import { addNote, getNotes,removeNote, updateNote } from './notes.controller.js'
import express from 'express'
import cors from 'cors'

const port = 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const basePath = path.join(__dirname, 'pages')

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
app.use(cors());
app.set('view engine', 'ejs')
app.set('views', 'pages')

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', async (req, res) => {
    // res.sendFile(path.join(basePath, 'index.html'))
    res.render('index', {
        title: 'Express app',
        notes: await getNotes(),
        created: false,
        link: '/login'
    })
})

app.get('/login', async (req, res) => {
    res.render('login', {
       title: 'Login page',
    
   })
})

app.get('/notes', async (req, res) => {
    const notes= await getNotes()
    res.json(notes) 
})
app.post('/', async (req, res) => {
    await addNote(req.body.title)
    // console.log(req.body)
    // res.sendFile(path.join(basePath, 'index.html'))
    res.render('index', {
        title: 'Post method',
        notes: await getNotes(),
        created: true
    })
})

app.delete('/:id',async (req,res)=>{
    console.log('id:',req.params.id);
    const noteId=req.params.id
    await removeNote(noteId)
    res.render('index', {
        title: 'Delete method',
        notes: await getNotes(),
        created: false
    })
})

app.put('/:id',async (req,res)=>{
    const id=req.params.id
    const title=req.body.title
    await updateNote({id,title})
    res.render('index', {
        title: 'Put method',
        notes: await getNotes(),
        created: false
    })
})

app.listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}`))
})


