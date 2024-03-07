export type SendMessageFormProps = {
	onSubmit: (data: SendMessageFormData) => void;
	initState: SendMessageFormData
};

export type SendMessageFormData = {
	field: string
};