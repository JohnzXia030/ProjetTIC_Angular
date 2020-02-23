import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentAccountComponent, StudentExerciseComponent } from './component';


@NgModule({
  declarations: [StudentAccountComponent,StudentExerciseComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
