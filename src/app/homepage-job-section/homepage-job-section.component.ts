import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-job-section',
  templateUrl: './homepage-job-section.component.html',
  styleUrls: ['./homepage-job-section.component.scss']
})
export class HomepageJobSectionComponent {
  checkedMonsters: any[] = [];

  onCheckboxChange(index: number, checked: boolean): void {
    if (checked) {
      this.checkedMonsters.push(index);
    } else {
      const monsterIndex = this.checkedMonsters.indexOf(index);
      if (monsterIndex !== -1) {
        this.checkedMonsters.splice(monsterIndex, 1);
      }
    }
  }
}
