import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user:any;
  invalidUser = false;
  validUser = false;
  errorMessage = "";
  successMessage = ""

  listRole : string[] =[]

  constructor(private userService: UserService, private router: Router) { }

    CheckboxChange(e : any){
      if(e.target.checked){
        this.listRole.push(e.target.value)
      }
    }

  register(myform:any){
    this.user = {
      'username': myform.value.username,
      'email': myform.value.email,
      'password': myform.value.password,
      'role': this.listRole
    }

  this.userService.createUser(this.user).subscribe(

    (response :any)=> {
      //this.router.navigate(['login']);

      this.validUser = true
      this.successMessage = response.message
      myform.resetForm(myform);
    },

    error => {
      this.invalidUser = true
      this.errorMessage = error.error.message
     // console.log(error)
    }

  );
}
}
