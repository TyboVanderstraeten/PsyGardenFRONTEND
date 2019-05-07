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
import { RemoveEventComponent } from './remove-event/remove-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AuthGuard } from '../user/auth.guard';
import { environment } from 'src/environments/environment.prod';
import { AddLinkComponent } from './add-event/add-link/add-link.component';
import { AddPriceComponent } from './add-event/add-price/add-price.component';
import { AddGenreComponent } from './add-event/add-genre/add-genre.component';

const routes: Routes = [
  { path: 'europe-map', component: EuropeMapComponent },
  { path: 'all-events', component: AllEventsComponent },
  { path: 'all-events/detail-page/:id', component: EventFullComponent },
  { path: 'add-event', canActivate: [AuthGuard], component: AddEventComponent },
  { path: 'add-event/:id/add-link', canActivate: [AuthGuard], component: AddLinkComponent },
  { path: 'add-event/:id/add-price', canActivate: [AuthGuard], component: AddPriceComponent },
  { path: 'remove-event/:id', canActivate: [AuthGuard], component: RemoveEventComponent },
  { path: 'edit-event/:id', canActivate: [AuthGuard], component: EditEventComponent }
];

@NgModule({
  declarations: [
    AllEventsComponent, EventFullComponent,
    EventShortComponent, EuropeMapComponent,
    MapMarkerComponent, AddEventComponent,
    RemoveEventComponent, EditEventComponent,
    AddLinkComponent, AddPriceComponent, AddGenreComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EventModule { }
