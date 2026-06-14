import { FiMail } from "react-icons/fi";

function EmailField({ email, setEmail }) {
    return (
        <div className="mb-7">
            <label
                className="
          mb-3
          block
          text-lg
          font-bold
          text-[#001e62]
        "
            >
                Correo electrónico
            </label>

            <div
                className="
          flex
          items-center
          rounded-2xl
          border
          border-gray-200
          bg-white
          px-5
          py-5
          transition-all
          duration-300
          focus-within:border-blue-500
          focus-within:ring-2
          focus-within:ring-blue-200
        "
            >
                <FiMail
                    className="
            mr-4
            text-2xl
            text-gray-400
          "
                />

                <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="
            w-full
            text-lg
            outline-none
          "
                    required
                />
            </div>
        </div>
    );
}

export default EmailField;