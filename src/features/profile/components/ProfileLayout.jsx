function ProfileLayout({ children }) {
    return (
        <div
            className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f5f7ff]
        pt-10
        pb-28
      "
        >
            {children}
        </div>
    );
}

export default ProfileLayout;