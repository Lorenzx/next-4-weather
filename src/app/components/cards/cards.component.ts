import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() public weatherDataList: any;

  iconBaseUrl: string = 'https://openweathermap.org/img/w/';
  iconExtension: string = '.png';

  ngOnInit() {
    console.log('weather data list in card', this.weatherDataList);
  }
}