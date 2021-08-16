import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from '../Plan';
import { UserService } from '../user.service';
import { UserPolicy } from '../UserPolicy';

@Component({
  selector: 'app-policy-duration',
  templateUrl: './policy-duration.component.html',
  styleUrls: ['./policy-duration.component.css']
})
export class PolicyDurationComponent implements OnInit {
  plans:Plan[]=[];
  names:String[]=[];
  unique:String[]=[];
  p:Plan;
  planAvail:Plan=new Plan();
  policyForm:FormGroup;
  policy:UserPolicy=new UserPolicy();
  userId:number=102;      //1
  planId:number;      //2            //three values to be retrived from local storage
  vehicleId:String='TN57Q1140';   //3
  constructor(private formBuilder:FormBuilder,private policyService:UserService,private router:Router) { }
  submitted=false;
  vType="";
  pType="";
  mType="";
  ngOnInit(): void {
    console.log("working")
   this.policyService.getPlans().subscribe(
    data=>{
      this.plans=data;
      console.log(this.plans);
      for(let i=0;i<this.plans.length;i++){
        this.p=this.plans[i];
        // console.log(this.p);
        this.names[i]=this.p.vehicleModel;
        console.log(this.names);
      }
      this.unique=Array.from(new Set(this.names))
      console.log(this.unique)
    })
    this.policyForm=this.formBuilder.group({
      planType:['',Validators.required],
      vehicleType:['',Validators.required],
      model:['',Validators.required],
      duration:['',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required]
    });
  }
  get model()
  {
    return this.policyForm.get('model');
  }
  get period()
  {
    return this.policyForm.get('duration');
  }
  get startDate()
  {
    return this.policyForm.get('startDate');
  }
  get endDate()
  {
    return this.policyForm.get('endDate');
  }
  get planType()
  {
    return this.policyForm.get('planType');
  }
  get vehicleType()
  {
    return this.policyForm.get('vehicleType');
  }
  onSubmit()
  {
     
      
      if(this.policyForm.invalid)
      {
        console.log("invalid");
        return;
      }
      else{
        this.submitted=true;
        this.vType=this.vehicleType?.value;
        this.pType=this.planType?.value;
        this.mType=this.model?.value;
        this.policy.period=this.period?.value;
        this.policy.startDate=this.startDate?.value;
        this.policy.endDate=this.endDate?.value;
        this.policyService.getPlan(this.vType,this.pType,this.mType).subscribe(data=>{this.planAvail=data;console.log(this.planAvail);this.planId=this.planAvail.planId;});
        
        this.policyService.addPolicy(this.policy,this.userId,this.vehicleId,this.planId).subscribe();
        
        // this.router.navigate(['mypolicy']);

      }
      
    
  }
}
