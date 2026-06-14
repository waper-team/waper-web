function LoginRedirect({ navigate }) {
    return (
        <div className="mt-10 text-center">
      <span
          className="
          text-lg
          text-gray-500
        "
      >
        ¿Ya tienes cuenta?
      </span>

            <button
                type="button"
                onClick={() =>
                    navigate("/login")
                }
                className="
          ml-2
          text-lg
          font-bold
          text-blue-600
          transition-all
          hover:text-blue-800
        "
            >
                Inicia sesión
            </button>
        </div>
    );
}

export default LoginRedirect;