import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit{

  @Input()UserData:any

  ngOnInit(): void {
    console.log(this.UserData);
    
  }

}
