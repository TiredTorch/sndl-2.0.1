export type SongCreationFormProps = {
	onSubmit: (data: SongCreationFormData) => void;
	initState: SongCreationFormData
};

export type SongCreationFormData = {
	field: string
};