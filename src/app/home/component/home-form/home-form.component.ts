import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { FormArray,ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';

export class userConnection {

  constructor(
    public username: string,
    public password: string,
    public groupid : number
  ) {  }

}
@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  public connexionForm = {
    username:'',
    password:'',
    groupid:''
  }
  public model ;
  public resp: string = "";
  public responseUser;
  @Output() user:any;
  constructor(private _http: HttpClient,private router: Router) { 
    
  }

  ngOnInit() {
    this.model = new userConnection("","",1);
  }
  onSubmit(data){
    //data and model represents both the information submitted
    this._http
    .post("api/user/getLogInfo", 
          JSON.stringify(data),{responseType: 'text'}
          )
    .subscribe(
          results => {
            this.responseUser= JSON.parse(results);
            if (this.responseUser.StatusCode==401){
              alert(this.responseUser.StatusMessage);
              this.router.navigateByUrl("home/connexion")
            } 
            else if(this.responseUser.StatusCode==200){
              console.log("log in");
              this.router.navigateByUrl("student/account")
            }}
          );
  }
  
  getCode(){
    console.log("user trying to login");
    this._http.get('api/user/getLogInfo').subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
    console.log(this.user);
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
