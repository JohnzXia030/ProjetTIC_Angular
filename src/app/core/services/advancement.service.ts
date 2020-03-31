import { Injectable } from '@angular/core';
import { Advancement } from '../../shared/entities/advancement'
import { CategoryAdvancement } from '../../shared/entities/category'
import { AccountAdvancement } from '../../shared/entities/accountadvancement'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { ExerciseService} from './exercise.service'

@Injectable({
  providedIn: 'root'
})
export class AdvancementService {

  constructor(private http: HttpClient,
  			  private exerciseService: ExerciseService) { }

  addAdvancement(advancement:Advancement){
  	console.log(JSON.stringify(advancement))
  	return this.http.post("api/advancement/addAdvancement", JSON.stringify(advancement))
  }

  getTotalAdvancement(){
  	return this.http.get<AccountAdvancement[]>(`api/advancement/getTotalAdvancement`)
  }

  getCategoryAdvancement(idUser:number){
    return this.http.get<CategoryAdvancement[]>(`api/advancement/getCategoryAdvancement/${idUser}`)
  }
}
