import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeatTimes]'
})
export class RepeatTimesDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appRepeatTimes(num: number) {
    this.viewContainer.clear();

    for (let i = 0; i < num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i + 1
      });
    }
  }
}
