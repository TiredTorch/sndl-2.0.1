import {
	object,
	string
} from "yup";

export const validationSchema = object().shape({
	field: string()
});