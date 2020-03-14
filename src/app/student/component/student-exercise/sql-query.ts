import {Subscription} from 'rxjs';


export class SqlQuery {
  constructor(
    public sqlQuery: string
  ) {  }
}
export class exo {
  constructor(
    public idExercise: string,
    public exerciseText : string,
    public correction : string
  ) {  }
}