export class PaginatedData<T> {
	constructor(partial?: Partial<PaginatedData<T>>) {
		Object.assign(
			this,
			partial
		);
	}

	public data: T[];
	public pagination: Pagination;
}

export class Pagination {
	constructor(partial?: Partial<Pagination>) {
		Object.assign(
			this,
			partial
		);
	}

	public page: number;
	public pageSize: number;
	public pageCount: number;
	public total: number;
}