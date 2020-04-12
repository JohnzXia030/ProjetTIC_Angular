import { Component, OnInit, Input } from '@angular/core';
import { sha256, sha224 } from 'js-sha256';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { userInfo } from 'src/app/shared/entities/userInfo';
import { InfoVerificationService } from 'src/app/core/services/infoVerification.service';

@Component({
  selector: 'app-home-inscription',
  templateUrl: './home-inscription.component.html',
  styleUrls: ['./home-inscription.component.css']
})
export class HomeInscriptionComponent implements OnInit {
  public model: userInfo;
  public error;
  public respInscription;
  public test;
  public pw2;
  constructor(private _http: HttpClient,private router: Router,private infoVerifi: InfoVerificationService) { }

  ngOnInit() {
    this.model = new userInfo("","","",2);
  }
  
  onSubmit(data){
    console.log(this.model.userName);
    if (data.password!=this.pw2){
      this.error = "Please re-confirm the password";
      return;
    };
    if (!this.infoVerifi.isEmail(this.model.userEmail)){
      this.error = "Please re-confirm the form of email";
      return;
    }
    const initPw = this.model.userPassword;
    const hash = sha256(initPw);
    this.model.userPassword = hash;
    this._http
    .post("api/user/registerInfo", 
          JSON.stringify(this.model),{responseType: 'text'})
    .subscribe(
          results => {
            this.respInscription= JSON.parse(results);
            if (this.respInscription.StatusCode==402){
              this.error = this.respInscription.StatusMessage;
              this.model.userPassword = initPw;
              return;
            } 
            else if(this.respInscription.StatusCode==200){
              console.log("registered");
              this.router.navigateByUrl("student/account");
            }
          }
     );
  }
}
