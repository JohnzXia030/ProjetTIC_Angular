export class Category {
	public idCategory: number;
	public nameCategory: string;
	public orderCategory: number;
}

export class CategoryAdvancement extends Category {
	public nbTotal: number;
	public nbDone: number;
}
