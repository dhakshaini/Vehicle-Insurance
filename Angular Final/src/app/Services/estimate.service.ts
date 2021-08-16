import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {

  private baseUrl="http://localhost:8090/api/v1";
  constructor(private http:HttpClient) { }

  estimateAmount(vechtype:String,vechModel:String,planType:String,age:number){
    return this.http.get(this.baseUrl+'/estimate/'+vechtype+'/'+vechModel+'/'+planType+'/'+age);
  } 

  getPlans()
  {
    console.log(this.http.get<any[]>(this.baseUrl+'/userplans'));
    return this.http.get<any[]>(this.baseUrl+'/userplans');
  }
  
}
