function RegisterRedirect({ navigate }) {
    return (
        <div className="mt-24 text-center">
      <span
          className="
          text-lg
          text-gray-500
        "
      >
        ¿No tienes cuenta?
      </span>

            <button
                type="button"
                onClick={() =>
                    navigate("/register")
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
                Regístrate
            </button>
        </div>
    );
}

export default RegisterRedirect;