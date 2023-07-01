import { Component, Input } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee: Employee;
  statsKeys: string[] | undefined;

  constructor() {
    this.employee = {
      picture: '',
      stats: {
        SP: 0,
        HP: 0,
        WP: 0,
        ASMS: 0
      },
      name: ''
    };
  }

  ngOnInit() {
    if (this.employee) {
      this.statsKeys = Object.keys(this.employee.stats);
    }
  }
  getProgressBarStyle(index: number): string {
    const colors = ['red', 'yellow', 'purple', 'blue'];

    if (index >= 0 && index < colors.length) {
      return `--progress-color: ${colors[index]};`;
    } else {
      return '--progress-color: #e0e0e0;'; // Default color for other positions
    }
  }

}
