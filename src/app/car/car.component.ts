import { Component, Input } from '@angular/core';
import { Car } from '../model/model';
// для программы маршрутизации
import {Router} from '@angular/router'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  isLoading=false;
  @Input() car!: Car;


  constructor(private router:Router){}

  getDetail():void{
    this.router.navigate(["cars",this.car.id])
  }
}
