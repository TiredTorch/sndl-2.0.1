
import { useCallback } from "react";
import { LoginForm } from "../../components";
import { useShowSnackbarError } from "../../hooks";
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
			isLoading
		}
	] = useLoginMutation();

	console.log(
		"error",
		error
	);

	useShowSnackbarError(
		isError,
		error as CommonErrorType
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