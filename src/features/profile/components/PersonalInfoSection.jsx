import ProfileField from "./ProfileField.jsx";
import BioField from "./BioField.jsx";

function PersonalInfoSection({
                                 profile,
                                 updateField,
                                 bioLength,
                             }) {
    return (
        <section
            className="
                mb-5
                rounded-[8px]
                border
                border-[#edf1fb]
                bg-white
                p-5
                shadow-[0_12px_30px_rgba(32,52,112,0.05)]
            "
        >
            <h2 className="mb-5 text-[19px] font-black">
                Información personal
            </h2>

            <ProfileField
                label="Nombre completo"
                value={profile.fullName}
                onChange={updateField("fullName")}
            />

            <ProfileField
                label="Nombre de usuario"
                value={profile.username}
                onChange={updateField("username")}
            />

            <ProfileField
                label="Correo electrónico"
                type="email"
                value={profile.email}
                onChange={updateField("email")}
            />

            <BioField
                value={profile.bio}
                onChange={updateField("bio")}
                bioLength={bioLength}
            />
        </section>
    );
}

export default PersonalInfoSection;