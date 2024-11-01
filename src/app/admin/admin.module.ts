import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing.module';
import { StudentDataComponent } from './student-data/student-data.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    StudentComponent,
    StudentDataComponent,
    NavComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    StudentComponent
  ]
})
export class AdminModule { }
