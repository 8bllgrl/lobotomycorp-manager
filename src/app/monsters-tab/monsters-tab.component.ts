import { Component, Input, OnInit } from '@angular/core';
import monsters from '../monster-box/FakeMonsterData'; // Import the monsters array
import { CheckedMonstersService } from '../monster-box/CheckedMonstersService';

@Component({
  selector: 'app-monsters-tab',
  templateUrl: './monsters-tab.component.html',
  styleUrls: ['./monsters-tab.component.scss']
})
export class MonstersTabComponent implements OnInit {
  monsterElements: any[] = [];

  constructor(public checkedMonstersService: CheckedMonstersService) {}

  ngOnInit() {
    // Use the imported monsters array
    for (let i = 0; i < monsters.length; i++) {
      const monsterBox = {
        checked: this.checkedMonstersService.checkedMonsters.includes(i),
        ...monsters[i] // Spread the properties from the monsters array
      };
      this.monsterElements.push(monsterBox);
    }
  }

  onCheckboxChange(index: number, checked: boolean): void {
    this.monsterElements[index].checked = checked;

    if (checked) {
      // Add the monster to the checkedMonsters array
      this.checkedMonstersService.checkedMonsters.push(index);
    } else {
      // Remove the monster from the checkedMonsters array
      const indexToRemove = this.checkedMonstersService.checkedMonsters.indexOf(index);
      if (indexToRemove !== -1) {
        this.checkedMonstersService.checkedMonsters.splice(indexToRemove, 1);
      }
    }
    console.log(`(Monster Tab) Checkbox change detected on index: ${index}`);
  }
}
