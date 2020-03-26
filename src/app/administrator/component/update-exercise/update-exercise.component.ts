import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Exercise } from '../../../entities/exercise'
import { Correction } from '../../../entities/correction'
import { CorrectionService } from '../../../services/correction.service'
import { ExerciseService } from '../../../services/exercise.service'

@Component({
  selector: 'app-update-exercise',
  templateUrl: './update-exercise.component.html',
  styleUrls: ['./update-exercise.component.scss']
})
export class UpdateExerciseComponent implements OnInit {

	exercise: Exercise = new Exercise();
	correction: Correction = new Correction();
	corrections: Correction[];

	displayEnonce = false;
	displayCorrection = false;

 	constructor(public exerciseService: ExerciseService,
 		public correctionService: CorrectionService,
 		public dialogRef: MatDialogRef<UpdateExerciseComponent>,
  		@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  	this.exercise = this.data.exercise
  	this.correction.idExercise = this.exercise.idExercise;
  	this.getCorrections();
  }

  addCorrection(){
  	this.correctionService.createCorrection(this.correction).subscribe(result =>
  		this.getCorrections()
  	);

  }

  getCorrections(){
  	this.correctionService.getCorrectionByExercise(this.exercise.idExercise).subscribe(result =>
  		this.corrections = result
  	)
  }

  updateExercise(){
  	this.exerciseService.updateExercise(this.exercise).subscribe();
  }

  deleteCorrection(correction: Correction){
  	this.correctionService.deleteCorrection(correction.idCorrection).subscribe(result =>
  		this.getCorrections()
  	)
  }

  displayUpdateEnonce(){
  	if (this.displayEnonce)
  		this.displayEnonce = false;
  	else
  		this.displayEnonce = true;
  }

}
