import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[marked]',
  host: {
    '(click)': 'onClick()',
  }

})

export class MarkedDirective {

  bgcolor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2){
    this.bgcolor = "lightgray";     
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", this.bgcolor);
  }

  onClick(){
    if (this.bgcolor == "darkgray") this.bgcolor = "lightgray";
    else if (this.bgcolor == "lightgray") this.bgcolor = "darkgray";
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", this.bgcolor);
     
  }

}
