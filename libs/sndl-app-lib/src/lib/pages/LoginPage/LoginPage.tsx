
import { LoginForm } from "../../components";
import { PublicPagesLayout } from "../../layouts";

const LoginPage = () => {

	return (
        <PublicPagesLayout>
            <LoginForm 
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