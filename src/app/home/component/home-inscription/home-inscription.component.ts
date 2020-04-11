import { Component, OnInit, Input } from '@angular/core';
import * as bcrypt from 'bcryptjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { userInfo } from 'src/app/shared/entities/userInfo';

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
  constructor(private _http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.model = new userInfo("","","",2);
  }
  
  onSubmit(data){
    console.log(this.model.userName);
    if (data.password!=this.pw2){
      this.error = "Please re-confirm the password";
      return;
    };
    const hash = bcrypt.hashSync(this.model.userPassword,10);
    this.model.userPassword = hash;
    this._http
    .post("api/user/registerInfo", 
          JSON.stringify(this.model),{responseType: 'text'})
    .subscribe(
          results => {
            this.respInscription= JSON.parse(results);
            if (this.respInscription.StatusCode==402){
              this.error = this.respInscription.StatusMessage;
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
