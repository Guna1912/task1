import { animate } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestService } from 'src/app/test.service';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { forkJoin, from, mergeMap } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  loading: boolean | undefined;
  fileUploadService: any;
  shortLink: any;

  constructor(private test:TestService, private fb:FormBuilder, private api:ApiService){}
  
   ckeditorContent: any = "hello"
   file:any;
   url:any = ""

   data:any
   
   ngOnInit(): void {

    forkJoin([
      this.api.totalData(),
      this.api.product()
    ]).subscribe((response)=>console.log(response))

    forkJoin([
      this.test.getEmployee(),
      this.api.product()
    ]).subscribe((response)=>this.data=response)
    console.log(this.data);
    


    let source = [ this.api.product(), this.api.totalData() ]

   
    
    var b:string = "hello"
    var c:Array<any> = ['one','two','three']
    var d:Array<any> = [23,45,67]

    var num = 1234
    var num1 = num.toString()

    let ob = {name:'aravind',age:'21',gender:'male'}
    console.log(Object.entries(ob));
    
   var n = [1,2,4,3,45,6,4,95,39,46,47,8,326,385,4774,30,35]

  var m =  n.filter(even)
  var l = n.filter(odd)
    function even(num:any){
      return num%2 == 0
    }
  console.log(m);
    function odd(num:any){
      return num%2 == 1
    }
  console.log(l);

  var e = 0
  var a = []

  // even numbers below 100
  for(var i = 0; i < 100; i++){
    if(i%2==0){
      if(a.length<10){
        a[e] = i
        e++
      }
      else{
        console.log(a);
        a=[]
        e=0
        a[e] = i
        
      }
    }
  }
  console.log(a);

  // prime numbers below 100
  let count = 0
  let k,h

  for(h = 2;h <=100;h++){
    for(k = 1;k <= h;k++)
    {  if(h%k==0)
         count++
    }
    if(count==2)
      console.log(h);
      count=0 
  }

  let ascending = [72,53,93,46,51,28]

  let as = ascending.sort(function(a,b) {return a-b})
  console.log(as);
  

  // call
  function sayHello(this: any){
    return "Hello " + this.person;
  }
          
  var obj = {person: "aravind"};
          
  console.log(sayHello.call(obj));
  
  var p = {city:'vizag', getCity:function(){return this.city}}

  var p2 = {city:'hyderabad'}
   console.log(p.getCity.call(p2))


    var x = 220
    var y = "hello"
    console.log(x||y);
    console.log(x&&y);

    const myfun = () =>{
  console.log(this);
   }
   
myfun()
    
    console.log(Number.parseFloat("100 424"));
    
     console.log(b.indexOf("e"))   
     console.log(c.indexOf("one"));
     console.log(d.indexOf(67));
     console.log(typeof(num1));
     
   }

  onChange(event: any) {
 
    var allowedTypes = ['image/jpeg', 'image/png'];

    console.log(this.ckeditorContent);
    
    this.file = event.target.files[0];
    
    console.log(this.file);
    console.log(this.file.name);
    console.log(this.file.size);
    console.log(event);
    console.log(this.file.name.length);

    if (!allowedTypes.includes(this.file.type)) {
      alert('Invalid file type. Please upload a JPEG or PNG file');
   }
    else (event.target.files);{
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])

    reader.onload = (e) =>{
       this.url = e.target?.result
   }
  }
 }

 //OnClick of button Upload
 onUpload() {
 
  if(!this.file){
    alert('please select file')
  }

  else if(this.file.size > 1024*1024){
    alert('file size must be less than 1mb')  
 }
  else if(this.file.name.length > 20){
   alert('file name should be less than 20 characters')  
 }
  else{
    const formData = new FormData(); 
   
    formData.append("text",this.ckeditorContent)
    formData.append("file",this.file)
    formData.append("text",this.ckeditorContent);

    console.log(formData)
    for(const key in formData) {
      console.log(key);}
  
    this.test.uploadfile(formData).subscribe(
      (response: any) => {
        console.log(response)});
  }
 }


}





