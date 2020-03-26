import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  @Output() loginStatus: boolean = false;
  constructor(private http:HttpClient) { }
  getLoginStatus() {
    return this.http.get("api/user/getSessionInfo",{responseType: 'text'});
  }
}
