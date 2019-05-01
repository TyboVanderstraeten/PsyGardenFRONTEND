import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _user: FormGroup;
  private _errorMessage: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this._user = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        emailConfirmation: ['', [Validators.required, Validators.email]]
      }, { validators: this.compareEmails }),
      passwordGroup: this._formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }, { validators: this.comparePasswords })
    });
  }

  comparePasswords(control: AbstractControl): { [key: string]: any } {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');
    return password.value === passwordConfirmation.value ? null : { passwordsDiffer: true };
  }

  compareEmails(control: AbstractControl): { [key: string]: any } {
    const email = control.get('email');
    const emailConfirmation = control.get('emailConfirmation');
    return email.value === emailConfirmation.value ? null : { emailsDiffer: true };
  }

  serverSideValidateEmail(
    checkAvailabilityFn: (n: string) => Observable<boolean>
  ): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return checkAvailabilityFn(control.value).pipe(
        map(available => {
          if (available) {
            return null;
          }
          return { userAlreadyExists: true };
        })
      );
    };
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} characters (got ${errors.minlength.actualLength})`;
    } else if (errors.maxLength) {
      return `can have max. ${errors.maxLength.requiredLength} characters (got ${errors.maxLength.actualLength})`;
    } else if (errors.userAlreadyExists) {
      return 'user already exists';
    } else if (errors.email) {
      return 'not a valid email address';
    } else if (errors.emailsDiffer) {
      return 'emails are not the same';
    } else if (errors.passwordsDiffer) {
      return 'passwords are not the same';
    }
  }

  onSubmit() {
    this._authenticationService.register(
      this._user.value.firstname,
      this._user.value.lastname,
      this._user.value.emailGroup.email,
      this._user.value.emailGroup.emailConfirmation,
      this._user.value.passwordGroup.password,
      this._user.value.passwordGroup.passwordConfirmation
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
          this._errorMessage = `Error ${error.status} while trying to login user ${this._user.value.email}: ${error.error}`;
        }
      }
    );
  }

}
