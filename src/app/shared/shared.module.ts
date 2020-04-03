import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogOutComponent } from './components/log-out/log-out.component';


@NgModule({
  declarations: [
    LogOutComponent
    
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    LogOutComponent
    
  ]
})
export class SharedModule {}
