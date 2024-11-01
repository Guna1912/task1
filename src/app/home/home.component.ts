
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private navigator:Router, private product:TestService){}

  // after(){
  //   this.navigator.navigate(['/courses'],{queryParams:{'category':'course'}})
  // }

  getProducts(){
      this.product.data()
  
  }

  mobile = new FormGroup({
       mobile_no: new FormArray([
                    new FormControl("",[Validators.required])
       ])
  })

  add(){
      let  mobile_number = this.mobile.get('mobile_no') as FormArray

      mobile_number.push(new FormControl("",[Validators.required]))
  }
 
  delete(n:any){
    let  mobile_number = this.mobile.get('mobile_no') as FormArray

    mobile_number.removeAt(n)
  }
 
}
