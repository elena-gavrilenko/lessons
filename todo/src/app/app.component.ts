import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Todo-list';
 

  list:string[]=[];
  item='';
  addTask(value:string):void{
    this.list.push(value)
  }

  delete(index:number):void{
    this.list.splice(index,1);
  }
}
