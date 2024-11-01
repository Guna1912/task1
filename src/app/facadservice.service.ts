import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { TestService } from './test.service';
import {  forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FacadService {

 

  constructor(private apiservice:ApiService, private testservice:TestService) { }

  getProduct(){
    return this.apiservice.data()
    
  }
 
  getUser(){
    return this.testservice.getUser()
  }

  addUser(data:any){
    return this.testservice.addUser(data)
  }

  deleteUser(id:number){
    return this.testservice.deleteUser(id)
  }

  updateUser(id:number,data:any){
    return this.testservice.updateUser(id,data)
  }

 
}
