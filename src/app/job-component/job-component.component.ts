import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-component',
  templateUrl: './job-component.component.html',
  styleUrls: ['./job-component.component.scss']
})
export class JobComponentComponent {
  @Input() checkedMonsters: any[] = [];
}
