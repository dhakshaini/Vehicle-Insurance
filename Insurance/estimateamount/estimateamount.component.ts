import { Component, OnInit } from '@angular/core';
import { Plans } from 'src/app/Plans';
import { EstimateService } from 'src/app/Services/estimate.service';


@Component({
  selector: 'app-estimateamount',
  templateUrl: './estimateamount.component.html',
  styleUrls: ['./estimateamount.component.css']
})
export class EstimateamountComponent implements OnInit {

  vechType:String="";
  planType:String="";
  vechModel:String="";
  age:number;
  amount:Number;
  amt:any;
  plans:Plans[]=[];
  names:string[]=[];
  p:Plans;
  unique:string[]=[];
  constructor(private estimate:EstimateService) { }

  ngOnInit(): void {
   console.log("working")
   this.estimate.getPlans().subscribe(
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
    
      
    }
    // console.log(this.names)
  // this.loginService.login(this.name).subscribe(data=>{
  //   this.loginuser=data;  
  show(){
    this.estimate.estimateAmount(this.vechType,this.vechModel,this.planType,this.age).subscribe(data=>{this.amt=data;this.amount=this.amt;});
  }
}
