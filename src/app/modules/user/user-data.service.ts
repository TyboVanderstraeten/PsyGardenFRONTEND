import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private _http: HttpClient) {
  }

  get user$(): Observable<User> {
    var userEmail = localStorage.getItem('currentUserEmail');
    return this._http.get(`${environment.psyGardenApiUrl}/Users/${userEmail}`)
      .pipe(
        map(
          (userJSON: any): User => User.fromJSON(userJSON)
        )
      );
  }

  addToInterested(eventId: Number): Observable<any> {
    var userEmail = localStorage.getItem('currentUserEmail');
    return this._http.post(`${environment.psyGardenApiUrl}/Users/interested/${userEmail}?eventId=${eventId}`,
      {}
    );
  }

  addToGoing(eventId: Number): Observable<any> {
    var userEmail = localStorage.getItem('currentUserEmail');
    return this._http.post(`${environment.psyGardenApiUrl}/Users/going/${userEmail}?eventId=${eventId}`,
      {}
    );
  }

  removeFromInterested(eventId: Number): Observable<any> {
    var userEmail = localStorage.getItem('currentUserEmail');
    return this._http.delete(
      `${environment.psyGardenApiUrl}/Users/interested/${userEmail}?eventId=${eventId}`
    );
  }

  removeFromGoing(eventId: Number): Observable<any> {
    var userEmail = localStorage.getItem('currentUserEmail');
    return this._http.delete(
      `${environment.psyGardenApiUrl}/Users/going/${userEmail}?eventId=${eventId}`
    );
  }
}
