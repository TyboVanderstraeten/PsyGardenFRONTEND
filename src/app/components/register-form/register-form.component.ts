import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NewUser } from 'src/app/models/newUser.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {
  @Output() public newUser = new EventEmitter<NewUser>();

  private _user: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._user = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      emailConfirmation: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  onSubmit() {
    this.newUser.emit(new NewUser(this._user.value.firstname, this._user.value.lastname,
      this._user.value.email, this._user.value.emailConfirmation,
      this._user.value.password, this._user.value.passwordConfirmation));
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return "is required";
    } else if (errors.maxlength) {
      return `can be ${errors.maxlength.requiredLength} characters max`;
    } else if (errors.email) {
      return "needs to be a valid e-mail";
    }
  }
}
