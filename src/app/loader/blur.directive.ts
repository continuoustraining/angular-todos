import {Directive, Input, ElementRef, OnChanges} from '@angular/core';

@Directive({
  selector: '[appBlur]'
})
export class BlurDirective /*implements OnChanges*/ {

  @Input('activate') activate: boolean;

  protected svg: Element;

  constructor(
    private elementRef: ElementRef
  ) {
    if (true === this.activate) {
      this.enable();
    }

    if (false === this.activate) {
      this.disable();
    }
  }

  ngOnChanges() {
    console.log('ngOnChanges ', this.activate);

    if (true === this.activate) {
      this.enable();
    }

    if (false === this.activate) {
      this.disable();
    }
  }

  protected enable() {
    this.svg = document.createElement('svg');
    this.svg.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="filters" height="0" width="0">
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10,0" />
          </filter>
        </defs>
      </svg>`;

    this.elementRef.nativeElement.appendChild(this.svg);
    this.elementRef.nativeElement.style.filter = 'url(#blur)';
  }

  protected disable() {
    if (!(this.svg instanceof Element)) {
      return;
    }

    this.elementRef.nativeElement.removeChild(this.svg);
    this.elementRef.nativeElement.style.filter = '';
  }
}
