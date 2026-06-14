import { useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header.jsx";
import Navbar from "../../../components/layout/Navbar.jsx";
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

    const handleEditProfile = () => {
        navigate("/editProfile");
    };

    return (
        <ProfileLayout>
            <ProfileBackground />
            <ProfileDecorationDots />
            <div className="relative z-10 pt-10">
                <Header onEditProfile={handleEditProfile} />
            </div>

            <ProfileContent>
                <ProfileImage />
                <UserInfo />
                <Stats />
                <Interests />
                <Posts />
            </ProfileContent>
            <Navbar/>
        </ProfileLayout>
    );
}

export default ProfilePage;
