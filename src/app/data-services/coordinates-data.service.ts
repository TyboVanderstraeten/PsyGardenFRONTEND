import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordinates } from '../models/coordinates.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesDataService {

  public addressString: String;
  public apiKeyString: String = 'key=DELETETHISAIzaSyBxI2mg6yieter_1y-tj5SY4s9sbHjhARo';

  constructor(private _http: HttpClient) { }

  get coordinates$(): Observable<Coordinates> {
    return this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?${this.addressString}+&${this.apiKeyString}`)
      .pipe(
        map(
          (coordinatesJSON: any): Coordinates => Coordinates.fromJSON(coordinatesJSON)
        )
      );
  }
}
