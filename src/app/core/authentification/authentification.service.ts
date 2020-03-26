import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  @Output() loginStatus: boolean = false;
  constructor(private http:HttpClient,private router:Router) { }
  getLoginStatus() {
    return this.http.get("api/user/getSessionInfo",{responseType: 'text'});
  }
  
}
