import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DevisComponent } from './dashboard/devis/devis.component';
import { DemandeDevisComponent } from './demande-devis/demande-devis.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeDashComponent } from './dashboard/home-dash/home-dash.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    DevisComponent,
    DemandeDevisComponent,
    HomeComponent,
    ProjectsComponent,
    ClientsComponent,
    EmployeesComponent,
    HomeDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
