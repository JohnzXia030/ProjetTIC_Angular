import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentModule } from './student.module';
import { StudentExerciseComponent, StudentAccountComponent } from './component';


const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: 'account',
        component: StudentAccountComponent
      },
      {
        path: 'exercise',
        component: StudentExerciseComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
