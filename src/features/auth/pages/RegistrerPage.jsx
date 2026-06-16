import { useState } from "react";
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
import ProfileService from "../../services/ProfileService.js";

function RegistrerPage(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        setLoading(true);

        try {
            await ProfileService.register({
                name: username,
                username,
                email,
                password,
            });

            navigate("/login");
        } catch (requestError) {
            setError(requestError.message);
        } finally {
            setLoading(false);
        }
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
                    <LoginError error={error}/>
                    <UsernameField
                        username={username}
                        setUsername={setUsername}
                    />
                    <EmailField email={email} setEmail={setEmail}/>
                    <PasswordField
                        password={password}
                        setPassword={setPassword}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                    <ConfirmPasswordField
                        confirmPassword={confirmPassword}
                        setConfirmPassword={setConfirmPassword}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                    <RegisterButton loading={loading}/>
                    <LoginRedirect navigate={navigate}/>
                </form>
            </AuthLayout>
        </>
    )
}
export default RegistrerPage;
