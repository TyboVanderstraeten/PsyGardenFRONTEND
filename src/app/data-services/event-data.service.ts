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
  constructor(private _http: HttpClient) {
  }

  get events$(): Observable<Event[]> {
    return this._http.get(`https://localhost:44359${environment.psyGardenApiUrl}/Events/`)
      .pipe(
        map(
          (list: any[]): Event[] => list.map(Event.fromJSON)
        )
      );
  }
}
