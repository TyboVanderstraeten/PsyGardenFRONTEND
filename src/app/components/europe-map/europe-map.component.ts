import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDataService } from 'src/app/data-services/event-data.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-europe-map',
  templateUrl: './europe-map.component.html',
  styleUrls: ['./europe-map.component.css']
})

export class EuropeMapComponent implements OnInit {
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
