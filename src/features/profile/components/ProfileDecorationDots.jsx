function ProfileDecorationDots() {
    return (
        <div
            className="
        absolute
        left-10
        top-52
        grid
        grid-cols-4
        gap-3
        opacity-60
      "
        >
            {Array.from({ length: 16 }).map((_, index) => (
                <div
                    key={index}
                    className="
            h-2
            w-2
            rounded-full
            bg-blue-500
          "
                />
            ))}
        </div>
    );
}

export default ProfileDecorationDots;