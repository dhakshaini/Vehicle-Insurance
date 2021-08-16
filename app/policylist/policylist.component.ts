import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserPolicy } from '../UserPolicy';

@Component({
  selector: 'app-policylist',
  templateUrl: './policylist.component.html',
  styleUrls: ['./policylist.component.css']
})
export class PolicylistComponent implements OnInit {
  policyList: UserPolicy[]=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getPolicyList().subscribe(data=>{this.policyList=data})
  }

}
