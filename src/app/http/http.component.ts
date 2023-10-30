import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  data:Object={};

    isLoading=true;

constructor(private http:HttpClient){

}


getData():void{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((json)=>this.data=json);
  }

  getClientData():void{
  this.http.get("https://jsonplaceholder.typicode.com/posts")
  .subscribe((value)=>{
    this.data=value;
    this.isLoading=false;
  });
}}
