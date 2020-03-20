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

	getCategoryById(category: string): Observable<Category>{
		return this.http.post<Category>("api/category/getCategoryById", category)
	}

	createCategory(category:Category){
		return this.http.post("api/category/addCategory", category)
	}

	deleteCategory(category: Category){
		let id = category.idCategory;
		return this.http.delete(`api/category/deleteCategory/${id}`)
	}

	updateCategory(category: Category){
		return this.http.post("api/category/updateCategory", category)
	}
}
