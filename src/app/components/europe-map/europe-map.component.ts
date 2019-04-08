import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/data-services/event-data.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-europe-map',
  templateUrl: './europe-map.component.html',
  styleUrls: [
    './europe-map.component.css']
})
export class EuropeMapComponent implements OnInit {
  constructor(private _eventDataService: EventDataService) {
  }

  get events(): Event[] {
    return this._eventDataService.events;
  }

  addNewEvent(event: Event) {
    this._eventDataService.addNewEvent(event);
  }

  ngOnInit() {
  }

}
