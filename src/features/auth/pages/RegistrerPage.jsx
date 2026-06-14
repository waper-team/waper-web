import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout.jsx";
import RegisterHeader from "../components/RegisterHeader.jsx";
import RegisterButton from "../components/RegisterButton.jsx";
import UsernameField from "../components/UsernameField.jsx";
import EmailField from "../components/EmailField.jsx";
import PasswordField from "../components/PasswordField.jsx";
import ConfirmPasswordField from "../components/ConfirmPasswordField.jsx";
import LoginError from "../components/LoginError.jsx";
import LoginRedirect from "../components/LoginRedirect.jsx";

function RegistrerPage(){
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/profile");
    };

    return(
        <>
            <AuthLayout>
                <form
                    onSubmit={handleSubmit}
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
                    <LoginRedirect navigate={navigate}/>
                </form>
            </AuthLayout>
        </>
    )
}
export default RegistrerPage;
