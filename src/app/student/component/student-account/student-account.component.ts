import { Component, OnInit } from '@angular/core';
import { userInfo } from 'src/app/entities/userInfo';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {
  public user: userInfo;
  public uinfo: any[];
  constructor() { }

  ngOnInit() {
    console.log("12:"+sessionStorage.getItem("userName"));
    for (const key in sessionStorage) {
      //console.log("key:"+key);
      const element = sessionStorage.getItem(key);
      
      //console.log("1"+element);
      
    }

    console.log(this.user.getAllParam());
    console.log("1"+this.user.userName);
  }

}
