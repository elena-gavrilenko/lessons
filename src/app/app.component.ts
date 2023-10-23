import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-first';
  
  // для ng class
isBorder=true;
classlist = ['blue','round'];

checkBorder():void{
  this.isBorder=!this.isBorder;
}

choice=0;
}
