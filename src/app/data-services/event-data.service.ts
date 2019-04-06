import { Injectable } from '@angular/core';
import { EVENTS } from './mock-data/mock-events';
import { Event } from 'src/app/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  private _events = EVENTS;

  constructor() { }

  get events():Event[]{
    return this._events;
  }

  addNewEvent(event:Event){
    this._events.push(event);
  }

}
