import { Component, Input, OnInit } from '@angular/core';
import monsters from '../monster-box/FakeMonsterData'; // Import the monsters array

@Component({
  selector: 'app-monsters-tab',
  templateUrl: './monsters-tab.component.html',
  styleUrls: ['./monsters-tab.component.scss']
})
export class MonstersTabComponent implements OnInit {
  @Input() checkedMonsters: number[] = [];
  monsterElements: any[] = [];

  ngOnInit() {
    // Use the imported monsters array
    for (let i = 0; i < monsters.length; i++) {
      const monsterBox = {
        checked: this.checkedMonsters.includes(i),
        ...monsters[i] // Spread the properties from the monsters array
      };
      this.monsterElements.push(monsterBox);
    }
  }

  onCheckboxChange(index: number, checked: boolean): void {
    this.monsterElements[index].checked = checked;
    this.checkedMonsters = this.monsterElements
      .map((monster, idx) => monster.checked ? idx : -1)
      .filter(idx => idx !== -1);
    console.log(`(Monster Tab) Checkbox change detected on index: ${index}`);
  }

}
