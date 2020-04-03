import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService implements CanActivate {
  public isAdmin: boolean;
  public resp;
  @Output() loginStatus: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  canActivate(): boolean {
    this.http.get("api/user/getSessionInfo", { responseType: 'text' }).subscribe(
      results => {
        this.resp = JSON.parse(results);
        console.log(results);
        if (this.resp.UserClass[0].authority == "1") {
          this.isAdmin = true;
          
        }
        else if (this.resp.UserClass[0].authority == "2") {
          this.isAdmin = false;
          this.router.navigateByUrl('student/account');
        }
        else if (this.resp.StatusCode == 404) {
          this.isAdmin = false;
          this.router.navigateByUrl('home/connexion');
        } 
        else
          this.router.navigateByUrl('home/connexion');
      }
    );
    return this.isAdmin;
  }

  getLoginStatus() {
    return this.http.get("api/user/getSessionInfo", { responseType: 'text' });
  }

}
