import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monsters-tab',
  templateUrl: './monsters-tab.component.html',
  styleUrls: ['./monsters-tab.component.scss']
})
export class MonstersTabComponent implements OnInit {
  @Input() checkedMonsters: number[] = [];
  monsterElements: any[] = [];

  ngOnInit() {
    const monsterData: any[] = [/* Array of monster data */];

    for (let i = 0; i < 25; i++) {
      const monsterBox = {
        checked: this.checkedMonsters.includes(i)
      };
      this.monsterElements.push(monsterBox);
    }
  }

  onCheckboxChange(index: number, checked: boolean): void {
    this.monsterElements[index].checked = checked;
    this.checkedMonsters = this.monsterElements
      .map((monster, idx) => monster.checked ? idx : -1)
      .filter(idx => idx !== -1);
  }
}
