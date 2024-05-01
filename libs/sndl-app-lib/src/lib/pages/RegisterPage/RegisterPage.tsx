import { useCallback } from "react";
import { RegisterForm } from "../../components";
import { useShowSnackbarError } from "../../hooks";
import { PublicPagesLayout } from "../../layouts";
import { useRegisterMutation } from "../../redux";
import {
	CommonErrorType,
	RegisterFormData
} from "../../types";

const RegisterPage = () => {
	const [
		register,
		{
			isError,
			error,
		}
	] = useRegisterMutation();

	useShowSnackbarError(
		isError,
		error as CommonErrorType
	);

	const handleSubmit = useCallback(
		(data: RegisterFormData) => {
			register({
				avatar: "",
				email: data.email,
				name: data.username,
				password: data.password,
				status: ""
			});
		},
		[register],
	);

	return (
        <PublicPagesLayout>
            <RegisterForm 
                onSubmit={handleSubmit} 
                initState={{
                    email: "",
                    password: "",
                    username: ""
                }}
            />
        </PublicPagesLayout>
	);
};

export default RegisterPage;