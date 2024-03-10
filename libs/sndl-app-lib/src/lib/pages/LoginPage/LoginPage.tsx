import { LoginForm } from "../../components";
import { PublicPagesLayout } from "../../layouts";

const LoginPage = () => {
	return (
        <PublicPagesLayout>
            <LoginForm 
                onSubmit={console.log} 
                initState={{
                    field: ""
                }}
            />
        </PublicPagesLayout>
	);
};

export default LoginPage;