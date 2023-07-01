import { Component } from '@angular/core';
import { FakeEmployeeData } from '../employee-card/FakeEmployeeData';


@Component({
  selector: 'app-scrollable-section',
  templateUrl: './scrollable-section.component.html',
  styleUrls: ['./scrollable-section.component.scss']
})
export class ScrollableSectionComponent {
  employeeData = FakeEmployeeData.employees;
}
