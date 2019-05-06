import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GenreComponent } from './genre/genre.component';
import { AllGenresComponent } from './all-genres/all-genres.component';
import { Routes, RouterModule } from '@angular/router';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { RemoveGenreComponent } from './remove-genre/remove-genre.component';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  { path: 'genres', component: AllGenresComponent },
  { path: 'add-genre', canActivate: [AuthGuard], component: AddGenreComponent },
  { path: 'edit-genre/:id', canActivate: [AuthGuard], component: EditGenreComponent },
  { path: 'remove-genre/:id', canActivate: [AuthGuard], component: RemoveGenreComponent }
];

@NgModule({
  declarations: [GenreComponent, AllGenresComponent, AddGenreComponent, EditGenreComponent, RemoveGenreComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GenreModule { }
