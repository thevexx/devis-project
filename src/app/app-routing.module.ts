import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevisComponent } from './dashboard/devis/devis.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { HomeDashComponent } from './dashboard/home-dash/home-dash.component';
import { DemandeDevisComponent } from './demande-devis/demande-devis.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'demande', component: DemandeDevisComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'dashboard', component: HomeDashComponent },
      { path: 'devis', component: DevisComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: '**', redirectTo: 'dashboard' },
    ]
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
