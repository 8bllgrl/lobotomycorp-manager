import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-monster-box',
  templateUrl: './monster-box.component.html',
  styleUrls: ['./monster-box.component.scss']
})
export class MonsterBoxComponent {
  @Input() checked: boolean = false;
  @Output() checkboxChange = new EventEmitter<boolean>();

  imageUrl: string = "https://static.vecteezy.com/system/resources/previews/009/102/039/original/attention-sign-or-warning-caution-exclamation-sign-danger-yellow-triangle-stock-illustration-free-vector.jpg";

  onCheckboxChange(): void {
    // Emit checkbox change event
    this.checkboxChange.emit(this.checked);
  }
}
