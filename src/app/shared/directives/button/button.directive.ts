import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[rxPlayButton]'
})
export class ButtonDirective {

  private inactiveColor: string = 'seagreen';

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.backgroundColor = this.inactiveColor;
    elRef.nativeElement.style.border = '0';
    elRef.nativeElement.style.color = 'white';
    elRef.nativeElement.style.padding = '10px 20px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elRef.nativeElement.style.backgroundColor = 'mediumseagreen';
    this.elRef.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elRef.nativeElement.style.backgroundColor = this.inactiveColor;
  }
}
