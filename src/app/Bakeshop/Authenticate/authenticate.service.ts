import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  isAutenticated = false;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  authenticateUser(isAuthenticated: boolean) {
    this.getAuthStatus();
    return this.isAutenticated;
  }

  getAuthStatus() {
    return this.http.get<boolean>(this.baseUrl + '/authenticateuser?isAuthenticated=' + this.isAutenticated)
    .subscribe((isAuthenticated: boolean) => {
      this.isAutenticated = isAuthenticated;
    });
  }

  validateUsernameAndPassword() {
    // call api to validate correct username or password
  }

  getUserAccountDetails() {
    // call api to get user account details
  }
}
