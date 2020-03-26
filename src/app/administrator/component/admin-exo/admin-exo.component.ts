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


	constructor(public http:HttpClient,
		public categoryService: CategoryService,
		public exerciseService: ExerciseService ) { }

	ngOnInit() {
		this.getExercisesByGroup();
		this.getAllCategories();
		console.log(this.categories)
    	console.log(this.tabSelected)
		// let category: Category = new Category();
		// category.idCategory = 1;
		// this.categoryService.getCategoryById(JSON.stringify(category)).subscribe(result => console.log(result))
    //
		// category.nameCategory="coucou";
		// console.log(JSON.stringify(category))
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

	testLog(){
		let id = 13;
		let str:string = `coucou/${id}`
		console.log(str)
	}
}
