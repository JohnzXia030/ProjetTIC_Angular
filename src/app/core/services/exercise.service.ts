import { Injectable } from '@angular/core';
import { Exercise } from '../../shared/entities/exercise'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import {Category} from "../../shared/entities/category";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(public http:HttpClient) { }

  createExercise(exercise: Exercise){
  	return this.http.post("api/exercise/addExercise", JSON.stringify(exercise),{responseType: 'text'})
  }

  deleteExercise(exercise: Exercise){
  	let id = exercise.idExercise;
  	return this.http.delete(`api/exercise/deleteExercise/${id}`)
  }

  getAllExercises(){
  	return this.http.get<Exercise[]>("api/exercise/getAllExercises")
  }

  getExercisesByGroup(id:number){
  	let category : Category = new Category();
  	category.idCategory = id;
    console.log(JSON.stringify(category))
  	return this.http.post<Exercise[]>("api/exercise/getExercisesByGroup", JSON.stringify(category))
  }

  updateExercise(exercise: Exercise){
    console.log(JSON.stringify(exercise))
    return this.http.post("api/exercise/updateExercise", JSON.stringify(exercise))
  }
}
