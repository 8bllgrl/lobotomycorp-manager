import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-basic-job-todo',
  templateUrl: './basic-job-todo.component.html',
  styleUrls: ['./basic-job-todo.component.scss']
})
export class BasicJobTodoComponent implements OnInit, OnDestroy {
  @Input() imageUrl: string = 'path_to_image.jpg';
  textBoxValue: string = '';
  checkboxValues: any = {};

  ngOnInit() {
    // Retrieve saved data from local storage
    const savedData = localStorage.getItem('appData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.textBoxValue = parsedData.textBoxValue;
      this.checkboxValues = parsedData.checkboxValues;
    }
  }

  ngOnDestroy() {
    // Save data to local storage before the component is destroyed
    const appData = {
      textBoxValue: this.textBoxValue,
      checkboxValues: this.checkboxValues
    };
    localStorage.setItem('appData', JSON.stringify(appData));
  }
}
