import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component'; 
import { TestService } from 'src/app/test.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { error } from '@rxweb/reactive-form-validators';
import { FacadService } from 'src/app/facadservice.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
 
  
})
export class ModalComponent implements OnInit{

  constructor(private dialog: MatDialog, private facad:FacadService) {}

  displayedColumns: string[] = ['id','fullname', 'email', 'password', 'phone','gender','country','state','city','action'];

  dataSource!: MatTableDataSource<any>;
  
  data:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.getUserData()
    
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
 
  getUserData(){
     this.facad.getUser().subscribe(
      {next:(response:any)=>{
        this.dataSource=new MatTableDataSource(response)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      console.log(response);
     
     }
     })
     
  }

  addUser(){
     this.UserData("")
  }

  selectedRowData(userRowData:any){
    console.log(userRowData);
    this.data = userRowData
    console.log(this.data.fullname);   
}

  EditUser(values:any){
    console.log(values);
    this.UserData(values)
    console.log(this.UserData(values));
  
  }

  viewdata(values:any){
    this.UserData(values)
  }

  
 UserData(userdata:any){
    const dialogref = this.dialog.open(SignInComponent,{
      height:'80%',
      width:'40%',
      autoFocus:false,
      data:userdata,
      
    })
    dialogref.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getUserData();
        }
      }
     })
 }

 deleteUser(id:number){
  this.facad.deleteUser(id).subscribe({
   next:()=>{
     this.getUserData()
   },
   error:(err)=>{
     console.log(err);
     
   }
  })
}

}
