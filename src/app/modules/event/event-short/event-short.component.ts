import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/modules/event/event.model';

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
