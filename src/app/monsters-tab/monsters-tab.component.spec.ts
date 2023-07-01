import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersTabComponent } from './monsters-tab.component';

describe('MonstersTabComponent', () => {
  let component: MonstersTabComponent;
  let fixture: ComponentFixture<MonstersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstersTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
