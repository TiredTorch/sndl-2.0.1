import {
	Form,
	Formik
} from "formik";
import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Button,
	Field
} from "../../common";
import { validationSchema } from "./PostCommentForm.schema";
import { postCommentFormStyles } from "./PostCommentForm.styles";
import { PostCommentFormProps } from "./PostCommentForm.types";

export const PostCommentForm: FC<PostCommentFormProps> = ({
	onSubmit,
	initState
}) => {
	const intl = useIntl();

	return (
        <Formik
            initialValues={initState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form
                    style={postCommentFormStyles.root}
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

export default PostCommentForm;