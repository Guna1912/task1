import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestService } from './test.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ApplyDirective } from './apply.directive';
import { RngifDirective } from './rngif.directive';
import { AdminModule } from './admin/admin.module';
import { FeatureModule } from './feature/feature.module';
import { StudentComponent } from './admin/student/student.component';
import { PhoneValidDirective } from './phone-valid.directive';
import { NavComponent } from './admin/nav/nav.component';
import { HeadComponent } from './feature/head/head.component';
import { ApiService } from './api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPopper } from 'angular-popper';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [TestService],
    children: [
      {
        path: 'course-details',
        component: CourseDetailsComponent,
      },
    ],
  },
  {
    path: 'course/:id/:name',
    component: CourseListComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [TestService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [TestService],
  },
  {
    path: 'react-form',
    component: ReactFormComponent,
    canActivate: [TestService],
  },
  {
    path: 'signUp-form',
    component: SignupFormComponent,
    canActivate: [TestService],
  },
  {
    path: 'features',
    loadChildren: () => {
      return import('./feature/feature.module').then(() => FeatureModule);
    },
  },
  //  {
  //   path:'admin', loadChildren:()=>{
  //     return import('./admin/admin.module').then((a)=> AdminModule)
  //   }
  //  },

  {
    path: 'admin',
    component: NavComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    LoginComponent,
    NotFoundComponent,
    CoursesComponent,
    CourseListComponent,
    CourseDetailsComponent,
    RegisterComponent,
    ReactFormComponent,
    SignupFormComponent,
    ApplyDirective,
    RngifDirective,
    PhoneValidDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureModule,
    AdminModule,
    BrowserAnimationsModule,
    CKEditorModule,
    NgxSkeletonLoaderModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatToolbarModule,
    MatIconModule   
  ],
  providers: [TestService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
