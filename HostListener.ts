HostListener is used in Attribute directives to used to react to element events.

import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

 
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit()
  {
    //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
  }
  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
    
  }
  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent');
    
  }


}

<p appBetterHighlight>End of Numbers</p>
