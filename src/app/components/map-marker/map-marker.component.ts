import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css']
})
export class MapMarkerComponent implements OnInit {
  @Input() public event: Event;
  private _latitude: Number;
  private _longitude: Number;
  
  constructor(latitude: Number, longitude: Number) {
    this._latitude = latitude;
    this._longitude = longitude;
  }

  get latitude(): Number { return this._latitude; }
  get longitude(): Number { return this._longitude; }

  // calculateCoordinates(street: string, streetNr: string, city: String, zipCode: String, country: Number): Number[] {
  //   const coordinates = Array<Number>();
  //   coordinates.push(50.9866922);
  //   coordinates.push(3.5867666);
  //   return coordinates;
  // }

  ngOnInit() {
  }

}
