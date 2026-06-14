import ProfileLayout from "../components/ProfileLayout.jsx";
import EditProfileHeader from "../components/EditProfileHeader.jsx";
import ProfilePhotoCard from "../components/ProfilePhotoCard.jsx";
import PersonalInfoSection from "../components/PersonalInfoSection.jsx";
import ProfileField from "../components/ProfileField.jsx";
import BioField from "../components/BioField.jsx"
import InterestsSection from "../components/InterestsSection.jsx";
import InterestChip from "../components/InterestChip.jsx";
import AddInterestButton from "../components/AddInterestButton.jsx";
function EditProfilePage() {
    const profile = {
        fullName: "",
        username: "",
        email: "",
        bio: "",
    };
    const interests = [];
    return (
        <ProfileLayout>
            <EditProfileHeader />
            <ProfilePhotoCard />
            <PersonalInfoSection
                profile={profile}
                updateField={() => () => {}}
                bioLength={0}
            />
            <InterestsSection
                interests={interests}
            />
        </ProfileLayout>
    );
}

export default EditProfilePage;