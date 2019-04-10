import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDataService } from 'src/app/data-services/event-data.service';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-full',
  templateUrl: './event-full.component.html',
  styleUrls: ['./event-full.component.css']
})
export class EventFullComponent implements OnInit, OnDestroy {
  private _id: Number;
  private _subscription: any;
  private _fetchEvent$: Observable<Event>;

  constructor(private _eventDataService: EventDataService, private _route: ActivatedRoute) {
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

}
