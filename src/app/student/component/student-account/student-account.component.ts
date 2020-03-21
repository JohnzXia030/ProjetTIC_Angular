import { Component, OnInit } from '@angular/core';
import { userInfo } from 'src/app/entities/user';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {
  public user: userInfo;
  public info: any[];
  constructor() { }

  ngOnInit() {
    for (const key in sessionStorage) {
      if (sessionStorage.hasOwnProperty(key)) {
        const element = sessionStorage[key];
        this.user[key] = element;
      }
    }
    console.log("1"+this.user.userName);
  }

}
