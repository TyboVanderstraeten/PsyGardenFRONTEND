import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goings',
  templateUrl: './goings.component.html',
  styleUrls: ['./goings.component.css']
})
export class GoingsComponent implements OnInit {
  // private _email: string;
  // private _subscription: any;
  private _fetchUser$: Observable<User>;

  constructor(
    private _userDataService: UserDataService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    // this._subscription = this._route.params.subscribe(params => {
    //   this._email = params['email'];
    // });
    // this._userDataService.userEmail = this._email;
    this._fetchUser$ = this._userDataService.user$;
  }

  ngOnDestroy() {
    // this._subscription.unsubscribe();
    // this._userDataService.userEmail = null;
    // this._userDataService.userEmail = null;
  }

  get user$(): Observable<User> {
    return this._fetchUser$;
  }

  addToInterested(eventId: Number) {
    this._userDataService.addToInterested(eventId)
      .subscribe();
  }

  removeFromGoing(eventId: Number) {
    this._userDataService.removeFromGoing(eventId)
      .subscribe();
  }

}
