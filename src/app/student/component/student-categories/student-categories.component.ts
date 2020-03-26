import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/shared/entities/category';
import { CategoryService } from 'src/app/core/services/category.service';
import { ExerciseService } from 'src/app/core/services/exercise.service';


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
