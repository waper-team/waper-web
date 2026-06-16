function Checkbox({
                      checked = false,
                      onChange = () => {},
                  }) {
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className={`
        flex h-5 w-5 items-center justify-center
        rounded-md border transition-colors
        ${
                checked
                    ? "border-[#0B1F5C] bg-[#0B1F5C]"
                    : "border-gray-300 bg-white"
            }
      `}
        >
            {checked && (
                <span className="text-xs font-bold text-white">
          ✓
        </span>
            )}
        </button>
    );
}

export default Checkbox;