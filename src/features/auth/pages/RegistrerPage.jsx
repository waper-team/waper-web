import AuthLayout from "../components/AuthLayout.jsx";
import RegisterRedirect from "../components/RegisterRedirect.jsx";
import RegisterHeader from "../components/RegisterHeader.jsx";
import RegisterButton from "../components/RegisterButton.jsx";
import UsernameField from "../components/UsernameField.jsx";
import EmailField from "../components/EmailField.jsx";
import PasswordField from "../components/PasswordField.jsx";
import ConfirmPasswordField from "../components/ConfirmPasswordField.jsx";
import LoginError from "../components/LoginError.jsx";
import LoginRedirect from "../components/LoginRedirect.jsx";

function RegistrerPage(){
    return(
        <>
            <AuthLayout>
                <form
                    className="
                    relative
                    z-10
                    w-full
                    max-w-md">
                    <RegisterHeader/>
                    <LoginError/>
                    <UsernameField/>
                    <EmailField/>
                    <PasswordField/>
                    <ConfirmPasswordField/>
                    <RegisterButton/>
                    <LoginRedirect/>
                </form>
            </AuthLayout>
        </>
    )
}
export default RegistrerPage;