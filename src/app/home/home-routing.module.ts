import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './component';
import { HomeFormComponent } from './component/home-form/home-form.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeContainerComponent,
    pathMatch:'full',
    children:[
      {
        path:'connexion',
        component:HomeFormComponent,
        pathMatch:'full'
      },
      {
        path:'connexion1',
        component:HomeFormComponent,
        pathMatch:'full'
      }
      
    ]
  },
  {
    path:'home/connexion',
    component:HomeFormComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
