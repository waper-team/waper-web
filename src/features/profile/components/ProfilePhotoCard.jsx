import profilePic from "../../../assets/images/profile.jpg";
import { FiCamera } from "react-icons/fi";

function ProfilePhotoCard() {
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
            <div
                className="
                    grid
                    grid-cols-[132px_1fr]
                    items-center
                    gap-5
                    max-[390px]:grid-cols-1
                "
            >
                <div className="relative mx-auto h-[132px] w-[132px]">
                    <img
                        src={profilePic}
                        alt="Foto de perfil"
                        className="
                            h-full
                            w-full
                            rounded-full
                            object-cover
                        "
                    />

                    <button
                        type="button"
                        className="
                            absolute
                            bottom-0
                            right-0
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-[#0037ff]
                            shadow-[0_8px_22px_rgba(25,43,92,0.18)]
                        "
                    >
                        <FiCamera className="text-xl" />
                    </button>
                </div>

                <div>
                    <h2 className="text-[18px] font-black">
                        Foto de perfil
                    </h2>

                    <p
                        className="
                            mt-2
                            text-[14px]
                            font-medium
                            leading-relaxed
                            text-[#627099]
                        "
                    >
                        Esta será tu imagen visible para otros usuarios.
                    </p>

                    <button
                        type="button"
                        className="
                            mt-4
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#0037ff]
                            px-5
                            py-3
                            text-[14px]
                            font-bold
                            text-[#0037ff]
                            transition
                            active:scale-95
                        "
                    >
                        <FiCamera size={18} />
                        Cambiar foto
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProfilePhotoCard;