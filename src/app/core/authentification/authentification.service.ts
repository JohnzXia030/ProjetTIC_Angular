import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService implements CanActivate {
  public isAdmin:boolean;
  public resp;
  @Output() loginStatus: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  canActivate(): boolean {
    
    this.http.get("api/user/getSessionInfo", { responseType: 'text' }).subscribe(
      results => {
        this.resp = JSON.parse(results);
        if (this.resp.Data.userClass == 1) {
          this.isAdmin = true;
          
          console.log(this.isAdmin);
        } else
          this.isAdmin = false;

      }
    );
    
    return this.isAdmin;
    
  }

  getLoginStatus() {
    return this.http.get("api/user/getSessionInfo", { responseType: 'text' });
  }

}
