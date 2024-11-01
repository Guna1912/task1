import { Component, DoCheck, AfterViewInit, AfterViewChecked, OnChanges, OnInit, SimpleChanges, Input} from '@angular/core';
import { FormArray, FormControl,FormGroup,  Validators } from '@angular/forms';
Input

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css'],

 
})
export class ReactFormComponent implements AfterViewChecked, AfterViewInit, OnChanges,OnChanges, DoCheck {
 
  name:any = "aravind"

  mail:any = "aravind@123"

  phone:any = "8074687224"
 
  @Input() header:any

  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes)
  }

  ngOnInit(): void {
     console.log("KAILASH");
  }

  ngAfterViewChecked(): void {
    console.log("afterview checked",this.name); 
  }
 
  ngAfterViewInit(): void {
     console.log("afterview in it",this.mail);
  }

  ngDoCheck(): void {
    console.log("docheck",this.phone);  
  }

  register = new FormGroup({
    userName:new FormControl("",[Validators.required,Validators.minLength(3)]),
    email:new FormControl("",[Validators.required,Validators.pattern(/^[a-z\._\-0-9]*[@][a-z]*[\.][a-z]{3}/)]),
    phone:new FormControl("",[Validators.required,Validators.pattern(/^[0-9]{10}$/)]),    
  })

  load(){
     console.log(this.register.controls['userName'].value);
     console.log(this.register);
     console.log(this.register.controls['userName']);
     
     console.log(this.register.value);
        
  }

  getControl(control:any){
      return this.register.get(control)
  }

  getError(control:any){
      return this.register.get(control)?.['errors']
  }

 

}
 