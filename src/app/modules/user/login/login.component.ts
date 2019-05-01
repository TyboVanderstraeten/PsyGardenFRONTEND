import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _user: FormGroup;
  private _errorMessage: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this._user = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  comparePasswords(control: AbstractControl): { [key: string]: any } {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password.value === confirmPassword.value
      ? null
      : { passwordsDiffer: true };
  }

  onSubmit() {
    this._authenticationService.login(
      this._user.value.email, this._user.value.password
    ).subscribe(
      val => {
        if (val) {
          if (this._authenticationService.redirectUrl) {
            this._router.navigateByUrl(this._authenticationService.redirectUrl);
            this._authenticationService.redirectUrl = undefined;
          } else {
            this._router.navigate(['all-events']);
          }
        } else {
          this._errorMessage = 'Could not login';
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        if (error.error instanceof Error) {
          this._errorMessage = `Error while trying to login user ${this._user.value.email}: ${error.error.message}`;
        } else {
          this._errorMessage = `Error ${error.status} while trying to login user ${this._user.value.email}= ${error.error}`;
        }
      }
    );
  }
}
