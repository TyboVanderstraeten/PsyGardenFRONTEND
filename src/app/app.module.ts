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


//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { UserModule } from './modules/user/user.module';
import { httpInterceptorProviders } from './interceptors';
import { GenreModule } from './modules/genre/genre.module';



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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //Google API-key configuration
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxI2mg6yieter_1y-tj5SY4s9sbHjhARo'
    }),
    MaterialModule,
    UserModule,
    GenreModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule {

}