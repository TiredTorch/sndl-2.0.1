export type DashboardPost = {
	creator: {
		avatar: string;
		id: number,
		name: string;
	};
	id: number;
	content: string;
	created_at: string;
};

export type DashboardDetailedPost = {
	content: string;
	created_at: string;
	id: number;
	comments: DetailedPostComment[]
};

export type DetailedPostComment = {
	content: string;
	author: {
		avatar: string;
		name: string
	}
};

export type DashboardPostComment = {
	creator: string;
	content: string;
	imageUrl: string;
};