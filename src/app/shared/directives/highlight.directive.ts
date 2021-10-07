import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBoxShadow('0 0 8px 2px lightgray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBoxShadow('none');
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  private setBoxShadow(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', val);
  }
}
