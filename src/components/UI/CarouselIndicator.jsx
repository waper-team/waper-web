function CarouselIndicator({
                               current = 0,
                               total = 3,
                               onChange = () => {},
                           }) {
    return (
        <div className="flex items-center justify-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    type="button"
                    onClick={() => onChange(i)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                        current === i
                            ? "w-6 bg-primary"
                            : "w-2 bg-gray-300"
                    }`}
                />
            ))}
        </div>
    );
}

export default CarouselIndicator;