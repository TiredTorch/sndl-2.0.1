
import { useCallback } from "react";
import { LoginForm } from "../../components";
import {
	useShowSnackbarError,
	useShowSnackbarSuccess
} from "../../hooks";
import { PublicPagesLayout } from "../../layouts";
import { useLoginMutation } from "../../redux";
import {
	CommonErrorType,
	LoginFormData
} from "../../types";

const LoginPage = () => {
	const [
		logIn,
		{
			isError,
			error,
			isLoading,
			isSuccess
		}
	] = useLoginMutation();

	useShowSnackbarError(
		isError,
		error as CommonErrorType
	);

	useShowSnackbarSuccess(
		isSuccess,
		"TXT_REQUEST_SUCCESS_LOGIN"
	);

	const handleSubmit = useCallback(
		(data: LoginFormData) => {
			logIn(data);
		},
		[logIn],
	);

	return (
        <PublicPagesLayout>
            <LoginForm 
                isLoading={isLoading}
                onSubmit={handleSubmit} 
                initState={{
                    email: "",
                    password: ""
                }}
            />
        </PublicPagesLayout>
	);
};

export default LoginPage;