import { Component } from '@angular/core';
import Car from './model/data.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-first';
  cars: Car[];

  constructor(private DataService:DataService){
    this.cars=DataService.getCars()
  }
}
