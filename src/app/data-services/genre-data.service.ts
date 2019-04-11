import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genre } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreDataService {

  constructor(private _http: HttpClient) {

  }

  get genres$(): Observable<Genre[]> {
    return this._http.get(`${environment.psyGardenApiUrl}/Genres/`)
      .pipe(
        map(
          (genreListJSON: any[]): Genre[] => genreListJSON.map(Genre.fromJSON)
        )
      );
  }

  addGenre(genre:Genre):void{
    this._http.post(`${environment.psyGardenApiUrl}/Genres/`,genre);
  }

  removeGenre(id:Number):void{
    this._http.delete(`${environment.psyGardenApiUrl}/Genres/${id}`)
  }
}
