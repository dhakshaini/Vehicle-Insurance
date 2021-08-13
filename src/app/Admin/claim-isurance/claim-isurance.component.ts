import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Claims } from 'src/app/Claims';
import { Policy } from 'src/app/Policy';
import { AdminserviceService } from 'src/app/Services/adminservice.service';

@Component({
  selector: 'app-claim-isurance',
  templateUrl: './claim-isurance.component.html',
  styleUrls: ['./claim-isurance.component.css']
})
export class ClaimIsuranceComponent implements OnInit {
  submitted: boolean = false;
  claimList:Observable<any>[] = [];
  userEmail:String=localStorage.getItem('currentUser');
  currentDate:Date = new Date();
  cls = new Claims();
  polNum = new Policy();
  constructor(private AdminService:AdminserviceService) { }

  ngOnInit(): void {

    this.getClaimsById(this.userEmail);

  }
  public getClaimsById(userEmail) {
    this.AdminService.getClaimsById(userEmail).subscribe(data => {
      this.claimList = data;
      console.log(this.claimList); 
    });
  }


  claimform = new FormGroup({
    mobile : new FormControl(),
    PolicyNum : new FormControl(),
    reqAmt : new FormControl(),
    reason : new FormControl()
  });

  get PolicyNum(){
    return this.claimform.get('PolicyNum');
  }
  get reqAmt(){
    return this.claimform.get('reqAmt');
  }
  get reason(){
    return this.claimform.get('reason');
  }

  claimpolicy() {
    this.cls = new Claims();  
   this.cls.claimDate= this.currentDate;
   this.cls.reqAmt=this.reqAmt.value;
   this.cls.reason = this.reason.value;
   console.log(this.cls);  
   this.add();
  this.submitted = true;
 }
 
 add() {
  this.AdminService.claimPolicy(this.cls,this.PolicyNum.value)
    .subscribe(data =>{
       console.log(data);
       this.getClaimsById(this.userEmail);
      });
 }
 


}
