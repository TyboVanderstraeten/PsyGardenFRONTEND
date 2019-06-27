import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';
import { AllUsersComponent } from './all-users/all-users.component';
import { MaterialModule } from '../material/material.module';

const routes:Routes = [
  {path:'all-users',canActivate:[AuthGuard],component:AllUsersComponent}
]
@NgModule({
  declarations: [AllUsersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class CommunityModule { }
