import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/modules/event/event.model';
import { UserDataService } from '../../user/user-data.service';
import { EventDataService } from '../event-data.service';

@Component({
  selector: 'app-event-short',
  templateUrl: './event-short.component.html',
  styleUrls: ['./event-short.component.css']
})
export class EventShortComponent implements OnInit {
  @Input() event: Event;

  constructor(
    private _eventDataService: EventDataService,
    private _userDataService: UserDataService) { }

  ngOnInit() {
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
