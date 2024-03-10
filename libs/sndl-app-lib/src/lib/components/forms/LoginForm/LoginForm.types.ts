export type LoginFormProps = {
	onSubmit: (data: LoginFormData) => void;
	initState: LoginFormData
};

export type LoginFormData = {
	login: string
	password: string
};