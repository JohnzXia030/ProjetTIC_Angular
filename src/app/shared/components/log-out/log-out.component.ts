import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/core/services/logout.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private logOutService:LogoutService,private router:Router) { }

  ngOnInit() {
  }

  public logout(){
    console.log("log out");
    this.logOutService.logOut().subscribe();
    sessionStorage.clear();
    this.router.navigateByUrl("home/connexion");
    
  }
}
