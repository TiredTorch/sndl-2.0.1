export type RegisterFormProps = {
	onSubmit: (data: RegisterFormData) => void;
	initState: RegisterFormData
};

export type RegisterFormData = {
	field: string
};