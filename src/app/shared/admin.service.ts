import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  devisList = [];
  employeesList = [];
  projectList = [];
  clientList = [];

  constructor(private http: HttpClient) { }

  getListEmployees() {
    return this.http.get('http://localhost:3000/admin/employees/all');
  }

  getEmployeeById(id) {
    return this.http.get('http://localhost:3000/admin/employees/' + id);
  }

  addEmployee(employee) {
    return this.http.post('http://localhost:3000/admin/employee/', employee);
  }

  updateEmployee(employee, id) {
    return this.http.post('http://localhost:3000/admin/employee/update/' + id, employee);
  }

  assignEmployee(listEmployees, devisId) {
    return this.http.post('http://localhost:3000/admin/assign/' + devisId, listEmployees);
  }

  getListProjects() {
    return this.http.get('http://localhost:3000/admin/project/all');
  }

  getProjectById(id) {
    return this.http.get('http://localhost:3000/admin/project/' + id);
  }

  updateProject(id, project) {
    return this.http.post('http://localhost:3000/admin/project/update/' + id, project);
  }

  getListClients() {
    return this.http.get('http://localhost:3000/admin/client/all');
  }

  updateClient(id, client) {
    return this.http.post('http://localhost:3000/admin/client/update/' + id, client);
  }

  getListDevis() {
    return this.http.get('http://localhost:3000/devis/all');
  }

  updateDevis(id, devis) {
    return this.http.post('http://localhost:3000/devis/update/' + id, devis);
  }

}
