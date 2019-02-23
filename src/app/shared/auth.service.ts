import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post('http://localhost:3000/auth/login', user);
  }
  register(user) {
    return this.http.post('http://localhost:3000/auth/register', user);
  }


  createDevis(devis) {
    return this.http.post('http://localhost:3000/devis', devis);
  }
}
