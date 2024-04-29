import {
	Form,
	Formik,
	FormikHelpers
} from "formik";
import {
	FC,
	useCallback
} from "react";
import { useIntl } from "react-intl";
import { PostFormData } from "../../../types";
import {
	Button,
	Field
} from "../../common";
import { validationSchema } from "./PostForm.schema";
import { postFormStyles } from "./PostForm.styles";
import { PostFormProps } from "./PostForm.types";

export const PostForm: FC<PostFormProps> = ({
	onSubmit,
	initState
}) => {
	const intl = useIntl();

	const handleSubmit = useCallback(
		(
			values: PostFormData, formikHelpers: FormikHelpers<PostFormData>
		) => {
			onSubmit(values);
			formikHelpers.resetForm();
		},
		[onSubmit],
	);

	return (
        <Formik
            initialValues={initState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {(formik) => (
                <Form
                    style={postFormStyles.root}
                >
                    <Field
                        placeholder={intl.formatMessage({ id: "TXT_POST_PROFILE_FORM" })}
                        id="message"
                        customVariant="sendChatMessage"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="message"
                    />
                    <Button
                        customVariant="sendMessageForm"
                        type="submit"
                    >
                        {intl.formatMessage({ id: "TXT_POST_PROFILE_SUBMIT" })}
                    </Button>
                </Form>
            )}
        </Formik>
	);
};

export default PostForm;