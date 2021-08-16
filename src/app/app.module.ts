import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlanComponent } from './Admin/add-plan/add-plan.component';
import { ListPlanComponent } from './Admin/list-plan/list-plan.component';
import { ViewClaimsComponent } from './Admin/view-claims/view-claims.component';
import { ListPolicyComponent } from './Admin/list-policy/list-policy.component';
import { ClaimIsuranceComponent } from './Admin/claim-isurance/claim-isurance.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPlanComponent,
    ListPlanComponent,
    ViewClaimsComponent,
    ListPolicyComponent,
    ClaimIsuranceComponent,
   
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
