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

  addToInterested(eventId: Number) {
    this._userDataService.addToInterested(eventId)
      .subscribe((response) => {
        if (response) {
          //this._router.navigate(['goings']);
          //window.location.href='goings';
          this.reloadComponent();
        }
      });
  }

  removeFromGoing(eventId: Number) {
    this._userDataService.removeFromGoing(eventId)
      .subscribe((response) => {
        if (response) {
          //this._router.navigate(['goings']);
          //window.location.href='goings';
          this.reloadComponent();
        }
      });
  }

  reloadComponent() {
    this.ngOnDestroy();
    this.ngOnInit();
  }
}
