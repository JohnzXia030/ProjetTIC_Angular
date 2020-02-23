import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  readonly APP_URL = 'http://localhost:8080';

  @Output() user:any;
  constructor(private _http: HttpClient) { 
    
  }

  ngOnInit() {
  }

  getUsername(){
    console.log("first request from crossorigin");
    this._http.get(this.APP_URL + '/getUser').subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
}
