import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateValidator, multi: true}]
})
export class MinDateValidator implements Validator {
  @Input() minDate: string;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    console.log('asdfasdf');
    if (this.minDate && c.value) { // There's a date to validate
      const dateControl = new Date(c.value);
      const dateMin = new Date(this.minDate);
      if (dateMin > dateControl) {
        return {'minDate': true}; // Error returned
      }
    }
    return null; // No errors
  }
}
