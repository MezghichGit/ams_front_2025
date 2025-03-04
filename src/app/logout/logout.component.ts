import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(
    private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}
