import { Injectable } from '@angular/core';
import { Account } from '../../shared/entities/account'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getAllUsers():Observable<Account[]>{
  	return this.http.get<Account[]>("api/user/getAllUsers")
  }

  updateUserClass(id:number){
  	return this.http.get(`api/user/updateUserClass/${id}`)
  }
}
