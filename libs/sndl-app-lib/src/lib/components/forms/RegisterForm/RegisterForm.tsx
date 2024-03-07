import {
	Form,
	Formik
} from "formik";
import { FC } from "react";
import { Field } from "../../common";
import { validationSchema } from "./RegisterForm.schema";
import { RegisterFormProps } from "./RegisterForm.types";

export const RegisterForm: FC<RegisterFormProps> = ({
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

export default RegisterForm;