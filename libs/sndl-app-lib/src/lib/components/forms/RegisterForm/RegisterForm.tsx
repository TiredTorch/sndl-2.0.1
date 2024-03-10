import {
	Form,
	Formik
} from "formik";
import {
	CSSProperties,
	FC
} from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { PageRoutes } from "../../../types";
import {
	Button,
	Field
} from "../../common";
import { validationSchema } from "./RegisterForm.schema";
import { registerFormStyles } from "./RegisterForm.styles";
import { RegisterFormProps } from "./RegisterForm.types";

export const RegisterForm: FC<RegisterFormProps> = ({
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
                    style={registerFormStyles.root as CSSProperties}
                >
                    <Box
                        sx={registerFormStyles.title}
                    >
                        {intl.formatMessage({ id: "TXT_REGISTER_FORM_TITLE" })}
                    </Box>
                    <Field
                        placeholder={intl.formatMessage({ id: "TXT_REGISTER_FORM_FIELD_USERNAME" })}
                        customVariant="auth"
                        name="username"
                        id="username"
                        customError={formik.errors.username && intl.formatMessage({ id: formik.errors.username })}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                    />
                    <Field
                        placeholder={intl.formatMessage({ id: "TXT_REGISTER_FORM_FIELD_EMAIL" })}
                        customVariant="auth"
                        name="email"
                        id="email"
                        customError={formik.errors.email && intl.formatMessage({ id: formik.errors.email })}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                    <Field
                        placeholder={intl.formatMessage({ id: "TXT_REGISTER_FORM_FIELD_PASSWORD" })}
                        customVariant="auth"
                        name="password"
                        id="password"
                        customError={formik.errors.password && intl.formatMessage(
                            { id: formik.errors.password },
                            {
                                min: 6
                            }
                        )}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        type="password"
                    />
                    <Box
                        sx={registerFormStyles.buttonWrapper}
                    >
                        <Button
                            type="submit"
                            customVariant="auth"
                        >
                            {intl.formatMessage({ id: "TXT_REGISTER_FORM_SUBMIT" })}
                        </Button>
                    </Box>
                    <Link
                        to={PageRoutes.LOGIN}
                        style={registerFormStyles.routerLink as CSSProperties}
                    >
                        <Box
                            sx={registerFormStyles.link}   
                        >
                            {intl.formatMessage({ id: "TXT_LOGIN_LINK" })}
                        </Box>
                    </Link>
                </Form>
            )}
        </Formik>
	);
};

export default RegisterForm;