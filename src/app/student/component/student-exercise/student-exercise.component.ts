import {Component, OnInit} from '@angular/core';
import {SqlQuery} from '../../../shared/entities/sqlQuery';
import {HttpClient} from "@angular/common/http";


import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';


import { Exercise, jsonExo } from 'src/app/shared/entities/exercise';
import { ExerciseService } from 'src/app/core/services/exercise.service';
import { CorrectionService } from 'src/app/core/services/correction.service';
import { StudentTableComponent } from '../student-table/student-table.component'


@Component({
  selector: 'app-student-exercise',
  templateUrl: './student-exercise.component.html',
  styleUrls: ['./student-exercise.component.css']
})
export class StudentExerciseComponent implements OnInit {
  
  exercises: Exercise[];
  exercise: Exercise;
  model: SqlQuery = new SqlQuery(1,"");
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
    private correctionService: CorrectionService,
    private dialog: MatDialog
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
    this.model.idExercise = this.exercise.idExercise;
    this.correctionService.testExercise(this.model).subscribe(results => {
        this.dataResults = JSON.parse(results),
        this.setDataSourceAndDisplayedColumns()
      }
    );
    this.correctionService.correctExercise(this.model).subscribe( result =>
      this.trueOrFalse(JSON.parse(result))
    )
  }

  nextExercise(){
    if (this.posExercise<this.exercises.length-1)
      this.posExercise++
      this.changeExercise()
  }

  lastExercise(){
    if (this.posExercise>0){
      this.posExercise--
      this.changeExercise()
    }
  }

  changeExercise(){
      this.exercise = this.exercises[this.posExercise];
      this.dataResults = null;
      this.correct = null;
      this.model.sqlQuery="";
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

  trueOrFalse(model) {
    if(model.VeriCode==1001 || model.VeriCode==1002){
      this.correct = true
    } else
      this.correct = false
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

  displayTables(){
    const dialogRef = this.dialog.open(StudentTableComponent);
  }
}