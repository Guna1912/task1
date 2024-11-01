import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productComponent } from './product/product.component';
import { HeadComponent } from './head/head.component';
import { CrudComponent } from './crud/crud.component';
import { DataComponent } from './data/data.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {
    path:'features', component:HeadComponent,
    children:[
      {
        path:'products', component:productComponent
      },
      {
        path:'crud', component:CrudComponent
      },
      {
        path:'data', component:DataComponent
      },
      {
        path:'user',component:UserComponent
      },
      {
        path:'signin',component:ModalComponent
      }
    ]} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
