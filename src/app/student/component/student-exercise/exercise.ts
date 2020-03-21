import {Subscription} from 'rxjs';



export class Exercise {
	public idExercise: number;
	public exerciseText: string;
	public exerciseCorrection: string;
}

export class jsonExo {
	public Data:Exercise;
	public ErrorCode:number;
}

