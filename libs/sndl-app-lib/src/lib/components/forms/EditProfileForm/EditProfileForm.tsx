import {
	Form,
	Formik
} from "formik";
import { FC } from "react";
import { Field } from "../../common";
import { validationSchema } from "./EditProfileForm.schema";
import { EditProfileFormProps } from "./EditProfileForm.types";

export const EditProfileForm: FC<EditProfileFormProps> = ({
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

export default EditProfileForm;