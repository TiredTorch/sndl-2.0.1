import {
	Form,
	Formik
} from "formik";
import { FC } from "react";
import { Box } from "@mui/material";
import {
	Button,
	Field
} from "../../common";
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
                    <Box>
                        <Field
                            name="field"
                        />
                        <Button>
                            send
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
	);
};

export default EditProfileForm;