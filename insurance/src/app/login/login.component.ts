import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';
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
  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  user(){
    this.loginService.login(this.email).subscribe(data=>{
      this.loginuser=data;

      if(this.loginuser.password==this.password){
        this.router.navigate(['/loginmenuLink']);
        this.currentuser=this.loginuser.user_id;
        localStorage.setItem("currentUser",this.currentuser);
        }
        else{
          alert("Invalid User");
        }
    });
  
  }
  admin(){
    this.router.navigate(['/adminLink']);
  }

}
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { LoginService } from '../Service/login.service';
// import { User } from '../User';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   name:String="";
//   password:String="";
//   currentuser:any;
//   loginuser:User=new User();
//   constructor(private router:Router,private loginService:LoginService) { }

//   ngOnInit(): void {
//   }
//   user(){
//     this.loginService.login(this.name).subscribe(data=>{
//       this.loginuser=data;
//     });
//     if(this.loginuser.password==this.password){
//         this.router.navigate(['/loginmenuLink']);
//     this.currentuser=this.name;
//     localStorage.setItem("currentUser",this.currentuser);
//     }
//     else{
//       alert("Invalid User");
//     }
//   }
//   admin(){
//     this.router.navigate(['/adminLink']);
//   }

// }



