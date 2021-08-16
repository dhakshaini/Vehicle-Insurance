import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { User } from '../User';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  email:String="";
  password:String="";
  currentuser:any="";
  loginuser:User=new User();
  userid:any;
  username:any;
  ngOnInit(): void {
  }
  constructor(private router:Router,private loginService:LoginService){}
  register()
  {
    this.router.navigate(['register']);
  }
  user()
  {
    this.loginService.login(this.email).subscribe(data=>{
      this.loginuser=data;
      if(this.loginuser.userPswd==this.password){
        this.router.navigate(['/user']);
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
  admin()
  {
    if(this.email=="admin@gmail.com" && this.password=="Admin@123"){
    this.router.navigate(['admin']);
    }
    else{
      alert("Invalid admin details");
    }
  }
  forgotPassword()
  {
    this.router.navigate(['forgotPassword']);
  }
}
