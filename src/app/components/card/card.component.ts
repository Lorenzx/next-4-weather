import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public item: any;
  @Input() public i: number;

  iconBaseUrl: string = 'https://openweathermap.org/img/w/';
  iconExtension: string = '.png';

  clickedCard(card) {
    console.log(card);
  }
}
