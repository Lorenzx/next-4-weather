import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Coords } from 'src/app/interfaces/coords.i';
import { CurrentLocationService } from 'src/app/services/current-location.service';

@Component({
  selector: 'app-current-day-forecast',
  templateUrl: './current-day-forecast.component.html',
  styleUrls: ['./current-day-forecast.component.scss'],
})
export class CurrentDayForecastComponent implements OnInit {
  location: Coords = { latitude: 0, longitude: 0 };


  constructor(private currentLocationService: CurrentLocationService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.currentLocationService
      .getCurrentLocation()
      .subscribe((data) => (this.location = data));
  }

}
