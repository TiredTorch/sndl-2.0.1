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
import { PostCommentFormData } from "../../../types";
import {
	Button,
	Field
} from "../../common";
import { validationSchema } from "./PostCommentForm.schema";
import { postCommentFormStyles } from "./PostCommentForm.styles";
import { PostCommentFormProps } from "./PostCommentForm.types";

export const PostCommentForm: FC<PostCommentFormProps> = ({
	onSubmit,
	initState,
	sharePost
}) => {
	const intl = useIntl();

	const handleSubmit = useCallback(
		(
			values: PostCommentFormData, formikHelpers: FormikHelpers<PostCommentFormData>
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
                    style={postCommentFormStyles.root}
                >
                    <Field
                        id="message"
                        customVariant="sendComment"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="message"
                    />
                    <Button
                        customVariant="sendMessageForm"
                        type="submit"
                    >
                        {intl.formatMessage({ id: "TXT_POST_COMMENT" })}
                    </Button>
                    <Button
                        customVariant="sendMessageForm"
                        onClick={sharePost}
                    >
                        {intl.formatMessage({ id: "TXT_POST_PROFILE_SUBMIT" })}
                    </Button>
                </Form>
            )}
        </Formik>
	);
};

export default PostCommentForm;