import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  private _email: string;
  private _subscription: any;
  private _fetchUser$: Observable<User>;

  constructor(
    private _userDataService: UserDataService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this._email = params['email'];
    });
    this._userDataService.userEmail = this._email;
    this._fetchUser$ = this._userDataService.user$;
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._userDataService.userEmail = null;
    this._userDataService.userEmail = null;
  }

  get user$(): Observable<User> {
    return this._fetchUser$;
  }

  // addToInterested(){
  //   this._userDataService.addToInterested();
  // }

  // removeFromInterested(){
  //   this._userDataService.removeFromInterested().subscribe(()=>console.log("removed from interested"));
  // }

  // addToGoing(){
  //   this._userDataService.addToGoing();
  // }

}
