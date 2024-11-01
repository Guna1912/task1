import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { productComponent } from './product/product.component';
import { HeadComponent } from './head/head.component';
import { ApiService } from '../api.service';
import { TestService } from '../test.service';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CrudComponent } from './crud/crud.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddEditComponent } from './add-edit/add-edit.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from'@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DataComponent } from './data/data.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DisplayComponent } from './display/display.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './pagination/pagination.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyConfigurationsModule } from './Forml-config/Formly-config.module';
import { ModalComponent } from './modal/modal.component';
import {MatMenuModule} from '@angular/material/menu';
import { DataDisplayComponent } from './data-display/data-display.component';

@NgModule({
  declarations: [
    productComponent,
    HeadComponent,
    CrudComponent,
    AddEditComponent,
    DataComponent,
    DisplayComponent,
    UserComponent,
    DetailsComponent,
    SignInComponent,
    PaginationComponent,
    ModalComponent,
    DataDisplayComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    FormsModule,
    CKEditorModule,
    NgxSkeletonLoaderModule,
    MatSidenavModule,
    MatListModule,
    NgxPaginationModule,
    FormlyMaterialModule,
    FormlyConfigurationsModule,
    MatMenuModule,
    FormlyModule.forRoot(),
    
  ],

  exports: [
    productComponent,
    MatSidenavModule,
    MatListModule
  ],
 providers: [
    ApiService,
    TestService
 ]
 
})
export class FeatureModule { }
