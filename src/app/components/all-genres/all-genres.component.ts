import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreDataService } from 'src/app/data-services/genre-data.service';
import { Genre } from 'src/app/models/genre.model';

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

  get genres$(): Observable<Genre[]> {
    return this._fetchGenres$;
  }

  addNewGenre():void{
    alert();
  }

  removeGenre():void{
    this._genreDataService.removeGenre(1);
  }
}
