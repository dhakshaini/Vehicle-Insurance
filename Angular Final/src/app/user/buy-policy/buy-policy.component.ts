import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/User';
import { Vehicle } from 'src/app/Vehicle';



@Component({
  selector: 'app-buy-policy',
  templateUrl: './buy-policy.component.html',
  styleUrls: ['./buy-policy.component.css']
})
export class BuyPolicyComponent implements OnInit {

  
  
  constructor(private userService:UserService,private loginService:LoginService,private router:Router,private aroute:ActivatedRoute) { }

  name:any;
  user:User=new User;
  currentuser:User=new User;
  vehicle:Vehicle=new Vehicle
  vehicleid:any;
  user_id:any;

  ngOnInit(): void {
  }

  show()
  {
    console.log(JSON.stringify(this.vehicle));
    this.name=localStorage.getItem("id");
     console.log(this.name);
     this.vehicleid=this.vehicle.regNum;
     localStorage.setItem("vehicleid",this.vehicleid)
    this.add();
    this.router.navigate(['policyLink'],{relativeTo:this.aroute})
  }

  add()
  {

    this.userService.addvehicle(this.vehicle,this.name).
     subscribe(
       data=>console.log(data),
       error=>console.log(error)
       ); 

      alert("Vehicle Registered Successfully!")
  }


}
