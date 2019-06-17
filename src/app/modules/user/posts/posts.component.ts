import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private _fetchUser$: Observable<User>;

  constructor(
    private _userDataService: UserDataService,
    private _router: Router
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

}
