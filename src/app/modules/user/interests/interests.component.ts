import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  private _fetchUser$: Observable<User>;

  constructor(
    private _userDataService: UserDataService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._fetchUser$ = this._userDataService.user$;
  }

  ngOnDestroy() {
  }

  get user$(): Observable<User> {
    return this._fetchUser$;
  }

  addToGoing(eventId: Number) {
    this._userDataService.addToGoing(eventId)
      .subscribe((response) => {
        if (response) {
          this._router.navigate(['interests']);
        }
      });
  }

  removeFromInterested(eventId: Number) {
    this._userDataService.removeFromInterested(eventId)
      .subscribe((response) => {
        if (response) {
          this._router.navigate(['interests']);
        }
      });
  }
}
