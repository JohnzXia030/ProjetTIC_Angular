import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent, HomeInscriptionComponent } from './component';
import { HomeFormComponent } from './component/home-form/home-form.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeContainerComponent,
    pathMatch:'full',
    /* children:[
      {
        path:'connexion',
        component:HomeFormComponent,
        pathMatch:'full'
      },
      {
        path:'inscription',
        component:HomeInscriptionComponent,
        pathMatch:'full'
      }
      
    ] */
  },
  {
    path:'home/connexion',
    component:HomeFormComponent,
    pathMatch:'full'
  },
  {
    path:'home/inscription',
    component:HomeInscriptionComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
