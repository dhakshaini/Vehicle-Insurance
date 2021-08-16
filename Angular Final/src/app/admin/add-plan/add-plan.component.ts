import { Component, OnInit } from '@angular/core';
import { Plans } from 'src/app/Plans';
import { AdminserviceService } from 'src/app/Services/adminservice.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  
  plan: Plans = new Plans();
  submitted = false;
  constructor(private AdminService: AdminserviceService) { }
  ngOnInit() {
  }
  newEmployee(): void {
    this.submitted = false;
    this.plan = new Plans();
  }
 save() {
   
   this.AdminService.createPlan(this.plan)
     .subscribe(data => console.log(data), error => console.log(error));
     this.plan = new Plans();
     console.log("Plan added" + this.plan);
  }
  onSubmit() {
   this.submitted = true;
   this.save();
 }

}
