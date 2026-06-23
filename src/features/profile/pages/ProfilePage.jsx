import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header.jsx";
import Navbar from "../../../components/layout/Navbar.jsx";
import ProfileService from "../../services/ProfileService.js";
import {
    Interests,
    Posts,
    ProfileBackground,
    ProfileContent,
    ProfileDecorationDots,
    ProfileImage,
    ProfileLayout,
    Stats,
    UserInfo,
} from "../components";

function ProfilePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [profile, setProfile] = useState(location.state?.profile ?? null);
    const [interests, setInterests] = useState(location.state?.interests);
    const userId = location.state?.userId ?? localStorage.getItem("waperUserId");

    useEffect(() => {
        if (!userId) {
            navigate("/login", { replace: true });
            return;
        }

        ProfileService.getProfile(userId)
            .then((profileData) => {
                setProfile(profileData);
                setInterests(profileData?.interests);
            })
            .catch((requestError) => {
                if (requestError.status === 401) {
                    navigate("/login", { replace: true });
                    return;
                }
                setProfile(location.state?.profile ?? null);
            });
    }, [location.state?.profile, navigate, userId]);

    const handleEditProfile = () => {
        navigate("/editProfile", {
            state: {
                userId,
                profile,
                interests,
            },
        });
    };

    const handleLogout = async () => {
        try {
            await ProfileService.logout();
        } finally {
            localStorage.removeItem("waperUserId");
            navigate("/login", { replace: true });
        }
    };

    return (
        <ProfileLayout>
            <ProfileBackground />
            <ProfileDecorationDots />
            <div className="relative z-10 pt-10">
                <Header onEditProfile={handleEditProfile} />
                <div className="flex justify-end px-4">
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1740FF] shadow"
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>

            <ProfileContent>
                <ProfileImage />
                <UserInfo profile={profile} />
                <Stats profile={profile} />
                <Interests interests={interests} />
                <Posts />
            </ProfileContent>
            <Navbar/>
        </ProfileLayout>
    );
}

export default ProfilePage;
