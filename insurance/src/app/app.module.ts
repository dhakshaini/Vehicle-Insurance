import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginmenuComponent } from './loginmenu/loginmenu.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { BuyPolicyComponent } from './buy-policy/buy-policy.component';
import { LoginService } from './Service/login.service';
import { RegisterServiceService } from './Service/register.service';
import { UserService } from './Service/user.service';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    LoginmenuComponent,
    AdminComponent,
    BuyPolicyComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService,RegisterServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
