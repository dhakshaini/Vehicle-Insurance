import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../Service/register.service';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  flag: any;
  constructor(private regservice: RegisterServiceService) {}

  ngOnInit(): void {}

  show() {
    console.log(JSON.stringify(this.user));
    this.regservice.registerUser(this.user).subscribe(
      (data) => this.flag,
      (error) => console.log(error)
    );
    alert('Registered successfully');
  }
}
