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
import googleIcon from "../../../assets/icons/google.png";
import { PageRoutes } from "../../../types";
import {
	Button,
	Field
} from "../../common";
import { validationSchema } from "./LoginForm.schema";
import { loginFormStyles } from "./LoginForm.styles";
import { LoginFormProps } from "./LoginForm.types";

export const LoginForm: FC<LoginFormProps> = ({
	onSubmit,
	isLoading,
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
                    style={loginFormStyles.root as CSSProperties}
                >
                    <Box
                        sx={loginFormStyles.title}
                    >
                        {intl.formatMessage({ id: "TXT_LOGIN_FORM_TITLE" })}
                    </Box>
                    <Field
                        placeholder={intl.formatMessage({ id: "TXT_LOGIN_FORM_FIELD_EMAIL" })}
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
                        placeholder={intl.formatMessage({ id: "TXT_LOGIN_FORM_FIELD_PASSOWORD" })}
                        customVariant="auth"
                        name="password"
                        id="password"
                        customError={formik.errors.password && intl.formatMessage({ id: formik.errors.password })}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        type="password"
                    />
                    <Box
                        sx={loginFormStyles.buttonWrapper}
                    >
                        <Button
                            type="submit"
                            customVariant="auth"
                            disabled={isLoading}
                        >
                            {intl.formatMessage({ id: "TXT_LOGIN_FORM_SUBMIT" })}
                        </Button>
                        <Button
                            customVariant="auth"
                            icon={googleIcon}
                        />
                    </Box>
                    <Link 
                        to={PageRoutes.REGISTER}
                        style={loginFormStyles.routerLink as CSSProperties}
                    >
                        <Box
                            sx={loginFormStyles.link}   
                        >
                            {intl.formatMessage({ id: "TXT_REGISTER_LINK" })}
                        </Box>
                    </Link>
                </Form>
            )}
        </Formik>
	);
};

export default LoginForm;