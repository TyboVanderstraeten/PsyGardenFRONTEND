import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EuropeMapComponent } from './components/europe-map/europe-map.component';

//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EuropeMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxI2mg6yieter_1y-tj5SY4s9sbHjhARo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title: string = 'PsyGarden europe';
  lat: Number = 39.571625;
  lng: Number = 2.650544;
  zoom: Number = 15;
}
