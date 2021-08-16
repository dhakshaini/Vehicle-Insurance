import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser:User=new User();
  private baseUrl="http://localhost:8090/api/v1";
  constructor(private http:HttpClient) { }

  login(useremail:String){
    return this.http.get<any>(this.baseUrl+'/login/'+useremail);
  }
  forgotpswd(useremail:String,userpswd:String){
    return this.http.get<any>(this.baseUrl+'/updatepassword/'+useremail+'/'+userpswd);
  }
}

