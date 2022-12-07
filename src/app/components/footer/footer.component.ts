import { Component, Input } from '@angular/core';
import { Coords } from 'src/app/interfaces/coords.i';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() public location: Coords = {latitude: 0, longitude: 0};
}
