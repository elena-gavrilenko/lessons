import { Controller, Get, Render,ParseIntPipe, Param,Post,Redirect,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { notes } from './notes';
import { Note } from './notes.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  @Render('login')
  getLogin(){
    return ;
  }

  @Get()
  @Render('index')
  index(){
    return {notes};
  }

  @Get('create')
  @Render('create')
  getForm(){
    return ;
  }

  @Post('notes')
  @Redirect('/',301)
  createNote(@Body() body:any):void{
    const id = notes.length+1
    const note=new Note(body.title,body.content,id)
    notes.push(note)
  }

   
  @Get(':id')
  @Render('note')
  getNoteByID(@Param('id',ParseIntPipe)id: number){
    return notes.find(note=>note.id===id)
  }
 

}
