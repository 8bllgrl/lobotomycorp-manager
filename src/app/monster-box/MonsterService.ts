import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  checkedMonsters: any[] = [];

  addCheckedMonster(index: number): void {
    if (!this.checkedMonsters.includes(index)) {
      this.checkedMonsters.push(index);
    }
  }

  removeCheckedMonster(index: number): void {
    const monsterIndex = this.checkedMonsters.indexOf(index);
    if (monsterIndex !== -1) {
      this.checkedMonsters.splice(monsterIndex, 1);
    }
  }
}
