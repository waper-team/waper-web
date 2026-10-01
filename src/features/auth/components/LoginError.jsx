function LoginError({ error }) {
    if (!error) return null;

    return (
        <div
            className="
        mb-6
        rounded-2xl
        bg-red-100
        px-4
        py-3
        text-center
        font-medium
        text-red-600
      "
        >
            {error}
        </div>
    );
}

export default LoginError;