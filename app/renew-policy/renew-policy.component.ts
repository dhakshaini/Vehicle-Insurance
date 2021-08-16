import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-renew-policy',
  templateUrl: './renew-policy.component.html',
  styleUrls: ['./renew-policy.component.css']
})
export class RenewPolicyComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder,private policyService:UserService,private router:Router) { }
  submitted=false;
  updatePolicy:FormGroup;
  ngOnInit(): void {
    this.updatePolicy = this.formBuilder.group({
      policyNum: ['',Validators.required],
      endDate: ['',Validators.required]
    })
  }
  get endDate(){  
    console.log(this.updatePolicy.get('endDate'));
    return this.updatePolicy.get('endDate');  
  }

  get policyNum(){  
    console.log(this.updatePolicy.get('policyNum'));
    return this.updatePolicy.get('policyNum');  
  }
  onSubmit()
  {
      this.submitted = true;
      if(this.updatePolicy.invalid){									
              return;									
      }	
      else
      {
        
          this.policyService.updatePolicy(this.policyNum?.value,this.endDate?.value).subscribe();
          alert("Policy Renewed");
          this.router.navigate(['mypolicy']);
      }
  }
}
