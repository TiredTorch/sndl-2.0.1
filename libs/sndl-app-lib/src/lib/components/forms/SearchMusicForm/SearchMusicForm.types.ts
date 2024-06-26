export type LoginFormProps = {
	onSubmit: (data: LoginFormData) => void;
	initState: LoginFormData
};

export type LoginFormData = {
	tag: string
};