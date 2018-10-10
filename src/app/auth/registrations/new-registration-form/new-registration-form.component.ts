import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { FormGroup, Validators, FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
// import { lengthMatchValidator } from './lengthMatch.directive';
@Component({
  selector: 'app-new-registration-form',
  templateUrl: './new-registration-form.component.html',
  styleUrls: ['./new-registration-form.component.css']
})
export class NewRegistrationFormComponent implements OnInit {

  model = new User(1, 'ali@gmail.com', '123456');
  constructor() { }
  registrationForm: FormGroup;
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'email': new FormControl(this.model.email, [
        Validators.required
      ]),
      'password': new FormControl([
        Validators.required,
        Validators.minLength(6)
      ]),
      'confirm_password': new FormControl([
        Validators.required,
        Validators.minLength(6)
      ])
    }, { validators: lengthMatchValidator });
  }

  newUser() {

  }
}
export const lengthMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirm_password = control.get('confirm_password');

  return password && confirm_password && password.value === confirm_password.value ? { 'lengthMatch': true } : null;
};
