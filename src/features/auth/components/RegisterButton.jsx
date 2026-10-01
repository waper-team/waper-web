function RegisterButton({ loading }) {
    return (
        <button
            type="submit"
            disabled={loading}
            className="
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-blue-700
        to-blue-500
        py-5
        text-xl
        font-bold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-2xl
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
        >
            {loading
                ? "Creando cuenta..."
                : "Crear cuenta"}
        </button>
    );
}

export default RegisterButton;