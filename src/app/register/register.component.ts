import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { ApiService } from '../api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  
    constructor(private navigator:Router, private service:ApiService) {}
      
  // before(){
  //   this.navigator.navigate(['/login'])
  // }

fname:any

  data(fname:any,lname:any,total:any,password:any,login:any,email:any,phone:any){
    // console.log(fname); 
    //  console.log(lname);
    //  console.log(password);
    //  console.log(email);
    //  console.log(phone);
    //  console.log(total);
       console.log(login);

       console.log(login.value);
       
       login.setValue({ "":{
        'firstName': "aravind",
        'lastName':"Mudili",
        'email':"guna@gmail.com",
        'phone':"8978182152",
        'password':"987654",
       }
       }),

      // login.control.patchValue({ "":{
      //   'firstName': "aravind",
      // }

      //})

      // fname.control.setValue("aravind")
    
       console.log(login.value);    
      }

      simple:any

      ngOnInit(): void {
        this.simple = this.service.s1.subscribe((response)=>{console.log(response);
         })
         this.service.s2.subscribe((response)=>{console.log(response);
         })
         this.service.s2.next("behaviour subject 3rd data")
         this.service.s2.next("behaviour subject 4th data")

         setTimeout(() => {
         this.service.s3.subscribe((response)=>{console.log(response);
         })
        }, 1000);

        this.service.s4.subscribe((response)=>{console.log(response);
        })
        this.service.s4.complete()
      }

      emit(){
        this.simple.next("simple subject data")
      }

}
