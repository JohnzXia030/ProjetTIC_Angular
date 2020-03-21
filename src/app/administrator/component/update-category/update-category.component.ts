import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Category } from '../../../entities/category'

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

	category: Category= new Category();

  constructor(public dialogRef: MatDialogRef<UpdateCategoryComponent>,
  	@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  	this.category = this.data.category
  }
}
