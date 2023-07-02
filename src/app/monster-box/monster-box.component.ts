import { Component, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { MonsterService } from './MonsterService';

@Component({
  selector: 'app-monster-box',
  templateUrl: './monster-box.component.html',
  styleUrls: ['./monster-box.component.scss']
})
export class MonsterBoxComponent {
  @Input() monster: any;
  @Input()
  index!: number; // Add index as an input property
  @Output() checkboxChange = new EventEmitter<{ index: number, checked: boolean }>();
  @Input() checked: boolean = false;

  constructor(private elementRef: ElementRef, private monsterService: MonsterService) { }

  onCheckboxChange(event: any): void {
    const checked = event.target.checked;
    this.checked = checked;
    this.checkboxChange.emit({ index: this.index, checked: checked }); // Emit index and checked value
    console.log(`(Monster Box) Checkbox change detected on index: ${this.index}`);
  }
}
