import { useLocation, useNavigate } from "react-router-dom";
import ProfileService from "../../services/ProfileService.js";
import {
    EditProfileForm,
    ProfileLayout,
} from "../components";

function EditProfilePage() {
    const navigate = useNavigate();
    const location = useLocation();

    const userId = location.state?.userId ?? localStorage.getItem("waperUserId");
    const profile = location.state?.profile
        ? {
            ...location.state.profile,
            fullName: location.state.profile.fullName ?? location.state.profile.name,
        }
        : undefined;
    const interests = location.state?.interests ?? [];

    const goToProfile = () => {
        navigate("/profile");
    };

    const saveAndGoToProfile = async (data) => {
        const profileData = {
            ...data.profile,
            name: data.profile.fullName,
            interests: data.interests,
        };

        let savedProfile = profileData;

        if (userId) {
            try {
                savedProfile = await ProfileService.updateProfile(userId, profileData);
            } catch {
                savedProfile = profileData;
            }
        }

        navigate("/profile", {
            state: {
                userId,
                profile: savedProfile,
                interests: savedProfile?.interests ?? data.interests,
            },
        });
    };

    const goToInterests = (data) => {
        navigate("/interested", {
            state: {
                ...data,
                userId,
                returnTo: "/editProfile",
            },
        });
    };

    return (
        <ProfileLayout>
            <EditProfileForm
                onBack={goToProfile}
                onSave={saveAndGoToProfile}
                onChooseInterests={goToInterests}
                initialProfile={profile}
                initialInterests={interests}
            />
        </ProfileLayout>
    );
}

export default EditProfilePage;
