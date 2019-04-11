import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { EuropeMapComponent } from './components/europe-map/europe-map.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { EventFullComponent } from './components/event-full/event-full.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'all-events', pathMatch: 'full' },
  { path: 'europe-map', component: EuropeMapComponent },
  { path: 'all-events', component: AllEventsComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'all-events/detail-page/:id', component: EventFullComponent },
  { path: 'europe-map/detail-page/:id', component: EventFullComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
