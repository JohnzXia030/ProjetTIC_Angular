import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentAccountComponent, StudentExerciseComponent } from './component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AuthentificationService } from '../core/authentification/authentification.service';
import { StudentNavComponent } from './component/student-nav/student-nav.component';
import { StudentCategoriesComponent } from './component/student-categories';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StudentAccountComponent,StudentExerciseComponent, StudentNavComponent, StudentCategoriesComponent],
  imports: [
    MatInputModule,
    CommonModule,
    StudentRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSidenavModule, 
    MatCheckboxModule,
    NgbModule,
    SharedModule
  ]
})
export class StudentModule { }