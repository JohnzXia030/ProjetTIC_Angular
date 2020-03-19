import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../entities/exercise'
import { Category } from '../../../entities/category'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { CategoryService } from '../../../services/category.service'
import { ExerciseService } from '../../../services/exercise.service'
import {FormControl} from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

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
	model: string;
	

	constructor(public http:HttpClient, 
		public categoryService: CategoryService,
		public exerciseService: ExerciseService ) { }

	ngOnInit() {
		this.getExercisesByGroup();
		this.getAllCategories();

		let category: Category = new Category();
		category.id = 1;
		this.categoryService.getCategoryById(JSON.stringify(category)).subscribe(result => console.log(result))

		category.name="coucou";
		console.log(JSON.stringify(category))
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
				let cat: Category = new Category();
		cat.id = 1;
		console.log(cat)
	}

	tabChanged(tabChangeEvent: MatTabChangeEvent): void {
	  this.tabSelected=tabChangeEvent.index;
	  this.getExercisesByGroup()
	}

	onSubmit(){
		this.createExercise();
	}

	testLog(){
		let id = 13;
		let str:string = `coucou/${id}`
		console.log(str)
	}
}
