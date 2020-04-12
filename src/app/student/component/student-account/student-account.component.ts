import { Component, OnInit } from '@angular/core';
import { userInfo } from 'src/app/shared/entities/userInfo';
import { AccountAdvancement } from 'src/app/shared/entities/accountAdvancement';
import { AuthentificationService } from 'src/app/core/authentification/authentification.service';
import { AdvancementService } from '../../../core/services/advancement.service'

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {
  public user: userInfo;
  public uinfo: any;
  public resp;
  accountAdvancement: AccountAdvancement;



  constructor(private auth: AuthentificationService,
    private advancementService: AdvancementService) { }

  ngOnInit() {
    this.auth.getLoginStatus()
    .subscribe(
      results => {
        this.resp = JSON.parse(results);
        if(this.resp.LoginStatus==false){
          return;
        }

      }
    );
    
    
    this.user = new userInfo(localStorage.userName, localStorage.userEmail, localStorage.userPassword, 2);
    // console.log("12:" + localStorage.getItem("userName"));
    // for (const key in localStorage) {
    //   console.log("key:" + key);
    //   const element = localStorage.userName;
    //   console.log(key + ":" + element);
    // }
    // console.log(this.user.getAllParam());
    // console.log("1" + this.user.userName);

    this.advancementService.getTotalAdvancementByUser(localStorage.userId).subscribe(result=>
      this.accountAdvancement = result
    )
  }

}
