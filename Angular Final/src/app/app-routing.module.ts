import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './admin/add-plan/add-plan.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AdminComponent } from './admin/admin.component';
import { ListPlanComponent } from './admin/list-plan/list-plan.component';
import { ListPolicyComponent } from './admin/list-policy/list-policy.component';
import { ViewClaimsComponent } from './admin/view-claims/view-claims.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { BuyPolicyComponent } from './user/buy-policy/buy-policy.component';
import { ClaimHistoryComponent } from './user/claim-history/claim-history.component';
import { ClaimInsuranceComponent } from './user/claim-insurance/claim-insurance.component';
import { EstimateAmountComponent } from './user/estimate-amount/estimate-amount.component';
import { MypolicyComponent } from './user/mypolicy/mypolicy.component';
import { PolicyDurationComponent } from './user/policy-duration/policy-duration.component';
import { RenewPolicyComponent } from './user/renew-policy/renew-policy.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path:'home',component:HomePageComponent},
  { path: 'user', component: UserComponent ,
  children:[
  {
    path:'',component:UserPageComponent
  } ,
  {
    path:'estimateLink',component:EstimateAmountComponent
  },
  {
    path:'claimLink',component:ClaimInsuranceComponent
  },
  {path:'renewPolicy',component:RenewPolicyComponent},
  {path:'mypolicy',component:MypolicyComponent},
  {path:'claimhistory',component:ClaimHistoryComponent},
  {path:'vehicleLink',component:BuyPolicyComponent,children:[{path:'policyLink',component:PolicyDurationComponent}]},
  ]},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path:'',component:AdminPageComponent},
      { path: 'planlist', component: ListPlanComponent },
      { path: 'CreatePlan', component: AddPlanComponent},
      {path:'ViewClaim',component:ViewClaimsComponent},
      {path:'PolicyList',component:ListPolicyComponent}
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
