import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { from,of,forkJoin, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
 
})
export class productComponent {

  constructor(private serviceData:ApiService){}
  

  totalproducts:any; 

  
  ngOnInit(){ 
    console.log(this.serviceData.data());
    this.serviceData.data().subscribe((response:any)=>{
      this.totalproducts = response.products
      console.log(this.totalproducts);
    })  

     // map operator is used to transform the items emitted by an observable by 
     // applying a function to each item and emits the resulting values as an observable

     let num = from([1,2,3,4,5,6,7,8,9])

     let result = num.pipe(map(val => val+10)).subscribe(value => console.log(value))

     let source = from([
      {name:'rajesh', id:1},
      {name:'ramu', id:2},
      {name:'mahesh', id:3},
      {name:'aravind', id:4}])
      
      let names = source.subscribe(value=>console.log(value))
      let Name = source.pipe(map(({name})=>name)).subscribe(value=>console.log(value))
      
      let people = from([
          {firstname:'guna',lastname:'shekar'},
          {firstname:'aravind',lastname:'mudili'}
          ])
      
      let fname = people.pipe(map(person=>person.firstname)).subscribe(response=>console.log(response))

      //filter operator is used to filter the items emitted by an observable. 
      //it only emits the items that satisfy the specified fumction

      let filt = from([1,2,3,4,5,6,7,8,9])

      let even = filt.pipe(filter((value=>value%2==0))).subscribe(response=>console.log(response))

      let persons = from([
        {name:'guna',age:21},
        {name:'aravind',age:28},
        {name:'mahesh',age:22},
        {name:'rakesh',age:29},
        {name:'raju',age:24}
      ])

      let person = persons.pipe(filter(person=>person.age<25)).subscribe(response=>console.log(response)) 

      //forkjoin operator is used when gruop of observables emits values 
      // wait for observables to complete and then combines last values they emitted.
      let detail1 = of(1,2,3,4,5)
      let detail2 = of('aravind','ramesh','suresh','srinu','mahesh')
      forkJoin([detail1,detail2]).subscribe(response=>console.log(response))

      let person1 = of('aravind','ramesh','suresh','srinu','mahesh')
      let ids = of(1,2,3,4,5,6,7)

      forkJoin({user:person1, id:ids}).subscribe(response=>console.log(response))
      
 }

}
