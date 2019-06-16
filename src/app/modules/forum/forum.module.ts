import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  { path: 'all-posts',canActivate:[AuthGuard], component: AllPostsComponent }
]

@NgModule({
  declarations: [AllPostsComponent, PostComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ForumModule { }
