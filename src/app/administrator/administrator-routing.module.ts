import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminExoComponent } from './component';
import { AdminHomeComponent } from './component';
import { AdminCategoryComponent } from './component';
import { AdminUsersComponent } from './component';


const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: 'exercise',
        component:AdminExoComponent
      },{
        path: '',
        component:AdminHomeComponent
      },{
        path: 'category',
        component:AdminCategoryComponent
      },{
        path: 'users',
        component:AdminUsersComponent       
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
