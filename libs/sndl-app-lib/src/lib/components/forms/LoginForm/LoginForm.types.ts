export type LoginFormProps = {
	onSubmit: (data: LoginFormData) => void;
	initState: LoginFormData;
	isLoading: boolean;
};

export type LoginFormData = {
	login: string
	password: string
};