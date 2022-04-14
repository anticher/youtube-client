import {
  Directive, ElementRef, Input, OnChanges, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appResultItemBorderColor]',
})
export class ResultItemBorderColorDirective {
  @Input('appResultItemBorderColor') set color(color: string) {
    this.innerColor = color
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', `5px solid ${this.innerColor}`);
  };

  private innerColor: string = ''

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
