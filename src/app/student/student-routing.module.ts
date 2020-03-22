import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentModule } from './student.module';
import { StudentExerciseComponent, StudentAccountComponent, StudentCategoriesComponent } from './component';


const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: 'account',
        component: StudentAccountComponent
      },
      {
        path: 'exercise/:id',
        component: StudentExerciseComponent
      },
      {
        path: 'categories',
        component: StudentCategoriesComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
