import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

 
 
  constructor(private navigator:Router, private serviceData:TestService, private service:ApiService, private form_builder:FormBuilder){}

     details = this.form_builder.group({
             userName:this.form_builder.control("",[Validators.required,Validators.minLength(3),this.upperCase],this.usernameCheck),
             mail:["",[Validators.required,Validators.pattern(/^[a-z\._\-0-9]*[@][a-z]*[\.][a-z]{3}/)]],
             password:["",[Validators.required,this.upperCase]],
             mobile_number:this.form_builder.array([
                ["",[Validators.required]],
                ["",[Validators.required]]
             ])
    })

    submit(){
        console.log(this.details);
        console.log(this.details.controls['userName']);
        console.log(this.details.controls['userName'].value);
        console.log(this.details.controls['mobile_number']);
        console.log(this.details.controls['password']['errors']);
        
        
        
    }

    upperCase(p:any){
      let pattern = /[A-Z]/
      if(pattern.test(p.value)){
        return null
      }

      return {'noUpper':true}
    }

    

    usernameCheck(control:any):Promise<any>{

      let response = new Promise(
        (resolve, reject) => {

         let users = ['User1','User2','User3']

          let name = control.value;
          setTimeout(() => {
          
          if(users.indexOf(name)>=0){
            resolve({'duplicateUser':true})
          }
          else{
            resolve(null)
          }
        },10000);
      }
      );

      return response
    }


  
    
  // before(){
  //   this.navigator.navigate([''])
  // }

  // after(){
  //   this.navigator.navigate(['/contact'])
  // }

  open(){
    this.navigator.navigate(['/course-details'])
  }
   

  totalproducts:any 

  getproduct(){ 
    console.log(this.serviceData.userData());
    this.serviceData.userData().subscribe((response:any)=>{
      this.totalproducts = response.products

    })
    
    console.log(this.totalproducts);  
  }

  inputText:string = ""

  ngOnInit(): void {
    this.service.eventEmitter.subscribe((response)=>{this.inputText = response})
    console.log(this.inputText);
    
  }

}
