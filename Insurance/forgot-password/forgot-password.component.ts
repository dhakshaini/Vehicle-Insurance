import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  useremail:string;
  password:string;
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  update(){
    this.service.forgotpswd(this.useremail,this.password).subscribe();
    alert("password changed successfully");
    this.router.navigate(['/loginLink']);
  }

}
