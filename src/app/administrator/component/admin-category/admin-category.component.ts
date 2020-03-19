import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../entities/exercise'
import { Category } from '../../../entities/category'
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { CategoryService } from '../../../services/category.service'
import { ExerciseService } from '../../../services/exercise.service'
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {UpdateCategoryComponent} from '../update-category/update-category.component'

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

	categories:Category[];
  category:Category = new Category();
  displayAdd:Boolean = false;
  buttonDisplayAdd = "+";

  constructor(private categoryService: CategoryService,
              public dialog: MatDialog) {}

  ngOnInit() {
  	this.getCategories();
  }

  displayAddCategory(){  
    if (!this.displayAdd){
      this.displayAdd = true;
      this.buttonDisplayAdd = "-";
    }
    else {
      this.displayAdd = false;
      this.buttonDisplayAdd = "+";
    }
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(results =>
      this.categories=results
    )
  }

  createCategory(){
    console.log(JSON.stringify(this.category))
    this.categoryService.createCategory(this.category).subscribe(result =>
      this.getCategories()
    );
  }

  deleteCategory(category: Category){
    this.categoryService.deleteCategory(category).subscribe(results =>
      this.getCategories()
    )
  }

  onSubmit(){
    this.createCategory()
  }

  displayUpdate(category: Category){
    const dialogRef = this.dialog.open(UpdateCategoryComponent,{
      data: {category: category}
    });
  }

}
