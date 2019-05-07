import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  private _fetchUser$: Observable<User>;

  constructor(
    private _userDataService: UserDataService,
  ) { }

  ngOnInit() {
    this._fetchUser$ = this._userDataService.user$;
  }

  ngOnDestroy() {
    this._fetchUser$ = null;
  }

  get user$(): Observable<User> {
    return this._fetchUser$;
  }

  addToGoing(eventId: Number) {
    this._userDataService.addToGoing(eventId)
      .subscribe((response) => {
        if (response) {
          //this._router.navigate(['interests']);
          //window.location.href='interests';
          this.reloadComponent();
        }
      });
  }

  removeFromInterested(eventId: Number) {
    this._userDataService.removeFromInterested(eventId)
      .subscribe((response) => {
        if (response) {
          //this._router.navigate(['interests']);
          //window.location.href='interests';
          this.reloadComponent();
        }
      });
  }

  reloadComponent() {
    this.ngOnDestroy();
    this.ngOnInit();
  }
}
