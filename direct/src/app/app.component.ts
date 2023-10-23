import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-first';
 
  // для ngClass
  isBordered = true;
  classList: string[] = ['blue', 'round'];

  checkBordered(): void {
    this.isBordered = !this.isBordered;
  }

  choice = 0;


}
