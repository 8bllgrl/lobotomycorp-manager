import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStatsTabComponent } from './employee-stats-tab.component';

describe('EmployeeStatsTabComponent', () => {
  let component: EmployeeStatsTabComponent;
  let fixture: ComponentFixture<EmployeeStatsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeStatsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeStatsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
