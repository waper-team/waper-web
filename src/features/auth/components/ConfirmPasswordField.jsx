import { FiLock } from "react-icons/fi";
import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from "react-icons/ai";

function ConfirmPasswordField({
                                  confirmPassword,
                                  setConfirmPassword,
                                  showPassword,
                                  setShowPassword,
                              }) {
    return (
        <div className="mb-8">
            <label
                className="
          mb-3
          block
          text-lg
          font-bold
          text-[#001e62]
        "
            >
                Confirmar contraseña
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
                <FiLock
                    className="
            mr-4
            text-2xl
            text-gray-400
          "
                />

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirma tu contraseña"
                    value={confirmPassword}
                    onChange={(e) =>
                        setConfirmPassword(e.target.value)
                    }
                    className="
            w-full
            text-lg
            outline-none
          "
                    required
                />

                <button
                    type="button"
                    onClick={() =>
                        setShowPassword(!showPassword)
                    }
                >
                    {showPassword ? (
                        <AiOutlineEyeInvisible
                            className="
                text-2xl
                text-gray-400
              "
                        />
                    ) : (
                        <AiOutlineEye
                            className="
                text-2xl
                text-gray-400
              "
                        />
                    )}
                </button>
            </div>
        </div>
    );
}

export default ConfirmPasswordField;