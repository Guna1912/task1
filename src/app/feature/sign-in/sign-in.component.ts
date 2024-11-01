import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { and, model } from '@rxweb/reactive-form-validators';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TestService } from 'src/app/test.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { ApiService } from 'src/app/api.service';
import { first } from 'rxjs';
import { state } from '@angular/animations';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  constructor(private dialog:MatDialog,
    private dialog_ref:MatDialogRef<SignInComponent>,
    private serviceData:TestService,
    private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public Userdata:any){
     
    }


  loading = false

  countries:any[] = []
  states:any[] = []
  cities:any[] = []

 

  
  
  getCountries():any {
    this.loading = true;
    this.api.getcountries().subscribe(
    
      (response:any[]) => {
        
        this.countries = response;
        console.log(response);
        console.log(this.countries);
        this.loading = false;
      },
    )
  }

  //  getState(country: any) {
    
  //   this.loading = true;
  //   if (!country) {
  //     this.states = []
  //     this.cities = [];
  //     return;
  //   }
  //   this.api.getStates(country).subscribe(
  //     (state:any[])=>{this.states=state;console.log(this.states);
  //   }
  //   )
  //   this.loading = false
   
  // }
  getstate(country: any) {
    if (!country) {
      this.states = [];
      this.cities = [];
      return;
    }
    this.loading = true;
    const countryId = parseInt(country);
    this.api.getStates(countryId).subscribe(
      (response) => {
        this.states = response;
        console.log(countryId);
        console.log(response);
        
        console.log(this.states);
  
        this.loading = false;
      },
      
    );
   
  }

  // getcity(stateId: any) {
  //   if (!stateId) {
  //     this.cities = [];
  //     return;
  //   }
    
  //   this.loading = true

  //   this.api.getCities(stateId).subscribe(
  //     (city:[])=>{this.cities=city})

  //   this.loading = false
  // }

  getcity(state: any) {
    if (!state) {
      this.cities = [];
      return;
    }
    this.loading = true;
    const stateId = parseInt(state);
    this.api.getCities(stateId).subscribe(
      (response) => {
        this.cities = response;
        console.log(this.cities);
        
        this.loading = false;
      },
      
    );
  }


  
  
  close() {
    this.dialog.closeAll();
  }



  form = new FormGroup({})

  model:any = {}

  fields: FormlyFieldConfig[] = [
       {
         key: 'fullname',
        type: 'input',
        templateOptions: {
            label: 'FullName',
            placeholder: 'Enter your name',
            required: true,
            minLength: 3,
           },
        validation: {
           messages: {required: 'Enter FullName', minlength: 'should have minimum3 characters'}
        }
        },
        {
          key: 'email',
          type: 'input',
          templateOptions: {
              label: 'Email',
              placeholder: 'Enter email',
              required: true,
              pattern: /^[a-z\._\-0-9]*[@][a-z]*[\.][a-z]{3}/
             },
        
          },
          {
            key:'password',
            type:'input',
            templateOptions:{
              label:'Password',
              type:'password',
              placeholder:'Enter Password',
              required:true
            }
          },
          {
            key: 'phone',
           type: 'input',
           templateOptions: {
               label: 'Phone',
               placeholder: 'Enter your Phone Number',
               required: true,
               //pattern: /^[0-9]{10}$/,
              //  onKeypress: function(model: any, options: any, _this: any, event: any) {
              //  alert()
              //   console.log(model);
              //   console.log(options);
              //   console.log(_this);
              //   console.log(event);
              // }

              // oninput: (event:any) => {
              //   console.log(event.target.value);
              // }
             
               hooks:{
                 onkeypress: function(event:any, model:any){
                  const pattern = /[0-9]/;
                  const inputChar = String.fromCharCode(event.charCode);
                  
                  if (!pattern.test(inputChar)) {
                    event.preventDefault();
                  }
                  console.log(event);
                  console.log(model);
                 },

                  onInput :function(model:any, event:any){
                      console.log(model);
                      console.log(event);
                      //this['value'].replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                    }
               }
                
            },
              
              
            // validation: {
            //   messages:{ required: 'Enter Phone number', pattern:'Enter valid phone number'}
            // }
         },
          {
            key: 'gender',
            type: 'radio',
            templateOptions: {
                label: 'Gender',
                placeholder: 'Fill the type of content',
                required: true,
                
                options: [
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    
                ],
            },
            //defaultValue: 'male',
            validation: {
              messages:{ required:'select one option'}
            }
        },
       
        {
          key: 'country',
          type: 'select',
          templateOptions: {
              label: 'Select Country',
              required: true,
              options: this.api.getcountries(),
             
              change: (field: any, value: any) => {
                const component = field.parent.templateOptions as SignInComponent;
                component.getstate(value)
                component.api.getStates(value)
              },       
        
          validation:{
           messages: { required: 'select one'}
          }
      },
    },
      
      {
        key: 'state',
        type: 'select',
        templateOptions: {
            label: 'Select your State',
            required: true,
            options: [],
            
            onChange: (field: any, value: any) => {
               const component = field.parent.templateOptions as SignInComponent
               component.getcity(value);
              
            }

        },
   
        validation:{
         messages: { required: 'select one'}
        }
      },
      {
        key: 'district',
        type: 'select',
        templateOptions: {
            label: 'Select your City',
            required: true,
            options:[],
           
        },
     
     
        validation:{
         messages: { required: 'select one'}
        }
      },
      {
        key: 'terms&conditions',
        type: 'checkbox',
        defaultValue:true,
        templateOptions: {
            label: 'Accept terms&conditions',
            required: true,
            checked: true
        },
        validation: {
          messages: { required: 'Accept terms&conditions'}
        }
    }
    ]

    ngOnInit() {
      
      this.model = this.Userdata
      console.log(this.model.country);
      console.log(this.model.state);
      console.log(this.model.city);
      

      console.log(this.getCountries());
      
      console.log(this.countries);
      console.log(this.states);
      console.log(this.cities);
   
    }

    

    onSubmit(model: any) {
       console.log(model);
       console.log(model.fullname);
        if(this.Userdata){
             this.serviceData.updateUser(this.Userdata.id,this.form.value).subscribe({
              next:(val:any)=>{
                console.log(val);
                this.dialog_ref.close(true)
              },
              error:(err:any)=>{
                console.log(err);
                
              }
              
             })
        }
        else{
          this.serviceData.addUser(this.form.value).subscribe({
            next:(val:any)=>{
              console.log(val);
               this.dialog_ref.close(true)
             },
             error:(err:any)=>{
               console.log(err); 
             }
          })
        }
    }

    // {
    //   key: 'country',
    //   type: 'select',
    //   templateOptions: {
    //     label: 'Country',
    //     options: countryService.getCountries(),
    //     onChange: (field, $event) => {
    //       const country = $event.target.value;
    //       formState.optionsStateField.templateOptions.options = countryService.getStatesByCountry(country);
    //     }
    //   }
    // },
    // {
    //   key: 'state',
    //   type: 'select',
    //   templateOptions: {
    //     label: 'State',
    //     options: [],
    //   },
    //   expressionProperties: {
    //     'templateOptions.disabled': '!model.country', // Disable if country is not selected
    //   }
    // },
    // {
    //   key: 'city',
    //   type: 'select',
    //   templateOptions: {
    //     label: 'City',
    //     options: [],
    //   },
    //   expressionProperties: {
    //     'templateOptions.disabled': '!model.state', // Disable if state is not selected
    //   }
    // }
    

}
