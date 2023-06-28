import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './shared/components/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { StaffdashboardComponent } from './shared/components/staffdashboard/staffdashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select'
import { LoginComponent } from './shared/components/login/login.component';
import {MatRadioModule} from '@angular/material/radio'
import { HttpClientModule } from '@angular/common/http';
import { HodDashboardComponent } from './shared/components/hod-dashboard/hod-dashboard.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material/core';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StaffComponent } from './shared/components/staff/staff.component';
import {MatToolbarModule} from '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    StaffdashboardComponent,
    HodDashboardComponent,
    DialogComponent,
    StaffComponent,
   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
