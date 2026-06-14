function AddInterestButton() {
    return (
        <button
            type="button"
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
            <PlusIcon />
            Agregar interes
        </button>
    );
}

export default AddInterestButton;