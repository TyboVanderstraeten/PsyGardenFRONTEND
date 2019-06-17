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
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { AuthGuard } from './auth.guard';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'interests', canActivate: [AuthGuard], component: InterestsComponent },
  { path: 'goings', canActivate: [AuthGuard], component: GoingsComponent },
  { path: 'posts', canActivate: [AuthGuard], component: PostsComponent }
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, InterestsComponent, GoingsComponent, NavbarUserComponent, PostsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }