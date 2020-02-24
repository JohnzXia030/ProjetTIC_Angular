import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExerciseComponent } from './student-exercise.component';

describe('StudentExerciseComponent', () => {
  let component: StudentExerciseComponent;
  let fixture: ComponentFixture<StudentExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentExerciseComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
