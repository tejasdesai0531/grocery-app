import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BottomNavComponent
  ],
  exports: [
    BottomNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
