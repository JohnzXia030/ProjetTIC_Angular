import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../entities/exercise'
import { Category } from '../../../entities/category'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { CategoryService } from '../../../services/category.service'
import { ExerciseService } from '../../../services/exercise.service'
import {FormControl} from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-admin-exo',
  templateUrl: './admin-exo.component.html',
  styleUrls: ['./admin-exo.component.css']
})
export class AdminExoComponent implements OnInit {

	exo: Exercise = new Exercise();
	exercises: Exercise[];
	categories: Category[];
	tabSelected: number=0;
	

	constructor(public http:HttpClient, 
		public categoryService: CategoryService,
		public exerciseService: ExerciseService ) { }

	ngOnInit() {
	this.exo.exerciseCorrection = "exo Correction"
		this.exo.exerciseText = "exo Text"
		this.exo.groupId = 1
		this.exo.idExercise = 10 
		this.getExercisesByGroup();
		this.getAllCategories();
  	}


  	createExercise(){
  		console.log(JSON.stringify(this.exo))

  		this.exerciseService.createExercise(this.exo).subscribe(results =>
		    {	
		    	console.log("reach");
		  	}
		)
	}

	getExercises(){
		this.exerciseService.getAllExercises().subscribe(results =>
			{
				console.log(results);
				this.exercises = results
			}
		)
	}

	getExercisesByGroup(){
		this.exerciseService.getExercisesByGroup(this.tabSelected+1).subscribe(result => 
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
	}

	tabChanged(tabChangeEvent: MatTabChangeEvent): void {
	  this.tabSelected=tabChangeEvent.index;
	  this.getExercisesByGroup();
	}


}
