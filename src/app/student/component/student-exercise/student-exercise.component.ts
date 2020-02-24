import {Component, OnInit} from '@angular/core';
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

  idExerciseToShow = 1;
  exercise: Exercise;
  model: SqlQuery;
  resp: jsonExo;
  exerciseDB: Exercise;
  dataResults;
  displayedColumns: string[];
  dataSource;
  correct: boolean;

  constructor(private http: HttpClient, private correction: CorrectionService) {
  }

  ngOnInit() {
    this.exercise = new Exercise();
    this.model = new SqlQuery(null);
    this.resp = new jsonExo();
    this.exerciseDB = new Exercise();
    this.dataResults = null;
    this.displayedColumns = null;
    this.dataSource = null;
    this.exercise.idExercise = this.idExerciseToShow;
    this.http.post("/api/exercise/getExoById", JSON.stringify(this.exercise), {responseType: 'text'}).subscribe(results => {
      this.resp = JSON.parse(results);
      this.exerciseDB = this.resp.Data,
        console.log(this.exerciseDB.exerciseCorrection)
    });
  }

  hasSqlSyntaxError() {
    if (this.dataResults) {
      return this.dataResults.hasOwnProperty("ErrorCode");
    }
  }

  onSubmit() {
    this.dataResults = null;
    this.http.post("/api/sqlExecutor/testSql", JSON.stringify(this.model), {responseType: 'text'}).subscribe(results => {
        this.dataResults = JSON.parse(results),
          this.setDataSourceAndDisplayedColumns(),
          this.trueOrFalse()
      }
    );
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
    if (this.exerciseDB.exerciseCorrection.indexOf(this.model.sqlQuery) >= 0) {
      this.correct = true;
    } else {
      this.correct = false;
    }
  }

  nextExercise() {
    this.idExerciseToShow++;
    this.ngOnInit();
  }

  getErrorCode(){
    if(this.hasSqlSyntaxError()){
      return this.dataResults.ErrorCode;
    }
  }

  getRootCause(){
    if(this.hasSqlSyntaxError()){
      return this.dataResults.RootCause;
    }
  }
}
