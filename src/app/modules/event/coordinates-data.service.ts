import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coordinates } from './coordinates.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesDataService {
  public addressString: String;

  constructor(private _http: HttpClient) { }

  get coordinates$(): Observable<Coordinates> {
    let headers = new HttpHeaders();
    //headers.append('Access-Control-Allow-Origin', '*');
    return this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?${this.addressString}+&key=${environment.googleApiKey}`,
      { headers: headers }
    ).pipe(
      map(
        (coordinatesJSON: any): Coordinates => Coordinates.fromJSON(coordinatesJSON)
      )
    );
  }
}
