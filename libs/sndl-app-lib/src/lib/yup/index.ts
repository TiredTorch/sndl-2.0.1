import * as yup from "yup";

yup.setLocale({
	mixed: {
		required: "TXT_YUP_REQUIRED"
	},
	string: {
		email: "TXT_YUP_EMAIL",
		min: "TXT_YUP_MIN",
		max: "TXT_YUP_MAX",
	}
});

export const {
	string,
	object
} = yup;