import { Component, AfterViewInit, ViewChild, OnInit, DoCheck, AfterViewChecked } from '@angular/core';
import { StudentDataComponent } from '../student-data/student-data.component';
import { TestService } from 'src/app/test.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements AfterViewInit, OnInit, DoCheck, AfterViewChecked{
 
  constructor(private test:TestService){}

  @ViewChild("mail")data:any;
  @ViewChild(StudentDataComponent)count:any
  
  lname:any = "shekar"
  marks:Number = 98
  grade:any = "A"
  
  wish:any = "good evening"
 
  ngAfterViewInit(): void {
      console.log(this.data);
      console.log(this.data.nativeElement.value);    
      console.log(this.count.counter);          
  }

  ngAfterViewChecked(): void {
      console.log("view checked",this.count.counter);     
  }

  ngDoCheck(): void {
     console.log("docheck",this.lname);   
  }

  ngOnInit(): void {
     console.log(this.data); 
  }

  addTodo(t:any){
      this.test.add(t)
  }

  delete(d:any){
     this.test.remove()
  }

}
