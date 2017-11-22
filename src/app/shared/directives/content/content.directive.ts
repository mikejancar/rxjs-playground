import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[rxPlayContent]'
})
export class ContentDirective {

  constructor(elRef: ElementRef) {
    elRef.nativeElement.style.backgroundColor = 'white';
    elRef.nativeElement.style.height = '100%';
    elRef.nativeElement.style.padding = '25px';
  }
}
