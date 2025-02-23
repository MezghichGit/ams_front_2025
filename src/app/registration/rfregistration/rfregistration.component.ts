import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rfregistration',
  standalone: false,
  templateUrl: './rfregistration.component.html',
  styleUrl: './rfregistration.component.css'
})
export class RFRegistrationComponent {

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control("", [Validators.required, Validators.minLength(4), Validators.maxLength(6)]);
    this.passwordCtrl = fb.control("", [Validators.required, Validators.minLength(6)]);

    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
  });
  }


  reset(): void {
    this.usernameCtrl.setValue("");
    this.passwordCtrl.setValue("");
 }
 register(): void {
    console.log(this.userForm);
    console.log( this.usernameCtrl);
   // this.reset();
   //alert("Ok")
 }
}
