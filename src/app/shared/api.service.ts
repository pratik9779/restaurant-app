import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import {Restaurant} from './restaurant.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:3000/posts/"

  addRestaurant(data : any){
    return this.http.post<any>(this.url,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getRestaurant(){
    return this.http.get<any>(this.url).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateRestaurant(data : any, id : number){
    return this.http.put<any>(this.url+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteRestaurant(id : number){
    return this.http.delete<any>(this.url+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
