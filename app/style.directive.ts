import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myStyle]',
  host: {
    '(mouseenter)': 'onMouseOver()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class StyleDirective {
  @Input('myStyle')
  inlineColor: string;
  private defaultColor = 'orange';

  constructor(private _el: ElementRef) {}

  onMouseOver() {
    this.colorStyle(this.inlineColor || this.defaultColor);
  }

  onMouseLeave() {
    this.colorStyle(null);
  }

  private colorStyle(color: string) {
    this._el.nativeElement.style.backgroundColor = color;
  }
}
