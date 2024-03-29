export type PostFormProps = {
	onSubmit: (data: PostFormData) => void;
	initState: PostFormData
};

export type PostFormData = {
	field: string
};