import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/models/event.model';
//import { Country } from 'src/app/models/country.enum';

@Component({
  selector: 'app-event-short',
  templateUrl: './event-short.component.html',
  styleUrls: ['./event-short.component.css']
})
export class EventShortComponent implements OnInit {
  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
