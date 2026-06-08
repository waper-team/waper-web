import { useState } from "react"

import { useNavigate } from "react-router-dom"

import logo from "../../assets/logowaper.jpeg"

import {
  FiMail,
  FiLock
} from "react-icons/fi"

import {
  AiOutlineEye,
  AiOutlineEyeInvisible
} from "react-icons/ai"

import { loginProfile } from "../../services/profileService"

function Login() {

  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    setError("")
    setLoading(true)

    try {

      // Simulación temporal
      const profile = await loginProfile({ email })

      // Simula espera backend
      navigate(`/profile/${profile.id}`)

    } catch {

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

        {/* Título */}
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

        {/* Email */}
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

        {/* Password */}
        <div className="mb-3">

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

        {/* Forgot password */}
        <div className="mb-10 flex justify-end">

          <button
            type="button"
            className="
              font-semibold
              text-blue-600
              transition-all
              hover:text-blue-800
            "
          >
            ¿Olvidaste tu contraseña?
          </button>

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
              ? "Iniciando sesión..."
              : "Iniciar sesión"
          }

        </button>

        {/* Register */}
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
            onClick={() => navigate("/register")}
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

      </form>

    </div>
  )
}

export default Login
