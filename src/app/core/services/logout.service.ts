import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(public http: HttpClient) { }
  logOut(){
    return this.http.get("api/user/logout",{ responseType: 'text' });
  }
}
