import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate {
  public resp;
  public isStud:boolean;
  constructor(private router: Router,private http: HttpClient) {
  }
  canActivate(): boolean {
      this.http.get("api/user/getSessionInfo", { responseType: 'text' }).subscribe(
      results => {
        this.resp = JSON.parse(results);
        console.log(results);
        if (this.resp.UserClass[0].authority == "1") {
          this.isStud = false;
          this.router.navigateByUrl('administrator');
        }
        else if (this.resp.UserClass[0].authority == "2") {
          this.isStud = true;
          this.router.navigateByUrl('student/account');
        }
        else if (this.resp.StatusCode == 404) {
          this.isStud = false;
          this.router.navigateByUrl('home/connexion');
        } 
        else
          this.router.navigateByUrl('home/connexion');
      }
    );
    return this.isStud;
  }
}
