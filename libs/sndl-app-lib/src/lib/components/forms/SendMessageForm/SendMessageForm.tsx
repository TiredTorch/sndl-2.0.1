import {
	Form,
	Formik,
	FormikHelpers
} from "formik";
import {
	CSSProperties,
	FC,
	useCallback
} from "react";
import { useIntl } from "react-intl";
import {
	PostFormData,
	SendMessageFormData
} from "../../../types";
import {
	Button,
	Field
} from "../../common";
import { validationSchema } from "./SendMessageForm.schema";
import { sendMessageFormStyles } from "./SendMessageForm.styles";
import { SendMessageFormProps } from "./SendMessageForm.types";

export const SendMessageForm: FC<SendMessageFormProps> = ({
	onSubmit,
	initState
}) => {
	const intl = useIntl();

	const handleSubmit = useCallback(
		(
			values: PostFormData, formikHelpers: FormikHelpers<SendMessageFormData>
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
                    style={sendMessageFormStyles.root as CSSProperties}
                >
                    <Field
                        placeholder={intl.formatMessage({ id: "TXT_SEND_MESSAGE_FORM" })}
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
                        {intl.formatMessage({ id: "TXT_SEND_MESSAGE_SUBMIT" })}
                    </Button>
                </Form>
            )}
        </Formik>
	);
};

export default SendMessageForm;