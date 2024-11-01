import { Component,OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { TestService } from 'src/app/test.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  sort: any;

  constructor(private test:TestService){}

  displayedColumns: string[] = ['id', 'name', 'date'];
 
  dataSource!: MatTableDataSource<any>;
  data:any;
  
  ngOnInit(): void {
    this.UserDetails()
    
  }
   
  UserDetails(){
    console.log(this.test.getDetails())
     this.test.getDetails().subscribe({
      next:(response:any)=>{
         this.dataSource = new MatTableDataSource(response)
         this.dataSource.sort = this.sort
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
     })
    }

    selectedRow(rowData:any){
         console.log(rowData);
         this.data = rowData
         console.log(this.data);   
    }
    
    }
