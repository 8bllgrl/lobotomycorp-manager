import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicJobTodoComponent } from './basic-job-todo.component';

describe('BasicJobTodoComponent', () => {
  let component: BasicJobTodoComponent;
  let fixture: ComponentFixture<BasicJobTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicJobTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicJobTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
