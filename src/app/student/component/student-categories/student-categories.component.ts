import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Category, CategoryAdvancement } from 'src/app/shared/entities/category';
import { CategoryService } from 'src/app/core/services/category.service';
import { ExerciseService } from 'src/app/core/services/exercise.service';
import { AdvancementService } from 'src/app/core/services/advancement.service';


@Component({
  selector: 'app-student-categories',
  templateUrl: './student-categories.component.html',
  styleUrls: ['./student-categories.component.scss']
})
export class StudentCategoriesComponent implements OnInit {

	categories: CategoryAdvancement[];

  constructor(public categoryService: CategoryService,
		public exerciseService: ExerciseService,
    public advancementService: AdvancementService) { }

  ngOnInit() {
  	this.advancementService.getCategoryAdvancement(+sessionStorage.getItem("userId")).subscribe(results =>
  		this.categories = results
  	)
  }

  isFinished(category: CategoryAdvancement){
    if(category.nbDone==category.nbTotal)
      return true;
    else
      return false;
  }

}
