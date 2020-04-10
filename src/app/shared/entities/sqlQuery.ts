import {Subscription} from 'rxjs';


export class SqlQuery {
  constructor(
  	public idExercise: number,
    public sqlQuery: string
  ) {  }
}