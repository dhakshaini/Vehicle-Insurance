import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginmenu',
  templateUrl: './loginmenu.component.html',
  styleUrls: ['./loginmenu.component.css']
})
export class LoginmenuComponent implements OnInit {
  name:any=localStorage.getItem("currentUser");
  constructor() { }

  ngOnInit(): void {
  }

}
