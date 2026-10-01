function SelectionTitle({ children, className = "" }) {
    return (
        <h2
            className={`
        text-xl
        font-semibold
        tracking-tight
        text-gray-800
        ${className}
      `}
        >
            {children}
        </h2>
    );
}

export default SelectionTitle;