const InterestCategoryCard = ({
                                  title,
                                  icon: Icon,
                                  selected,
                                  onClick,
                              }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                group
                flex
                h-[76px]
                flex-col
                items-center
                justify-center
                gap-1.5
                rounded-2xl
                border
                px-2
                transition-all
                duration-200
                active:scale-95
                ${
                selected
                    ? `
                            border-[#1740FF]/20
                            bg-[#1740FF]/5
                            shadow-sm
                          `
                    : `
                            border-gray-200
                            bg-white
                            hover:border-gray-300
                            hover:bg-gray-50
                          `
            }
            `}
        >
            <div
                className={`
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-xl
                    transition-colors
                    ${
                    selected
                        ? "bg-[#1740FF]/10"
                        : "bg-gray-100 group-hover:bg-gray-200"
                }
                `}
            >
                <Icon
                    size={18}
                    strokeWidth={2}
                    className={
                        selected
                            ? "text-[#1740FF]"
                            : "text-gray-600"
                    }
                />
            </div>

            <span
                className={`
                    text-[11px]
                    font-medium
                    leading-none
                    transition-colors
                    ${
                    selected
                        ? "text-[#1740FF]"
                        : "text-gray-700"
                }
                `}
            >
                {title}
            </span>
        </button>
    );
};

export default InterestCategoryCard;