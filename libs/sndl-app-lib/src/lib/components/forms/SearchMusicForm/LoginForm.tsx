import {
	Form,
	Formik
} from "formik";
import { FC } from "react";
import { Field } from "../../common";
import { validationSchema } from "./LoginForm.schema";
import { LoginFormProps } from "./LoginForm.types";

export const LoginForm: FC<LoginFormProps> = ({
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

export default LoginForm;