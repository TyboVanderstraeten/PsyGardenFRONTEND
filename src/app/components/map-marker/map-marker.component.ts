import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CoordinatesDataService } from 'src/app/data-services/coordinates-data.service';
import { Coordinates } from 'src/app/models/coordinates.model';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css']
})

export class MapMarkerComponent implements OnInit {
  @Input() public street: String;
  @Input() public streetNr: String;
  @Input() public city: String;
  @Input() public zipCode: String;
  @Input() public region: String;
  @Input() public country: String;
  s
  private _fetchCoordinates$: Observable<Coordinates>;

  constructor(private _coordinatesDataService: CoordinatesDataService) {

  }

  ngOnInit() {
    this._coordinatesDataService.addressString
      = `address=${this.street}+${this.streetNr},+${this.city}+${this.zipCode},+${this.region},+${this.country}`;
    this._fetchCoordinates$ = this._coordinatesDataService.coordinates$;
  }

  ngOnDestroy() {
    this._coordinatesDataService.addressString = '';
  }

  get coordinates$(): Observable<Coordinates> {
    return this._fetchCoordinates$;
  }
}
