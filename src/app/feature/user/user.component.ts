import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { TestService } from 'src/app/test.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
   constructor(private dialog:MatDialog, private testservice:TestService){}

   title = 'pagination';
   POSTS:any;
   page:number = 1;
   count:number = 0;
   tablesize:number = 10;
   tablesizes:any = [5,10,15,20]

   ngOnInit(){
      this.postList()
   }

   postList(){
      this.testservice.getDetails().subscribe((response)=>{this.POSTS = response;
          console.log(this.POSTS);
          console.log(this.POSTS.id);
          
      })
   }

   onTableDataChange(event:any):void{
     this.page = event
     this.postList()
   }

   onTableSizeChange(event:any):void{
      this.tablesize = event.target.value
      this.page = 1
      this.postList()
   }

   UserData(){
    const dialogRef = this.dialog.open(DetailsComponent,{
       width:'60%',
       height:'65%'
    })
   }

}
