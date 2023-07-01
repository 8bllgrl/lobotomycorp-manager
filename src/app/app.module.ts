import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { ScrollableSectionComponent } from './scrollable-section/scrollable-section.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { MonsterBoxComponent } from './monster-box/monster-box.component';
import { HomepageJobSectionComponent } from './homepage-job-section/homepage-job-section.component';
import { MonstersTabComponent } from './monsters-tab/monsters-tab.component';
import { EmployeeStatsTabComponent } from './employee-stats-tab/employee-stats-tab.component';
import { JobComponentComponent } from './job-component/job-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTabComponent,
    ScrollableSectionComponent,
    EmployeeCardComponent,
    MonsterBoxComponent,
    HomepageJobSectionComponent,
    MonstersTabComponent,
    EmployeeStatsTabComponent,
    JobComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
