import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdminExoComponent } from './component';
import { CreateExerciseComponent } from './component/create-exercise/create-exercise.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [AdminExoComponent, CreateExerciseComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AdministratorModule { }
