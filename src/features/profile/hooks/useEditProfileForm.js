import { useState } from "react";

const initialProfile = {
    fullName: "",
    username: "",
    email: "",
    bio: "",
};

function useEditProfileForm({
    profile = initialProfile,
    interests = [],
} = {}) {
    const [profileValues, setProfileValues] = useState(profile);
    const [interestValues, setInterestValues] = useState(interests);

    const updateField = (field) => (event) => {
        setProfileValues((currentProfile) => ({
            ...currentProfile,
            [field]: event.target.value,
        }));
    };

    const removeInterest = (interestId) => {
        setInterestValues((currentInterests) =>
            currentInterests.filter((interest) => interest.id !== interestId)
        );
    };

    return {
        profile: profileValues,
        interests: interestValues,
        bioLength: profileValues.bio.length,
        removeInterest,
        updateField,
    };
}

export default useEditProfileForm;
