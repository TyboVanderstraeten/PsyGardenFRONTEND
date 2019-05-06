import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';
import { EventFullComponent } from './event-full/event-full.component';
import { EventShortComponent } from './event-short/event-short.component';
import { EuropeMapComponent } from './europe-map/europe-map.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [
  { path: 'europe-map', component: EuropeMapComponent },
  { path: 'all-events', component: AllEventsComponent },
  { path: 'all-events/detail-page/:id', component: EventFullComponent },
  { path: 'add-event', component: AddEventComponent }
];

@NgModule({
  declarations: [AllEventsComponent, EventFullComponent, EventShortComponent, EuropeMapComponent, MapMarkerComponent, AddEventComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxI2mg6yieter_1y-tj5SY4s9sbHjhARo'
    }),
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EventModule { }
