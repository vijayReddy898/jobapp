import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRestrictToday]'
})
export class RestrictTodayDirective {
  constructor(private el: ElementRef,private renderer:Renderer2) { 
    this.renderer.setAttribute(this.el.nativeElement,'max',new Date().toJSON().split('T')[0].toString());
  }
 

}
