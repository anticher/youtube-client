import {
  Directive, ElementRef, Input, OnChanges, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appResultItemBorderColor]',
})
export class ResultItemBorderColorDirective implements OnChanges {
  @Input('appResultItemBorderColor') color: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  public ngOnChanges(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', `5px solid ${this.color}`);
  }
}
