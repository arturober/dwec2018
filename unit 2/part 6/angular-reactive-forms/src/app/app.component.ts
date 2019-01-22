import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

function minDateValidator(minInputDate: string): ValidatorFn {
  return (c: FormControl): { [key: string]: any } => {
    if (c.value) {
      const minDate = new Date(minInputDate);
      const inputDate = new Date(c.value);
      console.log(minDate, inputDate);
      return minDate <= inputDate ? null : {'minDate': minDate.toLocaleDateString()};
    }
    return null;
  };
}

function matchEmail(c: FormGroup): { [key: string]: any } {
  const email = c.get('email').value;
  const email2 = c.get('emailConfirm').value;
  return email === email2 ? null : { match: true };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  phones: FormArray;
  title = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        emailConfirm: ['', [Validators.required, Validators.email]]
      }, { validators: matchEmail }),
      phones: this.fb.array([this.createPhoneControl()]),
      notifications: 'email',
      password: ['', [Validators.required, Validators.minLength(5)]],
      birthDate: ['', minDateValidator('1919-01-01')]
    });

    this.phones = <FormArray>this.userForm.get('phones');

    this.userForm.get('notifications').valueChanges
        .subscribe(v => {
          console.log(`Notify via: ${v}`);
          this.updateNotifMethod(v);
        });
  }

  setDemoData() {
    this.userForm.patchValue({
      name: 'Test user',
      email: 'test@test.com',
      password: 'test'
    });
  }

  updateNotifMethod(notif: string) {
    const phoneControl = this.userForm.get('phones').get('0');
    if (notif === 'phone') {
      phoneControl.setValidators([
        Validators.required,
        Validators.pattern(/[0-9]{9,}/)
      ]);
    } else { // email (Phone not required)
      phoneControl.setValidators([Validators.pattern(/[0-9]{9,}/)]);
    }
    phoneControl.updateValueAndValidity();
  }

  private createPhoneControl(): FormControl {
    return this.fb.control('', Validators.pattern(/[0-9]{9,}/));
  }

  addPhone() {
    this.phones.push(this.createPhoneControl());
  }

  rmPhone() {
    if (this.phones.length > 1) {
      this.phones.removeAt(this.phones.length - 1);
    }
  }
}
