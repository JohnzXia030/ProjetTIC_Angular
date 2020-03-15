import {Subscription} from 'rxjs';



export class Exercise {
	public idExercise: number;
	public exerciseText: string;
	public exerciseCorrection: string;
	public groupId: number;
}

export class jsonExo {
	public Data:Exercise;
	public ErrorCode:number;
}

