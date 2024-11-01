import { Component, Input, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';
import { Observable, pipe, pluck, skip } from 'rxjs';
import { FormControl, FormGroup,FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
   todos: any;
   td: any;
  
  constructor(private navigator:Router, private contact:TestService, private Tdata:ApiService, private http:HttpClient){}
  info = this.contact.contact_info
  
  users:any
  product(): void {
     this.Tdata.totalData().subscribe((response)=>this.users=response)
     console.log(this.users);
     
  }

  // before(){
  //   this.navigator.navigate(['/courses'],{queryParams:{'category':'course'}})
  // }

  // after(){
  //   this.navigator.navigate(['/login'])
  // }

  
  totalData:any;
   data:any
    store = new Observable((intimate)=>{
     intimate.next(10)   
     intimate.next(20)
     intimate.next(30)
    // intimate.error("error found")
     intimate.complete()
    
  })

  load(){
    this.store.subscribe(
       d=>(console.log(d)),
      e=>{console.log(e),
      ()=>{console.log("completed");}  
      }
    )
  }
  
  address = new FormGroup({
     contact_address: new FormArray ([
        new FormControl("",[Validators.required])
                        
   ])
  })

  
  add(){
   let addAddress= this.address.get('contact_address') as FormArray

   addAddress.push(new FormControl("",[Validators.required]))

   console.log(this.address);
   
   console.log(addAddress);
   
  }

  delete(n:number){
     let removeAddress = this.address.get('contact_address') as FormArray

     removeAddress.removeAt(n)
     
     console.log(removeAddress); 
  }

  enteredText: string = ""

  share(){
   this.Tdata.raisedData(this.enteredText)
     
  }

}
