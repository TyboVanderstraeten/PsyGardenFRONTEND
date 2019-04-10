import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EuropeMapComponent } from './components/europe-map/europe-map.component';
import { MapMarkerComponent } from './components/map-marker/map-marker.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { EventShortComponent } from './components/event-short/event-short.component';
import { EventFullComponent } from './components/event-full/event-full.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EuropeMapComponent,
    MapMarkerComponent,
    AllEventsComponent,
    EventShortComponent,
    EventFullComponent,
    PageNotFoundComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    HttpClientModule,
    //Google API-key configuration
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxI2mg6yieter_1y-tj5SY4s9sbHjhARo'
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}