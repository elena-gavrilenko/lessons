import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() text:string="";
  @Input() user={
    name:"",
    age:0
  }; 
  data="";

  @Output() onSendData = new EventEmitter<string>();

  sendData():void{
    console.log(this.data)
    this.onSendData.emit(this.data);
  }
}
