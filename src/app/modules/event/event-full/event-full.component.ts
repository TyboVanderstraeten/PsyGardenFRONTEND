import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDataService } from '../event-data.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/modules/event/event.model';
import { UserDataService } from '../../user/user-data.service';

@Component({
  selector: 'app-event-full',
  templateUrl: './event-full.component.html',
  styleUrls: ['./event-full.component.css']
})
export class EventFullComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _fetchEvent$: Observable<Event>;

  constructor(
    private _eventDataService: EventDataService,
    private _route: ActivatedRoute,
    private _userDataService: UserDataService) {
  }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this._id = +params['id'];
    });
    this._eventDataService.eventId = this._id;
    this._fetchEvent$ = this._eventDataService.event$;
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._eventDataService.eventId = 0;
  }

  get event$(): Observable<Event> {
    return this._fetchEvent$;
  }

  addToInterested(eventId: Number) {
    this._userDataService.addToInterested(eventId)
      .subscribe();
  }

  addToGoing(eventId: Number) {
    this._userDataService.addToGoing(eventId)
      .subscribe();
  }
}
