import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from'@angular/material/dialog'
import { AddEditComponent } from '../add-edit/add-edit.component';
import { TestService } from 'src/app/test.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { FacadService } from 'src/app/facadservice.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],

})
export class CrudComponent implements OnInit{

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','dob','gender','education','country','state','city','company','experience','package','action'];
 
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
 constructor(private dialog:MatDialog, private test:TestService, private facad:FacadService){}

 age:number = 17;

 vote = this.age > 18 ? "eligible for vote":"not eligible for vote"

 totalCount:number | undefined;
 loader = true
 totalproducts:any;
 data:any;
 

 ngOnInit(): void {
 
  

  this.getEmployeeList()

  this.productsList()
  

  console.log(this.vote);

  let a:number = 1
  while (a <= 4) {
    console.log("no."+a);
    a++
  }

  let num:number = 1
  while (num <= 5){
    console.log("number: " + num);
    num++
  }

  let i:number = 1
  while(i <= 10){
    if(i % 2 == 0){
      console.log('first even number below 10 is ' + i);
      break
    }
    i++
  }

  let n:number = 1
  while(n <= 10){
    if(n %2 ==0){
      console.log(n);
      
    }
    n++
  }

  let grade:any = 'A'

  switch(grade){
      case 'A':
        console.log('excellent');
        break;
      case 'B':
        console.log('good');
        break;
      case 'C':
        console.log('average');
        break;
      case 'D':
        console.log('fail');
        break;
      default:
        console.log('enter grade');
        break;    
  }

  let a1 = 15, a2 = 19

 switch(a1 - a2){
    case 0:
      console.log('answer is 0');
      break;
    case 5:
      console.log('answer is 5');
      break;
    case 10:
      console.log('answer is 10');
      break;
   }

  let t:[number,string] = [2,'hello']

  console.log(t);
  console.log(t[0]);
  console.log(t[1]);
  
  t.push(56,23)
  console.log(t);
  
  t[1] = t[1].concat(' world')
  console.log(t);
  
  let u:(string | number) = 25
   console.log(typeof(u));

  let total:any = ''
  let num1:any = 1;

  do{
     total += `${num1},`
     num1++
  }
  while(num1 < 9)
  console.log(total);
  
  let n1:any = ''
  let n2:any = 1
  do{
    if(n2 <= 9){
      n1 += `${n2} ,`
    }
    else{
      n1 += `${n2}`
    }
    n2++
  }
  while(n2 <= 10)
  console.log(n1);
  

  let total_numbers:any = ''
  let numbers:any = 0

  do{
    if(numbers < 4){
      total_numbers += `${numbers},`
    }
    else{
      total_numbers += `${numbers}`
    }
    numbers++
  }
  while(numbers < 5)
  console.log(total_numbers);
  
  let total_numb:any = ''
  let numb:any = 20

  do{
    if(numb > 0){
      total_numb += `${numb},`
    }
    else{
      total_numb += `${numb}`
    }
    numb --
  }
  while(numb >= 0)
  console.log(total_numb);
  

  let count = 1
  do{
     console.log(count);
     count++ 
   }
   while(count <= 3)
    console.log('hello');
  
    interface details {
      name:string;
      age:number;
    }
    let person:details = {name:'aravind',age:21} 
    console.log(person);
       
    interface userDetails {
      id:number;
      name:string;
      mobile?:number;
    }

    let user1:userDetails = {id:1,name:'guna'}
    console.log(user1);
    
    interface myfun { (roll_no:number, name:string, mobile:number):void }

    function addStudent(roll_no:number, name:string, mobile:number):void{
      console.log('roll no: ' + roll_no, 'name: ' + name , 'mobile: ' + mobile);
      
    }
    let student:myfun = addStudent
    student(1,'aravind',8074687224);
   
    interface list{ [name:string]:any }
    let names:list = ['aravind','rajesh']
    console.log(names[1]);
    
    interface emp { [mobile:number]:number }
    let employe_no:emp = [8074687224,8978182152]  
    console.log(employe_no[0]);
    
    interface students {
      name:string;
      gender:string
    }
    interface students1 extends students {
      mobile_no:number
    }

    let students11: students1 = { name:'guna', gender:'male', mobile_no:8074687224 }
    console.log(students11);


    interface student_details { name:string; gender:string; age:number }

    class stud implements student_details {
      name: string;
      gender: string;
      age: number;

      constructor(name:string, gender:string, age:number){
        this.name = name
        this.gender = gender
        this.age = age
      }
     }
      let new_student = new stud('aravind','male',21)
      console.log(new_student);
      

     interface empl { id:number; name:string; mobile:number }
     class employ implements empl {
      id: number;
     readonly name: string;
      mobile:number

      constructor(id:number, name:string, mobile:number){
        this.id = id
        this.name = name
        this.mobile = mobile
      }
     }
      let new_emp = new employ(1, 'guna', 8074687224)
      console.log(new_emp);
      
    class rect {
      static len = 23
      side = 25
    }
    console.log(rect.len);
    let recta = new rect()
    console.log(recta.side);
    
    interface student<a,b>{
      id:a
      name:b
    }
    let stu1:student<number,string> = { id:1, name:'aravind' }
    let stu2:student<number,string> = { id:2, name:'guna' }
    console.log(stu1);
    console.log(stu2);

    var even = 1
    while(even<=10){
      if(even%2==0){
        console.log(even);  
      }
      even++
    } 

    var odd = 1
    while(odd<=10){
      if(odd%2==1){
        console.log(odd);
      }
      odd++
    }

    // factors of a number
    var factor = 8
    for(let i = 1; i <= factor; i++){
        if(factor%i == 0){
          console.log(i); 
        }
    }
    // check whether the given number is prime number or not
    var prime = 8
    var primeCount = 0
    for(let i = 1; i <= prime; i++){
       if(prime%i == 0){
        primeCount++
       }
      }
     if(primeCount == 2){
         console.log(`${factor} is a PRIME NUMBER`);
       }
    else{
      console.log(`${factor} is NOT A PRIME NUMBER`);
    }

  }

  selectedRow(rowData:any){
    console.log(rowData);
    this.data = rowData
    console.log(this.data);   
}

 AddUserFormDialog(){
  this.Userdialog("")
 }
 updateEdit(values:any){
  console.log(values);
  this.Userdialog(values)
}

Userdialog(userRowdata: any){
  const dialogRef = this.dialog.open(AddEditComponent,{
    data: userRowdata,
    autoFocus:false
  })

  dialogRef.afterClosed().subscribe({
   next:(val)=>{
     if(val){
       this.getEmployeeList();
     }
   }
  })
}

 productsList(){  console.log(this.facad.getProduct());
  this.facad.getProduct().subscribe((response:any)=>{
    this.totalproducts = response.products
    console.log(this.totalproducts) })}

 getEmployeeList(){
  console.log(this.test.getEmployee())
   this.test.getEmployee().subscribe({
    next:(response:any)=>{
       this.dataSource = new MatTableDataSource(response)
       this.dataSource.sort = this.sort
       this.dataSource.paginator = this.paginator
       this.totalCount=response.length
       setTimeout(() =>{
        this.loader = false
      }, 1000);
       
    },
    error:(err:any)=>{
      console.log(err);
      
    }
   })
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

deleteEmp(id:number){
   this.test.deleteEmployee(id).subscribe({
    next:(response)=>{
      this.getEmployeeList()
    },
    error:(err)=>{
      console.log(err);
      
    }
   })
}


}
