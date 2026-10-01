const InterestHeader = ({ action }) => {
    return (
        <div className="mb-10 flex items-start justify-between gap-4">
            <div className="relative max-w-sm">
                {/* Glow decorativo */}
                <div
                    className="
                        absolute
                        -left-6
                        top-0
                        h-20
                        w-20
                        rounded-full
                        bg-[#1740FF]/10
                        blur-3xl
                        pointer-events-none
                    "
                />

                <h1
                    className="
                        relative
                        text-[2rem]
                        font-bold
                        leading-[1.1]
                        tracking-tight
                        text-gray-900
                    "
                >
                    Contanos,
                    <br />

                    <span className="relative text-[#1740FF]">
                        ¿qué te interesa?
                    </span>
                </h1>

                <p
                    className="
                        mt-4
                        max-w-xs
                        text-sm
                        leading-6
                        text-gray-500
                    "
                >
                    Elegí tus intereses favoritos y encontrá personas
                    que compartan las mismas pasiones que vos.
                </p>
            </div>

            {action && (
                <div className="shrink-0 pt-1">
                    {action}
                </div>
            )}
        </div>
    );
};

export default InterestHeader;