import { Injectable } from '@angular/core';
import Car from './model/data.model'

@Injectable({
  providedIn: 'root'
})



export class DataService {

  cars: Car[]=[
    new Car("vw","polo","red",2015),
    new Car("vw","boro","blue",2022),
    new Car("audi","q5","metallic",2020),
    new Car("geely","emgrand","yellow",2021),
  ]

  constructor() { }

  getCars(): Car[]{
    return this.cars;
  } 

  getCar(index:number):Car{
    return this.cars[index-1];
  }

  addCar(car:Car):void{
    this.cars.push(car);
  }

  delete(index:number):void{
    console.log(this.cars.length)
    if (index>0&&index<=this.cars.length)
    this.cars.splice(index-1,1);
  }
}
