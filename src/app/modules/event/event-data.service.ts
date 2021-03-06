import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Event } from 'src/app/modules/event/event.model';
import { Link } from './link.model';
import { Price } from './price.model';
import { EventGenre } from './eventgenre.model';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  public eventId: Number;

  constructor(private _http: HttpClient) { }

  get events$(): Observable<Event[]> {
    return this._http.get(`${environment.psyGardenApiUrl}/Events/`)
      .pipe(
        map(
          (eventListJSON: any[]): Event[] => eventListJSON.map(Event.fromJSON)
        )
      );
  }

  get event$(): Observable<Event> {
    return this._http.get(`${environment.psyGardenApiUrl}/Events/${this.eventId}`)
      .pipe(
        map(
          (eventJSON: any): Event => Event.fromJSON(eventJSON)
        )
      );
  }

  addNewEvent(event: Event): Observable<Event> {
    return this._http.post(`${environment.psyGardenApiUrl}/Events/`, event.toJSON())
      .pipe(
        map(
          (eventJSON: any): Event => Event.fromJSON(eventJSON)
        )
      );
  }

  addGenreToEvent(eventId: Number, genre: EventGenre): Observable<Event> {
    return this._http.post(`${environment.psyGardenApiUrl}/Events/${eventId}/genre`, genre.toJSON())
      .pipe(
        map(
          (eventJSON: any): Event => Event.fromJSON(eventJSON)
        )
      );
  }

  addLinkToEvent(eventId: Number, link: Link): Observable<Event> {
    return this._http.post(`${environment.psyGardenApiUrl}/Events/${eventId}/link`, link.toJSON())
      .pipe(
        map(
          (eventJSON: any): Event => Event.fromJSON(eventJSON)
        )
      );
  }

  addPriceToEvent(eventId: Number, price: Price): Observable<Event> {
    return this._http.post(`${environment.psyGardenApiUrl}/Events/${eventId}/price`, price.toJSON())
      .pipe(
        map(

          (eventJSON: any): Event => Event.fromJSON(eventJSON)
        )
      );
  }

  editEvent(eventId: Number, event: Event): Observable<Event> {
    return this._http.put(`${environment.psyGardenApiUrl}/Events/${eventId}`, event.toJSON())
      .pipe(
        map(
          (eventJSON: any): Event => Event.fromJSON(eventJSON)
        )
      );
  }

  removeEvent(eventId: Number): Observable<Event> {
    return this._http.delete(`${environment.psyGardenApiUrl}/Events/${eventId}`)
      .pipe(
        map(
          (eventJSON: any): Event => Event.fromJSON(eventJSON)
        )
      );
  }
}
