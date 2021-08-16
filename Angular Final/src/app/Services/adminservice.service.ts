import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private baseUrl="http://localhost:8090/api/v1"
  constructor(private http:HttpClient) { }
  
  getEmpList()
  {
    console.log(this.http.get<any []>(this.baseUrl+'/plan'))
    return this.http.get<any []>(this.baseUrl+'/plan');
  }

  createPlan
  (plan: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}`+'/addnewplan', plan))
    return this.http.post(`${this.baseUrl}`+'/addnewplan', plan);
   }

   getClaimList()
   {
     return this.http.get<any []>(this.baseUrl+'/claim')
   }
   approveClaim(id:number):Observable<number>//RETURN TYPE
  {  
    console.log(this.baseUrl+'approvclaim/'+ id);
      return this.http.get<number>(this.baseUrl + '/approvclaim/'+id);
  }
  declineClaim(id:number):Observable<number>//RETURN TYPE
  {
   console.log(this.baseUrl+'declineclaim/'+id);
     return this.http.get<number>(this.baseUrl + '/declineclaim/'+id);
 }
 deletePlan(id:number):Observable<number>//RETURN TYPE
  {
   console.log(this.baseUrl+'deleteplan/'+id);
     return this.http.get<number>(this.baseUrl + '/deleteplan/'+id);
 }
updatePlan(id:number,amt:number):Observable<any []>
{
  return this.http.get<any []>(this.baseUrl+'/updateplan/'+id+'/'+amt);
}

getPolicyList()
  {
    console.log(this.http.get<any []>(this.baseUrl+'/policies'))
    return this.http.get<any []>(this.baseUrl+'/policies');
  }

}
