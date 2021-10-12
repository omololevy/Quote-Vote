import { Directive, ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private elem: ElementRef) { 
  }

  @HostListener("click") maxLikes(){
    
    this.quote_highlight("green")
  }


  private quote_highlight(action:string){
    this.elem.nativeElement.style.color=action;
  }

}
