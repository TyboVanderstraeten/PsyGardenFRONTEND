import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../user/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private _http: HttpClient) { }

  get users$(): Observable<User[]> {
    return this._http.get(`${environment.psyGardenApiUrl}/Users`)
      .pipe(
        map(
          (usersListJSON: any[]): User[] => usersListJSON.map(User.fromJSON)
        )
      );
  }
}
