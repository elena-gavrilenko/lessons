import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guess number';
 
  countTry=0;
  guessNumber=Math.round(Math.random()*100);
  userNumber=0;
  deviation=-101;

  verify():void{
    this.deviation=this.guessNumber-this.userNumber;
    this.countTry++
  }

  reset():void{
    this.countTry=0;
    this.guessNumber=Math.round(Math.random()*100);
    this.userNumber=0;
    this.deviation=-101;
  }


}
