import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/Policy';
import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-mypolicy',
  templateUrl: './mypolicy.component.html',
  styleUrls: ['./mypolicy.component.css']
})
export class MypolicyComponent implements OnInit {
  id:any=localStorage.getItem("id");
  policyList:Policy[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getPolicyById(this.id).subscribe(data=>{this.policyList=data;});
    console.log(this.policyList);
  }
}

