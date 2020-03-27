import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate {
  
  constructor(private router: Router) {
  }
  canActivate(): boolean {
    let isLogin: boolean;
    const user = sessionStorage.getItem("userName");
    if (!user) {
      isLogin = false; 
      console.log(123456);
      this.router.navigateByUrl('home/connexion');
    } else {
      isLogin = true;
    }
    return isLogin;
  }
}
