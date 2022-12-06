import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environment';
import { CurrentLocationService } from 'src/app/services/current-location.service';

@Component({
  selector: 'app-four-days-forecast',
  templateUrl: './four-days-forecast.component.html',
  styleUrls: ['./four-days-forecast.component.scss'],
})
export class FourDaysForecastComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;
  weatherData: any;
  iconBaseUrl: string = 'https://openweathermap.org/img/w/';
  iconExtension: string = '.png';

  
  constructor(private http: HttpClient, private currentLocationService: CurrentLocationService) {}

ngOnInit(): void {
  this.currentLocationService.getCurrentLocation()
  .subscribe(data => {
    this.latitude = data.latitude; 
    this.longitude = data.longitude
  })

   this.http.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&cnt=5&units=metric&appid=${environment.apiKey}`
  ).subscribe(data => this.weatherData = data);

}




}
// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}