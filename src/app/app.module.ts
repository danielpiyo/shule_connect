import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './school/login/login.component';
import { SignupComponent } from './school/signup/signup.component';
import { ProfileComponent } from './school/profile/profile.component';
import { HomedComponent } from './school/homed/homed.component';
import { DashboardComponent } from './school/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {AppSettings} from './home/app.settings';

import { MatSidenavModule, MatAutocompleteModule,MatBadgeModule, MatSnackBarModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatChipsModule, MatIconModule, MatListModule, MatCardModule, MatButtonModule, MatTableModule, MatSelectModule, MatInputModule, MatDialogModule, MatProgressBarModule, MatTooltipModule, MatDatepickerModule, MatCheckboxModule, MatExpansionModule, MatSlideToggleModule, MatProgressSpinnerModule, MatDialogConfig, MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HomedComponent,
    DashboardComponent
  ],
  imports: [
    MatSidenavModule, MatBadgeModule, MatSnackBarModule,
    MatPaginatorModule, MatSortModule, MatToolbarModule, 
    MatChipsModule, MatIconModule, MatListModule, 
    MatCardModule, MatButtonModule, MatTableModule, 
    MatSelectModule, MatInputModule, MatDialogModule, 
    MatProgressBarModule, MatTooltipModule, MatDatepickerModule, 
    MatCheckboxModule, MatExpansionModule, MatSlideToggleModule, 
    MatProgressSpinnerModule, MatNativeDateModule,MatAutocompleteModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
