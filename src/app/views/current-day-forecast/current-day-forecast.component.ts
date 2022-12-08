import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Coords } from 'src/app/interfaces/coords.i';
import { CurrentLocationService } from 'src/app/services/current-location.service';
import { environment } from 'environment';

@Component({
  selector: 'app-current-day-forecast',
  templateUrl: './current-day-forecast.component.html',
  styleUrls: ['./current-day-forecast.component.scss'],
})
export class CurrentDayForecastComponent implements OnInit {
  location: Coords = { latitude: 0, longitude: 0 };
  weatherData: any;
  weatherDataList: any;

  constructor(
    private currentLocationService: CurrentLocationService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.currentLocationService
      .getCurrentLocation()
      .subscribe((data) => (this.location = data));

    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.location.latitude}&lon=${this.location.longitude}&cnt=5&units=metric&appid=${environment.apiKey}`
      )
      .subscribe((data) => {
        this.weatherData = data;
        this.weatherDataList = [
          {
            main: this.weatherData.main,
            weather: this.weatherData.weather,
            wind: this.weatherData.wind,
          },
        ];
      }),
      (err: HttpErrorResponse) => alert(err.message);
  }
}
