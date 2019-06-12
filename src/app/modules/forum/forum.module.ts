import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AllPostsComponent } from './all-posts/all-posts.component';

const routes: Routes = [
  { path: 'all-posts', component: AllPostsComponent }
]

@NgModule({
  declarations: [AllPostsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ForumModule { }
