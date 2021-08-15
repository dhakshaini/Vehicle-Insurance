import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';
import { Vehicles } from '../Vehicles';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
    private baseUrl="http://localhost:8094/api/v1";

  constructor(private http:HttpClient) { }

  addvehicle(vehicle: Vehicles,user:String): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}`+'/addvehicle/'+user,vehicle));
    return this.http.post(`${this.baseUrl}`+'/addvehicle/'+user,vehicle );
   }
  
}
