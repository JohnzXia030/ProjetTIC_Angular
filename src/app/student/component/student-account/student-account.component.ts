import { Component, OnInit } from '@angular/core';
import { userInfo } from 'src/app/shared/entities/userInfo';
import { AuthentificationService } from 'src/app/core/authentification/authentification.service';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {
  public user: userInfo;
  public uinfo: any;
  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.auth.getLoginStatus().subscribe(
      results => {
        if (results = false){
          return;
        }
      }
    );
    
    
    this.user = new userInfo(sessionStorage.userName, sessionStorage.userEmail, sessionStorage.userPassword, 2);
    // console.log("12:" + sessionStorage.getItem("userName"));
    // for (const key in sessionStorage) {
    //   console.log("key:" + key);
    //   const element = sessionStorage.userName;
    //   console.log(key + ":" + element);
    // }
    // console.log(this.user.getAllParam());
    // console.log("1" + this.user.userName);
  }

}
