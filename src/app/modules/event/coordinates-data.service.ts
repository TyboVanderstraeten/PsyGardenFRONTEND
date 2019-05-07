import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coordinates } from './coordinates.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesDataService {
  public addressString: String;

  constructor(private _http: HttpClient) {
  }

  get coordinates$(): Observable<Coordinates> {
    return this._http.get(`https://maps.googleaDELETEpis.com/maps/api/geocode/json?address=${this.addressString}+&key=${environment.googleApiKey}`)
      .pipe(
        map(
          (coordinatesJSON: any): Coordinates => Coordinates.fromJSON(coordinatesJSON)
        )
      );
  }
}
