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
                        placeholder={intl.formatMessage({ id: "TXT_LOGIN_FORM_FIELD_LOGIN" })}
                        customVariant="auth"
                        name="login"
                        id="login"
                        customError={formik.errors.login}
                        value={formik.values.login}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.login && Boolean(formik.errors.login)}
                    />
                    <Field
                        placeholder={intl.formatMessage({ id: "TXT_LOGIN_FORM_FIELD_PASSOWORD" })}
                        customVariant="auth"
                        name="password"
                        id="password"
                        customError={formik.errors.password}
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