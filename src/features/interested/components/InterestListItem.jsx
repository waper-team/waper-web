import Checkbox from "../../../components/UI/Checkbox";

const InterestListItem = ({
                              title,
                              checked,
                              onChange,
                          }) => {
    return (
        <button
            type="button"
            onClick={onChange}
            className={`
                flex
                h-11
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                px-4
                text-left
                transition-all
                duration-200
                active:scale-[0.98]
                ${
                checked
                    ? `
                            border-[#1740FF]/20
                            bg-[#1740FF]/5
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
            <span
                className={`
                    text-sm
                    font-medium
                    transition-colors
                    ${
                    checked
                        ? "text-[#1740FF]"
                        : "text-gray-700"
                }
                `}
            >
                {title}
            </span>

            <div
                className="shrink-0"
                onClick={(e) => e.stopPropagation()}
            >
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                />
            </div>
        </button>
    );
};

export default InterestListItem;