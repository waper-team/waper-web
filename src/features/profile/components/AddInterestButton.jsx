import { FiPlus } from "react-icons/fi";

function AddInterestButton({
    onClick,
    label = "Elegir intereses",
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
        inline-flex
        min-h-12
        items-center
        gap-2
        rounded-full
        border
        border-dashed
        border-[#cbd5e1]
        bg-white
        px-5
        text-[14px]
        font-bold
        text-[#0037ff]
        transition
        active:scale-95
      "
        >
            <FiPlus />
            {label}
        </button>
    );
}

export default AddInterestButton;
