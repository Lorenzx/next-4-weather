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
  isModalVisible: Boolean = false;

  handleCardModal(id: number) {
    // Get the modal
    const modal: HTMLElement = document.querySelector(`#card-modal-${id}`);
    this.isModalVisible = !this.isModalVisible;
    if (this.isModalVisible) {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
  }
  onModalClose(isVisible: boolean) {
    this.isModalVisible = isVisible;
  }
}
