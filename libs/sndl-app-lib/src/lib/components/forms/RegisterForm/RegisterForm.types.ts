import { RegisterFormData } from "../../../types";

export type RegisterFormProps = {
	onSubmit: (data: RegisterFormData) => void;
	initState: RegisterFormData
};
