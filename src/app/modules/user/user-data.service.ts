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
}
