import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { InterestsComponent } from './interests/interests.component';
import { GoingsComponent } from './goings/goings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:email', component: ProfileComponent },
  { path: 'profile/interests', component: InterestsComponent },
  { path: 'profile/goings', component: GoingsComponent }
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, InterestsComponent, GoingsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }