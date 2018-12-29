import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent {
  isOpen: boolean = false;
  @Input() selectedColor: string = '';
  @Input() colors: string[];
  @Output() colorSelectedEvent: EventEmitter<string> = new EventEmitter();

  /* colors = [
    '#333',
    '#F44336',
    '#673AB7',
    '#F44337',
    '#673AB8',
    '#F44339',
    '#673A23',
    '#F44365',
    '#673A45',
    '#F44389',
    '#673A09',
    '#F44300',
    '#673A81',
    '#F44567',
    '#673189'
  ]; */

  keyEvent(event: KeyboardEvent, selColor: string) {
    if (event && event.keyCode === 13 && selColor) {
      this.colorSelected(selColor);
    }
  }

  colorSelected(selColor: string) {
    this.selectedColor = selColor;
    this.isOpen = false;
    this.colorSelectedEvent.emit(this.selectedColor);
  }
}
