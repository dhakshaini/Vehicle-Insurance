import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './Admin/add-plan/add-plan.component';
import { ClaimIsuranceComponent } from './Admin/claim-isurance/claim-isurance.component';
import { ListPlanComponent } from './Admin/list-plan/list-plan.component';
import { ListPolicyComponent } from './Admin/list-policy/list-policy.component';
import { ViewClaimsComponent } from './Admin/view-claims/view-claims.component';

const routes: Routes = [
  {path:'CreatePlan',component:AddPlanComponent},
  {path:'planlist',component:ListPlanComponent},
  {path:'ViewClaim',component:ViewClaimsComponent},
  {path:'PolicyList',component:ListPolicyComponent},
  {path:'Claim',component:ClaimIsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
