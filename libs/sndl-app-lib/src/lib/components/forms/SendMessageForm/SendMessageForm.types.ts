import { SendMessageFormData } from "../../../types";

export type SendMessageFormProps = {
	onSubmit: (data: SendMessageFormData) => void;
	initState: SendMessageFormData
};
