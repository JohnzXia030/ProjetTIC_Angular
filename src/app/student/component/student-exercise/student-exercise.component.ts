import { Component, OnInit } from '@angular/core';
import {SqlQuery} from './sql-query';
import {HttpClient} from "@angular/common/http";
import {Exercise, jsonExo} from './exercise';
import {CorrectionService} from './correction.service';

@Component({
  selector: 'app-student-exercise',
  templateUrl: './student-exercise.component.html',
  styleUrls: ['./student-exercise.component.css']
})
export class StudentExerciseComponent implements OnInit {

	exercise = new Exercise();
	model = new SqlQuery(null);
  	modelString: string;
  	queryCorrection = new SqlQuery(null)
	resp= new jsonExo();
  	exerciseDB=new Exercise();
  	dataResults = null;
  	correctionResult:string;

  correct = false;

  constructor(private http:HttpClient, private correction:CorrectionService) { }

  ngOnInit() {
  	this.exercise.idExercise=0;
    this.nextExercise();
  }

   onSubmit(){
    this.dataResults = null;
  	this.http.post("api/sqlExecutor/testSql", JSON.stringify(this.model),{responseType: 'text'}).subscribe(results =>
      {this.dataResults = JSON.parse(results),
       this.modelString = results,
      console.log(this.getHeaders()),
      console.log(this.modelString)}
    );


//****** For CORRECTION ******************//
    this.queryCorrection.sqlQuery = this.exerciseDB.exerciseCorrection;
    this.http.post("api/sqlExecutor/testSql", JSON.stringify(this.queryCorrection),{responseType: 'text'}).subscribe(results =>{
    this.correctionResult = results,
    console.log(this.correctionResult), this.trueOrFalse()});
    
  }

  trueOrFalse(){
    if (this.correctionResult==this.modelString){
      this.correct = true;
    }else{
      this.correct = false;
    }
  }

  ErrorCode(){
    return this.dataResults.ErrorCode;
  }

  getHeaders() {
    let headers: string[] = [];
    if (this.dataResults) {
      this.dataResults.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)) {
            headers.push(key);
          }
        });
      });
    }
    return headers;
  }



  nextExercise(){
    this.exercise.idExercise++;
    console.log(JSON.stringify(this.exercise));
    this.http.post("api/exercise/getExoById", JSON.stringify(this.exercise),{responseType: 'text'}).subscribe(results =>
    {	console.log("reach");
    	this.resp = JSON.parse(results);
      this.exerciseDB = this.resp.Data;});
  }



  displayedColumns: string[] = ["id_emp","nom_emp"];
  dataSource = this.dataResults;

}
