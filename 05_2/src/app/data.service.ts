import { Injectable } from '@angular/core';
import Car from './model/data.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  // cars: Car[]=[
  //   new Car("vw","polo","red",2015),
  //   new Car("vw","boro","blue",2022),
  //   new Car("audi","q5","metallic",2020),
  //   new Car("geely","emgrand","yellow",2021),
  // ]
  cars: Car[]=[];

  httpOptions={
    headers: new HttpHeaders({'Content-type':'application/json'})
  };


url='http://localhost:3000/cars';
  //  вместо then в angular используется subscribe
  constructor(private http:HttpClient) { 
    http.get<Car[]>(this.url)
    .subscribe(data=>{
      this.cars=data;
      console.log(this.cars);
    })
  }

  getCars(): Car[]{
    return this.cars;
  } 

  getCar(index:number):Car{
    return this.cars[index-1];
  }

  addCar(car:Car):void{
    this.cars.push(car);
    this.http.post<Car>(this.url,car,this.httpOptions)
    .subscribe(data=>{
      console.log('Add');
      console.log(data);
    });
  }

  delete(index:number):void{
    console.log(this.cars.length)
    if (index>0&&index<=this.cars.length){
    this.cars.splice(index-1,1);
    this.http.delete(`${this.url}/${index}`,this.httpOptions)
    .subscribe(data=>{
      console.log('Delete');
    })
    }
  }
// метод который будет редактировать внутри массива и сохранять на сервере
  editCar(car:Car):void{
      let index=this.cars.findIndex(item=>item==car);
      
      this.http.put<Car>(this.url,car,this.httpOptions)
      .subscribe(data=>{
        console.log('Edit');
        this.cars.splice(index,1);
      })
  }
}
