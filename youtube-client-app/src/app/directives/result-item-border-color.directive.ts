import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appResultItemBorderColor]',
})
export class ResultItemBorderColorDirective implements OnInit {
  @Input('appResultItemBorderColor') color: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', `5px solid ${this.color}`);
  }
}
