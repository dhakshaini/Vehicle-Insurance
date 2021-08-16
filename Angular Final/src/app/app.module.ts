import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AddPlanComponent } from './admin/add-plan/add-plan.component';
import { ListPlanComponent } from './admin/list-plan/list-plan.component';
import { ListPolicyComponent } from './admin/list-policy/list-policy.component';
import { ViewClaimsComponent } from './admin/view-claims/view-claims.component';
import { PolicyDurationComponent } from './user/policy-duration/policy-duration.component';
import { BuyPolicyComponent } from './user/buy-policy/buy-policy.component';
import { ClaimHistoryComponent } from './user/claim-history/claim-history.component';
import { ClaimInsuranceComponent } from './user/claim-insurance/claim-insurance.component';
import { EstimateAmountComponent } from './user/estimate-amount/estimate-amount.component';
import { MypolicyComponent } from './user/mypolicy/mypolicy.component';
import { RenewPolicyComponent } from './user/renew-policy/renew-policy.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './user/user-page/user-page.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AddPlanComponent,
    ListPlanComponent,
    ListPolicyComponent,
    ViewClaimsComponent,
    RegisterComponent,
    BuyPolicyComponent,
    PolicyDurationComponent,
    ClaimHistoryComponent,
    ClaimInsuranceComponent,
    EstimateAmountComponent,
    MypolicyComponent,
    RenewPolicyComponent,
    HomePageComponent,
    ForgotPasswordComponent,
    UserPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
