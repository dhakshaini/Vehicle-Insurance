import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl="http://localhost:8090/api/v1";
  constructor(private http:HttpClient) { }
  registerUser(user:Object):Observable<Object>{
    console.log(this.http.post(`${this.baseUrl}`+'/registerUser',user));
    return this.http.post(`${this.baseUrl}`+'/registerUser',user);
  }
}
