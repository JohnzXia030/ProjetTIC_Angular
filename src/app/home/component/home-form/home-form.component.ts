import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { FormBuilder,FormArray,ReactiveFormsModule } from '@angular/forms'

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
  public model = new userConnection("","",1);
  @Output() user:any;
  constructor(private _http: HttpClient) { 
    
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.connexionForm)
    //this._http.post("api/user/getLogInfo", JSON.stringify(this.model),{responseType: 'text'}).subscribe(results => this.resp = results);
    //this.dataResults = JSON.parse(this.resp);
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
