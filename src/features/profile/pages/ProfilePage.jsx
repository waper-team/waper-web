import ProfileLayout from "../components/ProfileLayout.jsx";
import ProfileBackground from "../components/ProfileBackground.jsx";
import ProfileDecorationDots from "../components/ProfileDecorationDots.jsx";
import Header from "../../../components/layout/Header.jsx";
import ProfileContent from "../components/ProfileContent.jsx";
import ProfileImage from "../components/ProfileImage.jsx";
import UserInfo from "../components/UserInfo.jsx";
import Stats from "../components/Stats.jsx";
import Interests from "../components/Interests.jsx";
import Posts from "../components/Posts.jsx";
import Navbar from "../../../components/layout/Navbar.jsx";
function ProfilePage() {
    return (
        <ProfileLayout>
            <ProfileBackground />
            <ProfileDecorationDots />
            <div className="relative z-10 pt-10">
                <Header />
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