import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Coords } from '../interfaces/coords.i';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class CurrentLocationService {
  constructor(private http: HttpClient) {}

  getCurrentLocation(): any {
    let isLoading = true;
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
          isLoading = false;
        },
        (err) => console.log(err)
      )
    })
  }


}
