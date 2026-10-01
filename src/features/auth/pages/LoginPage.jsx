import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout.jsx";
import EmailField from "../components/EmailField.jsx";
import ForgotPasswordButton from "../components/ForgotPasswordButton.jsx";
import LoginButton from "../components/LoginButton.jsx";
import LoginError from "../components/LoginError.jsx";
import LoginHeader from "../components/LoginHeader.jsx";
import PasswordField from "../components/PasswordField.jsx";
import RegisterRedirect from "../components/RegisterRedirect.jsx";
import ProfileService from "../../services/ProfileService.js";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await ProfileService.login({
                email,
                password,
            });
            const userId = response?.user?._id ?? response?.user?.id;

            if (userId) {
                localStorage.setItem("waperUserId", userId);
            }

            navigate("/profile", {
                state: {
                    userId,
                    profile: response?.user,
                },
            });
        } catch (requestError) {
            setError(requestError.message);
        } finally {
            setLoading(false);
        }
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
                <LoginError error={error} />
                <EmailField email={email} setEmail={setEmail} />
                <PasswordField
                    password={password}
                    setPassword={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
                <ForgotPasswordButton />
                <LoginButton loading={loading} />
                <RegisterRedirect navigate={navigate}/>
            </form>
        </AuthLayout>
    );
}
export default LoginPage;
