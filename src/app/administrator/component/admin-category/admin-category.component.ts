import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../shared/entities/exercise'
import { Category } from '../../../shared/entities/category'
import { Observable, of } from 'rxjs';
import { CategoryService } from '../../../core/services/category.service'
import { ExerciseService } from '../../../core/services/exercise.service'
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

    dialogRef.afterClosed().subscribe(result => {
      if (result instanceof Object){
        category = result;
        this.categoryService.updateCategory(category).subscribe( results =>
          this.getCategories()
        );
      }
    });
  }

}
