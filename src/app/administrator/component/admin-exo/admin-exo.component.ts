import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../shared/entities/exercise'
import { Category } from '../../../shared/entities/category'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { CategoryService } from '../../../core/services/category.service'
import { ExerciseService } from '../../../core/services/exercise.service'
import {FormControl} from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {UpdateExerciseComponent} from '../update-exercise/update-exercise.component'

@Component({
  selector: 'app-admin-exo',
  templateUrl: './admin-exo.component.html',
  styleUrls: ['./admin-exo.component.css']
})
export class AdminExoComponent implements OnInit {

	exo: Exercise = new Exercise();
	exercises: Exercise[];
	categories: Category[];
	tabSelected: number=1;
	model: string;
	displayAdd:Boolean = false;
  	buttonDisplayAdd = "+";


	constructor(public http:HttpClient,
		public categoryService: CategoryService,
		public exerciseService: ExerciseService,
		public dialog: MatDialog ) { }

	ngOnInit() {
		this.getExercisesByGroup();
		this.getAllCategories();
  	}

	  displayAddExercise(){  
	    if (!this.displayAdd){
	      this.displayAdd = true;
	      this.buttonDisplayAdd = "-";
	    }
	    else {
	      this.displayAdd = false;
	      this.buttonDisplayAdd = "+";
	    }
	  }


  	createExercise(){
  		console.log(JSON.stringify(this.exo))
  		this.exerciseService.createExercise(this.exo).subscribe(result =>
  			this.getExercisesByGroup()
  		);
	}

	deleteExercise(exercise: Exercise){
		this.exerciseService.deleteExercise(exercise).subscribe(result =>
			this.getExercisesByGroup()
		);
	}

	getExercises(){
		this.exerciseService.getAllExercises().subscribe(results =>
			{
				this.exercises = results
				console.log(results)
			}
		)
	}

	getExercisesByGroup(){
		this.exerciseService.getExercisesByGroup(this.tabSelected).subscribe(result => 

			{
				this.exercises = result
			}
		)
	}

	getAllCategories(){
		this.categoryService.getCategories().subscribe(results =>
			{
				this.categories = results
			}
		)
				let cat: Category = new Category();
		cat.idCategory = 1;
		console.log(cat)
	}

	tabChanged(tabChangeEvent: MatTabChangeEvent): void {
	  this.tabSelected=this.categories[0].idCategory;
	  this.tabSelected=this.categories[tabChangeEvent.index].idCategory;
	  this.getExercisesByGroup()
	}

	onSubmit(){
		this.createExercise();
	}


  displayUpdate(exercise: Exercise){
    const dialogRef = this.dialog.open(UpdateExerciseComponent,{
      data: {exercise: exercise}, height : '80%', width: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result instanceof Object){
        exercise = result;
      }
    });
  }
}
