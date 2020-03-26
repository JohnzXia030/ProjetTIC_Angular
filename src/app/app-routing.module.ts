import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginguardService } from './core/authentification/loginguard.service';
import { AuthentificationService } from './core/authentification/authentification.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'student',
    loadChildren: () => import('./student').then(m => m.StudentModule),
    canActivate: [LoginguardService]
  },
  {
    path: 'administrator',
    loadChildren: () => import('./administrator').then(m => m.AdministratorModule),
    canActivate: [AuthentificationService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
