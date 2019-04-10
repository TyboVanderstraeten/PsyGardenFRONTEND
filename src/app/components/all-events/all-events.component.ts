import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/data-services/event-data.service';
import { Event } from 'src/app/models/event.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  private _fetchEvents$: Observable<Event[]>
    = this._eventDataService.events$;

  constructor(private _eventDataService: EventDataService) {
  }

  ngOnInit() {
  }

  get events$(): Observable<Event[]> {
    return this._fetchEvents$;
  }

}
