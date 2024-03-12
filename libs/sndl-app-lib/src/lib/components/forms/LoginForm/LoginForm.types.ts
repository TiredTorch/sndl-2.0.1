import { LoginFormData } from "../../../types";

export type LoginFormProps = {
	onSubmit: (data: LoginFormData) => void;
	initState: LoginFormData;
	isLoading: boolean;
};
