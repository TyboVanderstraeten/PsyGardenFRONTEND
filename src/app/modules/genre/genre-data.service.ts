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

  addNewGenre(genre: Genre): Observable<Genre> {
    return this._http.post(`${environment.psyGardenApiUrl}/Genres/`, genre.toJSON())
      .pipe(
        map(
          (genreJSON: any): Genre => Genre.fromJSON(genreJSON)
        )
      );
  }

  editGenre(genreId: Number, genre: Genre): Observable<Genre> {
    return this._http.put(`${environment.psyGardenApiUrl}/Genres/${genreId}`, genre.toJSON())
      .pipe(
        map(
          (genreJSON: any): Genre => Genre.fromJSON(genreJSON)
        )
      );
  }

  removeGenre(genreId: Number): Observable<Genre> {
    return this._http.delete(`${environment.psyGardenApiUrl}/Genres/${genreId}`)
      .pipe(
        map(
          (genreJSON: any): Genre => Genre.fromJSON(genreJSON)
        )
      );
  }
}
