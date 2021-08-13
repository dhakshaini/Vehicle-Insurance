import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String="";
  password:String="";
  currentuser:any="";
  loginuser:User=new User();
  userid:any;
  username:any;
  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  user(){
    this.loginService.login(this.email).subscribe(data=>{
      this.loginuser=data;
      if(this.loginuser.userPswd==this.password){
        this.router.navigate(['/loginmenuLink']);
        this.currentuser=this.email;
        this.userid=this.loginuser.userId;
        this.username=this.loginuser.userName;
        localStorage.setItem("id",this.userid);
        localStorage.setItem("currentUser",this.currentuser);
        localStorage.setItem("username",this.username);
        console.log(localStorage.getItem("currentUser"));
        }
        else{
          alert("Invalid User");
        }
    });
  }
  admin(){
    this.router.navigate(['/adminLink']);
  }
  forgotpswd(){
    this.router.navigate(['/forgotpswd']);
  }
}
