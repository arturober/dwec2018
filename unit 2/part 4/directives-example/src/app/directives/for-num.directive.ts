import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForNum]'
})
export class ForNumDirective {
  array: any[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appForNumFrom(array: any[]) {
    this.array = array;
  }

  @Input() set appForNumStep(num: number) {
    num = +num;
    this.viewContainer.clear();
    for (let i = 0; i < this.array.length; i += num) {
      const a = (new Array(num)).fill('');
      for (let j = i; j < i + num && j < this.array.length; j++) {
        a[j - i] = this.array[j];
      }
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: a
      });
    }
  }
}
