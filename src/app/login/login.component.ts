import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  static localStorage: any;

  constructor(private navigator:Router, private ts:TestService){}

  // before(){
  //   this.navigator.navigate(['/contact'])
  // }
  // after(){
  //   this.navigator.navigate(['/register'])
  // }

  

 mail:any = ""
 mail_error:any

 mail_expression:any = /^[a-z\._\-0-9]*[@][a-z]*[\.][a-z]{2,4}/

 password:any = ""

 password_error:any

 password_expression:any = /^[0-9]{4}$/


  // submit(){
  //   addEventListener('submit',(s)=>{
  //       s.preventDefault()
      
  //        this.load()
  //        localStorage.setItem('mail',this.mail)
  //        localStorage.setItem('password',this.password)

    
  //    this.navigator.navigate(['/contact'])
       
       
       
  //   })
  // }

  loginstatus:boolean = true

  load(){
    console.log(this.mail)  
    console.log(this.password);

     if(this.mail === undefined || this.mail === ""){
        this.mail_error = 'please enter email'
        this.loginstatus = false;
        return false;
      
     }
     
     else if(!this.mail.match(this.mail_expression) ){
        this.mail_error = 'enter valid email'
        this.loginstatus = false;
        return false;
     }
     
  
     else{
        this.mail_error = ''
        this.loginstatus = true
     }

     if(this.password == undefined || this.password === ""){
      this.password_error = 'please enter password'
      this.loginstatus = false
      return false
      
     }else{
        this.password_error = ''
        this.loginstatus = true
     }

     if(this.loginstatus== true){
      localStorage.setItem('mail',this.mail)
      this.ts.loginstatus1=true;
      this.navigator.navigate(['/contact'])
     }
    
      
  }

}
