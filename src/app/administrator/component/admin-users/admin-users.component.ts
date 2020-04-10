import { Component, OnInit, ViewChild } from '@angular/core'
import { UserService } from '../../../core/services/user.service'
import { AdvancementService } from '../../../core/services/advancement.service'
import { Account } from '../../../shared/entities/account'
import { AccountAdvancement } from '../../../shared/entities/accountAdvancement'
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

  displayedColumns = ['id', 'name', 'class', 'advancementPercentage'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatTable, {static: false}) table: MatTable<UserData>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  accounts:Account[]

  constructor(private userService: UserService,
              private advancementService: AdvancementService) {
    this.generateTable()
  }

  generateTable(){
    let users: UserData[] = [];

    this.userService.getAllUsers().subscribe(result => {
      this.accounts = result
      users = this.accounts.map(x => new UserData(x.userId, x.userName, x.userClass, 0))
      this.addAdvancement(users)
    })    
  }

  addAdvancement(users: UserData[]){
    this.advancementService.getTotalAdvancement().subscribe(result =>
      {
        let id
        for(let i=0;i<result.length; i++ ){
          id = result[i].userId
          for (let j=0;j<users.length;j++){
            if(id==users[j].id){
              users[j].advancementPercentage=result[i].advancementPercentage
            }
          }
        }
        this.dataSource = new MatTableDataSource(users); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;    
        console.log(users)    
      }
    )
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
  constructor(theId:number, theName: string, theClass: number,theAdvancementPercentage: number){
    this.id = theId
    this.name = theName
    this.class = theClass
    this.advancementPercentage = theAdvancementPercentage
  }
  id: number;
  name: string;
  class: number;
  advancementPercentage: number;
}
