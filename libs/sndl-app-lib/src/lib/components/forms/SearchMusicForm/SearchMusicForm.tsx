import {
	Form,
	Formik
} from "formik";
import {
	CSSProperties,
	FC
} from "react";
import { useIntl } from "react-intl";
import { Box } from "@mui/material";
import {
	Button,
	Field
} from "../../common";
import { validationSchema } from "./SearchMusicForm.schema";
import { searchMusicFormStyles } from "./SearchMusicForm.styles";
import { LoginFormProps } from "./SearchMusicForm.types";

export const SearchMusicForm: FC<LoginFormProps> = ({
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
                    style={searchMusicFormStyles.root as CSSProperties}
                >
                    <Box
                        sx={searchMusicFormStyles.topWrapper}
                    >
                        <Field
                            placeholder={intl.formatMessage({ id: "TXT_SEARCH_MUSIC_FORM" })}
                            id="tag"
                            customVariant="sendChatMessage"
                            value={formik.values.tag}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="tag"
                        />
                        <Button
                            customVariant="sendMessageForm"
                            type="submit"
                        >
                            {intl.formatMessage({ id: "TXT_SEARCH_MUSIC_SUBMIT" })}
                        </Button>
                    </Box>
                    <Box
                        sx={searchMusicFormStyles.bottomWrapper}
                    >

                    </Box>
                </Form>
            )}
        </Formik>
	);
};

export default SearchMusicForm;