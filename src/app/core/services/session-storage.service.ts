import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  @Output() loginStatus: boolean = false;
  constructor() { }
  getLoginStatus() {
    if (sessionStorage.userName) {
      return this.loginStatus = true;
    } 
    else return this.loginStatus = false;
  }
  
}
