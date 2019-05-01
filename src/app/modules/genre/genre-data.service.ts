import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Genre } from './genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreDataService {

  constructor(private _http: HttpClient) { }

  get genres$(): Observable<Genre[]> {
    return this._http.get(`${environment.psyGardenApiUrl}/Genres/`)
      .pipe(
        map(
          (genreListJSON: any[]): Genre[] => genreListJSON.map(Genre.fromJSON)
        )
      );
  }
}
