import { FiArrowLeft } from "react-icons/fi";

function EditProfileHeader({
                               onBack,
                               onSave,
                           }) {
    return (
        <header className="mb-7 flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
                <button
                    type="button"
                    onClick={onBack}
                    className="
                        mt-1
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[#00135c]
                        transition
                        active:scale-95
                    "
                    aria-label="Volver al perfil"
                >
                    <FiArrowLeft className="text-2xl" />
                </button>

                <div className="min-w-0">
                    <h1
                        className="
                            text-[30px]
                            font-black
                            leading-tight
                            text-[#00135c]
                        "
                    >
                        Editar perfil
                    </h1>

                    <p
                        className="
                            mt-1
                            text-[14px]
                            font-medium
                            leading-snug
                            text-[#627099]
                        "
                    >
                        Actualiza tu información y contá quién sos.
                    </p>
                </div>
            </div>

            <button
                type="button"
                onClick={onSave}
                className="
                    mt-1
                    shrink-0
                    rounded-[8px]
                    bg-[#0037ff]
                    px-5
                    py-3
                    text-[15px]
                    font-bold
                    text-white
                    shadow-[0_10px_20px_rgba(0,55,255,0.25)]
                    transition
                    active:scale-95
                "
            >
                Guardar
            </button>
        </header>
    );
}

export default EditProfileHeader;