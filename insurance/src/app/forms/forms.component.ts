import { Component, OnInit } from '@angular/core';
import { Payment } from '../Payment';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  payment:Payment=new Payment;

  ngOnInit(): void {
  }

}
