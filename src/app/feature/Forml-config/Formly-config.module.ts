import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { RxwebValidators } from "@rxweb/reactive-form-validators";

@NgModule({
    declarations : [],
  
    imports : [
      ReactiveFormsModule,
      FormlyMaterialModule,
      FormlyModule.forRoot({
        
    //     validators: [
    //         { name: 'mail', validation: emailValidator },
    //       ],

    //     validationMessages: [
    //         { name: 'email', message: emailMessage },
    //       ]
       }),
    ],
  
    exports : [
      ReactiveFormsModule,
      FormlyMaterialModule,
      FormlyModule
    ]
  })
  
  export class FormlyConfigurationsModule { }
  
//   export function emailValidator(control: FormControl): ValidationErrors {
//     return RxwebValidators.email()(control);
//   }
  
//   export function emailMessage( field: FormlyFieldConfig) {
//     return  'Email not valid';
//   }

  