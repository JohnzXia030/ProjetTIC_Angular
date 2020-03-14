import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdminExoComponent } from './component';
import { CreateExerciseComponent } from './component/create-exercise/create-exercise.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [AdminExoComponent, CreateExerciseComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MatTabsModule,
    MatListModule
  ]
})
export class AdministratorModule { }
