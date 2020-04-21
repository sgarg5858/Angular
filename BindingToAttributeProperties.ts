import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='blue';
  
  @HostBinding('style.backgroundColor') backgroundColor:string;
 
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit()
  {
    this.backgroundColor=this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData:Event)
  {
  //  this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
   // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent');
    this.backgroundColor=this.defaultColor;
  }

}
      <p appBetterHighlight [defaultColor]="'yellow'" [highlightColor]="'red'">End of Numbers</p>
