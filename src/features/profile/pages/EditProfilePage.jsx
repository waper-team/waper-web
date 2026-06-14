import { useNavigate } from "react-router-dom";
import {
    EditProfileForm,
    ProfileLayout,
} from "../components";

function EditProfilePage() {
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate("/profile");
    };

    return (
        <ProfileLayout>
            <EditProfileForm
                onBack={goToProfile}
                onSave={goToProfile}
            />
        </ProfileLayout>
    );
}

export default EditProfilePage;
