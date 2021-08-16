import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Policy } from 'src/app/Policy';

import { UserService } from 'src/app/Services/user.service';
import { Claims } from './Claims';


@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {

  //loginForm: FormGroup;
  submitted: boolean = false;
  claimList:Observable<any>[] = [];
  //userEmail:String=localStorage.getItem('currentUser');
  currentDate:Date = new Date();
  cls = new Claims();
  polNum = new Policy();


  constructor(private userService: UserService, private router: Router)  
  {    }

 

  ngOnInit(): void {
    //this.getClaimsById(this.userEmail);
     
    
  }

  
  // public getClaimsById(userEmail) {
  //   this.userService.getClaimsById(userEmail).subscribe(data => {
  //     this.claimList = data;
  //     console.log(this.claimList); 
  //   });
  // }

  id:any=localStorage.getItem("id");


  claimform = new FormGroup({
    mobile : new FormControl('',Validators.required),
    PolicyNum : new FormControl('',Validators.required),
    reqAmt : new FormControl('',Validators.required),
    reason : new FormControl()
  });

  get mobile(){
    return this.claimform.get('mobile');
  }

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
  this.userService.claimPolicy(this.cls,this.PolicyNum.value)
    .subscribe(data =>{
       console.log(data);
       this.userService.getClaimsById(this.id);
      });
 }
 						finished(){
               alert("Submitted Successfully");
             }

            
}
