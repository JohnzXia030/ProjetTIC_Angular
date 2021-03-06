import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { FormArray,ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { userInfo } from 'src/app/shared/entities/userInfo';
import { AuthentificationService } from 'src/app/core/authentification/authentification.service';
import { LogOutComponent } from 'src/app/shared/components/log-out/log-out.component';
import * as bcrypt from 'bcryptjs';
import { sha256, sha224 } from 'js-sha256';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  public model:userInfo;
  public responseUser;
  @Output() user:any;
  public error;
  @Input() message;
  
  constructor(private _http: HttpClient,private router: Router,private auth: AuthentificationService) {}

  ngOnInit() {
    this.auth.getLoginStatus()
    .subscribe(
      results => {
        this.responseUser = JSON.parse(results);
        if(this.responseUser.UserClass[0].authority=='ROLE_ANONYMOUS'){
          //this.error = "not log in yet";
          return;
        }
        else {
          if (this.responseUser.UserClass[0].authority == "2"){
          this.router.navigateByUrl("student/account");
          } else if(this.responseUser.UserClass[0].authority == "1"){
          this.router.navigateByUrl("administrator");
          }
        }
      }
    );
    this.model = new userInfo("","","",2);
    
  }
  
  onSubmit(data){
    //data and model represent both the information submitted
    //Info encryption
    const initPw = this.model.userPassword;
    const hash = sha256(initPw);
    this.model.userPassword = hash;
    
    this._http
    .post("api/user/login", 
          JSON.stringify(this.model),{responseType: 'text'})
    .subscribe(
          results => {
            console.log(this.model.userName);
            this.responseUser= JSON.parse(results);
            if (this.responseUser.StatusCode==401){
              alert(this.responseUser.StatusMessage);
              this.error = this.responseUser.StatusMessage;
              this.model.userPassword = initPw;
              this.router.navigateByUrl("home/connexion");
            } 
            else if(this.responseUser.StatusCode==200){
              console.log("log in");
              for (const key in this.responseUser.Data) {
                if (this.responseUser.Data.hasOwnProperty(key)) {
                  const element = this.responseUser.Data[key];
                  localStorage.setItem(key,element);
                }
              }
              console.log(localStorage.getItem("userName"));
              console.log(this.model.getAllParam());
              this.model.userPassword = initPw;
              if (this.responseUser.Data.userClass==2){
              this.router.navigateByUrl("student/account");
              } else if (this.responseUser.Data.userClass==1){
              this.router.navigateByUrl("administrator");
              }
            }
          }
    );
  }


}
