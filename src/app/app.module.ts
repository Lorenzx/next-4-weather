import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourDaysForecastComponent } from './views/four-days-forecast/four-days-forecast.component';
import { CurrentDayForecastComponent } from './views/current-day-forecast/current-day-forecast.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    FourDaysForecastComponent,
    CurrentDayForecastComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    CardsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
