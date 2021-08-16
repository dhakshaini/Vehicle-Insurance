import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { RegisterService } from '../Services/register.service copy';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();
  flag:any;
  confirmpassword:string;
  constructor(private regservice:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  show(){
    console.log(JSON.stringify(this.user));
    this.regservice.registerUser(this.user).subscribe(data=>this.flag,error=>console.log(error));
    alert("Registered successfully");
    this.router.navigate(['/home']);
  }
}
