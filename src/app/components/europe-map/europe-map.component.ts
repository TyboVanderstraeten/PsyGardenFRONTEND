import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/data-services/event-data.service';
import { Event } from 'src/app/models/event.model';
import { Coordinates } from 'src/app/models/coordinates.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-europe-map',
  templateUrl: './europe-map.component.html',
  styleUrls: ['./europe-map.component.css']
})

export class EuropeMapComponent implements OnInit {
  private _fetchEvents$: Observable<Event[]>
    = this._eventDataService.events$;

  private _fetchCoordinates$: Observable<Coordinates>
    = this._eventDataService.coordinatesTest$;

  constructor(private _eventDataService: EventDataService) {
  }

  ngOnInit() {
  }

  get events$(): Observable<Event[]> {
    return this._fetchEvents$;
  }

  get coordinates$(): Observable<Coordinates> {
    return this._fetchCoordinates$;
  }


}
