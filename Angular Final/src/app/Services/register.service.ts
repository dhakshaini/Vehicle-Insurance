import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private baseUrl="http://localhost:8090/api/v1";
  constructor(private http:HttpClient) { }
  registerUser(user:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`+'/registerUser',user);
  }
}
