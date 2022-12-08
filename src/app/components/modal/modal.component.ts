import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() details: any = [];
  @Input() isModalVisible: Boolean;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  onCloseModal(event: any) {
    this.closeModalEvent.emit(false);
  }
}
