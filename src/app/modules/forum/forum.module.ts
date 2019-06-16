import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponent } from './post/post.component';
import { AuthGuard } from '../user/auth.guard';
import { PostFullComponent } from './post-full/post-full.component';

const routes: Routes = [
  { path: 'all-posts', canActivate: [AuthGuard], component: AllPostsComponent },
  { path: 'all-posts/:id', canActivate: [AuthGuard], component: PostFullComponent }
]

@NgModule({
  declarations: [AllPostsComponent, PostComponent, PostFullComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ForumModule { }
