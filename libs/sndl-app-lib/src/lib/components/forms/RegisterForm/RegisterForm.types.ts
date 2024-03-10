export type RegisterFormProps = {
	onSubmit: (data: RegisterFormData) => void;
	initState: RegisterFormData
};

export type RegisterFormData = {
	username: string;
	email: string;
	password: string;
};