
import { useCallback } from "react";
import { LoginForm } from "../../components";
import { useShowSnackbarError } from "../../hooks";
import { PublicPagesLayout } from "../../layouts";
import { useLoginMutation } from "../../redux";

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
		"aaa"
	);

    const handleSubmit = useCallback(
      (data) => {
        first
      },
      [second],
    )
    

	return (
        <PublicPagesLayout>
            <LoginForm 
                isLoading={isLoading}
                onSubmit={console.log} 
                initState={{
                    login: "",
                    password: ""
                }}
            />
        </PublicPagesLayout>
	);
};

export default LoginPage;