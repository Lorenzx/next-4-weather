import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Coords } from '../interfaces/coords.i';

@Injectable({
  providedIn: 'root'
})
export class CurrentLocationService {
  constructor() {}

  getCurrentLocation(): Observable<Coords> {
    return new Observable(
      (observer) => {
            navigator.geolocation.getCurrentPosition(
            position => {
            observer.next({latitude: position.coords.latitude, longitude: position.coords.longitude});
            observer.complete()
            },
            (err) => console.log(err)
            )
      }
    )
  }

  
}
