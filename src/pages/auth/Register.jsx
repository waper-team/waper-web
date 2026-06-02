import { useState } from "react"

import { useNavigate } from "react-router-dom"

import logo from "../../assets/logowaper.jpeg"

import {
  FiMail,
  FiLock,
  FiUser
} from "react-icons/fi"

import {
  AiOutlineEye,
  AiOutlineEyeInvisible
} from "react-icons/ai"

function Register() {

  const [showPassword, setShowPassword] = useState(false)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    setError("")

    if (password !== confirmPassword) {

      setError("Las contraseñas no coinciden")
      return

    }

    setLoading(true)

    try {

      console.log({
        username,
        email,
        password
      })

      setTimeout(() => {

        setLoading(false)

      }, 1500)

    } catch (err) {

      setError("Ocurrió un error")
      setLoading(false)

    }

  }

  return (

    <div
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#f5f7ff]
        px-6
      "
    >

      {/* Decoraciones */}
      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#0037ff]
        "
      />

      <div
        className="
          absolute
          right-[-100px]
          bottom-[-100px]
          h-[220px]
          w-[220px]
          rounded-full
          border
          border-gray-200
          opacity-40
        "
      />

      <form
        onSubmit={handleSubmit}
        className="
          relative
          z-10
          w-full
          max-w-md
        "
      >

        {/* Logo */}
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

        {/* Título */}
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

        {/* Error */}
        {
          error && (

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

          )
        }

        {/* Username */}
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

        {/* Email */}
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

        {/* Password */}
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
            Contraseña
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
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
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

              {
                showPassword
                  ? (
                    <AiOutlineEyeInvisible
                      className="
                        text-2xl
                        text-gray-400
                      "
                    />
                  )
                  : (
                    <AiOutlineEye
                      className="
                        text-2xl
                        text-gray-400
                      "
                    />
                  )
              }

            </button>

          </div>

        </div>

        {/* Confirm Password */}
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

              {
                showPassword
                  ? (
                    <AiOutlineEyeInvisible
                      className="
                        text-2xl
                        text-gray-400
                      "
                    />
                  )
                  : (
                    <AiOutlineEye
                      className="
                        text-2xl
                        text-gray-400
                      "
                    />
                  )
              }

            </button>

          </div>

        </div>

        {/* Botón */}
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

          {
            loading
              ? "Creando cuenta..."
              : "Crear cuenta"
          }

        </button>

        {/* Login */}
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
            onClick={() => navigate("/login")}
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

      </form>

    </div>
  )
}

export default Register