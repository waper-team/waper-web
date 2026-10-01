function Stats({ profile } = {}) {
  const friendsCount = profile?.friendsCount ?? 650;
  const streakCount = profile?.streakCount ?? 16;

  return (

    // Sección principal de estadísticas
    <div
      className="
        mt-8
        w-full
        px-6
      "
    >

      {/* Grid de estadísticas */}
      <div
        className="
          grid
          grid-cols-2
          gap-3
        "
      >

        {/* Card Friends */}
        <div
          className="
            flex
            h-[100px]
            flex-col
            justify-between
            rounded-[24px]
            bg-white
            p-4
            shadow-md
          "
        >

          {/* Ícono */}
          <div
            className="
              flex
              h-[32px]
              w-[32px]
              items-center
              justify-center
              rounded-full
              bg-[#edf3ff]
              text-[15px]
            "
          >
            👥
          </div>

          {/* Info */}
          <div>

            <h2
              className="
                text-[24px]
                font-black
                leading-none
                text-[#00135c]
              "
            >
              {friendsCount}
            </h2>

            <p
              className="
                mt-1
                text-[13px]
                font-medium
                text-gray-400
              "
            >
              Friends
            </p>

          </div>

        </div>

        {/* Card Racha */}
        <div
          className="
            flex
            h-[100px]
            flex-col
            justify-between
            rounded-[24px]
            bg-[#0037ff]
            p-4
            text-white
            shadow-lg
          "
        >

          {/* Ícono */}
          <div
            className="
              flex
              h-[32px]
              w-[32px]
              items-center
              justify-center
              rounded-full
              bg-white/20
              text-[15px]
            "
          >
            🔥
          </div>

          {/* Info */}
          <div>

            <h2
              className="
                text-[24px]
                font-black
                leading-none
              "
            >
              {streakCount}
            </h2>

            <p
              className="
                mt-1
                text-[13px]
                font-medium
                text-white/70
              "
            >
              Racha
            </p>

          </div>

        </div>

      </div>

      {/* Botón seguir */}
      <button
        className="
          mt-4
          w-full
          rounded-[22px]
          bg-[#0037ff]
          py-4
          text-[15px]
          font-bold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-[1.01]
        "
      >
        Seguir
      </button>

    </div>
  )
}

export default Stats
