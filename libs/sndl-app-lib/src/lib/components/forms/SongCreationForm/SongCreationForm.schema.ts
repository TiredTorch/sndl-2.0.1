import {
	mixed,
	object,
	string
} from "yup";

export const validationSchema = object().shape({
	author: string().required(),
	songName: string().required(),
	albumName: string().required(),
	albumImage: mixed().nullable(),
	songFile: mixed().nullable(),
});