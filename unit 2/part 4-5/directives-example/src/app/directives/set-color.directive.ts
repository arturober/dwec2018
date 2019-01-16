import { Directive, Input, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective implements OnChanges {
  @Input('appSetColor') color: string;
  isSet = false;

  constructor(private elem: ElementRef) { }

  @HostListener('click') onclick(e) {
    if (!this.isSet) {
      this.elem.nativeElement.style.backgroundColor = this.color;
    } else {
      this.elem.nativeElement.style.backgroundColor = '';
    }
    this.isSet = !this.isSet;
  }

  ngOnChanges() {
    if (this.isSet) {
      this.elem.nativeElement.style.backgroundColor = this.color;
    }
  }

}
