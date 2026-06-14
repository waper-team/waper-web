import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout.jsx";
import EmailField from "../components/EmailField.jsx";
import ForgotPasswordButton from "../components/ForgotPasswordButton.jsx";
import LoginButton from "../components/LoginButton.jsx";
import LoginError from "../components/LoginError.jsx";
import LoginHeader from "../components/LoginHeader.jsx";
import PasswordField from "../components/PasswordField.jsx";
import RegisterRedirect from "../components/RegisterRedirect.jsx";
function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/profile");
    };

    return (
        <AuthLayout>
            <form
                onSubmit={handleSubmit}
                className="
          relative
          z-10
          w-full
          max-w-md
        "
            >
                <LoginHeader />
                <EmailField/>
                <PasswordField/>
                <ForgotPasswordButton />
                <LoginButton/>
                <RegisterRedirect navigate={navigate}/>
            </form>
        </AuthLayout>
    );
}
export default LoginPage;
