import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from 'src/app/models/event.model';
import { Coordinates } from 'src/app/models/coordinates.model';

@Injectable({
  providedIn: 'root'
})

export class EventDataService {

  public eventId: Number;

  constructor(private _http: HttpClient) {
  }

  get events$(): Observable<Event[]> {
    return this._http.get(`${environment.psyGardenApiUrl}/Events/`)
      .pipe(
        map(
          (list: any[]): Event[] => list.map(Event.fromJSON)
        )
      );
  }

  get event$(): Observable<Event> {
    return this._http.get(`${environment.psyGardenApiUrl}/Events/${this.eventId}`)
      .pipe(
        map(
          (event: any): Event => Event.fromJSON(event)
        )
      );
  }

  get coordinatesTest$(): Observable<Coordinates> {
    return this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=Walgracht+13,+Deinze,+Oost-Vlaanderen,+&key=AIzaSyBxI2mg6yieter_1y-tj5SY4s9sbHjhARo`)
      .pipe(
        map(
          (coordinates: any): Coordinates => Coordinates.fromJSON(coordinates)
        )
      );
  }
}
