function AuthLayout({ children }) {
    return (
        <div
            className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#f5f7ff]
        px-6
      "
        >
            <div
                className="
          absolute
          left-[-120px]
          top-[-120px]
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#0037ff]
        "
            />

            <div
                className="
          absolute
          right-[-100px]
          bottom-[-100px]
          h-[220px]
          w-[220px]
          rounded-full
          border
          border-gray-200
          opacity-40
        "
            />

            {children}
        </div>
    );
}

export default AuthLayout;