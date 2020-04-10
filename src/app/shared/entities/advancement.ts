export class Advancement {
	public advUserId: number;
    public advCategoryId: number;
    public advExerciseId: number;
	constructor(theAdvUserId: number, theAdvCategoryId: number, theAdvExerciseId: number){
		this.advCategoryId = theAdvCategoryId
		this.advExerciseId = theAdvExerciseId
		this.advUserId = theAdvUserId
	}


}

