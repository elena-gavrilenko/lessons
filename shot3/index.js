import http from 'http';
import chalk from 'chalk'

const port=8000

const server = http.createServer((req,res)=>{
    console.log('server')
    res.end('hello')
});

server.listen(port,()=>{
    console.log(chalk.red(`Servrer has been started on port ${port}`))
})