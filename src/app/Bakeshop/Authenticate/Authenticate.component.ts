import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './authenticate.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './Authenticate.component.html',
  styleUrls: ['./Authenticate.component.css'],
  providers: [AuthenticateService]
})
export class AuthenticateComponent implements OnInit {

  isAuthenticated: boolean;
  logButtonText = 'Login';

  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
  }

  onLogButtonClick() {
    this.isAuthenticated = this.authService.authenticateUser(this.isAuthenticated);
    this.logButtonText = this.isAuthenticated ? 'Log Out' : 'Login';
  }

}
