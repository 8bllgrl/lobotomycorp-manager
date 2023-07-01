import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bytes';
  activeTab: string = 'Home Tab';
  tabNames: string[] = ['Home Tab', 'Abnormalities', 'Other Details'];

  onTabClick(tab: string){
    this.activeTab = tab;
  }
}
