import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreDataService } from '../genre-data.service';

@Component({
  selector: 'app-remove-genre',
  templateUrl: './remove-genre.component.html',
  styleUrls: ['./remove-genre.component.css']
})
export class RemoveGenreComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _errorMessage: string;

  constructor(
    private _genreDataService: GenreDataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this._id = +params['id'];
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._id = 0;
  }

  onSubmit() {
    this._genreDataService.removeGenre(this._id)
      .subscribe((response) => {
        if (response) {
          this._router.navigate(['genres']);
        } else {
          this._errorMessage = 'Could not remove genre';
        }
      })
  }

}
