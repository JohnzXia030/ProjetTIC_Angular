import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {
      path: 'student',
      loadChildren: () => import('./student').then(m => m.StudentModule)
    },
    {
      path: 'administrator',
      loadChildren: () => import('./administrator').then(m => m.AdministratorModule)
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
