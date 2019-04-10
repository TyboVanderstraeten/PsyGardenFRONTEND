import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-full',
  templateUrl: './event-full.component.html',
  styleUrls: ['./event-full.component.css']
})
export class EventFullComponent implements OnInit {
  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
