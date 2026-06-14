function UserInfo() {
  return (

    // Información principal del usuario
    <div
      className="
        mt-5
        flex
        flex-col
        items-center
        text-center
      "
    >

      {/* Carrera / categoría */}
      <p
        className="
          text-[14px]
          font-medium
          tracking-wide
          text-[#5c6a9a]
        "
      >
        Ingeniería en sistemas
      </p>

      {/* Nombre principal */}
      <h2
        className="
          mt-1
          text-[34px]
          font-black
          leading-none
          text-[#00135c]
        "
      >
        El Duko
      </h2>

      {/* Username */}
      <p
        className="
          mt-2
          text-[15px]
          font-medium
          text-gray-400
        "
      >
        @duki_26
      </p>

      {/* Descripción */}
      <p
        className="
          mt-4
          max-w-[280px]
          text-[14px]
          leading-relaxed
          text-[#6b7280]
        "
      >
        Conectando personas através de intereses reales,
        música y momentos compartidos.
      </p>

    </div>
  )
}

export default UserInfo