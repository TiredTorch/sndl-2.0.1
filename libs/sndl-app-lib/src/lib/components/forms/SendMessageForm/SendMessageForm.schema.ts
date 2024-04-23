import {
	object,
	string
} from "yup";

export const validationSchema = object().shape({
	message: string().required()
});