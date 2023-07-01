import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageJobSectionComponent } from './homepage-job-section.component';

describe('HomepageJobSectionComponent', () => {
  let component: HomepageJobSectionComponent;
  let fixture: ComponentFixture<HomepageJobSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageJobSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageJobSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
