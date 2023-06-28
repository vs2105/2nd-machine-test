import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { StaffdashboardComponent } from './shared/components/staffdashboard/staffdashboard.component';
import { HodDashboardComponent } from './shared/components/hod-dashboard/hod-dashboard.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { StaffComponent } from './shared/components/staff/staff.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  
  {
    path:'staff', component:StaffdashboardComponent
  },

  {
    path:'hod', component:HodDashboardComponent
  },
  {
    path:'dialog', component:DialogComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
