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

  getCar(index:number):Car|undefined{
    return (index>=0&&index<this.cars.length-1)? this.cars[index]:undefined;
  }

  addCar(car:Car):void{
    this.cars.push(car);
  }

  delete(index:number):void{
    if (index>=0&&index<this.cars.length-1)
    this.cars.splice(index,1);
  }
}
