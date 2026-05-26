function Interests() {

  // Lista de intereses visibles en el perfil
  const interests = [
    {
      name: "Nadar",
      icon: "🏊"
    },
    {
      name: "Básket",
      icon: "🏀"
    },
    {
      name: "Fútbol",
      icon: "⚽"
    }
  ]

  return (

    // Sección de intereses y hobbies
    <div
      className="
        mt-10
        w-full
        px-6
      "
    >

      {/* Título */}
      <div
        className="
          mb-4
          flex
          items-center
          justify-between
        "
      >

        <h3
          className="
            text-[20px]
            font-bold
            text-[#00135c]
          "
        >
          Interests & Hobbies
        </h3>

      </div>

      {/* Contenedor de intereses */}
      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >

        {interests.map((interest, index) => (

          <div
            key={index}

            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-3
              shadow-md
            "
          >

            {/* Ícono */}
            <span
              className="
                text-[16px]
              "
            >
              {interest.icon}
            </span>

            {/* Nombre */}
            <span
              className="
                text-[14px]
                font-semibold
                text-[#00135c]
              "
            >
              {interest.name}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Interests