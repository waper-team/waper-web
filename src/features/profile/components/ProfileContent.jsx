function ProfileContent({ children }) {
    return (
        <div
            className="
        relative
        z-10
        mt-6
        flex
        flex-col
        items-center
      "
        >
            {children}
        </div>
    );
}

export default ProfileContent;