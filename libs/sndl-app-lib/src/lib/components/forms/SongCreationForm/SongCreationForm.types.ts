import { SongCreationFormData } from "../../../types";

export type SongCreationFormProps = {
	onSubmit: (data: SongCreationFormData) => void;
	initState: SongCreationFormData
};
