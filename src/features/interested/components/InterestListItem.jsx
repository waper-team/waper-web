import Checkbox from "../../../components/UI/Checkbox";

const InterestListItem = ({
                              title,
                              description,
                              icon,
                              checked,
                              onChange,
                          }) => {
    return (
        <button
            type="button"
            onClick={onChange}
            className={`
                flex
                min-h-16
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                gap-3
                px-3
                py-2
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
            <div className="flex min-w-0 items-center gap-3">
                {icon && (
                    <img
                        src={icon}
                        alt=""
                        className="
                            h-11
                            w-11
                            shrink-0
                            rounded-xl
                            object-cover
                        "
                    />
                )}

                <span className="min-w-0">
                    <span
                        className={`
                            block
                            text-sm
                            font-semibold
                            transition-colors
                            ${
                            checked
                                ? "text-[#1740FF]"
                                : "text-gray-800"
                        }
                        `}
                    >
                        {title}
                    </span>

                    {description && (
                        <span className="mt-0.5 block truncate text-xs text-gray-500">
                            {description}
                        </span>
                    )}
                </span>
            </div>

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
