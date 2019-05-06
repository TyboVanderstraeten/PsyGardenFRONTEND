import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CoordinatesDataService } from '../coordinates-data.service';
import { Event } from 'src/app/modules/event/event.model';
import{Coordinates} from 'src/app/modules/event/coordinates.model';

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
      = `${this.event.street}+${this.event.streetNr}+${this.event.city}+
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
