import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee: Employee = {
    picture: 'path-to-picture',
    stats: [10, 20, 30, 40],
    name: 'John Doe'
  };

  getEmployee(): Employee {
    return this.employee;
  }
}
