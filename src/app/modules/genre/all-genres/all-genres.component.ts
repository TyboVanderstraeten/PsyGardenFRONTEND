import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../genre.model';
import { GenreDataService } from '../genre-data.service';

@Component({
  selector: 'app-all-genres',
  templateUrl: './all-genres.component.html',
  styleUrls: ['./all-genres.component.css']
})
export class AllGenresComponent implements OnInit {

  private _fetchGenres$: Observable<Genre[]>
    = this._genreDataService.genres$;

  constructor(private _genreDataService: GenreDataService) { }

  ngOnInit() {
  }

  get genres$():Observable<Genre[]>{
    return this._fetchGenres$;
  }

}
