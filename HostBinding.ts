# Instead of using renderer we are using here @HostBining to bind to the properties of an element. make Sure the element has the property

otherwise we will get an error.


import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
 
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit()
  {
    //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
  }
  @HostListener('mouseenter') mouseover(eventData:Event)
  {
  //  this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
    this.backgroundColor='blue';
  }
  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
   // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent');
    this.backgroundColor='transparent';
  }

}
