import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/Policy';
import { AdminserviceService } from 'src/app/Services/adminservice.service';

@Component({
  selector: 'app-list-policy',
  templateUrl: './list-policy.component.html',
  styleUrls: ['./list-policy.component.css']
})
export class ListPolicyComponent implements OnInit {
  policy:Policy[]=[]
  constructor(private AdminService:AdminserviceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.AdminService.getPolicyList().subscribe(

      data=>
      {
          this.policy=data;
      }
      
    )
    console.log(this.policy);
  }

}
