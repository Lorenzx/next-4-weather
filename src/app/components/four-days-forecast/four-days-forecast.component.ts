import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environment';

@Component({
  selector: 'app-four-days-forecast',
  templateUrl: './four-days-forecast.component.html',
  styleUrls: ['./four-days-forecast.component.scss'],
})
export class FourDaysForecastComponent {
  latitude: number = 0;
  longitude: number = 0;

  constructor(private http: HttpClient) {}

  weatherData$ = this.http.get(
    `api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&appid=${environment.apiKey}`
  );
}
