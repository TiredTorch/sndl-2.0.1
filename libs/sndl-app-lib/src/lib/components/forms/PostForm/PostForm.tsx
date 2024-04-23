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
import { validationSchema } from "./PostForm.schema";
import { postFormStyles } from "./PostForm.styles";
import { PostFormProps } from "./PostForm.types";

export const PostForm: FC<PostFormProps> = ({
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