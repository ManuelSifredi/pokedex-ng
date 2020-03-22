import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient, private router: Router) { }

  signUp(user){
    return this.httpClient.post<any>(`${this.URL}/signup`, user);
  }

  signIn(user){
    return this.httpClient.post<any>(`${this.URL}/signin`, user)
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  isAuthorized(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
