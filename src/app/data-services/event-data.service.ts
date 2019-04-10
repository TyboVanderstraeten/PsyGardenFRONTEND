import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from 'src/app/models/event.model';

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

  deleteEvent$(): boolean {
    if (this._http.delete(`${environment.psyGardenApiUrl}/Events/${this.eventId}`)) {
      return true;
    }
    else {
      return false;
    }
  }
}
