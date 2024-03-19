import {
	Form,
	Formik
} from "formik";
import {
	ChangeEvent,
	CSSProperties,
	FC
} from "react";
import { useIntl } from "react-intl";
import { Box } from "@mui/material";
import imgUploadIcon from "../../../assets/icons/add-workshop.png";
import {
	Button,
	Field
} from "../../common";
import { validationSchema } from "./SongCreationForm.schema";
import { songCreationFormStyles } from "./SongCreationForm.styles";
import { SongCreationFormProps } from "./SongCreationForm.types";

export const SongCreationForm: FC<SongCreationFormProps> = ({
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
                    style={songCreationFormStyles.root as CSSProperties}
                >
                    <Box
                        sx={songCreationFormStyles.fieldWrapper}
                    >
                        <Box
                            sx={songCreationFormStyles.leftFields}
                        >
                            <Field
                                type="file"
                                customVariant="uploadSong"
                                name="albumImage"
                                id="albumImage"
                                customError={formik.errors.albumImage && intl.formatMessage({ id: formik.errors.albumImage })}
                                value={formik.values.albumImage?.name}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => formik.setFieldValue(
                                    "albumImage",
                                    event?.target?.files?.[0]
                                )}
                                onBlur={formik.handleBlur}
                                error={formik.touched.albumImage && Boolean(formik.errors.albumImage)}
                                uploadIcon={imgUploadIcon}
                                inputProps={{
                                    accept: "image/*",
                                    multiple: false
                                }}
                            />
                        </Box>
                        <Box
                            sx={songCreationFormStyles.rightFields}
                        >
                            <Field
                                placeholder={intl.formatMessage({ id: "TXT_UPLOAD_SONG_FORM_AUTHOR" })}
                                customVariant="uploadSong"
                                name="author"
                                id="author"
                                customError={formik.errors.author && intl.formatMessage({ id: formik.errors.author })}
                                value={formik.values.author}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.author && Boolean(formik.errors.author)}
                            />
                            <Field
                                placeholder={intl.formatMessage({ id: "TXT_UPLOAD_SONG_FORM_SONG" })}
                                customVariant="uploadSong"
                                name="songName"
                                id="songName"
                                customError={formik.errors.songName && intl.formatMessage({ id: formik.errors.songName })}
                                value={formik.values.songName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.songName && Boolean(formik.errors.songName)}
                            />
                            <Field
                                placeholder={intl.formatMessage({ id: "TXT_UPLOAD_SONG_FORM_ALBUM" })}
                                customVariant="uploadSong"
                                name="albumName"
                                id="albumName"
                                customError={formik.errors.albumName && intl.formatMessage({ id: formik.errors.albumName })}
                                value={formik.values.albumName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.albumName && Boolean(formik.errors.albumName)}
                            />
                            <Box>
                                <Field
                                    type="file"
                                    customVariant="uploadSong"
                                    name="songFile"
                                    id="songFile"
                                    customError={formik.errors.songFile && intl.formatMessage({ id: formik.errors.songFile })}
                                    value={formik.values.songFile?.name}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => formik.setFieldValue(
                                        "songFile",
                                        event?.target?.files?.[0]
                                    )}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.songFile && Boolean(formik.errors.songFile)}
                                    uploadIcon={imgUploadIcon}
                                    inputProps={{
                                        accept: "audio/mp3",
                                        multiple: false
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Button
                        type="submit"
                        customVariant="uploadSong"
                    >
                        {intl.formatMessage({ id: "TXT_UPLOAD_SONG_FORM_SUBMIT" })}
                    </Button>
                </Form>
            )}
        </Formik>
	);
};

export default SongCreationForm;