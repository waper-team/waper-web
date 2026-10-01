function SearchInput({
                         value,
                         onChange,
                         placeholder = "Buscar...",
                     }) {
    return (
        <div className="rounded-2xl border border-gray-300 bg-white px-4 py-3">
            <input
                className="w-full text-base text-gray-900 outline-none placeholder:text-gray-400"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default SearchInput;