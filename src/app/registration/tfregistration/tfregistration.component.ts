import { Component } from '@angular/core';
import { UserModel } from '../MesModels';

@Component({
  selector: 'app-tfregistration',
  standalone: false,
  templateUrl: './tfregistration.component.html',
  styleUrl: './tfregistration.component.css',
  
})
export class TFRegistrationComponent {
    user: UserModel = {
    username: "",
    password: ""
  };
  register(): void {
    console.log(this.user);
  }
}
