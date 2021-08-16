import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { UserService } from '../Service/user.service';
import { User } from '../User';
import { Vehicles } from '../Vehicles';

@Component({
  selector: 'app-buy-policy',
  templateUrl: './buy-policy.component.html',
  styleUrls: ['./buy-policy.component.css']
})
export class BuyPolicyComponent implements OnInit {

  
  
  constructor(private userService:UserService,private loginService:LoginService) { }

  name:any;
  user:User=new User;
  currentuser:User=new User;
  vehicle:Vehicles=new Vehicles();

  user_id:any;

  ngOnInit(): void {
  }

  show()
  {
    console.log(JSON.stringify(this.vehicle));
    this.name=localStorage.getItem('currentUser');
     console.log(this.name);
    this.add();
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
