import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

//service
import {ValidateService} from './services/validate/validate.service';
import {AuthService} from './services/auth/auth.service';

const appRoutes :Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboad', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
