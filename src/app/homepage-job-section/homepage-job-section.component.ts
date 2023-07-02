import { Component } from '@angular/core';
import { MonsterService } from '../monster-box/MonsterService';

@Component({
  selector: 'app-homepage-job-section',
  templateUrl: './homepage-job-section.component.html',
  styleUrls: ['./homepage-job-section.component.scss']
})
export class HomepageJobSectionComponent {
  checkedMonsters: any[] = [];
  showBlueRectangle = false; // Add a property to track the visibility of the blue rectangle
  constructor(public monsterService: MonsterService) { }

  onCheckboxChange(index: number, checked: boolean): void {
    console.log('A checkbox was changed.');

    if (checked) {
      this.checkedMonsters.push(index);
      this.showBlueRectangle = true; // Set the showBlueRectangle property to true
      console.log('Blue rectangle is visible now.');
    } else {
      const monsterIndex = this.checkedMonsters.indexOf(index);
      if (monsterIndex !== -1) {
        this.checkedMonsters.splice(monsterIndex, 1);
      }
      
      if (this.checkedMonsters.length === 0) {
        this.showBlueRectangle = false; // Set the showBlueRectangle property to false
        console.log('Blue rectangle is hidden now.');
      }
    }
  }
}
