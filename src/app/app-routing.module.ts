import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { InstitutionhomeComponent } from './institutionhome/institutionhome.component';
import { InstitutionloginComponent } from './institutionlogin/institutionlogin.component';
import { InstitutionregistrationComponent } from './institutionregistration/institutionregistration.component';
import { InstituteapplicationsComponent } from './instituteapplications/instituteapplications.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MinistryComponent } from './ministry/ministry.component';
import { DisplayComponent } from './display/display.component';
import { ScholarapplicationComponent } from './scholarapplication/scholarapplication.component';
import { StudentapplicationsComponent } from './studentapplications/studentapplications.component';
import { NodalofficerComponent } from './nodalofficer/nodalofficer.component';
import { MinistryhomeComponent } from './ministryhome/ministryhome.component';
import { NodalhomeComponent } from './nodalhome/nodalhome.component';
import { StudentapplicationministryComponent } from './studentapplicationministry/studentapplicationministry.component';
import { FormsModule } from '@angular/forms';
import { InstitutefinalapprovalComponent } from './institutefinalapproval/institutefinalapproval.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'studentlogin',component:StudentloginComponent},
  {path:'studenthome',component:StudenthomeComponent},
  {path:'contactUs',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutUs',component:AboutComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'institutionhome',component:InstitutionhomeComponent},
  {path:'institutionlogin',component:InstitutionloginComponent},
  {path:'inst_reg',component:InstitutionregistrationComponent},
  {path:'instituteapplications',component:InstituteapplicationsComponent},
  {path:'studentapplications',component:StudentapplicationsComponent},
  {path:'std_reg',component:StudentregistrationComponent},
  {path:'Display',component:DisplayComponent},
  {path:'scholarshipapplication',component:ScholarapplicationComponent},
  {path:'ministry_login',component:MinistryComponent},
  {path:'nodal_login',component:NodalofficerComponent},
  {path:'ministryhome',component:MinistryhomeComponent},
  {path:'nodalhome',component:NodalhomeComponent},
  {path:'studentapplicationministry',component:StudentapplicationministryComponent},
  {path:'FormsModule',component:FormsModule},
  {path:'institutefinalapproval',component:InstitutefinalapprovalComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
