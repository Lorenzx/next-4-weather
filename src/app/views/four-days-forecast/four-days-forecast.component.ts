import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../../environment';
import { CurrentLocationService } from 'src/app/services/current-location.service';
import { Coords } from 'src/app/interfaces/coords.i';

@Component({
  selector: 'app-four-days-forecast',
  templateUrl: './four-days-forecast.component.html',
  styleUrls: ['./four-days-forecast.component.scss'],
})
export class FourDaysForecastComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;
  location: Coords = { latitude: 0, longitude: 0 };
  weatherData: any;
  weatherDataList: any;

  constructor(
    private http: HttpClient,
    private currentLocationService: CurrentLocationService
  ) {}

  ngOnInit(): void {
    this.currentLocationService.getCurrentLocation().subscribe((data) => {
      this.location = data;
    });

    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${this.location.latitude}&lon=${this.location.longitude}&cnt=5&units=metric&appid=${environment.apiKey}`
      )
      .subscribe((data) => {
        this.weatherData = data;
        this.weatherDataList = this.weatherData?.list.splice(1, 4);
        console.log('weather data list post splice', this.weatherDataList);
      }),
      (err: HttpErrorResponse) => alert(err.message);
  }
}
// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
