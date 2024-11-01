import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes =[
  {
    path:'admin', component:NavComponent,
    children:[
  
  {
    path:'student', component:StudentComponent
   },
   {
    path:'student-data', component:StudentDataComponent
   }]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AdminRoutingModule { }
