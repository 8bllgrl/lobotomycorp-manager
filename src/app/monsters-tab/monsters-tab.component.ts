import { Component, Input, OnInit } from '@angular/core';
import { CheckedMonstersService } from '../monster-box/CheckedMonstersService';
import monsters from '../monster-box/FakeMonsterData';

@Component({
  selector: 'app-monsters-tab',
  templateUrl: './monsters-tab.component.html',
  styleUrls: ['./monsters-tab.component.scss']
})
export class MonstersTabComponent implements OnInit {
  monsterElements: any[] = [];

  constructor(public checkedMonstersService: CheckedMonstersService) {}

  ngOnInit() {
    for (let i = 0; i < monsters.length; i++) {
      const monsterBox = {
        ...monsters[i],
        checked: this.checkedMonstersService.checkedMonsters.includes(i)
      };
      this.monsterElements.push(monsterBox);
    }
  }

  onCheckboxChange(index: number, checked: boolean): void {
    this.monsterElements[index].checked = checked;

    if (checked) {
      this.checkedMonstersService.checkedMonsters.push(index);
    } else {
      const indexToRemove = this.checkedMonstersService.checkedMonsters.indexOf(index);
      if (indexToRemove !== -1) {
        this.checkedMonstersService.checkedMonsters.splice(indexToRemove, 1);
      }
    }
    console.log(`(Monster Tab) Checkbox change detected on index: ${index}`);
  }
}
