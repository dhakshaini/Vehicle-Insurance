import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plans } from '../Plans';
import { Policy } from '../Policy';
import { Vehicle } from '../Vehicle';

// import { User } from 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8090/api/v1/";
  //private currentUser: Observable<User>;
  // currentUser:User=new User();
  constructor(private httpClient: HttpClient) { }


  claimPolicy(cls: Object, policyNum: number): Observable<boolean> {
    console.log(this.httpClient.post(`${this.baseUrl}` + 'addclaims/' + policyNum, cls));
    return this.httpClient.post<boolean>(`${this.baseUrl}` + 'addclaims/' + policyNum, cls);

  }

  getPolicyById(id: number) {
    return this.httpClient.get<any[]>(this.baseUrl + '/policies/' + id);
  }
  getClaimsById(id: number) {
    return this.httpClient.get<any[]>(this.baseUrl + '/userclaims/' + id);
  }
  getPolicyList() {
    return this.httpClient.get<any[]>(this.baseUrl + '/policies')
  }
  updatePolicy(policyNumber: number, date: Date) {
    return this.httpClient.get<any>(this.baseUrl + '/' + 'updatePolicy/' + policyNumber + '/' + date);
  }

  addvehicle(vehicle: Vehicle, user: String): Observable<Object> {
    console.log(this.httpClient.post(`${this.baseUrl}` + '/addvehicle/' + user, vehicle));
    return this.httpClient.post(`${this.baseUrl}` + '/addvehicle/' + user, vehicle);
  }
  addPolicy(policy: Policy, userId: number, vehicleId: String, planId: number) {
    return this.httpClient.post(`${this.baseUrl}` + '/addpolicy/' + userId + '/' + vehicleId + '/' + planId, policy);
  }
  getPlan(vehicleType: String, planType: String, vehicelModel: String) {
    return this.httpClient.get<Plans>(this.baseUrl + '/getplan/' + vehicleType + '/' + planType + '/' + vehicelModel);
  }
  getPlans() {
    return this.httpClient.get<any[]>(this.baseUrl + '/userplans')
  }


}

















