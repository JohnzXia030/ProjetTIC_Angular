import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminExoComponent } from './component';


const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: '',
        component:AdminExoComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
