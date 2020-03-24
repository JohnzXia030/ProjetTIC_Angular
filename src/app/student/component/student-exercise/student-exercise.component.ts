import {Component, OnInit} from '@angular/core';
import {SqlQuery} from '../../../entities/sqlQuery';
import {HttpClient} from "@angular/common/http";
import {Exercise, jsonExo} from '../../../entities/exercise';
import { ExerciseService } from '../../../services/exercise.service'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-student-exercise',
  templateUrl: './student-exercise.component.html',
  styleUrls: ['./student-exercise.component.css']
})
export class StudentExerciseComponent implements OnInit {
  
  exercises: Exercise[];
  exercise: Exercise;
  model: SqlQuery = new SqlQuery("");
  resp: jsonExo;

  displayedColumns: string[];
  dataSource;
  dataResults;

  idCategory:number;
  posExercise:number=0;

  correct:boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exerciseService: ExerciseService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param =>
      this.idCategory=+param.get('id')
    )

    this.exerciseService.getExercisesByGroup(this.idCategory).subscribe(result =>{
      this.exercises = result
      this.exercise = this.exercises[this.posExercise]
      }
    )
  }

  onSubmit() {
    this.dataResults = null;
    this.http.post("/api/sqlExecutor/testSql", JSON.stringify(this.model), {responseType: 'text'}).subscribe(results => {
        this.dataResults = JSON.parse(results),
        console.log(this.dataResults)
          this.setDataSourceAndDisplayedColumns()
          this.correct = true;
          //this.trueOrFalse()
      }
    );
  }

  nextExercise(){
    this.posExercise++
    this.exercise = this.exercises[this.posExercise];
  }

  lastExercise(){
    if (this.posExercise>0){
      this.posExercise--
      this.exercise = this.exercises[this.posExercise];
    }

  }

  getKeysFromJsonArray() {
    let keys: string[] = [];
    if (this.dataResults) {
      for (var key in this.dataResults[0]) {
        keys.push(key);
      }
    }
    return keys;
  }

  getKeysFromJsonString() {
    let keys: string[] = [];
    for (var key in this.dataResults) {
      keys.push(key)
    }
    return keys;
  }

  setDataSourceAndDisplayedColumns() {
    if (this.hasSqlSyntaxError()) {
      this.dataSource = this.dataResults;
      this.displayedColumns = this.getKeysFromJsonString()
    } else {
      this.dataSource = this.dataResults;
      this.displayedColumns = this.getKeysFromJsonArray();
    }
  }

  trueOrFalse() {
    /*if (this.exerciseDB.exerciseCorrection.indexOf(this.model.sqlQuery) >= 0) {
      this.correct = true;
    } else {
      this.correct = false;
    }*/
  }

  getErrorCode() {
    if (this.hasSqlSyntaxError()) {
      return this.dataResults.ErrorCode;
    }
  }

  getRootCause() {
    if (this.hasSqlSyntaxError()) {
      return this.dataResults.RootCause;
    }
  }

  hasSqlSyntaxError() {
    if (this.dataResults) {
      return this.dataResults.hasOwnProperty("ErrorCode");
    }
  }  

  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}