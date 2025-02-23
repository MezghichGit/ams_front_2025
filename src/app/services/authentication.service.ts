import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }

  authenticate(username: any, password: any) {


    let userData:any = this.httpClient.post(environment.apiUrl+'api/auth/signin',
    {"username":username,"password":password}).pipe(
      map(
        (data:any) => {
          sessionStorage.setItem('jwtToken', data.accessToken);
           sessionStorage.setItem('username', data.username);
           userData = data;

        }
      )
    );
    return userData;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('jwtToken')
  }
}