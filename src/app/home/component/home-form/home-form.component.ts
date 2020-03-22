import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { FormArray,ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { userInfo } from 'src/app/entities/user';


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
  public connexionForm = {
    username:'',
    password:'',
    groupid:''
  }
  
  constructor(private _http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.model = new userInfo("","","",2);
  }
  
  onSubmit(data){
    //data and model represent both the information submitted
    this._http
    .post("api/user/getLogInfo", 
          JSON.stringify(this.model),{responseType: 'text'})
    .subscribe(
          results => {
            // for (const key in this.model) {
            //   if (this.model.hasOwnProperty(key)) {
            //     const element = this.model[key];
            //     console.log(key+":"+element);
            //   }
            // }
            console.log(this.model.userName);
            this.responseUser= JSON.parse(results);
            if (this.responseUser.StatusCode==401){
              alert(this.responseUser.StatusMessage);
              this.error = this.responseUser.StatusMessage;
              this.router.navigateByUrl("home/connexion");
            } 
            else if(this.responseUser.StatusCode==200){
              console.log("log in");
              for (const key in this.responseUser.Data) {
                if (this.responseUser.Data.hasOwnProperty(key)) {
                  const element = this.responseUser.Data[key];
                  sessionStorage.setItem(key,element);
                }
              }
              if (this.responseUser.Data.userClass==2){
              this.router.navigateByUrl("student/account");
              } else 
              this.router.navigateByUrl("administrator");
            }
          }
    );
  }


  /* getUsername(){
    console.log("first request from crossorigin");
    this._http.get('api/home/getUser').subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  } */

}
