function InterestChip({
                          interest,
                          removeInterest,
                      }) {
    const {
        id,
        label,
        icon,
    } = interest;

    return (
        <span
            className="
        inline-flex
        min-h-12
        items-center
        gap-2
        rounded-full
        bg-[#f3f6ff]
        px-4
        text-[14px]
        font-bold
        text-[#0037ff]
      "
        >
      {icon()}
            {label}

            <button
                type="button"
                onClick={() => removeInterest(id)}
                className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
        "
            >
        <CloseIcon />
      </button>
    </span>
    );
}

export default InterestChip;