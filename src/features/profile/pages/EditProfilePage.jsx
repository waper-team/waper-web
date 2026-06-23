import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileService from "../../services/ProfileService.js";
import {
    EditProfileForm,
    ProfileLayout,
} from "../components";

function EditProfilePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("");

    const userId = location.state?.userId ?? localStorage.getItem("waperUserId");
    const profile = location.state?.profile
        ? {
            ...location.state.profile,
            fullName: location.state.profile.fullName ?? location.state.profile.name,
        }
        : undefined;
    const interests = location.state?.interests ?? [];

    useEffect(() => {
        if (!userId) {
            navigate("/login", { replace: true });
        }
    }, [navigate, userId]);

    const goToProfile = () => {
        navigate("/profile");
    };

    const saveAndGoToProfile = async (data) => {
        setError("");
        const profileData = {
            ...data.profile,
            name: data.profile.fullName,
            interests: data.interests,
        };

        if (!userId) return;

        let savedProfile;
        try {
            savedProfile = await ProfileService.updateProfile(userId, profileData);
        } catch (requestError) {
            if (requestError.status === 401) {
                navigate("/login", { replace: true });
                return;
            }
            setError(requestError.message);
            return;
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
            {error && (
                <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    {error}
                </p>
            )}
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
