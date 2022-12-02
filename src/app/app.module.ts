import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourDaysForecastComponent } from './components/four-days-forecast/four-days-forecast.component';
import { CurrentDayForecastComponent } from './components/current-day-forecast/current-day-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    FourDaysForecastComponent,
    CurrentDayForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
