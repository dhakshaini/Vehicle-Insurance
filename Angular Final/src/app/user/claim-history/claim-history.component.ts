import { Component, OnInit } from '@angular/core';
import { Claims } from 'src/app/Claims';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-claim-history',
  templateUrl: './claim-history.component.html',
  styleUrls: ['./claim-history.component.css']
})
export class ClaimHistoryComponent implements OnInit {

  id:any=localStorage.getItem("id");
  claim:Claims[]=[];
  cl:string[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getClaimsById(this.id).subscribe(data=>{this.claim=data;console.log(this.claim)});
  }

}
