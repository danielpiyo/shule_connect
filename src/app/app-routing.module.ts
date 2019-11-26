import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomedComponent } from './school/homed/homed.component';
import { DashboardComponent } from './school/dashboard/dashboard.component';
import { LoginComponent } from './school/login/login.component';
import { SignupComponent } from './school/signup/signup.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'school', component: HomedComponent, children:[
    {path:'', component:LoginComponent},
    {path:'signup', component: SignupComponent},
    {path:'home', component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
