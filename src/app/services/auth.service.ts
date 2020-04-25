import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  signUp(user){
    return this.httpClient.post<any>(`${environment.API}/signup`, user);
  }

  signIn(user){
    return this.httpClient.post<any>(`${environment.API}/signin`, user)
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
