import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MypolicyComponent } from './mypolicy/mypolicy.component';
import { PolicyDurationComponent } from './policy-duration/policy-duration.component';
import { PolicylistComponent } from './policylist/policylist.component';
import { RenewPolicyComponent } from './renew-policy/renew-policy.component';

const routes: Routes = [
{path:'mypolicy',component:MypolicyComponent},
{path:'policylist',component:PolicylistComponent},
{path:'renewPolicy',component:RenewPolicyComponent},
{path:'policyDuration',component:PolicyDurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
