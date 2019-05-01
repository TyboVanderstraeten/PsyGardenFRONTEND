import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Event } from 'src/app/modules/event/event.model';

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
}
