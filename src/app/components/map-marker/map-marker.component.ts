import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CoordinatesDataService } from 'src/app/data-services/coordinates-data.service';
import { Coordinates } from 'src/app/models/coordinates.model';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css']
})

export class MapMarkerComponent implements OnInit {
  @Input() public event: Event;
  @Input() public infowindow: Boolean = false;

  private _fetchCoordinates$: Observable<Coordinates>;

  constructor(private _coordinatesDataService: CoordinatesDataService) {

  }

  ngOnInit() {
    this._coordinatesDataService.addressString
      = `address=${this.event.street}+${this.event.streetNr}+${this.event.city}+
      ${this.event.zipCode}+${this.event.region}+${this.event.country}`;
    this._fetchCoordinates$ = this._coordinatesDataService.coordinates$;
  }

  ngOnDestroy() {
    this._coordinatesDataService.addressString = '';
  }

  get coordinates$(): Observable<Coordinates> {
    return this._fetchCoordinates$;
  }
}
