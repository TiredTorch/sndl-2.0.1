import { RegisterForm } from "../../components";
import { PublicPagesLayout } from "../../layouts";

const RegisterPage = () => {
	return (
        <PublicPagesLayout>
            <RegisterForm 
            onSubmit={console.log} 
            initState={{
                field: ""
            }}/>
        </PublicPagesLayout>
	);
};

export default RegisterPage;