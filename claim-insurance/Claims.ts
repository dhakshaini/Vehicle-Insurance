import { Policy } from "Policy";

export class Claims{

    claimDate: Date; 
    Request_Num:number=0;
    PolicyNum : Policy;
    ApprovStatus:String="";
    reqAmt:number=0;
    approvAmt:number=0;
    reason:String="";

}