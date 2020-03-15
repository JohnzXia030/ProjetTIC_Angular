import { Injectable } from '@angular/core';
import { Exercise } from '../entities/exercise'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';

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
  	let exercise: Exercise = new Exercise();
  	exercise.groupId=id;
  	return this.http.post<Exercise[]>("api/exercise/getExercisesByGroup", JSON.stringify(exercise))
  }
}
