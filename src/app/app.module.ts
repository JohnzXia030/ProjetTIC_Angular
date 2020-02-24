import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
   declarations: [
     AppComponent,
   ],
  imports: [
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,

  ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
