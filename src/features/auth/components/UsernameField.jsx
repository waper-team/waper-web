import { FiUser } from "react-icons/fi";

function UsernameField({
                           username,
                           setUsername,
                       }) {
    return (
        <div className="mb-5">
            <label
                className="
          mb-3
          block
          text-lg
          font-bold
          text-[#001e62]
        "
            >
                Nombre de usuario
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
                <FiUser
                    className="
            mr-4
            text-2xl
            text-gray-400
          "
                />

                <input
                    type="text"
                    placeholder="Ingresa tu usuario"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
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

export default UsernameField;