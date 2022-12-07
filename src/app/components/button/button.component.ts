import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public text: string = 'Default cta text';
  @Input() public iconUrl: string;
  @Input() public backgroundColor: string;
  @Input() public onClickFunc: Function;
  constructor() {}
}
