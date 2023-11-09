import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Car } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url="http://localhost:3000/cars";

  constructor(private http: HttpClient) { }


  getCars():Observable<Car[]>{
    return this.http.get<Car[]>(this.url);
  }
}
