import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {


  course = [
    {'id':1, name:'HTML'},
    {'id':2, name:'CSS'},
    {'id':3, name:'JAVA SCRIPT'},
    {'id':4, name:'TYPE SCRIPT'},
    {'id':5, name:'ANGULAR'},
  ]

}
