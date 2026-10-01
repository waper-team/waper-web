function Button({
                    children,
                    className = "",
                    ...props
                }) {
    return (
        <button
            className={`
                inline-flex
                items-center
                justify-center
                rounded-2xl
                bg-[#1740FF]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_24px_rgba(23,64,255,0.22)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#0F35E6]
                hover:shadow-[0_12px_30px_rgba(23,64,255,0.30)]
                active:translate-y-0
                active:scale-[0.98]
                disabled:pointer-events-none
                disabled:opacity-50
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;