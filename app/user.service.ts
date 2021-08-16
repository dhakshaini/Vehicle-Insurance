import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from './Plan';
import { UserPolicy } from './UserPolicy';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl ="http://localhost:8090/api/v1"
  constructor(private httpClient:HttpClient) { }

  getPolicyById(id:number)
  {
    return this.httpClient.get<any[]>(this.baseUrl+'/policies/'+id);
  }
  getPolicyList()
  {
    return this.httpClient.get<any[]>(this.baseUrl+'/policies')
  }
  updatePolicy(policyNumber:number,date:Date)
  {
    return this.httpClient.get<any>(this.baseUrl+'/'+'updatePolicy/'+policyNumber+'/'+date);
  }
  addPolicy(policy:UserPolicy,userId:number,vehicleId:String,planId:number)
  {
    return this.httpClient.post(this.baseUrl+'/'+'addpolicy'+'/'+userId+'/'+vehicleId+'/'+planId,policy);
  }
  getPlan(vehicleType:String,planType:String,vehicelModel:String)
  {
    return this.httpClient.get<Plan>(this.baseUrl+'/getplan/'+vehicleType+'/'+planType+'/'+vehicelModel);
  }
  getPlans()
  {
    return this.httpClient.get<any[]>(this.baseUrl+'/userplans')
  }
}
