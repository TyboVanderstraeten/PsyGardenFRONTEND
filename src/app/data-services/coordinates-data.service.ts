import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordinates } from '../models/coordinates.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesDataService {

  constructor(private _http: HttpClient) { }

  get coordinates$(): Observable<Coordinates> {
    return this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=Walgracht+23,+Deinze,+Oost-Vlaanderen,+Belgie+&key=AIzaSyBxI2mg6yieter_1y-tj5SY4s9sbHjhARo`)
      .pipe(
        map(
          (coordinatesJSON: any): Coordinates => Coordinates.fromJSON(coordinatesJSON)
        )
      );
  }
}
