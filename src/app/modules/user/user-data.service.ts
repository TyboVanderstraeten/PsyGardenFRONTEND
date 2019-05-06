import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { errorHandler } from '@angular/platform-browser/src/browser';

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

  // addToInterested() {
  //   this._http.post(
  //     `${environment.psyGardenApiUrl}/Users/interested`,
  //     { email: this.userEmail, eventId: 2 }
  //   );
  // }

  // removeFromInterested():Observable<any> {
  //   this._http.delete(
  //     `${environment.psyGardenApiUrl}/Users/interested/${this.userEmail}?eventId=2`
  //   )
  // }

  addToGoing(eventId: Number) {
    this._http.post(
      `${environment.psyGardenApiUrl}/Users/going/${this.userEmail.replace('@','%40')}?eventId=${eventId}`,
      {}
    );
    // console.log(`${environment.psyGardenApiUrl}/Users/going/${this.userEmail.replace('@','%40')}?eventId=${eventId}`);
  }

  // removeFromGoing() {

  // }
}
