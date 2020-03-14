import { Injectable } from '@angular/core';
import { Category } from '../entities/category'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) { }

  	getCategories(): Observable<Category[]>{
		return this.http.get<Category[]>("api/category/getAllCategories")
	}
}
