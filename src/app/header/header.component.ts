import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit{

  @Input()header="one"
  
  
  constructor(private navigator:Router, private TestService:TestService){
      console.log(this.header);
      
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes); 
  }

  location:any;
  logout(){
    localStorage.clear()
    this.navigator.navigate(['/login'])
    this.location.back();  
  }
 
    loginstatus:any= localStorage.getItem("mail")
    loginstatus12:boolean=false

   ngOnInit(){
    var loginstatus12 =this.TestService.loginstatus1
    let loginstatus:any= localStorage.getItem("mail")
    console.log(this.header);
  
  }


}
