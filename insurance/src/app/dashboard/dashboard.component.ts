import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  con1:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  cont1(){
    this.con1=!this.con1;
  }
}
