import { EditProfileFormData } from "../../../types";

export type EditProfileFormProps = {
	onSubmit: (data: EditProfileFormData) => void;
	initState: EditProfileFormData
};
