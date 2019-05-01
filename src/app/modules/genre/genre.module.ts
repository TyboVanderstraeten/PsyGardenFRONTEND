import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { GenreComponent } from './genre/genre.component';
import { AllGenresComponent } from './all-genres/all-genres.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'genres', component: AllGenresComponent }
];

@NgModule({
  declarations: [GenreComponent, AllGenresComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class GenreModule { }
