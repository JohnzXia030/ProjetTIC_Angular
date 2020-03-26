import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdminExoComponent } from './component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminHomeComponent } from './component';
import { AdminCategoryComponent } from './component/admin-category/admin-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminNavComponent } from './component/admin-nav/admin-nav.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateCategoryComponent } from './component/update-category/update-category.component';
import { AuthentificationService } from '../core/authentification/authentification.service';
import { UpdateExerciseComponent } from './component/update-exercise/update-exercise.component';



@NgModule({
  declarations: [AdminExoComponent, AdminHomeComponent, AdminCategoryComponent, AdminNavComponent, UpdateCategoryComponent, UpdateExerciseComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    NgbModule,
    MatDividerModule,
    MatDialogModule
  ],
  entryComponents: [
    UpdateCategoryComponent,
    UpdateExerciseComponent
  ]
})
export class AdministratorModule { }
