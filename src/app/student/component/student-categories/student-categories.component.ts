import { Component, OnInit } from '@angular/core';
import { Category } from '../../../entities/category'
import { Exercise } from '../../../entities/exercise'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { CategoryService } from '../../../services/category.service'
import { ExerciseService } from '../../../services/exercise.service'


@Component({
  selector: 'app-student-categories',
  templateUrl: './student-categories.component.html',
  styleUrls: ['./student-categories.component.scss']
})
export class StudentCategoriesComponent implements OnInit {

	categories: Category[];

  constructor(public categoryService: CategoryService,
		public exerciseService: ExerciseService ) { }

  ngOnInit() {
  	this.categoryService.getCategories().subscribe(results =>
  		this.categories = results
  	)
  }

}
