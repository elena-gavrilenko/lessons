import { Component, EventEmitter, Output } from '@angular/core';
import Car from '../model/data.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car: Car=new Car("","","",2023);
  
  @Output() onChangeChoice = new EventEmitter<number>();


  constructor(private dataservice:DataService){

  }

  addCar():void{
   
    this.dataservice.addCar(this.car)
    this.onChangeChoice.emit(1);//choice установим дл\я отбражения списка
  }
}
