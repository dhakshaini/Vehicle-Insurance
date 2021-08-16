import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserPolicy } from '../UserPolicy';

@Component({
  selector: 'app-mypolicy',
  templateUrl: './mypolicy.component.html',
  styleUrls: ['./mypolicy.component.css']
})
export class MypolicyComponent implements OnInit {
  id=101;     //to be fetched from local storage
  policyList:UserPolicy[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getPolicyById(this.id).subscribe(data=>{this.policyList=data;});
    console.log(this.policyList);
  }
}
