import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypolicyComponent } from './mypolicy/mypolicy.component';
import { HttpClientModule } from '@angular/common/http';
import { PolicylistComponent } from './policylist/policylist.component';
import { RenewPolicyComponent } from './renew-policy/renew-policy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PolicyDurationComponent } from './policy-duration/policy-duration.component';
@NgModule({
  declarations: [
    AppComponent,
    MypolicyComponent,
    PolicylistComponent,
    RenewPolicyComponent,
    PolicyDurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
