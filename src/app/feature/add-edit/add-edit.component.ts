import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { LoginComponent } from 'src/app/login/login.component';
import { TestService } from 'src/app/test.service';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit{

  education:string[] = ['SSC','INTERMEDIATE','DIPLOMA','GRADUATE','POST GRADUATE']

  countries:any = []
  states:any = []
  cities:any = []
  loading = false

  formTitle: string = 'Add Form';
 
  constructor(private fb:FormBuilder, 
              private test:TestService, 
              private api:ApiService,
              private dialog_ref:MatDialogRef<AddEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any){}

   empForm = this.fb.group({
     firstname:['',Validators.required],
     lastname:['',Validators.required],
     email:['',[Validators.required,Validators.email]],
     dob:['',Validators.required],
     gender:['',Validators.required],
     education:['',Validators.required],
     country:[null],
     state:[null],
     city:[null],
     company:['',Validators.required],
     experience:['',Validators.required],
     package:['',Validators.required]
   })

   ngOnInit(): void {
    
     this.empForm.patchValue(this.data)
    console.log(this.data);

    this.getCountries()

    console.log(this.countries);
    console.log(this.states);
    console.log(this.cities);
    
    
   }

   getCountries() {
    this.loading = true;
    this.test.getCountries().subscribe(
    
      (response) => {
    
        this.countries = response;
        console.log(response[0]['name']);
        
        console.log(this.countries[0]['name']);
        this.loading = false;
      },
    )
  }

  
   selectCountry(country: any) {
    if (!country) {
      this.states = [];
      this.cities = [];
      return;
    }
    this.loading = true;
    const countryId = parseInt(country);
    this.test.getStatesbyCountry(country).subscribe(
      (response) => {
        this.states = response;
        console.log(countryId);
        console.log(response);
        console.log(country);
        
        console.log(this.states);
  
        this.loading = false;
      },
      
    );
   
  }

  selectState(state: any) {
    if (!state) {
      this.cities = [];
      return;
    }
    this.loading = true;
    const stateId = parseInt(state);
    this.test.getCitybyState(stateId).subscribe(
      (response) => {
        this.cities = response;
        console.log(this.cities);
        
        this.loading = false;
      },
      
    );
  }

   onFormSubmit(){
     if(this.empForm.valid){
      if(this.data){
        this.test.updateEmployee(this.data.id,this.empForm.value).subscribe({
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
        this.test.addEmployee(this.empForm.value).subscribe({
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
   }

  

}
