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
  public userEmail: string;

  constructor(private _http: HttpClient) { }

  get user$(): Observable<User> {
    return this._http.get(`${environment.psyGardenApiUrl}/Users/${this.userEmail}`)
      .pipe(
        map(
          (userJSON: any): User => User.fromJSON(userJSON)
        )
      );
  }

  // addToInterested(eventId: Number) {
  //   return this._http.post(`${environment.psyGardenApiUrl}/Users/interested/`,
  //     { email: this.userEmail, eventId: eventId }
  //   );
  // }



  // addToGoing(eventId: Number) {
  //   this._http.post(
  //     `${environment.psyGardenApiUrl}/Users/going/${this.userEmail.replace('@', '%40')}?eventId=${eventId}`,
  //     {}
  //   );
  //   console.log(`${environment.psyGardenApiUrl}/Users/going/${this.userEmail.replace('@', '%40')}?eventId=${eventId}`);
  // }

  removeFromInterested(eventId: Number): Observable<any> {
    return this._http.delete(
      `${environment.psyGardenApiUrl}/Users/interested/${this.userEmail}?eventId=${eventId}`
    );
  }
  
  removeFromGoing(eventId: Number): Observable<any> {
    return this._http.delete(
      `${environment.psyGardenApiUrl}/Users/going/${this.userEmail}?eventId=${eventId}`
    );
  }
}
