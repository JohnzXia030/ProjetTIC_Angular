import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Correction } from '../../shared/entities/correction'

@Injectable({
  providedIn: 'root'
})
export class CorrectionService {

  constructor(public http:HttpClient) { }

  	getCorrectionByExercise(id: number): Observable<Correction[]>{
		return this.http.get<Correction[]>(`api/correction/getCorrectionByExercise/${id}`)
	}

	createCorrection(correction:Correction){
		return this.http.post("api/correction/addCorrection", correction)
	}

	deleteCorrection(id: number){
		return this.http.delete(`api/correction/updateCorrection/${id}`)
	}

	testExercise(model){
		return this.http.post("/api/sqlExecutor/testSql", JSON.stringify(model), {responseType: 'text'})
	}

	correctExercise(model){
		return this.http.post("/api/sqlExecutor/sqlCorrector", JSON.stringify(model), {responseType: 'text'})
	}
}
