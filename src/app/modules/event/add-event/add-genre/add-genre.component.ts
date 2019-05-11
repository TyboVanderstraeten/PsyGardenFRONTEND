import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventDataService } from '../../event-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventGenre } from '../../eventgenre.model';
import { GenreDataService } from 'src/app/modules/genre/genre-data.service';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/modules/genre/genre.model';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _genre: FormGroup;
  private _errorMessage: string;

  private _fetchGenres$: Observable<Genre[]>
    = this._genreDataService.genres$;

  constructor(
    private _formBuilder: FormBuilder,
    private _eventDataService: EventDataService,
    private _genreDataService: GenreDataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this._id = +params['id'];
    });
    this._genre = this._formBuilder.group({
      genreId: ['', [Validators.required]]
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._id = 0;
  }

  get genres$(): Observable<Genre[]> {
    return this._fetchGenres$;
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'is required';
    }
  }

  onSubmit(actionType: string) {
    this._eventDataService.addGenreToEvent(
      this._id,
      new EventGenre(
        this._genre.value.genreId
      )
    ).subscribe((response) => {
      if (response) {
        if (actionType === "Next") {
          this._router.navigate([`add-event/${response.eventId}/add-price`]);
        } else if (actionType === "Another") {
          this._router.navigate([`add-event/${response.eventId}/add-genre`]);
        }
      } else {
        this._errorMessage = 'Could not add genre';
      }
    });
  }

  cancel() {
    this._eventDataService.removeEvent(this._id).subscribe();
    this._router.navigate(['all-events']);
  }

}
