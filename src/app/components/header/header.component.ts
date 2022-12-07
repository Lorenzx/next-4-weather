import { Component } from '@angular/core';
import { Coords } from 'src/app/interfaces/coords.i';
import { CurrentLocationService } from 'src/app/services/current-location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    title: string = 'Angular Weather';
    location: Coords = {latitude: 0, longitude: 0};

  constructor(private currentLocationService: CurrentLocationService ) {}
    
  getLocation() {
    this.currentLocationService
      .getCurrentLocation()
      .subscribe((data) => (this.location = data));
  }
}
