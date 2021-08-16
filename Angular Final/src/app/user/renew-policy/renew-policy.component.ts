import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


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
     duration: [,Validators.required]
    })
  }
  get duration(){  
    console.log(this.updatePolicy.get('duration'));
    return this.updatePolicy.get('duration');  
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
        
          this.policyService.updatePolicy(this.policyNum?.value,this.duration?.value).subscribe();
          // this.router.navigate(['mypolicy']);
          alert("policy renewed");
      }
  }
}
