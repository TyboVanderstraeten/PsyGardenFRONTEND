import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDataService } from '../event-data.service';
import { Event } from 'src/app/modules/event/event.model';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  private _fetchEvents$: Observable<Event[]>
    = this._eventDataService.events$;

  constructor(
    private _eventDataService: EventDataService,
    private _authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  get events$(): Observable<Event[]> {
    return this._fetchEvents$;
  }

  isUserLoggedIn(): boolean {
    return this._authenticationService.token != null && this._authenticationService.token != "";
  }
}
