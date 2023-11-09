import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Car } from '../model/model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{

  cars:Car[]=[];
  isLoading=true;
  constructor(private dataService:DataService){

  }

  ngOnInit(): void {
    this.isLoading=true;
    this.dataService.getCars()
    .subscribe(data=> {
      this.cars=data;
      console.log(this.cars);
      this.isLoading=false}
      );
  
  }
}
