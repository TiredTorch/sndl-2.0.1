import { PostFormData } from "../../../types";

export type PostFormProps = {
	onSubmit: (data: PostFormData) => void;
	initState: PostFormData
};
