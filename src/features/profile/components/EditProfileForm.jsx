import EditProfileHeader from "./EditProfileHeader.jsx";
import InterestsSection from "./InterestsSection.jsx";
import PersonalInfoSection from "./PersonalInfoSection.jsx";
import ProfilePhotoCard from "./ProfilePhotoCard.jsx";
import useEditProfileForm from "../hooks/useEditProfileForm.js";

function EditProfileForm({
    onBack,
    onSave,
    onChooseInterests,
}) {
    const {
        profile,
        interests,
        bioLength,
        removeInterest,
        updateField,
    } = useEditProfileForm();

    const handleSave = () => {
        onSave?.({
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
                onChooseInterests={onChooseInterests}
            />
        </>
    );
}

export default EditProfileForm;
