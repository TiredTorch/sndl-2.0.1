import { LoginForm } from "../../components";

const LoginPage = () => {
	return (
        <div>
            <LoginForm onSubmit={console.log}/>
        </div>
	);
};

export default LoginPage;