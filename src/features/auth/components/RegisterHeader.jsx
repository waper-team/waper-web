import logo from "../../../assets/images/logowaper.jpeg";

function RegisterHeader() {
    return (
        <>
            <div className="mb-8 flex justify-center">
                <img
                    src={logo}
                    alt="Waper Logo"
                    className="
            h-32
            w-32
            rounded-full
            object-cover
            shadow-md
          "
                />
            </div>

            <div className="mb-10 text-center">
                <h1
                    className="
            text-[38px]
            font-black
            leading-tight
            text-[#001e62]
          "
                >
                    Crear cuenta
                </h1>

                <p
                    className="
            mt-3
            text-lg
            text-gray-500
          "
                >
                    Únete a la comunidad Waper
                </p>
            </div>
        </>
    );
}

export default RegisterHeader;