import logo from "../../../assets/images/logowaper.jpeg";
function LoginHeader() {
    return (
        <>
            <div className="mb-10 flex justify-center">
                <img
                    src={logo}
                    alt="Waper Logo"
                    className="
            h-36
            w-36
            rounded-full
            object-cover
            shadow-md
          "
                />
            </div>

            <div className="mb-12 text-center">
                <h1
                    className="
            text-[42px]
            font-black
            leading-tight
            text-[#001e62]
          "
                >
                    ¡Bienvenido de vuelta!
                </h1>

                <p
                    className="
            mt-3
            text-lg
            text-gray-500
          "
                >
                    Inicia sesión para continuar
                </p>
            </div>
        </>
    );
}

export default LoginHeader;