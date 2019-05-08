import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/user/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  loggedInUser$ = this._authenticationService.user$;

  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  isUserLoggedIn(): boolean {
    return this._authenticationService.token != null && this._authenticationService.token != "";
  }

  logout() {
    this._authenticationService.logout();
  }

}
