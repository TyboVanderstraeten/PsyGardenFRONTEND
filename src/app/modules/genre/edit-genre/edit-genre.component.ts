import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GenreDataService } from '../genre-data.service';
import { Genre } from '../genre.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _genre: FormGroup;
  private _errorMessage: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _genreDataService: GenreDataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this._id = +params['id'];
    });
    this._genre = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(25)]]
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._id = 0;
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
    this._genreDataService.editGenre(
      this._id, new Genre(
        this._genre.value.name
      )
    ).subscribe((response) => {
      if (response) {
        this._router.navigate(['genres']);
      } else {
        this._errorMessage = 'Could not edit genre';
      }
    })
  }

}
