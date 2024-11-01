import { animate, state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subject, from, map, pluck } from 'rxjs';
import { Country } from './feature/country.model';
import { State } from './feature/state.model';
import { City } from './feature/city.model';

const endpoint = 'https://dummyjson.com/products'
@Injectable({
  providedIn: 'root',
})
export class TestService implements CanActivate {
  constructor(private http: HttpClient, private activate: Router) {
     this.sendTodos()
  }

  getAllposts():Observable<any>{
     return this.http.get(endpoint)
  }

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('mail')) {
      return true;
    } else {
      return false;
    }
  }
  contact_info = [
    { name: 'rakesh' },
    { mail_id: 'rakesh123@gmail.com' },
    { mobile_no: '893719731' },
  ];

 
  data():Observable<any> {
    return this.http.get('https://fakestoreapi.com/products?limit=5');
      
  }
  loginstatus1:Boolean =false
  userData(): any {
    return this.http.get('https://dummyjson.com/products');
  }

 
  todoList = new Subject
  todos = ['task1', 'task2', 'task3']
  
  sendTodos(){
     this.todoList.next(this.todos)
  }

  add(t:any){
     this.todos.push(t)
     this.sendTodos()
  }

  remove(){
    this.todos.pop()
  }



  getCountries():Observable<any>{
    return this.http.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json")
  }

  getStatesbyCountry(countryId: any):Observable<any>{
    return this.http.get<any>(
      'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json'
     ).pipe(
       map((states)=>states.filter((state:any)=>state.country_id === countryId)))
  }

  getCitybyState(stateId: any):Observable<any>{
    return this.http.get<any>('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json').pipe(
         map((cities)=>cities.filter((city:any)=>city.state_id === stateId)))
  }

  getUser():Observable<any>{
    return this.http.get('http://localhost:3000/user')
  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/user/${id}`)
  }

  updateUser(id:number,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/user/${id}`,data)
  }

  addUser(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/user',data)
  }


  getDetails():Observable<any>{
    return this.http.get('http://localhost:3000/details')
  }

  addEmployee(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/employee',data)
  }

  updateEmployee(id: number, data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/employee/${id}`,data)
  }

  getEmployee():Observable<any>{
    return this.http.get('http://localhost:3000/employee')
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/employee/${id}`)
  }

  uploadfile(file:any):Observable<any>{
     
    console.log(file);
     return this.http.post('http://localhost:3000/file',file)
  }
  
}
