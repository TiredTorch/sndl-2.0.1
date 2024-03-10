import {
	object,
	string
} from "../../../yup";

export const validationSchema = object().shape({
	login: string().required(),
	password: string().required()
});