import { Component } from '@angular/core';
import { CheckedMonstersService } from '../monster-box/CheckedMonstersService';

@Component({
  selector: 'app-job-component',
  templateUrl: './job-component.component.html',
  styleUrls: ['./job-component.component.scss']
})
export class JobComponentComponent {
  constructor(public checkedMonstersService: CheckedMonstersService) {}

  handleCheckboxChange(event: { index: number, checked: boolean }): void {
    const { index, checked } = event;

    if (checked) {
      // Add the monster to the checkedMonsters array
      this.checkedMonstersService.checkedMonsters.push(index);
      console.log('Monster checked!');
    } else {
      // Remove the monster from the checkedMonsters array
      const indexToRemove = this.checkedMonstersService.checkedMonsters.indexOf(index);
      if (indexToRemove !== -1) {
        this.checkedMonstersService.checkedMonsters.splice(indexToRemove, 1);
      }
    }
  }
}