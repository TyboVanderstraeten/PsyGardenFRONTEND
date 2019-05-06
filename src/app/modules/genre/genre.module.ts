import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GenreComponent } from './genre/genre.component';
import { AllGenresComponent } from './all-genres/all-genres.component';
import { Routes, RouterModule } from '@angular/router';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';

const routes: Routes = [
  { path: 'genres', component: AllGenresComponent },
  { path: 'add-genre', component: AddGenreComponent },
  { path: 'edit-genre/:id', component: EditGenreComponent }
];

@NgModule({
  declarations: [GenreComponent, AllGenresComponent, AddGenreComponent, EditGenreComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GenreModule { }
