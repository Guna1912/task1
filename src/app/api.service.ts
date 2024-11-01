import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject,map } from 'rxjs';
import { Country } from './feature/country.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   contact_info: any;
   todoList: any;

   s1 = new Subject
   s2 = new BehaviorSubject("behavior subject 1st data")
   s3 = new ReplaySubject(2,1000)
   s4 = new AsyncSubject

  constructor(private http:HttpClient) { 
    this.s1.next("subject 1st data")

    this.s2.next("behaviour subject 2nd data")

    this.s3.next("replay subject 1st data")
    this.s3.next("replay subject 2nd data")
    this.s3.next("replay subject 3rd data")
    this.s3.next("replay subject 4th data")

    this.s4.next("async subject 1st data")
    this.s4.next("async subject 2nd data")
    this.s4.next("async subject 3rd data")

  }

  data():Observable<any>{
    return this.http.get('https://dummyjson.com/products')
  }

totalData():Observable<any>{
   return this.http.get('https://fakestoreapi.com/products?limit=5')
   
}

product():Observable<any>{
 return this.http.get('https://fakestoreapi.com/users')  
}

 eventEmitter = new Subject<string>()

 raisedData(data:any){
     this.eventEmitter.next(data)
 }


 getcountries():Observable<any>{
  return this.http.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json')
   .pipe(
     map((data: any) => data.map((country: any) => ({ label: country.name, value: country.name, id:country.id })))
   )
   

}

 getStates(countryId: any): Observable<any> {
  
  // return  this.http.get(`https:raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states/${countryId}`)
  // .pipe(
  //   map((data: any) => data.map((state: any) => ({ label: state.name, value: state.id })))
  // )
  return this.http.get<any>(
      'https:raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json'
     ).pipe(
       map((states)=>states.filter((state:any)=>state.country_id === countryId)))
  
  }

  getCities(stateId: number): Observable<any> {
    
    // return  this.http.get(`https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities${stateId}`)
    // .pipe(
    //   map((data: any) => data.map((city: any) => ({ label: city.name, value: city.id })))
    // )
    // }

    return this.http.get<any>('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json').pipe(
      map((cities)=>cities.filter((city:any)=>city.state_id === stateId)))

  }
}

   // return this.http.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json')
   
   // return this.http.get<any>(
  //  'https:raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json'
  // ).pipe(
  //   map((states)=>states.filter((state:any)=>state.country_id === countryId)))

  // return this.http.get<any>('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json').pipe(
    //   map((cities)=>cities.filter((city:any)=>city.state_id === stateId)))