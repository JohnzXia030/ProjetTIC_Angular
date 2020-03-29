import { Component, OnInit, ViewChild } from '@angular/core'
import { UserService } from '../../../core/services/user.service'
import { Account } from '../../../shared/entities/account'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatTable} from '@angular/material';
import {PageEvent} from '@angular/material/paginator';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})


export class AdminUsersComponent{

  displayedColumns = ['id', 'name', 'class'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatTable, {static: false}) table: MatTable<UserData>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  accounts:Account[]

  constructor(private userService: UserService) {
    this.generateTable()
  }

  generateTable(){
    const users: UserData[] = [];

    this.userService.getAllUsers().subscribe(result => {
      this.accounts = result
      for (let i = 0; i<this.accounts.length; i++){
        let user:UserData = new UserData()
        user.class = this.accounts[i].userClass
        user.id = this.accounts[i].userId
        user.name = this.accounts[i].userName
        users.push(user)
      }
      this.dataSource = new MatTableDataSource(users); 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  changeClass(id:number){
    this.userService.updateUserClass(id).subscribe(result =>
      this.generateTable()
    )
  }

}


export class UserData {
  id: number;
  name: string;
  class: number;
}
