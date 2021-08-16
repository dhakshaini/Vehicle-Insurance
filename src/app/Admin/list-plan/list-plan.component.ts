import { Component, OnInit } from '@angular/core';
import { Plans } from 'src/app/Plans';
import { AdminserviceService } from 'src/app/Services/adminservice.service';


@Component({
  selector: 'app-list-plan',
  templateUrl: './list-plan.component.html',
  styleUrls: ['./list-plan.component.css']
})
export class ListPlanComponent implements OnInit {
plan:Plans[]=[]
show:boolean=false;
amount:number=0;
  constructor(private AdminService:AdminserviceService) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData()
  {
    this.AdminService.getEmpList().subscribe(

      data=>
      {
          this.plan=data;
      }
      
    )
    //console.log(this.empList);
  }
  deletePlan(id: number) {
    this.AdminService.deletePlan(id).subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error));
  }
  public updatePlan(id:number) {
    this.show=!this.show;
    this.AdminService.updatePlan(id,this.amount).subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error));
  }
 

  }


