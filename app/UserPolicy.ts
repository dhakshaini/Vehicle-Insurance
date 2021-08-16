import { Plan } from "./Plan";
import { User } from "./User";
import { Vehicle } from "./Vehicle";

export class UserPolicy
{
    policyNum=0;
    vehicleRegNum:Vehicle=new Vehicle();
    userId:User =new User();
    planId:Plan =new Plan();
    period=0;
    startDate="";
    endDate="";
    
}