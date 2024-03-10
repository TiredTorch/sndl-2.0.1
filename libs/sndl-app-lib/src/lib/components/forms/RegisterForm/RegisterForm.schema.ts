import {
	object,
	string
} from "../../../yup";

export const validationSchema = object().shape({
	username: string().required(),
	email: string().email().required(),
	password: string().min(6).required(),
});