export type SearchFriendFormProps = {
	onSubmit: (data: SearchFriendFormData) => void;
	initState: SearchFriendFormData
};

export type SearchFriendFormData = {
	field: string
};