import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRegistrationFormComponent } from './registrations/new-registration-form/new-registration-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NewRegistrationFormComponent],
  exports: [NewRegistrationFormComponent],
})
export class AuthModule { }
