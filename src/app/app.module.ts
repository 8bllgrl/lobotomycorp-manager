import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { ScrollableSectionComponent } from './scrollable-section/scrollable-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTabComponent,
    ScrollableSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
