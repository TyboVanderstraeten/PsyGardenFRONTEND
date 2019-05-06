import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenreDataService } from '../genre-data.service';
import { Genre } from '../genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  private _genre: FormGroup;
  private _errorMessage: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _genreDataService: GenreDataService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._genre = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(25)]]
    });
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} characters (got ${errors.minlength.actualLength})`;
    } else if (errors.maxLength) {
      return `can have max. ${errors.maxLength.requiredLength} characters (got ${errors.maxLength.actualLength})`;
    }
  }

  onSubmit() {
    this._genreDataService.addNewGenre(
      new Genre(
        this._genre.value.name
      )
    ).subscribe((response) => {
      if (response) {
        this._router.navigate(['genres']);
      } else {
        this._errorMessage = 'Could not add genre';
      }
    });
  }

}
