import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string=localStorage.getItem("username");
  constructor() { }

  ngOnInit(): void {
    
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 
  logout(){
    alert("Confirm Logout");
    localStorage.removeItem("id");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("username");
  }
}
