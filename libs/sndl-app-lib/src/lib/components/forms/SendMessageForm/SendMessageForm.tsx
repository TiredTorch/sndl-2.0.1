import {
	Form,
	Formik
} from "formik";
import { FC } from "react";
import { Field } from "../../common";
import { validationSchema } from "./SendMessageForm.schema";
import { SendMessageFormProps } from "./SendMessageForm.types";

export const SendMessageForm: FC<SendMessageFormProps> = ({
	onSubmit,
	initState
}) => {

	return (
        <Formik
            initialValues={initState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {() => (
                <Form>
                    <Field
                        name="field"
                    />
                </Form>
            )}
        </Formik>
	);
};

export default SendMessageForm;