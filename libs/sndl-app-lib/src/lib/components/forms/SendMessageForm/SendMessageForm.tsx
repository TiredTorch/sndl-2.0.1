import {
	Form,
	Formik
} from "formik";
import {
	CSSProperties,
	FC
} from "react";
import { useIntl } from "react-intl";
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

	return (
        <Formik
            initialValues={initState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
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