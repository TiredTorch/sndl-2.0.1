import { RegisterForm } from "../../components";
import { PublicPagesLayout } from "../../layouts";

const RegisterPage = () => {
	return (
        <PublicPagesLayout>
            <RegisterForm 
                onSubmit={console.log} 
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