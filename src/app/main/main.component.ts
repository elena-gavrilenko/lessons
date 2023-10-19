import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  name = "nick";
  date = new Date().toLocaleString();
  data = [
    "one",
    "two",
    "three"
  ]
  href = "http://google.com";
  src = "https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg";
  
  visible = true;
  hideBlock():void{
    this.visible = !this.visible;
  }
}
