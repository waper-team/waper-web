import AuthLayout from "../components/AuthLayout.jsx";
import EmailField from "../components/EmailField.jsx";
import ForgotPasswordButton from "../components/ForgotPasswordButton.jsx";
import LoginButton from "../components/LoginButton.jsx";
import LoginError from "../components/LoginError.jsx";
import LoginHeader from "../components/LoginHeader.jsx";
import PasswordField from "../components/PasswordField.jsx";
import RegisterRedirect from "../components/RegisterRedirect.jsx";
function LoginPage() {
    return (
        <AuthLayout>
            <form
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
                <RegisterRedirect/>
            </form>
        </AuthLayout>
    );
}
export default LoginPage;