import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environment';

@Component({
  selector: 'app-four-days-forecast',
  templateUrl: './four-days-forecast.component.html',
  styleUrls: ['./four-days-forecast.component.scss'],
})
export class FourDaysForecastComponent {
  latitude: number = 45.7998336;
  longitude: number = 9.09312;
  
  constructor(private http: HttpClient) {}

  weatherData$: any = this.http.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&appid=${environment.apiKey}`
  );


}
