import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersDataService } from '../users-data.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  private _fetchUsers$: Observable<User[]>
    = this._usersDataService.users$;

  constructor(
    private _usersDataService: UsersDataService
  ) { }

  ngOnInit() {
  }

  get users$(): Observable<User[]> {
    return this._fetchUsers$;
  }
}
