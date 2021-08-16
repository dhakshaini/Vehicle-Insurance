import { Policy } from "./Policy";

export class Claims{

    claimDate:Date=new Date;
    request_Num:number=0;
    PolicyNum : Policy=new Policy();
    approvStatus:String="";
    reqAmt:number=0;
    approvAmt:number=0;
    reason:String="";

}