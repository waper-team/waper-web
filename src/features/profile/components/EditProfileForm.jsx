import EditProfileHeader from "./EditProfileHeader.jsx";
import InterestsSection from "./InterestsSection.jsx";
import PersonalInfoSection from "./PersonalInfoSection.jsx";
import ProfilePhotoCard from "./ProfilePhotoCard.jsx";
import useEditProfileForm from "../hooks/useEditProfileForm.js";

function EditProfileForm({
    onBack,
    onSave,
    onChooseInterests,
    initialProfile,
    initialInterests = [],
}) {
    const {
        profile,
        interests,
        bioLength,
        removeInterest,
        updateField,
    } = useEditProfileForm({
        profile: initialProfile,
        interests: initialInterests,
    });

    const handleSave = () => {
        onSave?.({
            profile,
            interests,
        });
    };

    const handleChooseInterests = () => {
        onChooseInterests?.({
            profile,
            interests,
        });
    };

    return (
        <>
            <EditProfileHeader
                onBack={onBack}
                onSave={handleSave}
            />

            <ProfilePhotoCard />

            <PersonalInfoSection
                profile={profile}
                updateField={updateField}
                bioLength={bioLength}
            />

            <InterestsSection
                interests={interests}
                removeInterest={removeInterest}
                onChooseInterests={handleChooseInterests}
            />
        </>
    );
}

export default EditProfileForm;
