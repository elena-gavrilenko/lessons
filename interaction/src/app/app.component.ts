import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-first';
  
  user={
    name: "Alex",
    age:20
  }
  text ="";
  getData(text:string):void{
    console.log(text);
    this.text=text;
  }
}
