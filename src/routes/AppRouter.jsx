import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegistrerPage";
import ProfilePage from "../features/profile/pages/ProfilePage.jsx";
import EditProfilePage from "../features/profile/pages/EditProfilePage.jsx";
import InterestedPage from "../features/interested/pages/InterestedPage.jsx";
function AppRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/login" />}
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                path="/register"
                element={<RegisterPage />}
            />
            <Route
                path="/profile"
                element={<ProfilePage/>}
            />
            <Route
                path="/editProfile"
                element={<EditProfilePage/>}
            />
            <Route
                path="/interested"
                element={<InterestedPage/>}
            />
        </Routes>
    );
}

export default AppRouter;