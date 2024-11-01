import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder,FormControl } from '@angular/forms';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

  constructor(private fb:FormBuilder){}

  @Input()userData:any
 
  userForm = this.fb.group({
        firstName: new FormControl(''),
        lastname: new FormControl(''),
        email: new FormControl(''),
        dob: new FormControl(''),
        gender: new FormControl(''),
        education: new FormControl(''),
        company: new FormControl(''),
        experience: new FormControl(''),
        package: new FormControl('')

  })
  ngOnInit(): void {
    this.show()
   console.log(this.userData);
   
  }

  show(){
    console.log(this.userData); 
   // console.log(this.userData.firstname);
  }

}
