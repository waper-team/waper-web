// Componente para mostrar publicaciones recientes del usuario
import post1 from "../assets/post1.jpg"
import post2 from "../assets/post2.jpg"

function Posts() {

  // Lista de publicaciones
  const posts = [
    {
      image: post1,
      title: "Fútbol de tarde...",
      interest: "Fútbol"
    },
    {
      image: post2,
      title: "Partidito hoy ⚽🔥",
      interest: "Sports"
    }
  ]

  return (

    // Contenedor principal
    <div
      className="
        mt-10
        w-full
        px-6
      "
    >

      {/* Header */}
      <div
        className="
          mb-5
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
          Recent Posts
        </h3>

      </div>

      {/* Grid de publicaciones */}
      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >

        {/* Render dinámico */}
        {posts.map((post, index) => (

          <div
            key={index}

            className="
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-lg
            "
          >

            {/* Imagen */}
            <div
              className="
                relative
                h-[220px]
                w-full
                overflow-hidden
              "
            >

              <img
                src={post.image}
                alt={post.title}

                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* Overlay oscuro */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                "
              />

              {/* Interest badge */}
              <div
                className="
                  absolute
                  left-3
                  top-3
                  rounded-full
                  bg-[#0037ff]
                  px-3
                  py-1
                  text-[11px]
                  font-semibold
                  text-white
                "
              >
                {post.interest}
              </div>

            </div>

            {/* Info */}
            <div
              className="
                p-4
              "
            >

              <p
                className="
                  text-[14px]
                  font-semibold
                  text-[#00135c]
                "
              >
                {post.title}
              </p>

            </div>

          </div>

        ))}

        {/* Card Explore */}
        <button
          className="
            flex
            h-[290px]
            flex-col
            items-center
            justify-center
            rounded-[28px]
            bg-[#0037ff]
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >

          <div
            className="
              mb-4
              text-[45px]
            "
          >
            ✨
          </div>

          <h3
            className="
              text-[22px]
              font-black
            "
          >
            Explore
          </h3>

          <p
            className="
              mt-2
              max-w-[120px]
              text-center
              text-[13px]
              text-white/70
            "
          >
            Descubrí nuevas personas e intereses
          </p>

        </button>

      </div>

    </div>
  )
}

export default Posts