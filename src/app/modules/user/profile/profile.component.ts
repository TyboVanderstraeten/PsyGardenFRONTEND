import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { UserDataService } from '../user-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private _fetchUser$: Observable<User>;

  constructor(
    private _userDataService: UserDataService,
  ) { }

  ngOnInit() {
    this._fetchUser$ = this._userDataService.user$;
  }

  ngOnDestroy() {
  }

  get user$(): Observable<User> {
    return this._fetchUser$;
  }

}
