import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Claims } from 'src/app/Claims';
import { AdminserviceService } from 'src/app/Services/adminservice.service';

@Component({
  selector: 'app-view-claims',
  templateUrl: './view-claims.component.html',
  styleUrls: ['./view-claims.component.css']
})
export class ViewClaimsComponent implements OnInit {
claim:Claims[]=[]

  submitted: boolean = false;
  claimList: Observable<any>[] = [];
  
  clicked1 = false;
clicked2=false;
  isClicked = false;
  
  constructor(private AdminService:AdminserviceService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData()
  {
    this.AdminService.getClaimList().subscribe(

      data=>
      {
          this.claim=data;
      }
      
    )
  }

  approveClaim(id: number) {
    this.AdminService.approveClaim(id)
      .subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error));
  }

  declineClaim(id: number) {
    this.AdminService.declineClaim(id).subscribe(
        data => {
          console.log(data);
          this.loadData();
        },
        error => console.log(error));
  }
}
