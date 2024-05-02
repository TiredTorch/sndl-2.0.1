import {
	Form,
	Formik
} from "formik";
import {
	ChangeEvent,
	FC
} from "react";
import { useIntl } from "react-intl";
import { Box } from "@mui/material";
import imgUploadIcon from "../../../assets/icons/add-workshop.png";
import {
	Button,
	Field
} from "../../common";
import { validationSchema } from "./EditProfileForm.schema";
import { editProfileFormStyles } from "./EditProfileForm.styles";
import { EditProfileFormProps } from "./EditProfileForm.types";

export const EditProfileForm: FC<EditProfileFormProps> = ({
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
                <Form>
                    <Box
                        sx={editProfileFormStyles.root}
                    >
                        <Field
                            type="file"
                            customVariant="uploadSong"
                            name="avatarFile"
                            id="avatarFile"
                            customError={formik.errors.avatarFile && intl.formatMessage({ id: formik.errors.avatarFile })}
                            value={formik.values.avatarFile?.name}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => formik.setFieldValue(
                                "avatarFile",
                                event?.target?.files?.[0]
                            )}
                            onBlur={formik.handleBlur}
                            error={formik.touched.avatarFile && Boolean(formik.errors.avatarFile)}
                            uploadIcon={imgUploadIcon}
                            inputProps={{
                                accept: "image/*",
                                multiple: false
                            }}
                        />
                        <Field
                            placeholder={intl.formatMessage({ id: "TXT_UPLOAD_SONG_FORM_AUTHOR" })}
                            customVariant="uploadSong"
                            name="userName"
                            id="userName"
                            customError={formik.errors.userName && intl.formatMessage({ id: formik.errors.userName })}
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.userName && Boolean(formik.errors.userName)}
                        />
                        <Field
                            placeholder={intl.formatMessage({ id: "TXT_UPLOAD_SONG_FORM_AUTHOR" })}
                            customVariant="uploadSong"
                            name="status"
                            id="status"
                            customError={formik.errors.status && intl.formatMessage({ id: formik.errors.status })}
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.status && Boolean(formik.errors.status)}
                        />
                        <Button
                            type="submit"
                            customVariant="uploadSong"
                        >
                            send
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
	);
};

export default EditProfileForm;