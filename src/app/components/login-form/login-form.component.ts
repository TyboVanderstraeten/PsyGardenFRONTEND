import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() public loggedInUser = new EventEmitter<User>();

  private _user: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._user = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.loggedInUser.emit(new User(this._user.value.email,this._user.value.password));
  }

  getErrorMessage(errors:any){
    if(errors.required){
      return "is required";
    }else if(errors.email){
      return "needs to be a valid e-mail";
    }
  }

}
