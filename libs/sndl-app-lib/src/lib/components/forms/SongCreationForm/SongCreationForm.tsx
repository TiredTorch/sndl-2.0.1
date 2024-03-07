import {
	Form,
	Formik
} from "formik";
import { FC } from "react";
import { Field } from "../../common";
import { validationSchema } from "./SongCreationForm.schema";
import { SongCreationFormProps } from "./SongCreationForm.types";

export const SongCreationForm: FC<SongCreationFormProps> = ({
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

export default SongCreationForm;