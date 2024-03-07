export type EditProfileFormProps = {
	onSubmit: (data: EditProfileFormData) => void;
	initState: EditProfileFormData
};

export type EditProfileFormData = {
	field: string
};