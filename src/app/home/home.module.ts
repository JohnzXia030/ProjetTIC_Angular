import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './component/home-container/home-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeFormComponent } from './component/home-form/home-form.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [HomeContainerComponent,HomeFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
    
  ],
  providers:[HttpClient]
})
export class HomeModule { }
