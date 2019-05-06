import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-goings',
  templateUrl: './goings.component.html',
  styleUrls: ['./goings.component.css']
})
export class GoingsComponent implements OnInit {
  private _fetchUser$: Observable<User>;

  constructor(
    private _userDataService: UserDataService
  ) { }

  ngOnInit() {
    this._fetchUser$ = this._userDataService.user$;
  }

  ngOnDestroy() {
  }

  get user$(): Observable<User> {
    return this._fetchUser$;
  }

  addToInterested(eventId: Number) {
    this._userDataService.addToInterested(eventId)
      .subscribe();
    window.location.reload();
  }

  removeFromGoing(eventId: Number) {
    this._userDataService.removeFromGoing(eventId)
      .subscribe();
    window.location.reload();
  }

}
