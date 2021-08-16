import { Plans } from "./Plans";
import { User } from "./User";
import { Vehicle } from "./Vehicle";

export class Policy
{
    policyNum=0;
    vehicleRegNum:Vehicle=new Vehicle();
    userId:User =new User();
    planId:Plans =new Plans();
    period=0;
    startDate="";
    endDate="";
    
}