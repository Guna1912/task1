import { Component, Input, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, OnInit, OnDestroy } from '@angular/core'; 
import { ApiService } from 'src/app/api.service';
import { TestService } from 'src/app/test.service';


@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnChanges, AfterContentInit, AfterContentChecked, OnInit, OnDestroy{

  constructor(private td:TestService, private service:ApiService){}

  todos:any = []
  ngOnInit(): void {
    //   (this.timer());
       this.td.todoList.subscribe((response)=>{this.todos=response})
       this.td.sendTodos()
     }

  @Input()main:any
  @Input()data:any

  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes);
     
  }
  ngAfterContentInit(): void {
     console.log('after content in it');
     
  }
  ngAfterContentChecked(): void {
    console.log('content checked');
 
  }

  

  counter:any = 0

  clicked(){
      this.counter++
  }

  time:any;
  timer(){
    setInterval(()=>{
      this.time= this.counter++
      console.log(this.counter);
      
    },1000)
  }

  saved:any

  ngOnDestroy(): void {
    clearInterval(this.time)
    if(!this.saved){
      alert("data not saved")
    }

  }
  
}
