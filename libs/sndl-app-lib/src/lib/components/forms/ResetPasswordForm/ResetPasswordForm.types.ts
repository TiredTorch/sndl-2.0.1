export type ResetPasswordFormProps = {
	onSubmit: (data: ResetPasswordFormData) => void;
	initState: ResetPasswordFormData
};

export type ResetPasswordFormData = {
	field: string
};